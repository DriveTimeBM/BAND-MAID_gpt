// ==UserScript==
// @name         BAND-MAID Channel: Embedded Search Bar (MV3-safe)
// @namespace    https://drivetimebm.github.io/
// @version      1.0.0
// @description  Adds a search bar under the YouTube masthead on https://www.youtube.com/@BANDMAID that searches embedded data by Title and Song.
// @author       Al
// @match        https://www.youtube.com/@BANDMAID*
// @match        https://www.youtube.com/c/BANDMAID*
// @icon         https://www.youtube.com/s/desktop/fe8e3b1b/img/favicon_48.png
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(() => {
    'use strict';
  
    /** =========================
     *  Embedded search dataset
     *  ========================= */
    const DATA = [
      {
        "Title": "BAND-MAID / Thrill (スリル)  (Official Music Video)",
        "Date":  "2014-11-20T01:25:24",
        "URL":   "https://youtu.be/Uds7g3M-4lQ",
        "Song":  "Thrill",
        "Views": 22715884,
        "Type":  "Official Music Video",
        "Duration": "4:11"
      },
      // Add more objects here in the exact same shape:
      // { "Title":"...", "Date":"YYYY-MM-DDTHH:mm:ss", "URL":"https://...", "Song":"...", "Views":123, "Type":"...", "Duration":"M:SS" }
    {
        "Title":  "BAND-MAID / REAL EXISTENCE (Official Music Video)",
        "Date":  "2015-06-17T01:02:24",
        "URL":  "https://youtu.be/9TkHpvaO09c",
        "Song":  "REAL EXISTENCE",
        "Views":  16068560,
        "Type":  "Official Music Video",
        "Duration":  "4:11"
    },
    {
        "Title":  "BAND-MAID / Choose me  (Official Music Video)",
        "Date":  "2017-06-26T06:06:37",
        "URL":  "https://youtu.be/MZIJ2vFxu9Y",
        "Song":  "Choose me",
        "Views":  15433440,
        "Type":  "Official Music Video",
        "Duration":  "3:47"
    }
    ];
  
    /** =========================
     *  Utility helpers
     *  ========================= */
    const byId = (id) => document.getElementById(id);
  
    function waitFor(selector, root = document, timeoutMs = 15000) {
      return new Promise((resolve, reject) => {
        const el = root.querySelector(selector);
        if (el) return resolve(el);
  
        const obs = new MutationObserver(() => {
          const found = root.querySelector(selector);
          if (found) {
            obs.disconnect();
            resolve(found);
          }
        });
  
        obs.observe(root, { childList: true, subtree: true });
  
        if (timeoutMs > 0) {
          setTimeout(() => {
            obs.disconnect();
            reject(new Error(`Timeout waiting for selector: ${selector}`));
          }, timeoutMs);
        }
      });
    }
  
    function debounce(fn, ms) {
      let t;
      return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), ms);
      };
    }
  
    /** =========================
     *  Search logic
     *  ========================= */
    function searchData(query) {
      const q = query.trim().toLowerCase();
      if (!q) return [];
      return DATA.filter(item => {
        const title = (item.Title || '').toLowerCase();
        const song  = (item.Song  || '').toLowerCase();
        return title.includes(q) || song.includes(q);
      });
    }
  
    /** =========================
     *  UI creation
     *  ========================= */
    const CONTAINER_ID = 'bm-embedded-search-container';
    const INPUT_ID     = 'bm-embedded-search-input';
    const RESULTS_ID   = 'bm-embedded-search-results';
  
    function ensureStyles() {
      if (byId('bm-embedded-search-styles')) return;
  
      const style = document.createElement('style');
      style.id = 'bm-embedded-search-styles';
      style.textContent = `
        #${CONTAINER_ID} {
          box-sizing: border-box;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: stretch;
          gap: 12px;
          padding: 10px 16px;
          border-bottom: 1px solid var(--yt-spec-10-percent-layer, rgba(255,255,255,0.1));
          background: var(--yt-spec-base-background, #0f0f0f);
          z-index: 2025;
        }
        #${CONTAINER_ID}.light {
          background: #fff;
          border-color: rgba(0,0,0,0.08);
        }
        #${INPUT_ID} {
          flex: 1 1 720px;
          max-width: 1100px;
          font: inherit;
          padding: 10px 12px;
          border-radius: 18px;
          border: 1px solid var(--yt-spec-10-percent-layer, rgba(255,255,255,0.2));
          background: var(--yt-spec-badge-chip-background, #121212);
          color: var(--yt-spec-text-primary, #fff);
          outline: none;
        }
        #${CONTAINER_ID}.light #${INPUT_ID} {
          background: #fff;
          color: #111;
          border-color: rgba(0,0,0,0.2);
        }
        #${RESULTS_ID} {
          box-sizing: border-box;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 8px 16px 12px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 6px;
        }
        #${RESULTS_ID} a {
          text-decoration: none;
          padding: 8px 10px;
          border-radius: 10px;
          border: 1px solid var(--yt-spec-10-percent-layer, rgba(255,255,255,0.15));
          background: var(--yt-spec-raised-background, #1a1a1a);
          color: var(--yt-spec-text-primary, #fff);
          display: block;
          word-break: break-word;
        }
        #${CONTAINER_ID}.light ~ #${RESULTS_ID} a {
          background: #fafafa;
          color: #111;
          border-color: rgba(0,0,0,0.08);
        }
        #${RESULTS_ID} .meta {
          display: block;
          font-size: 12px;
          opacity: 0.75;
          margin-top: 2px;
        }
        #${RESULTS_ID}.hidden { display: none; }
      `;
      document.head.appendChild(style);
    }
  
    function renderResults(items) {
      let results = byId(RESULTS_ID);
      if (!results) {
        results = document.createElement('div');
        results.id = RESULTS_ID;
        const anchor = document.querySelector('#masthead');
        if (anchor && anchor.parentNode) {
          anchor.parentNode.insertBefore(results, anchor.nextSibling);
        } else {
          document.body.prepend(results);
        }
      }
      results.innerHTML = '';
  
      if (!items.length) {
        results.classList.add('hidden');
        return;
      }
      results.classList.remove('hidden');
  
      const frag = document.createDocumentFragment();
      for (const it of items) {
        const a = document.createElement('a');
        a.href = it.URL;
        a.target = '_blank';
        a.rel = 'noopener';
        a.textContent = it.Title || it.URL || 'Untitled';
        const meta = document.createElement('span');
        meta.className = 'meta';
        const dur  = it.Duration ? ` • ${it.Duration}` : '';
        const type = it.Type ? ` • ${it.Type}` : '';
        const song = it.Song ? ` • Song: ${it.Song}` : '';
        meta.textContent = `${it.Date || ''}${dur}${type}${song}`;
        a.appendChild(meta);
        frag.appendChild(a);
      }
      results.appendChild(frag);
    }
  
    function createOrAttachUI() {
      if (byId(CONTAINER_ID)) return;
  
      ensureStyles();
  
      // Detect theme to adjust light/dark styling
      const preferLight = () => {
        const bg = getComputedStyle(document.documentElement)
          .getPropertyValue('--yt-spec-base-background').trim();
        // crude check; fallback to document color scheme if available
        const scheme = document.documentElement.getAttribute('color-scheme');
        if (scheme === 'light') return true;
        if (bg && (bg.includes('#fff') || bg.includes('255,255,255'))) return true;
        return false;
      };
  
      const container = document.createElement('div');
      container.id = CONTAINER_ID;
      if (preferLight()) container.classList.add('light');
  
      const input = document.createElement('input');
      input.id = INPUT_ID;
      input.type = 'search';
      input.placeholder = 'Search BAND-MAID data (Title or Song)…';
      input.autocomplete = 'off';
      input.spellcheck = false;
      input.setAttribute('aria-label', 'BAND-MAID embedded search');
  
      const onInput = debounce(() => {
        const q = input.value || '';
        const matches = searchData(q);
        renderResults(matches);
      }, 150);
  
      input.addEventListener('input', onInput);
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const matches = searchData(input.value || '');
          renderResults(matches);
        }
      });
  
      container.appendChild(input);
  
      // Insert right under the YouTube masthead to appear below the native search
      const placeContainer = () => {
        const masthead = document.querySelector('#masthead');
        if (masthead && masthead.parentNode) {
          masthead.parentNode.insertBefore(container, masthead.nextSibling);
        } else {
          document.body.prepend(container);
        }
      };
  
      placeContainer();
  
      // Keep the input focused on Ctrl+/ like YouTube does for its search
      window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === '/') {
          e.preventDefault();
          input.focus();
        }
      }, { passive: false });
    }
  
    /** =========================
     *  Initialization & SPA handling
     *  ========================= */
    async function init() {
      try {
        await waitFor('#masthead', document, 10000).catch(() => null);
        createOrAttachUI();
      } catch {
        // No-op on timeout
      }
    }
  
    // Initial run
    init();
  
    // Handle YouTube SPA navigations
    window.addEventListener('yt-navigate-finish', init);
    window.addEventListener('yt-page-data-updated', init);
  
    // Fallback: observe body for major mutations and ensure UI is present
    const rootObserver = new MutationObserver(() => {
      if (!byId(CONTAINER_ID)) createOrAttachUI();
    });
    rootObserver.observe(document.documentElement, { childList: true, subtree: true });
  })();
  