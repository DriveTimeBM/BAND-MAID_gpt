# BAND-MAID GPT – Event Calendar

This project enhances the **Unofficial BAND-MAID GPT** by adding support for upcoming event tracking. The calendar data is provided in a structured JSON format (`calendar.json`), making it easy to integrate with chat responses, fan tools, or visualizations.

## 📅 Features

* Stores **upcoming BAND-MAID events** in a machine-readable JSON file.
* Covers birthdays, live shows, tour finals, and release dates.
* Provides both **local start time** and **Japan Standard Time (JST)**. ("local" is US EST)
* Includes **location data** (venue names and addresses) when available.

## 📂 Data Structure (`calendar.json`)

Each event is stored as a JSON object with the following keys:

```json
{
  "Summary": "Event name",
  "Start_Local": "YYYY-MM-DDTHH:MM:SS",
  "Description": "Extra info (optional)",
  "Location": "Venue details (optional)",
  "Start_Japan": "YYYY-MM-DDTHH:MM:SS"
}
```

### Example:

```json
{
  "Summary": "TOKYO GARDEN THEATER",
  "Start_Local": "2025-12-07T03:00:00",
  "Description": "Tour Final - OPEN 16:00",
  "Location": "Tokyo Garden Theater, 2-chōme-1-6 Ariake, Koto City, Tokyo 135-0063, Japan",
  "Start_Japan": "2025-12-07T17:00:00"
}
```

## 🚀 Usage

* Load `calendar.json` into BAND-MAID GPT for real-time event queries.
* Use it to generate **human-friendly responses** (e.g., “Next live show is at Namba Hatch on Oct 24, 2025”).
* Can be extended with visualization tools (timeline, countdowns, fan calendars).

## 📝 Notes

* This feed obtains all data from this [public Google calendar](https://calendar.google.com/calendar/embed?src=rgbhex99-bandmaidotd%40yahoo.com&ctz=Asia%2FTokyo) maintained by me.
