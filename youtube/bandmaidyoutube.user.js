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
        "Views":  23230541,
        "ViewsDelta":  3417,
        "Type":  "Official Music Video",
        "Duration":  "4:11"
    },
    {
        "Title":  "BAND-MAID / REAL EXISTENCE (Official Music Video)",
        "Date":  "2015-06-17T01:02:24",
        "URL":  "https://youtu.be/9TkHpvaO09c",
        "VideoId":  "9TkHpvaO09c",
        "Song":  "REAL EXISTENCE",
        "Views":  16224245,
        "ViewsDelta":  995,
        "Type":  "Official Music Video",
        "Duration":  "4:11"
    },
    {
        "Title":  "BAND-MAID / Choose me  (Official Music Video)",
        "Date":  "2017-06-26T06:06:37",
        "URL":  "https://youtu.be/MZIJ2vFxu9Y",
        "VideoId":  "MZIJ2vFxu9Y",
        "Song":  "Choose me",
        "Views":  15862283,
        "ViewsDelta":  2725,
        "Type":  "Official Music Video",
        "Duration":  "3:47"
    },
    {
        "Title":  "BAND-MAID / DICE (Official Music Video)",
        "Date":  "2018-03-03T22:00:07",
        "URL":  "https://youtu.be/ZpAYnVJX9CY",
        "VideoId":  "ZpAYnVJX9CY",
        "Song":  "DICE",
        "Views":  9985177,
        "ViewsDelta":  1634,
        "Type":  "Official Music Video",
        "Duration":  "4:15"
    },
    {
        "Title":  "BAND-MAID / alone (Official Music Video)",
        "Date":  "2016-02-14T07:00:02",
        "URL":  "https://youtu.be/axF56i4spio",
        "VideoId":  "axF56i4spio",
        "Song":  "alone",
        "Views":  7704074,
        "ViewsDelta":  723,
        "Type":  "Official Music Video",
        "Duration":  "3:30"
    },
    {
        "Title":  "BAND-MAID / the non-fiction days (Official Music Video)",
        "Date":  "2016-04-07T23:02:08",
        "URL":  "https://youtu.be/ItYN-ri1NPs",
        "VideoId":  "ItYN-ri1NPs",
        "Song":  "the non-fiction days",
        "Views":  7674812,
        "ViewsDelta":  816,
        "Type":  "Official Music Video",
        "Duration":  "4:51"
    },
    {
        "Title":  "BAND-MAID / YOLO (Official Music Video)",
        "Date":  "2016-10-01T07:29:55",
        "URL":  "https://youtu.be/wKZbzcUdY1g",
        "VideoId":  "wKZbzcUdY1g",
        "Song":  "YOLO",
        "Views":  5876306,
        "ViewsDelta":  652,
        "Type":  "Official Music Video",
        "Duration":  "4:37"
    },
    {
        "Title":  "BAND-MAID / Don\u0027t you tell ME (Official Music Video)",
        "Date":  "2017-01-09T06:00:16",
        "URL":  "https://youtu.be/tGXzhxXVimY",
        "VideoId":  "tGXzhxXVimY",
        "Song":  "Don\u0027t you tell ME",
        "Views":  5468954,
        "ViewsDelta":  343,
        "Type":  "Official Music Video",
        "Duration":  "3:35"
    },
    {
        "Title":  "BAND-MAID / Daydreaming (Official Music Video)",
        "Date":  "2017-05-26T08:00:02",
        "URL":  "https://youtu.be/RCaeUkrItyY",
        "VideoId":  "RCaeUkrItyY",
        "Song":  "Daydreaming",
        "Views":  5318287,
        "ViewsDelta":  617,
        "Type":  "Official Music Video",
        "Duration":  "4:09"
    },
    {
        "Title":  "BAND-MAID / Don’t let me down (Official Music Video)",
        "Date":  "2015-10-06T04:59:59",
        "URL":  "https://youtu.be/0YGwUhg2XNk",
        "VideoId":  "0YGwUhg2XNk",
        "Song":  "Don\u0027t let me down",
        "Views":  5145389,
        "ViewsDelta":  228,
        "Type":  "Official Music Video",
        "Duration":  "3:24"
    },
    {
        "Title":  "BAND-MAID / Sense (Official Music Video)",
        "Date":  "2021-10-26T11:00:11",
        "URL":  "https://youtu.be/BWN6iOFjm9U",
        "VideoId":  "BWN6iOFjm9U",
        "Song":  "Sense",
        "Views":  5015968,
        "ViewsDelta":  908,
        "Type":  "Official Music Video",
        "Duration":  "3:28"
    },
    {
        "Title":  "BAND-MAID / DOMINATION  (Official Live Video)",
        "Date":  "2020-03-20T08:00:05",
        "URL":  "https://youtu.be/QbyQCJn6rYg",
        "VideoId":  "QbyQCJn6rYg",
        "Song":  "DOMINATION",
        "Views":  4941289,
        "ViewsDelta":  850,
        "Type":  "Official Live Video",
        "Duration":  "4:58"
    },
    {
        "Title":  "BAND-MAID / DOMINATION (Official Music Video)",
        "Date":  "2018-02-07T06:00:01",
        "URL":  "https://youtu.be/xmxEuQXTHUU",
        "VideoId":  "xmxEuQXTHUU",
        "Song":  "DOMINATION",
        "Views":  4873752,
        "ViewsDelta":  495,
        "Type":  "Official Music Video",
        "Duration":  "3:59"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Music Video)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-03T11:30:08",
        "URL":  "https://youtu.be/eapNDHKbu0M",
        "VideoId":  "eapNDHKbu0M",
        "Song":  "Ready to Rock",
        "Views":  4741758,
        "ViewsDelta":  2857,
        "Type":  "Official Music Video",
        "Duration":  "3:40"
    },
    {
        "Title":  "BAND-MAIKO / secret MAIKO lips (Official Music Video)",
        "Date":  "2018-03-31T11:09:21",
        "URL":  "https://youtu.be/NNHGABwme50",
        "VideoId":  "NNHGABwme50",
        "Song":  "secret My lips",
        "Views":  4709014,
        "ViewsDelta":  445,
        "Type":  "Official Music Video",
        "Duration":  "4:55"
    },
    {
        "Title":  "BAND-MAID / Different (Official Music Video)",
        "Date":  "2020-12-01T08:00:12",
        "URL":  "https://youtu.be/edlLhh8qVxM",
        "VideoId":  "edlLhh8qVxM",
        "Song":  "Different",
        "Views":  4626138,
        "ViewsDelta":  739,
        "Type":  "Official Music Video",
        "Duration":  "3:36"
    },
    {
        "Title":  "BAND-MAID / glory (Official Music Video)",
        "Date":  "2018-11-02T04:00:04",
        "URL":  "https://youtu.be/TAMiLTiXPpU",
        "VideoId":  "TAMiLTiXPpU",
        "Song":  "glory",
        "Views":  4094764,
        "ViewsDelta":  1012,
        "Type":  "Official Music Video",
        "Duration":  "4:05"
    },
    {
        "Title":  "BAND-MAID / Unleash!!!!! (Official Music Video)",
        "Date":  "2022-08-09T11:00:12",
        "URL":  "https://youtu.be/7LB_EPS48HE",
        "VideoId":  "7LB_EPS48HE",
        "Song":  "Unleash!!!!!",
        "Views":  4018509,
        "ViewsDelta":  869,
        "Type":  "Official Music Video",
        "Duration":  "3:10"
    },
    {
        "Title":  "BAND-MAID / FREEDOM (Official Live Video)",
        "Date":  "2020-06-30T23:00:03",
        "URL":  "https://youtu.be/FHpuEqMAcDg",
        "VideoId":  "FHpuEqMAcDg",
        "Song":  "FREEDOM",
        "Views":  3972367,
        "ViewsDelta":  838,
        "Type":  "Official Live Video",
        "Duration":  "4:33"
    },
    {
        "Title":  "BAND-MAID / onset (Official Live Video)",
        "Date":  "2020-06-23T21:00:07",
        "URL":  "https://youtu.be/mVrN-j_Uc0U",
        "VideoId":  "mVrN-j_Uc0U",
        "Song":  "onset",
        "Views":  3811892,
        "ViewsDelta":  1016,
        "Type":  "Official Live Video",
        "Duration":  "3:59"
    },
    {
        "Title":  "BAND-MAID / Blooming (Official Music Video)",
        "Date":  "2019-12-09T22:00:05",
        "URL":  "https://youtu.be/uUt_JBMocKM",
        "VideoId":  "uUt_JBMocKM",
        "Song":  "Blooming",
        "Views":  3713749,
        "ViewsDelta":  788,
        "Type":  "Official Music Video",
        "Duration":  "3:57"
    },
    {
        "Title":  "BAND-MAID / secret My lips (Official Music Video)",
        "Date":  "2017-03-25T23:15:48",
        "URL":  "https://youtu.be/1Vuca7V-5Ec",
        "VideoId":  "1Vuca7V-5Ec",
        "Song":  "secret My lips",
        "Views":  3509637,
        "ViewsDelta":  422,
        "Type":  "Official Music Video",
        "Duration":  "4:24"
    },
    {
        "Title":  "BAND-MAID / Before Yesterday  (Official Music Video)",
        "Date":  "2016-06-24T08:28:24",
        "URL":  "https://youtu.be/Zuj_-z5-06w",
        "VideoId":  "Zuj_-z5-06w",
        "Song":  "Before Yesterday",
        "Views":  3432210,
        "ViewsDelta":  306,
        "Type":  "Official Music Video",
        "Duration":  "4:00"
    },
    {
        "Title":  "BAND-MAID / Bubble (Official Music Video)",
        "Date":  "2019-01-15T05:00:08",
        "URL":  "https://youtu.be/T_PWQtc7zVw",
        "VideoId":  "T_PWQtc7zVw",
        "Song":  "Bubble",
        "Views":  3138981,
        "ViewsDelta":  277,
        "Type":  "Official Music Video",
        "Duration":  "4:12"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Music Video) TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-07-17T11:00:07",
        "URL":  "https://youtu.be/3kMIh0_Wkpk",
        "VideoId":  "3kMIh0_Wkpk",
        "Song":  "What is justice?",
        "Views":  3057680,
        "ViewsDelta":  2562,
        "Type":  "Official Music Video",
        "Duration":  "3:28"
    },
    {
        "Title":  "BAND-MAID / After Life (Official Music Video)",
        "Date":  "2021-01-26T10:00:00",
        "URL":  "https://youtu.be/2MOvCkCqz_U",
        "VideoId":  "2MOvCkCqz_U",
        "Song":  "After Life",
        "Views":  3057273,
        "ViewsDelta":  449,
        "Type":  "Official Music Video",
        "Duration":  "3:29"
    },
    {
        "Title":  "BAND-MAID / Warning! (Official Music Video)",
        "Date":  "2021-01-20T10:00:11",
        "URL":  "https://youtu.be/9yD3IqrLtPk",
        "VideoId":  "9yD3IqrLtPk",
        "Song":  "Warning!",
        "Views":  2666124,
        "ViewsDelta":  409,
        "Type":  "Official Music Video",
        "Duration":  "4:19"
    },
    {
        "Title":  "BAND-MAID / Zen (Official Music Video)　MAPPAアニメ「全修。」オープニングテーマソング",
        "Date":  "2025-01-12T10:15:06",
        "URL":  "https://youtu.be/GZ9RRiy43j4",
        "VideoId":  "GZ9RRiy43j4",
        "Song":  "Zen",
        "Views":  2532824,
        "ViewsDelta":  1395,
        "Type":  "Official Music Video",
        "Duration":  "3:38"
    },
    {
        "Title":  "BAND-MAID / influencer (Official Music Video)",
        "Date":  "2022-09-20T11:00:11",
        "URL":  "https://youtu.be/e_bEf1C0spY",
        "VideoId":  "e_bEf1C0spY",
        "Song":  "influencer",
        "Views":  2496546,
        "ViewsDelta":  504,
        "Type":  "Official Music Video",
        "Duration":  "3:26"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Music Video)",
        "Date":  "2024-08-06T11:00:07",
        "URL":  "https://youtu.be/LVl0mcEu1r8",
        "VideoId":  "LVl0mcEu1r8",
        "Song":  "Show Them",
        "Views":  2459606,
        "ViewsDelta":  1223,
        "Type":  "Official Music Video",
        "Duration":  "3:22"
    },
    {
        "Title":  "Ready to Rock",
        "Date":  "2025-04-03T06:00:08",
        "URL":  "https://youtu.be/5uOdE0j4h1E",
        "VideoId":  "5uOdE0j4h1E",
        "Song":  "Ready to Rock",
        "Views":  2354161,
        "ViewsDelta":  3935,
        "Type":  "Audio",
        "Duration":  "3:27"
    },
    {
        "Title":  "BAND-MAID / start over (Official Music Video)",
        "Date":  "2018-07-03T04:59:28",
        "URL":  "https://youtu.be/iL5sRrSECQ0",
        "VideoId":  "iL5sRrSECQ0",
        "Song":  "start over",
        "Views":  2330527,
        "ViewsDelta":  195,
        "Type":  "Official Music Video",
        "Duration":  "3:36"
    },
    {
        "Title":  "BAND-MAID / 輪廻  \"RINNE\" (Official Music Video)",
        "Date":  "2019-11-05T06:02:18",
        "URL":  "https://youtu.be/CQ9dbEVgZcA",
        "VideoId":  "CQ9dbEVgZcA",
        "Song":  "Rinne",
        "Views":  2270616,
        "ViewsDelta":  270,
        "Type":  "Official Music Video",
        "Duration":  "3:35"
    },
    {
        "Title":  "BAND-MAID / Play (Official Live Video)",
        "Date":  "2020-08-12T07:00:01",
        "URL":  "https://youtu.be/3LxX_t4vg7U",
        "VideoId":  "3LxX_t4vg7U",
        "Song":  "Play",
        "Views":  2265455,
        "ViewsDelta":  294,
        "Type":  "Official Live Video",
        "Duration":  "4:32"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock ×「ロックは淑女の嗜みでして」 Special Music Video (Anime Music Video)",
        "Date":  "2025-06-26T11:30:10",
        "URL":  "https://youtu.be/JegJ6cSsUgg",
        "VideoId":  "JegJ6cSsUgg",
        "Song":  "Ready to Rock",
        "Views":  2206308,
        "ViewsDelta":  4479,
        "Type":  "Anime Music Video",
        "Duration":  "3:28"
    },
    {
        "Title":  "BAND-MAIKO / 祇園町 \"Gion-cho\" (Official Music Video)",
        "Date":  "2019-03-31T11:00:11",
        "URL":  "https://youtu.be/umSt7oMUMcs",
        "VideoId":  "umSt7oMUMcs",
        "Song":  "Gion-Cho",
        "Views":  2177169,
        "ViewsDelta":  229,
        "Type":  "Official Music Video",
        "Duration":  "4:05"
    },
    {
        "Title":  "BAND-MAID / from now on (Official Music Video)",
        "Date":  "2022-11-24T22:00:00",
        "URL":  "https://youtu.be/a6ZSvmnkS00",
        "VideoId":  "a6ZSvmnkS00",
        "Song":  "from now on",
        "Views":  2159329,
        "ViewsDelta":  820,
        "Type":  "Official Music Video",
        "Duration":  "3:46"
    },
    {
        "Title":  "BAND-MAID / Shambles (Official Music Video)",
        "Date":  "2023-08-03T11:00:08",
        "URL":  "https://youtu.be/lf0mQOiu8J8",
        "VideoId":  "lf0mQOiu8J8",
        "Song":  "Shambles",
        "Views":  2130574,
        "ViewsDelta":  545,
        "Type":  "Official Music Video",
        "Duration":  "3:31"
    },
    {
        "Title":  "BAND-MAID / endless Story (Official Music Video)",
        "Date":  "2019-08-07T08:00:00",
        "URL":  "https://youtu.be/5_S4s8jZQ-A",
        "VideoId":  "5_S4s8jZQ-A",
        "Song":  "endless Story",
        "Views":  1969279,
        "ViewsDelta":  290,
        "Type":  "Official Music Video",
        "Duration":  "4:03"
    },
    {
        "Title":  "Choose me",
        "Date":  "2018-10-02T11:52:28",
        "URL":  "https://youtu.be/Imq5n_Cmd4o",
        "VideoId":  "Imq5n_Cmd4o",
        "Song":  "Choose me",
        "Views":  1912241,
        "ViewsDelta":  1484,
        "Type":  "Audio",
        "Duration":  "3:42"
    },
    {
        "Title":  "Sense",
        "Date":  "2021-10-26T06:05:58",
        "URL":  "https://youtu.be/ss11rU97V2I",
        "VideoId":  "ss11rU97V2I",
        "Song":  "Sense",
        "Views":  1879141,
        "ViewsDelta":  786,
        "Type":  "Audio",
        "Duration":  "3:25"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Music Video)",
        "Date":  "2025-10-21T11:00:07",
        "URL":  "https://youtu.be/yzSdgw-tdr0",
        "VideoId":  "yzSdgw-tdr0",
        "Song":  "Present Perfect",
        "Views":  1843771,
        "ViewsDelta":  751,
        "Type":  "Official Music Video",
        "Duration":  "3:53"
    },
    {
        "Title":  "BAND-MAID / REAL EXISTENCE (Official Live Video)",
        "Date":  "2018-07-03T04:59:46",
        "URL":  "https://youtu.be/-qQnKILR5u0",
        "VideoId":  "-qQnKILR5u0",
        "Song":  "REAL EXISTENCE",
        "Views":  1811860,
        "ViewsDelta":  308,
        "Type":  "Official Live Video",
        "Duration":  "4:13"
    },
    {
        "Title":  "BAND-MAID / Protect You (Official Music Video)",
        "Date":  "2024-07-05T11:00:07",
        "URL":  "https://youtu.be/knnw6Mri9gc",
        "VideoId":  "knnw6Mri9gc",
        "Song":  "Protect You",
        "Views":  1797422,
        "ViewsDelta":  555,
        "Type":  "Official Music Video",
        "Duration":  "3:19"
    },
    {
        "Title":  "BAND-MAID / Manners (Official Music Video)",
        "Date":  "2021-01-12T10:00:00",
        "URL":  "https://youtu.be/-FWuMx_pkH4",
        "VideoId":  "-FWuMx_pkH4",
        "Song":  "Manners",
        "Views":  1718497,
        "ViewsDelta":  274,
        "Type":  "Official Music Video",
        "Duration":  "3:56"
    },
    {
        "Title":  "BAND-MAID / Choose me (Official Live Video)",
        "Date":  "2020-04-22T07:00:02",
        "URL":  "https://youtu.be/HcqitbXgigU",
        "VideoId":  "HcqitbXgigU",
        "Song":  "Choose me",
        "Views":  1710860,
        "ViewsDelta":  333,
        "Type":  "Official Live Video",
        "Duration":  "4:03"
    },
    {
        "Title":  "BAND-MAID / Manners, BLACK HOLE (Official Live Video) for J-LOD LIVE2",
        "Date":  "2021-07-26T05:00:16",
        "URL":  "https://youtu.be/iaf94nNSRGE",
        "VideoId":  "iaf94nNSRGE",
        "Song":  "Manners; BLACK HOLE",
        "Views":  1562090,
        "ViewsDelta":  182,
        "Type":  "Official Live Video",
        "Duration":  "7:42"
    },
    {
        "Title":  "BAND-MAID / DICE, Different (Official Live Video) for J-LOD LIVE2",
        "Date":  "2021-10-23T03:00:11",
        "URL":  "https://youtu.be/h_RZwRbI1QI",
        "VideoId":  "h_RZwRbI1QI",
        "Song":  "DICE; Different",
        "Views":  1465358,
        "ViewsDelta":  328,
        "Type":  "Official Live Video",
        "Duration":  "7:43"
    },
    {
        "Title":  "BAND-MAID / HATE? (Official Live Video)",
        "Date":  "2024-03-06T10:00:07",
        "URL":  "https://youtu.be/yfORoQIqB3E",
        "VideoId":  "yfORoQIqB3E",
        "Song":  "HATE?",
        "Views":  1461456,
        "ViewsDelta":  1127,
        "Type":  "Official Live Video",
        "Duration":  "5:04"
    },
    {
        "Title":  "スリル",
        "Date":  "2018-10-02T11:47:18",
        "URL":  "https://youtu.be/46A5e-KzDOc",
        "VideoId":  "46A5e-KzDOc",
        "Song":  "Thrill",
        "Views":  1283706,
        "ViewsDelta":  921,
        "Type":  "Audio",
        "Duration":  "4:06"
    },
    {
        "Title":  "BAND-MAID / Forbidden tale (Official Music Video)",
        "Date":  "2024-10-04T09:00:06",
        "URL":  "https://youtu.be/EiknA3mWivA",
        "VideoId":  "EiknA3mWivA",
        "Song":  "Forbidden tale",
        "Views":  1251872,
        "ViewsDelta":  344,
        "Type":  "Official Music Video",
        "Duration":  "4:36"
    },
    {
        "Title":  "BAND-MAID / Bestie (Official Music Video)",
        "Date":  "2024-05-01T11:00:07",
        "URL":  "https://youtu.be/gXjNsTS5bEY",
        "VideoId":  "gXjNsTS5bEY",
        "Song":  "Bestie",
        "Views":  1212673,
        "ViewsDelta":  363,
        "Type":  "Official Music Video",
        "Duration":  "3:44"
    },
    {
        "Title":  "BAND-MAID / Puzzle (Official Live Video)",
        "Date":  "2023-04-04T11:00:08",
        "URL":  "https://youtu.be/zvuqmSQEnaA",
        "VideoId":  "zvuqmSQEnaA",
        "Song":  "Puzzle",
        "Views":  1203954,
        "ViewsDelta":  445,
        "Type":  "Official Live Video",
        "Duration":  "4:49"
    },
    {
        "Title":  "BAND-MAID / about Us (Official Live Video)",
        "Date":  "2021-02-19T03:00:11",
        "URL":  "https://youtu.be/qicgVAxCYV8",
        "VideoId":  "qicgVAxCYV8",
        "Song":  "about Us",
        "Views":  1189274,
        "ViewsDelta":  174,
        "Type":  "Official Live Video",
        "Duration":  "4:44"
    },
    {
        "Title":  "DICE",
        "Date":  "2018-10-02T11:55:46",
        "URL":  "https://youtu.be/HsvWNhIt6RY",
        "VideoId":  "HsvWNhIt6RY",
        "Song":  "DICE",
        "Views":  1048511,
        "ViewsDelta":  806,
        "Type":  "Audio",
        "Duration":  "4:03"
    },
    {
        "Title":  "What is justice?",
        "Date":  "2025-07-17T06:01:36",
        "URL":  "https://youtu.be/vu2D3lzH7Y0",
        "VideoId":  "vu2D3lzH7Y0",
        "Song":  "What is justice?",
        "Views":  1003274,
        "ViewsDelta":  2295,
        "Type":  "Audio",
        "Duration":  "3:23"
    },
    {
        "Title":  "BAND-MAID / CROSS (Official Live Video)",
        "Date":  "2020-07-08T05:00:15",
        "URL":  "https://youtu.be/yQn4IMr56zY",
        "VideoId":  "yQn4IMr56zY",
        "Song":  "CROSS",
        "Views":  995323,
        "ViewsDelta":  327,
        "Type":  "Official Live Video",
        "Duration":  "3:45"
    },
    {
        "Title":  "BAND-MAID / Memorable (Official Music Video)",
        "Date":  "2023-02-21T10:00:08",
        "URL":  "https://youtu.be/DQX8BTTsHHU",
        "VideoId":  "DQX8BTTsHHU",
        "Song":  "Memorable",
        "Views":  963531,
        "ViewsDelta":  148,
        "Type":  "Official Music Video",
        "Duration":  "3:35"
    },
    {
        "Title":  "BAND-MAID / Wonderland  (Official Live Video)",
        "Date":  "2020-07-08T05:00:15",
        "URL":  "https://youtu.be/x4hxLeHbqZo",
        "VideoId":  "x4hxLeHbqZo",
        "Song":  "Wonderland",
        "Views":  946561,
        "ViewsDelta":  101,
        "Type":  "Official Live Video",
        "Duration":  "3:55"
    },
    {
        "Title":  "BAND-MAID / Thrill (スリル)  (Official Live Video)",
        "Date":  "2021-05-10T08:00:12",
        "URL":  "https://youtu.be/XwRrpaSbaGk",
        "VideoId":  "XwRrpaSbaGk",
        "Song":  "Thrill",
        "Views":  920119,
        "ViewsDelta":  194,
        "Type":  "Official Live Video",
        "Duration":  "4:10"
    },
    {
        "Title":  "BAND-MAID / NO GOD (Official Live Video)",
        "Date":  "2021-05-25T23:00:14",
        "URL":  "https://youtu.be/nAdWnIRjGak",
        "VideoId":  "nAdWnIRjGak",
        "Song":  "NO GOD",
        "Views":  912395,
        "ViewsDelta":  159,
        "Type":  "Official Live Video",
        "Duration":  "4:15"
    },
    {
        "Title":  "BAND-MAID / サヨナキドリ \"Sayonakidori\"  Acoustic Ver.  (Official Live Video)",
        "Date":  "2022-07-15T05:00:16",
        "URL":  "https://youtu.be/sGzAQigaL14",
        "VideoId":  "sGzAQigaL14",
        "Song":  "SAYONAKIDORI",
        "Views":  902427,
        "ViewsDelta":  298,
        "Type":  "Official Live Video",
        "Duration":  "5:15"
    },
    {
        "Title":  "Zen",
        "Date":  "2025-01-12T05:00:33",
        "URL":  "https://youtu.be/XHuBR4nAjrE",
        "VideoId":  "XHuBR4nAjrE",
        "Song":  "Zen",
        "Views":  867933,
        "ViewsDelta":  1318,
        "Type":  "Audio",
        "Duration":  "3:35"
    },
    {
        "Title":  "BAND-MAID / The Dragon Cries (Official Music Video)",
        "Date":  "2020-02-12T06:00:11",
        "URL":  "https://youtu.be/skEkpogsmE0",
        "VideoId":  "skEkpogsmE0",
        "Song":  "The Dragon Cries",
        "Views":  863343,
        "ViewsDelta":  83,
        "Type":  "Official Music Video",
        "Duration":  "4:17"
    },
    {
        "Title":  "Unleash!!!!!",
        "Date":  "2022-08-09T06:05:28",
        "URL":  "https://youtu.be/g8aEQ2XR2UI",
        "VideoId":  "g8aEQ2XR2UI",
        "Song":  "Unleash!!!!!",
        "Views":  853548,
        "ViewsDelta":  586,
        "Type":  "Audio",
        "Duration":  "3:10"
    },
    {
        "Title":  "BAND-MAID / Warning! (Official Live Video)",
        "Date":  "2021-05-01T05:00:15",
        "URL":  "https://youtu.be/Kojg8ULibeY",
        "VideoId":  "Kojg8ULibeY",
        "Song":  "Warning!",
        "Views":  794707,
        "ViewsDelta":  233,
        "Type":  "Official Live Video",
        "Duration":  "4:25"
    },
    {
        "Title":  "BAND-MAID / endless Story (Official Live Video)",
        "Date":  "2024-03-20T07:30:07",
        "URL":  "https://youtu.be/Za1y-RRVd70",
        "VideoId":  "Za1y-RRVd70",
        "Song":  "endless Story",
        "Views":  790051,
        "ViewsDelta":  214,
        "Type":  "Official Live Video",
        "Duration":  "7:00"
    },
    {
        "Title":  "Different",
        "Date":  "2020-12-01T10:04:07",
        "URL":  "https://youtu.be/yJIQKRywEY8",
        "VideoId":  "yJIQKRywEY8",
        "Song":  "Different",
        "Views":  787639,
        "ViewsDelta":  465,
        "Type":  "Audio",
        "Duration":  "3:34"
    },
    {
        "Title":  "REAL EXISTENCE",
        "Date":  "2018-10-02T11:48:43",
        "URL":  "https://youtu.be/F0B-h1qWt2E",
        "VideoId":  "F0B-h1qWt2E",
        "Song":  "REAL EXISTENCE",
        "Views":  786604,
        "ViewsDelta":  597,
        "Type":  "Audio",
        "Duration":  "4:13"
    },
    {
        "Title":  "After Life",
        "Date":  "2020-12-13T05:02:51",
        "URL":  "https://youtu.be/kkFIoq1TeA0",
        "VideoId":  "kkFIoq1TeA0",
        "Song":  "After Life",
        "Views":  770147,
        "ViewsDelta":  250,
        "Type":  "Audio",
        "Duration":  "3:24"
    },
    {
        "Title":  "BAND-MAID / カタルシス \"Catharsis\"  Acoustic Ver.  (Official Live Video)",
        "Date":  "2022-01-21T04:00:34",
        "URL":  "https://youtu.be/tx9h41gaNo0",
        "VideoId":  "tx9h41gaNo0",
        "Song":  "Catharsis",
        "Views":  758135,
        "ViewsDelta":  182,
        "Type":  "Official Live Video",
        "Duration":  "3:41"
    },
    {
        "Title":  "BAND-MAID / Don\u0027t you tell ME (Official Live Video)",
        "Date":  "2024-02-22T07:00:10",
        "URL":  "https://youtu.be/SOj3qXBhiP4",
        "VideoId":  "SOj3qXBhiP4",
        "Song":  "Don\u0027t you tell ME",
        "Views":  749946,
        "ViewsDelta":  411,
        "Type":  "Official Live Video",
        "Duration":  "4:27"
    },
    {
        "Title":  "influencer",
        "Date":  "2022-09-20T06:08:55",
        "URL":  "https://youtu.be/Ly62PczTrZM",
        "VideoId":  "Ly62PczTrZM",
        "Song":  "influencer",
        "Views":  719370,
        "ViewsDelta":  346,
        "Type":  "Audio",
        "Duration":  "3:24"
    },
    {
        "Title":  "DOMINATION",
        "Date":  "2018-10-02T11:55:46",
        "URL":  "https://youtu.be/yo9ZFz4v6Dk",
        "VideoId":  "yo9ZFz4v6Dk",
        "Song":  "DOMINATION",
        "Views":  710161,
        "ViewsDelta":  525,
        "Type":  "Audio",
        "Duration":  "3:52"
    },
    {
        "Title":  "Corallium",
        "Date":  "2021-10-26T06:06:13",
        "URL":  "https://youtu.be/aK9KruOd_Bw",
        "VideoId":  "aK9KruOd_Bw",
        "Song":  "Corallium",
        "Views":  696295,
        "ViewsDelta":  160,
        "Type":  "Audio",
        "Duration":  "3:56"
    },
    {
        "Title":  "BAND-MAID / What is justice? ×『桃源暗鬼』 Special Music Video (Anime Music Video) - Side of Momotaro -",
        "Date":  "2025-09-26T10:30:58",
        "URL":  "https://youtu.be/zbleEG_5e_4",
        "VideoId":  "zbleEG_5e_4",
        "Song":  "What is justice?",
        "Views":  683820,
        "ViewsDelta":  742,
        "Type":  "Anime Music Video",
        "Duration":  "3:22"
    },
    {
        "Title":  "Warning!",
        "Date":  "2021-01-12T05:01:55",
        "URL":  "https://youtu.be/swHdFvBN3yI",
        "VideoId":  "swHdFvBN3yI",
        "Song":  "Warning!",
        "Views":  682736,
        "ViewsDelta":  291,
        "Type":  "Audio",
        "Duration":  "4:20"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Live Video) TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-08-19T23:00:11",
        "URL":  "https://youtu.be/5I6VV4HYnW8",
        "VideoId":  "5I6VV4HYnW8",
        "Song":  "Ready to Rock",
        "Views":  666618,
        "ViewsDelta":  1114,
        "Type":  "Official Live Video",
        "Duration":  "4:10"
    },
    {
        "Title":  "BAND-MAID / Shambles (Official Live Video)",
        "Date":  "2025-02-18T22:00:32",
        "URL":  "https://youtu.be/RmFYjTJRrQM",
        "VideoId":  "RmFYjTJRrQM",
        "Song":  "Shambles",
        "Views":  634143,
        "ViewsDelta":  571,
        "Type":  "Official Live Video",
        "Duration":  "5:15"
    },
    {
        "Title":  "BAND-MAID / NO GOD (Official Live Video)",
        "Date":  "2023-04-21T11:00:26",
        "URL":  "https://youtu.be/iLF5zd0yl64",
        "VideoId":  "iLF5zd0yl64",
        "Song":  "NO GOD",
        "Views":  619771,
        "ViewsDelta":  192,
        "Type":  "Official Live Video",
        "Duration":  "4:34"
    },
    {
        "Title":  "サヨナキドリ",
        "Date":  "2021-01-12T05:03:14",
        "URL":  "https://youtu.be/6mVaehjAo2k",
        "VideoId":  "6mVaehjAo2k",
        "Song":  "SAYONAKIDORI",
        "Views":  602590,
        "ViewsDelta":  201,
        "Type":  "Audio",
        "Duration":  "4:34"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Cover #RtR弾いてみた by KANAMI)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-05-01T05:00:45",
        "URL":  "https://youtu.be/YEFugw_-jwo",
        "VideoId":  "YEFugw_-jwo",
        "Song":  "Ready to Rock",
        "Views":  572660,
        "ViewsDelta":  351,
        "Type":  "Official Cover",
        "Duration":  "0:21"
    },
    {
        "Title":  "from now on",
        "Date":  "2022-09-20T06:05:04",
        "URL":  "https://youtu.be/MK0auns521Q",
        "VideoId":  "MK0auns521Q",
        "Song":  "from now on",
        "Views":  558315,
        "ViewsDelta":  350,
        "Type":  "Audio",
        "Duration":  "3:47"
    },
    {
        "Title":  "Blooming",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/3NJf8CSiUZs",
        "VideoId":  "3NJf8CSiUZs",
        "Song":  "Blooming",
        "Views":  542966,
        "ViewsDelta":  406,
        "Type":  "Audio",
        "Duration":  "3:50"
    },
    {
        "Title":  "NO GOD",
        "Date":  "2021-01-12T05:02:00",
        "URL":  "https://youtu.be/-ZEF3shvlsU",
        "VideoId":  "-ZEF3shvlsU",
        "Song":  "NO GOD",
        "Views":  541840,
        "ViewsDelta":  195,
        "Type":  "Audio",
        "Duration":  "4:11"
    },
    {
        "Title":  "alone",
        "Date":  "2018-10-02T11:25:59",
        "URL":  "https://youtu.be/mY0ZusGd-Fo",
        "VideoId":  "mY0ZusGd-Fo",
        "Song":  "alone",
        "Views":  536276,
        "ViewsDelta":  497,
        "Type":  "Audio",
        "Duration":  "3:29"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Live Teaser 1)",
        "Date":  "2026-01-30T07:00:00",
        "URL":  "https://youtu.be/o_NTQ7T7HA0",
        "VideoId":  "o_NTQ7T7HA0",
        "Song":  "Present Perfect",
        "Views":  523915,
        "ViewsDelta":  75,
        "Type":  "Official Live Short",
        "Duration":  "0:33"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Live Video)",
        "Date":  "2026-01-30T03:58:33",
        "URL":  "https://youtu.be/2U9AP21jXuk",
        "VideoId":  "2U9AP21jXuk",
        "Song":  "Present Perfect",
        "Views":  515783,
        "ViewsDelta":  901,
        "Type":  "Official Live Video",
        "Duration":  "4:34"
    },
    {
        "Title":  "BLACK HOLE",
        "Date":  "2021-01-12T05:01:50",
        "URL":  "https://youtu.be/17M5oBuccOY",
        "VideoId":  "17M5oBuccOY",
        "Song":  "BLACK HOLE",
        "Views":  514405,
        "ViewsDelta":  181,
        "Type":  "Audio",
        "Duration":  "3:06"
    },
    {
        "Title":  "火花",
        "Date":  "2021-10-26T06:05:47",
        "URL":  "https://youtu.be/uMQicabwqus",
        "VideoId":  "uMQicabwqus",
        "Song":  "Hibana",
        "Views":  495956,
        "ViewsDelta":  148,
        "Type":  "Audio",
        "Duration":  "3:40"
    },
    {
        "Title":  "Don\u0027t you tell ME",
        "Date":  "2018-10-02T11:36:15",
        "URL":  "https://youtu.be/RnyseN3hrKM",
        "VideoId":  "RnyseN3hrKM",
        "Song":  "Don\u0027t you tell ME",
        "Views":  492636,
        "ViewsDelta":  263,
        "Type":  "Audio",
        "Duration":  "3:11"
    },
    {
        "Title":  "Shambles",
        "Date":  "2023-08-03T06:00:28",
        "URL":  "https://youtu.be/_UgN3Tb8Chc",
        "VideoId":  "_UgN3Tb8Chc",
        "Song":  "Shambles",
        "Views":  489199,
        "ViewsDelta":  61,
        "Type":  "Audio",
        "Duration":  "3:22"
    },
    {
        "Title":  "BAND-MAID / Unleash!!!!! (Official Live Video)",
        "Date":  "2024-02-10T10:00:09",
        "URL":  "https://youtu.be/-i3N-WbZnJM",
        "VideoId":  "-i3N-WbZnJM",
        "Song":  "Unleash!!!!!",
        "Views":  487933,
        "ViewsDelta":  248,
        "Type":  "Official Live Video",
        "Duration":  "3:34"
    },
    {
        "Title":  "the non-fiction days",
        "Date":  "2018-10-02T11:26:11",
        "URL":  "https://youtu.be/5N4ymEJu5Vc",
        "VideoId":  "5N4ymEJu5Vc",
        "Song":  "the non-fiction days",
        "Views":  478910,
        "ViewsDelta":  296,
        "Type":  "Audio",
        "Duration":  "4:42"
    },
    {
        "Title":  "Don\u0027t Let Me Down",
        "Date":  "2018-10-02T11:48:01",
        "URL":  "https://youtu.be/kMF7sECmoP8",
        "VideoId":  "kMF7sECmoP8",
        "Song":  "Don\u0027t let me down",
        "Views":  472881,
        "ViewsDelta":  385,
        "Type":  "Audio",
        "Duration":  "3:20"
    },
    {
        "Title":  "本懐",
        "Date":  "2021-01-12T05:01:50",
        "URL":  "https://youtu.be/ND5EeINq3F0",
        "VideoId":  "ND5EeINq3F0",
        "Song":  "HONKAI",
        "Views":  472274,
        "ViewsDelta":  189,
        "Type":  "Audio",
        "Duration":  "3:17"
    },
    {
        "Title":  "H-G-K",
        "Date":  "2021-01-12T05:02:10",
        "URL":  "https://youtu.be/VAFq8-Xnf_8",
        "VideoId":  "VAFq8-Xnf_8",
        "Song":  "H-G-K",
        "Views":  450208,
        "ViewsDelta":  184,
        "Type":  "Audio",
        "Duration":  "3:08"
    },
    {
        "Title":  "Puzzle",
        "Date":  "2018-10-02T11:34:32",
        "URL":  "https://youtu.be/tMyNS4YKS6A",
        "VideoId":  "tMyNS4YKS6A",
        "Song":  "Puzzle",
        "Views":  449165,
        "ViewsDelta":  226,
        "Type":  "Audio",
        "Duration":  "4:20"
    },
    {
        "Title":  "HATE?",
        "Date":  "2022-09-20T06:03:13",
        "URL":  "https://youtu.be/OJnKhVPDe4Q",
        "VideoId":  "OJnKhVPDe4Q",
        "Song":  "HATE?",
        "Views":  436810,
        "ViewsDelta":  229,
        "Type":  "Audio",
        "Duration":  "3:38"
    },
    {
        "Title":  "I still seek revenge.",
        "Date":  "2021-01-12T05:01:49",
        "URL":  "https://youtu.be/H0xsEwtKUkQ",
        "VideoId":  "H0xsEwtKUkQ",
        "Song":  "I still seek revenge.",
        "Views":  427621,
        "ViewsDelta":  129,
        "Type":  "Audio",
        "Duration":  "3:03"
    },
    {
        "Title":  "glory",
        "Date":  "2018-11-13T00:44:31",
        "URL":  "https://youtu.be/9TwXsbGFYnU",
        "VideoId":  "9TwXsbGFYnU",
        "Song":  "glory",
        "Views":  422404,
        "ViewsDelta":  500,
        "Type":  "Audio",
        "Duration":  "3:37"
    },
    {
        "Title":  "Manners",
        "Date":  "2021-01-12T05:01:49",
        "URL":  "https://youtu.be/axYjQAMEZrs",
        "VideoId":  "axYjQAMEZrs",
        "Song":  "Manners",
        "Views":  412528,
        "ViewsDelta":  158,
        "Type":  "Audio",
        "Duration":  "3:51"
    },
    {
        "Title":  "I\u0027ll",
        "Date":  "2022-09-20T06:03:53",
        "URL":  "https://youtu.be/S2kocC6yMik",
        "VideoId":  "S2kocC6yMik",
        "Song":  "I\u0027ll",
        "Views":  393124,
        "ViewsDelta":  191,
        "Type":  "Audio",
        "Duration":  "4:08"
    },
    {
        "Title":  "I can\u0027t live without you.",
        "Date":  "2018-10-02T11:56:55",
        "URL":  "https://youtu.be/3C7hDUB0lgk",
        "VideoId":  "3C7hDUB0lgk",
        "Song":  "I can\u0027t live without you.",
        "Views":  389511,
        "ViewsDelta":  225,
        "Type":  "Audio",
        "Duration":  "3:50"
    },
    {
        "Title":  "BAND-MAID / Sense (Official Live Video)",
        "Date":  "2023-03-21T11:00:10",
        "URL":  "https://youtu.be/p5Lo7t9Yzxw",
        "VideoId":  "p5Lo7t9Yzxw",
        "Song":  "Sense",
        "Views":  378234,
        "ViewsDelta":  93,
        "Type":  "Official Live Video",
        "Duration":  "3:34"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Live Video #shorts )  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-05-22T09:01:06",
        "URL":  "https://youtu.be/bQDrcpN6B-U",
        "VideoId":  "bQDrcpN6B-U",
        "Song":  "Ready to Rock",
        "Views":  376572,
        "ViewsDelta":  70,
        "Type":  "Official Live Short",
        "Duration":  "0:27"
    },
    {
        "Title":  "Daydreaming",
        "Date":  "2018-10-02T11:52:23",
        "URL":  "https://youtu.be/dw4mb6eWHu0",
        "VideoId":  "dw4mb6eWHu0",
        "Song":  "Daydreaming",
        "Views":  372634,
        "ViewsDelta":  246,
        "Type":  "Audio",
        "Duration":  "4:02"
    },
    {
        "Title":  "Giovanni",
        "Date":  "2021-01-12T05:02:01",
        "URL":  "https://youtu.be/0JZkjDhxohM",
        "VideoId":  "0JZkjDhxohM",
        "Song":  "Giovanni",
        "Views":  362477,
        "ViewsDelta":  92,
        "Type":  "Audio",
        "Duration":  "4:18"
    },
    {
        "Title":  "BAND-MAID / Don\u0027t you tell ME (Live at TREASURE05X 2024)",
        "Date":  "2024-09-08T01:47:25",
        "URL":  "https://youtu.be/vE7qTycXp3A",
        "VideoId":  "vE7qTycXp3A",
        "Song":  "Don\u0027t you tell ME",
        "Views":  361984,
        "ViewsDelta":  333,
        "Type":  "Official Live Short",
        "Duration":  "0:43"
    },
    {
        "Title":  "DICE",
        "Date":  "2018-02-13T07:01:48",
        "URL":  "https://youtu.be/kJhR3YwIRyc",
        "VideoId":  "kJhR3YwIRyc",
        "Song":  "DICE",
        "Views":  360431,
        "ViewsDelta":  2,
        "Type":  "Audio",
        "Duration":  "4:07"
    },
    {
        "Title":  "BAND-MAID / Magie (Official Live Video)",
        "Date":  "2024-07-20T09:00:07",
        "URL":  "https://youtu.be/obXVrwIwk2k",
        "VideoId":  "obXVrwIwk2k",
        "Song":  "Magie",
        "Views":  355101,
        "ViewsDelta":  219,
        "Type":  "Official Live Video",
        "Duration":  "3:10"
    },
    {
        "Title":  "YOLO",
        "Date":  "2018-10-02T11:42:17",
        "URL":  "https://youtu.be/34MAbWeVE64",
        "VideoId":  "34MAbWeVE64",
        "Song":  "YOLO",
        "Views":  351247,
        "ViewsDelta":  292,
        "Type":  "Audio",
        "Duration":  "4:27"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-03-06T04:09:00",
        "URL":  "https://youtu.be/_jb5rtSUEik",
        "VideoId":  "_jb5rtSUEik",
        "Song":  "Ready to Rock",
        "Views":  345234,
        "ViewsDelta":  15,
        "Type":  "Official Teaser Video",
        "Duration":  "0:19"
    },
    {
        "Title":  "Balance",
        "Date":  "2022-09-20T06:03:37",
        "URL":  "https://youtu.be/TwrvDCcYuRE",
        "VideoId":  "TwrvDCcYuRE",
        "Song":  "Balance",
        "Views":  343235,
        "ViewsDelta":  160,
        "Type":  "Audio",
        "Duration":  "3:10"
    },
    {
        "Title":  "SHOW THEM",
        "Date":  "2024-08-06T06:00:19",
        "URL":  "https://youtu.be/OPNcauboxkg",
        "VideoId":  "OPNcauboxkg",
        "Song":  "Show Them",
        "Views":  339833,
        "ViewsDelta":  67,
        "Type":  "Audio",
        "Duration":  "3:15"
    },
    {
        "Title":  "Rock in me",
        "Date":  "2018-10-02T11:56:14",
        "URL":  "https://youtu.be/f0etXeLBvBw",
        "VideoId":  "f0etXeLBvBw",
        "Song":  "Rock in me",
        "Views":  331198,
        "ViewsDelta":  183,
        "Type":  "Audio",
        "Duration":  "3:22"
    },
    {
        "Title":  "Why Why Why",
        "Date":  "2021-01-12T05:01:56",
        "URL":  "https://youtu.be/bCHjyiie7MQ",
        "VideoId":  "bCHjyiie7MQ",
        "Song":  "Why Why Why",
        "Views":  329687,
        "ViewsDelta":  65,
        "Type":  "Audio",
        "Duration":  "3:38"
    },
    {
        "Title":  "Protect You",
        "Date":  "2024-07-04T06:01:01",
        "URL":  "https://youtu.be/ww7G7Vlm8hQ",
        "VideoId":  "ww7G7Vlm8hQ",
        "Song":  "Protect You",
        "Views":  329039,
        "ViewsDelta":  65,
        "Type":  "Audio",
        "Duration":  "3:13"
    },
    {
        "Title":  "CROSS",
        "Date":  "2018-10-02T11:36:17",
        "URL":  "https://youtu.be/W6odZxUQ84s",
        "VideoId":  "W6odZxUQ84s",
        "Song":  "CROSS",
        "Views":  326169,
        "ViewsDelta":  208,
        "Type":  "Audio",
        "Duration":  "3:46"
    },
    {
        "Title":  "輪廻",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/lWLEvPPYdS4",
        "VideoId":  "lWLEvPPYdS4",
        "Song":  "Rinne",
        "Views":  319007,
        "ViewsDelta":  201,
        "Type":  "Audio",
        "Duration":  "3:28"
    },
    {
        "Title":  "about Us",
        "Date":  "2021-02-03T05:03:48",
        "URL":  "https://youtu.be/AmjOY0lIwhI",
        "VideoId":  "AmjOY0lIwhI",
        "Song":  "about Us",
        "Views":  312778,
        "ViewsDelta":  66,
        "Type":  "Audio",
        "Duration":  "4:39"
    },
    {
        "Title":  "Bestie",
        "Date":  "2024-04-16T06:00:16",
        "URL":  "https://youtu.be/OvoR_Xt8mzM",
        "VideoId":  "OvoR_Xt8mzM",
        "Song":  "Bestie",
        "Views":  303904,
        "ViewsDelta":  20,
        "Type":  "Audio",
        "Duration":  "3:36"
    },
    {
        "Title":  "you.",
        "Date":  "2018-10-02T11:34:32",
        "URL":  "https://youtu.be/vHOBRzjHLMo",
        "VideoId":  "vHOBRzjHLMo",
        "Song":  "you.",
        "Views":  303702,
        "ViewsDelta":  201,
        "Type":  "Audio",
        "Duration":  "3:44"
    },
    {
        "Title":  "FREEDOM",
        "Date":  "2018-10-02T11:25:59",
        "URL":  "https://youtu.be/hSV25w66G7A",
        "VideoId":  "hSV25w66G7A",
        "Song":  "FREEDOM",
        "Views":  300294,
        "ViewsDelta":  206,
        "Type":  "Audio",
        "Duration":  "3:44"
    },
    {
        "Title":  "Shambles",
        "Date":  "2024-09-24T06:00:07",
        "URL":  "https://youtu.be/8eu3BQgB9OQ",
        "VideoId":  "8eu3BQgB9OQ",
        "Song":  "Shambles",
        "Views":  299631,
        "ViewsDelta":  768,
        "Type":  "Audio",
        "Duration":  "3:22"
    },
    {
        "Title":  "CHEMICAL REACTION",
        "Date":  "2021-01-12T05:01:56",
        "URL":  "https://youtu.be/42uOmIhh2Vs",
        "VideoId":  "42uOmIhh2Vs",
        "Song":  "CHEMICAL REACTION",
        "Views":  297421,
        "ViewsDelta":  91,
        "Type":  "Audio",
        "Duration":  "4:10"
    },
    {
        "Title":  "secret My lips",
        "Date":  "2018-10-02T11:35:27",
        "URL":  "https://youtu.be/gr7JL2C4zHQ",
        "VideoId":  "gr7JL2C4zHQ",
        "Song":  "secret My lips",
        "Views":  289779,
        "ViewsDelta":  202,
        "Type":  "Audio",
        "Duration":  "4:12"
    },
    {
        "Title":  "endless Story",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/72RuhiJznsI",
        "VideoId":  "72RuhiJznsI",
        "Song":  "endless Story",
        "Views":  284223,
        "ViewsDelta":  230,
        "Type":  "Audio",
        "Duration":  "3:45"
    },
    {
        "Title":  "SION",
        "Date":  "2025-10-21T06:01:34",
        "URL":  "https://youtu.be/u9TrM7r9yOc",
        "VideoId":  "u9TrM7r9yOc",
        "Song":  "SION",
        "Views":  283037,
        "ViewsDelta":  341,
        "Type":  "Audio",
        "Duration":  "4:15"
    },
    {
        "Title":  "I can\u0027t live without you",
        "Date":  "2018-02-13T07:01:27",
        "URL":  "https://youtu.be/EuTmlA2DHis",
        "VideoId":  "EuTmlA2DHis",
        "Song":  "I can\u0027t live without you.",
        "Views":  280092,
        "ViewsDelta":  1,
        "Type":  "Audio",
        "Duration":  "3:54"
    },
    {
        "Title":  "anemone",
        "Date":  "2018-10-02T11:55:47",
        "URL":  "https://youtu.be/7RDR_gMAZok",
        "VideoId":  "7RDR_gMAZok",
        "Song":  "anemone",
        "Views":  274432,
        "ViewsDelta":  161,
        "Type":  "Audio",
        "Duration":  "4:23"
    },
    {
        "Title":  "DOMINATION",
        "Date":  "2018-02-13T07:01:48",
        "URL":  "https://youtu.be/CWdo_Mn5Wo8",
        "VideoId":  "CWdo_Mn5Wo8",
        "Song":  "DOMINATION",
        "Views":  272151,
        "ViewsDelta":  0,
        "Type":  "Audio",
        "Duration":  "3:54"
    },
    {
        "Title":  "Alive-or-Dead",
        "Date":  "2018-10-02T11:56:53",
        "URL":  "https://youtu.be/rZ1mpH8iXQc",
        "VideoId":  "rZ1mpH8iXQc",
        "Song":  "Alive-or-Dead",
        "Views":  259155,
        "ViewsDelta":  405,
        "Type":  "Audio",
        "Duration":  "3:45"
    },
    {
        "Title":  "CLANG",
        "Date":  "2018-10-02T11:55:45",
        "URL":  "https://youtu.be/RNJxKL5Ylf4",
        "VideoId":  "RNJxKL5Ylf4",
        "Song":  "CLANG",
        "Views":  258798,
        "ViewsDelta":  147,
        "Type":  "Audio",
        "Duration":  "4:11"
    },
    {
        "Title":  "モラトリアム",
        "Date":  "2018-10-02T11:35:27",
        "URL":  "https://youtu.be/WFrVI2eXlko",
        "VideoId":  "WFrVI2eXlko",
        "Song":  "Moratorium",
        "Views":  258468,
        "ViewsDelta":  166,
        "Type":  "Audio",
        "Duration":  "4:16"
    },
    {
        "Title":  "FREEZER",
        "Date":  "2018-10-02T11:47:17",
        "URL":  "https://youtu.be/x7G0VEpWd_A",
        "VideoId":  "x7G0VEpWd_A",
        "Song":  "FREEZER",
        "Views":  257579,
        "ViewsDelta":  173,
        "Type":  "Audio",
        "Duration":  "3:18"
    },
    {
        "Title":  "One and only",
        "Date":  "2018-10-02T11:55:47",
        "URL":  "https://youtu.be/f7_VMSupSlA",
        "VideoId":  "f7_VMSupSlA",
        "Song":  "One and only",
        "Views":  249987,
        "ViewsDelta":  110,
        "Type":  "Audio",
        "Duration":  "3:23"
    },
    {
        "Title":  "Forbidden tale",
        "Date":  "2024-09-24T06:00:52",
        "URL":  "https://youtu.be/l29qDqsgORA",
        "VideoId":  "l29qDqsgORA",
        "Song":  "Forbidden tale",
        "Views":  246146,
        "ViewsDelta":  242,
        "Type":  "Audio",
        "Duration":  "4:35"
    },
    {
        "Title":  "Shake That",
        "Date":  "2018-10-02T11:49:00",
        "URL":  "https://youtu.be/zZcZdQgs-ws",
        "VideoId":  "zZcZdQgs-ws",
        "Song":  "Shake That!!",
        "Views":  243567,
        "ViewsDelta":  125,
        "Type":  "Audio",
        "Duration":  "4:06"
    },
    {
        "Title":  "Play",
        "Date":  "2018-02-13T07:01:48",
        "URL":  "https://youtu.be/oZWc7jk4GNs",
        "VideoId":  "oZWc7jk4GNs",
        "Song":  "Play",
        "Views":  242631,
        "ViewsDelta":  5,
        "Type":  "Audio",
        "Duration":  "3:24"
    },
    {
        "Title":  "FATE",
        "Date":  "2018-10-02T11:56:52",
        "URL":  "https://youtu.be/ifUSCn9l61M",
        "VideoId":  "ifUSCn9l61M",
        "Song":  "FATE",
        "Views":  242317,
        "ViewsDelta":  153,
        "Type":  "Audio",
        "Duration":  "4:32"
    },
    {
        "Title":  "Turn me on",
        "Date":  "2018-10-02T11:55:45",
        "URL":  "https://youtu.be/6RVy5UEhz4s",
        "VideoId":  "6RVy5UEhz4s",
        "Song":  "Turn me on",
        "Views":  239839,
        "ViewsDelta":  138,
        "Type":  "Audio",
        "Duration":  "4:16"
    },
    {
        "Title":  "Play",
        "Date":  "2018-10-02T11:55:46",
        "URL":  "https://youtu.be/A1h37zkAXck",
        "VideoId":  "A1h37zkAXck",
        "Song":  "Play",
        "Views":  239285,
        "ViewsDelta":  181,
        "Type":  "Audio",
        "Duration":  "3:20"
    },
    {
        "Title":  "Protect You",
        "Date":  "2024-09-24T06:00:31",
        "URL":  "https://youtu.be/PDaRbNVVdCE",
        "VideoId":  "PDaRbNVVdCE",
        "Song":  "Protect You",
        "Views":  238229,
        "ViewsDelta":  655,
        "Type":  "Audio",
        "Duration":  "3:14"
    },
    {
        "Title":  "Play",
        "Date":  "2018-10-02T11:53:02",
        "URL":  "https://youtu.be/iH-EnjSUi3k",
        "VideoId":  "iH-EnjSUi3k",
        "Song":  "Play",
        "Views":  237740,
        "ViewsDelta":  98,
        "Type":  "Audio",
        "Duration":  "3:22"
    },
    {
        "Title":  "secret MAIKO lips",
        "Date":  "2019-04-02T11:04:53",
        "URL":  "https://youtu.be/V-1HH3saWX4",
        "VideoId":  "V-1HH3saWX4",
        "Song":  "secret My lips",
        "Views":  234232,
        "ViewsDelta":  135,
        "Type":  "Audio",
        "Duration":  "4:25"
    },
    {
        "Title":  "The one",
        "Date":  "2024-09-24T06:00:20",
        "URL":  "https://youtu.be/FORNyqfjSmM",
        "VideoId":  "FORNyqfjSmM",
        "Song":  "The one",
        "Views":  233476,
        "ViewsDelta":  137,
        "Type":  "Audio",
        "Duration":  "4:11"
    },
    {
        "Title":  "Magie",
        "Date":  "2024-09-24T06:00:52",
        "URL":  "https://youtu.be/p0OxjDTf_2A",
        "VideoId":  "p0OxjDTf_2A",
        "Song":  "Magie",
        "Views":  229769,
        "ViewsDelta":  217,
        "Type":  "Audio",
        "Duration":  "3:05"
    },
    {
        "Title":  "SUPER SUNSHINE",
        "Date":  "2025-10-21T06:00:29",
        "URL":  "https://youtu.be/J_dd47xa31E",
        "VideoId":  "J_dd47xa31E",
        "Song":  "SUPER SUNSHINE",
        "Views":  228096,
        "ViewsDelta":  603,
        "Type":  "Audio",
        "Duration":  "3:52"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Live Video ver. 2 #shorts )  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-05-27T00:01:00",
        "URL":  "https://youtu.be/nbFF1513ptw",
        "VideoId":  "nbFF1513ptw",
        "Song":  "Ready to Rock",
        "Views":  223382,
        "ViewsDelta":  32,
        "Type":  "Official Live Short",
        "Duration":  "0:34"
    },
    {
        "Title":  "Bubble",
        "Date":  "2019-01-15T10:01:49",
        "URL":  "https://youtu.be/3vHHv_dmhM8",
        "VideoId":  "3vHHv_dmhM8",
        "Song":  "Bubble",
        "Views":  220064,
        "ViewsDelta":  139,
        "Type":  "Audio",
        "Duration":  "3:47"
    },
    {
        "Title":  "Screaming",
        "Date":  "2018-10-02T11:32:03",
        "URL":  "https://youtu.be/JBgNx7OXtao",
        "VideoId":  "JBgNx7OXtao",
        "Song":  "Screaming",
        "Views":  217252,
        "ViewsDelta":  133,
        "Type":  "Audio",
        "Duration":  "3:50"
    },
    {
        "Title":  "Dilemma",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/aYet_nevCGs",
        "VideoId":  "aYet_nevCGs",
        "Song":  "Dilemma",
        "Views":  216165,
        "ViewsDelta":  99,
        "Type":  "Audio",
        "Duration":  "3:37"
    },
    {
        "Title":  "SHOW THEM",
        "Date":  "2024-09-24T06:00:03",
        "URL":  "https://youtu.be/42AfEN1SGZ4",
        "VideoId":  "42AfEN1SGZ4",
        "Song":  "Show Them",
        "Views":  213995,
        "ViewsDelta":  809,
        "Type":  "Audio",
        "Duration":  "3:15"
    },
    {
        "Title":  "azure",
        "Date":  "2019-12-05T00:27:13",
        "URL":  "https://youtu.be/QZqKqAIdxak",
        "VideoId":  "QZqKqAIdxak",
        "Song":  "azure",
        "Views":  212805,
        "ViewsDelta":  156,
        "Type":  "Audio",
        "Duration":  "2:50"
    },
    {
        "Title":  "Letters to you",
        "Date":  "2024-09-24T06:00:27",
        "URL":  "https://youtu.be/T7lS8NkIapQ",
        "VideoId":  "T7lS8NkIapQ",
        "Song":  "Letters to you",
        "Views":  212117,
        "ViewsDelta":  137,
        "Type":  "Audio",
        "Duration":  "3:09"
    },
    {
        "Title":  "Carry on living",
        "Date":  "2018-10-02T11:57:15",
        "URL":  "https://youtu.be/Rylf8-NaJuk",
        "VideoId":  "Rylf8-NaJuk",
        "Song":  "Carry on living",
        "Views":  203188,
        "ViewsDelta":  109,
        "Type":  "Audio",
        "Duration":  "3:33"
    },
    {
        "Title":  "TAMAYA!",
        "Date":  "2024-09-24T06:00:53",
        "URL":  "https://youtu.be/vvpswsFRawM",
        "VideoId":  "vvpswsFRawM",
        "Song":  "TAMAYA!",
        "Views":  201206,
        "ViewsDelta":  141,
        "Type":  "Audio",
        "Duration":  "3:16"
    },
    {
        "Title":  "Take me higher ! !",
        "Date":  "2018-10-02T11:35:11",
        "URL":  "https://youtu.be/SDrfTXRVpw4",
        "VideoId":  "SDrfTXRVpw4",
        "Song":  "Take me higher!!",
        "Views":  200958,
        "ViewsDelta":  100,
        "Type":  "Audio",
        "Duration":  "3:19"
    },
    {
        "Title":  "Present Perfect",
        "Date":  "2025-10-21T06:00:28",
        "URL":  "https://youtu.be/IvDzDMJ5cL4",
        "VideoId":  "IvDzDMJ5cL4",
        "Song":  "Present Perfect",
        "Views":  200093,
        "ViewsDelta":  614,
        "Type":  "Audio",
        "Duration":  "3:52"
    },
    {
        "Title":  "Liberal",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/YwLqiLlCoKE",
        "VideoId":  "YwLqiLlCoKE",
        "Song":  "Liberal",
        "Views":  199643,
        "ViewsDelta":  100,
        "Type":  "Audio",
        "Duration":  "3:15"
    },
    {
        "Title":  "Wonderland",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/CewPL6F9XhM",
        "VideoId":  "CewPL6F9XhM",
        "Song":  "Wonderland",
        "Views":  199432,
        "ViewsDelta":  152,
        "Type":  "Audio",
        "Duration":  "3:56"
    },
    {
        "Title":  "Spirit!!",
        "Date":  "2018-10-02T11:55:46",
        "URL":  "https://youtu.be/fxeDfNl1IfU",
        "VideoId":  "fxeDfNl1IfU",
        "Song":  "Spirit!!",
        "Views":  198653,
        "ViewsDelta":  106,
        "Type":  "Audio",
        "Duration":  "3:42"
    },
    {
        "Title":  "カタルシス",
        "Date":  "2019-12-05T00:27:12",
        "URL":  "https://youtu.be/N5zqCsBjfTU",
        "VideoId":  "N5zqCsBjfTU",
        "Song":  "Catharsis",
        "Views":  197017,
        "ViewsDelta":  90,
        "Type":  "Audio",
        "Duration":  "3:19"
    },
    {
        "Title":  "Sense (TV Size Ver.)",
        "Date":  "2021-09-05T06:02:13",
        "URL":  "https://youtu.be/1kv3cfGlMQQ",
        "VideoId":  "1kv3cfGlMQQ",
        "Song":  "Sense",
        "Views":  196062,
        "ViewsDelta":  42,
        "Type":  "Audio",
        "Duration":  "1:30"
    },
    {
        "Title":  "Before Yesterday",
        "Date":  "2018-10-02T11:27:07",
        "URL":  "https://youtu.be/xlUYvGjmOas",
        "VideoId":  "xlUYvGjmOas",
        "Song":  "Before Yesterday",
        "Views":  196044,
        "ViewsDelta":  115,
        "Type":  "Audio",
        "Duration":  "3:45"
    },
    {
        "Title":  "BAND-MAID / without holding back (Official Live Video)",
        "Date":  "2025-12-31T22:00:03",
        "URL":  "https://youtu.be/oWQpbAmfZLE",
        "VideoId":  "oWQpbAmfZLE",
        "Song":  "without holding back",
        "Views":  194863,
        "ViewsDelta":  555,
        "Type":  "Official Live Video",
        "Duration":  "3:57"
    },
    {
        "Title":  "Rock in me",
        "Date":  "2018-02-13T07:01:53",
        "URL":  "https://youtu.be/TuWzx67ow3E",
        "VideoId":  "TuWzx67ow3E",
        "Song":  "Rock in me",
        "Views":  191919,
        "ViewsDelta":  6,
        "Type":  "Audio",
        "Duration":  "3:25"
    },
    {
        "Title":  "FATE",
        "Date":  "2018-02-13T07:01:51",
        "URL":  "https://youtu.be/-ooj0u845AY",
        "VideoId":  "-ooj0u845AY",
        "Song":  "FATE",
        "Views":  190522,
        "ViewsDelta":  0,
        "Type":  "Audio",
        "Duration":  "4:35"
    },
    {
        "Title":  "Mirage",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/UBLKqA51hZs",
        "VideoId":  "UBLKqA51hZs",
        "Song":  "Mirage",
        "Views":  190394,
        "ViewsDelta":  103,
        "Type":  "Audio",
        "Duration":  "3:58"
    },
    {
        "Title":  "Turn me on",
        "Date":  "2018-02-13T07:01:53",
        "URL":  "https://youtu.be/IWVtcPssnok",
        "VideoId":  "IWVtcPssnok",
        "Song":  "Turn me on",
        "Views":  185097,
        "ViewsDelta":  0,
        "Type":  "Audio",
        "Duration":  "4:18"
    },
    {
        "Title":  "PAGE",
        "Date":  "2019-12-05T00:27:12",
        "URL":  "https://youtu.be/nxCjEu4_7rU",
        "VideoId":  "nxCjEu4_7rU",
        "Song":  "PAGE",
        "Views":  181406,
        "ViewsDelta":  86,
        "Type":  "Audio",
        "Duration":  "4:18"
    },
    {
        "Title":  "CLANG",
        "Date":  "2018-02-13T07:01:53",
        "URL":  "https://youtu.be/4mSEQ4Qae4Y",
        "VideoId":  "4mSEQ4Qae4Y",
        "Song":  "CLANG",
        "Views":  181049,
        "ViewsDelta":  2,
        "Type":  "Audio",
        "Duration":  "4:13"
    },
    {
        "Title":  "祇園町",
        "Date":  "2019-04-02T11:04:53",
        "URL":  "https://youtu.be/aJmR2e_RtWQ",
        "VideoId":  "aJmR2e_RtWQ",
        "Song":  "Gion-Cho",
        "Views":  179664,
        "ViewsDelta":  140,
        "Type":  "Audio",
        "Duration":  "3:36"
    },
    {
        "Title":  "Brightest star",
        "Date":  "2024-09-24T06:00:11",
        "URL":  "https://youtu.be/70uZ87dY2z0",
        "VideoId":  "70uZ87dY2z0",
        "Song":  "Brightest Star",
        "Views":  179366,
        "ViewsDelta":  147,
        "Type":  "Audio",
        "Duration":  "3:18"
    },
    {
        "Title":  "Awkward",
        "Date":  "2018-10-02T11:35:20",
        "URL":  "https://youtu.be/9tf-bzo9bI0",
        "VideoId":  "9tf-bzo9bI0",
        "Song":  "Awkward",
        "Views":  179224,
        "ViewsDelta":  109,
        "Type":  "Audio",
        "Duration":  "3:33"
    },
    {
        "Title":  "Daydreaming",
        "Date":  "2018-02-13T07:00:01",
        "URL":  "https://youtu.be/XyWA2xfDtyM",
        "VideoId":  "XyWA2xfDtyM",
        "Song":  "Daydreaming",
        "Views":  178750,
        "ViewsDelta":  0,
        "Type":  "Audio",
        "Duration":  "4:00"
    },
    {
        "Title":  "anemone",
        "Date":  "2018-02-13T07:01:47",
        "URL":  "https://youtu.be/uh0JDdCgZcs",
        "VideoId":  "uh0JDdCgZcs",
        "Song":  "anemone",
        "Views":  178056,
        "ViewsDelta":  3,
        "Type":  "Audio",
        "Duration":  "4:28"
    },
    {
        "Title":  "Go easy",
        "Date":  "2024-09-24T06:00:38",
        "URL":  "https://youtu.be/ZBbvy6Qx4wE",
        "VideoId":  "ZBbvy6Qx4wE",
        "Song":  "Go easy",
        "Views":  175617,
        "ViewsDelta":  123,
        "Type":  "Audio",
        "Duration":  "3:01"
    },
    {
        "Title":  "start over",
        "Date":  "2018-10-02T11:32:04",
        "URL":  "https://youtu.be/HoXEk8Rcsyg",
        "VideoId":  "HoXEk8Rcsyg",
        "Song":  "start over",
        "Views":  175133,
        "ViewsDelta":  78,
        "Type":  "Audio",
        "Duration":  "3:12"
    },
    {
        "Title":  "decided by myself",
        "Date":  "2018-10-02T11:34:32",
        "URL":  "https://youtu.be/aLYJuZT37i4",
        "VideoId":  "aLYJuZT37i4",
        "Song":  "decided by myself",
        "Views":  174204,
        "ViewsDelta":  119,
        "Type":  "Audio",
        "Duration":  "3:55"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock ×「ロックは淑女の嗜みでして」 Special Music Video short ver.2",
        "Date":  "2025-06-25T23:01:02",
        "URL":  "https://youtu.be/snND6wFvgx8",
        "VideoId":  "snND6wFvgx8",
        "Song":  "Ready to Rock",
        "Views":  172529,
        "ViewsDelta":  53,
        "Type":  "Anime Music Video Short",
        "Duration":  "0:37"
    },
    {
        "Title":  "So,What?",
        "Date":  "2018-10-02T11:34:32",
        "URL":  "https://youtu.be/di1PjUakkLw",
        "VideoId":  "di1PjUakkLw",
        "Song":  "So,What?",
        "Views":  171138,
        "ViewsDelta":  108,
        "Type":  "Audio",
        "Duration":  "3:49"
    },
    {
        "Title":  "flying high",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/Q_qA4BtEV6c",
        "VideoId":  "Q_qA4BtEV6c",
        "Song":  "flying high",
        "Views":  169637,
        "ViewsDelta":  92,
        "Type":  "Audio",
        "Duration":  "3:43"
    },
    {
        "Title":  "Smile",
        "Date":  "2019-01-15T10:01:45",
        "URL":  "https://youtu.be/KzCUAJIMtu0",
        "VideoId":  "KzCUAJIMtu0",
        "Song":  "Smile",
        "Views":  168208,
        "ViewsDelta":  85,
        "Type":  "Audio",
        "Duration":  "3:58"
    },
    {
        "Title":  "One and only",
        "Date":  "2018-02-13T07:01:49",
        "URL":  "https://youtu.be/FkbKXUGMLvA",
        "VideoId":  "FkbKXUGMLvA",
        "Song":  "One and only",
        "Views":  166524,
        "ViewsDelta":  0,
        "Type":  "Audio",
        "Duration":  "3:23"
    },
    {
        "Title":  "Memorable",
        "Date":  "2023-02-21T05:04:04",
        "URL":  "https://youtu.be/UZvceYLB75c",
        "VideoId":  "UZvceYLB75c",
        "Song":  "Memorable",
        "Views":  163635,
        "ViewsDelta":  14,
        "Type":  "Audio",
        "Duration":  "3:14"
    },
    {
        "Title":  "Corallium",
        "Date":  "2022-09-20T06:04:21",
        "URL":  "https://youtu.be/FywmRdKKSjg",
        "VideoId":  "FywmRdKKSjg",
        "Song":  "Corallium",
        "Views":  160966,
        "ViewsDelta":  49,
        "Type":  "Audio",
        "Duration":  "3:55"
    },
    {
        "Title":  "Toi et moi",
        "Date":  "2024-09-24T06:00:25",
        "URL":  "https://youtu.be/V9VDAoYf0A0",
        "VideoId":  "V9VDAoYf0A0",
        "Song":  "Toi et moi",
        "Views":  160679,
        "ViewsDelta":  117,
        "Type":  "Audio",
        "Duration":  "2:57"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video MIKU KOBATO ver.)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-06T22:00:32",
        "URL":  "https://youtu.be/bOjubutSnXo",
        "VideoId":  "bOjubutSnXo",
        "Song":  "Ready to Rock",
        "Views":  155549,
        "ViewsDelta":  17,
        "Type":  "Official Teaser Video",
        "Duration":  "0:24"
    },
    {
        "Title":  "Don\u0027t Apply The Brake",
        "Date":  "2018-10-02T11:47:34",
        "URL":  "https://youtu.be/vY6eYTG315A",
        "VideoId":  "vY6eYTG315A",
        "Song":  "Don\u0027t apply the brake",
        "Views":  152247,
        "ViewsDelta":  108,
        "Type":  "Audio",
        "Duration":  "3:21"
    },
    {
        "Title":  "Price of Pride",
        "Date":  "2018-10-02T11:48:26",
        "URL":  "https://youtu.be/wkzVmMRcC0U",
        "VideoId":  "wkzVmMRcC0U",
        "Song":  "Price of Pride",
        "Views":  149519,
        "ViewsDelta":  93,
        "Type":  "Audio",
        "Duration":  "3:28"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Live #Shorts 2) TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-08-29T00:00:36",
        "URL":  "https://youtu.be/QWKfL5C7oRg",
        "VideoId":  "QWKfL5C7oRg",
        "Song":  "Ready to Rock",
        "Views":  148081,
        "ViewsDelta":  10,
        "Type":  "Official Live Short",
        "Duration":  "0:23"
    },
    {
        "Title":  "At the drop of a hat",
        "Date":  "2019-12-05T00:27:13",
        "URL":  "https://youtu.be/pa-zUO820-0",
        "VideoId":  "pa-zUO820-0",
        "Song":  "At the drop of a hat",
        "Views":  148026,
        "ViewsDelta":  63,
        "Type":  "Audio",
        "Duration":  "4:20"
    },
    {
        "Title":  "TIME",
        "Date":  "2018-10-02T11:35:37",
        "URL":  "https://youtu.be/GEvS_V9bLDE",
        "VideoId":  "GEvS_V9bLDE",
        "Song":  "TIME",
        "Views":  145892,
        "ViewsDelta":  76,
        "Type":  "Audio",
        "Duration":  "3:30"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video AKANE ver.)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-05T00:30:03",
        "URL":  "https://youtu.be/50H_hmPh4dI",
        "VideoId":  "50H_hmPh4dI",
        "Song":  "Ready to Rock",
        "Views":  144955,
        "ViewsDelta":  21,
        "Type":  "Official Teaser Video",
        "Duration":  "0:24"
    },
    {
        "Title":  "ハニー",
        "Date":  "2018-10-02T11:55:46",
        "URL":  "https://youtu.be/_I70qgGN-6I",
        "VideoId":  "_I70qgGN-6I",
        "Song":  "Honey",
        "Views":  142404,
        "ViewsDelta":  110,
        "Type":  "Audio",
        "Duration":  "3:25"
    },
    {
        "Title":  "Dilly-Dally",
        "Date":  "2025-10-21T06:00:11",
        "URL":  "https://youtu.be/7gE2cJFw_xg",
        "VideoId":  "7gE2cJFw_xg",
        "Song":  "Dilly-Dally",
        "Views":  140718,
        "ViewsDelta":  362,
        "Type":  "Audio",
        "Duration":  "2:49"
    },
    {
        "Title":  "Spirit!!",
        "Date":  "2018-02-13T07:01:52",
        "URL":  "https://youtu.be/2XR0CmgB1pI",
        "VideoId":  "2XR0CmgB1pI",
        "Song":  "Spirit!!",
        "Views":  139824,
        "ViewsDelta":  1,
        "Type":  "Audio",
        "Duration":  "3:44"
    },
    {
        "Title":  "Lock and Load",
        "Date":  "2025-10-21T06:01:38",
        "URL":  "https://youtu.be/yBx52tnrqZw",
        "VideoId":  "yBx52tnrqZw",
        "Song":  "Lock and Load",
        "Views":  138493,
        "ViewsDelta":  252,
        "Type":  "Audio",
        "Duration":  "3:21"
    },
    {
        "Title":  "Arcadia Girl",
        "Date":  "2018-10-02T11:47:25",
        "URL":  "https://youtu.be/TwMx4bJ30Tk",
        "VideoId":  "TwMx4bJ30Tk",
        "Song":  "Arcadia Girl",
        "Views":  137821,
        "ViewsDelta":  91,
        "Type":  "Audio",
        "Duration":  "4:06"
    },
    {
        "Title":  "Get to the top",
        "Date":  "2024-09-24T06:00:58",
        "URL":  "https://youtu.be/z0KTMEXJ1RE",
        "VideoId":  "z0KTMEXJ1RE",
        "Song":  "Get to the top",
        "Views":  128687,
        "ViewsDelta":  64,
        "Type":  "Audio",
        "Duration":  "3:08"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Live #Shorts) TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-08-27T00:04:12",
        "URL":  "https://youtu.be/0q8L_YvNZn0",
        "VideoId":  "0q8L_YvNZn0",
        "Song":  "Ready to Rock",
        "Views":  126637,
        "ViewsDelta":  6,
        "Type":  "Official Live Short",
        "Duration":  "0:25"
    },
    {
        "Title":  "OOPARTS",
        "Date":  "2018-10-02T11:34:30",
        "URL":  "https://youtu.be/YFLsVQ4iPxw",
        "VideoId":  "YFLsVQ4iPxw",
        "Song":  "OOPARTS",
        "Views":  126372,
        "ViewsDelta":  79,
        "Type":  "Audio",
        "Duration":  "4:07"
    },
    {
        "Title":  "ORDER",
        "Date":  "2018-10-02T11:26:01",
        "URL":  "https://youtu.be/3J-TWdHqjoQ",
        "VideoId":  "3J-TWdHqjoQ",
        "Song":  "ORDER",
        "Views":  125863,
        "ViewsDelta":  67,
        "Type":  "Audio",
        "Duration":  "3:23"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Live Video ver. 3 #shorts )  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-05-29T09:01:19",
        "URL":  "https://youtu.be/lBkdxHmvyAA",
        "VideoId":  "lBkdxHmvyAA",
        "Song":  "Ready to Rock",
        "Views":  124117,
        "ViewsDelta":  21,
        "Type":  "Official Live Short",
        "Duration":  "0:44"
    },
    {
        "Title":  "Carry on living",
        "Date":  "2018-02-13T07:00:01",
        "URL":  "https://youtu.be/pKFBa8urc60",
        "VideoId":  "pKFBa8urc60",
        "Song":  "Carry on living",
        "Views":  123962,
        "ViewsDelta":  1,
        "Type":  "Audio",
        "Duration":  "3:35"
    },
    {
        "Title":  "BAND-MAID / Forbidden tale (Official Teaser Video) MIKU KOBATO",
        "Date":  "2024-10-11T09:00:00",
        "URL":  "https://youtu.be/08dX4S0DWfg",
        "VideoId":  "08dX4S0DWfg",
        "Song":  "Forbidden tale",
        "Views":  123362,
        "ViewsDelta":  63,
        "Type":  "Official Teaser Video",
        "Duration":  "0:32"
    },
    {
        "Title":  "The Dragon Cries",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/uHBnf1pXC2E",
        "VideoId":  "uHBnf1pXC2E",
        "Song":  "The Dragon Cries",
        "Views":  112862,
        "ViewsDelta":  56,
        "Type":  "Audio",
        "Duration":  "3:56"
    },
    {
        "Title":  "matchless GUM",
        "Date":  "2018-10-02T11:42:18",
        "URL":  "https://youtu.be/ljt_YGfHQr4",
        "VideoId":  "ljt_YGfHQr4",
        "Song":  "matchless GUM",
        "Views":  112068,
        "ViewsDelta":  78,
        "Type":  "Audio",
        "Duration":  "3:12"
    },
    {
        "Title":  "Unleash!!!!!",
        "Date":  "2022-09-20T06:05:20",
        "URL":  "https://youtu.be/uLTBtjZEGv0",
        "VideoId":  "uLTBtjZEGv0",
        "Song":  "Unleash!!!!!",
        "Views":  111047,
        "ViewsDelta":  47,
        "Type":  "Audio",
        "Duration":  "3:11"
    },
    {
        "Title":  "ハニー",
        "Date":  "2018-02-13T07:01:49",
        "URL":  "https://youtu.be/0ozhb_hN9JY",
        "VideoId":  "0ozhb_hN9JY",
        "Song":  "Honey",
        "Views":  109625,
        "ViewsDelta":  1,
        "Type":  "Audio",
        "Duration":  "3:25"
    },
    {
        "Title":  "Alive-or-Dead",
        "Date":  "2018-02-13T07:01:41",
        "URL":  "https://youtu.be/aNM9ovsfshc",
        "VideoId":  "aNM9ovsfshc",
        "Song":  "Alive-or-Dead",
        "Views":  106868,
        "ViewsDelta":  0,
        "Type":  "Audio",
        "Duration":  "3:48"
    },
    {
        "Title":  "虎 and 虎",
        "Date":  "2019-04-02T11:05:24",
        "URL":  "https://youtu.be/-Z7S8Y_Eb4Q",
        "VideoId":  "-Z7S8Y_Eb4Q",
        "Song":  "One and only",
        "Views":  105287,
        "ViewsDelta":  73,
        "Type":  "Audio",
        "Duration":  "3:27"
    },
    {
        "Title":  "YURAGU",
        "Date":  "2018-10-02T11:25:59",
        "URL":  "https://youtu.be/v2ZFMzL0QPA",
        "VideoId":  "v2ZFMzL0QPA",
        "Song":  "YURAGU",
        "Views":  103526,
        "ViewsDelta":  35,
        "Type":  "Audio",
        "Duration":  "4:02"
    },
    {
        "Title":  "Beauty and the Beast",
        "Date":  "2018-10-02T11:47:18",
        "URL":  "https://youtu.be/u4L-I041jis",
        "VideoId":  "u4L-I041jis",
        "Song":  "Beauty and the beast",
        "Views":  103084,
        "ViewsDelta":  80,
        "Type":  "Audio",
        "Duration":  "4:01"
    },
    {
        "Title":  "BAND-MAID / Zen (Official Teaser Video)  MIKU KOBATO Ver.  MAPPAアニメ「全修。」オープニングテーマソング",
        "Date":  "2025-01-23T22:00:07",
        "URL":  "https://youtu.be/A1vhzIBfTGQ",
        "VideoId":  "A1vhzIBfTGQ",
        "Song":  "Zen",
        "Views":  102948,
        "ViewsDelta":  164,
        "Type":  "Official Teaser Video",
        "Duration":  "0:27"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Teaser Video) TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-07-12T07:00:04",
        "URL":  "https://youtu.be/1kbZ5NsrdX4",
        "VideoId":  "1kbZ5NsrdX4",
        "Song":  "What is justice?",
        "Views":  97302,
        "ViewsDelta":  7,
        "Type":  "Official Teaser Video",
        "Duration":  "0:10"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock ×「ロックは淑女の嗜みでして」 Special Music Video short ver.1",
        "Date":  "2025-06-24T23:00:05",
        "URL":  "https://youtu.be/anA8iIVMTHw",
        "VideoId":  "anA8iIVMTHw",
        "Song":  "Ready to Rock",
        "Views":  93011,
        "ViewsDelta":  10,
        "Type":  "Anime Music Video Short",
        "Duration":  "0:25"
    },
    {
        "Title":  "LOOK AT ME",
        "Date":  "2018-10-02T11:26:01",
        "URL":  "https://youtu.be/xOqnN00feSc",
        "VideoId":  "xOqnN00feSc",
        "Song":  "LOOK AT ME",
        "Views":  92382,
        "ViewsDelta":  55,
        "Type":  "Audio",
        "Duration":  "3:59"
    },
    {
        "Title":  "hide-and-seek",
        "Date":  "2019-01-15T10:02:07",
        "URL":  "https://youtu.be/VQgMoXzcgaM",
        "VideoId":  "VQgMoXzcgaM",
        "Song":  "hide-and-seek",
        "Views":  92332,
        "ViewsDelta":  171,
        "Type":  "Audio",
        "Duration":  "3:01"
    },
    {
        "Title":  "Bestie",
        "Date":  "2024-09-24T06:00:45",
        "URL":  "https://youtu.be/eLQCEiBUthE",
        "VideoId":  "eLQCEiBUthE",
        "Song":  "Bestie",
        "Views":  91777,
        "ViewsDelta":  156,
        "Type":  "Audio",
        "Duration":  "3:36"
    },
    {
        "Title":  "Unfair game",
        "Date":  "2018-10-02T11:44:03",
        "URL":  "https://youtu.be/wlDCBVsRi2g",
        "VideoId":  "wlDCBVsRi2g",
        "Song":  "Unfair game",
        "Views":  90652,
        "ViewsDelta":  51,
        "Type":  "Audio",
        "Duration":  "3:31"
    },
    {
        "Title":  "Sense",
        "Date":  "2022-09-20T06:04:05",
        "URL":  "https://youtu.be/eAX5_kypXp4",
        "VideoId":  "eAX5_kypXp4",
        "Song":  "Sense",
        "Views":  87336,
        "ViewsDelta":  36,
        "Type":  "Audio",
        "Duration":  "3:25"
    },
    {
        "Title":  "BAND-MAID / Zen (Official Teaser Video)  KANAMI Ver.  MAPPAアニメ「全修。」オープニングテーマソング",
        "Date":  "2025-01-19T22:00:40",
        "URL":  "https://youtu.be/owIg4MUVG8M",
        "VideoId":  "owIg4MUVG8M",
        "Song":  "Zen",
        "Views":  86272,
        "ViewsDelta":  38,
        "Type":  "Official Teaser Video",
        "Duration":  "0:27"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video KANAMI ver.)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-03T12:00:12",
        "URL":  "https://youtu.be/ua-_klKlbdY",
        "VideoId":  "ua-_klKlbdY",
        "Song":  "Ready to Rock",
        "Views":  85923,
        "ViewsDelta":  4,
        "Type":  "Official Teaser Video",
        "Duration":  "0:24"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Teaser Video MIKU KOBATO ver.) TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-07-18T23:00:29",
        "URL":  "https://youtu.be/KN5arIuiRp8",
        "VideoId":  "KN5arIuiRp8",
        "Song":  "What is justice?",
        "Views":  79235,
        "ViewsDelta":  11,
        "Type":  "Official Teaser Video",
        "Duration":  "0:27"
    },
    {
        "Title":  "YOLOSIOSU",
        "Date":  "2019-04-02T11:05:25",
        "URL":  "https://youtu.be/4TniI0IJEkk",
        "VideoId":  "4TniI0IJEkk",
        "Song":  "YOLO",
        "Views":  78955,
        "ViewsDelta":  83,
        "Type":  "Audio",
        "Duration":  "4:22"
    },
    {
        "Title":  "Don\u0027t be long",
        "Date":  "2020-12-01T10:04:07",
        "URL":  "https://youtu.be/XDZYylY1IHE",
        "VideoId":  "XDZYylY1IHE",
        "Song":  "Don\u0027t be long",
        "Views":  78441,
        "ViewsDelta":  62,
        "Type":  "Audio",
        "Duration":  "3:20"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video KANAMI ver.2)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-17T23:00:39",
        "URL":  "https://youtu.be/XqGukTfP8n8",
        "VideoId":  "XqGukTfP8n8",
        "Song":  "Ready to Rock",
        "Views":  77814,
        "ViewsDelta":  7,
        "Type":  "Official Teaser Video",
        "Duration":  "0:12"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Live Video #shorts )  TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-07-31T06:01:22",
        "URL":  "https://youtu.be/rG8cfEJeNMw",
        "VideoId":  "rG8cfEJeNMw",
        "Song":  "What is justice?",
        "Views":  77192,
        "ViewsDelta":  15,
        "Type":  "Official Live Short",
        "Duration":  "0:34"
    },
    {
        "Title":  "Brand-New Road",
        "Date":  "2018-10-02T11:27:08",
        "URL":  "https://youtu.be/_KVaSaQmb0k",
        "VideoId":  "_KVaSaQmb0k",
        "Song":  "Brand-New Road",
        "Views":  77167,
        "ViewsDelta":  39,
        "Type":  "Audio",
        "Duration":  "3:50"
    },
    {
        "Title":  "すくりーみんぐ",
        "Date":  "2019-04-02T11:04:51",
        "URL":  "https://youtu.be/VACaI2GRUVE",
        "VideoId":  "VACaI2GRUVE",
        "Song":  "Screaming",
        "Views":  75870,
        "ViewsDelta":  37,
        "Type":  "Audio",
        "Duration":  "3:55"
    },
    {
        "Title":  "Shake That!!",
        "Date":  "2023-08-01T06:00:07",
        "URL":  "https://youtu.be/CqFkNqdPnK8",
        "VideoId":  "CqFkNqdPnK8",
        "Song":  "Shake That!!",
        "Views":  72048,
        "ViewsDelta":  22,
        "Type":  "Audio",
        "Duration":  "4:05"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Live Video 2 #shorts )  TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-08-07T23:11:02",
        "URL":  "https://youtu.be/UHZDVE5Ea6c",
        "VideoId":  "UHZDVE5Ea6c",
        "Song":  "What is justice?",
        "Views":  69512,
        "ViewsDelta":  18,
        "Type":  "Official Live Short",
        "Duration":  "0:33"
    },
    {
        "Title":  "Memorable",
        "Date":  "2024-09-24T06:00:54",
        "URL":  "https://youtu.be/o8p3rYAKFys",
        "VideoId":  "o8p3rYAKFys",
        "Song":  "Memorable",
        "Views":  68090,
        "ViewsDelta":  90,
        "Type":  "Audio",
        "Duration":  "3:14"
    },
    {
        "Title":  "BAND-MAID / without holding back (Official Live Teaser 1)",
        "Date":  "2026-01-01T07:01:37",
        "URL":  "https://youtu.be/sAt4wANOaqA",
        "VideoId":  "sAt4wANOaqA",
        "Song":  "without holding back",
        "Views":  68040,
        "ViewsDelta":  39,
        "Type":  "Official Live Short",
        "Duration":  "0:36"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Dance Video Ver.2)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-19T22:00:44",
        "URL":  "https://youtu.be/jxhdmtaXg9A",
        "VideoId":  "jxhdmtaXg9A",
        "Song":  "Ready to Rock",
        "Views":  67853,
        "ViewsDelta":  9,
        "Type":  "Official Dance Video",
        "Duration":  "0:26"
    },
    {
        "Title":  "glory",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/uZJNer5jBm8",
        "VideoId":  "uZJNer5jBm8",
        "Song":  "glory",
        "Views":  67709,
        "ViewsDelta":  36,
        "Type":  "Audio",
        "Duration":  "3:40"
    },
    {
        "Title":  "Puzzle",
        "Date":  "2023-08-01T06:00:27",
        "URL":  "https://youtu.be/gbopW5vHlio",
        "VideoId":  "gbopW5vHlio",
        "Song":  "Puzzle",
        "Views":  65039,
        "ViewsDelta":  33,
        "Type":  "Audio",
        "Duration":  "4:21"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Live #Shorts 3) TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-09-02T23:01:06",
        "URL":  "https://youtu.be/wi1SwV0vWzs",
        "VideoId":  "wi1SwV0vWzs",
        "Song":  "Ready to Rock",
        "Views":  63455,
        "ViewsDelta":  19,
        "Type":  "Official Live Short",
        "Duration":  "0:37"
    },
    {
        "Title":  "ansan",
        "Date":  "2019-04-02T11:04:52",
        "URL":  "https://youtu.be/EqV2Bnzj9Bo",
        "VideoId":  "EqV2Bnzj9Bo",
        "Song":  "anemone",
        "Views":  63434,
        "ViewsDelta":  35,
        "Type":  "Audio",
        "Duration":  "4:29"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Teaser Video)",
        "Date":  "2025-10-14T23:30:17",
        "URL":  "https://youtu.be/M_YlnotO7sM",
        "VideoId":  "M_YlnotO7sM",
        "Song":  "Present Perfect",
        "Views":  62282,
        "ViewsDelta":  21,
        "Type":  "Official Teaser Video",
        "Duration":  "0:23"
    },
    {
        "Title":  "Daydreaming",
        "Date":  "2018-10-02T11:55:46",
        "URL":  "https://youtu.be/-7D6FuWUpsk",
        "VideoId":  "-7D6FuWUpsk",
        "Song":  "Daydreaming",
        "Views":  60594,
        "ViewsDelta":  34,
        "Type":  "Audio",
        "Duration":  "3:58"
    },
    {
        "Title":  "BAND-MAID / without holding back (Official Live Teaser 2)",
        "Date":  "2026-01-04T06:00:06",
        "URL":  "https://youtu.be/5H2X1aq94NI",
        "VideoId":  "5H2X1aq94NI",
        "Song":  "without holding back",
        "Views":  59368,
        "ViewsDelta":  59,
        "Type":  "Official Live Short",
        "Duration":  "0:44"
    },
    {
        "Title":  "BAND-MAID / Protect You (Official Teaser Video)",
        "Date":  "2024-06-20T23:00:00",
        "URL":  "https://youtu.be/aGjPAPnf_-A",
        "VideoId":  "aGjPAPnf_-A",
        "Song":  "Protect You",
        "Views":  59138,
        "ViewsDelta":  1,
        "Type":  "Official Teaser Video",
        "Duration":  "0:26"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video)  AKANE vs Pau",
        "Date":  "2024-07-31T11:00:32",
        "URL":  "https://youtu.be/N5uWg7wPvZA",
        "VideoId":  "N5uWg7wPvZA",
        "Song":  "Show Them",
        "Views":  57650,
        "ViewsDelta":  10,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-03-16T08:00:37",
        "URL":  "https://youtu.be/NFS8hO3BgTA",
        "VideoId":  "NFS8hO3BgTA",
        "Song":  "Ready to Rock",
        "Views":  57571,
        "ViewsDelta":  5,
        "Type":  "Official Teaser Video",
        "Duration":  "0:15"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Dance Video)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-10T11:00:38",
        "URL":  "https://youtu.be/MPYm3Y6yVkM",
        "VideoId":  "MPYm3Y6yVkM",
        "Song":  "Ready to Rock",
        "Views":  57152,
        "ViewsDelta":  6,
        "Type":  "Official Dance Video",
        "Duration":  "0:26"
    },
    {
        "Title":  "YOLO",
        "Date":  "2018-10-02T11:35:19",
        "URL":  "https://youtu.be/T_BxRz7-ncw",
        "VideoId":  "T_BxRz7-ncw",
        "Song":  "YOLO",
        "Views":  56452,
        "ViewsDelta":  26,
        "Type":  "Audio",
        "Duration":  "4:26"
    },
    {
        "Title":  "Akasimahen",
        "Date":  "2019-04-02T11:04:51",
        "URL":  "https://youtu.be/hHrnhXfJhL8",
        "VideoId":  "hHrnhXfJhL8",
        "Song":  "Awkward",
        "Views":  55880,
        "ViewsDelta":  27,
        "Type":  "Audio",
        "Duration":  "3:20"
    },
    {
        "Title":  "Thrill",
        "Date":  "2023-08-01T06:00:25",
        "URL":  "https://youtu.be/Nld9hWfIfjE",
        "VideoId":  "Nld9hWfIfjE",
        "Song":  "Thrill",
        "Views":  55051,
        "ViewsDelta":  36,
        "Type":  "Audio",
        "Duration":  "4:03"
    },
    {
        "Title":  "DICE",
        "Date":  "2023-08-01T06:00:33",
        "URL":  "https://youtu.be/bKCcDI5-Oa0",
        "VideoId":  "bKCcDI5-Oa0",
        "Song":  "DICE",
        "Views":  53303,
        "ViewsDelta":  29,
        "Type":  "Audio",
        "Duration":  "4:03"
    },
    {
        "Title":  "DOMINATION",
        "Date":  "2023-08-01T06:00:41",
        "URL":  "https://youtu.be/uc6ILmIBTMA",
        "VideoId":  "uc6ILmIBTMA",
        "Song":  "DOMINATION",
        "Views":  53062,
        "ViewsDelta":  34,
        "Type":  "Audio",
        "Duration":  "3:51"
    },
    {
        "Title":  "Bubble",
        "Date":  "2019-12-05T00:27:11",
        "URL":  "https://youtu.be/VMswJMSWKDw",
        "VideoId":  "VMswJMSWKDw",
        "Song":  "Bubble",
        "Views":  51726,
        "ViewsDelta":  28,
        "Type":  "Audio",
        "Duration":  "3:47"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Teaser Video AKANE)",
        "Date":  "2025-10-28T08:02:12",
        "URL":  "https://youtu.be/y_P3bYEjsbE",
        "VideoId":  "y_P3bYEjsbE",
        "Song":  "Present Perfect",
        "Views":  51697,
        "ViewsDelta":  51,
        "Type":  "Official Teaser Video",
        "Duration":  "0:23"
    },
    {
        "Title":  "I can\u0027t live without you.",
        "Date":  "2023-08-01T06:00:36",
        "URL":  "https://youtu.be/fbiSk3eczBc",
        "VideoId":  "fbiSk3eczBc",
        "Song":  "I can\u0027t live without you.",
        "Views":  49751,
        "ViewsDelta":  15,
        "Type":  "Audio",
        "Duration":  "3:50"
    },
    {
        "Title":  "Play",
        "Date":  "2023-08-01T06:00:04",
        "URL":  "https://youtu.be/5kjW4huHKNo",
        "VideoId":  "5kjW4huHKNo",
        "Song":  "Play",
        "Views":  49701,
        "ViewsDelta":  26,
        "Type":  "Audio",
        "Duration":  "3:20"
    },
    {
        "Title":  "FREEDOM",
        "Date":  "2023-08-01T06:00:18",
        "URL":  "https://youtu.be/VMZxl3h3IPc",
        "VideoId":  "VMZxl3h3IPc",
        "Song":  "FREEDOM",
        "Views":  49114,
        "ViewsDelta":  23,
        "Type":  "Audio",
        "Duration":  "3:45"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video)  KANAMI vs Dany",
        "Date":  "2024-08-02T11:00:36",
        "URL":  "https://youtu.be/YN9Mv3C0WE4",
        "VideoId":  "YN9Mv3C0WE4",
        "Song":  "Show Them",
        "Views":  49050,
        "ViewsDelta":  12,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Teaser Video SAIKI ver.) TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-07-19T23:00:35",
        "URL":  "https://youtu.be/TSb_aKt6KtI",
        "VideoId":  "TSb_aKt6KtI",
        "Song":  "What is justice?",
        "Views":  48991,
        "ViewsDelta":  11,
        "Type":  "Official Teaser Video",
        "Duration":  "0:27"
    },
    {
        "Title":  "Choose me",
        "Date":  "2023-08-01T06:00:09",
        "URL":  "https://youtu.be/I3icx12V-KU",
        "VideoId":  "I3icx12V-KU",
        "Song":  "Choose me",
        "Views":  48841,
        "ViewsDelta":  28,
        "Type":  "Audio",
        "Duration":  "3:39"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video)  MISA vs Ale",
        "Date":  "2024-07-29T23:00:03",
        "URL":  "https://youtu.be/enNgR1c9ZEo",
        "VideoId":  "enNgR1c9ZEo",
        "Song":  "Show Them",
        "Views":  48808,
        "ViewsDelta":  3,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video SAIKI ver.)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-07T22:00:25",
        "URL":  "https://youtu.be/RcoQoHORdek",
        "VideoId":  "RcoQoHORdek",
        "Song":  "Ready to Rock",
        "Views":  48330,
        "ViewsDelta":  3,
        "Type":  "Official Teaser Video",
        "Duration":  "0:24"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Teaser Video 2) TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-07-17T23:00:29",
        "URL":  "https://youtu.be/WVpuhXbZuR0",
        "VideoId":  "WVpuhXbZuR0",
        "Song":  "What is justice?",
        "Views":  48265,
        "ViewsDelta":  8,
        "Type":  "Official Teaser Video",
        "Duration":  "0:30"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Teaser Video MIKU KOBATO)",
        "Date":  "2025-10-25T08:01:46",
        "URL":  "https://youtu.be/s9xuG5xq0jo",
        "VideoId":  "s9xuG5xq0jo",
        "Song":  "Present Perfect",
        "Views":  47925,
        "ViewsDelta":  16,
        "Type":  "Official Teaser Video",
        "Duration":  "0:23"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video MISA ver.)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-05T22:21:17",
        "URL":  "https://youtu.be/h9t2zJe-JIY",
        "VideoId":  "h9t2zJe-JIY",
        "Song":  "Ready to Rock",
        "Views":  47868,
        "ViewsDelta":  5,
        "Type":  "Official Teaser Video",
        "Duration":  "0:24"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-23T22:00:42",
        "URL":  "https://youtu.be/gKsEHgTRD84",
        "VideoId":  "gKsEHgTRD84",
        "Song":  "Ready to Rock",
        "Views":  47750,
        "ViewsDelta":  4,
        "Type":  "Official Teaser Video",
        "Duration":  "0:32"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Teaser Video 2)",
        "Date":  "2025-10-21T23:00:22",
        "URL":  "https://youtu.be/KYqudoBNACU",
        "VideoId":  "KYqudoBNACU",
        "Song":  "Present Perfect",
        "Views":  46947,
        "ViewsDelta":  10,
        "Type":  "Official Teaser Video",
        "Duration":  "0:26"
    },
    {
        "Title":  "REAL EXISTENCE",
        "Date":  "2023-08-01T06:00:14",
        "URL":  "https://youtu.be/KARLb_qDCpg",
        "VideoId":  "KARLb_qDCpg",
        "Song":  "REAL EXISTENCE",
        "Views":  46410,
        "ViewsDelta":  37,
        "Type":  "Audio",
        "Duration":  "4:10"
    },
    {
        "Title":  "alone",
        "Date":  "2023-08-01T06:00:02",
        "URL":  "https://youtu.be/2UPXHfkrh-0",
        "VideoId":  "2UPXHfkrh-0",
        "Song":  "alone",
        "Views":  46067,
        "ViewsDelta":  32,
        "Type":  "Audio",
        "Duration":  "3:28"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video)  MIKU KOBATO",
        "Date":  "2024-08-05T11:00:30",
        "URL":  "https://youtu.be/L1prF8ArZb8",
        "VideoId":  "L1prF8ArZb8",
        "Song":  "Show Them",
        "Views":  45598,
        "ViewsDelta":  3,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Live Teaser 2)",
        "Date":  "2026-02-07T02:32:35",
        "URL":  "https://youtu.be/ia1bjN1tjq4",
        "VideoId":  "ia1bjN1tjq4",
        "Song":  "Present Perfect",
        "Views":  45164,
        "ViewsDelta":  117,
        "Type":  "Other",
        "Duration":  "1:00"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Teaser Video KANAMI ver.) TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-07-20T23:00:29",
        "URL":  "https://youtu.be/RjdMcfqLzhk",
        "VideoId":  "RjdMcfqLzhk",
        "Song":  "What is justice?",
        "Views":  45094,
        "ViewsDelta":  8,
        "Type":  "Official Teaser Video",
        "Duration":  "0:27"
    },
    {
        "Title":  "Ready to Rock",
        "Date":  "2025-10-21T06:01:28",
        "URL":  "https://youtu.be/sYuZanAQ2Os",
        "VideoId":  "sYuZanAQ2Os",
        "Song":  "Ready to Rock",
        "Views":  44846,
        "ViewsDelta":  104,
        "Type":  "Audio",
        "Duration":  "3:34"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video)  SAIKI vs Dany",
        "Date":  "2024-08-04T11:00:35",
        "URL":  "https://youtu.be/_wA3a3op4I4",
        "VideoId":  "_wA3a3op4I4",
        "Song":  "Show Them",
        "Views":  44519,
        "ViewsDelta":  3,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29"
    },
    {
        "Title":  "BAND-MAID / New Album \"Epic Narratives\" (Official Teaser Video)",
        "Date":  "2024-07-14T07:15:29",
        "URL":  "https://youtu.be/kobDkT-NMkU",
        "VideoId":  "kobDkT-NMkU",
        "Song":  "",
        "Views":  44371,
        "ViewsDelta":  8,
        "Type":  "Official Teaser Video",
        "Duration":  "0:53"
    },
    {
        "Title":  "Screaming",
        "Date":  "2023-08-01T06:00:46",
        "URL":  "https://youtu.be/yiwuTda0E8s",
        "VideoId":  "yiwuTda0E8s",
        "Song":  "Screaming",
        "Views":  44011,
        "ViewsDelta":  27,
        "Type":  "Audio",
        "Duration":  "3:50"
    },
    {
        "Title":  "What is justice?",
        "Date":  "2025-10-21T06:00:06",
        "URL":  "https://youtu.be/2gKVQrp1IB4",
        "VideoId":  "2gKVQrp1IB4",
        "Song":  "What is justice?",
        "Views":  42759,
        "ViewsDelta":  98,
        "Type":  "Audio",
        "Duration":  "3:25"
    },
    {
        "Title":  "Rock in me",
        "Date":  "2023-08-01T06:00:34",
        "URL":  "https://youtu.be/_i2Knq68730",
        "VideoId":  "_i2Knq68730",
        "Song":  "Rock in me",
        "Views":  42677,
        "ViewsDelta":  23,
        "Type":  "Audio",
        "Duration":  "3:22"
    },
    {
        "Title":  "Daydreaming",
        "Date":  "2023-08-01T06:00:13",
        "URL":  "https://youtu.be/Msr-nKTQcao",
        "VideoId":  "Msr-nKTQcao",
        "Song":  "Daydreaming",
        "Views":  42320,
        "ViewsDelta":  19,
        "Type":  "Audio",
        "Duration":  "3:59"
    },
    {
        "Title":  "BAND-MAID / Zen (Official Teaser Video)  AKANE Ver.  MAPPAアニメ「全修。」オープニングテーマソング",
        "Date":  "2025-01-16T22:00:12",
        "URL":  "https://youtu.be/Hn_D-xpYaXY",
        "VideoId":  "Hn_D-xpYaXY",
        "Song":  "Zen",
        "Views":  42010,
        "ViewsDelta":  9,
        "Type":  "Official Teaser Video",
        "Duration":  "0:27"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Teaser Video AKANE ver.) TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-07-21T23:00:46",
        "URL":  "https://youtu.be/byPQCySUe0M",
        "VideoId":  "byPQCySUe0M",
        "Song":  "What is justice?",
        "Views":  41974,
        "ViewsDelta":  4,
        "Type":  "Official Teaser Video",
        "Duration":  "0:27"
    },
    {
        "Title":  "YOLO",
        "Date":  "2023-08-01T06:00:28",
        "URL":  "https://youtu.be/hoOUddgdUXk",
        "VideoId":  "hoOUddgdUXk",
        "Song":  "YOLO",
        "Views":  41811,
        "ViewsDelta":  22,
        "Type":  "Audio",
        "Duration":  "4:26"
    },
    {
        "Title":  "Don\u0027t you tell ME",
        "Date":  "2023-08-01T06:00:07",
        "URL":  "https://youtu.be/83axQdf0gE8",
        "VideoId":  "83axQdf0gE8",
        "Song":  "Don\u0027t you tell ME",
        "Views":  40547,
        "ViewsDelta":  20,
        "Type":  "Audio",
        "Duration":  "3:10"
    },
    {
        "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
        "Date":  "2025-04-08T22:00:10",
        "URL":  "https://youtu.be/Ii3dVgCB3_Q",
        "VideoId":  "Ii3dVgCB3_Q",
        "Song":  "Ready to Rock",
        "Views":  39876,
        "ViewsDelta":  3,
        "Type":  "Official Teaser Video",
        "Duration":  "0:26"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Teaser Video KANAMI)",
        "Date":  "2025-10-27T08:00:58",
        "URL":  "https://youtu.be/V8qZKlfgoFg",
        "VideoId":  "V8qZKlfgoFg",
        "Song":  "Present Perfect",
        "Views":  38825,
        "ViewsDelta":  19,
        "Type":  "Official Teaser Video",
        "Duration":  "0:23"
    },
    {
        "Title":  "BAND-MAID in SUMMER SONIC 2024 #サマソニ #SUMMERSONIC #bandmaid",
        "Date":  "2024-08-21T05:00:06",
        "URL":  "https://youtu.be/8ofX0GW1mHc",
        "VideoId":  "8ofX0GW1mHc",
        "Song":  "",
        "Views":  37994,
        "ViewsDelta":  6,
        "Type":  "Official Live Short",
        "Duration":  "0:38"
    },
    {
        "Title":  "BAND-MAID / Zen (Official Teaser Video)  SAIKI Ver.  MAPPAアニメ「全修。」オープニングテーマソング",
        "Date":  "2025-01-30T22:00:18",
        "URL":  "https://youtu.be/D-mKCUY2UmI",
        "VideoId":  "D-mKCUY2UmI",
        "Song":  "Zen",
        "Views":  36668,
        "ViewsDelta":  6,
        "Type":  "Official Teaser Video",
        "Duration":  "0:27"
    },
    {
        "Title":  "Zen",
        "Date":  "2025-10-21T06:00:05",
        "URL":  "https://youtu.be/azlZWEGgLQc",
        "VideoId":  "azlZWEGgLQc",
        "Song":  "Zen",
        "Views":  36276,
        "ViewsDelta":  78,
        "Type":  "Audio",
        "Duration":  "3:41"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Teaser Video MISA ver.) TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-07-22T23:00:42",
        "URL":  "https://youtu.be/_xflJi4BvWo",
        "VideoId":  "_xflJi4BvWo",
        "Song":  "What is justice?",
        "Views":  36255,
        "ViewsDelta":  6,
        "Type":  "Official Teaser Video",
        "Duration":  "0:27"
    },
    {
        "Title":  "BAND-MAID / Zen (Official Teaser Video) Lyric Video  MAPPAアニメ「全修。」オープニングテーマソング",
        "Date":  "2025-02-09T22:00:35",
        "URL":  "https://youtu.be/ir0wriDMxns",
        "VideoId":  "ir0wriDMxns",
        "Song":  "Zen",
        "Views":  35901,
        "ViewsDelta":  10,
        "Type":  "Official Teaser Video",
        "Duration":  "0:28"
    },
    {
        "Title":  "BAND-MAID / Zen (Official Teaser Video)  MISA Ver.  MAPPAアニメ「全修。」オープニングテーマソング",
        "Date":  "2025-01-26T22:00:40",
        "URL":  "https://youtu.be/kgIMz3ibHiU",
        "VideoId":  "kgIMz3ibHiU",
        "Song":  "Zen",
        "Views":  35369,
        "ViewsDelta":  7,
        "Type":  "Official Teaser Video",
        "Duration":  "0:27"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Teaser Video SAIKI)",
        "Date":  "2025-10-26T08:00:17",
        "URL":  "https://youtu.be/LApK4w7OpJ8",
        "VideoId":  "LApK4w7OpJ8",
        "Song":  "Present Perfect",
        "Views":  34297,
        "ViewsDelta":  17,
        "Type":  "Official Teaser Video",
        "Duration":  "0:23"
    },
    {
        "Title":  "BAND-MAID 2025",
        "Date":  "2024-11-26T06:18:21",
        "URL":  "https://youtu.be/vwX8-HPivqg",
        "VideoId":  "vwX8-HPivqg",
        "Song":  "Zen",
        "Views":  33269,
        "ViewsDelta":  3,
        "Type":  "Other",
        "Duration":  "0:57"
    },
    {
        "Title":  "glory",
        "Date":  "2023-08-01T06:00:47",
        "URL":  "https://youtu.be/wvEFTlgYIAc",
        "VideoId":  "wvEFTlgYIAc",
        "Song":  "glory",
        "Views":  33140,
        "ViewsDelta":  19,
        "Type":  "Audio",
        "Duration":  "3:35"
    },
    {
        "Title":  "secret My lips",
        "Date":  "2023-08-01T06:00:10",
        "URL":  "https://youtu.be/85QjGCRd5j0",
        "VideoId":  "85QjGCRd5j0",
        "Song":  "secret My lips",
        "Views":  32965,
        "ViewsDelta":  16,
        "Type":  "Audio",
        "Duration":  "4:12"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Teaser Video 3) TVアニメ「桃源暗鬼」エンディング主題歌",
        "Date":  "2025-07-24T01:06:05",
        "URL":  "https://youtu.be/AoIdy16pje8",
        "VideoId":  "AoIdy16pje8",
        "Song":  "What is justice?",
        "Views":  32853,
        "ViewsDelta":  10,
        "Type":  "Official Teaser Video",
        "Duration":  "0:32"
    },
    {
        "Title":  "BAND-MAID / Zen (Official Teaser Video)　MAPPAアニメ「全修。」オープニングテーマソング",
        "Date":  "2025-01-16T01:00:24",
        "URL":  "https://youtu.be/CXQeSVxdSw4",
        "VideoId":  "CXQeSVxdSw4",
        "Song":  "Zen",
        "Views":  32376,
        "ViewsDelta":  4,
        "Type":  "Official Teaser Video",
        "Duration":  "0:30"
    },
    {
        "Title":  "the non-fiction days",
        "Date":  "2023-08-01T06:00:04",
        "URL":  "https://youtu.be/5rhwRHIF_EM",
        "VideoId":  "5rhwRHIF_EM",
        "Song":  "the non-fiction days",
        "Views":  32325,
        "ViewsDelta":  17,
        "Type":  "Audio",
        "Duration":  "4:43"
    },
    {
        "Title":  "BAND-MAID / Present Perfect (Official Teaser Video MISA)",
        "Date":  "2025-10-29T08:00:14",
        "URL":  "https://youtu.be/3ZvAceQG1Zw",
        "VideoId":  "3ZvAceQG1Zw",
        "Song":  "Present Perfect",
        "Views":  31892,
        "ViewsDelta":  22,
        "Type":  "Official Teaser Video",
        "Duration":  "0:23"
    },
    {
        "Title":  "BAND-MAID / Forbidden tale (Official Teaser Video) AKANE",
        "Date":  "2024-10-13T09:00:46",
        "URL":  "https://youtu.be/fwKbV3B7pg4",
        "VideoId":  "fwKbV3B7pg4",
        "Song":  "Forbidden tale",
        "Views":  31102,
        "ViewsDelta":  5,
        "Type":  "Official Teaser Video",
        "Duration":  "0:30"
    },
    {
        "Title":  "BAND-MAID / Forbidden tale (Official Teaser Video) KANAMI",
        "Date":  "2024-10-14T09:00:39",
        "URL":  "https://youtu.be/X4IQwPJN7E0",
        "VideoId":  "X4IQwPJN7E0",
        "Song":  "Forbidden tale",
        "Views":  31082,
        "ViewsDelta":  10,
        "Type":  "Official Teaser Video",
        "Duration":  "0:32"
    },
    {
        "Title":  "start over",
        "Date":  "2023-08-01T06:00:01",
        "URL":  "https://youtu.be/a3QswEhUsy4",
        "VideoId":  "a3QswEhUsy4",
        "Song":  "start over",
        "Views":  30905,
        "ViewsDelta":  16,
        "Type":  "Audio",
        "Duration":  "3:12"
    },
    {
        "Title":  "Different",
        "Date":  "2023-08-01T06:00:05",
        "URL":  "https://youtu.be/91oVKMsHpYI",
        "VideoId":  "91oVKMsHpYI",
        "Song":  "Different",
        "Views":  30842,
        "ViewsDelta":  24,
        "Type":  "Audio",
        "Duration":  "3:30"
    },
    {
        "Title":  "Bubble",
        "Date":  "2023-08-01T06:00:45",
        "URL":  "https://youtu.be/viKp4mkdAzk",
        "VideoId":  "viKp4mkdAzk",
        "Song":  "Bubble",
        "Views":  30801,
        "ViewsDelta":  24,
        "Type":  "Audio",
        "Duration":  "3:45"
    },
    {
        "Title":  "endless Story",
        "Date":  "2023-08-01T06:00:35",
        "URL":  "https://youtu.be/cKG44jAk1Y8",
        "VideoId":  "cKG44jAk1Y8",
        "Song":  "endless Story",
        "Views":  30286,
        "ViewsDelta":  23,
        "Type":  "Audio",
        "Duration":  "3:42"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) KANAMI",
        "Date":  "2024-08-07T11:00:03",
        "URL":  "https://youtu.be/2uVT3sr8QAs",
        "VideoId":  "2uVT3sr8QAs",
        "Song":  "Show Them",
        "Views":  29034,
        "ViewsDelta":  5,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29"
    },
    {
        "Title":  "BAND-MAID / What is justice? (Official Talk Video  浦和希さん× 小鳩ミク Kazuki Ura × Miku Kobato)",
        "Date":  "2025-07-16T01:01:04",
        "URL":  "https://youtu.be/zBOqFbyTgkI",
        "VideoId":  "zBOqFbyTgkI",
        "Song":  "What is justice?",
        "Views":  28409,
        "ViewsDelta":  6,
        "Type":  "Official Talk Video",
        "Duration":  "1:00"
    },
    {
        "Title":  "Blooming",
        "Date":  "2023-08-01T06:00:00",
        "URL":  "https://youtu.be/-XFwab31HfY",
        "VideoId":  "-XFwab31HfY",
        "Song":  "Blooming",
        "Views":  28072,
        "ViewsDelta":  23,
        "Type":  "Audio",
        "Duration":  "3:47"
    },
    {
        "Title":  "BAND-MAID / Magie  #ジャイガ #bandmaid #夏フェス",
        "Date":  "2024-07-21T00:00:10",
        "URL":  "https://youtu.be/B2N2xiinQzI",
        "VideoId":  "B2N2xiinQzI",
        "Song":  "Magie",
        "Views":  27903,
        "ViewsDelta":  2,
        "Type":  "Official Live Short",
        "Duration":  "0:24"
    },
    {
        "Title":  "BAND-MAID / Forbidden tale (Official Teaser Video) SAIKI",
        "Date":  "2024-10-15T09:01:11",
        "URL":  "https://youtu.be/woI6ILUBWaI",
        "VideoId":  "woI6ILUBWaI",
        "Song":  "Forbidden tale",
        "Views":  27767,
        "ViewsDelta":  2,
        "Type":  "Official Teaser Video",
        "Duration":  "0:32"
    },
    {
        "Title":  "BAND-MAID / New Album \"Epic Narratives\" (Official Teaser Video)",
        "Date":  "2024-09-24T23:00:12",
        "URL":  "https://youtu.be/8dawxG_v7Fc",
        "VideoId":  "8dawxG_v7Fc",
        "Song":  "",
        "Views":  26307,
        "ViewsDelta":  2,
        "Type":  "Official Teaser Video",
        "Duration":  "1:00"
    },
    {
        "Title":  "輪廻",
        "Date":  "2023-08-01T06:00:16",
        "URL":  "https://youtu.be/CUteeAnG5Y4",
        "VideoId":  "CUteeAnG5Y4",
        "Song":  "Rinne",
        "Views":  26120,
        "ViewsDelta":  19,
        "Type":  "Audio",
        "Duration":  "3:26"
    },
    {
        "Title":  "BAND-MAID / Forbidden tale (Official Teaser Video)",
        "Date":  "2024-10-03T04:30:13",
        "URL":  "https://youtu.be/D0Lj5un6Ul0",
        "VideoId":  "D0Lj5un6Ul0",
        "Song":  "Forbidden tale",
        "Views":  25723,
        "ViewsDelta":  3,
        "Type":  "Official Teaser Video",
        "Duration":  "0:49"
    },
    {
        "Title":  "BAND-MAID / Forbidden tale (Official Teaser Video) MISA",
        "Date":  "2024-10-12T09:00:32",
        "URL":  "https://youtu.be/PDhRae9X-w4",
        "VideoId":  "PDhRae9X-w4",
        "Song":  "Forbidden tale",
        "Views":  25563,
        "ViewsDelta":  4,
        "Type":  "Official Teaser Video",
        "Duration":  "0:32"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video)",
        "Date":  "2024-08-05T23:27:06",
        "URL":  "https://youtu.be/e3Q0GuBX3rk",
        "VideoId":  "e3Q0GuBX3rk",
        "Song":  "Show Them",
        "Views":  25091,
        "ViewsDelta":  5,
        "Type":  "Official Teaser Video",
        "Duration":  "0:37"
    },
    {
        "Title":  "2024.09.25 Release / BAND-MAID New Album \"Epic Narratives\" (Official Teaser Video)",
        "Date":  "2024-08-21T05:00:20",
        "URL":  "https://youtu.be/PfMQkYxaVWE",
        "VideoId":  "PfMQkYxaVWE",
        "Song":  "",
        "Views":  24031,
        "ViewsDelta":  3,
        "Type":  "Official Teaser Video",
        "Duration":  "0:31"
    },
    {
        "Title":  "YOLO (instrumental)",
        "Date":  "2018-10-02T11:42:18",
        "URL":  "https://youtu.be/_iU7a_GnZXo",
        "VideoId":  "_iU7a_GnZXo",
        "Song":  "YOLO",
        "Views":  22652,
        "ViewsDelta":  26,
        "Type":  "Audio",
        "Duration":  "4:26"
    },
    {
        "Title":  "BAND-MAID / What is justice? ×『桃源暗鬼』  Special Music Video #shorts (Anime Music Video Shorts)",
        "Date":  "2025-10-01T23:01:08",
        "URL":  "https://youtu.be/sts6c_ZTwUM",
        "VideoId":  "sts6c_ZTwUM",
        "Song":  "What is justice?",
        "Views":  20918,
        "ViewsDelta":  19,
        "Type":  "Anime Music Video Short",
        "Duration":  "0:31"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) AKANE",
        "Date":  "2024-08-08T11:00:33",
        "URL":  "https://youtu.be/TXj5Y4VfVkU",
        "VideoId":  "TXj5Y4VfVkU",
        "Song":  "Show Them",
        "Views":  20470,
        "ViewsDelta":  2,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) MISA vs Ale part 2",
        "Date":  "2024-08-14T11:00:00",
        "URL":  "https://youtu.be/-NsV_51FYVE",
        "VideoId":  "-NsV_51FYVE",
        "Song":  "Show Them",
        "Views":  19832,
        "ViewsDelta":  2,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29"
    },
    {
        "Title":  "BAND-MAID / What is justice? ×『桃源暗鬼』  Special Music Video #shorts 2 (Anime Music Video Shorts 2)",
        "Date":  "2025-10-03T10:31:10",
        "URL":  "https://youtu.be/YltgGeE57LU",
        "VideoId":  "YltgGeE57LU",
        "Song":  "What is justice?",
        "Views":  16976,
        "ViewsDelta":  11,
        "Type":  "Anime Music Video Short",
        "Duration":  "0:41"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) AKANE vs Pau part 2",
        "Date":  "2024-08-13T11:00:36",
        "URL":  "https://youtu.be/XDu4B75zz18",
        "VideoId":  "XDu4B75zz18",
        "Song":  "Show Them",
        "Views":  16064,
        "ViewsDelta":  2,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) MISA",
        "Date":  "2024-08-09T11:00:30",
        "URL":  "https://youtu.be/KKJUY7g1UaU",
        "VideoId":  "KKJUY7g1UaU",
        "Song":  "Show Them",
        "Views":  15294,
        "ViewsDelta":  2,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) KANAMI vs Dany  part 2",
        "Date":  "2024-08-12T11:00:23",
        "URL":  "https://youtu.be/QtdLS9CLkj8",
        "VideoId":  "QtdLS9CLkj8",
        "Song":  "Show Them",
        "Views":  14772,
        "ViewsDelta":  3,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29"
    },
    {
        "Title":  "Different (89sec Ver.)",
        "Date":  "2020-12-01T10:04:07",
        "URL":  "https://youtu.be/zjYoCChnNjw",
        "VideoId":  "zjYoCChnNjw",
        "Song":  "Different",
        "Views":  12863,
        "ViewsDelta":  6,
        "Type":  "Audio",
        "Duration":  "1:31"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) SAIKI vs Dany  part 2",
        "Date":  "2024-08-11T11:00:10",
        "URL":  "https://youtu.be/Cc30aTM0DVo",
        "VideoId":  "Cc30aTM0DVo",
        "Song":  "Show Them",
        "Views":  11422,
        "ViewsDelta":  2,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29"
    },
    {
        "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) SAIKI",
        "Date":  "2024-08-07T11:00:41",
        "URL":  "https://youtu.be/ccfzCEO2RC8",
        "VideoId":  "ccfzCEO2RC8",
        "Song":  "Show Them",
        "Views":  10021,
        "ViewsDelta":  2,
        "Type":  "Official Teaser Video",
        "Duration":  "0:29"
    },
    {
        "Title":  "endless Story",
        "Date":  "2019-10-02T11:00:23",
        "URL":  "https://youtu.be/MmhcEkgr_kY",
        "VideoId":  "MmhcEkgr_kY",
        "Song":  "endless Story",
        "Views":  9988,
        "ViewsDelta":  6,
        "Type":  "Audio",
        "Duration":  "3:45"
    },
    {
        "Title":  "Protect You (TVサイズ)",
        "Date":  "2024-10-08T06:04:40",
        "URL":  "https://youtu.be/JQTMWroS3So",
        "VideoId":  "JQTMWroS3So",
        "Song":  "Protect You",
        "Views":  8973,
        "ViewsDelta":  8,
        "Type":  "Audio",
        "Duration":  "1:37"
    },
    {
        "Title":  "glory",
        "Date":  "2019-01-15T10:01:50",
        "URL":  "https://youtu.be/-ZalwXFqleQ",
        "VideoId":  "-ZalwXFqleQ",
        "Song":  "glory",
        "Views":  5998,
        "ViewsDelta":  5,
        "Type":  "Audio",
        "Duration":  "3:36"
    },
    {
        "Title":  "secret MAIKO lips",
        "Date":  "2018-10-02T11:19:47",
        "URL":  "https://youtu.be/jjLrlvuPVqY",
        "VideoId":  "jjLrlvuPVqY",
        "Song":  "secret My lips",
        "Views":  5194,
        "ViewsDelta":  1,
        "Type":  "Audio",
        "Duration":  "4:28"
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
  
