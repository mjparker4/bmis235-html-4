# My Top 3 Hawaii Foods + Path Trainer

**By:** Matthew Parker · GU username: mparker13

**Live site:** FILL IN: your Cloudflare link (ends in `.pages.dev` or `.workers.dev`)

**Repo:** https://github.com/mjparker4/bmis235-html-4

## My path

Path 2 · Full build (Full AI route).

I picked this path because I wanted to see what it's like to build something with an AI that's connected straight to my repo, and because building a tool that teaches a concept is a better test of whether I actually understand it than adding more blocks to my site. *(Edit this into your own words.)*

## By hand vs by AI

**What I made by hand (HTML-1 to HTML-3):** the original site. That's the home page and the Kalua Pork, Chicken Katsu, and Kalbi pages, all the writing about each food, the menu button images I made in Excel, and `styles.css` with my brand colors (ocean blue `#0077B6`, sunset orange `#F4A261`) and Verdana font.

**What AI made (Claude, using Claude Code connected to this repo):**
- `paths.html`, the Path Trainer page, including all of its HTML, its JavaScript, and the Path Trainer section at the bottom of `styles.css`
- `img/paths.png`, the Path Trainer menu button, made to match my other buttons
- Adding the Path Trainer button to the menu on every page, and updating the author comments to HTML-4
- Replacing the placeholder email link on the home page with my real one
- The first draft of this README

**How I checked that everything works:**
- Claude tested the site in a headless Chrome browser: every page loads, every image shows up, and every menu link goes to a real page on all five pages.
- Claude ran the path checker against about 25 right and wrong answers (capital letters, a missing `img/`, `../` mistakes, backslashes, typos, wrong extensions) to make sure it accepts the right ones and explains the wrong ones correctly.
- Claude played 60 rounds of "Fix the broken menu" automatically to confirm every broken menu really has exactly one bad path that can be found and fixed, and checked the layout on a phone-sized screen.
- FILL IN: what you checked yourself. For example: you clicked every link on every page of the live Cloudflare site, played a few rounds of both modes, and read the rules box to make sure the explanations match what we learned in HTML-1 to HTML-3.

## My learning tool

**Concept it teaches:** Links and file paths, meaning how an `href` or `src` tells the browser where to find a file. It covers paths in the same folder (`kalbi.html`), paths into a folder (`img/kalbi.png`), and paths up a folder (`../styles.css`), plus the mistakes that break them: capital letters, a missing folder, a leading `/`, backslashes, and the wrong file extension.

**Why it's built for how I learn:** I learn best by practicing and getting feedback right away, not by reading a long explanation first. So the tool is all practice. In **Write the path** you type the real path into a line of code and check it. In **Fix the broken menu** you test a menu like a visitor would, find the broken line, and fix it. When I get something wrong, it doesn't just say "wrong." It shows step by step how the browser followed my path, highlights where it went off track in the folder tree, and tells me what to fix. The rules are tucked away in a box at the bottom, so I only read them when I need them. It also uses my own site's real folders and menu, so the practice is the same thing I actually do when I build pages. *(Edit this into your own words.)*

**Classmate tester:** FILL IN: first name of your Path 1 classmate

**Change I made from their feedback:** FILL IN: what they said and what you changed
