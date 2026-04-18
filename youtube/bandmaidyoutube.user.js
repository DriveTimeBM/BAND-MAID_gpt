// ==UserScript==
// @name         BAND-MAID Channel: Embedded Search Bar
// @namespace    https://drivetimebm.github.io/
// @version      1.0.1
// @description  Adds a search bar under the YouTube masthead on https://www.youtube.com/@BANDMAID that searches embedded data by Title and Song.
// @author       Al
// @match        https://www.youtube.com/@BANDMAID*
// @match        https://www.youtube.com/c/BANDMAID*
// @match        https://www.youtube.com/channel/UCJToUvYrmkmTCR-bluEaQfA*
// @icon         https://www.youtube.com/s/desktop/fe8e3b1b/img/favicon_48.png
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(() => {
    'use strict';
  
    // with JSON describing all the YouTube videos
    const DATA = [

    {
        "Title":  "BAND-MAID / Thrill (スリル)  (Official Music Video)",
        "Date":  "2014-11-20T01:25:24",
        "URL":  "https://youtu.be/Uds7g3M-4lQ",
        "VideoId":  "Uds7g3M-4lQ",
        "Song":  "Thrill",
        "Views":  23316361,
        "ViewsDelta":  3477,
        "Type":  "Official Music Video",
        "Duration":  "4:11",
        "Image":  "https://img.youtube.com/vi/Uds7g3M-4lQ/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / REAL EXISTENCE (Official Music Video)",
        "Date":  "2015-06-17T01:02:24",
        "URL":  "https://youtu.be/9TkHpvaO09c",
        "VideoId":  "9TkHpvaO09c",
        "Song":  "REAL EXISTENCE",
        "Views":  16250658,
        "ViewsDelta":  1122,
        "Type":  "Official Music Video",
        "Duration":  "4:11",
        "Image":  "https://img.youtube.com/vi/9TkHpvaO09c/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Choose me  (Official Music Video)",
        "Date":  "2017-06-26T06:06:37",
        "URL":  "https://youtu.be/MZIJ2vFxu9Y",
        "VideoId":  "MZIJ2vFxu9Y",
        "Song":  "Choose me",
        "Views":  15933337,
        "ViewsDelta":  2841,
        "Type":  "Official Music Video",
        "Duration":  "3:47",
        "Image":  "https://img.youtube.com/vi/MZIJ2vFxu9Y/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / DICE (Official Music Video)",
        "Date":  "2018-03-03T22:00:07",
        "URL":  "https://youtu.be/ZpAYnVJX9CY",
        "VideoId":  "ZpAYnVJX9CY",
        "Song":  "DICE",
        "Views":  10028732,
        "ViewsDelta":  1592,
        "Type":  "Official Music Video",
        "Duration":  "4:15",
        "Image":  "https://img.youtube.com/vi/ZpAYnVJX9CY/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / alone (Official Music Video)",
        "Date":  "2016-02-14T07:00:02",
        "URL":  "https://youtu.be/axF56i4spio",
        "VideoId":  "axF56i4spio",
        "Song":  "alone",
        "Views":  7724067,
        "ViewsDelta":  792,
        "Type":  "Official Music Video",
        "Duration":  "3:30",
        "Image":  "https://img.youtube.com/vi/axF56i4spio/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / the non-fiction days (Official Music Video)",
        "Date":  "2016-04-07T23:02:08",
        "URL":  "https://youtu.be/ItYN-ri1NPs",
        "VideoId":  "ItYN-ri1NPs",
        "Song":  "the non-fiction days",
        "Views":  7695584,
        "ViewsDelta":  724,
        "Type":  "Official Music Video",
        "Duration":  "4:51",
        "Image":  "https://img.youtube.com/vi/ItYN-ri1NPs/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / YOLO (Official Music Video)",
        "Date":  "2016-10-01T07:29:55",
        "URL":  "https://youtu.be/wKZbzcUdY1g",
        "VideoId":  "wKZbzcUdY1g",
        "Song":  "YOLO",
        "Views":  5894253,
        "ViewsDelta":  673,
        "Type":  "Official Music Video",
        "Duration":  "4:37",
        "Image":  "https://img.youtube.com/vi/wKZbzcUdY1g/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Don\u0027t you tell ME (Official Music Video)",
        "Date":  "2017-01-09T06:00:16",
        "URL":  "https://youtu.be/tGXzhxXVimY",
        "VideoId":  "tGXzhxXVimY",
        "Song":  "Don\u0027t you tell ME",
        "Views":  5478648,
        "ViewsDelta":  406,
        "Type":  "Official Music Video",
        "Duration":  "3:35",
        "Image":  "https://img.youtube.com/vi/tGXzhxXVimY/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Daydreaming (Official Music Video)",
        "Date":  "2017-05-26T08:00:02",
        "URL":  "https://youtu.be/RCaeUkrItyY",
        "VideoId":  "RCaeUkrItyY",
        "Song":  "Daydreaming",
        "Views":  5334623,
        "ViewsDelta":  616,
        "Type":  "Official Music Video",
        "Duration":  "4:09",
        "Image":  "https://img.youtube.com/vi/RCaeUkrItyY/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Don’t let me down (Official Music Video)",
        "Date":  "2015-10-06T04:59:59",
        "URL":  "https://youtu.be/0YGwUhg2XNk",
        "VideoId":  "0YGwUhg2XNk",
        "Song":  "Don\u0027t let me down",
        "Views":  5151280,
        "ViewsDelta":  251,
        "Type":  "Official Music Video",
        "Duration":  "3:24",
        "Image":  "https://img.youtube.com/vi/0YGwUhg2XNk/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Sense (Official Music Video)",
        "Date":  "2021-10-26T11:00:11",
        "URL":  "https://youtu.be/BWN6iOFjm9U",
        "VideoId":  "BWN6iOFjm9U",
        "Song":  "Sense",
        "Views":  5042083,
        "ViewsDelta":  906,
        "Type":  "Official Music Video",
        "Duration":  "3:28",
        "Image":  "https://img.youtube.com/vi/BWN6iOFjm9U/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / DOMINATION  (Official Live Video)",
        "Date":  "2020-03-20T08:00:05",
        "URL":  "https://youtu.be/QbyQCJn6rYg",
        "VideoId":  "QbyQCJn6rYg",
        "Song":  "DOMINATION",
        "Views":  4966911,
        "ViewsDelta":  958,
        "Type":  "Official Live Video",
        "Duration":  "4:58",
        "Image":  "https://img.youtube.com/vi/QbyQCJn6rYg/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / DOMINATION (Official Music Video)",
        "Date":  "2018-02-07T06:00:01",
        "URL":  "https://youtu.be/xmxEuQXTHUU",
        "VideoId":  "xmxEuQXTHUU",
        "Song":  "DOMINATION",
        "Views":  4885895,
        "ViewsDelta":  456,
        "Type":  "Official Music Video",
        "Duration":  "3:59",
        "Image":  "https://img.youtube.com/vi/xmxEuQXTHUU/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Music Video)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-03T11:30:08",
        "URL":  "https://youtu.be/eapNDHKbu0M",
        "VideoId":  "eapNDHKbu0M",
        "Song":  "Ready to Rock",
        "Views":  4816994,
        "ViewsDelta":  2602,
        "Type":  "Official Music Video",
        "Duration":  "3:40",
        "Image":  "https://img.youtube.com/vi/eapNDHKbu0M/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAIKO / secret MAIKO lips (Official Music Video)",
        "Date":  "2018-03-31T11:09:21",
        "URL":  "https://youtu.be/NNHGABwme50",
        "VideoId":  "NNHGABwme50",
        "Song":  "secret My lips",
        "Views":  4721465,
        "ViewsDelta":  442,
        "Type":  "Official Music Video",
        "Duration":  "4:55",
        "Image":  "https://img.youtube.com/vi/NNHGABwme50/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Different (Official Music Video)",
        "Date":  "2020-12-01T08:00:12",
        "URL":  "https://youtu.be/edlLhh8qVxM",
        "VideoId":  "edlLhh8qVxM",
        "Song":  "Different",
        "Views":  4647170,
        "ViewsDelta":  742,
        "Type":  "Official Music Video",
        "Duration":  "3:36",
        "Image":  "https://img.youtube.com/vi/edlLhh8qVxM/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / glory (Official Music Video)",
        "Date":  "2018-11-02T04:00:04",
        "URL":  "https://youtu.be/TAMiLTiXPpU",
        "VideoId":  "TAMiLTiXPpU",
        "Song":  "glory",
        "Views":  4122410,
        "ViewsDelta":  863,
        "Type":  "Official Music Video",
        "Duration":  "4:05",
        "Image":  "https://img.youtube.com/vi/TAMiLTiXPpU/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Unleash!!!!! (Official Music Video)",
        "Date":  "2022-08-09T11:00:12",
        "URL":  "https://youtu.be/7LB_EPS48HE",
        "VideoId":  "7LB_EPS48HE",
        "Song":  "Unleash!!!!!",
        "Views":  4042333,
        "ViewsDelta":  830,
        "Type":  "Official Music Video",
        "Duration":  "3:10",
        "Image":  "https://img.youtube.com/vi/7LB_EPS48HE/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / FREEDOM (Official Live Video)",
        "Date":  "2020-06-30T23:00:03",
        "URL":  "https://youtu.be/FHpuEqMAcDg",
        "VideoId":  "FHpuEqMAcDg",
        "Song":  "FREEDOM",
        "Views":  3998081,
        "ViewsDelta":  1073,
        "Type":  "Official Live Video",
        "Duration":  "4:33",
        "Image":  "https://img.youtube.com/vi/FHpuEqMAcDg/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / onset (Official Live Video)",
        "Date":  "2020-06-23T21:00:07",
        "URL":  "https://youtu.be/mVrN-j_Uc0U",
        "VideoId":  "mVrN-j_Uc0U",
        "Song":  "onset",
        "Views":  3839830,
        "ViewsDelta":  1043,
        "Type":  "Official Live Video",
        "Duration":  "3:59",
        "Image":  "https://img.youtube.com/vi/mVrN-j_Uc0U/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Blooming (Official Music Video)",
        "Date":  "2019-12-09T22:00:05",
        "URL":  "https://youtu.be/uUt_JBMocKM",
        "VideoId":  "uUt_JBMocKM",
        "Song":  "Blooming",
        "Views":  3732303,
        "ViewsDelta":  613,
        "Type":  "Official Music Video",
        "Duration":  "3:57",
        "Image":  "https://img.youtube.com/vi/uUt_JBMocKM/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / secret My lips (Official Music Video)",
        "Date":  "2017-03-25T23:15:48",
        "URL":  "https://youtu.be/1Vuca7V-5Ec",
        "VideoId":  "1Vuca7V-5Ec",
        "Song":  "secret My lips",
        "Views":  3521748,
        "ViewsDelta":  452,
        "Type":  "Official Music Video",
        "Duration":  "4:24",
        "Image":  "https://img.youtube.com/vi/1Vuca7V-5Ec/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Before Yesterday  (Official Music Video)",
        "Date":  "2016-06-24T08:28:24",
        "URL":  "https://youtu.be/Zuj_-z5-06w",
        "VideoId":  "Zuj_-z5-06w",
        "Song":  "Before Yesterday",
        "Views":  3440376,
        "ViewsDelta":  344,
        "Type":  "Official Music Video",
        "Duration":  "4:00",
        "Image":  "https://img.youtube.com/vi/Zuj_-z5-06w/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Bubble (Official Music Video)",
        "Date":  "2019-01-15T05:00:08",
        "URL":  "https://youtu.be/T_PWQtc7zVw",
        "VideoId":  "T_PWQtc7zVw",
        "Song":  "Bubble",
        "Views":  3146533,
        "ViewsDelta":  276,
        "Type":  "Official Music Video",
        "Duration":  "4:12",
        "Image":  "https://img.youtube.com/vi/T_PWQtc7zVw/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Music Video) TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-07-17T11:00:07",
        "URL":  "https://youtu.be/3kMIh0_Wkpk",
        "VideoId":  "3kMIh0_Wkpk",
        "Song":  "What is justice?",
        "Views":  3124637,
        "ViewsDelta":  2560,
        "Type":  "Official Music Video",
        "Duration":  "3:28",
        "Image":  "https://img.youtube.com/vi/3kMIh0_Wkpk/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / After Life (Official Music Video)",
        "Date":  "2021-01-26T10:00:00",
        "URL":  "https://youtu.be/2MOvCkCqz_U",
        "VideoId":  "2MOvCkCqz_U",
        "Song":  "After Life",
        "Views":  3068688,
        "ViewsDelta":  387,
        "Type":  "Official Music Video",
        "Duration":  "3:29",
        "Image":  "https://img.youtube.com/vi/2MOvCkCqz_U/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Warning! (Official Music Video)",
        "Date":  "2021-01-20T10:00:11",
        "URL":  "https://youtu.be/9yD3IqrLtPk",
        "VideoId":  "9yD3IqrLtPk",
        "Song":  "Warning!",
        "Views":  2677057,
        "ViewsDelta":  434,
        "Type":  "Official Music Video",
        "Duration":  "4:19",
        "Image":  "https://img.youtube.com/vi/9yD3IqrLtPk/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Zen (Official Music Video)　MAPPAアニメ「全修。」オープニングテーマソング",
        "Date":  "2025-01-12T10:15:06",
        "URL":  "https://youtu.be/GZ9RRiy43j4",
        "VideoId":  "GZ9RRiy43j4",
        "Song":  "Zen",
        "Views":  2567356,
        "ViewsDelta":  1349,
        "Type":  "Official Music Video",
        "Duration":  "3:38",
        "Image":  "https://img.youtube.com/vi/GZ9RRiy43j4/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / influencer (Official Music Video)",
        "Date":  "2022-09-20T11:00:11",
        "URL":  "https://youtu.be/e_bEf1C0spY",
        "VideoId":  "e_bEf1C0spY",
        "Song":  "influencer",
        "Views":  2510688,
        "ViewsDelta":  480,
        "Type":  "Official Music Video",
        "Duration":  "3:26",
        "Image":  "https://img.youtube.com/vi/e_bEf1C0spY/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Music Video)",
        "Date":  "2024-08-06T11:00:07",
        "URL":  "https://youtu.be/LVl0mcEu1r8",
        "VideoId":  "LVl0mcEu1r8",
        "Song":  "Show Them",
        "Views":  2491976,
        "ViewsDelta":  1358,
        "Type":  "Official Music Video",
        "Duration":  "3:22",
        "Image":  "https://img.youtube.com/vi/LVl0mcEu1r8/sddefault.jpg"
    },
    {
        "Title":  "Ready to Rock",
        "Date":  "2025-04-03T06:00:08",
        "URL":  "https://youtu.be/5uOdE0j4h1E",
        "VideoId":  "5uOdE0j4h1E",
        "Song":  "Ready to Rock",
        "Views":  2470202,
        "ViewsDelta":  4762,
        "Type":  "Audio",
        "Duration":  "3:27",
        "Image":  "https://img.youtube.com/vi/5uOdE0j4h1E/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / start over (Official Music Video)",
        "Date":  "2018-07-03T04:59:28",
        "URL":  "https://youtu.be/iL5sRrSECQ0",
        "VideoId":  "iL5sRrSECQ0",
        "Song":  "start over",
        "Views":  2334924,
        "ViewsDelta":  147,
        "Type":  "Official Music Video",
        "Duration":  "3:36",
        "Image":  "https://img.youtube.com/vi/iL5sRrSECQ0/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock ×「ロックは淑女の嗜みでして」 Special Music Video (Anime Music Video)",
        "Date":  "2025-06-26T11:30:10",
        "URL":  "https://youtu.be/JegJ6cSsUgg",
        "VideoId":  "JegJ6cSsUgg",
        "Song":  "Ready to Rock",
        "Views":  2332245,
        "ViewsDelta":  4807,
        "Type":  "Anime Music Video",
        "Duration":  "3:28",
        "Image":  "https://img.youtube.com/vi/JegJ6cSsUgg/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / 輪廻  \"RINNE\" (Official Music Video)",
        "Date":  "2019-11-05T06:02:18",
        "URL":  "https://youtu.be/CQ9dbEVgZcA",
        "VideoId":  "CQ9dbEVgZcA",
        "Song":  "Rinne",
        "Views":  2278122,
        "ViewsDelta":  242,
        "Type":  "Official Music Video",
        "Duration":  "3:35",
        "Image":  "https://img.youtube.com/vi/CQ9dbEVgZcA/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Play (Official Live Video)",
        "Date":  "2020-08-12T07:00:01",
        "URL":  "https://youtu.be/3LxX_t4vg7U",
        "VideoId":  "3LxX_t4vg7U",
        "Song":  "Play",
        "Views":  2274315,
        "ViewsDelta":  373,
        "Type":  "Official Live Video",
        "Duration":  "4:32",
        "Image":  "https://img.youtube.com/vi/3LxX_t4vg7U/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAIKO / 祇園町 \"Gion-cho\" (Official Music Video)",
        "Date":  "2019-03-31T11:00:11",
        "URL":  "https://youtu.be/umSt7oMUMcs",
        "VideoId":  "umSt7oMUMcs",
        "Song":  "Gion-Cho",
        "Views":  2183776,
        "ViewsDelta":  278,
        "Type":  "Official Music Video",
        "Duration":  "4:05",
        "Image":  "https://img.youtube.com/vi/umSt7oMUMcs/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / from now on (Official Music Video)",
        "Date":  "2022-11-24T22:00:00",
        "URL":  "https://youtu.be/a6ZSvmnkS00",
        "VideoId":  "a6ZSvmnkS00",
        "Song":  "from now on",
        "Views":  2182008,
        "ViewsDelta":  830,
        "Type":  "Official Music Video",
        "Duration":  "3:46",
        "Image":  "https://img.youtube.com/vi/a6ZSvmnkS00/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Shambles (Official Music Video)",
        "Date":  "2023-08-03T11:00:08",
        "URL":  "https://youtu.be/lf0mQOiu8J8",
        "VideoId":  "lf0mQOiu8J8",
        "Song":  "Shambles",
        "Views":  2147035,
        "ViewsDelta":  632,
        "Type":  "Official Music Video",
        "Duration":  "3:31",
        "Image":  "https://img.youtube.com/vi/lf0mQOiu8J8/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / endless Story (Official Music Video)",
        "Date":  "2019-08-07T08:00:00",
        "URL":  "https://youtu.be/5_S4s8jZQ-A",
        "VideoId":  "5_S4s8jZQ-A",
        "Song":  "endless Story",
        "Views":  1977436,
        "ViewsDelta":  331,
        "Type":  "Official Music Video",
        "Duration":  "4:03",
        "Image":  "https://img.youtube.com/vi/5_S4s8jZQ-A/sddefault.jpg"
    },
    {
        "Title":  "Choose me",
        "Date":  "2018-10-02T11:52:28",
        "URL":  "https://youtu.be/Imq5n_Cmd4o",
        "VideoId":  "Imq5n_Cmd4o",
        "Song":  "Choose me",
        "Views":  1965019,
        "ViewsDelta":  2008,
        "Type":  "Audio",
        "Duration":  "3:42",
        "Image":  "https://img.youtube.com/vi/Imq5n_Cmd4o/sddefault.jpg"
    },
    {
        "Title":  "Sense",
        "Date":  "2021-10-26T06:05:58",
        "URL":  "https://youtu.be/ss11rU97V2I",
        "VideoId":  "ss11rU97V2I",
        "Song":  "Sense",
        "Views":  1906196,
        "ViewsDelta":  959,
        "Type":  "Audio",
        "Duration":  "3:25",
        "Image":  "https://img.youtube.com/vi/ss11rU97V2I/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Music Video)",
        "Date":  "2025-10-21T11:00:07",
        "URL":  "https://youtu.be/yzSdgw-tdr0",
        "VideoId":  "yzSdgw-tdr0",
        "Song":  "Present Perfect",
        "Views":  1864673,
        "ViewsDelta":  841,
        "Type":  "Official Music Video",
        "Duration":  "3:53",
        "Image":  "https://img.youtube.com/vi/yzSdgw-tdr0/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / REAL EXISTENCE (Official Live Video)",
        "Date":  "2018-07-03T04:59:46",
        "URL":  "https://youtu.be/-qQnKILR5u0",
        "VideoId":  "-qQnKILR5u0",
        "Song":  "REAL EXISTENCE",
        "Views":  1820278,
        "ViewsDelta":  348,
        "Type":  "Official Live Video",
        "Duration":  "4:13",
        "Image":  "https://img.youtube.com/vi/-qQnKILR5u0/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Protect You (Official Music Video)",
        "Date":  "2024-07-05T11:00:07",
        "URL":  "https://youtu.be/knnw6Mri9gc",
        "VideoId":  "knnw6Mri9gc",
        "Song":  "Protect You",
        "Views":  1813397,
        "ViewsDelta":  547,
        "Type":  "Official Music Video",
        "Duration":  "3:19",
        "Image":  "https://img.youtube.com/vi/knnw6Mri9gc/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Manners (Official Music Video)",
        "Date":  "2021-01-12T10:00:00",
        "URL":  "https://youtu.be/-FWuMx_pkH4",
        "VideoId":  "-FWuMx_pkH4",
        "Song":  "Manners",
        "Views":  1725304,
        "ViewsDelta":  211,
        "Type":  "Official Music Video",
        "Duration":  "3:56",
        "Image":  "https://img.youtube.com/vi/-FWuMx_pkH4/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Choose me (Official Live Video)",
        "Date":  "2020-04-22T07:00:02",
        "URL":  "https://youtu.be/HcqitbXgigU",
        "VideoId":  "HcqitbXgigU",
        "Song":  "Choose me",
        "Views":  1722562,
        "ViewsDelta":  560,
        "Type":  "Official Live Video",
        "Duration":  "4:03",
        "Image":  "https://img.youtube.com/vi/HcqitbXgigU/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Manners, BLACK HOLE (Official Live Video) for J-LOD LIVE2",
        "Date":  "2021-07-26T05:00:16",
        "URL":  "https://youtu.be/iaf94nNSRGE",
        "VideoId":  "iaf94nNSRGE",
        "Song":  "Manners; BLACK HOLE",
        "Views":  1568761,
        "ViewsDelta":  294,
        "Type":  "Official Live Video",
        "Duration":  "7:42",
        "Image":  "https://img.youtube.com/vi/iaf94nNSRGE/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / HATE? (Official Live Video)",
        "Date":  "2024-03-06T10:00:07",
        "URL":  "https://youtu.be/yfORoQIqB3E",
        "VideoId":  "yfORoQIqB3E",
        "Song":  "HATE?",
        "Views":  1493762,
        "ViewsDelta":  1253,
        "Type":  "Official Live Video",
        "Duration":  "5:04",
        "Image":  "https://img.youtube.com/vi/yfORoQIqB3E/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / DICE, Different (Official Live Video) for J-LOD LIVE2",
        "Date":  "2021-10-23T03:00:11",
        "URL":  "https://youtu.be/h_RZwRbI1QI",
        "VideoId":  "h_RZwRbI1QI",
        "Song":  "DICE; Different",
        "Views":  1475267,
        "ViewsDelta":  377,
        "Type":  "Official Live Video",
        "Duration":  "7:43",
        "Image":  "https://img.youtube.com/vi/h_RZwRbI1QI/sddefault.jpg"
    },
    {
        "Title":  "スリル",
        "Date":  "2018-10-02T11:47:18",
        "URL":  "https://youtu.be/46A5e-KzDOc",
        "VideoId":  "46A5e-KzDOc",
        "Song":  "Thrill",
        "Views":  1314035,
        "ViewsDelta":  1063,
        "Type":  "Audio",
        "Duration":  "4:06",
        "Image":  "https://img.youtube.com/vi/46A5e-KzDOc/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Forbidden tale (Official Music Video)",
        "Date":  "2024-10-04T09:00:06",
        "URL":  "https://youtu.be/EiknA3mWivA",
        "VideoId":  "EiknA3mWivA",
        "Song":  "Forbidden tale",
        "Views":  1262153,
        "ViewsDelta":  438,
        "Type":  "Official Music Video",
        "Duration":  "4:36",
        "Image":  "https://img.youtube.com/vi/EiknA3mWivA/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Bestie (Official Music Video)",
        "Date":  "2024-05-01T11:00:07",
        "URL":  "https://youtu.be/gXjNsTS5bEY",
        "VideoId":  "gXjNsTS5bEY",
        "Song":  "Bestie",
        "Views":  1221450,
        "ViewsDelta":  365,
        "Type":  "Official Music Video",
        "Duration":  "3:44",
        "Image":  "https://img.youtube.com/vi/gXjNsTS5bEY/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Puzzle (Official Live Video)",
        "Date":  "2023-04-04T11:00:08",
        "URL":  "https://youtu.be/zvuqmSQEnaA",
        "VideoId":  "zvuqmSQEnaA",
        "Song":  "Puzzle",
        "Views":  1216392,
        "ViewsDelta":  455,
        "Type":  "Official Live Video",
        "Duration":  "4:49",
        "Image":  "https://img.youtube.com/vi/zvuqmSQEnaA/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / about Us (Official Live Video)",
        "Date":  "2021-02-19T03:00:11",
        "URL":  "https://youtu.be/qicgVAxCYV8",
        "VideoId":  "qicgVAxCYV8",
        "Song":  "about Us",
        "Views":  1193492,
        "ViewsDelta":  167,
        "Type":  "Official Live Video",
        "Duration":  "4:44",
        "Image":  "https://img.youtube.com/vi/qicgVAxCYV8/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Dilly-Dally (Official Live Video)",
        "Date":  "2026-04-03T05:00:00",
        "URL":  "https://youtu.be/yTAQ5dCpuiM",
        "VideoId":  "yTAQ5dCpuiM",
        "Song":  "Dilly-Dally",
        "Views":  1180747,
        "ViewsDelta":  3833,
        "Type":  "Official Live Video",
        "Duration":  "4:35",
        "Image":  "https://img.youtube.com/vi/yTAQ5dCpuiM/sddefault.jpg"
    },
    {
        "Title":  "DICE",
        "Date":  "2018-10-02T11:55:46",
        "URL":  "https://youtu.be/HsvWNhIt6RY",
        "VideoId":  "HsvWNhIt6RY",
        "Song":  "DICE",
        "Views":  1072489,
        "ViewsDelta":  879,
        "Type":  "Audio",
        "Duration":  "4:03",
        "Image":  "https://img.youtube.com/vi/HsvWNhIt6RY/sddefault.jpg"
    },
    {
        "Title":  "What is justice?",
        "Date":  "2025-07-17T06:01:36",
        "URL":  "https://youtu.be/vu2D3lzH7Y0",
        "VideoId":  "vu2D3lzH7Y0",
        "Song":  "What is justice?",
        "Views":  1066578,
        "ViewsDelta":  2229,
        "Type":  "Audio",
        "Duration":  "3:23",
        "Image":  "https://img.youtube.com/vi/vu2D3lzH7Y0/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / CROSS (Official Live Video)",
        "Date":  "2020-07-08T05:00:15",
        "URL":  "https://youtu.be/yQn4IMr56zY",
        "VideoId":  "yQn4IMr56zY",
        "Song":  "CROSS",
        "Views":  1004026,
        "ViewsDelta":  317,
        "Type":  "Official Live Video",
        "Duration":  "3:45",
        "Image":  "https://img.youtube.com/vi/yQn4IMr56zY/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Memorable (Official Music Video)",
        "Date":  "2023-02-21T10:00:08",
        "URL":  "https://youtu.be/DQX8BTTsHHU",
        "VideoId":  "DQX8BTTsHHU",
        "Song":  "Memorable",
        "Views":  967587,
        "ViewsDelta":  155,
        "Type":  "Official Music Video",
        "Duration":  "3:35",
        "Image":  "https://img.youtube.com/vi/DQX8BTTsHHU/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Wonderland  (Official Live Video)",
        "Date":  "2020-07-08T05:00:15",
        "URL":  "https://youtu.be/x4hxLeHbqZo",
        "VideoId":  "x4hxLeHbqZo",
        "Song":  "Wonderland",
        "Views":  949463,
        "ViewsDelta":  109,
        "Type":  "Official Live Video",
        "Duration":  "3:55",
        "Image":  "https://img.youtube.com/vi/x4hxLeHbqZo/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Thrill (スリル)  (Official Live Video)",
        "Date":  "2021-05-10T08:00:12",
        "URL":  "https://youtu.be/XwRrpaSbaGk",
        "VideoId":  "XwRrpaSbaGk",
        "Song":  "Thrill",
        "Views":  926550,
        "ViewsDelta":  232,
        "Type":  "Official Live Video",
        "Duration":  "4:10",
        "Image":  "https://img.youtube.com/vi/XwRrpaSbaGk/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / NO GOD (Official Live Video)",
        "Date":  "2021-05-25T23:00:14",
        "URL":  "https://youtu.be/nAdWnIRjGak",
        "VideoId":  "nAdWnIRjGak",
        "Song":  "NO GOD",
        "Views":  917145,
        "ViewsDelta":  200,
        "Type":  "Official Live Video",
        "Duration":  "4:15",
        "Image":  "https://img.youtube.com/vi/nAdWnIRjGak/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / サヨナキドリ \"Sayonakidori\"  Acoustic Ver.  (Official Live Video)",
        "Date":  "2022-07-15T05:00:16",
        "URL":  "https://youtu.be/sGzAQigaL14",
        "VideoId":  "sGzAQigaL14",
        "Song":  "SAYONAKIDORI",
        "Views":  912626,
        "ViewsDelta":  446,
        "Type":  "Official Live Video",
        "Duration":  "5:15",
        "Image":  "https://img.youtube.com/vi/sGzAQigaL14/sddefault.jpg"
    },
    {
        "Title":  "Zen",
        "Date":  "2025-01-12T05:00:33",
        "URL":  "https://youtu.be/XHuBR4nAjrE",
        "VideoId":  "XHuBR4nAjrE",
        "Song":  "Zen",
        "Views":  902971,
        "ViewsDelta":  1237,
        "Type":  "Audio",
        "Duration":  "3:35",
        "Image":  "https://img.youtube.com/vi/XHuBR4nAjrE/sddefault.jpg"
    },
    {
        "Title":  "Unleash!!!!!",
        "Date":  "2022-08-09T06:05:28",
        "URL":  "https://youtu.be/g8aEQ2XR2UI",
        "VideoId":  "g8aEQ2XR2UI",
        "Song":  "Unleash!!!!!",
        "Views":  872375,
        "ViewsDelta":  689,
        "Type":  "Audio",
        "Duration":  "3:10",
        "Image":  "https://img.youtube.com/vi/g8aEQ2XR2UI/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / The Dragon Cries (Official Music Video)",
        "Date":  "2020-02-12T06:00:11",
        "URL":  "https://youtu.be/skEkpogsmE0",
        "VideoId":  "skEkpogsmE0",
        "Song":  "The Dragon Cries",
        "Views":  865513,
        "ViewsDelta":  88,
        "Type":  "Official Music Video",
        "Duration":  "4:17",
        "Image":  "https://img.youtube.com/vi/skEkpogsmE0/sddefault.jpg"
    },
    {
        "Title":  "REAL EXISTENCE",
        "Date":  "2018-10-02T11:48:43",
        "URL":  "https://youtu.be/F0B-h1qWt2E",
        "VideoId":  "F0B-h1qWt2E",
        "Song":  "REAL EXISTENCE",
        "Views":  803569,
        "ViewsDelta":  626,
        "Type":  "Audio",
        "Duration":  "4:13",
        "Image":  "https://img.youtube.com/vi/F0B-h1qWt2E/sddefault.jpg"
    },
    {
        "Title":  "Different",
        "Date":  "2020-12-01T10:04:07",
        "URL":  "https://youtu.be/yJIQKRywEY8",
        "VideoId":  "yJIQKRywEY8",
        "Song":  "Different",
        "Views":  803522,
        "ViewsDelta":  572,
        "Type":  "Audio",
        "Duration":  "3:34",
        "Image":  "https://img.youtube.com/vi/yJIQKRywEY8/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Warning! (Official Live Video)",
        "Date":  "2021-05-01T05:00:15",
        "URL":  "https://youtu.be/Kojg8ULibeY",
        "VideoId":  "Kojg8ULibeY",
        "Song":  "Warning!",
        "Views":  801909,
        "ViewsDelta":  196,
        "Type":  "Official Live Video",
        "Duration":  "4:25",
        "Image":  "https://img.youtube.com/vi/Kojg8ULibeY/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / endless Story (Official Live Video)",
        "Date":  "2024-03-20T07:30:07",
        "URL":  "https://youtu.be/Za1y-RRVd70",
        "VideoId":  "Za1y-RRVd70",
        "Song":  "endless Story",
        "Views":  797129,
        "ViewsDelta":  309,
        "Type":  "Official Live Video",
        "Duration":  "7:00",
        "Image":  "https://img.youtube.com/vi/Za1y-RRVd70/sddefault.jpg"
    },
    {
        "Title":  "After Life",
        "Date":  "2020-12-13T05:02:51",
        "URL":  "https://youtu.be/kkFIoq1TeA0",
        "VideoId":  "kkFIoq1TeA0",
        "Song":  "After Life",
        "Views":  778544,
        "ViewsDelta":  352,
        "Type":  "Audio",
        "Duration":  "3:24",
        "Image":  "https://img.youtube.com/vi/kkFIoq1TeA0/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / カタルシス \"Catharsis\"  Acoustic Ver.  (Official Live Video)",
        "Date":  "2022-01-21T04:00:34",
        "URL":  "https://youtu.be/tx9h41gaNo0",
        "VideoId":  "tx9h41gaNo0",
        "Song":  "Catharsis",
        "Views":  762916,
        "ViewsDelta":  192,
        "Type":  "Official Live Video",
        "Duration":  "3:41",
        "Image":  "https://img.youtube.com/vi/tx9h41gaNo0/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Don\u0027t you tell ME (Official Live Video)",
        "Date":  "2024-02-22T07:00:10",
        "URL":  "https://youtu.be/SOj3qXBhiP4",
        "VideoId":  "SOj3qXBhiP4",
        "Song":  "Don\u0027t you tell ME",
        "Views":  761880,
        "ViewsDelta":  494,
        "Type":  "Official Live Video",
        "Duration":  "4:27",
        "Image":  "https://img.youtube.com/vi/SOj3qXBhiP4/sddefault.jpg"
    },
    {
        "Title":  "influencer",
        "Date":  "2022-09-20T06:08:55",
        "URL":  "https://youtu.be/Ly62PczTrZM",
        "VideoId":  "Ly62PczTrZM",
        "Song":  "influencer",
        "Views":  731774,
        "ViewsDelta":  493,
        "Type":  "Audio",
        "Duration":  "3:24",
        "Image":  "https://img.youtube.com/vi/Ly62PczTrZM/sddefault.jpg"
    },
    {
        "Title":  "DOMINATION",
        "Date":  "2018-10-02T11:55:46",
        "URL":  "https://youtu.be/yo9ZFz4v6Dk",
        "VideoId":  "yo9ZFz4v6Dk",
        "Song":  "DOMINATION",
        "Views":  725818,
        "ViewsDelta":  567,
        "Type":  "Audio",
        "Duration":  "3:52",
        "Image":  "https://img.youtube.com/vi/yo9ZFz4v6Dk/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / What is justice? ×『桃源暗鬼』 Special Music Video (Anime Music Video) - Side of Momotaro -",
        "Date":  "2025-09-26T10:30:58",
        "URL":  "https://youtu.be/zbleEG_5e_4",
        "VideoId":  "zbleEG_5e_4",
        "Song":  "What is justice?",
        "Views":  704791,
        "ViewsDelta":  812,
        "Type":  "Anime Music Video",
        "Duration":  "3:22",
        "Image":  "https://img.youtube.com/vi/zbleEG_5e_4/sddefault.jpg"
    },
    {
        "Title":  "Corallium",
        "Date":  "2021-10-26T06:06:13",
        "URL":  "https://youtu.be/aK9KruOd_Bw",
        "VideoId":  "aK9KruOd_Bw",
        "Song":  "Corallium",
        "Views":  702292,
        "ViewsDelta":  263,
        "Type":  "Audio",
        "Duration":  "3:56",
        "Image":  "https://img.youtube.com/vi/aK9KruOd_Bw/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Live Video) TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-08-19T23:00:11",
        "URL":  "https://youtu.be/5I6VV4HYnW8",
        "VideoId":  "5I6VV4HYnW8",
        "Song":  "Ready to Rock",
        "Views":  698004,
        "ViewsDelta":  1198,
        "Type":  "Official Live Video",
        "Duration":  "4:10",
        "Image":  "https://img.youtube.com/vi/5I6VV4HYnW8/sddefault.jpg"
    },
    {
        "Title":  "Warning!",
        "Date":  "2021-01-12T05:01:55",
        "URL":  "https://youtu.be/swHdFvBN3yI",
        "VideoId":  "swHdFvBN3yI",
        "Song":  "Warning!",
        "Views":  692346,
        "ViewsDelta":  326,
        "Type":  "Audio",
        "Duration":  "4:20",
        "Image":  "https://img.youtube.com/vi/swHdFvBN3yI/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Shambles (Official Live Video)",
        "Date":  "2025-02-18T22:00:32",
        "URL":  "https://youtu.be/RmFYjTJRrQM",
        "VideoId":  "RmFYjTJRrQM",
        "Song":  "Shambles",
        "Views":  649588,
        "ViewsDelta":  704,
        "Type":  "Official Live Video",
        "Duration":  "5:15",
        "Image":  "https://img.youtube.com/vi/RmFYjTJRrQM/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / NO GOD (Official Live Video)",
        "Date":  "2023-04-21T11:00:26",
        "URL":  "https://youtu.be/iLF5zd0yl64",
        "VideoId":  "iLF5zd0yl64",
        "Song":  "NO GOD",
        "Views":  625581,
        "ViewsDelta":  221,
        "Type":  "Official Live Video",
        "Duration":  "4:34",
        "Image":  "https://img.youtube.com/vi/iLF5zd0yl64/sddefault.jpg"
    },
    {
        "Title":  "サヨナキドリ",
        "Date":  "2021-01-12T05:03:14",
        "URL":  "https://youtu.be/6mVaehjAo2k",
        "VideoId":  "6mVaehjAo2k",
        "Song":  "SAYONAKIDORI",
        "Views":  609029,
        "ViewsDelta":  258,
        "Type":  "Audio",
        "Duration":  "4:34",
        "Image":  "https://img.youtube.com/vi/6mVaehjAo2k/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Cover #RtR弾いてみた by KANAMI)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-05-01T05:00:45",
        "URL":  "https://youtu.be/YEFugw_-jwo",
        "VideoId":  "YEFugw_-jwo",
        "Song":  "Ready to Rock",
        "Views":  583087,
        "ViewsDelta":  324,
        "Type":  "Official Cover",
        "Duration":  "0:21",
        "Image":  "https://img.youtube.com/vi/YEFugw_-jwo/sddefault.jpg"
    },
    {
        "Title":  "from now on",
        "Date":  "2022-09-20T06:05:04",
        "URL":  "https://youtu.be/MK0auns521Q",
        "VideoId":  "MK0auns521Q",
        "Song":  "from now on",
        "Views":  569531,
        "ViewsDelta":  385,
        "Type":  "Audio",
        "Duration":  "3:47",
        "Image":  "https://img.youtube.com/vi/MK0auns521Q/sddefault.jpg"
    },
    {
        "Title":  "Blooming",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/3NJf8CSiUZs",
        "VideoId":  "3NJf8CSiUZs",
        "Song":  "Blooming",
        "Views":  558600,
        "ViewsDelta":  603,
        "Type":  "Audio",
        "Duration":  "3:50",
        "Image":  "https://img.youtube.com/vi/3NJf8CSiUZs/sddefault.jpg"
    },
    {
        "Title":  "alone",
        "Date":  "2018-10-02T11:25:59",
        "URL":  "https://youtu.be/mY0ZusGd-Fo",
        "VideoId":  "mY0ZusGd-Fo",
        "Song":  "alone",
        "Views":  551001,
        "ViewsDelta":  532,
        "Type":  "Audio",
        "Duration":  "3:29",
        "Image":  "https://img.youtube.com/vi/mY0ZusGd-Fo/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Live Video)",
        "Date":  "2026-01-30T03:58:33",
        "URL":  "https://youtu.be/2U9AP21jXuk",
        "VideoId":  "2U9AP21jXuk",
        "Song":  "Present Perfect",
        "Views":  550082,
        "ViewsDelta":  848,
        "Type":  "Official Live Video",
        "Duration":  "4:34",
        "Image":  "https://img.youtube.com/vi/2U9AP21jXuk/sddefault.jpg"
    },
    {
        "Title":  "NO GOD",
        "Date":  "2021-01-12T05:02:00",
        "URL":  "https://youtu.be/-ZEF3shvlsU",
        "VideoId":  "-ZEF3shvlsU",
        "Song":  "NO GOD",
        "Views":  548048,
        "ViewsDelta":  263,
        "Type":  "Audio",
        "Duration":  "4:11",
        "Image":  "https://img.youtube.com/vi/-ZEF3shvlsU/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Live Teaser 1)",
        "Date":  "2026-01-30T07:00:00",
        "URL":  "https://youtu.be/o_NTQ7T7HA0",
        "VideoId":  "o_NTQ7T7HA0",
        "Song":  "Present Perfect",
        "Views":  545998,
        "ViewsDelta":  73,
        "Type":  "Official Live Short",
        "Duration":  "0:33",
        "Image":  "https://img.youtube.com/vi/o_NTQ7T7HA0/sddefault.jpg"
    },
    {
        "Title":  "BLACK HOLE",
        "Date":  "2021-01-12T05:01:50",
        "URL":  "https://youtu.be/17M5oBuccOY",
        "VideoId":  "17M5oBuccOY",
        "Song":  "BLACK HOLE",
        "Views":  520204,
        "ViewsDelta":  255,
        "Type":  "Audio",
        "Duration":  "3:06",
        "Image":  "https://img.youtube.com/vi/17M5oBuccOY/sddefault.jpg"
    },
    {
        "Title":  "Don\u0027t you tell ME",
        "Date":  "2018-10-02T11:36:15",
        "URL":  "https://youtu.be/RnyseN3hrKM",
        "VideoId":  "RnyseN3hrKM",
        "Song":  "Don\u0027t you tell ME",
        "Views":  502212,
        "ViewsDelta":  343,
        "Type":  "Audio",
        "Duration":  "3:11",
        "Image":  "https://img.youtube.com/vi/RnyseN3hrKM/sddefault.jpg"
    },
    {
        "Title":  "火花",
        "Date":  "2021-10-26T06:05:47",
        "URL":  "https://youtu.be/uMQicabwqus",
        "VideoId":  "uMQicabwqus",
        "Song":  "Hibana",
        "Views":  500404,
        "ViewsDelta":  186,
        "Type":  "Audio",
        "Duration":  "3:40",
        "Image":  "https://img.youtube.com/vi/uMQicabwqus/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Unleash!!!!! (Official Live Video)",
        "Date":  "2024-02-10T10:00:09",
        "URL":  "https://youtu.be/-i3N-WbZnJM",
        "VideoId":  "-i3N-WbZnJM",
        "Song":  "Unleash!!!!!",
        "Views":  495652,
        "ViewsDelta":  325,
        "Type":  "Official Live Video",
        "Duration":  "3:34",
        "Image":  "https://img.youtube.com/vi/-i3N-WbZnJM/sddefault.jpg"
    },
    {
        "Title":  "Shambles",
        "Date":  "2023-08-03T06:00:28",
        "URL":  "https://youtu.be/_UgN3Tb8Chc",
        "VideoId":  "_UgN3Tb8Chc",
        "Song":  "Shambles",
        "Views":  491699,
        "ViewsDelta":  99,
        "Type":  "Audio",
        "Duration":  "3:22",
        "Image":  "https://img.youtube.com/vi/_UgN3Tb8Chc/sddefault.jpg"
    },
    {
        "Title":  "the non-fiction days",
        "Date":  "2018-10-02T11:26:11",
        "URL":  "https://youtu.be/5N4ymEJu5Vc",
        "VideoId":  "5N4ymEJu5Vc",
        "Song":  "the non-fiction days",
        "Views":  489094,
        "ViewsDelta":  378,
        "Type":  "Audio",
        "Duration":  "4:42",
        "Image":  "https://img.youtube.com/vi/5N4ymEJu5Vc/sddefault.jpg"
    },
    {
        "Title":  "Don\u0027t Let Me Down",
        "Date":  "2018-10-02T11:48:01",
        "URL":  "https://youtu.be/kMF7sECmoP8",
        "VideoId":  "kMF7sECmoP8",
        "Song":  "Don\u0027t let me down",
        "Views":  485037,
        "ViewsDelta":  477,
        "Type":  "Audio",
        "Duration":  "3:20",
        "Image":  "https://img.youtube.com/vi/kMF7sECmoP8/sddefault.jpg"
    },
    {
        "Title":  "本懐",
        "Date":  "2021-01-12T05:01:50",
        "URL":  "https://youtu.be/ND5EeINq3F0",
        "VideoId":  "ND5EeINq3F0",
        "Song":  "HONKAI",
        "Views":  478015,
        "ViewsDelta":  254,
        "Type":  "Audio",
        "Duration":  "3:17",
        "Image":  "https://img.youtube.com/vi/ND5EeINq3F0/sddefault.jpg"
    },
    {
        "Title":  "Puzzle",
        "Date":  "2018-10-02T11:34:32",
        "URL":  "https://youtu.be/tMyNS4YKS6A",
        "VideoId":  "tMyNS4YKS6A",
        "Song":  "Puzzle",
        "Views":  458727,
        "ViewsDelta":  530,
        "Type":  "Audio",
        "Duration":  "4:20",
        "Image":  "https://img.youtube.com/vi/tMyNS4YKS6A/sddefault.jpg"
    },
    {
        "Title":  "H-G-K",
        "Date":  "2021-01-12T05:02:10",
        "URL":  "https://youtu.be/VAFq8-Xnf_8",
        "VideoId":  "VAFq8-Xnf_8",
        "Song":  "H-G-K",
        "Views":  455508,
        "ViewsDelta":  223,
        "Type":  "Audio",
        "Duration":  "3:08",
        "Image":  "https://img.youtube.com/vi/VAFq8-Xnf_8/sddefault.jpg"
    },
    {
        "Title":  "HATE?",
        "Date":  "2022-09-20T06:03:13",
        "URL":  "https://youtu.be/OJnKhVPDe4Q",
        "VideoId":  "OJnKhVPDe4Q",
        "Song":  "HATE?",
        "Views":  445398,
        "ViewsDelta":  279,
        "Type":  "Audio",
        "Duration":  "3:38",
        "Image":  "https://img.youtube.com/vi/OJnKhVPDe4Q/sddefault.jpg"
    },
    {
        "Title":  "glory",
        "Date":  "2018-11-13T00:44:31",
        "URL":  "https://youtu.be/9TwXsbGFYnU",
        "VideoId":  "9TwXsbGFYnU",
        "Song":  "glory",
        "Views":  438642,
        "ViewsDelta":  646,
        "Type":  "Audio",
        "Duration":  "3:37",
        "Image":  "https://img.youtube.com/vi/9TwXsbGFYnU/sddefault.jpg"
    },
    {
        "Title":  "I still seek revenge.",
        "Date":  "2021-01-12T05:01:49",
        "URL":  "https://youtu.be/H0xsEwtKUkQ",
        "VideoId":  "H0xsEwtKUkQ",
        "Song":  "I still seek revenge.",
        "Views":  431601,
        "ViewsDelta":  147,
        "Type":  "Audio",
        "Duration":  "3:03",
        "Image":  "https://img.youtube.com/vi/H0xsEwtKUkQ/sddefault.jpg"
    },
    {
        "Title":  "Manners",
        "Date":  "2021-01-12T05:01:49",
        "URL":  "https://youtu.be/axYjQAMEZrs",
        "VideoId":  "axYjQAMEZrs",
        "Song":  "Manners",
        "Views":  418080,
        "ViewsDelta":  195,
        "Type":  "Audio",
        "Duration":  "3:51",
        "Image":  "https://img.youtube.com/vi/axYjQAMEZrs/sddefault.jpg"
    },
    {
        "Title":  "I\u0027ll",
        "Date":  "2022-09-20T06:03:53",
        "URL":  "https://youtu.be/S2kocC6yMik",
        "VideoId":  "S2kocC6yMik",
        "Song":  "I\u0027ll",
        "Views":  398888,
        "ViewsDelta":  246,
        "Type":  "Audio",
        "Duration":  "4:08",
        "Image":  "https://img.youtube.com/vi/S2kocC6yMik/sddefault.jpg"
    },
    {
        "Title":  "I can\u0027t live without you.",
        "Date":  "2018-10-02T11:56:55",
        "URL":  "https://youtu.be/3C7hDUB0lgk",
        "VideoId":  "3C7hDUB0lgk",
        "Song":  "I can\u0027t live without you.",
        "Views":  396833,
        "ViewsDelta":  289,
        "Type":  "Audio",
        "Duration":  "3:50",
        "Image":  "https://img.youtube.com/vi/3C7hDUB0lgk/sddefault.jpg"
    },
    {
        "Title":  "Daydreaming",
        "Date":  "2018-10-02T11:52:23",
        "URL":  "https://youtu.be/dw4mb6eWHu0",
        "VideoId":  "dw4mb6eWHu0",
        "Song":  "Daydreaming",
        "Views":  381097,
        "ViewsDelta":  277,
        "Type":  "Audio",
        "Duration":  "4:02",
        "Image":  "https://img.youtube.com/vi/dw4mb6eWHu0/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Sense (Official Live Video)",
        "Date":  "2023-03-21T11:00:10",
        "URL":  "https://youtu.be/p5Lo7t9Yzxw",
        "VideoId":  "p5Lo7t9Yzxw",
        "Song":  "Sense",
        "Views":  381069,
        "ViewsDelta":  106,
        "Type":  "Official Live Video",
        "Duration":  "3:34",
        "Image":  "https://img.youtube.com/vi/p5Lo7t9Yzxw/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Live Video #shorts )  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-05-22T09:01:06",
        "URL":  "https://youtu.be/bQDrcpN6B-U",
        "VideoId":  "bQDrcpN6B-U",
        "Song":  "Ready to Rock",
        "Views":  379330,
        "ViewsDelta":  69,
        "Type":  "Official Live Short",
        "Duration":  "0:27",
        "Image":  "https://img.youtube.com/vi/bQDrcpN6B-U/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Don\u0027t you tell ME (Live at TREASURE05X 2024)",
        "Date":  "2024-09-08T01:47:25",
        "URL":  "https://youtu.be/vE7qTycXp3A",
        "VideoId":  "vE7qTycXp3A",
        "Song":  "Don\u0027t you tell ME",
        "Views":  371790,
        "ViewsDelta":  335,
        "Type":  "Official Live Short",
        "Duration":  "0:43",
        "Image":  "https://img.youtube.com/vi/vE7qTycXp3A/sddefault.jpg"
    },
    {
        "Title":  "Giovanni",
        "Date":  "2021-01-12T05:02:01",
        "URL":  "https://youtu.be/0JZkjDhxohM",
        "VideoId":  "0JZkjDhxohM",
        "Song":  "Giovanni",
        "Views":  365855,
        "ViewsDelta":  139,
        "Type":  "Audio",
        "Duration":  "4:18",
        "Image":  "https://img.youtube.com/vi/0JZkjDhxohM/sddefault.jpg"
    },
    {
        "Title":  "DICE",
        "Date":  "2018-02-13T07:01:48",
        "URL":  "https://youtu.be/kJhR3YwIRyc",
        "VideoId":  "kJhR3YwIRyc",
        "Song":  "DICE",
        "Views":  360478,
        "ViewsDelta":  0,
        "Type":  "Audio",
        "Duration":  "4:07",
        "Image":  "https://img.youtube.com/vi/kJhR3YwIRyc/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Magie (Official Live Video)",
        "Date":  "2024-07-20T09:00:07",
        "URL":  "https://youtu.be/obXVrwIwk2k",
        "VideoId":  "obXVrwIwk2k",
        "Song":  "Magie",
        "Views":  359556,
        "ViewsDelta":  199,
        "Type":  "Official Live Video",
        "Duration":  "3:10",
        "Image":  "https://img.youtube.com/vi/obXVrwIwk2k/sddefault.jpg"
    },
    {
        "Title":  "YOLO",
        "Date":  "2018-10-02T11:42:17",
        "URL":  "https://youtu.be/34MAbWeVE64",
        "VideoId":  "34MAbWeVE64",
        "Song":  "YOLO",
        "Views":  358706,
        "ViewsDelta":  310,
        "Type":  "Audio",
        "Duration":  "4:27",
        "Image":  "https://img.youtube.com/vi/34MAbWeVE64/sddefault.jpg"
    },
    {
        "Title":  "Balance",
        "Date":  "2022-09-20T06:03:37",
        "URL":  "https://youtu.be/TwrvDCcYuRE",
        "VideoId":  "TwrvDCcYuRE",
        "Song":  "Balance",
        "Views":  348338,
        "ViewsDelta":  239,
        "Type":  "Audio",
        "Duration":  "3:10",
        "Image":  "https://img.youtube.com/vi/TwrvDCcYuRE/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-03-06T04:09:00",
        "URL":  "https://youtu.be/_jb5rtSUEik",
        "VideoId":  "_jb5rtSUEik",
        "Song":  "Ready to Rock",
        "Views":  345759,
        "ViewsDelta":  11,
        "Type":  "Official Teaser Video",
        "Duration":  "0:19",
        "Image":  "https://img.youtube.com/vi/_jb5rtSUEik/sddefault.jpg"
    },
    {
        "Title":  "SHOW THEM",
        "Date":  "2024-08-06T06:00:19",
        "URL":  "https://youtu.be/OPNcauboxkg",
        "VideoId":  "OPNcauboxkg",
        "Song":  "Show Them",
        "Views":  342214,
        "ViewsDelta":  108,
        "Type":  "Audio",
        "Duration":  "3:15",
        "Image":  "https://img.youtube.com/vi/OPNcauboxkg/sddefault.jpg"
    },
    {
        "Title":  "Rock in me",
        "Date":  "2018-10-02T11:56:14",
        "URL":  "https://youtu.be/f0etXeLBvBw",
        "VideoId":  "f0etXeLBvBw",
        "Song":  "Rock in me",
        "Views":  336279,
        "ViewsDelta":  223,
        "Type":  "Audio",
        "Duration":  "3:22",
        "Image":  "https://img.youtube.com/vi/f0etXeLBvBw/sddefault.jpg"
    },
    {
        "Title":  "CROSS",
        "Date":  "2018-10-02T11:36:17",
        "URL":  "https://youtu.be/W6odZxUQ84s",
        "VideoId":  "W6odZxUQ84s",
        "Song":  "CROSS",
        "Views":  332695,
        "ViewsDelta":  328,
        "Type":  "Audio",
        "Duration":  "3:46",
        "Image":  "https://img.youtube.com/vi/W6odZxUQ84s/sddefault.jpg"
    },
    {
        "Title":  "Why Why Why",
        "Date":  "2021-01-12T05:01:56",
        "URL":  "https://youtu.be/bCHjyiie7MQ",
        "VideoId":  "bCHjyiie7MQ",
        "Song":  "Why Why Why",
        "Views":  332386,
        "ViewsDelta":  110,
        "Type":  "Audio",
        "Duration":  "3:38",
        "Image":  "https://img.youtube.com/vi/bCHjyiie7MQ/sddefault.jpg"
    },
    {
        "Title":  "Protect You",
        "Date":  "2024-07-04T06:01:01",
        "URL":  "https://youtu.be/ww7G7Vlm8hQ",
        "VideoId":  "ww7G7Vlm8hQ",
        "Song":  "Protect You",
        "Views":  331269,
        "ViewsDelta":  83,
        "Type":  "Audio",
        "Duration":  "3:13",
        "Image":  "https://img.youtube.com/vi/ww7G7Vlm8hQ/sddefault.jpg"
    },
    {
        "Title":  "輪廻",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/lWLEvPPYdS4",
        "VideoId":  "lWLEvPPYdS4",
        "Song":  "Rinne",
        "Views":  326640,
        "ViewsDelta":  296,
        "Type":  "Audio",
        "Duration":  "3:28",
        "Image":  "https://img.youtube.com/vi/lWLEvPPYdS4/sddefault.jpg"
    },
    {
        "Title":  "Shambles",
        "Date":  "2024-09-24T06:00:07",
        "URL":  "https://youtu.be/8eu3BQgB9OQ",
        "VideoId":  "8eu3BQgB9OQ",
        "Song":  "Shambles",
        "Views":  321658,
        "ViewsDelta":  594,
        "Type":  "Audio",
        "Duration":  "3:22",
        "Image":  "https://img.youtube.com/vi/8eu3BQgB9OQ/sddefault.jpg"
    },
    {
        "Title":  "about Us",
        "Date":  "2021-02-03T05:03:48",
        "URL":  "https://youtu.be/AmjOY0lIwhI",
        "VideoId":  "AmjOY0lIwhI",
        "Song":  "about Us",
        "Views":  315593,
        "ViewsDelta":  171,
        "Type":  "Audio",
        "Duration":  "4:39",
        "Image":  "https://img.youtube.com/vi/AmjOY0lIwhI/sddefault.jpg"
    },
    {
        "Title":  "you.",
        "Date":  "2018-10-02T11:34:32",
        "URL":  "https://youtu.be/vHOBRzjHLMo",
        "VideoId":  "vHOBRzjHLMo",
        "Song":  "you.",
        "Views":  309889,
        "ViewsDelta":  228,
        "Type":  "Audio",
        "Duration":  "3:44",
        "Image":  "https://img.youtube.com/vi/vHOBRzjHLMo/sddefault.jpg"
    },
    {
        "Title":  "FREEDOM",
        "Date":  "2018-10-02T11:25:59",
        "URL":  "https://youtu.be/hSV25w66G7A",
        "VideoId":  "hSV25w66G7A",
        "Song":  "FREEDOM",
        "Views":  305236,
        "ViewsDelta":  218,
        "Type":  "Audio",
        "Duration":  "3:44",
        "Image":  "https://img.youtube.com/vi/hSV25w66G7A/sddefault.jpg"
    },
    {
        "Title":  "Bestie",
        "Date":  "2024-04-16T06:00:16",
        "URL":  "https://youtu.be/OvoR_Xt8mzM",
        "VideoId":  "OvoR_Xt8mzM",
        "Song":  "Bestie",
        "Views":  304719,
        "ViewsDelta":  41,
        "Type":  "Audio",
        "Duration":  "3:36",
        "Image":  "https://img.youtube.com/vi/OvoR_Xt8mzM/sddefault.jpg"
    },
    {
        "Title":  "CHEMICAL REACTION",
        "Date":  "2021-01-12T05:01:56",
        "URL":  "https://youtu.be/42uOmIhh2Vs",
        "VideoId":  "42uOmIhh2Vs",
        "Song":  "CHEMICAL REACTION",
        "Views":  300398,
        "ViewsDelta":  120,
        "Type":  "Audio",
        "Duration":  "4:10",
        "Image":  "https://img.youtube.com/vi/42uOmIhh2Vs/sddefault.jpg"
    },
    {
        "Title":  "secret My lips",
        "Date":  "2018-10-02T11:35:27",
        "URL":  "https://youtu.be/gr7JL2C4zHQ",
        "VideoId":  "gr7JL2C4zHQ",
        "Song":  "secret My lips",
        "Views":  295718,
        "ViewsDelta":  201,
        "Type":  "Audio",
        "Duration":  "4:12",
        "Image":  "https://img.youtube.com/vi/gr7JL2C4zHQ/sddefault.jpg"
    },
    {
        "Title":  "SION",
        "Date":  "2025-10-21T06:01:34",
        "URL":  "https://youtu.be/u9TrM7r9yOc",
        "VideoId":  "u9TrM7r9yOc",
        "Song":  "SION",
        "Views":  291825,
        "ViewsDelta":  282,
        "Type":  "Audio",
        "Duration":  "4:15",
        "Image":  "https://img.youtube.com/vi/u9TrM7r9yOc/sddefault.jpg"
    },
    {
        "Title":  "endless Story",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/72RuhiJznsI",
        "VideoId":  "72RuhiJznsI",
        "Song":  "endless Story",
        "Views":  290526,
        "ViewsDelta":  257,
        "Type":  "Audio",
        "Duration":  "3:45",
        "Image":  "https://img.youtube.com/vi/72RuhiJznsI/sddefault.jpg"
    },
    {
        "Title":  "I can\u0027t live without you",
        "Date":  "2018-02-13T07:01:27",
        "URL":  "https://youtu.be/EuTmlA2DHis",
        "VideoId":  "EuTmlA2DHis",
        "Song":  "I can\u0027t live without you.",
        "Views":  280229,
        "ViewsDelta":  8,
        "Type":  "Audio",
        "Duration":  "3:54",
        "Image":  "https://img.youtube.com/vi/EuTmlA2DHis/sddefault.jpg"
    },
    {
        "Title":  "anemone",
        "Date":  "2018-10-02T11:55:47",
        "URL":  "https://youtu.be/7RDR_gMAZok",
        "VideoId":  "7RDR_gMAZok",
        "Song":  "anemone",
        "Views":  279143,
        "ViewsDelta":  209,
        "Type":  "Audio",
        "Duration":  "4:23",
        "Image":  "https://img.youtube.com/vi/7RDR_gMAZok/sddefault.jpg"
    },
    {
        "Title":  "DOMINATION",
        "Date":  "2018-02-13T07:01:48",
        "URL":  "https://youtu.be/CWdo_Mn5Wo8",
        "VideoId":  "CWdo_Mn5Wo8",
        "Song":  "DOMINATION",
        "Views":  272183,
        "ViewsDelta":  2,
        "Type":  "Audio",
        "Duration":  "3:54",
        "Image":  "https://img.youtube.com/vi/CWdo_Mn5Wo8/sddefault.jpg"
    },
    {
        "Title":  "Alive-or-Dead",
        "Date":  "2018-10-02T11:56:53",
        "URL":  "https://youtu.be/rZ1mpH8iXQc",
        "VideoId":  "rZ1mpH8iXQc",
        "Song":  "Alive-or-Dead",
        "Views":  270566,
        "ViewsDelta":  497,
        "Type":  "Audio",
        "Duration":  "3:45",
        "Image":  "https://img.youtube.com/vi/rZ1mpH8iXQc/sddefault.jpg"
    },
    {
        "Title":  "モラトリアム",
        "Date":  "2018-10-02T11:35:27",
        "URL":  "https://youtu.be/WFrVI2eXlko",
        "VideoId":  "WFrVI2eXlko",
        "Song":  "Moratorium",
        "Views":  263109,
        "ViewsDelta":  214,
        "Type":  "Audio",
        "Duration":  "4:16",
        "Image":  "https://img.youtube.com/vi/WFrVI2eXlko/sddefault.jpg"
    },
    {
        "Title":  "CLANG",
        "Date":  "2018-10-02T11:55:45",
        "URL":  "https://youtu.be/RNJxKL5Ylf4",
        "VideoId":  "RNJxKL5Ylf4",
        "Song":  "CLANG",
        "Views":  263103,
        "ViewsDelta":  211,
        "Type":  "Audio",
        "Duration":  "4:11",
        "Image":  "https://img.youtube.com/vi/RNJxKL5Ylf4/sddefault.jpg"
    },
    {
        "Title":  "FREEZER",
        "Date":  "2018-10-02T11:47:17",
        "URL":  "https://youtu.be/x7G0VEpWd_A",
        "VideoId":  "x7G0VEpWd_A",
        "Song":  "FREEZER",
        "Views":  262566,
        "ViewsDelta":  224,
        "Type":  "Audio",
        "Duration":  "3:18",
        "Image":  "https://img.youtube.com/vi/x7G0VEpWd_A/sddefault.jpg"
    },
    {
        "Title":  "Protect You",
        "Date":  "2024-09-24T06:00:31",
        "URL":  "https://youtu.be/PDaRbNVVdCE",
        "VideoId":  "PDaRbNVVdCE",
        "Song":  "Protect You",
        "Views":  257978,
        "ViewsDelta":  675,
        "Type":  "Audio",
        "Duration":  "3:14",
        "Image":  "https://img.youtube.com/vi/PDaRbNVVdCE/sddefault.jpg"
    },
    {
        "Title":  "One and only",
        "Date":  "2018-10-02T11:55:47",
        "URL":  "https://youtu.be/f7_VMSupSlA",
        "VideoId":  "f7_VMSupSlA",
        "Song":  "One and only",
        "Views":  253744,
        "ViewsDelta":  159,
        "Type":  "Audio",
        "Duration":  "3:23",
        "Image":  "https://img.youtube.com/vi/f7_VMSupSlA/sddefault.jpg"
    },
    {
        "Title":  "Forbidden tale",
        "Date":  "2024-09-24T06:00:52",
        "URL":  "https://youtu.be/l29qDqsgORA",
        "VideoId":  "l29qDqsgORA",
        "Song":  "Forbidden tale",
        "Views":  253292,
        "ViewsDelta":  254,
        "Type":  "Audio",
        "Duration":  "4:35",
        "Image":  "https://img.youtube.com/vi/l29qDqsgORA/sddefault.jpg"
    },
    {
        "Title":  "Shake That",
        "Date":  "2018-10-02T11:49:00",
        "URL":  "https://youtu.be/zZcZdQgs-ws",
        "VideoId":  "zZcZdQgs-ws",
        "Song":  "Shake That!!",
        "Views":  247521,
        "ViewsDelta":  183,
        "Type":  "Audio",
        "Duration":  "4:06",
        "Image":  "https://img.youtube.com/vi/zZcZdQgs-ws/sddefault.jpg"
    },
    {
        "Title":  "FATE",
        "Date":  "2018-10-02T11:56:52",
        "URL":  "https://youtu.be/ifUSCn9l61M",
        "VideoId":  "ifUSCn9l61M",
        "Song":  "FATE",
        "Views":  247209,
        "ViewsDelta":  246,
        "Type":  "Audio",
        "Duration":  "4:32",
        "Image":  "https://img.youtube.com/vi/ifUSCn9l61M/sddefault.jpg"
    },
    {
        "Title":  "Play",
        "Date":  "2018-10-02T11:55:46",
        "URL":  "https://youtu.be/A1h37zkAXck",
        "VideoId":  "A1h37zkAXck",
        "Song":  "Play",
        "Views":  245482,
        "ViewsDelta":  243,
        "Type":  "Audio",
        "Duration":  "3:20",
        "Image":  "https://img.youtube.com/vi/A1h37zkAXck/sddefault.jpg"
    },
    {
        "Title":  "SUPER SUNSHINE",
        "Date":  "2025-10-21T06:00:29",
        "URL":  "https://youtu.be/J_dd47xa31E",
        "VideoId":  "J_dd47xa31E",
        "Song":  "SUPER SUNSHINE",
        "Views":  245361,
        "ViewsDelta":  786,
        "Type":  "Audio",
        "Duration":  "3:52",
        "Image":  "https://img.youtube.com/vi/J_dd47xa31E/sddefault.jpg"
    },
    {
        "Title":  "Turn me on",
        "Date":  "2018-10-02T11:55:45",
        "URL":  "https://youtu.be/6RVy5UEhz4s",
        "VideoId":  "6RVy5UEhz4s",
        "Song":  "Turn me on",
        "Views":  244191,
        "ViewsDelta":  195,
        "Type":  "Audio",
        "Duration":  "4:16",
        "Image":  "https://img.youtube.com/vi/6RVy5UEhz4s/sddefault.jpg"
    },
    {
        "Title":  "Play",
        "Date":  "2018-02-13T07:01:48",
        "URL":  "https://youtu.be/oZWc7jk4GNs",
        "VideoId":  "oZWc7jk4GNs",
        "Song":  "Play",
        "Views":  242784,
        "ViewsDelta":  6,
        "Type":  "Audio",
        "Duration":  "3:24",
        "Image":  "https://img.youtube.com/vi/oZWc7jk4GNs/sddefault.jpg"
    },
    {
        "Title":  "Play",
        "Date":  "2018-10-02T11:53:02",
        "URL":  "https://youtu.be/iH-EnjSUi3k",
        "VideoId":  "iH-EnjSUi3k",
        "Song":  "Play",
        "Views":  240985,
        "ViewsDelta":  148,
        "Type":  "Audio",
        "Duration":  "3:22",
        "Image":  "https://img.youtube.com/vi/iH-EnjSUi3k/sddefault.jpg"
    },
    {
        "Title":  "secret MAIKO lips",
        "Date":  "2019-04-02T11:04:53",
        "URL":  "https://youtu.be/V-1HH3saWX4",
        "VideoId":  "V-1HH3saWX4",
        "Song":  "secret My lips",
        "Views":  239484,
        "ViewsDelta":  218,
        "Type":  "Audio",
        "Duration":  "4:25",
        "Image":  "https://img.youtube.com/vi/V-1HH3saWX4/sddefault.jpg"
    },
    {
        "Title":  "The one",
        "Date":  "2024-09-24T06:00:20",
        "URL":  "https://youtu.be/FORNyqfjSmM",
        "VideoId":  "FORNyqfjSmM",
        "Song":  "The one",
        "Views":  238117,
        "ViewsDelta":  189,
        "Type":  "Audio",
        "Duration":  "4:11",
        "Image":  "https://img.youtube.com/vi/FORNyqfjSmM/sddefault.jpg"
    },
    {
        "Title":  "SHOW THEM",
        "Date":  "2024-09-24T06:00:03",
        "URL":  "https://youtu.be/42AfEN1SGZ4",
        "VideoId":  "42AfEN1SGZ4",
        "Song":  "Show Them",
        "Views":  237050,
        "ViewsDelta":  973,
        "Type":  "Audio",
        "Duration":  "3:15",
        "Image":  "https://img.youtube.com/vi/42AfEN1SGZ4/sddefault.jpg"
    },
    {
        "Title":  "Magie",
        "Date":  "2024-09-24T06:00:52",
        "URL":  "https://youtu.be/p0OxjDTf_2A",
        "VideoId":  "p0OxjDTf_2A",
        "Song":  "Magie",
        "Views":  236699,
        "ViewsDelta":  255,
        "Type":  "Audio",
        "Duration":  "3:05",
        "Image":  "https://img.youtube.com/vi/p0OxjDTf_2A/sddefault.jpg"
    },
    {
        "Title":  "Bubble",
        "Date":  "2019-01-15T10:01:49",
        "URL":  "https://youtu.be/3vHHv_dmhM8",
        "VideoId":  "3vHHv_dmhM8",
        "Song":  "Bubble",
        "Views":  224734,
        "ViewsDelta":  166,
        "Type":  "Audio",
        "Duration":  "3:47",
        "Image":  "https://img.youtube.com/vi/3vHHv_dmhM8/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Live Video ver. 2 #shorts )  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-05-27T00:01:00",
        "URL":  "https://youtu.be/nbFF1513ptw",
        "VideoId":  "nbFF1513ptw",
        "Song":  "Ready to Rock",
        "Views":  224086,
        "ViewsDelta":  14,
        "Type":  "Official Live Short",
        "Duration":  "0:34",
        "Image":  "https://img.youtube.com/vi/nbFF1513ptw/sddefault.jpg"
    },
    {
        "Title":  "Screaming",
        "Date":  "2018-10-02T11:32:03",
        "URL":  "https://youtu.be/JBgNx7OXtao",
        "VideoId":  "JBgNx7OXtao",
        "Song":  "Screaming",
        "Views":  221425,
        "ViewsDelta":  217,
        "Type":  "Audio",
        "Duration":  "3:50",
        "Image":  "https://img.youtube.com/vi/JBgNx7OXtao/sddefault.jpg"
    },
    {
        "Title":  "Dilemma",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/aYet_nevCGs",
        "VideoId":  "aYet_nevCGs",
        "Song":  "Dilemma",
        "Views":  219350,
        "ViewsDelta":  124,
        "Type":  "Audio",
        "Duration":  "3:37",
        "Image":  "https://img.youtube.com/vi/aYet_nevCGs/sddefault.jpg"
    },
    {
        "Title":  "Present Perfect",
        "Date":  "2025-10-21T06:00:28",
        "URL":  "https://youtu.be/IvDzDMJ5cL4",
        "VideoId":  "IvDzDMJ5cL4",
        "Song":  "Present Perfect",
        "Views":  218950,
        "ViewsDelta":  605,
        "Type":  "Audio",
        "Duration":  "3:52",
        "Image":  "https://img.youtube.com/vi/IvDzDMJ5cL4/sddefault.jpg"
    },
    {
        "Title":  "azure",
        "Date":  "2019-12-05T00:27:13",
        "URL":  "https://youtu.be/QZqKqAIdxak",
        "VideoId":  "QZqKqAIdxak",
        "Song":  "azure",
        "Views":  217350,
        "ViewsDelta":  176,
        "Type":  "Audio",
        "Duration":  "2:50",
        "Image":  "https://img.youtube.com/vi/QZqKqAIdxak/sddefault.jpg"
    },
    {
        "Title":  "Letters to you",
        "Date":  "2024-09-24T06:00:27",
        "URL":  "https://youtu.be/T7lS8NkIapQ",
        "VideoId":  "T7lS8NkIapQ",
        "Song":  "Letters to you",
        "Views":  216299,
        "ViewsDelta":  164,
        "Type":  "Audio",
        "Duration":  "3:09",
        "Image":  "https://img.youtube.com/vi/T7lS8NkIapQ/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / without holding back (Official Live Video)",
        "Date":  "2025-12-31T22:00:03",
        "URL":  "https://youtu.be/oWQpbAmfZLE",
        "VideoId":  "oWQpbAmfZLE",
        "Song":  "without holding back",
        "Views":  208954,
        "ViewsDelta":  503,
        "Type":  "Official Live Video",
        "Duration":  "3:57",
        "Image":  "https://img.youtube.com/vi/oWQpbAmfZLE/sddefault.jpg"
    },
    {
        "Title":  "Carry on living",
        "Date":  "2018-10-02T11:57:15",
        "URL":  "https://youtu.be/Rylf8-NaJuk",
        "VideoId":  "Rylf8-NaJuk",
        "Song":  "Carry on living",
        "Views":  206464,
        "ViewsDelta":  197,
        "Type":  "Audio",
        "Duration":  "3:33",
        "Image":  "https://img.youtube.com/vi/Rylf8-NaJuk/sddefault.jpg"
    },
    {
        "Title":  "TAMAYA!",
        "Date":  "2024-09-24T06:00:53",
        "URL":  "https://youtu.be/vvpswsFRawM",
        "VideoId":  "vvpswsFRawM",
        "Song":  "TAMAYA!",
        "Views":  205183,
        "ViewsDelta":  156,
        "Type":  "Audio",
        "Duration":  "3:16",
        "Image":  "https://img.youtube.com/vi/vvpswsFRawM/sddefault.jpg"
    },
    {
        "Title":  "Take me higher ! !",
        "Date":  "2018-10-02T11:35:11",
        "URL":  "https://youtu.be/SDrfTXRVpw4",
        "VideoId":  "SDrfTXRVpw4",
        "Song":  "Take me higher!!",
        "Views":  204379,
        "ViewsDelta":  140,
        "Type":  "Audio",
        "Duration":  "3:19",
        "Image":  "https://img.youtube.com/vi/SDrfTXRVpw4/sddefault.jpg"
    },
    {
        "Title":  "Liberal",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/YwLqiLlCoKE",
        "VideoId":  "YwLqiLlCoKE",
        "Song":  "Liberal",
        "Views":  203959,
        "ViewsDelta":  178,
        "Type":  "Audio",
        "Duration":  "3:15",
        "Image":  "https://img.youtube.com/vi/YwLqiLlCoKE/sddefault.jpg"
    },
    {
        "Title":  "Wonderland",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/CewPL6F9XhM",
        "VideoId":  "CewPL6F9XhM",
        "Song":  "Wonderland",
        "Views":  203690,
        "ViewsDelta":  238,
        "Type":  "Audio",
        "Duration":  "3:56",
        "Image":  "https://img.youtube.com/vi/CewPL6F9XhM/sddefault.jpg"
    },
    {
        "Title":  "Spirit!!",
        "Date":  "2018-10-02T11:55:46",
        "URL":  "https://youtu.be/fxeDfNl1IfU",
        "VideoId":  "fxeDfNl1IfU",
        "Song":  "Spirit!!",
        "Views":  201927,
        "ViewsDelta":  142,
        "Type":  "Audio",
        "Duration":  "3:42",
        "Image":  "https://img.youtube.com/vi/fxeDfNl1IfU/sddefault.jpg"
    },
    {
        "Title":  "カタルシス",
        "Date":  "2019-12-05T00:27:12",
        "URL":  "https://youtu.be/N5zqCsBjfTU",
        "VideoId":  "N5zqCsBjfTU",
        "Song":  "Catharsis",
        "Views":  200151,
        "ViewsDelta":  136,
        "Type":  "Audio",
        "Duration":  "3:19",
        "Image":  "https://img.youtube.com/vi/N5zqCsBjfTU/sddefault.jpg"
    },
    {
        "Title":  "Before Yesterday",
        "Date":  "2018-10-02T11:27:07",
        "URL":  "https://youtu.be/xlUYvGjmOas",
        "VideoId":  "xlUYvGjmOas",
        "Song":  "Before Yesterday",
        "Views":  199334,
        "ViewsDelta":  171,
        "Type":  "Audio",
        "Duration":  "3:45",
        "Image":  "https://img.youtube.com/vi/xlUYvGjmOas/sddefault.jpg"
    },
    {
        "Title":  "Sense (TV Size Ver.)",
        "Date":  "2021-09-05T06:02:13",
        "URL":  "https://youtu.be/1kv3cfGlMQQ",
        "VideoId":  "1kv3cfGlMQQ",
        "Song":  "Sense",
        "Views":  197192,
        "ViewsDelta":  49,
        "Type":  "Audio",
        "Duration":  "1:30",
        "Image":  "https://img.youtube.com/vi/1kv3cfGlMQQ/sddefault.jpg"
    },
    {
        "Title":  "Mirage",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/UBLKqA51hZs",
        "VideoId":  "UBLKqA51hZs",
        "Song":  "Mirage",
        "Views":  193539,
        "ViewsDelta":  117,
        "Type":  "Audio",
        "Duration":  "3:58",
        "Image":  "https://img.youtube.com/vi/UBLKqA51hZs/sddefault.jpg"
    },
    {
        "Title":  "Rock in me",
        "Date":  "2018-02-13T07:01:53",
        "URL":  "https://youtu.be/TuWzx67ow3E",
        "VideoId":  "TuWzx67ow3E",
        "Song":  "Rock in me",
        "Views":  192060,
        "ViewsDelta":  3,
        "Type":  "Audio",
        "Duration":  "3:25",
        "Image":  "https://img.youtube.com/vi/TuWzx67ow3E/sddefault.jpg"
    },
    {
        "Title":  "FATE",
        "Date":  "2018-02-13T07:01:51",
        "URL":  "https://youtu.be/-ooj0u845AY",
        "VideoId":  "-ooj0u845AY",
        "Song":  "FATE",
        "Views":  190624,
        "ViewsDelta":  1,
        "Type":  "Audio",
        "Duration":  "4:35",
        "Image":  "https://img.youtube.com/vi/-ooj0u845AY/sddefault.jpg"
    },
    {
        "Title":  "Turn me on",
        "Date":  "2018-02-13T07:01:53",
        "URL":  "https://youtu.be/IWVtcPssnok",
        "VideoId":  "IWVtcPssnok",
        "Song":  "Turn me on",
        "Views":  185181,
        "ViewsDelta":  0,
        "Type":  "Audio",
        "Duration":  "4:18",
        "Image":  "https://img.youtube.com/vi/IWVtcPssnok/sddefault.jpg"
    },
    {
        "Title":  "PAGE",
        "Date":  "2019-12-05T00:27:12",
        "URL":  "https://youtu.be/nxCjEu4_7rU",
        "VideoId":  "nxCjEu4_7rU",
        "Song":  "PAGE",
        "Views":  184139,
        "ViewsDelta":  104,
        "Type":  "Audio",
        "Duration":  "4:18",
        "Image":  "https://img.youtube.com/vi/nxCjEu4_7rU/sddefault.jpg"
    },
    {
        "Title":  "祇園町",
        "Date":  "2019-04-02T11:04:53",
        "URL":  "https://youtu.be/aJmR2e_RtWQ",
        "VideoId":  "aJmR2e_RtWQ",
        "Song":  "Gion-Cho",
        "Views":  183913,
        "ViewsDelta":  155,
        "Type":  "Audio",
        "Duration":  "3:36",
        "Image":  "https://img.youtube.com/vi/aJmR2e_RtWQ/sddefault.jpg"
    },
    {
        "Title":  "Brightest star",
        "Date":  "2024-09-24T06:00:11",
        "URL":  "https://youtu.be/70uZ87dY2z0",
        "VideoId":  "70uZ87dY2z0",
        "Song":  "Brightest Star",
        "Views":  183896,
        "ViewsDelta":  158,
        "Type":  "Audio",
        "Duration":  "3:18",
        "Image":  "https://img.youtube.com/vi/70uZ87dY2z0/sddefault.jpg"
    },
    {
        "Title":  "Awkward",
        "Date":  "2018-10-02T11:35:20",
        "URL":  "https://youtu.be/9tf-bzo9bI0",
        "VideoId":  "9tf-bzo9bI0",
        "Song":  "Awkward",
        "Views":  182152,
        "ViewsDelta":  129,
        "Type":  "Audio",
        "Duration":  "3:33",
        "Image":  "https://img.youtube.com/vi/9tf-bzo9bI0/sddefault.jpg"
    },
    {
        "Title":  "CLANG",
        "Date":  "2018-02-13T07:01:53",
        "URL":  "https://youtu.be/4mSEQ4Qae4Y",
        "VideoId":  "4mSEQ4Qae4Y",
        "Song":  "CLANG",
        "Views":  181158,
        "ViewsDelta":  5,
        "Type":  "Audio",
        "Duration":  "4:13",
        "Image":  "https://img.youtube.com/vi/4mSEQ4Qae4Y/sddefault.jpg"
    },
    {
        "Title":  "Go easy",
        "Date":  "2024-09-24T06:00:38",
        "URL":  "https://youtu.be/ZBbvy6Qx4wE",
        "VideoId":  "ZBbvy6Qx4wE",
        "Song":  "Go easy",
        "Views":  179124,
        "ViewsDelta":  144,
        "Type":  "Audio",
        "Duration":  "3:01",
        "Image":  "https://img.youtube.com/vi/ZBbvy6Qx4wE/sddefault.jpg"
    },
    {
        "Title":  "Daydreaming",
        "Date":  "2018-02-13T07:00:01",
        "URL":  "https://youtu.be/XyWA2xfDtyM",
        "VideoId":  "XyWA2xfDtyM",
        "Song":  "Daydreaming",
        "Views":  178759,
        "ViewsDelta":  0,
        "Type":  "Audio",
        "Duration":  "4:00",
        "Image":  "https://img.youtube.com/vi/XyWA2xfDtyM/sddefault.jpg"
    },
    {
        "Title":  "start over",
        "Date":  "2018-10-02T11:32:04",
        "URL":  "https://youtu.be/HoXEk8Rcsyg",
        "VideoId":  "HoXEk8Rcsyg",
        "Song":  "start over",
        "Views":  178220,
        "ViewsDelta":  105,
        "Type":  "Audio",
        "Duration":  "3:12",
        "Image":  "https://img.youtube.com/vi/HoXEk8Rcsyg/sddefault.jpg"
    },
    {
        "Title":  "anemone",
        "Date":  "2018-02-13T07:01:47",
        "URL":  "https://youtu.be/uh0JDdCgZcs",
        "VideoId":  "uh0JDdCgZcs",
        "Song":  "anemone",
        "Views":  178147,
        "ViewsDelta":  0,
        "Type":  "Audio",
        "Duration":  "4:28",
        "Image":  "https://img.youtube.com/vi/uh0JDdCgZcs/sddefault.jpg"
    },
    {
        "Title":  "decided by myself",
        "Date":  "2018-10-02T11:34:32",
        "URL":  "https://youtu.be/aLYJuZT37i4",
        "VideoId":  "aLYJuZT37i4",
        "Song":  "decided by myself",
        "Views":  177327,
        "ViewsDelta":  161,
        "Type":  "Audio",
        "Duration":  "3:55",
        "Image":  "https://img.youtube.com/vi/aLYJuZT37i4/sddefault.jpg"
    },
    {
        "Title":  "So,What?",
        "Date":  "2018-10-02T11:34:32",
        "URL":  "https://youtu.be/di1PjUakkLw",
        "VideoId":  "di1PjUakkLw",
        "Song":  "So,What?",
        "Views":  174321,
        "ViewsDelta":  140,
        "Type":  "Audio",
        "Duration":  "3:49",
        "Image":  "https://img.youtube.com/vi/di1PjUakkLw/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock ×「ロックは淑女の嗜みでして」 Special Music Video short ver.2",
        "Date":  "2025-06-25T23:01:02",
        "URL":  "https://youtu.be/snND6wFvgx8",
        "VideoId":  "snND6wFvgx8",
        "Song":  "Ready to Rock",
        "Views":  173903,
        "ViewsDelta":  62,
        "Type":  "Anime Music Video Short",
        "Duration":  "0:37",
        "Image":  "https://img.youtube.com/vi/snND6wFvgx8/sddefault.jpg"
    },
    {
        "Title":  "flying high",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/Q_qA4BtEV6c",
        "VideoId":  "Q_qA4BtEV6c",
        "Song":  "flying high",
        "Views":  172475,
        "ViewsDelta":  121,
        "Type":  "Audio",
        "Duration":  "3:43",
        "Image":  "https://img.youtube.com/vi/Q_qA4BtEV6c/sddefault.jpg"
    },
    {
        "Title":  "Smile",
        "Date":  "2019-01-15T10:01:45",
        "URL":  "https://youtu.be/KzCUAJIMtu0",
        "VideoId":  "KzCUAJIMtu0",
        "Song":  "Smile",
        "Views":  171318,
        "ViewsDelta":  163,
        "Type":  "Audio",
        "Duration":  "3:58",
        "Image":  "https://img.youtube.com/vi/KzCUAJIMtu0/sddefault.jpg"
    },
    {
        "Title":  "One and only",
        "Date":  "2018-02-13T07:01:49",
        "URL":  "https://youtu.be/FkbKXUGMLvA",
        "VideoId":  "FkbKXUGMLvA",
        "Song":  "One and only",
        "Views":  166594,
        "ViewsDelta":  0,
        "Type":  "Audio",
        "Duration":  "3:23",
        "Image":  "https://img.youtube.com/vi/FkbKXUGMLvA/sddefault.jpg"
    },
    {
        "Title":  "Toi et moi",
        "Date":  "2024-09-24T06:00:25",
        "URL":  "https://youtu.be/V9VDAoYf0A0",
        "VideoId":  "V9VDAoYf0A0",
        "Song":  "Toi et moi",
        "Views":  164416,
        "ViewsDelta":  127,
        "Type":  "Audio",
        "Duration":  "2:57",
        "Image":  "https://img.youtube.com/vi/V9VDAoYf0A0/sddefault.jpg"
    },
    {
        "Title":  "Memorable",
        "Date":  "2023-02-21T05:04:04",
        "URL":  "https://youtu.be/UZvceYLB75c",
        "VideoId":  "UZvceYLB75c",
        "Song":  "Memorable",
        "Views":  164135,
        "ViewsDelta":  23,
        "Type":  "Audio",
        "Duration":  "3:14",
        "Image":  "https://img.youtube.com/vi/UZvceYLB75c/sddefault.jpg"
    },
    {
        "Title":  "Corallium",
        "Date":  "2022-09-20T06:04:21",
        "URL":  "https://youtu.be/FywmRdKKSjg",
        "VideoId":  "FywmRdKKSjg",
        "Song":  "Corallium",
        "Views":  162355,
        "ViewsDelta":  51,
        "Type":  "Audio",
        "Duration":  "3:55",
        "Image":  "https://img.youtube.com/vi/FywmRdKKSjg/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video MIKU KOBATO ver.)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-06T22:00:32",
        "URL":  "https://youtu.be/bOjubutSnXo",
        "VideoId":  "bOjubutSnXo",
        "Song":  "Ready to Rock",
        "Views":  156097,
        "ViewsDelta":  23,
        "Type":  "Official Teaser Video",
        "Duration":  "0:24",
        "Image":  "https://img.youtube.com/vi/bOjubutSnXo/sddefault.jpg"
    },
    {
        "Title":  "Don\u0027t Apply The Brake",
        "Date":  "2018-10-02T11:47:34",
        "URL":  "https://youtu.be/vY6eYTG315A",
        "VideoId":  "vY6eYTG315A",
        "Song":  "Don\u0027t apply the brake",
        "Views":  155368,
        "ViewsDelta":  141,
        "Type":  "Audio",
        "Duration":  "3:21",
        "Image":  "https://img.youtube.com/vi/vY6eYTG315A/sddefault.jpg"
    },
    {
        "Title":  "Price of Pride",
        "Date":  "2018-10-02T11:48:26",
        "URL":  "https://youtu.be/wkzVmMRcC0U",
        "VideoId":  "wkzVmMRcC0U",
        "Song":  "Price of Pride",
        "Views":  151886,
        "ViewsDelta":  128,
        "Type":  "Audio",
        "Duration":  "3:28",
        "Image":  "https://img.youtube.com/vi/wkzVmMRcC0U/sddefault.jpg"
    },
    {
        "Title":  "Dilly-Dally",
        "Date":  "2025-10-21T06:00:11",
        "URL":  "https://youtu.be/7gE2cJFw_xg",
        "VideoId":  "7gE2cJFw_xg",
        "Song":  "Dilly-Dally",
        "Views":  151758,
        "ViewsDelta":  514,
        "Type":  "Audio",
        "Duration":  "2:49",
        "Image":  "https://img.youtube.com/vi/7gE2cJFw_xg/sddefault.jpg"
    },
    {
        "Title":  "At the drop of a hat",
        "Date":  "2019-12-05T00:27:13",
        "URL":  "https://youtu.be/pa-zUO820-0",
        "VideoId":  "pa-zUO820-0",
        "Song":  "At the drop of a hat",
        "Views":  150111,
        "ViewsDelta":  101,
        "Type":  "Audio",
        "Duration":  "4:20",
        "Image":  "https://img.youtube.com/vi/pa-zUO820-0/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Live #Shorts 2) TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-08-29T00:00:36",
        "URL":  "https://youtu.be/QWKfL5C7oRg",
        "VideoId":  "QWKfL5C7oRg",
        "Song":  "Ready to Rock",
        "Views":  148795,
        "ViewsDelta":  42,
        "Type":  "Official Live Short",
        "Duration":  "0:23",
        "Image":  "https://img.youtube.com/vi/QWKfL5C7oRg/sddefault.jpg"
    },
    {
        "Title":  "TIME",
        "Date":  "2018-10-02T11:35:37",
        "URL":  "https://youtu.be/GEvS_V9bLDE",
        "VideoId":  "GEvS_V9bLDE",
        "Song":  "TIME",
        "Views":  148717,
        "ViewsDelta":  99,
        "Type":  "Audio",
        "Duration":  "3:30",
        "Image":  "https://img.youtube.com/vi/GEvS_V9bLDE/sddefault.jpg"
    },
    {
        "Title":  "Lock and Load",
        "Date":  "2025-10-21T06:01:38",
        "URL":  "https://youtu.be/yBx52tnrqZw",
        "VideoId":  "yBx52tnrqZw",
        "Song":  "Lock and Load",
        "Views":  145617,
        "ViewsDelta":  260,
        "Type":  "Audio",
        "Duration":  "3:21",
        "Image":  "https://img.youtube.com/vi/yBx52tnrqZw/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video AKANE ver.)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-05T00:30:03",
        "URL":  "https://youtu.be/50H_hmPh4dI",
        "VideoId":  "50H_hmPh4dI",
        "Song":  "Ready to Rock",
        "Views":  145600,
        "ViewsDelta":  24,
        "Type":  "Official Teaser Video",
        "Duration":  "0:24",
        "Image":  "https://img.youtube.com/vi/50H_hmPh4dI/sddefault.jpg"
    },
    {
        "Title":  "ハニー",
        "Date":  "2018-10-02T11:55:46",
        "URL":  "https://youtu.be/_I70qgGN-6I",
        "VideoId":  "_I70qgGN-6I",
        "Song":  "Honey",
        "Views":  145212,
        "ViewsDelta":  142,
        "Type":  "Audio",
        "Duration":  "3:25",
        "Image":  "https://img.youtube.com/vi/_I70qgGN-6I/sddefault.jpg"
    },
    {
        "Title":  "Arcadia Girl",
        "Date":  "2018-10-02T11:47:25",
        "URL":  "https://youtu.be/TwMx4bJ30Tk",
        "VideoId":  "TwMx4bJ30Tk",
        "Song":  "Arcadia Girl",
        "Views":  140377,
        "ViewsDelta":  150,
        "Type":  "Audio",
        "Duration":  "4:06",
        "Image":  "https://img.youtube.com/vi/TwMx4bJ30Tk/sddefault.jpg"
    },
    {
        "Title":  "Spirit!!",
        "Date":  "2018-02-13T07:01:52",
        "URL":  "https://youtu.be/2XR0CmgB1pI",
        "VideoId":  "2XR0CmgB1pI",
        "Song":  "Spirit!!",
        "Views":  139878,
        "ViewsDelta":  1,
        "Type":  "Audio",
        "Duration":  "3:44",
        "Image":  "https://img.youtube.com/vi/2XR0CmgB1pI/sddefault.jpg"
    },
    {
        "Title":  "Get to the top",
        "Date":  "2024-09-24T06:00:58",
        "URL":  "https://youtu.be/z0KTMEXJ1RE",
        "VideoId":  "z0KTMEXJ1RE",
        "Song":  "Get to the top",
        "Views":  131047,
        "ViewsDelta":  98,
        "Type":  "Audio",
        "Duration":  "3:08",
        "Image":  "https://img.youtube.com/vi/z0KTMEXJ1RE/sddefault.jpg"
    },
    {
        "Title":  "OOPARTS",
        "Date":  "2018-10-02T11:34:30",
        "URL":  "https://youtu.be/YFLsVQ4iPxw",
        "VideoId":  "YFLsVQ4iPxw",
        "Song":  "OOPARTS",
        "Views":  129051,
        "ViewsDelta":  143,
        "Type":  "Audio",
        "Duration":  "4:07",
        "Image":  "https://img.youtube.com/vi/YFLsVQ4iPxw/sddefault.jpg"
    },
    {
        "Title":  "ORDER",
        "Date":  "2018-10-02T11:26:01",
        "URL":  "https://youtu.be/3J-TWdHqjoQ",
        "VideoId":  "3J-TWdHqjoQ",
        "Song":  "ORDER",
        "Views":  128247,
        "ViewsDelta":  118,
        "Type":  "Audio",
        "Duration":  "3:23",
        "Image":  "https://img.youtube.com/vi/3J-TWdHqjoQ/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Live #Shorts) TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-08-27T00:04:12",
        "URL":  "https://youtu.be/0q8L_YvNZn0",
        "VideoId":  "0q8L_YvNZn0",
        "Song":  "Ready to Rock",
        "Views":  127068,
        "ViewsDelta":  22,
        "Type":  "Official Live Short",
        "Duration":  "0:25",
        "Image":  "https://img.youtube.com/vi/0q8L_YvNZn0/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Forbidden tale (Official Teaser Video) MIKU KOBATO",
        "Date":  "2024-10-11T09:00:00",
        "URL":  "https://youtu.be/08dX4S0DWfg",
        "VideoId":  "08dX4S0DWfg",
        "Song":  "Forbidden tale",
        "Views":  124715,
        "ViewsDelta":  49,
        "Type":  "Official Teaser Video",
        "Duration":  "0:32",
        "Image":  "https://img.youtube.com/vi/08dX4S0DWfg/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Live Video ver. 3 #shorts )  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-05-29T09:01:19",
        "URL":  "https://youtu.be/lBkdxHmvyAA",
        "VideoId":  "lBkdxHmvyAA",
        "Song":  "Ready to Rock",
        "Views":  124525,
        "ViewsDelta":  15,
        "Type":  "Official Live Short",
        "Duration":  "0:44",
        "Image":  "https://img.youtube.com/vi/lBkdxHmvyAA/sddefault.jpg"
    },
    {
        "Title":  "Carry on living",
        "Date":  "2018-02-13T07:00:01",
        "URL":  "https://youtu.be/pKFBa8urc60",
        "VideoId":  "pKFBa8urc60",
        "Song":  "Carry on living",
        "Views":  124009,
        "ViewsDelta":  0,
        "Type":  "Audio",
        "Duration":  "3:35",
        "Image":  "https://img.youtube.com/vi/pKFBa8urc60/sddefault.jpg"
    },
    {
        "Title":  "The Dragon Cries",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/uHBnf1pXC2E",
        "VideoId":  "uHBnf1pXC2E",
        "Song":  "The Dragon Cries",
        "Views":  114578,
        "ViewsDelta":  67,
        "Type":  "Audio",
        "Duration":  "3:56",
        "Image":  "https://img.youtube.com/vi/uHBnf1pXC2E/sddefault.jpg"
    },
    {
        "Title":  "matchless GUM",
        "Date":  "2018-10-02T11:42:18",
        "URL":  "https://youtu.be/ljt_YGfHQr4",
        "VideoId":  "ljt_YGfHQr4",
        "Song":  "matchless GUM",
        "Views":  114422,
        "ViewsDelta":  111,
        "Type":  "Audio",
        "Duration":  "3:12",
        "Image":  "https://img.youtube.com/vi/ljt_YGfHQr4/sddefault.jpg"
    },
    {
        "Title":  "Unleash!!!!!",
        "Date":  "2022-09-20T06:05:20",
        "URL":  "https://youtu.be/uLTBtjZEGv0",
        "VideoId":  "uLTBtjZEGv0",
        "Song":  "Unleash!!!!!",
        "Views":  112219,
        "ViewsDelta":  44,
        "Type":  "Audio",
        "Duration":  "3:11",
        "Image":  "https://img.youtube.com/vi/uLTBtjZEGv0/sddefault.jpg"
    },
    {
        "Title":  "ハニー",
        "Date":  "2018-02-13T07:01:49",
        "URL":  "https://youtu.be/0ozhb_hN9JY",
        "VideoId":  "0ozhb_hN9JY",
        "Song":  "Honey",
        "Views":  109658,
        "ViewsDelta":  0,
        "Type":  "Audio",
        "Duration":  "3:25",
        "Image":  "https://img.youtube.com/vi/0ozhb_hN9JY/sddefault.jpg"
    },
    {
        "Title":  "虎 and 虎",
        "Date":  "2019-04-02T11:05:24",
        "URL":  "https://youtu.be/-Z7S8Y_Eb4Q",
        "VideoId":  "-Z7S8Y_Eb4Q",
        "Song":  "One and only",
        "Views":  107143,
        "ViewsDelta":  78,
        "Type":  "Audio",
        "Duration":  "3:27",
        "Image":  "https://img.youtube.com/vi/-Z7S8Y_Eb4Q/sddefault.jpg"
    },
    {
        "Title":  "Alive-or-Dead",
        "Date":  "2018-02-13T07:01:41",
        "URL":  "https://youtu.be/aNM9ovsfshc",
        "VideoId":  "aNM9ovsfshc",
        "Song":  "Alive-or-Dead",
        "Views":  106909,
        "ViewsDelta":  1,
        "Type":  "Audio",
        "Duration":  "3:48",
        "Image":  "https://img.youtube.com/vi/aNM9ovsfshc/sddefault.jpg"
    },
    {
        "Title":  "Beauty and the Beast",
        "Date":  "2018-10-02T11:47:18",
        "URL":  "https://youtu.be/u4L-I041jis",
        "VideoId":  "u4L-I041jis",
        "Song":  "Beauty and the beast",
        "Views":  105760,
        "ViewsDelta":  96,
        "Type":  "Audio",
        "Duration":  "4:01",
        "Image":  "https://img.youtube.com/vi/u4L-I041jis/sddefault.jpg"
    },
    {
        "Title":  "YURAGU",
        "Date":  "2018-10-02T11:25:59",
        "URL":  "https://youtu.be/v2ZFMzL0QPA",
        "VideoId":  "v2ZFMzL0QPA",
        "Song":  "YURAGU",
        "Views":  105490,
        "ViewsDelta":  94,
        "Type":  "Audio",
        "Duration":  "4:02",
        "Image":  "https://img.youtube.com/vi/v2ZFMzL0QPA/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Zen (Official Teaser Video)  MIKU KOBATO Ver.  MAPPAアニメ「全修。」オープニングテーマソング",
        "Date":  "2025-01-23T22:00:07",
        "URL":  "https://youtu.be/A1vhzIBfTGQ",
        "VideoId":  "A1vhzIBfTGQ",
        "Song":  "Zen",
        "Views":  105380,
        "ViewsDelta":  71,
        "Type":  "Official Teaser Video",
        "Duration":  "0:27",
        "Image":  "https://img.youtube.com/vi/A1vhzIBfTGQ/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Teaser Video) TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-07-12T07:00:04",
        "URL":  "https://youtu.be/1kbZ5NsrdX4",
        "VideoId":  "1kbZ5NsrdX4",
        "Song":  "What is justice?",
        "Views":  97544,
        "ViewsDelta":  9,
        "Type":  "Official Teaser Video",
        "Duration":  "0:10",
        "Image":  "https://img.youtube.com/vi/1kbZ5NsrdX4/sddefault.jpg"
    },
    {
        "Title":  "Bestie",
        "Date":  "2024-09-24T06:00:45",
        "URL":  "https://youtu.be/eLQCEiBUthE",
        "VideoId":  "eLQCEiBUthE",
        "Song":  "Bestie",
        "Views":  95999,
        "ViewsDelta":  156,
        "Type":  "Audio",
        "Duration":  "3:36",
        "Image":  "https://img.youtube.com/vi/eLQCEiBUthE/sddefault.jpg"
    },
    {
        "Title":  "hide-and-seek",
        "Date":  "2019-01-15T10:02:07",
        "URL":  "https://youtu.be/VQgMoXzcgaM",
        "VideoId":  "VQgMoXzcgaM",
        "Song":  "hide-and-seek",
        "Views":  95076,
        "ViewsDelta":  165,
        "Type":  "Audio",
        "Duration":  "3:01",
        "Image":  "https://img.youtube.com/vi/VQgMoXzcgaM/sddefault.jpg"
    },
    {
        "Title":  "LOOK AT ME",
        "Date":  "2018-10-02T11:26:01",
        "URL":  "https://youtu.be/xOqnN00feSc",
        "VideoId":  "xOqnN00feSc",
        "Song":  "LOOK AT ME",
        "Views":  94123,
        "ViewsDelta":  76,
        "Type":  "Audio",
        "Duration":  "3:59",
        "Image":  "https://img.youtube.com/vi/xOqnN00feSc/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock ×「ロックは淑女の嗜みでして」 Special Music Video short ver.1",
        "Date":  "2025-06-24T23:00:05",
        "URL":  "https://youtu.be/anA8iIVMTHw",
        "VideoId":  "anA8iIVMTHw",
        "Song":  "Ready to Rock",
        "Views":  93375,
        "ViewsDelta":  11,
        "Type":  "Anime Music Video Short",
        "Duration":  "0:25",
        "Image":  "https://img.youtube.com/vi/anA8iIVMTHw/sddefault.jpg"
    },
    {
        "Title":  "Unfair game",
        "Date":  "2018-10-02T11:44:03",
        "URL":  "https://youtu.be/wlDCBVsRi2g",
        "VideoId":  "wlDCBVsRi2g",
        "Song":  "Unfair game",
        "Views":  93041,
        "ViewsDelta":  109,
        "Type":  "Audio",
        "Duration":  "3:31",
        "Image":  "https://img.youtube.com/vi/wlDCBVsRi2g/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Dilly-Dally (Official Live Teaser 1)",
        "Date":  "2026-04-04T08:00:00",
        "URL":  "https://youtu.be/DcRCxpohwzw",
        "VideoId":  "DcRCxpohwzw",
        "Song":  "Dilly-Dally",
        "Views":  90593,
        "ViewsDelta":  819,
        "Type":  "Official Live Short",
        "Duration":  "1:00",
        "Image":  "https://img.youtube.com/vi/DcRCxpohwzw/sddefault.jpg"
    },
    {
        "Title":  "Sense",
        "Date":  "2022-09-20T06:04:05",
        "URL":  "https://youtu.be/eAX5_kypXp4",
        "VideoId":  "eAX5_kypXp4",
        "Song":  "Sense",
        "Views":  88459,
        "ViewsDelta":  44,
        "Type":  "Audio",
        "Duration":  "3:25",
        "Image":  "https://img.youtube.com/vi/eAX5_kypXp4/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Zen (Official Teaser Video)  KANAMI Ver.  MAPPAアニメ「全修。」オープニングテーマソング",
        "Date":  "2025-01-19T22:00:40",
        "URL":  "https://youtu.be/owIg4MUVG8M",
        "VideoId":  "owIg4MUVG8M",
        "Song":  "Zen",
        "Views":  86875,
        "ViewsDelta":  14,
        "Type":  "Official Teaser Video",
        "Duration":  "0:27",
        "Image":  "https://img.youtube.com/vi/owIg4MUVG8M/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video KANAMI ver.)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-03T12:00:12",
        "URL":  "https://youtu.be/ua-_klKlbdY",
        "VideoId":  "ua-_klKlbdY",
        "Song":  "Ready to Rock",
        "Views":  86174,
        "ViewsDelta":  5,
        "Type":  "Official Teaser Video",
        "Duration":  "0:24",
        "Image":  "https://img.youtube.com/vi/ua-_klKlbdY/sddefault.jpg"
    },
    {
        "Title":  "YOLOSIOSU",
        "Date":  "2019-04-02T11:05:25",
        "URL":  "https://youtu.be/4TniI0IJEkk",
        "VideoId":  "4TniI0IJEkk",
        "Song":  "YOLO",
        "Views":  80611,
        "ViewsDelta":  61,
        "Type":  "Audio",
        "Duration":  "4:22",
        "Image":  "https://img.youtube.com/vi/4TniI0IJEkk/sddefault.jpg"
    },
    {
        "Title":  "Don\u0027t be long",
        "Date":  "2020-12-01T10:04:07",
        "URL":  "https://youtu.be/XDZYylY1IHE",
        "VideoId":  "XDZYylY1IHE",
        "Song":  "Don\u0027t be long",
        "Views":  80494,
        "ViewsDelta":  95,
        "Type":  "Audio",
        "Duration":  "3:20",
        "Image":  "https://img.youtube.com/vi/XDZYylY1IHE/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Teaser Video MIKU KOBATO ver.) TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-07-18T23:00:29",
        "URL":  "https://youtu.be/KN5arIuiRp8",
        "VideoId":  "KN5arIuiRp8",
        "Song":  "What is justice?",
        "Views":  79558,
        "ViewsDelta":  7,
        "Type":  "Official Teaser Video",
        "Duration":  "0:27",
        "Image":  "https://img.youtube.com/vi/KN5arIuiRp8/sddefault.jpg"
    },
    {
        "Title":  "Brand-New Road",
        "Date":  "2018-10-02T11:27:08",
        "URL":  "https://youtu.be/_KVaSaQmb0k",
        "VideoId":  "_KVaSaQmb0k",
        "Song":  "Brand-New Road",
        "Views":  78675,
        "ViewsDelta":  61,
        "Type":  "Audio",
        "Duration":  "3:50",
        "Image":  "https://img.youtube.com/vi/_KVaSaQmb0k/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video KANAMI ver.2)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-17T23:00:39",
        "URL":  "https://youtu.be/XqGukTfP8n8",
        "VideoId":  "XqGukTfP8n8",
        "Song":  "Ready to Rock",
        "Views":  78142,
        "ViewsDelta":  7,
        "Type":  "Official Teaser Video",
        "Duration":  "0:12",
        "Image":  "https://img.youtube.com/vi/XqGukTfP8n8/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Live Video #shorts )  TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-07-31T06:01:22",
        "URL":  "https://youtu.be/rG8cfEJeNMw",
        "VideoId":  "rG8cfEJeNMw",
        "Song":  "What is justice?",
        "Views":  77643,
        "ViewsDelta":  19,
        "Type":  "Official Live Short",
        "Duration":  "0:34",
        "Image":  "https://img.youtube.com/vi/rG8cfEJeNMw/sddefault.jpg"
    },
    {
        "Title":  "すくりーみんぐ",
        "Date":  "2019-04-02T11:04:51",
        "URL":  "https://youtu.be/VACaI2GRUVE",
        "VideoId":  "VACaI2GRUVE",
        "Song":  "Screaming",
        "Views":  77483,
        "ViewsDelta":  54,
        "Type":  "Audio",
        "Duration":  "3:55",
        "Image":  "https://img.youtube.com/vi/VACaI2GRUVE/sddefault.jpg"
    },
    {
        "Title":  "Shake That!!",
        "Date":  "2023-08-01T06:00:07",
        "URL":  "https://youtu.be/CqFkNqdPnK8",
        "VideoId":  "CqFkNqdPnK8",
        "Song":  "Shake That!!",
        "Views":  73249,
        "ViewsDelta":  62,
        "Type":  "Audio",
        "Duration":  "4:05",
        "Image":  "https://img.youtube.com/vi/CqFkNqdPnK8/sddefault.jpg"
    },
    {
        "Title":  "Memorable",
        "Date":  "2024-09-24T06:00:54",
        "URL":  "https://youtu.be/o8p3rYAKFys",
        "VideoId":  "o8p3rYAKFys",
        "Song":  "Memorable",
        "Views":  70990,
        "ViewsDelta":  108,
        "Type":  "Audio",
        "Duration":  "3:14",
        "Image":  "https://img.youtube.com/vi/o8p3rYAKFys/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / without holding back (Official Live Teaser 1)",
        "Date":  "2026-01-01T07:01:37",
        "URL":  "https://youtu.be/sAt4wANOaqA",
        "VideoId":  "sAt4wANOaqA",
        "Song":  "without holding back",
        "Views":  70247,
        "ViewsDelta":  60,
        "Type":  "Official Live Short",
        "Duration":  "0:36",
        "Image":  "https://img.youtube.com/vi/sAt4wANOaqA/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Live Video 2 #shorts )  TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-08-07T23:11:02",
        "URL":  "https://youtu.be/UHZDVE5Ea6c",
        "VideoId":  "UHZDVE5Ea6c",
        "Song":  "What is justice?",
        "Views":  70225,
        "ViewsDelta":  36,
        "Type":  "Official Live Short",
        "Duration":  "0:33",
        "Image":  "https://img.youtube.com/vi/UHZDVE5Ea6c/sddefault.jpg"
    },
    {
        "Title":  "glory",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/uZJNer5jBm8",
        "VideoId":  "uZJNer5jBm8",
        "Song":  "glory",
        "Views":  68817,
        "ViewsDelta":  39,
        "Type":  "Audio",
        "Duration":  "3:40",
        "Image":  "https://img.youtube.com/vi/uZJNer5jBm8/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Dance Video Ver.2)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-19T22:00:44",
        "URL":  "https://youtu.be/jxhdmtaXg9A",
        "VideoId":  "jxhdmtaXg9A",
        "Song":  "Ready to Rock",
        "Views":  68072,
        "ViewsDelta":  4,
        "Type":  "Official Dance Video",
        "Duration":  "0:26",
        "Image":  "https://img.youtube.com/vi/jxhdmtaXg9A/sddefault.jpg"
    },
    {
        "Title":  "Puzzle",
        "Date":  "2023-08-01T06:00:27",
        "URL":  "https://youtu.be/gbopW5vHlio",
        "VideoId":  "gbopW5vHlio",
        "Song":  "Puzzle",
        "Views":  66173,
        "ViewsDelta":  52,
        "Type":  "Audio",
        "Duration":  "4:21",
        "Image":  "https://img.youtube.com/vi/gbopW5vHlio/sddefault.jpg"
    },
    {
        "Title":  "ansan",
        "Date":  "2019-04-02T11:04:52",
        "URL":  "https://youtu.be/EqV2Bnzj9Bo",
        "VideoId":  "EqV2Bnzj9Bo",
        "Song":  "anemone",
        "Views":  64913,
        "ViewsDelta":  64,
        "Type":  "Audio",
        "Duration":  "4:29",
        "Image":  "https://img.youtube.com/vi/EqV2Bnzj9Bo/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Live #Shorts 3) TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-09-02T23:01:06",
        "URL":  "https://youtu.be/wi1SwV0vWzs",
        "VideoId":  "wi1SwV0vWzs",
        "Song":  "Ready to Rock",
        "Views":  63915,
        "ViewsDelta":  28,
        "Type":  "Official Live Short",
        "Duration":  "0:37",
        "Image":  "https://img.youtube.com/vi/wi1SwV0vWzs/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Dilly-Dally (Official Live Teaser 2)",
        "Date":  "2026-04-11T08:00:00",
        "URL":  "https://youtu.be/v-71TD1qFZM",
        "VideoId":  "v-71TD1qFZM",
        "Song":  "Dilly-Dally",
        "Views":  63910,
        "ViewsDelta":  2638,
        "Type":  "Official Live Short",
        "Duration":  "1:00",
        "Image":  "https://img.youtube.com/vi/v-71TD1qFZM/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Teaser Video)",
        "Date":  "2025-10-14T23:30:17",
        "URL":  "https://youtu.be/M_YlnotO7sM",
        "VideoId":  "M_YlnotO7sM",
        "Song":  "Present Perfect",
        "Views":  62736,
        "ViewsDelta":  14,
        "Type":  "Official Teaser Video",
        "Duration":  "0:23",
        "Image":  "https://img.youtube.com/vi/M_YlnotO7sM/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / without holding back (Official Live Teaser 2)",
        "Date":  "2026-01-04T06:00:06",
        "URL":  "https://youtu.be/5H2X1aq94NI",
        "VideoId":  "5H2X1aq94NI",
        "Song":  "without holding back",
        "Views":  62073,
        "ViewsDelta":  130,
        "Type":  "Official Live Short",
        "Duration":  "0:44",
        "Image":  "https://img.youtube.com/vi/5H2X1aq94NI/sddefault.jpg"
    },
    {
        "Title":  "Daydreaming",
        "Date":  "2018-10-02T11:55:46",
        "URL":  "https://youtu.be/-7D6FuWUpsk",
        "VideoId":  "-7D6FuWUpsk",
        "Song":  "Daydreaming",
        "Views":  61601,
        "ViewsDelta":  51,
        "Type":  "Audio",
        "Duration":  "3:58",
        "Image":  "https://img.youtube.com/vi/-7D6FuWUpsk/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Protect You (Official Teaser Video)",
        "Date":  "2024-06-20T23:00:00",
        "URL":  "https://youtu.be/aGjPAPnf_-A",
        "VideoId":  "aGjPAPnf_-A",
        "Song":  "Protect You",
        "Views":  59267,
        "ViewsDelta":  3,
        "Type":  "Official Teaser Video",
        "Duration":  "0:26",
        "Image":  "https://img.youtube.com/vi/aGjPAPnf_-A/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video)  AKANE vs Pau",
        "Date":  "2024-07-31T11:00:32",
        "URL":  "https://youtu.be/N5uWg7wPvZA",
        "VideoId":  "N5uWg7wPvZA",
        "Song":  "Show Them",
        "Views":  58181,
        "ViewsDelta":  23,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29",
        "Image":  "https://img.youtube.com/vi/N5uWg7wPvZA/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-03-16T08:00:37",
        "URL":  "https://youtu.be/NFS8hO3BgTA",
        "VideoId":  "NFS8hO3BgTA",
        "Song":  "Ready to Rock",
        "Views":  57733,
        "ViewsDelta":  4,
        "Type":  "Official Teaser Video",
        "Duration":  "0:15",
        "Image":  "https://img.youtube.com/vi/NFS8hO3BgTA/sddefault.jpg"
    },
    {
        "Title":  "YOLO",
        "Date":  "2018-10-02T11:35:19",
        "URL":  "https://youtu.be/T_BxRz7-ncw",
        "VideoId":  "T_BxRz7-ncw",
        "Song":  "YOLO",
        "Views":  57369,
        "ViewsDelta":  33,
        "Type":  "Audio",
        "Duration":  "4:26",
        "Image":  "https://img.youtube.com/vi/T_BxRz7-ncw/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Dance Video)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-10T11:00:38",
        "URL":  "https://youtu.be/MPYm3Y6yVkM",
        "VideoId":  "MPYm3Y6yVkM",
        "Song":  "Ready to Rock",
        "Views":  57369,
        "ViewsDelta":  1,
        "Type":  "Official Dance Video",
        "Duration":  "0:26",
        "Image":  "https://img.youtube.com/vi/MPYm3Y6yVkM/sddefault.jpg"
    },
    {
        "Title":  "Akasimahen",
        "Date":  "2019-04-02T11:04:51",
        "URL":  "https://youtu.be/hHrnhXfJhL8",
        "VideoId":  "hHrnhXfJhL8",
        "Song":  "Awkward",
        "Views":  57033,
        "ViewsDelta":  39,
        "Type":  "Audio",
        "Duration":  "3:20",
        "Image":  "https://img.youtube.com/vi/hHrnhXfJhL8/sddefault.jpg"
    },
    {
        "Title":  "Thrill",
        "Date":  "2023-08-01T06:00:25",
        "URL":  "https://youtu.be/Nld9hWfIfjE",
        "VideoId":  "Nld9hWfIfjE",
        "Song":  "Thrill",
        "Views":  56048,
        "ViewsDelta":  49,
        "Type":  "Audio",
        "Duration":  "4:03",
        "Image":  "https://img.youtube.com/vi/Nld9hWfIfjE/sddefault.jpg"
    },
    {
        "Title":  "DICE",
        "Date":  "2023-08-01T06:00:33",
        "URL":  "https://youtu.be/bKCcDI5-Oa0",
        "VideoId":  "bKCcDI5-Oa0",
        "Song":  "DICE",
        "Views":  54376,
        "ViewsDelta":  65,
        "Type":  "Audio",
        "Duration":  "4:03",
        "Image":  "https://img.youtube.com/vi/bKCcDI5-Oa0/sddefault.jpg"
    },
    {
        "Title":  "DOMINATION",
        "Date":  "2023-08-01T06:00:41",
        "URL":  "https://youtu.be/uc6ILmIBTMA",
        "VideoId":  "uc6ILmIBTMA",
        "Song":  "DOMINATION",
        "Views":  54130,
        "ViewsDelta":  60,
        "Type":  "Audio",
        "Duration":  "3:51",
        "Image":  "https://img.youtube.com/vi/uc6ILmIBTMA/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Teaser Video AKANE)",
        "Date":  "2025-10-28T08:02:12",
        "URL":  "https://youtu.be/y_P3bYEjsbE",
        "VideoId":  "y_P3bYEjsbE",
        "Song":  "Present Perfect",
        "Views":  53957,
        "ViewsDelta":  68,
        "Type":  "Official Teaser Video",
        "Duration":  "0:23",
        "Image":  "https://img.youtube.com/vi/y_P3bYEjsbE/sddefault.jpg"
    },
    {
        "Title":  "Bubble",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/VMswJMSWKDw",
        "VideoId":  "VMswJMSWKDw",
        "Song":  "Bubble",
        "Views":  52445,
        "ViewsDelta":  24,
        "Type":  "Audio",
        "Duration":  "3:47",
        "Image":  "https://img.youtube.com/vi/VMswJMSWKDw/sddefault.jpg"
    },
    {
        "Title":  "I can\u0027t live without you.",
        "Date":  "2023-08-01T06:00:36",
        "URL":  "https://youtu.be/fbiSk3eczBc",
        "VideoId":  "fbiSk3eczBc",
        "Song":  "I can\u0027t live without you.",
        "Views":  50834,
        "ViewsDelta":  58,
        "Type":  "Audio",
        "Duration":  "3:50",
        "Image":  "https://img.youtube.com/vi/fbiSk3eczBc/sddefault.jpg"
    },
    {
        "Title":  "Play",
        "Date":  "2023-08-01T06:00:04",
        "URL":  "https://youtu.be/5kjW4huHKNo",
        "VideoId":  "5kjW4huHKNo",
        "Song":  "Play",
        "Views":  50694,
        "ViewsDelta":  48,
        "Type":  "Audio",
        "Duration":  "3:20",
        "Image":  "https://img.youtube.com/vi/5kjW4huHKNo/sddefault.jpg"
    },
    {
        "Title":  "Choose me",
        "Date":  "2023-08-01T06:00:09",
        "URL":  "https://youtu.be/I3icx12V-KU",
        "VideoId":  "I3icx12V-KU",
        "Song":  "Choose me",
        "Views":  50142,
        "ViewsDelta":  64,
        "Type":  "Audio",
        "Duration":  "3:39",
        "Image":  "https://img.youtube.com/vi/I3icx12V-KU/sddefault.jpg"
    },
    {
        "Title":  "FREEDOM",
        "Date":  "2023-08-01T06:00:18",
        "URL":  "https://youtu.be/VMZxl3h3IPc",
        "VideoId":  "VMZxl3h3IPc",
        "Song":  "FREEDOM",
        "Views":  50077,
        "ViewsDelta":  47,
        "Type":  "Audio",
        "Duration":  "3:45",
        "Image":  "https://img.youtube.com/vi/VMZxl3h3IPc/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video)  KANAMI vs Dany",
        "Date":  "2024-08-02T11:00:36",
        "URL":  "https://youtu.be/YN9Mv3C0WE4",
        "VideoId":  "YN9Mv3C0WE4",
        "Song":  "Show Them",
        "Views":  49848,
        "ViewsDelta":  30,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29",
        "Image":  "https://img.youtube.com/vi/YN9Mv3C0WE4/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Teaser Video SAIKI ver.) TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-07-19T23:00:35",
        "URL":  "https://youtu.be/TSb_aKt6KtI",
        "VideoId":  "TSb_aKt6KtI",
        "Song":  "What is justice?",
        "Views":  49504,
        "ViewsDelta":  20,
        "Type":  "Official Teaser Video",
        "Duration":  "0:27",
        "Image":  "https://img.youtube.com/vi/TSb_aKt6KtI/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Live Teaser 2)",
        "Date":  "2026-02-07T02:32:35",
        "URL":  "https://youtu.be/ia1bjN1tjq4",
        "VideoId":  "ia1bjN1tjq4",
        "Song":  "Present Perfect",
        "Views":  49168,
        "ViewsDelta":  105,
        "Type":  "Official Live Short",
        "Duration":  "1:00",
        "Image":  "https://img.youtube.com/vi/ia1bjN1tjq4/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video)  MISA vs Ale",
        "Date":  "2024-07-29T23:00:03",
        "URL":  "https://youtu.be/enNgR1c9ZEo",
        "VideoId":  "enNgR1c9ZEo",
        "Song":  "Show Them",
        "Views":  48990,
        "ViewsDelta":  15,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29",
        "Image":  "https://img.youtube.com/vi/enNgR1c9ZEo/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Teaser Video MIKU KOBATO)",
        "Date":  "2025-10-25T08:01:46",
        "URL":  "https://youtu.be/s9xuG5xq0jo",
        "VideoId":  "s9xuG5xq0jo",
        "Song":  "Present Perfect",
        "Views":  48524,
        "ViewsDelta":  18,
        "Type":  "Official Teaser Video",
        "Duration":  "0:23",
        "Image":  "https://img.youtube.com/vi/s9xuG5xq0jo/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Teaser Video 2) TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-07-17T23:00:29",
        "URL":  "https://youtu.be/WVpuhXbZuR0",
        "VideoId":  "WVpuhXbZuR0",
        "Song":  "What is justice?",
        "Views":  48511,
        "ViewsDelta":  14,
        "Type":  "Official Teaser Video",
        "Duration":  "0:30",
        "Image":  "https://img.youtube.com/vi/WVpuhXbZuR0/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video SAIKI ver.)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-07T22:00:25",
        "URL":  "https://youtu.be/RcoQoHORdek",
        "VideoId":  "RcoQoHORdek",
        "Song":  "Ready to Rock",
        "Views":  48458,
        "ViewsDelta":  2,
        "Type":  "Official Teaser Video",
        "Duration":  "0:24",
        "Image":  "https://img.youtube.com/vi/RcoQoHORdek/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video MISA ver.)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-05T22:21:17",
        "URL":  "https://youtu.be/h9t2zJe-JIY",
        "VideoId":  "h9t2zJe-JIY",
        "Song":  "Ready to Rock",
        "Views":  48084,
        "ViewsDelta":  7,
        "Type":  "Official Teaser Video",
        "Duration":  "0:24",
        "Image":  "https://img.youtube.com/vi/h9t2zJe-JIY/sddefault.jpg"
    },
    {
        "Title":  "Ready to Rock",
        "Date":  "2025-10-21T06:01:28",
        "URL":  "https://youtu.be/sYuZanAQ2Os",
        "VideoId":  "sYuZanAQ2Os",
        "Song":  "Ready to Rock",
        "Views":  47969,
        "ViewsDelta":  106,
        "Type":  "Audio",
        "Duration":  "3:34",
        "Image":  "https://img.youtube.com/vi/sYuZanAQ2Os/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-23T22:00:42",
        "URL":  "https://youtu.be/gKsEHgTRD84",
        "VideoId":  "gKsEHgTRD84",
        "Song":  "Ready to Rock",
        "Views":  47925,
        "ViewsDelta":  7,
        "Type":  "Official Teaser Video",
        "Duration":  "0:32",
        "Image":  "https://img.youtube.com/vi/gKsEHgTRD84/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Teaser Video 2)",
        "Date":  "2025-10-21T23:00:22",
        "URL":  "https://youtu.be/KYqudoBNACU",
        "VideoId":  "KYqudoBNACU",
        "Song":  "Present Perfect",
        "Views":  47455,
        "ViewsDelta":  22,
        "Type":  "Official Teaser Video",
        "Duration":  "0:26",
        "Image":  "https://img.youtube.com/vi/KYqudoBNACU/sddefault.jpg"
    },
    {
        "Title":  "REAL EXISTENCE",
        "Date":  "2023-08-01T06:00:14",
        "URL":  "https://youtu.be/KARLb_qDCpg",
        "VideoId":  "KARLb_qDCpg",
        "Song":  "REAL EXISTENCE",
        "Views":  47268,
        "ViewsDelta":  50,
        "Type":  "Audio",
        "Duration":  "4:10",
        "Image":  "https://img.youtube.com/vi/KARLb_qDCpg/sddefault.jpg"
    },
    {
        "Title":  "alone",
        "Date":  "2023-08-01T06:00:02",
        "URL":  "https://youtu.be/2UPXHfkrh-0",
        "VideoId":  "2UPXHfkrh-0",
        "Song":  "alone",
        "Views":  47000,
        "ViewsDelta":  48,
        "Type":  "Audio",
        "Duration":  "3:28",
        "Image":  "https://img.youtube.com/vi/2UPXHfkrh-0/sddefault.jpg"
    },
    {
        "Title":  "What is justice?",
        "Date":  "2025-10-21T06:00:06",
        "URL":  "https://youtu.be/2gKVQrp1IB4",
        "VideoId":  "2gKVQrp1IB4",
        "Song":  "What is justice?",
        "Views":  45752,
        "ViewsDelta":  102,
        "Type":  "Audio",
        "Duration":  "3:25",
        "Image":  "https://img.youtube.com/vi/2gKVQrp1IB4/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video)  MIKU KOBATO",
        "Date":  "2024-08-05T11:00:30",
        "URL":  "https://youtu.be/L1prF8ArZb8",
        "VideoId":  "L1prF8ArZb8",
        "Song":  "Show Them",
        "Views":  45717,
        "ViewsDelta":  2,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29",
        "Image":  "https://img.youtube.com/vi/L1prF8ArZb8/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Teaser Video KANAMI ver.) TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-07-20T23:00:29",
        "URL":  "https://youtu.be/RjdMcfqLzhk",
        "VideoId":  "RjdMcfqLzhk",
        "Song":  "What is justice?",
        "Views":  45517,
        "ViewsDelta":  12,
        "Type":  "Official Teaser Video",
        "Duration":  "0:27",
        "Image":  "https://img.youtube.com/vi/RjdMcfqLzhk/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video)  SAIKI vs Dany",
        "Date":  "2024-08-04T11:00:35",
        "URL":  "https://youtu.be/_wA3a3op4I4",
        "VideoId":  "_wA3a3op4I4",
        "Song":  "Show Them",
        "Views":  45038,
        "ViewsDelta":  19,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29",
        "Image":  "https://img.youtube.com/vi/_wA3a3op4I4/sddefault.jpg"
    },
    {
        "Title":  "Screaming",
        "Date":  "2023-08-01T06:00:46",
        "URL":  "https://youtu.be/yiwuTda0E8s",
        "VideoId":  "yiwuTda0E8s",
        "Song":  "Screaming",
        "Views":  44979,
        "ViewsDelta":  40,
        "Type":  "Audio",
        "Duration":  "3:50",
        "Image":  "https://img.youtube.com/vi/yiwuTda0E8s/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / New Album \"Epic Narratives\" (Official Teaser Video)",
        "Date":  "2024-07-14T07:15:29",
        "URL":  "https://youtu.be/kobDkT-NMkU",
        "VideoId":  "kobDkT-NMkU",
        "Song":  "",
        "Views":  44869,
        "ViewsDelta":  33,
        "Type":  "Official Teaser Video",
        "Duration":  "0:53",
        "Image":  "https://img.youtube.com/vi/kobDkT-NMkU/sddefault.jpg"
    },
    {
        "Title":  "Rock in me",
        "Date":  "2023-08-01T06:00:34",
        "URL":  "https://youtu.be/_i2Knq68730",
        "VideoId":  "_i2Knq68730",
        "Song":  "Rock in me",
        "Views":  43735,
        "ViewsDelta":  42,
        "Type":  "Audio",
        "Duration":  "3:22",
        "Image":  "https://img.youtube.com/vi/_i2Knq68730/sddefault.jpg"
    },
    {
        "Title":  "Daydreaming",
        "Date":  "2023-08-01T06:00:13",
        "URL":  "https://youtu.be/Msr-nKTQcao",
        "VideoId":  "Msr-nKTQcao",
        "Song":  "Daydreaming",
        "Views":  43081,
        "ViewsDelta":  31,
        "Type":  "Audio",
        "Duration":  "3:59",
        "Image":  "https://img.youtube.com/vi/Msr-nKTQcao/sddefault.jpg"
    },
    {
        "Title":  "YOLO",
        "Date":  "2023-08-01T06:00:28",
        "URL":  "https://youtu.be/hoOUddgdUXk",
        "VideoId":  "hoOUddgdUXk",
        "Song":  "YOLO",
        "Views":  42567,
        "ViewsDelta":  32,
        "Type":  "Audio",
        "Duration":  "4:26",
        "Image":  "https://img.youtube.com/vi/hoOUddgdUXk/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Teaser Video AKANE ver.) TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-07-21T23:00:46",
        "URL":  "https://youtu.be/byPQCySUe0M",
        "VideoId":  "byPQCySUe0M",
        "Song":  "What is justice?",
        "Views":  42240,
        "ViewsDelta":  12,
        "Type":  "Official Teaser Video",
        "Duration":  "0:27",
        "Image":  "https://img.youtube.com/vi/byPQCySUe0M/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Zen (Official Teaser Video)  AKANE Ver.  MAPPAアニメ「全修。」オープニングテーマソング",
        "Date":  "2025-01-16T22:00:12",
        "URL":  "https://youtu.be/Hn_D-xpYaXY",
        "VideoId":  "Hn_D-xpYaXY",
        "Song":  "Zen",
        "Views":  42136,
        "ViewsDelta":  3,
        "Type":  "Official Teaser Video",
        "Duration":  "0:27",
        "Image":  "https://img.youtube.com/vi/Hn_D-xpYaXY/sddefault.jpg"
    },
    {
        "Title":  "Don\u0027t you tell ME",
        "Date":  "2023-08-01T06:00:07",
        "URL":  "https://youtu.be/83axQdf0gE8",
        "VideoId":  "83axQdf0gE8",
        "Song":  "Don\u0027t you tell ME",
        "Views":  41318,
        "ViewsDelta":  31,
        "Type":  "Audio",
        "Duration":  "3:10",
        "Image":  "https://img.youtube.com/vi/83axQdf0gE8/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-08T22:00:10",
        "URL":  "https://youtu.be/Ii3dVgCB3_Q",
        "VideoId":  "Ii3dVgCB3_Q",
        "Song":  "Ready to Rock",
        "Views":  40025,
        "ViewsDelta":  1,
        "Type":  "Official Teaser Video",
        "Duration":  "0:26",
        "Image":  "https://img.youtube.com/vi/Ii3dVgCB3_Q/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Teaser Video KANAMI)",
        "Date":  "2025-10-27T08:00:58",
        "URL":  "https://youtu.be/V8qZKlfgoFg",
        "VideoId":  "V8qZKlfgoFg",
        "Song":  "Present Perfect",
        "Views":  39613,
        "ViewsDelta":  33,
        "Type":  "Official Teaser Video",
        "Duration":  "0:23",
        "Image":  "https://img.youtube.com/vi/V8qZKlfgoFg/sddefault.jpg"
    },
    {
        "Title":  "Zen",
        "Date":  "2025-10-21T06:00:05",
        "URL":  "https://youtu.be/azlZWEGgLQc",
        "VideoId":  "azlZWEGgLQc",
        "Song":  "Zen",
        "Views":  38938,
        "ViewsDelta":  108,
        "Type":  "Audio",
        "Duration":  "3:41",
        "Image":  "https://img.youtube.com/vi/azlZWEGgLQc/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID in SUMMER SONIC 2024 #サマソニ #SUMMERSONIC #bandmaid",
        "Date":  "2024-08-21T05:00:06",
        "URL":  "https://youtu.be/8ofX0GW1mHc",
        "VideoId":  "8ofX0GW1mHc",
        "Song":  "",
        "Views":  38102,
        "ViewsDelta":  5,
        "Type":  "Official Live Short",
        "Duration":  "0:38",
        "Image":  "https://img.youtube.com/vi/8ofX0GW1mHc/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Zen (Official Teaser Video)  SAIKI Ver.  MAPPAアニメ「全修。」オープニングテーマソング",
        "Date":  "2025-01-30T22:00:18",
        "URL":  "https://youtu.be/D-mKCUY2UmI",
        "VideoId":  "D-mKCUY2UmI",
        "Song":  "Zen",
        "Views":  36816,
        "ViewsDelta":  7,
        "Type":  "Official Teaser Video",
        "Duration":  "0:27",
        "Image":  "https://img.youtube.com/vi/D-mKCUY2UmI/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Teaser Video MISA ver.) TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-07-22T23:00:42",
        "URL":  "https://youtu.be/_xflJi4BvWo",
        "VideoId":  "_xflJi4BvWo",
        "Song":  "What is justice?",
        "Views":  36500,
        "ViewsDelta":  8,
        "Type":  "Official Teaser Video",
        "Duration":  "0:27",
        "Image":  "https://img.youtube.com/vi/_xflJi4BvWo/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Zen (Official Teaser Video) Lyric Video  MAPPAアニメ「全修。」オープニングテーマソング",
        "Date":  "2025-02-09T22:00:35",
        "URL":  "https://youtu.be/ir0wriDMxns",
        "VideoId":  "ir0wriDMxns",
        "Song":  "Zen",
        "Views":  36097,
        "ViewsDelta":  10,
        "Type":  "Official Teaser Video",
        "Duration":  "0:28",
        "Image":  "https://img.youtube.com/vi/ir0wriDMxns/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Zen (Official Teaser Video)  MISA Ver.  MAPPAアニメ「全修。」オープニングテーマソング",
        "Date":  "2025-01-26T22:00:40",
        "URL":  "https://youtu.be/kgIMz3ibHiU",
        "VideoId":  "kgIMz3ibHiU",
        "Song":  "Zen",
        "Views":  35532,
        "ViewsDelta":  8,
        "Type":  "Official Teaser Video",
        "Duration":  "0:27",
        "Image":  "https://img.youtube.com/vi/kgIMz3ibHiU/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Teaser Video SAIKI)",
        "Date":  "2025-10-26T08:00:17",
        "URL":  "https://youtu.be/LApK4w7OpJ8",
        "VideoId":  "LApK4w7OpJ8",
        "Song":  "Present Perfect",
        "Views":  34893,
        "ViewsDelta":  18,
        "Type":  "Official Teaser Video",
        "Duration":  "0:23",
        "Image":  "https://img.youtube.com/vi/LApK4w7OpJ8/sddefault.jpg"
    },
    {
        "Title":  "glory",
        "Date":  "2023-08-01T06:00:47",
        "URL":  "https://youtu.be/wvEFTlgYIAc",
        "VideoId":  "wvEFTlgYIAc",
        "Song":  "glory",
        "Views":  33762,
        "ViewsDelta":  30,
        "Type":  "Audio",
        "Duration":  "3:35",
        "Image":  "https://img.youtube.com/vi/wvEFTlgYIAc/sddefault.jpg"
    },
    {
        "Title":  "secret My lips",
        "Date":  "2023-08-01T06:00:10",
        "URL":  "https://youtu.be/85QjGCRd5j0",
        "VideoId":  "85QjGCRd5j0",
        "Song":  "secret My lips",
        "Views":  33689,
        "ViewsDelta":  33,
        "Type":  "Audio",
        "Duration":  "4:12",
        "Image":  "https://img.youtube.com/vi/85QjGCRd5j0/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID 2025",
        "Date":  "2024-11-26T06:18:21",
        "URL":  "https://youtu.be/vwX8-HPivqg",
        "VideoId":  "vwX8-HPivqg",
        "Song":  "Zen",
        "Views":  33355,
        "ViewsDelta":  2,
        "Type":  "Other",
        "Duration":  "0:57",
        "Image":  "https://img.youtube.com/vi/vwX8-HPivqg/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Teaser Video 3) TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-07-24T01:06:05",
        "URL":  "https://youtu.be/AoIdy16pje8",
        "VideoId":  "AoIdy16pje8",
        "Song":  "What is justice?",
        "Views":  33193,
        "ViewsDelta":  30,
        "Type":  "Official Teaser Video",
        "Duration":  "0:32",
        "Image":  "https://img.youtube.com/vi/AoIdy16pje8/sddefault.jpg"
    },
    {
        "Title":  "the non-fiction days",
        "Date":  "2023-08-01T06:00:04",
        "URL":  "https://youtu.be/5rhwRHIF_EM",
        "VideoId":  "5rhwRHIF_EM",
        "Song":  "the non-fiction days",
        "Views":  32918,
        "ViewsDelta":  21,
        "Type":  "Audio",
        "Duration":  "4:43",
        "Image":  "https://img.youtube.com/vi/5rhwRHIF_EM/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Teaser Video MISA)",
        "Date":  "2025-10-29T08:00:14",
        "URL":  "https://youtu.be/3ZvAceQG1Zw",
        "VideoId":  "3ZvAceQG1Zw",
        "Song":  "Present Perfect",
        "Views":  32752,
        "ViewsDelta":  28,
        "Type":  "Official Teaser Video",
        "Duration":  "0:23",
        "Image":  "https://img.youtube.com/vi/3ZvAceQG1Zw/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Zen (Official Teaser Video)　MAPPAアニメ「全修。」オープニングテーマソング",
        "Date":  "2025-01-16T01:00:24",
        "URL":  "https://youtu.be/CXQeSVxdSw4",
        "VideoId":  "CXQeSVxdSw4",
        "Song":  "Zen",
        "Views":  32461,
        "ViewsDelta":  3,
        "Type":  "Official Teaser Video",
        "Duration":  "0:30",
        "Image":  "https://img.youtube.com/vi/CXQeSVxdSw4/sddefault.jpg"
    },
    {
        "Title":  "Different",
        "Date":  "2023-08-01T06:00:05",
        "URL":  "https://youtu.be/91oVKMsHpYI",
        "VideoId":  "91oVKMsHpYI",
        "Song":  "Different",
        "Views":  31524,
        "ViewsDelta":  36,
        "Type":  "Audio",
        "Duration":  "3:30",
        "Image":  "https://img.youtube.com/vi/91oVKMsHpYI/sddefault.jpg"
    },
    {
        "Title":  "start over",
        "Date":  "2023-08-01T06:00:01",
        "URL":  "https://youtu.be/a3QswEhUsy4",
        "VideoId":  "a3QswEhUsy4",
        "Song":  "start over",
        "Views":  31468,
        "ViewsDelta":  20,
        "Type":  "Audio",
        "Duration":  "3:12",
        "Image":  "https://img.youtube.com/vi/a3QswEhUsy4/sddefault.jpg"
    },
    {
        "Title":  "Bubble",
        "Date":  "2023-08-01T06:00:45",
        "URL":  "https://youtu.be/viKp4mkdAzk",
        "VideoId":  "viKp4mkdAzk",
        "Song":  "Bubble",
        "Views":  31395,
        "ViewsDelta":  29,
        "Type":  "Audio",
        "Duration":  "3:45",
        "Image":  "https://img.youtube.com/vi/viKp4mkdAzk/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Forbidden tale (Official Teaser Video) KANAMI",
        "Date":  "2024-10-14T09:00:39",
        "URL":  "https://youtu.be/X4IQwPJN7E0",
        "VideoId":  "X4IQwPJN7E0",
        "Song":  "Forbidden tale",
        "Views":  31245,
        "ViewsDelta":  6,
        "Type":  "Official Teaser Video",
        "Duration":  "0:32",
        "Image":  "https://img.youtube.com/vi/X4IQwPJN7E0/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Forbidden tale (Official Teaser Video) AKANE",
        "Date":  "2024-10-13T09:00:46",
        "URL":  "https://youtu.be/fwKbV3B7pg4",
        "VideoId":  "fwKbV3B7pg4",
        "Song":  "Forbidden tale",
        "Views":  31233,
        "ViewsDelta":  7,
        "Type":  "Official Teaser Video",
        "Duration":  "0:30",
        "Image":  "https://img.youtube.com/vi/fwKbV3B7pg4/sddefault.jpg"
    },
    {
        "Title":  "endless Story",
        "Date":  "2023-08-01T06:00:35",
        "URL":  "https://youtu.be/cKG44jAk1Y8",
        "VideoId":  "cKG44jAk1Y8",
        "Song":  "endless Story",
        "Views":  30886,
        "ViewsDelta":  21,
        "Type":  "Audio",
        "Duration":  "3:42",
        "Image":  "https://img.youtube.com/vi/cKG44jAk1Y8/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) KANAMI",
        "Date":  "2024-08-07T11:00:03",
        "URL":  "https://youtu.be/2uVT3sr8QAs",
        "VideoId":  "2uVT3sr8QAs",
        "Song":  "Show Them",
        "Views":  29236,
        "ViewsDelta":  9,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29",
        "Image":  "https://img.youtube.com/vi/2uVT3sr8QAs/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Talk Video  浦和希さん× 小鳩ミク Kazuki Ura × Miku Kobato)",
        "Date":  "2025-07-16T01:01:04",
        "URL":  "https://youtu.be/zBOqFbyTgkI",
        "VideoId":  "zBOqFbyTgkI",
        "Song":  "What is justice?",
        "Views":  28677,
        "ViewsDelta":  5,
        "Type":  "Official Talk Video",
        "Duration":  "1:00",
        "Image":  "https://img.youtube.com/vi/zBOqFbyTgkI/sddefault.jpg"
    },
    {
        "Title":  "Blooming",
        "Date":  "2023-08-01T06:00:00",
        "URL":  "https://youtu.be/-XFwab31HfY",
        "VideoId":  "-XFwab31HfY",
        "Song":  "Blooming",
        "Views":  28637,
        "ViewsDelta":  23,
        "Type":  "Audio",
        "Duration":  "3:47",
        "Image":  "https://img.youtube.com/vi/-XFwab31HfY/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Magie  #ジャイガ #bandmaid #夏フェス",
        "Date":  "2024-07-21T00:00:10",
        "URL":  "https://youtu.be/B2N2xiinQzI",
        "VideoId":  "B2N2xiinQzI",
        "Song":  "Magie",
        "Views":  28022,
        "ViewsDelta":  4,
        "Type":  "Official Live Short",
        "Duration":  "0:24",
        "Image":  "https://img.youtube.com/vi/B2N2xiinQzI/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Forbidden tale (Official Teaser Video) SAIKI",
        "Date":  "2024-10-15T09:01:11",
        "URL":  "https://youtu.be/woI6ILUBWaI",
        "VideoId":  "woI6ILUBWaI",
        "Song":  "Forbidden tale",
        "Views":  27900,
        "ViewsDelta":  10,
        "Type":  "Official Teaser Video",
        "Duration":  "0:32",
        "Image":  "https://img.youtube.com/vi/woI6ILUBWaI/sddefault.jpg"
    },
    {
        "Title":  "輪廻",
        "Date":  "2023-08-01T06:00:16",
        "URL":  "https://youtu.be/CUteeAnG5Y4",
        "VideoId":  "CUteeAnG5Y4",
        "Song":  "Rinne",
        "Views":  26652,
        "ViewsDelta":  32,
        "Type":  "Audio",
        "Duration":  "3:26",
        "Image":  "https://img.youtube.com/vi/CUteeAnG5Y4/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / New Album \"Epic Narratives\" (Official Teaser Video)",
        "Date":  "2024-09-24T23:00:12",
        "URL":  "https://youtu.be/8dawxG_v7Fc",
        "VideoId":  "8dawxG_v7Fc",
        "Song":  "",
        "Views":  26385,
        "ViewsDelta":  3,
        "Type":  "Official Teaser Video",
        "Duration":  "1:00",
        "Image":  "https://img.youtube.com/vi/8dawxG_v7Fc/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Forbidden tale (Official Teaser Video)",
        "Date":  "2024-10-03T04:30:13",
        "URL":  "https://youtu.be/D0Lj5un6Ul0",
        "VideoId":  "D0Lj5un6Ul0",
        "Song":  "Forbidden tale",
        "Views":  25818,
        "ViewsDelta":  6,
        "Type":  "Official Teaser Video",
        "Duration":  "0:49",
        "Image":  "https://img.youtube.com/vi/D0Lj5un6Ul0/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / Forbidden tale (Official Teaser Video) MISA",
        "Date":  "2024-10-12T09:00:32",
        "URL":  "https://youtu.be/PDhRae9X-w4",
        "VideoId":  "PDhRae9X-w4",
        "Song":  "Forbidden tale",
        "Views":  25704,
        "ViewsDelta":  10,
        "Type":  "Official Teaser Video",
        "Duration":  "0:32",
        "Image":  "https://img.youtube.com/vi/PDhRae9X-w4/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video)",
        "Date":  "2024-08-05T23:27:06",
        "URL":  "https://youtu.be/e3Q0GuBX3rk",
        "VideoId":  "e3Q0GuBX3rk",
        "Song":  "Show Them",
        "Views":  25263,
        "ViewsDelta":  11,
        "Type":  "Official Teaser Video",
        "Duration":  "0:37",
        "Image":  "https://img.youtube.com/vi/e3Q0GuBX3rk/sddefault.jpg"
    },
    {
        "Title":  "2024.09.25 Release / BAND-MAID New Album \"Epic Narratives\" (Official Teaser Video)",
        "Date":  "2024-08-21T05:00:20",
        "URL":  "https://youtu.be/PfMQkYxaVWE",
        "VideoId":  "PfMQkYxaVWE",
        "Song":  "",
        "Views":  24124,
        "ViewsDelta":  5,
        "Type":  "Official Teaser Video",
        "Duration":  "0:31",
        "Image":  "https://img.youtube.com/vi/PfMQkYxaVWE/sddefault.jpg"
    },
    {
        "Title":  "YOLO (instrumental)",
        "Date":  "2018-10-02T11:42:18",
        "URL":  "https://youtu.be/_iU7a_GnZXo",
        "VideoId":  "_iU7a_GnZXo",
        "Song":  "YOLO",
        "Views":  23394,
        "ViewsDelta":  24,
        "Type":  "Audio",
        "Duration":  "4:26",
        "Image":  "https://img.youtube.com/vi/_iU7a_GnZXo/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / What is justice? ×『桃源暗鬼』  Special Music Video #shorts (Anime Music Video Shorts)",
        "Date":  "2025-10-01T23:01:08",
        "URL":  "https://youtu.be/sts6c_ZTwUM",
        "VideoId":  "sts6c_ZTwUM",
        "Song":  "What is justice?",
        "Views":  21335,
        "ViewsDelta":  28,
        "Type":  "Anime Music Video Short",
        "Duration":  "0:31",
        "Image":  "https://img.youtube.com/vi/sts6c_ZTwUM/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) AKANE",
        "Date":  "2024-08-08T11:00:33",
        "URL":  "https://youtu.be/TXj5Y4VfVkU",
        "VideoId":  "TXj5Y4VfVkU",
        "Song":  "Show Them",
        "Views":  20574,
        "ViewsDelta":  9,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29",
        "Image":  "https://img.youtube.com/vi/TXj5Y4VfVkU/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) MISA vs Ale part 2",
        "Date":  "2024-08-14T11:00:00",
        "URL":  "https://youtu.be/-NsV_51FYVE",
        "VideoId":  "-NsV_51FYVE",
        "Song":  "Show Them",
        "Views":  20000,
        "ViewsDelta":  6,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29",
        "Image":  "https://img.youtube.com/vi/-NsV_51FYVE/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID / What is justice? ×『桃源暗鬼』  Special Music Video #shorts 2 (Anime Music Video Shorts 2)",
        "Date":  "2025-10-03T10:31:10",
        "URL":  "https://youtu.be/YltgGeE57LU",
        "VideoId":  "YltgGeE57LU",
        "Song":  "What is justice?",
        "Views":  17393,
        "ViewsDelta":  35,
        "Type":  "Anime Music Video Short",
        "Duration":  "0:41",
        "Image":  "https://img.youtube.com/vi/YltgGeE57LU/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) AKANE vs Pau part 2",
        "Date":  "2024-08-13T11:00:36",
        "URL":  "https://youtu.be/XDu4B75zz18",
        "VideoId":  "XDu4B75zz18",
        "Song":  "Show Them",
        "Views":  16201,
        "ViewsDelta":  9,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29",
        "Image":  "https://img.youtube.com/vi/XDu4B75zz18/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) MISA",
        "Date":  "2024-08-09T11:00:30",
        "URL":  "https://youtu.be/KKJUY7g1UaU",
        "VideoId":  "KKJUY7g1UaU",
        "Song":  "Show Them",
        "Views":  15391,
        "ViewsDelta":  12,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29",
        "Image":  "https://img.youtube.com/vi/KKJUY7g1UaU/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) KANAMI vs Dany  part 2",
        "Date":  "2024-08-12T11:00:23",
        "URL":  "https://youtu.be/QtdLS9CLkj8",
        "VideoId":  "QtdLS9CLkj8",
        "Song":  "Show Them",
        "Views":  14920,
        "ViewsDelta":  7,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29",
        "Image":  "https://img.youtube.com/vi/QtdLS9CLkj8/sddefault.jpg"
    },
    {
        "Title":  "Different (89sec Ver.)",
        "Date":  "2020-12-01T10:04:07",
        "URL":  "https://youtu.be/zjYoCChnNjw",
        "VideoId":  "zjYoCChnNjw",
        "Song":  "Different",
        "Views":  13131,
        "ViewsDelta":  10,
        "Type":  "Audio",
        "Duration":  "1:31",
        "Image":  "https://img.youtube.com/vi/zjYoCChnNjw/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) SAIKI vs Dany  part 2",
        "Date":  "2024-08-11T11:00:10",
        "URL":  "https://youtu.be/Cc30aTM0DVo",
        "VideoId":  "Cc30aTM0DVo",
        "Song":  "Show Them",
        "Views":  11520,
        "ViewsDelta":  3,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29",
        "Image":  "https://img.youtube.com/vi/Cc30aTM0DVo/sddefault.jpg"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) SAIKI",
        "Date":  "2024-08-07T11:00:41",
        "URL":  "https://youtu.be/ccfzCEO2RC8",
        "VideoId":  "ccfzCEO2RC8",
        "Song":  "Show Them",
        "Views":  10094,
        "ViewsDelta":  10,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29",
        "Image":  "https://img.youtube.com/vi/ccfzCEO2RC8/sddefault.jpg"
    },
    {
        "Title":  "endless Story",
        "Date":  "2019-10-02T11:00:23",
        "URL":  "https://youtu.be/MmhcEkgr_kY",
        "VideoId":  "MmhcEkgr_kY",
        "Song":  "endless Story",
        "Views":  10093,
        "ViewsDelta":  3,
        "Type":  "Audio",
        "Duration":  "3:45",
        "Image":  "https://img.youtube.com/vi/MmhcEkgr_kY/sddefault.jpg"
    },
    {
        "Title":  "Protect You (TVサイズ)",
        "Date":  "2024-10-08T06:04:40",
        "URL":  "https://youtu.be/JQTMWroS3So",
        "VideoId":  "JQTMWroS3So",
        "Song":  "Protect You",
        "Views":  9292,
        "ViewsDelta":  8,
        "Type":  "Audio",
        "Duration":  "1:37",
        "Image":  "https://img.youtube.com/vi/JQTMWroS3So/sddefault.jpg"
    },
    {
        "Title":  "glory",
        "Date":  "2019-01-15T10:01:50",
        "URL":  "https://youtu.be/-ZalwXFqleQ",
        "VideoId":  "-ZalwXFqleQ",
        "Song":  "glory",
        "Views":  6070,
        "ViewsDelta":  1,
        "Type":  "Audio",
        "Duration":  "3:36",
        "Image":  "https://img.youtube.com/vi/-ZalwXFqleQ/sddefault.jpg"
    },
    {
        "Title":  "secret MAIKO lips",
        "Date":  "2018-10-02T11:19:47",
        "URL":  "https://youtu.be/jjLrlvuPVqY",
        "VideoId":  "jjLrlvuPVqY",
        "Song":  "secret My lips",
        "Views":  5279,
        "ViewsDelta":  2,
        "Type":  "Audio",
        "Duration":  "4:28",
        "Image":  "https://img.youtube.com/vi/jjLrlvuPVqY/sddefault.jpg"
    }

    ];
  
    const byId = (id) => document.getElementById(id);
    function waitFor(selector, root = document, timeoutMs = 15000) {
      return new Promise((resolve, reject) => {
        const el = root.querySelector(selector);
        if (el) return resolve(el);
        const obs = new MutationObserver(() => {
          const found = root.querySelector(selector);
          if (found) { obs.disconnect(); resolve(found); }
        });
        obs.observe(root, { childList: true, subtree: true });
        if (timeoutMs > 0) setTimeout(() => { obs.disconnect(); reject(new Error('timeout')); }, timeoutMs);
      });
    }
    function debounce(fn, ms) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; }
  
    function searchData(query) {
      const q = query.trim().toLowerCase();
      if (!q) return [];
      return DATA.filter(item => {
        const title = (item.Title || '').toLowerCase();
        const song  = (item.Song  || '').toLowerCase();
        return title.includes(q) || song.includes(q);
      });
    }
  
    const CONTAINER_ID = 'bm-embedded-search-container';
    const INPUT_ID     = 'bm-embedded-search-input';
    const RESULTS_ID   = 'bm-embedded-search-results';
  
    function ensureStyles() {
      if (byId('bm-embedded-search-styles')) return;
      const style = document.createElement('style');
      style.id = 'bm-embedded-search-styles';
      style.textContent = `
        #${CONTAINER_ID} {
          box-sizing: border-box; width: 100%;
          display: flex; justify-content: center; align-items: stretch; gap: 12px;
          padding: 10px 16px; border-bottom: 1px solid var(--yt-spec-10-percent-layer, rgba(255,255,255,0.1));
          background: var(--yt-spec-base-background, #0f0f0f); z-index: 2025;
        }
        #${CONTAINER_ID}.light { background: #fff; border-color: rgba(0,0,0,0.08); }
        #${INPUT_ID} {
          flex: 1 1 720px; max-width: 1100px;
          font: inherit; padding: 10px 12px; border-radius: 18px;
          border: 1px solid var(--yt-spec-10-percent-layer, rgba(255,255,255,0.2));
          background: var(--yt-spec-badge-chip-background, #121212); color: var(--yt-spec-text-primary, #fff);
          outline: none;
        }
        #${CONTAINER_ID}.light #${INPUT_ID} { background: #fff; color: #111; border-color: rgba(0,0,0,0.2); }
        #${RESULTS_ID} {
          box-sizing: border-box; width: 100%; max-width: 1100px; margin: 0 auto; padding: 8px 16px 12px;
          display: grid; grid-template-columns: 1fr; gap: 6px;
        }
        #${RESULTS_ID} .item {
          padding: 8px 10px; border-radius: 10px;
          border: 1px solid var(--yt-spec-10-percent-layer, rgba(255,255,255,0.15));
          background: var(--yt-spec-raised-background, #1a1a1a); color: var(--yt-spec-text-primary, #fff);
        }
        #${CONTAINER_ID}.light ~ #${RESULTS_ID} .item { background: #fafafa; color: #111; border-color: rgba(0,0,0,0.08); }
        #${RESULTS_ID} .title { text-decoration: none; color: inherit; display: inline-block; word-break: break-word; }
        #${RESULTS_ID} .meta { display: block; font-size: 12px; opacity: 0.75; margin-top: 2px; }
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
        if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(results, anchor.nextSibling);
        else document.body.prepend(results);
      }

    // add near other helpers
    const fmtInt = (n) => {
      const v = Number(n);
      return Number.isFinite(v) ? v.toLocaleString('en-US') : '';
    }

      if (!items.length) {
        results.replaceChildren(); // clear
        results.classList.add('hidden');
        return;
      }
      results.classList.remove('hidden');
  
      const nodes = [];
      for (const it of items) {
        const wrapper = document.createElement('div');
        wrapper.className = 'item';
  
        const a = document.createElement('a');
        a.className = 'title';
        a.href = String(it.URL || '#');
        a.target = '_blank';
        a.rel = 'noopener';
        a.textContent = it.Title || it.URL || 'Untitled';
  
        const meta = document.createElement('span');
        meta.className = 'meta';
        const parts = [];
        if (it.Date)     parts.push(it.Date);
        if (it.Duration) parts.push(it.Duration);
        if (it.Type)     parts.push(it.Type);
        if (it.Song)     parts.push(`Song: ${it.Song}`);
        if (it.Views != null) parts.push(`${fmtInt(it.Views)} views`);
        meta.textContent = parts.join(' * ');
  
        wrapper.appendChild(a);
        wrapper.appendChild(meta);
        nodes.push(wrapper);
      }
      results.replaceChildren(...nodes);
    }
  
    function createOrAttachUI() {
      if (byId(CONTAINER_ID)) return;
  
      ensureStyles();
  
      const preferLight = () => {
        const scheme = document.documentElement.getAttribute('color-scheme');
        if (scheme === 'light') return true;
        const bg = getComputedStyle(document.documentElement).getPropertyValue('--yt-spec-base-background').trim();
        return !!(bg && (bg.includes('#fff') || bg.includes('255,255,255')));
      };
  
      const container = document.createElement('div');
      container.id = CONTAINER_ID;
      if (preferLight()) container.classList.add('light');
  
      const input = document.createElement('input');
      input.id = INPUT_ID;
      input.type = 'search';
      input.placeholder = 'Search BAND-MAID data (Title or Song)...';
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
        if (e.key === 'Enter') renderResults(searchData(input.value || ''));
      });
  
      container.appendChild(input);
  
      const masthead = document.querySelector('#masthead');
      if (masthead && masthead.parentNode) masthead.parentNode.insertBefore(container, masthead.nextSibling);
      else document.body.prepend(container);
  
      window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === '/') { e.preventDefault(); input.focus(); }
      }, { passive: false });
    }
  
    async function init() {
      try { await waitFor('#masthead', document, 10000).catch(() => null); createOrAttachUI(); } catch {}
    }
  
    init();
    window.addEventListener('yt-navigate-finish', init);
    window.addEventListener('yt-page-data-updated', init);
    const rootObserver = new MutationObserver(() => { if (!byId(CONTAINER_ID)) createOrAttachUI(); });
    rootObserver.observe(document.documentElement, { childList: true, subtree: true });
  })();
  
