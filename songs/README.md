# 📖 BAND-MAID Songs Dataset – Column Definitions #

This dataset (songs.tsv) lists all known BAND-MAID songs, including release details, performance history, and metadata.
The file is tab-delimited (.tsv) to avoid issues with commas in song/album titles.

| Column                 | Description                                                                | Example                |
| ---------------------- | -------------------------------------------------------------------------- | ---------------------- |
| **Name**               | Official song title (always use this exact spelling in translations).      | `Choose me`            |
| **Alternative Name**   | Alternative title, nickname, or alternate spelling(s).                     | `ハニー` for *Honey*    |
| **Release Date**       | First official release date in `YYYY-MM-DD` format.                        | `2017-07-19`           |
| **Album**              | Primary Album, EP, or single where the song is a member.                   | `WORLD DOMINATION`     |
| **Has Music Video**    | `yes` if an official MV exists on YouTube, `no` otherwise.                 | `yes`                  |
| **Has Live Video**     | `yes` if an official live video exists on YouTube.                         | `yes`                  |
| **Instrumental Track** | `yes` if the song is an instrumental, i.e. no vocals.                      | `no`                   |
| **Kobato Lead**        | `yes` if Kobato Miku is the lead vocalist for the track.                   | `no`                   |
| **Live Count**         | Number of times the song has been performed live (approximate).            | `224`                  |
| **Spotify Streams**    | Total Spotify streams at time of snapshot (add snapshot date in notes).    | `14245079`           |
| **Lyrics By**          | Songwriting credit(s) for lyrics.                                          | `小鳩ミク [Kobato, Miku]`|
| **Music By**           | Songwriting credit(s) for music.                                           | `BAND-MAID`            |
| **Arrangement By**     | Arrangement credit(s).                                                     | `BAND-MAID`            |
| **Media Tie-in**       | If used in a movie, anime, drama, etc.                                     | `Netflix movie *Kate*` |
| **MAIKO version**      | Title if re-recorded as a BAND-MAIKO track.                                | `ansan`                |
| **Cover Of**           | If the track is a cover, original artist and title.                        | `MUCC "Honey"`         |
| **Collaboration**      | Guest artists or collaborative credits.                                    | *(blank if none)*      |
| **Fist Live Date**     | Date of first live performance.                                            | `2017-07-19`           |
| **First Live Perf**    | Venue of first live performance.                                           | `Shibuya Milkyway, Tokyo, Japan` |
| **YT Aggregate Views** | Total aggregate views on YouTube for all videos of the song.               | `222710`               |

🔗 **Direct link to the data**  
[https://drivetimebm.github.io/BAND-MAID_gpt/songs/songs.tsv](https://drivetimebm.github.io/BAND-MAID_gpt/songs/songs.tsv)

## 📝 Notes ##

Translation Rule: Always use the official title listed in the Name column. Do not translate or alter capitalization or punctuation.

Dynamic Data: Spotify Streams and Live Count change over time. Keep a note of the snapshot date when exporting.

Fan Usage: Alternative names (Alternative Name) are useful for translation, since fans or Japanese media may reference those.

BAND-MAIKO: All BAND-MAIKO songs are self-covers of previously released BAND-MAID songs with the exception of "Gion-cho" which has no BAND-MAID predecessor.
