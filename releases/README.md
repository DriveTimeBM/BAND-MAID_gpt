# 📖 BAND-MAID Releases Dataset – Column Definitions #

This dataset (releases.tsv) lists BAND-MAID’s official releases, including albums, singles, live albums, and video/Blu-ray/DVD content.
The file is tab-delimited (.tsv) to avoid issues with commas in release names.

| Column          | Description                                                              | Example                                                 |
| --------------- | -------------------------------------------------------------------------| ------------------------------------------------------- |
| **Name**        | Full title of the release, usually including format.                     | `Just Bring It vinyl`                                   |
| **Work**        | The main work associated with the release (album, live concert, best-of).| `2018.4.13 Live at ZEPP TOKYO`                                         |
| **Type**        | Category of the release: `Album`, `Single`, `Live Video`, etc.           | `Album`                                                 |
| **URL**         | Link to an official purchase page (if available).                        | `https://bandmaidshop.com/products/...`                 |
| **Description** | Marketing or descriptive text about the release (from label/shop).       | `BAND-MAID Just Bring It (VINYL 2LP) [Limited Edition]` |
| **Media**       | Format and count of the main media included.                             | `Vinyl x 2`, `Blu-ray`, `CD+Blu-ray`                    |
| **Bonus Media** | If additional formats are bundled (e.g. DVD, Blu-ray disc).              | `Blu-ray`                                               |
| **Bonus Desc**  | Description of the bonus content.                                        | `Day of Maid Live 2024`                                 |
| **Publisher**   | Record label or distributor.                                             | `Nippon Crown`, `Pony Canyon`                           |

## 📝 Notes ##

Some releases appear in multiple formats (e.g., Blu-ray vs DVD). Each format is listed separately.

Bonus Media + Bonus Desc capture extras included in deluxe/limited editions (e.g., live footage, photo books).

URL may be blank if no longer available.

The dataset includes both audio releases (albums, singles) and video releases (concert Blu-rays/DVDs).

Snapshot date: 2025-09-28 (stream counts, availability, and URLs accurate as of this date).
