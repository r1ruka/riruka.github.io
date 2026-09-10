# 🎂 Birthday Letter — Cinematic Interactive Birthday Website

A premium, emotional, scroll-based birthday experience.  
**One file to edit. Runs in minutes.**

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

To build for production:
```bash
npm run build
npm run preview
```

---

## How to Personalize (Edit ONE file)

Open **`src/data/birthdayContent.js`** — this is the only file you need to edit.

### Names & Basic Info
```js
recipient: 'Sofia',    // ← The birthday person's name
sender:    'Marco',    // ← Your name
date:      'March 14', // ← Their birthday
```

### Hero Section
```js
hero: {
  greeting:   'For You,',         // Large opening title
  subtitle:   'Your subtitle...',  // Handwritten-style subtitle
  buttonText: 'Open the Letter',   // Button label
},
```

### Opening Letter
```js
letter: {
  salutation:  'My dearest Sofia,',
  paragraphs: [
    'First paragraph...',
    'Second paragraph...',
    'Third paragraph...',
  ],
  closing:     'With all my love,',
  signature:   'Marco',
  stampText:   'With Love',   // Stamp text
  sealInitial: 'M',           // Initial on the wax seal
},
```

### Memory Sections (Parallax)
Add as many as you want. Each is a full-screen section:
```js
memories: [
  {
    eyebrow: 'Chapter I',
    title:   'How it all began',
    body:    'Your memory text...',
    image:   '/assets/memory-1.jpg',  // ← Your photo (or leave for gradient)
    year:    '2020',
    align:   'left',  // or 'right'
  },
  // Add more objects here...
],
```

### Polaroid Photos
```js
photos: [
  { src: '/assets/photo-1.jpg', caption: 'Caption here', rotation: -3 },
  { src: '/assets/photo-2.jpg', caption: 'Caption here', rotation:  2 },
  // Add up to 4+ photos
],
```

### Little Things (personal notes grid)
```js
littleThings: [
  'The way you laugh...',
  'How you always...',
  // Add or remove items freely
],
```

### Word-by-Word Reveal
One powerful sentence — keep it SHORT:
```js
specialReveal: 'You are the kind of person who...',
```

### Birthday Letter (main long letter)
```js
birthdayLetter: {
  title: 'A letter, for your birthday',
  paragraphs: [
    'First paragraph...',
    'Add as many paragraphs as you like...',
  ],
  closing:   'Yours, always,',
  signature: 'Marco',
},
```

### Final Section
```js
final: {
  announcement: 'Happy Birthday,',
  name:         'Sofia',
  message:      'May this be your most beautiful year yet.',
  quote:        '"Your favorite quote here..."',
  quoteAuthor:  '— Source',
},
```

---

## How to Add Photos

1. Put your image files in the **`public/assets/`** folder
2. Reference them in `birthdayContent.js` like:
   ```js
   image: '/assets/memory-1.jpg'
   src:   '/assets/photo-1.jpg'
   ```

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`  
If a photo is missing, a beautiful gradient placeholder shows instead — no broken images.

---

## How to Add Background Music

1. Add an MP3 file to **`public/assets/music.mp3`**
2. Make sure in `birthdayContent.js`:
   ```js
   music: {
     enabled: true,
     src: '/assets/music.mp3',
   }
   ```
3. A music toggle button appears bottom-right (play/pause)
4. If no music file is found, the button hides itself automatically

---

## Project Structure

```
birthday-letter/
├── public/
│   └── assets/           ← Put photos & music here
│       ├── memory-1.jpg
│       ├── photo-1.jpg
│       └── music.mp3
│
├── src/
│   ├── data/
│   │   └── birthdayContent.js  ← ✏️  EDIT THIS FILE
│   │
│   ├── components/
│   │   ├── Hero.jsx            Opening cinematic section
│   │   ├── Letter.jsx          Vintage paper letter card
│   │   ├── MemorySection.jsx   Parallax story sections
│   │   ├── PolaroidGallery.jsx Floating photo cards
│   │   ├── LittleThings.jsx    Personal notes grid
│   │   ├── WhyYoureSpecial.jsx Word-by-word reveal
│   │   ├── BirthdayLetter.jsx  Long letter + typewriter
│   │   ├── FinalSurprise.jsx   Confetti ending
│   │   ├── FloatingParticles.jsx Ambient particles
│   │   └── MusicToggle.jsx     Music button
│   │
│   ├── App.jsx                 Root layout
│   ├── main.jsx                Entry point
│   └── index.css               All styles + design tokens
│
├── index.html
├── vite.config.js
└── package.json
```

---

## Tech Stack

| Library | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| Framer Motion 11 | All animations (scroll, reveal, parallax) |
| canvas-confetti | Final surprise confetti |
| Google Fonts | Cormorant Garamond, Caveat, EB Garamond, Inter |

---

## Deploying

**Vercel (recommended — free):**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm run build
# Drag the dist/ folder to netlify.com/drop
```

**GitHub Pages:**
Add `base: '/your-repo-name/'` to `vite.config.js`, then:
```bash
npm run build
# Push dist/ to your gh-pages branch
```

---

## Tips

- **Fonts not loading?** You need an internet connection the first time (Google Fonts). After that they're cached.
- **Confetti not firing?** The FinalSurprise triggers when you scroll to that section. Scroll all the way down.
- **Music autoplay blocked?** Browsers block autoplay — this is expected. The user must click the ♪ button themselves.
- **Animations too fast on mobile?** The site respects `prefers-reduced-motion` — users with that setting get instant transitions.
