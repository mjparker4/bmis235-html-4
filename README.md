# HTML Study Lab

**By:** Matthew Parker · GU username: mparker13

**Live site:** FILL IN: your Cloudflare link (ends in `.pages.dev` or `.workers.dev`)

**Repo:** https://github.com/mjparker4/bmis235-html-4

## My path

Path 2 · Full build (Full AI route).

I picked this path because I wanted to see what it's like to build something with an AI that's connected straight to my repo, and because building a tool that teaches a concept is a better test of whether I actually understand it than adding more blocks to my site. *(Edit this into your own words.)*

## By hand vs by AI

**What I made by hand:** my HTML-3 site, which this repo started from, including the Home menu button I made in Excel and my brand in `styles.css` (ocean blue `#0077B6`, sunset orange `#F4A261`, Verdana font). For HTML-4 I decided what the site should become: a study site instead of my Hawaii food pages. I picked the concept (links and paths), told Claude to build around practice since that's how I learn, and asked for the Notes Quiz. FILL IN anything else you did by hand.

**What AI made (Claude, using Claude Code connected to this repo):**
- Took out the HTML-3 food content: the Kalua Pork, Chicken Katsu, and Kalbi pages, their menu images, and the flip cards
- `index.html`, the new home page
- `paths.html`, the Path Trainer (HTML and JavaScript)
- `quiz.html`, the Notes Quiz (HTML and JavaScript). It makes the questions with code that runs in the browser, not with AI.
- `cheatsheet.html`, the Cheat Sheet
- The Path Trainer, Notes Quiz, and Cheat Sheet menu buttons, made to match my Home button
- The new sections of `styles.css` for these pages
- The first draft of this README

**How I checked that everything works:**
- Claude tested the site in a headless Chrome browser. Every page loads, every image shows up, and every menu link works on all four pages.
- Path Trainer: Claude ran the path checker against about 25 right and wrong answers to make sure it accepts the right ones and explains the wrong ones correctly. It also played the "Fix the broken menu" mode automatically for 60 rounds to confirm each broken menu can be found and fixed.
- Notes Quiz: Claude generated quizzes from the sample notes and from messy, real-looking class notes, then read every question to check that the right answer is actually right. It also tested uploading a file, rejecting a Word file with a clear message, and keeping the notes after a refresh.
- FILL IN: what you checked yourself. For example: you clicked every link on the live Cloudflare site, played both Path Trainer modes, made a quiz from your own BMIS 235 notes, and read the Cheat Sheet to make sure it matches what we learned in class.

## My learning tool

**Concept it teaches:** Links and file paths, meaning how an `href` or `src` tells the browser where to find a file. The Path Trainer covers paths in the same folder (`quiz.html`), paths into a folder (`img/quiz.png`), and paths up a folder (`../styles.css`), plus the mistakes that break them: capital letters, a missing folder, a leading `/`, backslashes, and the wrong file extension. The Notes Quiz lets me quiz myself on the rest of HTML-1 to HTML-3 from my own notes, and the Cheat Sheet has the rules in one place.

**Why it's built for how I learn:** I learn best by practicing and getting feedback right away, not by reading a long explanation first. So the whole site is practice. In the Path Trainer I type real paths into real code, or test a broken menu like a visitor would and fix it. When I get something wrong, it shows step by step how the browser followed my path, highlights where it went off track in the folder tree, and tells me what to fix. The Notes Quiz turns my own notes into multiple-choice questions, and every answer shows the line from my notes it came from, so I can see right away what I missed. The rules are on the Cheat Sheet for when I need them. *(Edit this into your own words.)*

**Classmate tester:** FILL IN: first name of your Path 1 classmate

**Change I made from their feedback:** FILL IN: what they said and what you changed
