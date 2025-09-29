# 📖 BAND-MAID Interviews Dataset

This folder contains interview transcripts with BAND-MAID members, formatted in Markdown (.md) for use in the BAND-MAID GPT project.
Interviews capture context, band commentary, and background insights on songs, albums, tours, and band activities.

## 📂 File Naming Convention

Files are named as follows:
YYYY-MM-DD_Publication_ID.md

- YYYY-MM-DD → Date of publication (or interview if publication date unknown).

- Publication → Source (e.g., Burrn, Natalie, Barks).

- ID → Unique identifier from Access database (ensures uniqueness).

- _JP → Suffix used for Japanese originals if both English and Japanese versions exist.

Examples:

- 2023-07-31_Burrn_Japan_40.md → English translation of Burrn! Japan interview on July 31, 2023.

- 2023-07-31_Burrn_Japan_40_JP.md → Original Japanese text of the same interview.

## 📊 File Structure

Each interview Markdown file follows this template:

```# Interview Title

**Date:** YYYY-MM-DD  
**Publication:** Publication Name  
**Interviewer:** Name(s)  
**Translator:** Name (if available)  
**Translation URL:** [link-to-translation]  
**Original URL:** [link-to-original]  

---

Interview introduction text...

- Interviewer question?  
Member Name (role): Response text...  

- Next question?  
Another Member: Response...
```

## 📝 Notes

- Current Status: Only English versions are included (35 interviews as of snapshot). Japanese originals will be added later with _JP suffix.

- Consistency: All interviews use Q&A format, where interviewer questions begin with - and band member responses use Name (role):.

- Cross-Referencing: Interviews can be linked to songs, releases, or setlists using consistent song names from songs.tsv.

- Expansion: Adding Japanese originals will allow GPT to re-translate interviews using the BAND-MAID glossary, ensuring glossary terms (e.g., Okyuji, OMEISYUSAMA) are consistently applied.

