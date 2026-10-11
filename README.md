# Munna's Academy — React + Tailwind (full website)

Pages (src/pages):
- `/`                      Home (full-width banner, videos, scrolling notice board)
- `/about`                 About — "Shadow of Education"
- `/videos`                All classes
- `/videos/:classId`       Videos of one class (search + class chips)
- `/live-class`            Live Class
- `/informational-videos`  Informational Videos
- `/notice-board`          Notice Board (grouped, searchable)
- `/exam-ranking`          Exam Question / Ranking List
- `/contact`               Contact + map + message form

Shared: `src/components/` (Layout, Footer, AuthModals, PageHero, Reveal, ui).
Data: `src/data/homeData.js` (videos, notices, banner, contact info).

```
npm install
npm run dev
```

For a live server, make every URL open `index.html` (SPA fallback).
