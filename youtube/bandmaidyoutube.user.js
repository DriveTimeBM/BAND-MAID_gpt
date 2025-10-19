// ==UserScript==
// @name         BAND-MAID YouTube Search
// @namespace    https://www.youtube.com/@BANDMAID
// @version      1.1
// @description  Add a song search bar to BAND-MAID YouTube channel
// @author       DriveTimeBM
// @match        https://www.youtube.com/@BANDMAID*
// @connect      drivetimebm.github.io
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    const YOUTUBE_JSON_URL = 'https://drivetimebm.github.io/BAND-MAID_gpt/youtube/youtube.json';

    let youtubeDataCache = null;

    /**
     * Loads the youtube.json file and caches it.
     */
    async function loadYouTubeData() {
      if (youtubeDataCache) return youtubeDataCache;

      try {
        const res = await fetch(YOUTUBE_JSON_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        youtubeDataCache = await res.json();
        console.info('Loaded YouTube JSON:', youtubeDataCache.length, 'entries');
        return youtubeDataCache;
      } catch (err) {
        console.error('Failed to load youtube.json:', err);
        return [];
      }
    }

    /**
     * Creates and injects the search box into the page.
     */
    async function createSearchBox() {
      // Avoid duplicates
      if (document.querySelector('#bandmaid-youtube-search')) return;

      const wrapper = document.createElement('div');
      wrapper.id = 'bandmaid-youtube-search';
      wrapper.style.cssText = `
        position: fixed;
        top: 65px;
        left: 0;
        right: 0;
        width: 100%;
        padding: 12px 16px;
        background: #fff;
        border-bottom: 1px solid #e0e0e0;
        z-index: 99999;
        box-sizing: border-box;
      `;

      const container = document.createElement('div');
      container.style.cssText = `
        max-width: 1280px;
        margin: 0 auto;
      `;

      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = '🎵 Search BAND-MAID songs...';
      input.style.cssText = `
        width: 100%;
        padding: 10px 16px;
        border: 1px solid #ccc;
        border-radius: 24px;
        font-size: 14px;
        box-sizing: border-box;
        background-color: #f9f9f9;
        color: #030303;
        font-family: Roboto, Arial, sans-serif;
      `;

      input.addEventListener('focus', () => {
        input.style.backgroundColor = '#fff';
        input.style.boxShadow = '0 0 0 2px rgba(0, 0, 0, 0.1)';
        input.style.outline = 'none';
      });

      input.addEventListener('blur', () => {
        input.style.backgroundColor = '#f9f9f9';
        input.style.boxShadow = 'none';
      });

      const resultsBox = document.createElement('div');
      resultsBox.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #fff;
        border: 1px solid #e0e0e0;
        border-top: none;
        border-radius: 0 0 8px 8px;
        max-height: 400px;
        overflow-y: auto;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 100000;
        margin-top: -1px;
      `;

      const inputWrapper = document.createElement('div');
      inputWrapper.style.position = 'relative';
      inputWrapper.appendChild(input);
      inputWrapper.appendChild(resultsBox);

      container.appendChild(inputWrapper);
      wrapper.appendChild(container);
      document.body.insertBefore(wrapper, document.body.firstChild);

      console.log('Search box injected successfully');

      // Search behavior
      input.addEventListener('input', async e => {
        const query = e.target.value.trim().toLowerCase();
        resultsBox.innerHTML = '';

        if (!query) return;

        const data = await loadYouTubeData();
        const matches = data.filter(entry =>
          entry.Song && entry.Song.toLowerCase().includes(query)
        );

        if (!matches.length) {
          resultsBox.innerHTML = `<div style="color:#606060; padding: 12px 16px;">No matches found.</div>`;
          return;
        }

        resultsBox.innerHTML = matches
          .map(entry => {
            const title = entry.Title || '(No Title)';
            const url = entry.URL || '#';
            const type = entry.Type ? `<span style="color:#909090; font-size:12px;">${entry.Type}</span>` : '';
            const date = entry.Date ? new Date(entry.Date).getFullYear() : '';
            
            return `
              <div style="
                padding: 12px 16px;
                border-bottom: 1px solid #e0e0e0;
                cursor: pointer;
                transition: background-color 0.15s;
              " onmouseover="this.style.backgroundColor='#f5f5f5'" onmouseout="this.style.backgroundColor='transparent'">
                <a href="${url}" target="_blank" style="
                  text-decoration: none;
                  color: #0066cc;
                  font-weight: 500;
                  display: block;
                  margin-bottom: 4px;
                ">${title}</a>
                ${type}
                ${date ? `<span style="color:#909090; font-size:12px; margin-left: 8px;">${date}</span>` : ''}
              </div>
            `;
          })
          .join('');
      });
    }

    // Multiple attempts to inject the search box
    createSearchBox();
    setTimeout(createSearchBox, 500);
    setTimeout(createSearchBox, 1500);

    // Also watch for dynamic page changes
    const observer = new MutationObserver(() => {
      if (!document.querySelector('#bandmaid-youtube-search')) {
        createSearchBox();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();