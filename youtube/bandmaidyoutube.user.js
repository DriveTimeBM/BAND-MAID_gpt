// ==UserScript==
// @name         BAND-MAID YouTube Search
// @namespace    https://www.youtube.com/@BANDMAID
// @version      1.0
// @description  Add a song search bar to BAND-MAID YouTube channel
// @author       DriveTimeBM
// @match        https://www.youtube.com/@BANDMAID*
// @connect      drivetimebm.github.io
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
      wrapper.style.padding = '16px 0';
      wrapper.style.margin = '0 auto';
      wrapper.style.maxWidth = '900px';

      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = '🎵 Search BAND-MAID songs...';
      input.style.width = '100%';
      input.style.padding = '12px 14px';
      input.style.border = '1px solid #ccc';
      input.style.borderRadius = '24px';
      input.style.fontSize = '16px';
      input.style.boxSizing = 'border-box';
      input.style.backgroundColor = '#fff';
      input.style.color = '#030303';
      input.style.fontFamily = 'Roboto, Arial, sans-serif';

      input.addEventListener('focus', () => {
        input.style.outline = 'none';
        input.style.boxShadow = '0 0 0 3px rgba(0, 0, 0, 0.1)';
      });

      input.addEventListener('blur', () => {
        input.style.boxShadow = 'none';
      });

      const resultsBox = document.createElement('div');
      resultsBox.style.marginTop = '12px';
      resultsBox.style.fontSize = '14px';
      resultsBox.style.lineHeight = '1.6';
      resultsBox.style.maxHeight = '300px';
      resultsBox.style.overflowY = 'auto';

      wrapper.appendChild(input);
      wrapper.appendChild(resultsBox);

      // Find insertion point - try to place below main channel content
      let insertionPoint = document.querySelector('ytd-channel-tagline-renderer');
      
      if (!insertionPoint) {
        insertionPoint = document.querySelector('yt-formatted-string[role="heading"]');
      }

      if (!insertionPoint) {
        insertionPoint = document.body.firstChild;
      }

      if (insertionPoint && insertionPoint.parentNode) {
        insertionPoint.parentNode.insertBefore(wrapper, insertionPoint.nextSibling);
      } else {
        document.body.insertBefore(wrapper, document.body.firstChild);
      }

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
          resultsBox.innerHTML = `<div style="color:#606060; padding: 8px;">No matches found.</div>`;
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
                padding: 10px 12px;
                border-bottom: 1px solid #e0e0e0;
                transition: background-color 0.2s;
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

    // Wait for page to load and then inject search box
    window.addEventListener('load', async () => {
      // Give the page a moment to fully render
      await new Promise(resolve => setTimeout(resolve, 1000));
      createSearchBox();
    });

    // Also try to inject if DOM is already ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(createSearchBox, 500);
      });
    } else {
      setTimeout(createSearchBox, 500);
    }
})();