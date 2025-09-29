# 📖 BAND-MAID YouTube Dataset – Column Definitions #

This dataset (youtube.tsv) catalogs official BAND-MAID YouTube videos including MVs, live videos, audio uploads, and shorts.
The file is tab-delimited (.tsv) to avoid issues with commas in titles or URLs.

| Column       | Description                                                                                           | Example                                       |
| ------------ | ------------------------------------------------------------------------------------------------------| --------------------------------------------- |
| **Title**    | Full YouTube video title as published.                                                                | `BAND-MAID / Thrill (Official Music Video)`   |
| **Date**     | Upload date in `YYYY-MM-DD` format.                                                                   | `2014-08-20`                                  |
| **URL**      | Full YouTube video link.                                                                              | `https://youtu.be/jjLrlvuPVqY`                |
| **Song**     | Associated song (matches `songs.tsv` Name column where applicable). Leave blank for non-song content. | `Thrill`                                      |
| **Views**    | Total view count at the time of snapshot.                                                             | `14245079`                                    |
| **Type**     | Category of video: `Official Music Video`, `Audio`, `Short` , etc.                                    | `Official Music Video`                        |
| **Duration** | Runtime in `mm:ss` format.                                                                            | `04:12`                                       |

## 📝 Notes ##

- Snapshot Date: Views accurate as of 2025-09-28.

- Song Association: When multiple songs appear in one video (e.g., medleys), list the primary one or separate with commas.

- Cross-Linking: Song titles should match the songs.tsv dataset exactly for consistency.
