# 🎸 BAND-MAID GPT Project

This repository powers a custom GPT designed to be a BAND-MAID translation and fan culture assistant.
Its primary goal is to provide accurate translations of BAND-MAID content (tweets, blogs, interviews, fan comments) while preserving band-specific terminology and cultural nuance. The BAND-MAID GPT only uses the glossary and the interviews. The GPT makes a good translator for BAND-MAID content out-of-the-box with no configuration.

I built the other data feeds *songs, releases, okyuji, youtube,* and *prime* in an attempt to make a very metric-aware GPT, but that was un unmitigated disaster. The GPT simply will make stuff up that's not in the data and is a complete waste of time for a user trying to get meaningful and accurate information out of it. The positive is that in the process I developed daily information feeds to this repository. So, anyone who wants to use this data in a programmatically convenient way to deal with is welcome to use it. All data is in TSV (TAB de-limited) format and there are README.md files in each folder to describe them.  The TSV files are updated every day (if information changes) at approximately 10:30 AM UTC. *songs* and *youtube* will change daily with updated counts. The others change less often.

## 📌 Features

- Glossary-based translations

- Always uses Romaji for BAND-MAID-specific terms (Okyuji, Sai-chan, Kanamincho).

- Preserves official song/album titles without re-translation.

- Explains puns, maid café expressions, and inside jokes.

- Interview formatting

- Questions begin with -

- Responses use Name (role): Answer format.

- Metadata includes Date, Publication, Interviewer, Translator, URLs.

- Knowledge base

- Curated TSV/Markdown files for songs, setlists, releases, YouTube stats, PRIME content, and glossary terms.

- Designed for fan Q&A, translations, and historical context.

## 📂 Repository Structure

| Folder     | Description                                                        |
|------------|--------------------------------------------------------------------|
| `glossary/`   | BAND-MAID-specific vocabulary and translation rules              |
| `interviews/` | Translated and original interviews in Markdown                   |
| `okyuji/`     | Show-by-show setlists in TSV                                     |
| `songs/`      | Complete discography in TSV                                      |
| `releases/`   | Albums, singles, live DVDs/Blu-rays in TSV                       |
| `youtube/`    | All BAND-MAID YouTube content with view counts                   |
| `prime/`      | BAND-MAID PRIME subscription content (scraped daily)             |
| `fanclub/`    | BAND-MAID fan club (OMEISYUSAMA-NO-KAI) subscription content     |
| `README.md`   | This file                                                        |

- Each folder includes its own README.md explaining the dataset schema.
