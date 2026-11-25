# Study Tools

**By:** Matthew Parker · GU username: mparker13

**Live site:** FILL IN: your Cloudflare link (ends in `.pages.dev` or `.workers.dev`)

**Repo:** https://github.com/mjparker4/bmis235-html-4

## My path

Path 2 · Full build (Full AI route).

I went with Path 2 because I wanted to try building something with an AI that's connected straight to my GitHub repo, where it does the coding and commits and I make the calls. Building tools that help me study also seemed like a better way to show what I've learned than adding more sections to a site I'd already built.

## By hand vs by AI

**What I made by hand:** my HTML-3 site, which this repo started from. That includes the Home menu button I made in Excel and my brand in `styles.css`: ocean blue `#0077B6`, sunset orange `#F4A261`, and Verdana. I kept the brand for this site.

For HTML-4 I made the decisions and Claude did the building. I chose the Full AI route, told Claude I learn best by practicing, and decided to turn the site into study tools instead of keeping my Hawaii food pages. I asked for a quiz made from my own uploaded notes that works without AI, plus a cheat sheet that builds itself from those notes. Claude built a file-path trainer and then a CSS selector game along the way. I cut both and had it build Flashcards instead, so everything on the site works with your own notes.

**What AI made (Claude, using Claude Code connected to this repo):**
- Took out the HTML-3 food content: the Kalua Pork, Chicken Katsu, and Kalbi pages, their menu images, and the flip cards
- `index.html`, the new home page
- `quiz.html`, the Notes Quiz
- `flashcards.html`, the Flashcards
- `cheatsheet.html`, the Cheat Sheet, which turns your notes into one page sorted by section and flags what you missed
- `notes.js`, which all three pages share. It reads the notes, finds the definitions and sentences, saves the notes in the browser so every page uses the same ones, and keeps track of what you missed.
- The sample notes (accounting basics) you can try the tools with
- The Notes Quiz, Flashcards, and Cheat Sheet menu buttons, made to match my Home button
- The new sections of `styles.css`
- This README, written from what I told it

None of the tools use AI. The questions and cards are made by JavaScript that runs in the browser, and the notes never leave your computer.

**How I checked that everything works:**
- Claude tested all four pages in a headless Chrome browser. They all load, every image shows up, and every menu link goes to a real page.
- Notes Quiz: Claude made quizzes from the sample notes and from messy, real-looking class notes, then read every question to check that the right answer was right and the wrong answers made sense. That testing turned up bugs that got fixed: a blank that left a stray "s" behind ("_____s"), made-up plurals like "liabilitys" and "net incomes", wrong answers that repeated a word already in the sentence, and weak fill-in-the-blanks on random words.
- Flashcards: Claude checked that notes added on the quiz page show up on the flashcards page, played full rounds with the mouse and keyboard (Space to flip, 1 and 2 to sort), made sure the "still learning" round only brings back the cards I missed, and tested switching the front of the card to the definition. It also caught a bug on phones where the sort buttons showed before the card was flipped, which got fixed.
- Cheat Sheet: Claude checked that it splits notes into sections by their headings and updates as you type. It made sure the terms missed in the quiz and the cards marked "Still learning" show up flagged, that getting a card right later takes the flag off, and that search, the "Only what I need to review" filter, and clearing the flags all work. It also checked the print version, which drops the menu and buttons and fits the sample notes on one page.
- All three were tested with file uploads, a Word file they can't read (which shows a clear message), notes with no definitions in them, and a phone-sized screen.
- FILL IN: what you checked yourself on the live site

## My learning tool

**Concept it teaches:** FILL IN: the concept from HTML-1 to HTML-3 you load in as your notes to study (for example, links and images, or CSS selectors and the cascade). The tools teach whatever notes you give them, so they also work for any other class after BMIS 235.

**Why it's built for how I learn:** I learn by testing myself and finding out right away what I got wrong, not by rereading my notes over and over. The Notes Quiz turns definitions into "which term is this?" questions and sentences into fill-in-the-blanks. After every answer it shows the exact line from my notes, so I see what I missed while it's still fresh. The Flashcards are for drilling: I flip each card, mark it "Got it" or "Still learning," and the ones I'm still learning keep coming back until I know them all. When I'm done, the Cheat Sheet puts my notes on one page with everything I missed flagged, so I know exactly what to look at again before a test. All three use the same notes, so I add them once and switch between them.

**Classmate tester:** FILL IN: first name of your Path 1 classmate

**Change I made from their feedback:** FILL IN: what they said and what you changed
