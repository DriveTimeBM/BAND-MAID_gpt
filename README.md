# 🎸🥁🎤 BAND-MAID GPT Project 🎸🥁🎤

This repository powers a custom GPT designed to be a BAND-MAID translation and fan culture assistant.
Its primary goal is to provide accurate translations of BAND-MAID content (tweets, blogs, interviews, fan comments) while preserving band-specific terminology and cultural nuance. The BAND-MAID GPT only uses the glossary and the interviews. The GPT makes a good translator for BAND-MAID content out-of-the-box with no configuration. In addition to the BAND-MAID glossary the GPT has absorbed 18 English-translated BAND-MAID articles. All articles are in the *interviews* folder. I have also provided it with a very brief history of BAND-MAID in the *glossary/BAND-MAID Overview.md* file. (GPTs have a 20 file max) So, the GPT has a *pretty good* overall awareness of BAND-MAID and their history, but it's just prone to getting the details of almost anything wrong.
It can read certain metrics on the fly from this repository. Trying to load metrics into its core knowledge base was a complete disaster, although that's how ChatGPT suggested I do it.
If you force it to read metrics via **Actions** it will respect the data and not invent its owm. The tsv files are from my original training strategy and no longer needed for this project. Since I created the feeds, there's no reason to remove them.
They are generally more comprehensive than the JSON files due to GPT limits, but are still updated by me just like the JSON. Maybe someone could use them. It's
essentially a super simple API someone could read from (The GPT does exactly that). The data is updated daily.

## 🔗 The GPT is here

[https://chatgpt.com/g/g-68db200d63cc819190a84f2ff7cbf58f-band-maid-gpt](https://chatgpt.com/g/g-68db200d63cc819190a84f2ff7cbf58f-band-maid-gpt)

💬 **Queries to Try**

- “Translate this magazine interview:"
- "Get upcoming BAND-MAID events."
- "What do you know about Kanami?"
- "Why does Kobato say 'po'?"
- "Give me an overview of BAND-MAID."
- "What were the top videos on YouTube yesterday?"
- "Which BAND-MAID articles have you uploaded?"
- "What is in your glossary?"
- "What actions are you configured for that you need to access an external API?"

🎓 **View the training articles here:**  

- Interviews: [https://github.com/DriveTimeBM/BAND-MAID_gpt/blob/main/interviews/index.md](https://github.com/DriveTimeBM/BAND-MAID_gpt/blob/main/interviews/index.md/)
- Glossary: [https://github.com/DriveTimeBM/BAND-MAID_gpt/blob/main/glossary/glossary.md](https://github.com/DriveTimeBM/BAND-MAID_gpt/blob/main/glossary/glossary.md)
- Overview: [https://github.com/DriveTimeBM/BAND-MAID_gpt/blob/main/glossary/BAND-MAID%20Overview.md](https://github.com/DriveTimeBM/BAND-MAID_gpt/blob/main/glossary/BAND-MAID%20Overview.md)

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

- Curated JSON files for songs, setlists, releases, YouTube stats, PRIME content, and glossary terms.

- Designed for fan Q&A, translations, and historical context.

## 📂 Repository Structure

| Folder        | Description                                                      |
|---------------|------------------------------------------------------------------|
| `glossary/`   | BAND-MAID-specific vocabulary and translation rules              |
| `interviews/` | Translated and original interviews in Markdown                   |
| `okyuji/`     | Show-by-show setlists in JSON                                    |
| `songs/`      | Complete discography in JSON                                     |
| `releases/`   | Albums, singles, live DVDs/Blu-rays in JSON                      |
| `youtube/`    | All BAND-MAID YouTube content with view counts                   |
| `prime/`      | BAND-MAID PRIME subscription content (scraped daily)             |
| `fanclub/`    | BAND-MAID fan club (OMEISYUSAMA-NO-KAI) subscription content     |
| `README.md`   | This file                                                        |

- Each folder includes its own README.md explaining the dataset schema.

### 👨‍💻 Technical Note

There is nothing that actually ties the GPT to this repository other than the JSON files that it can read directly when asked about certain topics.
The GPT got the "training data" files from me uploading them directly. The repository mostly exists to have public visibility into everything that the GPT is trained on. I have kept the stuff the the GPT does not use because there was no reason not to. The data may be useful to someone.
