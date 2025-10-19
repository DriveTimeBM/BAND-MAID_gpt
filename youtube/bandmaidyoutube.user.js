// ==UserScript==
// @name         BAND-MAID YouTube Search
// @namespace    https://www.youtube.com/@BANDMAID
// @version      1.5
// @description  Search BAND-MAID songs
// @author       DriveTimeBM
// @match        https://www.youtube.com/@BANDMAID*
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    console.log('[BM Search] Script loaded');

    const data = [
        {Song:"Thrill",Title:"BAND-MAID / Thrill (Official Music Video)",URL:"https://youtu.be/Uds7g3M-4lQ",Type:"Official Music Video",Date:"2014-11-20"},
        {Song:"REAL EXISTENCE",Title:"BAND-MAID / REAL EXISTENCE (Official Music Video)",URL:"https://youtu.be/9TkHpvaO09c",Type:"Official Music Video",Date:"2015-06-17"},
        {Song:"Choose me",Title:"BAND-MAID / Choose me (Official Music Video)",URL:"https://youtu.be/MZIJ2vFxu9Y",Type:"Official Music Video",Date:"2017-06-26"},
        {Song:"DICE",Title:"BAND-MAID / DICE (Official Music Video)",URL:"https://youtu.be/ZpAYnVJX9CY",Type:"Official Music Video",Date:"2018-03-03"},
        {Song:"alone",Title:"BAND-MAID / alone (Official Music Video)",URL:"https://youtu.be/axF56i4spio",Type:"Official Music Video",Date:"2016-02-14"},
        {Song:"the non-fiction days",Title:"BAND-MAID / the non-fiction days (Official Music Video)",URL:"https://youtu.be/ItYN-ri1NPs",Type:"Official Music Video",Date:"2016-04-07"},
        {Song:"YOLO",Title:"BAND-MAID / YOLO (Official Music Video)",URL:"https://youtu.be/wKZbzcUdY1g",Type:"Official Music Video",Date:"2016-10-01"},
        {Song:"Don't you tell ME",Title:"BAND-MAID / Don't you tell ME (Official Music Video)",URL:"https://youtu.be/tGXzhxXVimY",Type:"Official Music Video",Date:"2017-01-09"},
        {Song:"Daydreaming",Title:"BAND-MAID / Daydreaming (Official Music Video)",URL:"https://youtu.be/RCaeUkrItyY",Type:"Official Music Video",Date:"2017-05-26"},
        {Song:"Don't let me down",Title:"BAND-MAID / Don't let me down (Official Music Video)",URL:"https://youtu.be/0YGwUhg2XNk",Type:"Official Music Video",Date:"2015-10-06"},
        {Song:"Sense",Title:"BAND-MAID / Sense (Official Music Video)",URL:"https://youtu.be/BWN6iOFjm9U",Type:"Official Music Video",Date:"2021-10-26"},
        {Song:"DOMINATION",Title:"BAND-MAID / DOMINATION (Official Music Video)",URL:"https://youtu.be/xmxEuQXTHUU",Type:"Official Music Video",Date:"2018-02-07"},
        {Song:"Different",Title:"BAND-MAID / Different (Official Music Video)",URL:"https://youtu.be/edlLhh8qVxM",Type:"Official Music Video",Date:"2020-12-01"},
        {Song:"Blooming",Title:"BAND-MAID / Blooming (Official Music Video)",URL:"https://youtu.be/uUt_JBMocKM",Type:"Official Music Video",Date:"2019-12-09"},
        {Song:"After Life",Title:"BAND-MAID / After Life (Official Music Video)",URL:"https://youtu.be/2MOvCkCqz_U",Type:"Official Music Video",Date:"2021-01-26"}
    ];

    function init() {
        console.log('[BM Search] Initializing...');
        
        const wrapper = document.createElement('div');
        wrapper.id = 'bm-search-bar';
        wrapper.innerHTML = `
            <div style="position:fixed; top:0; left:0; right:0; background:#fff; border-bottom:1px solid #e0e0e0; padding:8px 16px; z-index:99999; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
                <div style="max-width:1200px; margin:0 auto;">
                    <input id="bm-search-input" type="text" placeholder="Search BAND-MAID songs..." 
                        style="width:100%; max-width:400px; padding:8px 12px; border:1px solid #ccc; border-radius:4px; font-size:14px;">
                    <div id="bm-results" style="position:absolute; top:40px; left:16px; width:400px; background:#fff; border:1px solid #ccc; border-radius:4px; max-height:300px; overflow-y:auto; display:none; box-shadow:0 4px 6px rgba(0,0,0,0.1);"></div>
                </div>
            </div>
        `;
        
        document.body.insertBefore(wrapper, document.body.firstChild);
        console.log('[BM Search] Bar inserted');

        const input = document.getElementById('bm-search-input');
        const results = document.getElementById('bm-results');

        input.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            
            if (!query) {
                results.style.display = 'none';
                return;
            }

            const matches = data.filter(item => item.Song.toLowerCase().includes(query));
            
            if (!matches.length) {
                results.innerHTML = '<div style="padding:10px; color:#999;">No results</div>';
                results.style.display = 'block';
                return;
            }

            results.innerHTML = matches.map(item => `
                <a href="${item.URL}" target="_blank" style="display:block; padding:10px; border-bottom:1px solid #f0f0f0; text-decoration:none; color:#0066cc;">
                    ${item.Title}
                </a>
            `).join('');
            results.style.display = 'block';
        });

        input.addEventListener('blur', function() {
            setTimeout(() => results.style.display = 'none', 200);
        });
    }

    if (document.body) {
        init();
    } else {
        document.addEventListener('DOMContentLoaded', init);
    }
})();