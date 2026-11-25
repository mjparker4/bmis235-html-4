# Notes Quiz

**By:** Matthew Parker · GU username: mparker13

**Live site:** FILL IN: your Cloudflare link (ends in `.pages.dev` or `.workers.dev`)

**Repo:** https://github.com/mjparker4/bmis235-html-4

## My path

Path 2 · Full build (Full AI route).

I went with Path 2 because I wanted to try building something with an AI that's connected straight to my GitHub repo, where it does the coding and commits and I make the calls. Building a tool that helps me study also seemed like a better way to show what I've learned than adding more sections to a site I'd already built.

## By hand vs by AI

**What I made by hand:** my HTML-3 site, which this repo started from. That includes the Home menu button I made in Excel and my brand in `styles.css`: ocean blue `#0077B6`, sunset orange `#F4A261`, and Verdana. I kept the brand for this site.

For HTML-4 I made the decisions and Claude did the building. I chose the Full AI route, told Claude I learn best by practicing, and decided to turn the site into a study tool instead of keeping my Hawaii food pages. I asked for a quiz that's made from my own uploaded notes and that works without AI. Claude also built a few other practice pages along the way (a file-path trainer, a CSS selector game, and a cheat sheet). I cut those so the site is focused on one tool that does one thing well.

**What AI made (Claude, using Claude Code connected to this repo):**
- Took out the HTML-3 food content: the Kalua Pork, Chicken Katsu, and Kalbi pages, their menu images, and the flip cards
- `index.html`, the new home page that explains the quiz
- `quiz.html`, the Notes Quiz (HTML and JavaScript). The questions are made by code that runs in the browser, not by AI.
- The sample notes built into the quiz, covering HTML-1 to HTML-3
- The Notes Quiz menu button, made to match my Home button
- The new sections of `styles.css` for these pages
- This README, written from what I told it

**How I checked that everything works:**
- Claude tested both pages in a headless Chrome browser. They load, every image shows up, the menu links work, and the Start a quiz button goes to the quiz.
- Claude made quizzes from the built-in HTML notes, from messy, real-looking class notes, and from my accounting notes (assets, liabilities, equity), then read every question to check that the right answer was actually right and the wrong answers made sense. That testing turned up bugs that got fixed: a blank that left a stray "s" behind ("_____s"), plurals like "liabilitys", and wrong answers that repeated a word already in the sentence.
- It also tested uploading a file, getting a clear message for a Word file it can't read, keeping the notes after a refresh, and going through a full quiz to the score screen.
- FILL IN: what you checked yourself on the live site

## My learning tool

**Concept it teaches:** HTML-1 to HTML-3 basics. The quiz comes loaded with sample notes on page structure (`<head>` vs `<body>`, `<title>`, tags, elements, attributes), links and images (`href`, `src`, `alt`, relative paths), and CSS (stylesheets, selectors, the cascade). It works with notes from any class, so I can keep using it after BMIS 235.

**Why it's built for how I learn:** I learn by testing myself and finding out right away what I got wrong, not by rereading my notes over and over. The Notes Quiz does that with my own notes. Definitions turn into "which term is this?" and "which one describes this?" questions, and full sentences turn into fill-in-the-blanks. After every answer it shows the exact line from my notes the question came from, so I can see what I missed while it's still fresh. At the end I can retry just the ones I got wrong, and the questions get mixed up every time I make a new quiz.

**Classmate tester:** FILL IN: first name of your Path 1 classmate

**Change I made from their feedback:** FILL IN: what they said and what you changed
