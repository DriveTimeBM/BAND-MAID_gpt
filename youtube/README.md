# 📖 BAND-MAID YouTube Dataset – Column Definitions #

This dataset (youtube.tsv) catalogs official BAND-MAID YouTube videos including MVs, live videos, audio uploads, and shorts.
The file is tab-delimited (.tsv) to avoid issues with commas in titles or URLs.

🔗 **Direct link to the data**  
[https://drivetimebm.github.io/BAND-MAID_gpt/youtube/youtube.tsv](https://drivetimebm.github.io/BAND-MAID_gpt/youtube/youtube.tsv)

| Column       | Description                                                                                           | Example                                       |
| ------------ | ------------------------------------------------------------------------------------------------------| --------------------------------------------- |
| **Title**    | Full YouTube video title as published.                                                                | `BAND-MAID / Thrill (Official Music Video)`   |
| **Date**     | Upload date in `YYYY-MM-DD` format.                                                                   | `2014-08-20`                                  |
| **URL**      | Full YouTube video link.                                                                              | `https://youtu.be/jjLrlvuPVqY`                |
| **Song**     | Associated song (matches `songs.tsv` Name column where applicable). Leave blank for non-song content. | `DICE; Different`                             |
| **Views**    | Total view count at the time of snapshot.                                                             | `14245079`                                    |
| **Type**     | Category of video: `Official Music Video`, `Audio`, `Short` , etc.                                    | `Official Music Video`                        |
| **Duration** | Runtime in `m:ss` format.                                                                             | `4:12`                                        |

## 📺 YouTube Top 10 JSON ##

The `Top10.json` file contains daily snapshot data of the **Top 10 most-viewed BAND-MAID YouTube videos (by views yesterday)**.  
This allows tracking of trending videos over time, comparing **yesterday’s growth** with overall performance.  

### Data Format ###

Each entry in the JSON includes:  

| Key              | Type    | Description                                                                 |
|------------------|---------|-----------------------------------------------------------------------------|
| `Title`          | String  | The official YouTube video title.                                           |
| `ViewsYesterday` | Integer | The number of views gained yesterday (local to snapshot date).              |
| `TotalViews`     | Integer | The cumulative total views of the video at the time of snapshot.            |
| `URL`            | String  | Direct YouTube link to the video.                                           |

### Example Entry ###  

```json
{
  "Title": "BAND-MAID / Choose me (Official Music Video)",
  "ViewsYesterday": 2592,
  "TotalViews": 15388487,
  "URL": "https://youtu.be/MZIJ2vFxu9Y"
}
```

## 📝 Notes ##

- Snapshot Date: Views accurate as of the date in the TSV comment.

- Song Association: When multiple songs appear in one video (e.g., DICE;Different), list the primary one or separate with semicolons (;).

- Cross-Linking: Song titles should match the songs.tsv dataset exactly for consistency.
