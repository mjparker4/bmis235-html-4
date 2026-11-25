# Head vs. Body

**Name:** Matthew Parker

**GU username:** mparker13

**Live site:** https://bmis235-html-4.mparker13.workers.dev

**Repo:** https://github.com/mjparker4/bmis235-html-4

## My path

Path 2 · Full build.

I went with Path 2 because I wanted to try building something with an AI that's connected straight to my GitHub repo, where it does the coding and commits and I make the calls. Building a tool that teaches a concept also seemed like a better test of whether I understand it than adding more sections to a site I'd already built.

## By hand vs. by AI

**What I made:** my HTML-3 site, which this repo started from. That includes the Home menu button I made in Excel and my brand in `styles.css`: ocean blue `#0077B6`, sunset orange `#F4A261`, and Verdana. I kept the brand for this site.

For HTML-4 I made the decisions and the AI did the building. I told it I learn best by testing myself, and decided to turn the site into a learning tool instead of keeping my Hawaii food pages. I asked for a quiz, flashcards, and a cheat sheet that all work from the same notes, run without AI, and can take my own notes from any class. The AI tried a file-path trainer and a CSS selector game along the way, and I cut both. When I asked it to make the site match the rubric, it picked head vs. body as the concept and built that lesson into all three tools.

**What AI made, and which tool:** Claude (Claude Code, connected to this repo) wrote and committed all of the HTML-4 code:
- Took out the HTML-3 food pages, their menu images, and the flip cards
- `index.html`: the home page, which explains head vs. body with an annotated example page
- `quiz.html`: the Notes Quiz
- `flashcards.html`: the Flashcards
- `cheatsheet.html`: the Cheat Sheet, which lays out the lesson on one printable page and flags anything I missed in the quiz or flashcards
- `notes.js`: shared by all three tools. It holds the Head vs. Body lesson, reads uploaded notes, finds the definitions and sentences, and remembers what I missed.
- The Notes Quiz, Flashcards, and Cheat Sheet menu buttons, made to match my Home button
- The new parts of `styles.css`
- A first draft of this README

None of the tools use AI when you use them. The questions and cards are made by JavaScript in the browser, and your notes never leave your computer.

**How I checked it works and teaches correctly:**
- **Accuracy:** Claude checked every fact in the Head vs. Body lesson. The first version picked wrong answers automatically, and a review of every question it could make found real problems. Some questions had two right answers, like plain `<link>` and the full `<link rel="stylesheet">` both being offered for "____ belongs in the head." Another blanked "head" inside the word "heading." So every fill-in-the-blank in the lesson now has its right answer and three wrong answers written by hand, and each wrong answer was checked to make sure it's actually wrong.
- **Everything works:** Claude tested all four pages in Chrome. Every page loads, every image shows up, every link on every page goes to a real page, and every page has the author meta tag and footer. It played the full quiz, the flashcards (mouse and keyboard), and the cheat sheet (search, the review filter, and printing). It also checked that misses in the quiz and flashcards get flagged on the cheat sheet, that uploading notes and using your own notes still works, and that everything fits a phone screen.
- FILL IN: what you checked yourself on the live site

Every change was committed with a message that describes it.

## My learning tool

**Concept it teaches:** Head vs. body. The head holds information about the page that visitors don't see on it, like the `<title>`, `<meta>` tags, and the stylesheet `<link>`. The body holds everything visitors see, like headings, paragraphs, images, the `<nav>` menu, and the `<footer>`. The lesson also covers `<!DOCTYPE html>`, the order of the two parts, and common mistakes, like putting the `<title>` in the body.

**Why it's built for how I learn:** I learn by testing myself and finding out right away what I got wrong, not by rereading notes. So the lesson is all practice. The Notes Quiz gives me fill-in-the-blanks and "which term is it?" questions, and after every answer it shows the exact line from the lesson it came from, so I see what I missed while it's fresh. The Flashcards keep bringing back the cards I'm still learning until I know them all. The Cheat Sheet puts the whole lesson on one page with everything I missed flagged, so I know exactly what to review. I can also load my own notes from any class into all three.

**Classmate tester:** James

**Change I made from their feedback:** James tested the site and said the quiz would be easier to read with a different font and background color. So the quiz now uses a cleaner, larger font with darker text. Questions sit on a light yellow background so they stand out from the answers, and the blank in each fill-in-the-blank shows as a blue line instead of underscores. The answer buttons are bigger, with white backgrounds and darker borders.
