// ==UserScript==
// @name         BAND-MAID YouTube Search (Embedded Data)
// @namespace    https://www.youtube.com/@BANDMAID
// @version      1.7
// @description  Search BAND-MAID songs on YouTube
// @author       DriveTimeBM
// @match        *youtube.com/@BANDMAID*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    const youtubeData = JSON.parse(`[
        {"Title":"BAND-MAID / Thrill (Official Music Video)","Date":"2014-11-20T01:25:24","URL":"https://youtu.be/Uds7g3M-4lQ","Song":"Thrill","Type":"Official Music Video"},
        {"Title":"BAND-MAID / REAL EXISTENCE (Official Music Video)","Date":"2015-06-17T01:02:24","URL":"https://youtu.be/9TkHpvaO09c","Song":"REAL EXISTENCE","Type":"Official Music Video"},
        {"Title":"BAND-MAID / Choose me (Official Music Video)","Date":"2017-06-26T06:06:37","URL":"https://youtu.be/MZIJ2vFxu9Y","Song":"Choose me","Type":"Official Music Video"},
        {"Title":"BAND-MAID / DICE (Official Music Video)","Date":"2018-03-03T22:00:07","URL":"https://youtu.be/ZpAYnVJX9CY","Song":"DICE","Type":"Official Music Video"},
        {"Title":"BAND-MAID / alone (Official Music Video)","Date":"2016-02-14T07:00:02","URL":"https://youtu.be/axF56i4spio","Song":"alone","Type":"Official Music Video"},
        {"Title":"BAND-MAID / the non-fiction days (Official Music Video)","Date":"2016-04-07T23:02:08","URL":"https://youtu.be/ItYN-ri1NPs","Song":"the non-fiction days","Type":"Official Music Video"},
        {"Title":"BAND-MAID / YOLO (Official Music Video)","Date":"2016-10-01T07:29:55","URL":"https://youtu.be/wKZbzcUdY1g","Song":"YOLO","Type":"Official Music Video"},
        {"Title":"BAND-MAID / Don't you tell ME (Official Music Video)","Date":"2017-01-09T06:00:16","URL":"https://youtu.be/tGXzhxXVimY","Song":"Don't you tell ME","Type":"Official Music Video"},
        {"Title":"BAND-MAID / Daydreaming (Official Music Video)","Date":"2017-05-26T08:00:02","URL":"https://youtu.be/RCaeUkrItyY","Song":"Daydreaming","Type":"Official Music Video"},
        {"Title":"BAND-MAID / Don't let me down (Official Music Video)","Date":"2015-10-06T04:59:59","URL":"https://youtu.be/0YGwUhg2XNk","Song":"Don't let me down","Type":"Official Music Video"},
        {"Title":"BAND-MAID / Sense (Official Music Video)","Date":"2021-10-26T11:00:11","URL":"https://youtu.be/BWN6iOFjm9U","Song":"Sense","Type":"Official Music Video"},
        {"Title":"BAND-MAID / DOMINATION (Official Music Video)","Date":"2018-02-07T06:00:01","URL":"https://youtu.be/xmxEuQXTHUU","Song":"DOMINATION","Type":"Official Music Video"},
        {"Title":"BAND-MAID / Different (Official Music Video)","Date":"2020-12-01T08:00:12","URL":"https://youtu.be/edlLhh8qVxM","Song":"Different","Type":"Official Music Video"},
        {"Title":"BAND-MAID / Blooming (Official Music Video)","Date":"2019-12-09T22:00:05","URL":"https://youtu.be/uUt_JBMocKM","Song":"Blooming","Type":"Official Music Video"},
        {"Title":"BAND-MAID / After Life (Official Music Video)","Date":"2021-01-26T10:00:00","URL":"https://youtu.be/2MOvCkCqz_U","Song":"After Life","Type":"Official Music Video"},
        {"Title":"BAND-MAID / Memorable (Official Music Video)","Date":"2023-02-21T10:00:08","URL":"https://youtu.be/DQX8BTTsHHU","Song":"Memorable","Type":"Official Music Video"}
    ]`);

    function createSearchBox() {
        if (document.querySelector('#bm-search-bar')) return;

        const wrapper = document.createElement('div');
        wrapper.id = 'bm-search-bar';
        wrapper.style.cssText = 'position:fixed; top:0; left:0; right:0; background:#fff; border-bottom:1px solid #e0e0e0; padding:8px 16px; z-index:99999; box-shadow:0 2px 4px rgba(0,0,0,0.1);';

        const container = document.createElement('div');
        container.style.cssText = 'max-width:1200px; margin:0 auto; position:relative;';

        const input = document.createElement('input');
        input.id = 'bm-search-input';
        input.type = 'text';
        input.placeholder = 'Search BAND-MAID songs...';
        input.style.cssText = 'width:100%; max-width:400px; padding:8px 12px; border:1px solid #ccc; border-radius:4px; font-size:14px;';

        const results = document.createElement('div');
        results.id = 'bm-results';
        results.style.cssText = 'position:absolute; top:40px; left:16px; width:400px; background:#fff; border:1px solid #ccc; border-radius:4px; max-height:300px; overflow-y:auto; display:none; box-shadow:0 4px 6px rgba(0,0,0,0.1);';

        container.appendChild(input);
        container.appendChild(results);
        wrapper.appendChild(container);
        document.body.insertBefore(wrapper, document.body.firstChild);

        input.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();

            if (!query) {
                results.style.display = 'none';
                results.innerHTML = '';
                return;
            }

            const matches = youtubeData.filter(item => 
                item.Song && item.Song.toLowerCase().includes(query)
            );

            if (!matches.length) {
                results.innerHTML = '<div style="padding:10px; color:#999;">No results</div>';
                results.style.display = 'block';
                return;
            }

            results.innerHTML = matches.slice(0, 10).map(item => `
                <a href="${item.URL}" target="_blank" style="display:block; padding:10px; border-bottom:1px solid #f0f0f0; text-decoration:none; color:#0066cc; font-size:13px;">
                    <div style="font-weight:500; margin-bottom:2px;">${item.Title}</div>
                    <div style="color:#999; font-size:11px;">${item.Type} • ${new Date(item.Date).getFullYear()}</div>
                </a>
            `).join('');
            results.style.display = 'block';
        });

        input.addEventListener('blur', function() {
            setTimeout(() => {
                results.style.display = 'none';
            }, 200);
        });
    }

    if (document.body) {
        createSearchBox();
    } else {
        document.addEventListener('DOMContentLoaded', createSearchBox);
    }
})();