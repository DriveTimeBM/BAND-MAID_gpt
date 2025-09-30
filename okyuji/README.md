# 📖 BAND-MAID Setlists Dataset – Column Definitions #

This dataset (setlists.tsv) catalogs BAND-MAID live performances with complete setlists.
The file is tab-delimited (.tsv) to avoid issues with commas in venue or song names.

| Column       | Description                                       | Example                                                                                   |
| ------------ | --------------------------------------------------| ----------------------------------------------------------------------------------------- |
| **Date**     | Concert date in `YYYY-MM-DD` format.              | `2024-11-26`                                                                              |
| **Venue**    | Name of the venue.                                | `Zepp Haneda (TOKYO)`                                                                     |
| **City**     | City where the performance took place.            | `Tokyo`                                                                                   |
| **Country**  | ISO country code or name.                         | `JP`                                                                                      |
| **Tour**     | Tour name associated with the show.               | `BAND-MAID ZEPP TOUR 2024`                                                                |
| **URL**      | Link to the corresponding setlist.fm page.        | `https://www.setlist.fm/setlist/bandmaid/2024/zepp-haneda-tokyo-tokyo-japan-b54193e.html` |
| **Sequence** | The order of the song within the performance.     | `1` (for opening song)                                                                    |
| **Song**     | The title of the performed song.                  | `Forbidden tale`                                                                          |
| **Set ID**   | Unique set id. Some dates have more than one set. | `1`,`2`,`3`                                                                               |

## 📝 Notes ##

Snapshot Date: 2025-09-28 (data accurate as of this date).

URL allows lookup on setlist.fm 

Spelling of song titles may not exactly match the English titles from the songs.tsv dataset.

Tour may be blank for one-off performances, festivals, etc.
