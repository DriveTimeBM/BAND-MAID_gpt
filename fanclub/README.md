# BAND-MAID Fan Club (OMEISYUSAMA-NO-KAI) Video and Photo Gallery Archive

This dataset (`fanclub.tsv`) catalogs exclusive videos released on BAND-MAID’s official fan club **OMEISYUSAMA-NO-KAI**.  
Videos are only viewable by subscribers, but this index preserves the metadata for reference and research.

📌 **Snapshot date:** 2025-09-29

---

## 📂 File: `fanclub.tsv`

### FanClub Columns

| Column       | Description                                                                                                         |
|--------------|---------------------------------------------------------------------------------------------------------------------|
| **Title**    | Video title as listed on the site. May include English or Japanese, sometimes descriptors like “Behind the Scenes”. |
| **Category** | Roughly categorized based on title (e.g. `[BTS]`, `[VOICE MESSAGE SAIKI]`, `[LIVE REPORT]`).                        |
| **URL**      | Direct link to the video page on bandmaid.tokyo (membership required to view).                                      |
| **Date**     | Publication date, if provided by the site. May be missing for older entries.                                        |

---

### 🎬 FanClub Categories

The **Category** field is derived heuristically from video titles. Current known categories include:

- **[BTS]** → Behind-the-scenes footage from MVs, tours, or studio.  
- **[VOICE MESSAGE …]** → Audio/video fan messages, usually member-specific.  
- **[OTHER]** → Miscellaneous fan club exclusives that don’t fit the above.
- *(Categories may evolve as more scrapes are added.)*

---

### 🔒 FanClub Access Notes

- All URLs point to **bandmaid.tokyo** and require a valid **OMEISYUSAMA-NO-KAI membership** to play.  
- Titles and categories are included here so GPT can reference the content, but **videos cannot be embedded or redistributed**.  

---

### 🛠️ FanClub Usage

This TSV can be used for:

- Cross-referencing **exclusive content vs. public releases**.  
- Tracking the **evolution of BAND-MAID fan club media**.  
- Enriching GPT answers about **member-exclusive behind-the-scenes material**.  

---

## 📂 File: `gallery.tsv`

Catalog of video content available to Fan Club members.

---

### Gallery Columns

| Column   | Description |
|----------|-------------|
| **Title** | Name of the gallery (e.g., tour stop, festival appearance). |
| **URL** | Direct link to the gallery page (requires membership). |
| **Date** | Date the gallery was published. |

### Gallery Notes

- Galleries typically feature photos from tours, festivals, and special events.  
- Titles often correspond directly to specific shows or appearances.  

---

### 🔒 Gallery Access Notes

- All URLs point to **bandmaid.tokyo** and require an **OMEISYUSAMA-NO-KAI subscription**.  
- This archive provides metadata only — **video and gallery media cannot be accessed without login**.  

---

### 🛠️ Gallery Usage

- Enables GPT to answer queries about **what exclusive Fan Club content exists**.  
- Differentiates Fan Club content from **BAND-MAID PRIME**, which is tracked separately in the `prime/` folder.  
- Useful for **cross-referencing tour dates, releases, and behind-the-scenes material**.

### 📅 Updates

The dataset is updated by scraping the fan club site. Each file includes a **snapshot date** in the header row.  
Future updates should overwrite or version this file to maintain continuity.
