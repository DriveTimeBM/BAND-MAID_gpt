# 📖 BAND-MAID PRIME Dataset – Column Definitions

This dataset (prime.tsv) catalogs the content available in BAND-MAID PRIME, the band’s official subscription service.
It includes live recordings, rehearsal footage, self-cover videos, and member talk sessions.
The file is tab-delimited (.tsv) to handle titles containing commas.

🔗 **Direct link to the data**  
[https://drivetimebm.github.io/BAND-MAID_gpt/prime/prime.tsv](https://drivetimebm.github.io/BAND-MAID_gpt/prime/prime.tsv)

| Column       | Description                                                                                          | Example                            |
| ------------ | ---------------------------------------------------------------------------------------------------- | ---------------------------------- |
| **Title**    | Official content title as listed on PRIME. May include live show name, song name, or category label. | `Thrill (Self-Cover – Kanami)`     |
| **URL**      | Direct link to the PRIME video. Requires active subscription to view.                                | `https://prime.bandmaid.tokyo/xyz` |
| **Category** | Content type: `OKYUJI`, `Self-Cover`, `Talk`, `Rehearsal`, or `Other`.                               | `Self-Cover`                       |

## 📝 Notes

Access Restriction: All URLs require a BAND-MAID PRIME membership to access.

Category Definitions:

- OKYUJI → Full live show recordings, or in some cases, standalone live songs not available elsewhere.

- Self-Cover → Camera isolated on one member performing their instrument/vocal part of a song.

- Talk → One-on-one member discussions with English subtitles.

- Rehearsal → Behind-the-scenes footage from pre-show soundchecks.

- Other → Content not falling into the above categories.

Song Title Variations: Song names may occasionally differ slightly from official titles (capitalization, spacing, punctuation). These should be normalized against songs.tsv if cross-referencing is needed.
