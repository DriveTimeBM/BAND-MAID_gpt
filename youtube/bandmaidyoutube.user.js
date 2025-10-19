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
  
    const DATA = [
        {
            "Title":  "BAND-MAID / Thrill (スリル)  (Official Music Video)",
            "Date":  "2014-11-20T01:25:24",
            "URL":  "https://youtu.be/Uds7g3M-4lQ",
            "Song":  "Thrill",
            "Views":  22715884,
            "Type":  "Official Music Video",
            "Duration":  "4:11"
        },
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
        },
        {
            "Title":  "BAND-MAID / DICE (Official Music Video)",
            "Date":  "2018-03-03T22:00:07",
            "URL":  "https://youtu.be/ZpAYnVJX9CY",
            "Song":  "DICE",
            "Views":  9712972,
            "Type":  "Official Music Video",
            "Duration":  "4:15"
        },
        {
            "Title":  "BAND-MAID / alone (Official Music Video)",
            "Date":  "2016-02-14T07:00:02",
            "URL":  "https://youtu.be/axF56i4spio",
            "Song":  "alone",
            "Views":  7590258,
            "Type":  "Official Music Video",
            "Duration":  "3:30"
        },
        {
            "Title":  "BAND-MAID / the non-fiction days (Official Music Video)",
            "Date":  "2016-04-07T23:02:08",
            "URL":  "https://youtu.be/ItYN-ri1NPs",
            "Song":  "the non-fiction days",
            "Views":  7547572,
            "Type":  "Official Music Video",
            "Duration":  "4:51"
        },
        {
            "Title":  "BAND-MAID / YOLO (Official Music Video)",
            "Date":  "2016-10-01T07:29:55",
            "URL":  "https://youtu.be/wKZbzcUdY1g",
            "Song":  "YOLO",
            "Views":  5768482,
            "Type":  "Official Music Video",
            "Duration":  "4:37"
        },
        {
            "Title":  "BAND-MAID / Don\u0027t you tell ME (Official Music Video)",
            "Date":  "2017-01-09T06:00:16",
            "URL":  "https://youtu.be/tGXzhxXVimY",
            "Song":  "Don\u0027t you tell ME",
            "Views":  5419612,
            "Type":  "Official Music Video",
            "Duration":  "3:35"
        },
        {
            "Title":  "BAND-MAID / Daydreaming (Official Music Video)",
            "Date":  "2017-05-26T08:00:02",
            "URL":  "https://youtu.be/RCaeUkrItyY",
            "Song":  "Daydreaming",
            "Views":  5232468,
            "Type":  "Official Music Video",
            "Duration":  "4:09"
        },
        {
            "Title":  "BAND-MAID / Don’t let me down (Official Music Video)",
            "Date":  "2015-10-06T04:59:59",
            "URL":  "https://youtu.be/0YGwUhg2XNk",
            "Song":  "Don\u0027t let me down",
            "Views":  5115076,
            "Type":  "Official Music Video",
            "Duration":  "3:24"
        },
        {
            "Title":  "BAND-MAID / Sense (Official Music Video)",
            "Date":  "2021-10-26T11:00:11",
            "URL":  "https://youtu.be/BWN6iOFjm9U",
            "Song":  "Sense",
            "Views":  4859789,
            "Type":  "Official Music Video",
            "Duration":  "3:28"
        },
        {
            "Title":  "BAND-MAID / DOMINATION (Official Music Video)",
            "Date":  "2018-02-07T06:00:01",
            "URL":  "https://youtu.be/xmxEuQXTHUU",
            "Song":  "DOMINATION",
            "Views":  4811809,
            "Type":  "Official Music Video",
            "Duration":  "3:59"
        },
        {
            "Title":  "BAND-MAID / DOMINATION  (Official Live Video)",
            "Date":  "2020-03-20T08:00:05",
            "URL":  "https://youtu.be/QbyQCJn6rYg",
            "Song":  "DOMINATION",
            "Views":  4764917,
            "Type":  "Official Live Video",
            "Duration":  "4:58"
        },
        {
            "Title":  "BAND-MAIKO / secret MAIKO lips (Official Music Video)",
            "Date":  "2018-03-31T11:09:21",
            "URL":  "https://youtu.be/NNHGABwme50",
            "Song":  "secret My lips",
            "Views":  4644448,
            "Type":  "Official Music Video",
            "Duration":  "4:55"
        },
        {
            "Title":  "BAND-MAID / Different (Official Music Video)",
            "Date":  "2020-12-01T08:00:12",
            "URL":  "https://youtu.be/edlLhh8qVxM",
            "Song":  "Different",
            "Views":  4508209,
            "Type":  "Official Music Video",
            "Duration":  "3:36"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock (Official Music Video)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
            "Date":  "2025-04-03T11:30:08",
            "URL":  "https://youtu.be/eapNDHKbu0M",
            "Song":  "Ready to Rock",
            "Views":  4206209,
            "Type":  "Official Music Video",
            "Duration":  "3:40"
        },
        {
            "Title":  "BAND-MAID / glory (Official Music Video)",
            "Date":  "2018-11-02T04:00:04",
            "URL":  "https://youtu.be/TAMiLTiXPpU",
            "Song":  "glory",
            "Views":  4000485,
            "Type":  "Official Music Video",
            "Duration":  "4:05"
        },
        {
            "Title":  "BAND-MAID / Unleash!!!!! (Official Music Video)",
            "Date":  "2022-08-09T11:00:12",
            "URL":  "https://youtu.be/7LB_EPS48HE",
            "Song":  "Unleash!!!!!",
            "Views":  3859366,
            "Type":  "Official Music Video",
            "Duration":  "3:10"
        },
        {
            "Title":  "BAND-MAID / FREEDOM (Official Live Video)",
            "Date":  "2020-06-30T23:00:03",
            "URL":  "https://youtu.be/FHpuEqMAcDg",
            "Song":  "FREEDOM",
            "Views":  3827000,
            "Type":  "Official Live Video",
            "Duration":  "4:33"
        },
        {
            "Title":  "BAND-MAID / onset (Official Live Video)",
            "Date":  "2020-06-23T21:00:07",
            "URL":  "https://youtu.be/mVrN-j_Uc0U",
            "Song":  "onset",
            "Views":  3649690,
            "Type":  "Official Live Video",
            "Duration":  "3:59"
        },
        {
            "Title":  "BAND-MAID / Blooming (Official Music Video)",
            "Date":  "2019-12-09T22:00:05",
            "URL":  "https://youtu.be/uUt_JBMocKM",
            "Song":  "Blooming",
            "Views":  3608705,
            "Type":  "Official Music Video",
            "Duration":  "3:57"
        },
        {
            "Title":  "BAND-MAID / secret My lips (Official Music Video)",
            "Date":  "2017-03-25T23:15:48",
            "URL":  "https://youtu.be/1Vuca7V-5Ec",
            "Song":  "secret My lips",
            "Views":  3438693,
            "Type":  "Official Music Video",
            "Duration":  "4:24"
        },
        {
            "Title":  "BAND-MAID / Before Yesterday  (Official Music Video)",
            "Date":  "2016-06-24T08:28:24",
            "URL":  "https://youtu.be/Zuj_-z5-06w",
            "Song":  "Before Yesterday",
            "Views":  3387773,
            "Type":  "Official Music Video",
            "Duration":  "4:00"
        },
        {
            "Title":  "BAND-MAID / Bubble (Official Music Video)",
            "Date":  "2019-01-15T05:00:08",
            "URL":  "https://youtu.be/T_PWQtc7zVw",
            "Song":  "Bubble",
            "Views":  3097080,
            "Type":  "Official Music Video",
            "Duration":  "4:12"
        },
        {
            "Title":  "BAND-MAID / After Life (Official Music Video)",
            "Date":  "2021-01-26T10:00:00",
            "URL":  "https://youtu.be/2MOvCkCqz_U",
            "Song":  "After Life",
            "Views":  2977263,
            "Type":  "Official Music Video",
            "Duration":  "3:29"
        },
        {
            "Title":  "BAND-MAID / Warning! (Official Music Video)",
            "Date":  "2021-01-20T10:00:11",
            "URL":  "https://youtu.be/9yD3IqrLtPk",
            "Song":  "Warning!",
            "Views":  2604014,
            "Type":  "Official Music Video",
            "Duration":  "4:19"
        },
        {
            "Title":  "BAND-MAID / What is justice? (Official Music Video) TVアニメ「桃源暗鬼」エンディング主題歌",
            "Date":  "2025-07-17T11:00:07",
            "URL":  "https://youtu.be/3kMIh0_Wkpk",
            "Song":  "What is justice?",
            "Views":  2463430,
            "Type":  "Official Music Video",
            "Duration":  "3:28"
        },
        {
            "Title":  "BAND-MAID / influencer (Official Music Video)",
            "Date":  "2022-09-20T11:00:11",
            "URL":  "https://youtu.be/e_bEf1C0spY",
            "Song":  "influencer",
            "Views":  2407416,
            "Type":  "Official Music Video",
            "Duration":  "3:26"
        },
        {
            "Title":  "BAND-MAID / start over (Official Music Video)",
            "Date":  "2018-07-03T04:59:28",
            "URL":  "https://youtu.be/iL5sRrSECQ0",
            "Song":  "start over",
            "Views":  2306627,
            "Type":  "Official Music Video",
            "Duration":  "3:36"
        },
        {
            "Title":  "BAND-MAID / Zen (Official Music Video)　MAPPAアニメ「全修。」オープニングテーマソング",
            "Date":  "2025-01-12T10:15:06",
            "URL":  "https://youtu.be/GZ9RRiy43j4",
            "Song":  "Zen",
            "Views":  2285673,
            "Type":  "Official Music Video",
            "Duration":  "3:38"
        },
        {
            "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Music Video)",
            "Date":  "2024-08-06T11:00:07",
            "URL":  "https://youtu.be/LVl0mcEu1r8",
            "Song":  "Show Them",
            "Views":  2271247,
            "Type":  "Official Music Video",
            "Duration":  "3:22"
        },
        {
            "Title":  "BAND-MAID / 輪廻  \"RINNE\" (Official Music Video)",
            "Date":  "2019-11-05T06:02:18",
            "URL":  "https://youtu.be/CQ9dbEVgZcA",
            "Song":  "Rinne",
            "Views":  2223957,
            "Type":  "Official Music Video",
            "Duration":  "3:35"
        },
        {
            "Title":  "BAND-MAID / Play (Official Live Video)",
            "Date":  "2020-08-12T07:00:01",
            "URL":  "https://youtu.be/3LxX_t4vg7U",
            "Song":  "Play",
            "Views":  2211578,
            "Type":  "Official Live Video",
            "Duration":  "4:32"
        },
        {
            "Title":  "BAND-MAIKO / 祇園町 \"Gion-cho\" (Official Music Video)",
            "Date":  "2019-03-31T11:00:11",
            "URL":  "https://youtu.be/umSt7oMUMcs",
            "Song":  "Gion-Cho",
            "Views":  2142017,
            "Type":  "Official Music Video",
            "Duration":  "4:05"
        },
        {
            "Title":  "BAND-MAID / Shambles (Official Music Video)",
            "Date":  "2023-08-03T11:00:08",
            "URL":  "https://youtu.be/lf0mQOiu8J8",
            "Song":  "Shambles",
            "Views":  2023604,
            "Type":  "Official Music Video",
            "Duration":  "3:31"
        },
        {
            "Title":  "BAND-MAID / from now on (Official Music Video)",
            "Date":  "2022-11-24T22:00:00",
            "URL":  "https://youtu.be/a6ZSvmnkS00",
            "Song":  "from now on",
            "Views":  2022141,
            "Type":  "Official Music Video",
            "Duration":  "3:46"
        },
        {
            "Title":  "BAND-MAID / endless Story (Official Music Video)",
            "Date":  "2019-08-07T08:00:00",
            "URL":  "https://youtu.be/5_S4s8jZQ-A",
            "Song":  "endless Story",
            "Views":  1924567,
            "Type":  "Official Music Video",
            "Duration":  "4:03"
        },
        {
            "Title":  "BAND-MAID / REAL EXISTENCE (Official Live Video)",
            "Date":  "2018-07-03T04:59:46",
            "URL":  "https://youtu.be/-qQnKILR5u0",
            "Song":  "REAL EXISTENCE",
            "Views":  1761587,
            "Type":  "Official Live Video",
            "Duration":  "4:13"
        },
        {
            "Title":  "Sense",
            "Date":  "2021-10-26T06:05:58",
            "URL":  "https://youtu.be/ss11rU97V2I",
            "Song":  "Sense",
            "Views":  1724265,
            "Type":  "Audio",
            "Duration":  "3:25"
        },
        {
            "Title":  "BAND-MAID / Protect You (Official Music Video)",
            "Date":  "2024-07-05T11:00:07",
            "URL":  "https://youtu.be/knnw6Mri9gc",
            "Song":  "Protect You",
            "Views":  1690751,
            "Type":  "Official Music Video",
            "Duration":  "3:19"
        },
        {
            "Title":  "BAND-MAID / Manners (Official Music Video)",
            "Date":  "2021-01-12T10:00:00",
            "URL":  "https://youtu.be/-FWuMx_pkH4",
            "Song":  "Manners",
            "Views":  1682787,
            "Type":  "Official Music Video",
            "Duration":  "3:56"
        },
        {
            "Title":  "BAND-MAID / Choose me (Official Live Video)",
            "Date":  "2020-04-22T07:00:02",
            "URL":  "https://youtu.be/HcqitbXgigU",
            "Song":  "Choose me",
            "Views":  1642284,
            "Type":  "Official Live Video",
            "Duration":  "4:03"
        },
        {
            "Title":  "Choose me",
            "Date":  "2018-10-02T11:52:28",
            "URL":  "https://youtu.be/Imq5n_Cmd4o",
            "Song":  "Choose me",
            "Views":  1640865,
            "Type":  "Audio",
            "Duration":  "3:42"
        },
        {
            "Title":  "Ready to Rock",
            "Date":  "2025-04-03T06:00:08",
            "URL":  "https://youtu.be/5uOdE0j4h1E",
            "Song":  "Ready to Rock",
            "Views":  1567702,
            "Type":  "Audio",
            "Duration":  "3:27"
        },
        {
            "Title":  "BAND-MAID / Manners, BLACK HOLE (Official Live Video) for J-LOD LIVE2",
            "Date":  "2021-07-26T05:00:16",
            "URL":  "https://youtu.be/iaf94nNSRGE",
            "Song":  "Manners; BLACK HOLE",
            "Views":  1521305,
            "Type":  "Official Live Video",
            "Duration":  "7:42"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock ×「ロックは淑女の嗜みでして」 Special Music Video (Anime Music Video)",
            "Date":  "2025-06-26T11:30:10",
            "URL":  "https://youtu.be/JegJ6cSsUgg",
            "Song":  "Ready to Rock",
            "Views":  1433447,
            "Type":  "Anime Music Video",
            "Duration":  "3:28"
        },
        {
            "Title":  "BAND-MAID / DICE, Different (Official Live Video) for J-LOD LIVE2",
            "Date":  "2021-10-23T03:00:11",
            "URL":  "https://youtu.be/h_RZwRbI1QI",
            "Song":  "DICE; Different",
            "Views":  1403782,
            "Type":  "Official Live Video",
            "Duration":  "7:43"
        },
        {
            "Title":  "BAND-MAID / HATE? (Official Live Video)",
            "Date":  "2024-03-06T10:00:07",
            "URL":  "https://youtu.be/yfORoQIqB3E",
            "Song":  "HATE?",
            "Views":  1272438,
            "Type":  "Official Live Video",
            "Duration":  "5:04"
        },
        {
            "Title":  "BAND-MAID / Forbidden tale (Official Music Video)",
            "Date":  "2024-10-04T09:00:06",
            "URL":  "https://youtu.be/EiknA3mWivA",
            "Song":  "Forbidden tale",
            "Views":  1180204,
            "Type":  "Official Music Video",
            "Duration":  "4:36"
        },
        {
            "Title":  "BAND-MAID / about Us (Official Live Video)",
            "Date":  "2021-02-19T03:00:11",
            "URL":  "https://youtu.be/qicgVAxCYV8",
            "Song":  "about Us",
            "Views":  1162078,
            "Type":  "Official Live Video",
            "Duration":  "4:44"
        },
        {
            "Title":  "BAND-MAID / Bestie (Official Music Video)",
            "Date":  "2024-05-01T11:00:07",
            "URL":  "https://youtu.be/gXjNsTS5bEY",
            "Song":  "Bestie",
            "Views":  1156813,
            "Type":  "Official Music Video",
            "Duration":  "3:44"
        },
        {
            "Title":  "スリル",
            "Date":  "2018-10-02T11:47:18",
            "URL":  "https://youtu.be/46A5e-KzDOc",
            "Song":  "Thrill",
            "Views":  1127821,
            "Type":  "Audio",
            "Duration":  "4:06"
        },
        {
            "Title":  "BAND-MAID / Puzzle (Official Live Video)",
            "Date":  "2023-04-04T11:00:08",
            "URL":  "https://youtu.be/zvuqmSQEnaA",
            "Song":  "Puzzle",
            "Views":  1119699,
            "Type":  "Official Live Video",
            "Duration":  "4:49"
        },
        {
            "Title":  "BAND-MAID / CROSS (Official Live Video)",
            "Date":  "2020-07-08T05:00:15",
            "URL":  "https://youtu.be/yQn4IMr56zY",
            "Song":  "CROSS",
            "Views":  951131,
            "Type":  "Official Live Video",
            "Duration":  "3:45"
        },
        {
            "Title":  "BAND-MAID / Memorable (Official Music Video)",
            "Date":  "2023-02-21T10:00:08",
            "URL":  "https://youtu.be/DQX8BTTsHHU",
            "Song":  "Memorable",
            "Views":  941034,
            "Type":  "Official Music Video",
            "Duration":  "3:35"
        },
        {
            "Title":  "BAND-MAID / Wonderland  (Official Live Video)",
            "Date":  "2020-07-08T05:00:15",
            "URL":  "https://youtu.be/x4hxLeHbqZo",
            "Song":  "Wonderland",
            "Views":  929451,
            "Type":  "Official Live Video",
            "Duration":  "3:55"
        },
        {
            "Title":  "DICE",
            "Date":  "2018-10-02T11:55:46",
            "URL":  "https://youtu.be/HsvWNhIt6RY",
            "Song":  "DICE",
            "Views":  920701,
            "Type":  "Audio",
            "Duration":  "4:03"
        },
        {
            "Title":  "BAND-MAID / NO GOD (Official Live Video)",
            "Date":  "2021-05-25T23:00:14",
            "URL":  "https://youtu.be/nAdWnIRjGak",
            "Song":  "NO GOD",
            "Views":  886453,
            "Type":  "Official Live Video",
            "Duration":  "4:15"
        },
        {
            "Title":  "BAND-MAID / Thrill (スリル)  (Official Live Video)",
            "Date":  "2021-05-10T08:00:12",
            "URL":  "https://youtu.be/XwRrpaSbaGk",
            "Song":  "Thrill",
            "Views":  878845,
            "Type":  "Official Live Video",
            "Duration":  "4:10"
        },
        {
            "Title":  "BAND-MAID / サヨナキドリ \"Sayonakidori\"  Acoustic Ver.  (Official Live Video)",
            "Date":  "2022-07-15T05:00:16",
            "URL":  "https://youtu.be/sGzAQigaL14",
            "Song":  "SAYONAKIDORI",
            "Views":  852681,
            "Type":  "Official Live Video",
            "Duration":  "5:15"
        },
        {
            "Title":  "BAND-MAID / The Dragon Cries (Official Music Video)",
            "Date":  "2020-02-12T06:00:11",
            "URL":  "https://youtu.be/skEkpogsmE0",
            "Song":  "The Dragon Cries",
            "Views":  852010,
            "Type":  "Official Music Video",
            "Duration":  "4:17"
        },
        {
            "Title":  "Unleash!!!!!",
            "Date":  "2022-08-09T06:05:28",
            "URL":  "https://youtu.be/g8aEQ2XR2UI",
            "Song":  "Unleash!!!!!",
            "Views":  755506,
            "Type":  "Audio",
            "Duration":  "3:10"
        },
        {
            "Title":  "BAND-MAID / Warning! (Official Live Video)",
            "Date":  "2021-05-01T05:00:15",
            "URL":  "https://youtu.be/Kojg8ULibeY",
            "Song":  "Warning!",
            "Views":  746869,
            "Type":  "Official Live Video",
            "Duration":  "4:25"
        },
        {
            "Title":  "BAND-MAID / endless Story (Official Live Video)",
            "Date":  "2024-03-20T07:30:07",
            "URL":  "https://youtu.be/Za1y-RRVd70",
            "Song":  "endless Story",
            "Views":  739363,
            "Type":  "Official Live Video",
            "Duration":  "7:00"
        },
        {
            "Title":  "BAND-MAID / カタルシス \"Catharsis\"  Acoustic Ver.  (Official Live Video)",
            "Date":  "2022-01-21T04:00:34",
            "URL":  "https://youtu.be/tx9h41gaNo0",
            "Song":  "Catharsis",
            "Views":  729361,
            "Type":  "Official Live Video",
            "Duration":  "3:41"
        },
        {
            "Title":  "After Life",
            "Date":  "2020-12-13T05:02:51",
            "URL":  "https://youtu.be/kkFIoq1TeA0",
            "Song":  "After Life",
            "Views":  725603,
            "Type":  "Audio",
            "Duration":  "3:24"
        },
        {
            "Title":  "Different",
            "Date":  "2020-12-01T10:04:07",
            "URL":  "https://youtu.be/yJIQKRywEY8",
            "Song":  "Different",
            "Views":  708668,
            "Type":  "Audio",
            "Duration":  "3:34"
        },
        {
            "Title":  "REAL EXISTENCE",
            "Date":  "2018-10-02T11:48:43",
            "URL":  "https://youtu.be/F0B-h1qWt2E",
            "Song":  "REAL EXISTENCE",
            "Views":  708542,
            "Type":  "Audio",
            "Duration":  "4:13"
        },
        {
            "Title":  "BAND-MAID / Don\u0027t you tell ME (Official Live Video)",
            "Date":  "2024-02-22T07:00:10",
            "URL":  "https://youtu.be/SOj3qXBhiP4",
            "Song":  "Don\u0027t you tell ME",
            "Views":  671166,
            "Type":  "Official Live Video",
            "Duration":  "4:27"
        },
        {
            "Title":  "Zen",
            "Date":  "2025-01-12T05:00:33",
            "URL":  "https://youtu.be/XHuBR4nAjrE",
            "Song":  "Zen",
            "Views":  658573,
            "Type":  "Audio",
            "Duration":  "3:35"
        },
        {
            "Title":  "Corallium",
            "Date":  "2021-10-26T06:06:13",
            "URL":  "https://youtu.be/aK9KruOd_Bw",
            "Song":  "Corallium",
            "Views":  653585,
            "Type":  "Audio",
            "Duration":  "3:56"
        },
        {
            "Title":  "influencer",
            "Date":  "2022-09-20T06:08:55",
            "URL":  "https://youtu.be/Ly62PczTrZM",
            "Song":  "influencer",
            "Views":  647506,
            "Type":  "Audio",
            "Duration":  "3:24"
        },
        {
            "Title":  "Warning!",
            "Date":  "2021-01-12T05:01:55",
            "URL":  "https://youtu.be/swHdFvBN3yI",
            "Song":  "Warning!",
            "Views":  636488,
            "Type":  "Audio",
            "Duration":  "4:20"
        },
        {
            "Title":  "DOMINATION",
            "Date":  "2018-10-02T11:55:46",
            "URL":  "https://youtu.be/yo9ZFz4v6Dk",
            "Song":  "DOMINATION",
            "Views":  632986,
            "Type":  "Audio",
            "Duration":  "3:52"
        },
        {
            "Title":  "BAND-MAID / NO GOD (Official Live Video)",
            "Date":  "2023-04-21T11:00:26",
            "URL":  "https://youtu.be/iLF5zd0yl64",
            "Song":  "NO GOD",
            "Views":  582369,
            "Type":  "Official Live Video",
            "Duration":  "4:34"
        },
        {
            "Title":  "サヨナキドリ",
            "Date":  "2021-01-12T05:03:14",
            "URL":  "https://youtu.be/6mVaehjAo2k",
            "Song":  "SAYONAKIDORI",
            "Views":  568231,
            "Type":  "Audio",
            "Duration":  "4:34"
        },
        {
            "Title":  "BAND-MAID / Shambles (Official Live Video)",
            "Date":  "2025-02-18T22:00:32",
            "URL":  "https://youtu.be/RmFYjTJRrQM",
            "Song":  "Shambles",
            "Views":  529039,
            "Type":  "Official Live Video",
            "Duration":  "5:15"
        },
        {
            "Title":  "What is justice?",
            "Date":  "2025-07-17T06:01:36",
            "URL":  "https://youtu.be/vu2D3lzH7Y0",
            "Song":  "What is justice?",
            "Views":  515489,
            "Type":  "Audio",
            "Duration":  "3:23"
        },
        {
            "Title":  "NO GOD",
            "Date":  "2021-01-12T05:02:00",
            "URL":  "https://youtu.be/-ZEF3shvlsU",
            "Song":  "NO GOD",
            "Views":  506497,
            "Type":  "Audio",
            "Duration":  "4:11"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock (Official Cover #RtR弾いてみた by KANAMI)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
            "Date":  "2025-05-01T05:00:45",
            "URL":  "https://youtu.be/YEFugw_-jwo",
            "Song":  "Ready to Rock",
            "Views":  502726,
            "Type":  "Official Cover",
            "Duration":  "0:21"
        },
        {
            "Title":  "from now on",
            "Date":  "2022-09-20T06:05:04",
            "URL":  "https://youtu.be/MK0auns521Q",
            "Song":  "from now on",
            "Views":  498180,
            "Type":  "Audio",
            "Duration":  "3:47"
        },
        {
            "Title":  "BAND-MAID / What is justice? ×『桃源暗鬼』 Special Music Video (Anime Music Video) - Side of Momotaro -",
            "Date":  "2025-09-26T10:30:58",
            "URL":  "https://youtu.be/zbleEG_5e_4",
            "Song":  "What is justice?",
            "Views":  484645,
            "Type":  "Anime Music Video",
            "Duration":  "3:22"
        },
        {
            "Title":  "BLACK HOLE",
            "Date":  "2021-01-12T05:01:50",
            "URL":  "https://youtu.be/17M5oBuccOY",
            "Song":  "BLACK HOLE",
            "Views":  476992,
            "Type":  "Audio",
            "Duration":  "3:06"
        },
        {
            "Title":  "Shambles",
            "Date":  "2023-08-03T06:00:28",
            "URL":  "https://youtu.be/_UgN3Tb8Chc",
            "Song":  "Shambles",
            "Views":  476633,
            "Type":  "Audio",
            "Duration":  "3:22"
        },
        {
            "Title":  "alone",
            "Date":  "2018-10-02T11:25:59",
            "URL":  "https://youtu.be/mY0ZusGd-Fo",
            "Song":  "alone",
            "Views":  471008,
            "Type":  "Audio",
            "Duration":  "3:29"
        },
        {
            "Title":  "火花",
            "Date":  "2021-10-26T06:05:47",
            "URL":  "https://youtu.be/uMQicabwqus",
            "Song":  "Hibana",
            "Views":  467633,
            "Type":  "Audio",
            "Duration":  "3:40"
        },
        {
            "Title":  "Blooming",
            "Date":  "2019-12-05T00:27:11",
            "URL":  "https://youtu.be/3NJf8CSiUZs",
            "Song":  "Blooming",
            "Views":  467412,
            "Type":  "Audio",
            "Duration":  "3:50"
        },
        {
            "Title":  "Don\u0027t you tell ME",
            "Date":  "2018-10-02T11:36:15",
            "URL":  "https://youtu.be/RnyseN3hrKM",
            "Song":  "Don\u0027t you tell ME",
            "Views":  442860,
            "Type":  "Audio",
            "Duration":  "3:11"
        },
        {
            "Title":  "BAND-MAID / Unleash!!!!! (Official Live Video)",
            "Date":  "2024-02-10T10:00:09",
            "URL":  "https://youtu.be/-i3N-WbZnJM",
            "Song":  "Unleash!!!!!",
            "Views":  440483,
            "Type":  "Official Live Video",
            "Duration":  "3:34"
        },
        {
            "Title":  "本懐",
            "Date":  "2021-01-12T05:01:50",
            "URL":  "https://youtu.be/ND5EeINq3F0",
            "Song":  "HONKAI",
            "Views":  436148,
            "Type":  "Audio",
            "Duration":  "3:17"
        },
        {
            "Title":  "the non-fiction days",
            "Date":  "2018-10-02T11:26:11",
            "URL":  "https://youtu.be/5N4ymEJu5Vc",
            "Song":  "the non-fiction days",
            "Views":  429165,
            "Type":  "Audio",
            "Duration":  "4:42"
        },
        {
            "Title":  "Don\u0027t Let Me Down",
            "Date":  "2018-10-02T11:48:01",
            "URL":  "https://youtu.be/kMF7sECmoP8",
            "Song":  "Don\u0027t let me down",
            "Views":  420549,
            "Type":  "Audio",
            "Duration":  "3:20"
        },
        {
            "Title":  "H-G-K",
            "Date":  "2021-01-12T05:02:10",
            "URL":  "https://youtu.be/VAFq8-Xnf_8",
            "Song":  "H-G-K",
            "Views":  413115,
            "Type":  "Audio",
            "Duration":  "3:08"
        },
        {
            "Title":  "I still seek revenge.",
            "Date":  "2021-01-12T05:01:49",
            "URL":  "https://youtu.be/H0xsEwtKUkQ",
            "Song":  "I still seek revenge.",
            "Views":  402472,
            "Type":  "Audio",
            "Duration":  "3:03"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock (Official Live Video) TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
            "Date":  "2025-08-19T23:00:11",
            "URL":  "https://youtu.be/5I6VV4HYnW8",
            "Song":  "Ready to Rock",
            "Views":  401651,
            "Type":  "Official Live Video",
            "Duration":  "4:10"
        },
        {
            "Title":  "Puzzle",
            "Date":  "2018-10-02T11:34:32",
            "URL":  "https://youtu.be/tMyNS4YKS6A",
            "Song":  "Puzzle",
            "Views":  388005,
            "Type":  "Audio",
            "Duration":  "4:20"
        },
        {
            "Title":  "Manners",
            "Date":  "2021-01-12T05:01:49",
            "URL":  "https://youtu.be/axYjQAMEZrs",
            "Song":  "Manners",
            "Views":  387450,
            "Type":  "Audio",
            "Duration":  "3:51"
        },
        {
            "Title":  "HATE?",
            "Date":  "2022-09-20T06:03:13",
            "URL":  "https://youtu.be/OJnKhVPDe4Q",
            "Song":  "HATE?",
            "Views":  383356,
            "Type":  "Audio",
            "Duration":  "3:38"
        },
        {
            "Title":  "glory",
            "Date":  "2018-11-13T00:44:31",
            "URL":  "https://youtu.be/9TwXsbGFYnU",
            "Song":  "glory",
            "Views":  368263,
            "Type":  "Audio",
            "Duration":  "3:37"
        },
        {
            "Title":  "DICE",
            "Date":  "2018-02-13T07:01:48",
            "URL":  "https://youtu.be/kJhR3YwIRyc",
            "Song":  "DICE",
            "Views":  360158,
            "Type":  "Audio",
            "Duration":  "4:07"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock (Official Live Video #shorts )  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
            "Date":  "2025-05-22T09:01:06",
            "URL":  "https://youtu.be/bQDrcpN6B-U",
            "Song":  "Ready to Rock",
            "Views":  358876,
            "Type":  "Official Live Short",
            "Duration":  "0:27"
        },
        {
            "Title":  "BAND-MAID / Sense (Official Live Video)",
            "Date":  "2023-03-21T11:00:10",
            "URL":  "https://youtu.be/p5Lo7t9Yzxw",
            "Song":  "Sense",
            "Views":  358811,
            "Type":  "Official Live Video",
            "Duration":  "3:34"
        },
        {
            "Title":  "I\u0027ll",
            "Date":  "2022-09-20T06:03:53",
            "URL":  "https://youtu.be/S2kocC6yMik",
            "Song":  "I\u0027ll",
            "Views":  352921,
            "Type":  "Audio",
            "Duration":  "4:08"
        },
        {
            "Title":  "I can\u0027t live without you.",
            "Date":  "2018-10-02T11:56:55",
            "URL":  "https://youtu.be/3C7hDUB0lgk",
            "Song":  "I can\u0027t live without you.",
            "Views":  345508,
            "Type":  "Audio",
            "Duration":  "3:50"
        },
        {
            "Title":  "Giovanni",
            "Date":  "2021-01-12T05:02:01",
            "URL":  "https://youtu.be/0JZkjDhxohM",
            "Song":  "Giovanni",
            "Views":  341021,
            "Type":  "Audio",
            "Duration":  "4:18"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
            "Date":  "2025-03-06T04:09:00",
            "URL":  "https://youtu.be/_jb5rtSUEik",
            "Song":  "Ready to Rock",
            "Views":  339401,
            "Type":  "Official Teaser Video",
            "Duration":  "0:19"
        },
        {
            "Title":  "Daydreaming",
            "Date":  "2018-10-02T11:52:23",
            "URL":  "https://youtu.be/dw4mb6eWHu0",
            "Song":  "Daydreaming",
            "Views":  336136,
            "Type":  "Audio",
            "Duration":  "4:02"
        },
        {
            "Title":  "BAND-MAID / Magie (Official Live Video)",
            "Date":  "2024-07-20T09:00:07",
            "URL":  "https://youtu.be/obXVrwIwk2k",
            "Song":  "Magie",
            "Views":  328492,
            "Type":  "Official Live Video",
            "Duration":  "3:10"
        },
        {
            "Title":  "SHOW THEM",
            "Date":  "2024-08-06T06:00:19",
            "URL":  "https://youtu.be/OPNcauboxkg",
            "Song":  "Show Them",
            "Views":  323907,
            "Type":  "Audio",
            "Duration":  "3:15"
        },
        {
            "Title":  "Protect You",
            "Date":  "2024-07-04T06:01:01",
            "URL":  "https://youtu.be/ww7G7Vlm8hQ",
            "Song":  "Protect You",
            "Views":  317151,
            "Type":  "Audio",
            "Duration":  "3:13"
        },
        {
            "Title":  "YOLO",
            "Date":  "2018-10-02T11:42:17",
            "URL":  "https://youtu.be/34MAbWeVE64",
            "Song":  "YOLO",
            "Views":  314951,
            "Type":  "Audio",
            "Duration":  "4:27"
        },
        {
            "Title":  "Why Why Why",
            "Date":  "2021-01-12T05:01:56",
            "URL":  "https://youtu.be/bCHjyiie7MQ",
            "Song":  "Why Why Why",
            "Views":  311912,
            "Type":  "Audio",
            "Duration":  "3:38"
        },
        {
            "Title":  "Balance",
            "Date":  "2022-09-20T06:03:37",
            "URL":  "https://youtu.be/TwrvDCcYuRE",
            "Song":  "Balance",
            "Views":  311203,
            "Type":  "Audio",
            "Duration":  "3:10"
        },
        {
            "Title":  "Rock in me",
            "Date":  "2018-10-02T11:56:14",
            "URL":  "https://youtu.be/f0etXeLBvBw",
            "Song":  "Rock in me",
            "Views":  298828,
            "Type":  "Audio",
            "Duration":  "3:22"
        },
        {
            "Title":  "BAND-MAID / Don\u0027t you tell ME (Live at TREASURE05X 2024)",
            "Date":  "2024-09-08T01:47:25",
            "URL":  "https://youtu.be/vE7qTycXp3A",
            "Song":  "Don\u0027t you tell ME",
            "Views":  298112,
            "Type":  "Official Live Short",
            "Duration":  "0:43"
        },
        {
            "Title":  "Bestie",
            "Date":  "2024-04-16T06:00:16",
            "URL":  "https://youtu.be/OvoR_Xt8mzM",
            "Song":  "Bestie",
            "Views":  298072,
            "Type":  "Audio",
            "Duration":  "3:36"
        },
        {
            "Title":  "about Us",
            "Date":  "2021-02-03T05:03:48",
            "URL":  "https://youtu.be/AmjOY0lIwhI",
            "Song":  "about Us",
            "Views":  295042,
            "Type":  "Audio",
            "Duration":  "4:39"
        },
        {
            "Title":  "輪廻",
            "Date":  "2019-12-05T00:27:11",
            "URL":  "https://youtu.be/lWLEvPPYdS4",
            "Song":  "Rinne",
            "Views":  281423,
            "Type":  "Audio",
            "Duration":  "3:28"
        },
        {
            "Title":  "CROSS",
            "Date":  "2018-10-02T11:36:17",
            "URL":  "https://youtu.be/W6odZxUQ84s",
            "Song":  "CROSS",
            "Views":  280120,
            "Type":  "Audio",
            "Duration":  "3:46"
        },
        {
            "Title":  "CHEMICAL REACTION",
            "Date":  "2021-01-12T05:01:56",
            "URL":  "https://youtu.be/42uOmIhh2Vs",
            "Song":  "CHEMICAL REACTION",
            "Views":  280053,
            "Type":  "Audio",
            "Duration":  "4:10"
        },
        {
            "Title":  "I can\u0027t live without you",
            "Date":  "2018-02-13T07:01:27",
            "URL":  "https://youtu.be/EuTmlA2DHis",
            "Song":  "I can\u0027t live without you.",
            "Views":  279519,
            "Type":  "Audio",
            "Duration":  "3:54"
        },
        {
            "Title":  "DOMINATION",
            "Date":  "2018-02-13T07:01:48",
            "URL":  "https://youtu.be/CWdo_Mn5Wo8",
            "Song":  "DOMINATION",
            "Views":  271946,
            "Type":  "Audio",
            "Duration":  "3:54"
        },
        {
            "Title":  "FREEDOM",
            "Date":  "2018-10-02T11:25:59",
            "URL":  "https://youtu.be/hSV25w66G7A",
            "Song":  "FREEDOM",
            "Views":  271049,
            "Type":  "Audio",
            "Duration":  "3:44"
        },
        {
            "Title":  "you.",
            "Date":  "2018-10-02T11:34:32",
            "URL":  "https://youtu.be/vHOBRzjHLMo",
            "Song":  "you.",
            "Views":  262781,
            "Type":  "Audio",
            "Duration":  "3:44"
        },
        {
            "Title":  "secret My lips",
            "Date":  "2018-10-02T11:35:27",
            "URL":  "https://youtu.be/gr7JL2C4zHQ",
            "Song":  "secret My lips",
            "Views":  260497,
            "Type":  "Audio",
            "Duration":  "4:12"
        },
        {
            "Title":  "endless Story",
            "Date":  "2019-12-05T00:27:11",
            "URL":  "https://youtu.be/72RuhiJznsI",
            "Song":  "endless Story",
            "Views":  251536,
            "Type":  "Audio",
            "Duration":  "3:45"
        },
        {
            "Title":  "anemone",
            "Date":  "2018-10-02T11:55:47",
            "URL":  "https://youtu.be/7RDR_gMAZok",
            "Song":  "anemone",
            "Views":  248053,
            "Type":  "Audio",
            "Duration":  "4:23"
        },
        {
            "Title":  "Play",
            "Date":  "2018-02-13T07:01:48",
            "URL":  "https://youtu.be/oZWc7jk4GNs",
            "Song":  "Play",
            "Views":  241892,
            "Type":  "Audio",
            "Duration":  "3:24"
        },
        {
            "Title":  "CLANG",
            "Date":  "2018-10-02T11:55:45",
            "URL":  "https://youtu.be/RNJxKL5Ylf4",
            "Song":  "CLANG",
            "Views":  234874,
            "Type":  "Audio",
            "Duration":  "4:11"
        },
        {
            "Title":  "モラトリアム",
            "Date":  "2018-10-02T11:35:27",
            "URL":  "https://youtu.be/WFrVI2eXlko",
            "Song":  "Moratorium",
            "Views":  232851,
            "Type":  "Audio",
            "Duration":  "4:16"
        },
        {
            "Title":  "One and only",
            "Date":  "2018-10-02T11:55:47",
            "URL":  "https://youtu.be/f7_VMSupSlA",
            "Song":  "One and only",
            "Views":  226732,
            "Type":  "Audio",
            "Duration":  "3:23"
        },
        {
            "Title":  "FREEZER",
            "Date":  "2018-10-02T11:47:17",
            "URL":  "https://youtu.be/x7G0VEpWd_A",
            "Song":  "FREEZER",
            "Views":  226506,
            "Type":  "Audio",
            "Duration":  "3:18"
        },
        {
            "Title":  "Shake That",
            "Date":  "2018-10-02T11:49:00",
            "URL":  "https://youtu.be/zZcZdQgs-ws",
            "Song":  "Shake That!!",
            "Views":  220734,
            "Type":  "Audio",
            "Duration":  "4:06"
        },
        {
            "Title":  "Play",
            "Date":  "2018-10-02T11:53:02",
            "URL":  "https://youtu.be/iH-EnjSUi3k",
            "Song":  "Play",
            "Views":  216417,
            "Type":  "Audio",
            "Duration":  "3:22"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock (Official Live Video ver. 2 #shorts )  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
            "Date":  "2025-05-27T00:01:00",
            "URL":  "https://youtu.be/nbFF1513ptw",
            "Song":  "Ready to Rock",
            "Views":  215210,
            "Type":  "Official Live Short",
            "Duration":  "0:34"
        },
        {
            "Title":  "Turn me on",
            "Date":  "2018-10-02T11:55:45",
            "URL":  "https://youtu.be/6RVy5UEhz4s",
            "Song":  "Turn me on",
            "Views":  215105,
            "Type":  "Audio",
            "Duration":  "4:16"
        },
        {
            "Title":  "FATE",
            "Date":  "2018-10-02T11:56:52",
            "URL":  "https://youtu.be/ifUSCn9l61M",
            "Song":  "FATE",
            "Views":  213998,
            "Type":  "Audio",
            "Duration":  "4:32"
        },
        {
            "Title":  "secret MAIKO lips",
            "Date":  "2019-04-02T11:04:53",
            "URL":  "https://youtu.be/V-1HH3saWX4",
            "Song":  "secret My lips",
            "Views":  208741,
            "Type":  "Audio",
            "Duration":  "4:25"
        },
        {
            "Title":  "Play",
            "Date":  "2018-10-02T11:55:46",
            "URL":  "https://youtu.be/A1h37zkAXck",
            "Song":  "Play",
            "Views":  202883,
            "Type":  "Audio",
            "Duration":  "3:20"
        },
        {
            "Title":  "Forbidden tale",
            "Date":  "2024-09-24T06:00:52",
            "URL":  "https://youtu.be/l29qDqsgORA",
            "Song":  "Forbidden tale",
            "Views":  201560,
            "Type":  "Audio",
            "Duration":  "4:35"
        },
        {
            "Title":  "Bubble",
            "Date":  "2019-01-15T10:01:49",
            "URL":  "https://youtu.be/3vHHv_dmhM8",
            "Song":  "Bubble",
            "Views":  199220,
            "Type":  "Audio",
            "Duration":  "3:47"
        },
        {
            "Title":  "Alive-or-Dead",
            "Date":  "2018-10-02T11:56:53",
            "URL":  "https://youtu.be/rZ1mpH8iXQc",
            "Song":  "Alive-or-Dead",
            "Views":  198643,
            "Type":  "Audio",
            "Duration":  "3:45"
        },
        {
            "Title":  "The one",
            "Date":  "2024-09-24T06:00:20",
            "URL":  "https://youtu.be/FORNyqfjSmM",
            "Song":  "The one",
            "Views":  196435,
            "Type":  "Audio",
            "Duration":  "4:11"
        },
        {
            "Title":  "Dilemma",
            "Date":  "2019-12-05T00:27:11",
            "URL":  "https://youtu.be/aYet_nevCGs",
            "Song":  "Dilemma",
            "Views":  193809,
            "Type":  "Audio",
            "Duration":  "3:37"
        },
        {
            "Title":  "Screaming",
            "Date":  "2018-10-02T11:32:03",
            "URL":  "https://youtu.be/JBgNx7OXtao",
            "Song":  "Screaming",
            "Views":  193027,
            "Type":  "Audio",
            "Duration":  "3:50"
        },
        {
            "Title":  "Sense (TV Size Ver.)",
            "Date":  "2021-09-05T06:02:13",
            "URL":  "https://youtu.be/1kv3cfGlMQQ",
            "Song":  "Sense",
            "Views":  191551,
            "Type":  "Audio",
            "Duration":  "1:30"
        },
        {
            "Title":  "Rock in me",
            "Date":  "2018-02-13T07:01:53",
            "URL":  "https://youtu.be/TuWzx67ow3E",
            "Song":  "Rock in me",
            "Views":  191164,
            "Type":  "Audio",
            "Duration":  "3:25"
        },
        {
            "Title":  "FATE",
            "Date":  "2018-02-13T07:01:51",
            "URL":  "https://youtu.be/-ooj0u845AY",
            "Song":  "FATE",
            "Views":  190017,
            "Type":  "Audio",
            "Duration":  "4:35"
        },
        {
            "Title":  "azure",
            "Date":  "2019-12-05T00:27:13",
            "URL":  "https://youtu.be/QZqKqAIdxak",
            "Song":  "azure",
            "Views":  186301,
            "Type":  "Audio",
            "Duration":  "2:50"
        },
        {
            "Title":  "Turn me on",
            "Date":  "2018-02-13T07:01:53",
            "URL":  "https://youtu.be/IWVtcPssnok",
            "Song":  "Turn me on",
            "Views":  184482,
            "Type":  "Audio",
            "Duration":  "4:18"
        },
        {
            "Title":  "Carry on living",
            "Date":  "2018-10-02T11:57:15",
            "URL":  "https://youtu.be/Rylf8-NaJuk",
            "Song":  "Carry on living",
            "Views":  182838,
            "Type":  "Audio",
            "Duration":  "3:33"
        },
        {
            "Title":  "Magie",
            "Date":  "2024-09-24T06:00:52",
            "URL":  "https://youtu.be/p0OxjDTf_2A",
            "Song":  "Magie",
            "Views":  181361,
            "Type":  "Audio",
            "Duration":  "3:05"
        },
        {
            "Title":  "CLANG",
            "Date":  "2018-02-13T07:01:53",
            "URL":  "https://youtu.be/4mSEQ4Qae4Y",
            "Song":  "CLANG",
            "Views":  180537,
            "Type":  "Audio",
            "Duration":  "4:13"
        },
        {
            "Title":  "Spirit!!",
            "Date":  "2018-10-02T11:55:46",
            "URL":  "https://youtu.be/fxeDfNl1IfU",
            "Song":  "Spirit!!",
            "Views":  179532,
            "Type":  "Audio",
            "Duration":  "3:42"
        },
        {
            "Title":  "Take me higher ! !",
            "Date":  "2018-10-02T11:35:11",
            "URL":  "https://youtu.be/SDrfTXRVpw4",
            "Song":  "Take me higher!!",
            "Views":  179275,
            "Type":  "Audio",
            "Duration":  "3:19"
        },
        {
            "Title":  "Daydreaming",
            "Date":  "2018-02-13T07:00:01",
            "URL":  "https://youtu.be/XyWA2xfDtyM",
            "Song":  "Daydreaming",
            "Views":  178634,
            "Type":  "Audio",
            "Duration":  "4:00"
        },
        {
            "Title":  "Liberal",
            "Date":  "2019-12-05T00:27:11",
            "URL":  "https://youtu.be/YwLqiLlCoKE",
            "Song":  "Liberal",
            "Views":  178488,
            "Type":  "Audio",
            "Duration":  "3:15"
        },
        {
            "Title":  "カタルシス",
            "Date":  "2019-12-05T00:27:12",
            "URL":  "https://youtu.be/N5zqCsBjfTU",
            "Song":  "Catharsis",
            "Views":  178380,
            "Type":  "Audio",
            "Duration":  "3:19"
        },
        {
            "Title":  "anemone",
            "Date":  "2018-02-13T07:01:47",
            "URL":  "https://youtu.be/uh0JDdCgZcs",
            "Song":  "anemone",
            "Views":  177599,
            "Type":  "Audio",
            "Duration":  "4:28"
        },
        {
            "Title":  "Letters to you",
            "Date":  "2024-09-24T06:00:27",
            "URL":  "https://youtu.be/T7lS8NkIapQ",
            "Song":  "Letters to you",
            "Views":  176870,
            "Type":  "Audio",
            "Duration":  "3:09"
        },
        {
            "Title":  "Before Yesterday",
            "Date":  "2018-10-02T11:27:07",
            "URL":  "https://youtu.be/xlUYvGjmOas",
            "Song":  "Before Yesterday",
            "Views":  175629,
            "Type":  "Audio",
            "Duration":  "3:45"
        },
        {
            "Title":  "Wonderland",
            "Date":  "2019-12-05T00:27:11",
            "URL":  "https://youtu.be/CewPL6F9XhM",
            "Song":  "Wonderland",
            "Views":  173425,
            "Type":  "Audio",
            "Duration":  "3:56"
        },
        {
            "Title":  "Mirage",
            "Date":  "2019-12-05T00:27:11",
            "URL":  "https://youtu.be/UBLKqA51hZs",
            "Song":  "Mirage",
            "Views":  170192,
            "Type":  "Audio",
            "Duration":  "3:58"
        },
        {
            "Title":  "PAGE",
            "Date":  "2019-12-05T00:27:12",
            "URL":  "https://youtu.be/nxCjEu4_7rU",
            "Song":  "PAGE",
            "Views":  166238,
            "Type":  "Audio",
            "Duration":  "4:18"
        },
        {
            "Title":  "One and only",
            "Date":  "2018-02-13T07:01:49",
            "URL":  "https://youtu.be/FkbKXUGMLvA",
            "Song":  "One and only",
            "Views":  166014,
            "Type":  "Audio",
            "Duration":  "3:23"
        },
        {
            "Title":  "TAMAYA!",
            "Date":  "2024-09-24T06:00:53",
            "URL":  "https://youtu.be/vvpswsFRawM",
            "Song":  "TAMAYA!",
            "Views":  165137,
            "Type":  "Audio",
            "Duration":  "3:16"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock ×「ロックは淑女の嗜みでして」 Special Music Video short ver.2",
            "Date":  "2025-06-25T23:01:02",
            "URL":  "https://youtu.be/snND6wFvgx8",
            "Song":  "Ready to Rock",
            "Views":  161815,
            "Type":  "Anime Music Video Short",
            "Duration":  "0:37"
        },
        {
            "Title":  "Memorable",
            "Date":  "2023-02-21T05:04:04",
            "URL":  "https://youtu.be/UZvceYLB75c",
            "Song":  "Memorable",
            "Views":  161039,
            "Type":  "Audio",
            "Duration":  "3:14"
        },
        {
            "Title":  "start over",
            "Date":  "2018-10-02T11:32:04",
            "URL":  "https://youtu.be/HoXEk8Rcsyg",
            "Song":  "start over",
            "Views":  160929,
            "Type":  "Audio",
            "Duration":  "3:12"
        },
        {
            "Title":  "Awkward",
            "Date":  "2018-10-02T11:35:20",
            "URL":  "https://youtu.be/9tf-bzo9bI0",
            "Song":  "Awkward",
            "Views":  159247,
            "Type":  "Audio",
            "Duration":  "3:33"
        },
        {
            "Title":  "Shambles",
            "Date":  "2024-09-24T06:00:07",
            "URL":  "https://youtu.be/8eu3BQgB9OQ",
            "Song":  "Shambles",
            "Views":  158186,
            "Type":  "Audio",
            "Duration":  "3:22"
        },
        {
            "Title":  "祇園町",
            "Date":  "2019-04-02T11:04:53",
            "URL":  "https://youtu.be/aJmR2e_RtWQ",
            "Song":  "Gion-Cho",
            "Views":  157571,
            "Type":  "Audio",
            "Duration":  "3:36"
        },
        {
            "Title":  "Corallium",
            "Date":  "2022-09-20T06:04:21",
            "URL":  "https://youtu.be/FywmRdKKSjg",
            "Song":  "Corallium",
            "Views":  152819,
            "Type":  "Audio",
            "Duration":  "3:55"
        },
        {
            "Title":  "flying high",
            "Date":  "2019-12-05T00:27:11",
            "URL":  "https://youtu.be/Q_qA4BtEV6c",
            "Song":  "flying high",
            "Views":  151425,
            "Type":  "Audio",
            "Duration":  "3:43"
        },
        {
            "Title":  "So,What?",
            "Date":  "2018-10-02T11:34:32",
            "URL":  "https://youtu.be/di1PjUakkLw",
            "Song":  "So,What?",
            "Views":  150840,
            "Type":  "Audio",
            "Duration":  "3:49"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video MIKU KOBATO ver.)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
            "Date":  "2025-04-06T22:00:32",
            "URL":  "https://youtu.be/bOjubutSnXo",
            "Song":  "Ready to Rock",
            "Views":  150313,
            "Type":  "Official Teaser Video",
            "Duration":  "0:24"
        },
        {
            "Title":  "decided by myself",
            "Date":  "2018-10-02T11:34:32",
            "URL":  "https://youtu.be/aLYJuZT37i4",
            "Song":  "decided by myself",
            "Views":  149697,
            "Type":  "Audio",
            "Duration":  "3:55"
        },
        {
            "Title":  "Smile",
            "Date":  "2019-01-15T10:01:45",
            "URL":  "https://youtu.be/KzCUAJIMtu0",
            "Song":  "Smile",
            "Views":  147312,
            "Type":  "Audio",
            "Duration":  "3:58"
        },
        {
            "Title":  "Brightest star",
            "Date":  "2024-09-24T06:00:11",
            "URL":  "https://youtu.be/70uZ87dY2z0",
            "Song":  "Brightest Star",
            "Views":  147188,
            "Type":  "Audio",
            "Duration":  "3:18"
        },
        {
            "Title":  "Go easy",
            "Date":  "2024-09-24T06:00:38",
            "URL":  "https://youtu.be/ZBbvy6Qx4wE",
            "Song":  "Go easy",
            "Views":  145953,
            "Type":  "Audio",
            "Duration":  "3:01"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock (Official Live #Shorts 2) TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
            "Date":  "2025-08-29T00:00:36",
            "URL":  "https://youtu.be/QWKfL5C7oRg",
            "Song":  "Ready to Rock",
            "Views":  142049,
            "Type":  "Official Live Short",
            "Duration":  "0:23"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video AKANE ver.)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
            "Date":  "2025-04-05T00:30:03",
            "URL":  "https://youtu.be/50H_hmPh4dI",
            "Song":  "Ready to Rock",
            "Views":  139476,
            "Type":  "Official Teaser Video",
            "Duration":  "0:24"
        },
        {
            "Title":  "Spirit!!",
            "Date":  "2018-02-13T07:01:52",
            "URL":  "https://youtu.be/2XR0CmgB1pI",
            "Song":  "Spirit!!",
            "Views":  139417,
            "Type":  "Audio",
            "Duration":  "3:44"
        },
        {
            "Title":  "At the drop of a hat",
            "Date":  "2019-12-05T00:27:13",
            "URL":  "https://youtu.be/pa-zUO820-0",
            "Song":  "At the drop of a hat",
            "Views":  135978,
            "Type":  "Audio",
            "Duration":  "4:20"
        },
        {
            "Title":  "Price of Pride",
            "Date":  "2018-10-02T11:48:26",
            "URL":  "https://youtu.be/wkzVmMRcC0U",
            "Song":  "Price of Pride",
            "Views":  134776,
            "Type":  "Audio",
            "Duration":  "3:28"
        },
        {
            "Title":  "Toi et moi",
            "Date":  "2024-09-24T06:00:25",
            "URL":  "https://youtu.be/V9VDAoYf0A0",
            "Song":  "Toi et moi",
            "Views":  133783,
            "Type":  "Audio",
            "Duration":  "2:57"
        },
        {
            "Title":  "Don\u0027t Apply The Brake",
            "Date":  "2018-10-02T11:47:34",
            "URL":  "https://youtu.be/vY6eYTG315A",
            "Song":  "Don\u0027t apply the brake",
            "Views":  131619,
            "Type":  "Audio",
            "Duration":  "3:21"
        },
        {
            "Title":  "TIME",
            "Date":  "2018-10-02T11:35:37",
            "URL":  "https://youtu.be/GEvS_V9bLDE",
            "Song":  "TIME",
            "Views":  128572,
            "Type":  "Audio",
            "Duration":  "3:30"
        },
        {
            "Title":  "ハニー",
            "Date":  "2018-10-02T11:55:46",
            "URL":  "https://youtu.be/_I70qgGN-6I",
            "Song":  "Honey",
            "Views":  127325,
            "Type":  "Audio",
            "Duration":  "3:25"
        },
        {
            "Title":  "Protect You",
            "Date":  "2024-09-24T06:00:31",
            "URL":  "https://youtu.be/PDaRbNVVdCE",
            "Song":  "Protect You",
            "Views":  124941,
            "Type":  "Audio",
            "Duration":  "3:14"
        },
        {
            "Title":  "Carry on living",
            "Date":  "2018-02-13T07:00:01",
            "URL":  "https://youtu.be/pKFBa8urc60",
            "Song":  "Carry on living",
            "Views":  123674,
            "Type":  "Audio",
            "Duration":  "3:35"
        },
        {
            "Title":  "Arcadia Girl",
            "Date":  "2018-10-02T11:47:25",
            "URL":  "https://youtu.be/TwMx4bJ30Tk",
            "Song":  "Arcadia Girl",
            "Views":  123129,
            "Type":  "Audio",
            "Duration":  "4:06"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock (Official Live #Shorts) TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
            "Date":  "2025-08-27T00:04:12",
            "URL":  "https://youtu.be/0q8L_YvNZn0",
            "Song":  "Ready to Rock",
            "Views":  122881,
            "Type":  "Official Live Short",
            "Duration":  "0:25"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock (Official Live Video ver. 3 #shorts )  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
            "Date":  "2025-05-29T09:01:19",
            "URL":  "https://youtu.be/lBkdxHmvyAA",
            "Song":  "Ready to Rock",
            "Views":  120616,
            "Type":  "Official Live Short",
            "Duration":  "0:44"
        },
        {
            "Title":  "BAND-MAID / Forbidden tale (Official Teaser Video) MIKU KOBATO",
            "Date":  "2024-10-11T09:00:00",
            "URL":  "https://youtu.be/08dX4S0DWfg",
            "Song":  "Forbidden tale",
            "Views":  117648,
            "Type":  "Official Teaser Video",
            "Duration":  "0:32"
        },
        {
            "Title":  "SHOW THEM",
            "Date":  "2024-09-24T06:00:03",
            "URL":  "https://youtu.be/42AfEN1SGZ4",
            "Song":  "Show Them",
            "Views":  114124,
            "Type":  "Audio",
            "Duration":  "3:15"
        },
        {
            "Title":  "ORDER",
            "Date":  "2018-10-02T11:26:01",
            "URL":  "https://youtu.be/3J-TWdHqjoQ",
            "Song":  "ORDER",
            "Views":  110235,
            "Type":  "Audio",
            "Duration":  "3:23"
        },
        {
            "Title":  "Get to the top",
            "Date":  "2024-09-24T06:00:58",
            "URL":  "https://youtu.be/z0KTMEXJ1RE",
            "Song":  "Get to the top",
            "Views":  109921,
            "Type":  "Audio",
            "Duration":  "3:08"
        },
        {
            "Title":  "OOPARTS",
            "Date":  "2018-10-02T11:34:30",
            "URL":  "https://youtu.be/YFLsVQ4iPxw",
            "Song":  "OOPARTS",
            "Views":  109704,
            "Type":  "Audio",
            "Duration":  "4:07"
        },
        {
            "Title":  "ハニー",
            "Date":  "2018-02-13T07:01:49",
            "URL":  "https://youtu.be/0ozhb_hN9JY",
            "Song":  "Honey",
            "Views":  109374,
            "Type":  "Audio",
            "Duration":  "3:25"
        },
        {
            "Title":  "Alive-or-Dead",
            "Date":  "2018-02-13T07:01:41",
            "URL":  "https://youtu.be/aNM9ovsfshc",
            "Song":  "Alive-or-Dead",
            "Views":  106620,
            "Type":  "Audio",
            "Duration":  "3:48"
        },
        {
            "Title":  "Unleash!!!!!",
            "Date":  "2022-09-20T06:05:20",
            "URL":  "https://youtu.be/uLTBtjZEGv0",
            "Song":  "Unleash!!!!!",
            "Views":  103897,
            "Type":  "Audio",
            "Duration":  "3:11"
        },
        {
            "Title":  "The Dragon Cries",
            "Date":  "2019-12-05T00:27:11",
            "URL":  "https://youtu.be/uHBnf1pXC2E",
            "Song":  "The Dragon Cries",
            "Views":  103239,
            "Type":  "Audio",
            "Duration":  "3:56"
        },
        {
            "Title":  "BAND-MAID / What is justice? (Official Teaser Video) TVアニメ「桃源暗鬼」エンディング主題歌",
            "Date":  "2025-07-12T07:00:04",
            "URL":  "https://youtu.be/1kbZ5NsrdX4",
            "Song":  "What is justice?",
            "Views":  95096,
            "Type":  "Official Teaser Video",
            "Duration":  "0:10"
        },
        {
            "Title":  "虎 and 虎",
            "Date":  "2019-04-02T11:05:24",
            "URL":  "https://youtu.be/-Z7S8Y_Eb4Q",
            "Song":  "One and only",
            "Views":  93992,
            "Type":  "Audio",
            "Duration":  "3:27"
        },
        {
            "Title":  "BAND-MAID / Zen (Official Teaser Video)  MIKU KOBATO Ver.  MAPPAアニメ「全修。」オープニングテーマソング",
            "Date":  "2025-01-23T22:00:07",
            "URL":  "https://youtu.be/A1vhzIBfTGQ",
            "Song":  "Zen",
            "Views":  93813,
            "Type":  "Official Teaser Video",
            "Duration":  "0:27"
        },
        {
            "Title":  "YURAGU",
            "Date":  "2018-10-02T11:25:59",
            "URL":  "https://youtu.be/v2ZFMzL0QPA",
            "Song":  "YURAGU",
            "Views":  90994,
            "Type":  "Audio",
            "Duration":  "4:02"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock ×「ロックは淑女の嗜みでして」 Special Music Video short ver.1",
            "Date":  "2025-06-24T23:00:05",
            "URL":  "https://youtu.be/anA8iIVMTHw",
            "Song":  "Ready to Rock",
            "Views":  90635,
            "Type":  "Anime Music Video Short",
            "Duration":  "0:25"
        },
        {
            "Title":  "Beauty and the Beast",
            "Date":  "2018-10-02T11:47:18",
            "URL":  "https://youtu.be/u4L-I041jis",
            "Song":  "Beauty and the beast",
            "Views":  90028,
            "Type":  "Audio",
            "Duration":  "4:01"
        },
        {
            "Title":  "matchless GUM",
            "Date":  "2018-10-02T11:42:18",
            "URL":  "https://youtu.be/ljt_YGfHQr4",
            "Song":  "matchless GUM",
            "Views":  88244,
            "Type":  "Audio",
            "Duration":  "3:12"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video KANAMI ver.)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
            "Date":  "2025-04-03T12:00:12",
            "URL":  "https://youtu.be/ua-_klKlbdY",
            "Song":  "Ready to Rock",
            "Views":  84451,
            "Type":  "Official Teaser Video",
            "Duration":  "0:24"
        },
        {
            "Title":  "BAND-MAID / Zen (Official Teaser Video)  KANAMI Ver.  MAPPAアニメ「全修。」オープニングテーマソング",
            "Date":  "2025-01-19T22:00:40",
            "URL":  "https://youtu.be/owIg4MUVG8M",
            "Song":  "Zen",
            "Views":  82187,
            "Type":  "Official Teaser Video",
            "Duration":  "0:27"
        },
        {
            "Title":  "LOOK AT ME",
            "Date":  "2018-10-02T11:26:01",
            "URL":  "https://youtu.be/xOqnN00feSc",
            "Song":  "LOOK AT ME",
            "Views":  81839,
            "Type":  "Audio",
            "Duration":  "3:59"
        },
        {
            "Title":  "Sense",
            "Date":  "2022-09-20T06:04:05",
            "URL":  "https://youtu.be/eAX5_kypXp4",
            "Song":  "Sense",
            "Views":  80697,
            "Type":  "Audio",
            "Duration":  "3:25"
        },
        {
            "Title":  "Unfair game",
            "Date":  "2018-10-02T11:44:03",
            "URL":  "https://youtu.be/wlDCBVsRi2g",
            "Song":  "Unfair game",
            "Views":  76724,
            "Type":  "Audio",
            "Duration":  "3:31"
        },
        {
            "Title":  "hide-and-seek",
            "Date":  "2019-01-15T10:02:07",
            "URL":  "https://youtu.be/VQgMoXzcgaM",
            "Song":  "hide-and-seek",
            "Views":  76016,
            "Type":  "Audio",
            "Duration":  "3:01"
        },
        {
            "Title":  "BAND-MAID / What is justice? (Official Teaser Video MIKU KOBATO ver.) TVアニメ「桃源暗鬼」エンディング主題歌",
            "Date":  "2025-07-18T23:00:29",
            "URL":  "https://youtu.be/KN5arIuiRp8",
            "Song":  "What is justice?",
            "Views":  75944,
            "Type":  "Official Teaser Video",
            "Duration":  "0:27"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video KANAMI ver.2)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
            "Date":  "2025-04-17T23:00:39",
            "URL":  "https://youtu.be/XqGukTfP8n8",
            "Song":  "Ready to Rock",
            "Views":  75426,
            "Type":  "Official Teaser Video",
            "Duration":  "0:12"
        },
        {
            "Title":  "BAND-MAID / What is justice? (Official Live Video #shorts )  TVアニメ「桃源暗鬼」エンディング主題歌",
            "Date":  "2025-07-31T06:01:22",
            "URL":  "https://youtu.be/rG8cfEJeNMw",
            "Song":  "What is justice?",
            "Views":  72987,
            "Type":  "Official Live Short",
            "Duration":  "0:34"
        },
        {
            "Title":  "YOLOSIOSU",
            "Date":  "2019-04-02T11:05:25",
            "URL":  "https://youtu.be/4TniI0IJEkk",
            "Song":  "YOLO",
            "Views":  69606,
            "Type":  "Audio",
            "Duration":  "4:22"
        },
        {
            "Title":  "Brand-New Road",
            "Date":  "2018-10-02T11:27:08",
            "URL":  "https://youtu.be/_KVaSaQmb0k",
            "Song":  "Brand-New Road",
            "Views":  68226,
            "Type":  "Audio",
            "Duration":  "3:50"
        },
        {
            "Title":  "Don\u0027t be long",
            "Date":  "2020-12-01T10:04:07",
            "URL":  "https://youtu.be/XDZYylY1IHE",
            "Song":  "Don\u0027t be long",
            "Views":  67609,
            "Type":  "Audio",
            "Duration":  "3:20"
        },
        {
            "Title":  "Bestie",
            "Date":  "2024-09-24T06:00:45",
            "URL":  "https://youtu.be/eLQCEiBUthE",
            "Song":  "Bestie",
            "Views":  66737,
            "Type":  "Audio",
            "Duration":  "3:36"
        },
        {
            "Title":  "すくりーみんぐ",
            "Date":  "2019-04-02T11:04:51",
            "URL":  "https://youtu.be/VACaI2GRUVE",
            "Song":  "Screaming",
            "Views":  66274,
            "Type":  "Audio",
            "Duration":  "3:55"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock (Official Dance Video Ver.2)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
            "Date":  "2025-04-19T22:00:44",
            "URL":  "https://youtu.be/jxhdmtaXg9A",
            "Song":  "Ready to Rock",
            "Views":  66238,
            "Type":  "Official Dance Video",
            "Duration":  "0:26"
        },
        {
            "Title":  "Shake That!!",
            "Date":  "2023-08-01T06:00:07",
            "URL":  "https://youtu.be/CqFkNqdPnK8",
            "Song":  "Shake That!!",
            "Views":  64838,
            "Type":  "Audio",
            "Duration":  "4:05"
        },
        {
            "Title":  "BAND-MAID / What is justice? (Official Live Video 2 #shorts )  TVアニメ「桃源暗鬼」エンディング主題歌",
            "Date":  "2025-08-07T23:11:02",
            "URL":  "https://youtu.be/UHZDVE5Ea6c",
            "Song":  "What is justice?",
            "Views":  63531,
            "Type":  "Official Live Short",
            "Duration":  "0:33"
        },
        {
            "Title":  "glory",
            "Date":  "2019-12-05T00:27:11",
            "URL":  "https://youtu.be/uZJNer5jBm8",
            "Song":  "glory",
            "Views":  62260,
            "Type":  "Audio",
            "Duration":  "3:40"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock (Official Live #Shorts 3) TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
            "Date":  "2025-09-02T23:01:06",
            "URL":  "https://youtu.be/wi1SwV0vWzs",
            "Song":  "Ready to Rock",
            "Views":  59339,
            "Type":  "Official Live Short",
            "Duration":  "0:37"
        },
        {
            "Title":  "Puzzle",
            "Date":  "2023-08-01T06:00:27",
            "URL":  "https://youtu.be/gbopW5vHlio",
            "Song":  "Puzzle",
            "Views":  58813,
            "Type":  "Audio",
            "Duration":  "4:21"
        },
        {
            "Title":  "BAND-MAID / Protect You (Official Teaser Video)",
            "Date":  "2024-06-20T23:00:00",
            "URL":  "https://youtu.be/aGjPAPnf_-A",
            "Song":  "Protect You",
            "Views":  58492,
            "Type":  "Official Teaser Video",
            "Duration":  "0:26"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
            "Date":  "2025-03-16T08:00:37",
            "URL":  "https://youtu.be/NFS8hO3BgTA",
            "Song":  "Ready to Rock",
            "Views":  56832,
            "Type":  "Official Teaser Video",
            "Duration":  "0:15"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock (Official Dance Video)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
            "Date":  "2025-04-10T11:00:38",
            "URL":  "https://youtu.be/MPYm3Y6yVkM",
            "Song":  "Ready to Rock",
            "Views":  56000,
            "Type":  "Official Dance Video",
            "Duration":  "0:26"
        },
        {
            "Title":  "ansan",
            "Date":  "2019-04-02T11:04:52",
            "URL":  "https://youtu.be/EqV2Bnzj9Bo",
            "Song":  "anemone",
            "Views":  55537,
            "Type":  "Audio",
            "Duration":  "4:29"
        },
        {
            "Title":  "Daydreaming",
            "Date":  "2018-10-02T11:55:46",
            "URL":  "https://youtu.be/-7D6FuWUpsk",
            "Song":  "Daydreaming",
            "Views":  54709,
            "Type":  "Audio",
            "Duration":  "3:58"
        },
        {
            "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video)  AKANE vs Pau",
            "Date":  "2024-07-31T11:00:32",
            "URL":  "https://youtu.be/N5uWg7wPvZA",
            "Song":  "Show Them",
            "Views":  53056,
            "Type":  "Official Teaser Video",
            "Duration":  "0:29"
        },
        {
            "Title":  "Memorable",
            "Date":  "2024-09-24T06:00:54",
            "URL":  "https://youtu.be/o8p3rYAKFys",
            "Song":  "Memorable",
            "Views":  50838,
            "Type":  "Audio",
            "Duration":  "3:14"
        },
        {
            "Title":  "YOLO",
            "Date":  "2018-10-02T11:35:19",
            "URL":  "https://youtu.be/T_BxRz7-ncw",
            "Song":  "YOLO",
            "Views":  50418,
            "Type":  "Audio",
            "Duration":  "4:26"
        },
        {
            "Title":  "Akasimahen",
            "Date":  "2019-04-02T11:04:51",
            "URL":  "https://youtu.be/hHrnhXfJhL8",
            "Song":  "Awkward",
            "Views":  49022,
            "Type":  "Audio",
            "Duration":  "3:20"
        },
        {
            "Title":  "Thrill",
            "Date":  "2023-08-01T06:00:25",
            "URL":  "https://youtu.be/Nld9hWfIfjE",
            "Song":  "Thrill",
            "Views":  48363,
            "Type":  "Audio",
            "Duration":  "4:03"
        },
        {
            "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video)  MISA vs Ale",
            "Date":  "2024-07-29T23:00:03",
            "URL":  "https://youtu.be/enNgR1c9ZEo",
            "Song":  "Show Them",
            "Views":  48037,
            "Type":  "Official Teaser Video",
            "Duration":  "0:29"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video SAIKI ver.)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
            "Date":  "2025-04-07T22:00:25",
            "URL":  "https://youtu.be/RcoQoHORdek",
            "Song":  "Ready to Rock",
            "Views":  47549,
            "Type":  "Official Teaser Video",
            "Duration":  "0:24"
        },
        {
            "Title":  "Bubble",
            "Date":  "2019-12-05T00:27:11",
            "URL":  "https://youtu.be/VMswJMSWKDw",
            "Song":  "Bubble",
            "Views":  47382,
            "Type":  "Audio",
            "Duration":  "3:47"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video MISA ver.)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
            "Date":  "2025-04-05T22:21:17",
            "URL":  "https://youtu.be/h9t2zJe-JIY",
            "Song":  "Ready to Rock",
            "Views":  46929,
            "Type":  "Official Teaser Video",
            "Duration":  "0:24"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
            "Date":  "2025-04-23T22:00:42",
            "URL":  "https://youtu.be/gKsEHgTRD84",
            "Song":  "Ready to Rock",
            "Views":  46627,
            "Type":  "Official Teaser Video",
            "Duration":  "0:32"
        },
        {
            "Title":  "DICE",
            "Date":  "2023-08-01T06:00:33",
            "URL":  "https://youtu.be/bKCcDI5-Oa0",
            "Song":  "DICE",
            "Views":  46552,
            "Type":  "Audio",
            "Duration":  "4:03"
        },
        {
            "Title":  "BAND-MAID / What is justice? (Official Teaser Video 2) TVアニメ「桃源暗鬼」エンディング主題歌",
            "Date":  "2025-07-17T23:00:29",
            "URL":  "https://youtu.be/WVpuhXbZuR0",
            "Song":  "What is justice?",
            "Views":  46475,
            "Type":  "Official Teaser Video",
            "Duration":  "0:30"
        },
        {
            "Title":  "DOMINATION",
            "Date":  "2023-08-01T06:00:41",
            "URL":  "https://youtu.be/uc6ILmIBTMA",
            "Song":  "DOMINATION",
            "Views":  46395,
            "Type":  "Audio",
            "Duration":  "3:51"
        },
        {
            "Title":  "BAND-MAID / What is justice? (Official Teaser Video SAIKI ver.) TVアニメ「桃源暗鬼」エンディング主題歌",
            "Date":  "2025-07-19T23:00:35",
            "URL":  "https://youtu.be/TSb_aKt6KtI",
            "Song":  "What is justice?",
            "Views":  45763,
            "Type":  "Official Teaser Video",
            "Duration":  "0:27"
        },
        {
            "Title":  "BAND-MAID / Present Perfect (Official Teaser Video)",
            "Date":  "2025-10-14T23:30:17",
            "URL":  "https://youtu.be/M_YlnotO7sM",
            "Song":  "Present Perfect",
            "Views":  45605,
            "Type":  "Official Teaser Video",
            "Duration":  "0:23"
        },
        {
            "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video)  MIKU KOBATO",
            "Date":  "2024-08-05T11:00:30",
            "URL":  "https://youtu.be/L1prF8ArZb8",
            "Song":  "Show Them",
            "Views":  44942,
            "Type":  "Official Teaser Video",
            "Duration":  "0:29"
        },
        {
            "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video)  KANAMI vs Dany",
            "Date":  "2024-08-02T11:00:36",
            "URL":  "https://youtu.be/YN9Mv3C0WE4",
            "Song":  "Show Them",
            "Views":  44613,
            "Type":  "Official Teaser Video",
            "Duration":  "0:29"
        },
        {
            "Title":  "I can\u0027t live without you.",
            "Date":  "2023-08-01T06:00:36",
            "URL":  "https://youtu.be/fbiSk3eczBc",
            "Song":  "I can\u0027t live without you.",
            "Views":  44172,
            "Type":  "Audio",
            "Duration":  "3:50"
        },
        {
            "Title":  "Play",
            "Date":  "2023-08-01T06:00:04",
            "URL":  "https://youtu.be/5kjW4huHKNo",
            "Song":  "Play",
            "Views":  44044,
            "Type":  "Audio",
            "Duration":  "3:20"
        },
        {
            "Title":  "FREEDOM",
            "Date":  "2023-08-01T06:00:18",
            "URL":  "https://youtu.be/VMZxl3h3IPc",
            "Song":  "FREEDOM",
            "Views":  43453,
            "Type":  "Audio",
            "Duration":  "3:45"
        },
        {
            "Title":  "BAND-MAID / What is justice? (Official Teaser Video KANAMI ver.) TVアニメ「桃源暗鬼」エンディング主題歌",
            "Date":  "2025-07-20T23:00:29",
            "URL":  "https://youtu.be/RjdMcfqLzhk",
            "Song":  "What is justice?",
            "Views":  42245,
            "Type":  "Official Teaser Video",
            "Duration":  "0:27"
        },
        {
            "Title":  "BAND-MAID / New Album \"Epic Narratives\" (Official Teaser Video)",
            "Date":  "2024-07-14T07:15:29",
            "URL":  "https://youtu.be/kobDkT-NMkU",
            "Song":  "",
            "Views":  42080,
            "Type":  "Official Teaser Video",
            "Duration":  "0:53"
        },
        {
            "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video)  SAIKI vs Dany",
            "Date":  "2024-08-04T11:00:35",
            "URL":  "https://youtu.be/_wA3a3op4I4",
            "Song":  "Show Them",
            "Views":  41392,
            "Type":  "Official Teaser Video",
            "Duration":  "0:29"
        },
        {
            "Title":  "BAND-MAID / Zen (Official Teaser Video)  AKANE Ver.  MAPPAアニメ「全修。」オープニングテーマソング",
            "Date":  "2025-01-16T22:00:12",
            "URL":  "https://youtu.be/Hn_D-xpYaXY",
            "Song":  "Zen",
            "Views":  41233,
            "Type":  "Official Teaser Video",
            "Duration":  "0:27"
        },
        {
            "Title":  "Choose me",
            "Date":  "2023-08-01T06:00:09",
            "URL":  "https://youtu.be/I3icx12V-KU",
            "Song":  "Choose me",
            "Views":  40807,
            "Type":  "Audio",
            "Duration":  "3:39"
        },
        {
            "Title":  "REAL EXISTENCE",
            "Date":  "2023-08-01T06:00:14",
            "URL":  "https://youtu.be/KARLb_qDCpg",
            "Song":  "REAL EXISTENCE",
            "Views":  40476,
            "Type":  "Audio",
            "Duration":  "4:10"
        },
        {
            "Title":  "BAND-MAID / What is justice? (Official Teaser Video AKANE ver.) TVアニメ「桃源暗鬼」エンディング主題歌",
            "Date":  "2025-07-21T23:00:46",
            "URL":  "https://youtu.be/byPQCySUe0M",
            "Song":  "What is justice?",
            "Views":  39892,
            "Type":  "Official Teaser Video",
            "Duration":  "0:27"
        },
        {
            "Title":  "alone",
            "Date":  "2023-08-01T06:00:02",
            "URL":  "https://youtu.be/2UPXHfkrh-0",
            "Song":  "alone",
            "Views":  39687,
            "Type":  "Audio",
            "Duration":  "3:28"
        },
        {
            "Title":  "BAND-MAID / Ready to Rock (Official Teaser Video)  TVアニメ「ロックは淑女の嗜みでして」オープニングテーマソング",
            "Date":  "2025-04-08T22:00:10",
            "URL":  "https://youtu.be/Ii3dVgCB3_Q",
            "Song":  "Ready to Rock",
            "Views":  39156,
            "Type":  "Official Teaser Video",
            "Duration":  "0:26"
        },
        {
            "Title":  "Screaming",
            "Date":  "2023-08-01T06:00:46",
            "URL":  "https://youtu.be/yiwuTda0E8s",
            "Song":  "Screaming",
            "Views":  38760,
            "Type":  "Audio",
            "Duration":  "3:50"
        },
        {
            "Title":  "BAND-MAID in SUMMER SONIC 2024 #サマソニ #SUMMERSONIC #bandmaid",
            "Date":  "2024-08-21T05:00:06",
            "URL":  "https://youtu.be/8ofX0GW1mHc",
            "Song":  "",
            "Views":  37367,
            "Type":  "Official Live Short",
            "Duration":  "0:38"
        },
        {
            "Title":  "Rock in me",
            "Date":  "2023-08-01T06:00:34",
            "URL":  "https://youtu.be/_i2Knq68730",
            "Song":  "Rock in me",
            "Views":  37265,
            "Type":  "Audio",
            "Duration":  "3:22"
        },
        {
            "Title":  "Daydreaming",
            "Date":  "2023-08-01T06:00:13",
            "URL":  "https://youtu.be/Msr-nKTQcao",
            "Song":  "Daydreaming",
            "Views":  36683,
            "Type":  "Audio",
            "Duration":  "3:59"
        },
        {
            "Title":  "YOLO",
            "Date":  "2023-08-01T06:00:28",
            "URL":  "https://youtu.be/hoOUddgdUXk",
            "Song":  "YOLO",
            "Views":  36381,
            "Type":  "Audio",
            "Duration":  "4:26"
        },
        {
            "Title":  "BAND-MAID / Zen (Official Teaser Video)  SAIKI Ver.  MAPPAアニメ「全修。」オープニングテーマソング",
            "Date":  "2025-01-30T22:00:18",
            "URL":  "https://youtu.be/D-mKCUY2UmI",
            "Song":  "Zen",
            "Views":  35972,
            "Type":  "Official Teaser Video",
            "Duration":  "0:27"
        },
        {
            "Title":  "Don\u0027t you tell ME",
            "Date":  "2023-08-01T06:00:07",
            "URL":  "https://youtu.be/83axQdf0gE8",
            "Song":  "Don\u0027t you tell ME",
            "Views":  34842,
            "Type":  "Audio",
            "Duration":  "3:10"
        },
        {
            "Title":  "BAND-MAID / Zen (Official Teaser Video) Lyric Video  MAPPAアニメ「全修。」オープニングテーマソング",
            "Date":  "2025-02-09T22:00:35",
            "URL":  "https://youtu.be/ir0wriDMxns",
            "Song":  "Zen",
            "Views":  34829,
            "Type":  "Official Teaser Video",
            "Duration":  "0:28"
        },
        {
            "Title":  "BAND-MAID / Zen (Official Teaser Video)  MISA Ver.  MAPPAアニメ「全修。」オープニングテーマソング",
            "Date":  "2025-01-26T22:00:40",
            "URL":  "https://youtu.be/kgIMz3ibHiU",
            "Song":  "Zen",
            "Views":  34625,
            "Type":  "Official Teaser Video",
            "Duration":  "0:27"
        },
        {
            "Title":  "BAND-MAID / What is justice? (Official Teaser Video MISA ver.) TVアニメ「桃源暗鬼」エンディング主題歌",
            "Date":  "2025-07-22T23:00:42",
            "URL":  "https://youtu.be/_xflJi4BvWo",
            "Song":  "What is justice?",
            "Views":  34486,
            "Type":  "Official Teaser Video",
            "Duration":  "0:27"
        },
        {
            "Title":  "BAND-MAID 2025",
            "Date":  "2024-11-26T06:18:21",
            "URL":  "https://youtu.be/vwX8-HPivqg",
            "Song":  "Zen",
            "Views":  32780,
            "Type":  "Other",
            "Duration":  "0:57"
        },
        {
            "Title":  "BAND-MAID / Zen (Official Teaser Video)　MAPPAアニメ「全修。」オープニングテーマソング",
            "Date":  "2025-01-16T01:00:24",
            "URL":  "https://youtu.be/CXQeSVxdSw4",
            "Song":  "Zen",
            "Views":  31961,
            "Type":  "Official Teaser Video",
            "Duration":  "0:30"
        },
        {
            "Title":  "BAND-MAID / What is justice? (Official Teaser Video 3) TVアニメ「桃源暗鬼」エンディング主題歌",
            "Date":  "2025-07-24T01:06:05",
            "URL":  "https://youtu.be/AoIdy16pje8",
            "Song":  "What is justice?",
            "Views":  30988,
            "Type":  "Official Teaser Video",
            "Duration":  "0:32"
        },
        {
            "Title":  "BAND-MAID / Forbidden tale (Official Teaser Video) AKANE",
            "Date":  "2024-10-13T09:00:46",
            "URL":  "https://youtu.be/fwKbV3B7pg4",
            "Song":  "Forbidden tale",
            "Views":  30579,
            "Type":  "Official Teaser Video",
            "Duration":  "0:30"
        },
        {
            "Title":  "BAND-MAID / Forbidden tale (Official Teaser Video) KANAMI",
            "Date":  "2024-10-14T09:00:39",
            "URL":  "https://youtu.be/X4IQwPJN7E0",
            "Song":  "Forbidden tale",
            "Views":  29985,
            "Type":  "Official Teaser Video",
            "Duration":  "0:32"
        },
        {
            "Title":  "glory",
            "Date":  "2023-08-01T06:00:47",
            "URL":  "https://youtu.be/wvEFTlgYIAc",
            "Song":  "glory",
            "Views":  28846,
            "Type":  "Audio",
            "Duration":  "3:35"
        },
        {
            "Title":  "secret My lips",
            "Date":  "2023-08-01T06:00:10",
            "URL":  "https://youtu.be/85QjGCRd5j0",
            "Song":  "secret My lips",
            "Views":  28576,
            "Type":  "Audio",
            "Duration":  "4:12"
        },
        {
            "Title":  "the non-fiction days",
            "Date":  "2023-08-01T06:00:04",
            "URL":  "https://youtu.be/5rhwRHIF_EM",
            "Song":  "the non-fiction days",
            "Views":  28575,
            "Type":  "Audio",
            "Duration":  "4:43"
        },
        {
            "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) KANAMI",
            "Date":  "2024-08-07T11:00:03",
            "URL":  "https://youtu.be/2uVT3sr8QAs",
            "Song":  "Show Them",
            "Views":  28176,
            "Type":  "Official Teaser Video",
            "Duration":  "0:29"
        },
        {
            "Title":  "BAND-MAID / Magie  #ジャイガ #bandmaid #夏フェス",
            "Date":  "2024-07-21T00:00:10",
            "URL":  "https://youtu.be/B2N2xiinQzI",
            "Song":  "Magie",
            "Views":  27411,
            "Type":  "Official Live Short",
            "Duration":  "0:24"
        },
        {
            "Title":  "BAND-MAID / Forbidden tale (Official Teaser Video) SAIKI",
            "Date":  "2024-10-15T09:01:11",
            "URL":  "https://youtu.be/woI6ILUBWaI",
            "Song":  "Forbidden tale",
            "Views":  27161,
            "Type":  "Official Teaser Video",
            "Duration":  "0:32"
        },
        {
            "Title":  "start over",
            "Date":  "2023-08-01T06:00:01",
            "URL":  "https://youtu.be/a3QswEhUsy4",
            "Song":  "start over",
            "Views":  26664,
            "Type":  "Audio",
            "Duration":  "3:12"
        },
        {
            "Title":  "Bubble",
            "Date":  "2023-08-01T06:00:45",
            "URL":  "https://youtu.be/viKp4mkdAzk",
            "Song":  "Bubble",
            "Views":  26646,
            "Type":  "Audio",
            "Duration":  "3:45"
        },
        {
            "Title":  "Different",
            "Date":  "2023-08-01T06:00:05",
            "URL":  "https://youtu.be/91oVKMsHpYI",
            "Song":  "Different",
            "Views":  26591,
            "Type":  "Audio",
            "Duration":  "3:30"
        },
        {
            "Title":  "BAND-MAID / What is justice? (Official Talk Video  浦和希さん× 小鳩ミク Kazuki Ura × Miku Kobato)",
            "Date":  "2025-07-16T01:01:04",
            "URL":  "https://youtu.be/zBOqFbyTgkI",
            "Song":  "What is justice?",
            "Views":  26086,
            "Type":  "Official Talk Video",
            "Duration":  "1:00"
        },
        {
            "Title":  "endless Story",
            "Date":  "2023-08-01T06:00:35",
            "URL":  "https://youtu.be/cKG44jAk1Y8",
            "Song":  "endless Story",
            "Views":  25984,
            "Type":  "Audio",
            "Duration":  "3:42"
        },
        {
            "Title":  "BAND-MAID / New Album \"Epic Narratives\" (Official Teaser Video)",
            "Date":  "2024-09-24T23:00:12",
            "URL":  "https://youtu.be/8dawxG_v7Fc",
            "Song":  "",
            "Views":  25964,
            "Type":  "Official Teaser Video",
            "Duration":  "1:00"
        },
        {
            "Title":  "BAND-MAID / Forbidden tale (Official Teaser Video)",
            "Date":  "2024-10-03T04:30:13",
            "URL":  "https://youtu.be/D0Lj5un6Ul0",
            "Song":  "Forbidden tale",
            "Views":  25274,
            "Type":  "Official Teaser Video",
            "Duration":  "0:49"
        },
        {
            "Title":  "BAND-MAID / Forbidden tale (Official Teaser Video) MISA",
            "Date":  "2024-10-12T09:00:32",
            "URL":  "https://youtu.be/PDhRae9X-w4",
            "Song":  "Forbidden tale",
            "Views":  25109,
            "Type":  "Official Teaser Video",
            "Duration":  "0:32"
        },
        {
            "Title":  "Blooming",
            "Date":  "2023-08-01T06:00:00",
            "URL":  "https://youtu.be/-XFwab31HfY",
            "Song":  "Blooming",
            "Views":  24582,
            "Type":  "Audio",
            "Duration":  "3:47"
        },
        {
            "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video)",
            "Date":  "2024-08-05T23:27:06",
            "URL":  "https://youtu.be/e3Q0GuBX3rk",
            "Song":  "Show Them",
            "Views":  24557,
            "Type":  "Official Teaser Video",
            "Duration":  "0:37"
        },
        {
            "Title":  "2024.09.25 Release / BAND-MAID New Album \"Epic Narratives\" (Official Teaser Video)",
            "Date":  "2024-08-21T05:00:20",
            "URL":  "https://youtu.be/PfMQkYxaVWE",
            "Song":  "",
            "Views":  23611,
            "Type":  "Official Teaser Video",
            "Duration":  "0:31"
        },
        {
            "Title":  "輪廻",
            "Date":  "2023-08-01T06:00:16",
            "URL":  "https://youtu.be/CUteeAnG5Y4",
            "Song":  "Rinne",
            "Views":  22798,
            "Type":  "Audio",
            "Duration":  "3:26"
        },
        {
            "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) AKANE",
            "Date":  "2024-08-08T11:00:33",
            "URL":  "https://youtu.be/TXj5Y4VfVkU",
            "Song":  "Show Them",
            "Views":  20018,
            "Type":  "Official Teaser Video",
            "Duration":  "0:29"
        },
        {
            "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) MISA vs Ale part 2",
            "Date":  "2024-08-14T11:00:00",
            "URL":  "https://youtu.be/-NsV_51FYVE",
            "Song":  "Show Them",
            "Views":  19240,
            "Type":  "Official Teaser Video",
            "Duration":  "0:29"
        },
        {
            "Title":  "YOLO (instrumental)",
            "Date":  "2018-10-02T11:42:18",
            "URL":  "https://youtu.be/_iU7a_GnZXo",
            "Song":  "YOLO",
            "Views":  18851,
            "Type":  "Audio",
            "Duration":  "4:26"
        },
        {
            "Title":  "BAND-MAID / What is justice? ×『桃源暗鬼』  Special Music Video #shorts (Anime Music Video Shorts)",
            "Date":  "2025-10-01T23:01:08",
            "URL":  "https://youtu.be/sts6c_ZTwUM",
            "Song":  "What is justice?",
            "Views":  16980,
            "Type":  "Anime Music Video Short",
            "Duration":  "0:31"
        },
        {
            "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) AKANE vs Pau part 2",
            "Date":  "2024-08-13T11:00:36",
            "URL":  "https://youtu.be/XDu4B75zz18",
            "Song":  "Show Them",
            "Views":  15685,
            "Type":  "Official Teaser Video",
            "Duration":  "0:29"
        },
        {
            "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) MISA",
            "Date":  "2024-08-09T11:00:30",
            "URL":  "https://youtu.be/KKJUY7g1UaU",
            "Song":  "Show Them",
            "Views":  14938,
            "Type":  "Official Teaser Video",
            "Duration":  "0:29"
        },
        {
            "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) KANAMI vs Dany  part 2",
            "Date":  "2024-08-12T11:00:23",
            "URL":  "https://youtu.be/QtdLS9CLkj8",
            "Song":  "Show Them",
            "Views":  14331,
            "Type":  "Official Teaser Video",
            "Duration":  "0:29"
        },
        {
            "Title":  "BAND-MAID / What is justice? ×『桃源暗鬼』  Special Music Video #shorts 2 (Anime Music Video Shorts 2)",
            "Date":  "2025-10-03T10:31:10",
            "URL":  "https://youtu.be/YltgGeE57LU",
            "Song":  "What is justice?",
            "Views":  12883,
            "Type":  "Anime Music Video Short",
            "Duration":  "0:41"
        },
        {
            "Title":  "Different (89sec Ver.)",
            "Date":  "2020-12-01T10:04:07",
            "URL":  "https://youtu.be/zjYoCChnNjw",
            "Song":  "Different",
            "Views":  11751,
            "Type":  "Audio",
            "Duration":  "1:31"
        },
        {
            "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) SAIKI vs Dany  part 2",
            "Date":  "2024-08-11T11:00:10",
            "URL":  "https://youtu.be/Cc30aTM0DVo",
            "Song":  "Show Them",
            "Views":  11061,
            "Type":  "Official Teaser Video",
            "Duration":  "0:29"
        },
        {
            "Title":  "BAND-MAID with The Warning / SHOW THEM (Official Teaser Video) SAIKI",
            "Date":  "2024-08-07T11:00:41",
            "URL":  "https://youtu.be/ccfzCEO2RC8",
            "Song":  "Show Them",
            "Views":  9794,
            "Type":  "Official Teaser Video",
            "Duration":  "0:29"
        },
        {
            "Title":  "endless Story",
            "Date":  "2019-10-02T11:00:23",
            "URL":  "https://youtu.be/MmhcEkgr_kY",
            "Song":  "endless Story",
            "Views":  9384,
            "Type":  "Audio",
            "Duration":  "3:45"
        },
        {
            "Title":  "Protect You (TVサイズ)",
            "Date":  "2024-10-08T06:04:40",
            "URL":  "https://youtu.be/JQTMWroS3So",
            "Song":  "Protect You",
            "Views":  7670,
            "Type":  "Audio",
            "Duration":  "1:37"
        },
        {
            "Title":  "glory",
            "Date":  "2019-01-15T10:01:50",
            "URL":  "https://youtu.be/-ZalwXFqleQ",
            "Song":  "glory",
            "Views":  5513,
            "Type":  "Audio",
            "Duration":  "3:36"
        },
        {
            "Title":  "secret MAIKO lips",
            "Date":  "2018-10-02T11:19:47",
            "URL":  "https://youtu.be/jjLrlvuPVqY",
            "Song":  "secret My lips",
            "Views":  4490,
            "Type":  "Audio",
            "Duration":  "4:28"
        },
        {
            "Title":  "BAND-MAID / Present Perfect (Official Music Video)",
            "Date":  "2025-10-18T00:24:37",
            "URL":  "https://youtu.be/yzSdgw-tdr0",
            "Song":  "",
            "Views":  1,
            "Type":  "Other",
            "Duration":  "0:00"
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
        meta.textContent = parts.join(' • ');
  
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
  