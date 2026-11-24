# HTML Study Lab

**By:** Matthew Parker · GU username: mparker13

**Live site:** FILL IN: your Cloudflare link (ends in `.pages.dev` or `.workers.dev`)

**Repo:** https://github.com/mjparker4/bmis235-html-4

## My path

Path 2 · Full build (Full AI route).

I went with Path 2 because I wanted to try building something with an AI that's connected straight to my GitHub repo, where it does the coding and commits and I make the calls. Building a tool that teaches something also seemed like a better way to show I understand HTML and CSS than adding more sections to a site I'd already built.

## By hand vs by AI

**What I made by hand:** my HTML-3 site, which this repo started from. That includes the Home menu button I made in Excel and my brand in `styles.css`: ocean blue `#0077B6`, sunset orange `#F4A261`, and Verdana. I kept the brand for this site.

For HTML-4 I made the decisions and Claude did the building. I chose the Full AI route, told Claude I learn best through practice, and decided to turn the site into a study site instead of keeping my Hawaii food pages. I asked for the Notes Quiz and for it to work without AI. I also had Claude replace its first learning tool (a file-path trainer) with something else, which became the Selector Lab.

**What AI made (Claude, using Claude Code connected to this repo):**
- Took out all the HTML-3 food content: the Kalua Pork, Chicken Katsu, and Kalbi pages, their menu images, and the flip cards
- `index.html`, the new home page
- `selectors.html`, the Selector Lab (HTML and JavaScript)
- `quiz.html`, the Notes Quiz (HTML and JavaScript). The questions are made by code that runs in the browser, not by AI.
- `cheatsheet.html`, the Cheat Sheet
- The Selector Lab, Notes Quiz, and Cheat Sheet menu buttons, made to match my Home button
- The new sections of `styles.css` for these pages
- This README, written from what I told it

**How I checked that everything works:**
- Claude tested every page in a headless Chrome browser. All four pages load, every image shows up, and every menu link goes to a real page.
- Selector Lab: Claude solved all 11 levels with the intended answers and with other correct selectors (like `nav > a` or `h2, h1`) to make sure any selector that matches the right elements counts. It also tried common mistakes, like leaving off the period (`note`), using brackets (`<p>`), mixing up `#` and `.`, and adding a space in `p .tip`, to make sure each one gets the right explanation. It also checked that progress is saved after a refresh and that the page works on a phone-sized screen.
- Notes Quiz: Claude made quizzes from the sample notes and from messy, real-looking class notes, then read every question to check that the right answer was actually right. It also tested uploading a file, getting a clear message for a Word file it can't read, and keeping the notes after a refresh.
- FILL IN: what you checked yourself on the live site

## My learning tool

**Concept it teaches:** CSS selectors from HTML-3, meaning how the first part of a CSS rule picks which elements get styled. The Selector Lab goes from tag selectors (`p`) to classes (`.note`), ids (`#main-title`), a tag and class together (`p.tip`), "inside" selectors (`nav a`), and grouping (`h1, h2`). The last level is `.menu-item em`. One level uses `nav img`, the same selector my stylesheet uses to size the menu buttons on this site.

**Why it's built for how I learn:** I learn by doing things and seeing right away whether I got them right, not by reading a long explanation first. So the Selector Lab is all practice. I type a selector, and the page preview shows what it matches while I'm still typing: green for right, red for something it shouldn't match, and a dashed outline for what I still need. If my selector is wrong, it tells me why, like "classes need a period" or "a space means inside." The rules are tucked into a box at the bottom for when I actually need them. The Notes Quiz works the same way with my own class notes: every answer shows the line from my notes it came from, so I can see right away what I missed.

**Classmate tester:** FILL IN: first name of your Path 1 classmate

**Change I made from their feedback:** FILL IN: what they said and what you changed
