// ==UserScript==
// @name         BAND-MAID YouTube Search (Embedded Data)
// @namespace    https://www.youtube.com/@BANDMAID
// @version      1.4
// @description  Add a song search bar to BAND-MAID YouTube channel (offline)
// @author       DriveTimeBM
// @match        https://www.youtube.com/@BANDMAID*
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const youtubeData = [
        {"Title":"BAND-MAID / Thrill (スリル)  (Official Music Video)","Date":"2014-11-20T01:25:24","URL":"https://youtu.be/Uds7g3M-4lQ","Song":"Thrill","Views":22715884,"Type":"Official Music Video","Duration":"4:11"},
        {"Title":"BAND-MAID / REAL EXISTENCE (Official Music Video)","Date":"2015-06-17T01:02:24","URL":"https://youtu.be/9TkHpvaO09c","Song":"REAL EXISTENCE","Views":16068560,"Type":"Official Music Video","Duration":"4:11"},
        {"Title":"BAND-MAID / Choose me  (Official Music Video)","Date":"2017-06-26T06:06:37","URL":"https://youtu.be/MZIJ2vFxu9Y","Song":"Choose me","Views":15433440,"Type":"Official Music Video","Duration":"3:47"},
        {"Title":"BAND-MAID / DICE (Official Music Video)","Date":"2018-03-03T22:00:07","URL":"https://youtu.be/ZpAYnVJX9CY","Song":"DICE","Views":9712972,"Type":"Official Music Video","Duration":"4:15"},
        {"Title":"BAND-MAID / alone (Official Music Video)","Date":"2016-02-14T07:00:02","URL":"https://youtu.be/axF56i4spio","Song":"alone","Views":7590258,"Type":"Official Music Video","Duration":"3:30"},
        {"Title":"BAND-MAID / the non-fiction days (Official Music Video)","Date":"2016-04-07T23:02:08","URL":"https://youtu.be/ItYN-ri1NPs","Song":"the non-fiction days","Views":7547572,"Type":"Official Music Video","Duration":"4:51"},
        {"Title":"BAND-MAID / YOLO (Official Music Video)","Date":"2016-10-01T07:29:55","URL":"https://youtu.be/wKZbzcUdY1g","Song":"YOLO","Views":5768482,"Type":"Official Music Video","Duration":"4:37"},
        {"Title":"BAND-MAID / Don't you tell ME (Official Music Video)","Date":"2017-01-09T06:00:16","URL":"https://youtu.be/tGXzhxXVimY","Song":"Don't you tell ME","Views":5419612,"Type":"Official Music Video","Duration":"3:35"},
        {"Title":"BAND-MAID / Daydreaming (Official Music Video)","Date":"2017-05-26T08:00:02","URL":"https://youtu.be/RCaeUkrItyY","Song":"Daydreaming","Views":5232468,"Type":"Official Music Video","Duration":"4:09"},
        {"Title":"BAND-MAID / Don't let me down (Official Music Video)","Date":"2015-10-06T04:59:59","URL":"https://youtu.be/0YGwUhg2XNk","Song":"Don't let me down","Views":5115076,"Type":"Official Music Video","Duration":"3:24"},
        {"Title":"BAND-MAID / Sense (Official Music Video)","Date":"2021-10-26T11:00:11","URL":"https://youtu.be/BWN6iOFjm9U","Song":"Sense","Views":4859789,"Type":"Official Music Video","Duration":"3:28"},
        {"Title":"BAND-MAID / DOMINATION (Official Music Video)","Date":"2018-02-07T06:00:01","URL":"https://youtu.be/xmxEuQXTHUU","Song":"DOMINATION","Views":4811809,"Type":"Official Music Video","Duration":"3:59"},
        {"Title":"BAND-MAID / Different (Official Music Video)","Date":"2020-12-01T08:00:12","URL":"https://youtu.be/edlLhh8qVxM","Song":"Different","Views":4508209,"Type":"Official Music Video","Duration":"3:36"},
        {"Title":"BAND-MAID / Blooming (Official Music Video)","Date":"2019-12-09T22:00:05","URL":"https://youtu.be/uUt_JBMocKM","Song":"Blooming","Views":3608705,"Type":"Official Music Video","Duration":"3:57"},
        {"Title":"BAND-MAID / After Life (Official Music Video)","Date":"2021-01-26T10:00:00","URL":"https://youtu.be/2MOvCkCqz_U","Song":"After Life","Views":2977263,"Type":"Official Music Video","Duration":"3:29"},
        {"Title":"BAND-MAID / Memorable (Official Music Video)","Date":"2023-02-21T10:00:08","URL":"https://youtu.be/DQX8BTTsHHU","Song":"Memorable","Views":941034,"Type":"Official Music Video","Duration":"3:35"}
    ];

    function createSearchBox() {
      if (document.querySelector('#bm-search-wrapper')) return;

      const wrapper = document.createElement('div');
      wrapper.id = 'bm-search-wrapper';
      wrapper.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        padding: 10px 16px;
        background: #fff;
        border-bottom: 1px solid #e0e0e0;
        z-index: 99999;
        box-sizing: border-box;
      `;

      const container = document.createElement('div');
      container.style.cssText = `
        max-width: 1280px;
        margin: 0 auto;
        position: relative;
      `;

      const input = document.createElement('input');
      input.type = 'text';
      input.id = 'bm-search-input';
      input.placeholder = 'Search BAND-MAID songs...';
      input.style.cssText = `
        width: 100%;
        max-width: 500px;
        padding: 8px 12px;
        border: 1px solid #ccc;
        border-radius: 20px;
        font-size: 13px;
        background-color: #f0f0f0;
        color: #030303;
        font-family: Roboto, Arial, sans-serif;
      `;

      const resultsBox = document.createElement('div');
      resultsBox.id = 'bm-results-box';
      resultsBox.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        width: 500px;
        background: #fff;
        border: 1px solid #e0e0e0;
        border-top: none;
        border-radius: 0 0 8px 8px;
        max-height: 300px;
        overflow-y: auto;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        z-index: 100000;
        display: none;
      `;

      container.appendChild(input);
      container.appendChild(resultsBox);
      wrapper.appendChild(container);
      document.body.insertBefore(wrapper, document.body.firstChild);

      console.log('[BM Search] Box created and injected');

      // Search functionality
      input.addEventListener('input', function(e) {
        const query = e.target.value.trim().toLowerCase();

        if (!query) {
          resultsBox.style.display = 'none';
          resultsBox.innerHTML = '';
          return;
        }

        const matches = youtubeData.filter(entry =>
          entry.Song && entry.Song.toLowerCase().includes(query)
        );

        if (!matches.length) {
          resultsBox.innerHTML = `<div style="padding:12px 16px; color:#999;">No matches</div>`;
          resultsBox.style.display = 'block';
          return;
        }

        resultsBox.innerHTML = matches
          .slice(0, 10)
          .map(entry => `
            <a href="${entry.URL}" target="_blank" style="
              display: block;
              padding: 10px 16px;
              border-bottom: 1px solid #f0f0f0;
              text-decoration: none;
              color: #0066cc;
              transition: background 0.1s;
            " onmouseover="this.style.background='#f5f5f5'" onmouseout="this.style.background='transparent'">
              <div style="font-weight: 500; margin-bottom: 2px;">${entry.Title}</div>
              <div style="font-size: 11px; color: #999;">${entry.Type} • ${new Date(entry.Date).getFullYear()}</div>
            </a>
          `)
          .join('');
        
        resultsBox.style.display = 'block';
      });

      input.addEventListener('focus', function() {
        if (input.value.trim()) {
          resultsBox.style.display = 'block';
        }
      });

      input.addEventListener('blur', function() {
        setTimeout(() => {
          resultsBox.style.display = 'none';
        }, 200);
      });
    }

    // Inject when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', createSearchBox);
    } else {
      createSearchBox();
    }

    // Also try after a short delay
    setTimeout(createSearchBox, 100);
})();