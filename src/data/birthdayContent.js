// ============================================================
//  BIRTHDAY LETTER — All Editable Content
//  Edit this file to personalize every word, photo, and detail
// ============================================================

export const content = {

  // ─────────────────────────────────────
  //  BASIC INFO
  // ─────────────────────────────────────
  recipient: 'Riruka',       // The birthday person's name
  sender:    'Teki',       // Your name
  date:      'September 11',    // Their birthday date (optional display)


  // ─────────────────────────────────────
  //  HERO SECTION  (first screen visitor sees)
  // ─────────────────────────────────────
  hero: {
    greeting:   'Vanakkam..🙏🏼',
    subtitle:   'Indha Special day la..\nIndha Letter ah marandhu irupan nu nenaichiya..😁',
    buttonText: 'Open the Letter',
  },


  // ─────────────────────────────────────
  //  OPENING LETTER  (the paper card section)
  // ─────────────────────────────────────
  letter: {
    salutation:  'Itoshii obaka Riruka,',
    paragraphs: [
      'Enna letter or mail varathu nu nenaichiya..😂​ enaku creative avlo varathu.. so idhulam unkita irundhu dha copy adipan.. I know how to create things technically.. indha website AI ah irundhalum design ellam naa panathu.. chennai la cake cut pani, gift kuduthu celebrate pananum nenaichan.. but still naa edho try pani irukan pudikum ah pudikatha trla..😅​',
      'I don’t want to keep repeating the same things I said last year.. but while writing this letter, I was thinking about pakathula irundha po eh paka mudiyathu ipo vera vers state eh vandhutom ana frdship lam andha distance trla ana these calls and messages are what keep us connected. This year, like you already said, I think I’m starting to understand what friendship and being colleagues really mean. You’ve taught me so many small things without even realizing it. I don’t know if you’ve ever got anything useful from me, but I want you to know that I’ll always be un Polambura frd uh..🫂​',
      'We’ve shared so many things with each other and I think that’s what makes our friendship so special. but indha kuda betrayal romba nerukamana kuda nadandhum.. even nee love panavagakita irundhu kuda set agala nu therinju you’ve moved forward from everything. The way you handle things and still keep going without letting anything bring you down really says a lot about you. ',
      'believe someone who is right for you will come into your life 🩷​, Ana first uh indha company ah change panu 🤣, like you’ve been saying and this year, go explore all those places you always wanted to visit. I really hope that from now on, only good things happen to you, because you genuinely deserve them.🫂​'
    ],
    closing:     'Always your ami..,',
    signature:   'Teki..',
    stampText:   'Amie spé',    // Text on the decorative stamp
    sealInitial: 'H',            // Initial on the wax seal (your initial)
  },


  // ─────────────────────────────────────
  //  MEMORY SECTIONS  (parallax full-screen)
  //  Add or remove objects from this array
  // ─────────────────────────────────────
  memories: [
    {
      id:       'beginning',
      eyebrow:  'Thodagiya Naatkal',
      title:    'From tuition friend to forever friend..',
      body:     'Yarune theriyaama start aana namma first chapter, innaiku enga vandhu nikkuthu paaru, Actually tuition time memories ah nenaichi paakkumbodhu eppovume oru thani feel dhaan.. avlo pleasant ah irukkum...',
      image:    '/riruka.github.io/assets/memory-1.jpg',   // ← Add your photo here (or leave blank for gradient)
      gradient: 'radial-gradient(ellipse 80% 60% at 30% 50%, #1a2830 0%, #0a1015 100%)',
      year:     '2020',
      align:    'left',                   // 'left' or 'right'
    },
    {
      id:       'journey',
      eyebrow:  'Nagarum Naatkal',
      title:    'From forever friend to best friend..',
      body:     '350m pakura distance la irundhu ipo 350km call la pesura avaluku poituchu.. Namba characters maariduchu.. physical appearance maariduchu.. aana namma frdship mattum innum marave illa..',
      image:    '/riruka.github.io/assets/memory-2.jpg',   // ← Add your photo here
      gradient: 'radial-gradient(ellipse 80% 60% at 70% 40%, #2e1810 0%, #0d0804 100%)',
      year:     '2022',
      align:    'right',
    },
  ],


  // ─────────────────────────────────────
  //  POLAROID GALLERY  (photo cards)
  //  rotation: slight tilt in degrees
  // ─────────────────────────────────────
  galleryTitle:    'Blissful Memories',
  gallerySubtitle: 'Kaalathil uraindha tharunangal',

  photos: [
    { src: '/riruka.github.io/assets/photo-1.jpg', caption: 'Random',   rotation: -3,   gradient: 'linear-gradient(160deg, #1a1208 0%, #2e2010 100%)' },
    { src: '/riruka.github.io/assets/photo-2.jpg', caption: 'Your laugh',            rotation:  2,   gradient: 'linear-gradient(160deg, #0a1015 0%, #1a2530 100%)' },
    { src: '/riruka.github.io/assets/photo-3.jpg', caption: 'This moment',           rotation: -1.5, gradient: 'linear-gradient(160deg, #10150a 0%, #202510 100%)' },
    { src: '/riruka.github.io/assets/photo-4.jpg', caption: 'Always',                rotation:  3,   gradient: 'linear-gradient(160deg, #15100a 0%, #2a2015 100%)' },
  ],


  // ─────────────────────────────────────
  //  LITTLE THINGS SECTION
  // ─────────────────────────────────────
  littleThingsTitle:    'The little things',
  littleThingsSubtitle: 'that make you, you',

  littleThings: [
    'The way you laugh at your own jokes before you finish telling them',
    'How you make even an ordinary Tuesday feel like a small adventure',
    'Your inexplicable ability to always find the best table in any room',
    'The fact that you always know exactly the right thing to say',
    'How your eyes light up when you talk about things you love',
    'The way you make everyone around you feel completely seen',
    'Your collection of half-finished journals and fully-finished stories',
    'That you remember the small details no one else ever notices',
  ],


  // ─────────────────────────────────────
  //  WHY YOU'RE SPECIAL  (word-by-word reveal)
  //  One powerful sentence — keep it short!
  // ─────────────────────────────────────
  specialReveal: 'Our fate lives within us.. You only have to be brave enough to see it..',


  // ─────────────────────────────────────
  //  BIRTHDAY LETTER  (the main long letter)
  // ─────────────────────────────────────
  birthdayLetter: {
    title:      'A letter, for your birthday',
    paragraphs: [
      'Joyeux anniversaire, Riruka !!! 🎂💗',
      'Once again, happy birthday, Hema. ❤️ naa namburan you’re going to have so many more happy moments in your life. Last time, naa sonnala unaku kulla oru chinna ponu irukanu aprm naa nenaichan that girl isn’t there anymore. But I think one thing we all can do is change. Not just because of time, but because of the people around us and the things we go through. Still, the way you rebuild yourself and keep moving towards your next step is something that makes you special always..🫂',
      'I still trying to understand that what the meaning of relationship really is, but the way you care about your friends and your family has made me realise that these things are worth more than I ever thought And thank you, Hema, for giving me a space where I could share everything with you and the times I was feeling low, the times I was happy and all the random things in between us ellathayum listen pani iruka🤗. naanum unaku apdi irukum nu try panikitu irukan but I think only you know how much it actually means.',
      'We’ve planned so many things to meet eachother and somehow always end up meeting only for a few hours or mins but even that small amount of time feels really happy and special. Even now, chennai ku varanum nu yosika vaikura oru person la neeyum onu..☺️ Sometimes I feel like we should have stayed in our tuition days forever, but look how far we’ve come from there.😌',
      'Maybe we didn’t get some of the things we once wished for but that doesn’t mean we should stop holding on to the things we truly love😄. We still have so many places to go and so many things to do together😅. We will go, right?🤨​ I know I’ve said it before, but you’ll always be one of my special friends..💙',
      'This time, one movie quote kept coming to my mind: “Let’s make a promise to be best friends forever?.. Friends forever!.. Year by year, upon this we’ll always swear..” epdiyum idhu endha movie nu find panurathu konjam kastam still guess panu animated movie dha.. kandupudichiko..!! 😌. Whatever comes next, For now, just keep being happy, keep smiling and epovum sirichikitu eh iruku.. I still miss those laughs..🥺​ This year is going to be your best year..💝',
    ],
    closing:   'Your\'s always,',
    signature: 'Divas..',
  },


  // ─────────────────────────────────────
  //  FINAL SURPRISE  (confetti ending)
  // ─────────────────────────────────────
  final: {
    announcement:   'Happy Birthday,',
    name:           'Hemalatha!!!',
    message:        'May this be your most beautiful year yet.',
    quote:          '"That might sound boring, but I think the boring stuff is the stuff I remember the most."',
    quoteAuthor:    '- A reminder, for you',
    confettiColors: ['#c9a96e', '#e8c98a', '#f2e6d0', '#c4848a', '#ffffff', '#a07840'],
  },


  // ─────────────────────────────────────
  //  MUSIC  (optional background music)
  //  → Add your MP3 to /public/assets/music.mp3
  // ─────────────────────────────────────
  music: {
    enabled: true,
    src:     '/assets/music.mp3',
  },
}
