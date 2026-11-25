/*
  Author: Matthew Parker
  GU username: mparker13
  Course: BMIS 235 - HTML-4
  File: notes.js, shared by the Notes Quiz, Flashcards, and Cheat Sheet pages.
  Reads notes (pasted or uploaded), finds the definitions and sentences in them,
  and keeps the notes saved in this browser so every page uses the same ones.
*/
(function () {
  var KEY = "nq-notes";

  // the built-in lesson: head vs. body (HTML-1). It loads the first time you visit,
  // so the quiz, flashcards, and cheat sheet all teach it without any setup.
  // {{answer|wrong|wrong|wrong}} marks a fill-in-the-blank: the right answer, then three wrong ones,
  // all written by hand so every question has exactly one right answer.
  var SAMPLE = [
    "# The big picture",
    "Head: the part of a page that holds information about the page, which visitors don't see on the page itself",
    "Body: the part of a page that holds everything visitors see, like headings, paragraphs, images, and links",
    "Every HTML page has two main parts inside the <html> tag, the {{<head>|<footer>|<nav>|<title>}} and the <body>.",
    "The <head> comes first, and the {{<body>|<html>|<footer>|<!DOCTYPE html>}} comes right after it.",
    "A page should have only one {{<head>|<h2>|<img>|<p>}} and one <body>.",
    "{{<!DOCTYPE html>|<html>|<head>|<title>}} is the very first line of every page and tells the browser the page uses HTML5.",
    "",
    "# What goes in the head",
    "<title>: the text that shows in the browser tab",
    "Meta tag: a tag in the head that gives information about the page, like its character set or its author",
    "Stylesheet link: the <link> tag in the head that connects a page to its CSS file",
    "Nothing inside the head shows up on the page itself, but the text in the {{<title>|<meta>|<link>|<footer>}} shows up in the browser tab.",
    "<meta charset=\"utf-8\"> tells the browser which {{character set|stylesheet|author|screen size}} the page uses, so letters and symbols show up correctly.",
    "<meta name=\"author\" content=\"Matthew Parker\"> lists {{who made the page|the page's title|the stylesheet's file name|the menu links}}.",
    "The <link rel=\"stylesheet\" href=\"styles.css\"> tag belongs in the {{head|body|footer|nav}} and connects the page to styles.css.",
    "The viewport {{meta tag|footer|stylesheet link|title}} tells phones how to size the page to fit the screen.",
    "",
    "# What goes in the body",
    "<nav>: the tag that holds a page's menu of links",
    "<footer>: the tag at the bottom of a page for things like the author's name",
    "Headings like <h1> and <h2> go in the {{body|head|title|meta tag}}.",
    "Paragraphs, images, links, the menu, and the footer all go in the {{body|head|title|stylesheet link}}.",
    "An <img> tag in the body shows an image, and its {{alt|href|charset|rel}} text describes the image.",
    "",
    "# Common mistakes",
    "Putting the <title> in the body is a mistake, because the <title> belongs in the {{head|body|footer|nav}}.",
    "Putting a heading or a paragraph in the head is a mistake, because anything visitors should see goes in the {{body|head|title|meta tag}}.",
    "If the {{stylesheet link|title|author meta tag|footer}} is missing from the head, the page shows up in the browser's plain default styles instead of yours."
  ].join("\n");

  var NO_TERM_START = ["when", "if", "because", "since", "while", "to", "in", "on", "for", "after", "before", "so", "and", "but", "or",
    "with", "as", "at", "by", "from", "it", "this", "that", "these", "those", "they", "there", "he", "she", "we", "you", "i", "one", "each", "every", "some"];

  function norm(s) { return s.toLowerCase().replace(/[`"'“”‘’]/g, "").replace(/[.,;:!?]+$/, "").replace(/\s+/g, " ").trim(); }

  function cleanLine(line) {
    return line
      .replace(/^\s*(#{1,6}\s+|[-*•●◦–>]+\s+|\d+[.)]\s+|[a-z][.)]\s+)/i, "")
      .replace(/\*\*|__/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function goodTerm(t) {
    t = t.trim();
    if (!t || t.length > 50) return false;
    var first = t.split(/\s+/)[0].toLowerCase().replace(/[^a-z]/g, "");
    if (NO_TERM_START.indexOf(first) !== -1) return false;
    if (/[.!?]$/.test(t)) return false;
    if (t.split(/\s+/).length > 6) return false;
    if (/^https?$/i.test(t)) return false;
    return true;
  }
  function tidyTerm(t) { return t.trim().replace(/^(the|a|an)\s+/i, "").replace(/^["'`]|["'`]$/g, ""); }
  function dedupe(defs) {
    var seen = {};
    return defs.filter(function (d) { var k = norm(d.term); if (seen[k]) return false; seen[k] = true; return true; });
  }

  // {{answer|wrong|wrong}} -> just the answer, for showing the sentence normally
  var BLANK = /\{\{([^|}]+)((?:\|[^|}]+)*)\}\}/;
  function plain(s) { return s.replace(/\{\{([^|}]+)(?:\|[^|}]+)*\}\}/g, "$1"); }

  // finds definitions ("Term: meaning" or "Term is meaning"), full sentences,
  // and hand-written blanks ({{answer|wrong|wrong}})
  function parse(text) {
    var defs = [], sentences = [], blanks = [];
    text.split(/\r?\n/).forEach(function (raw) {
      var isHeading = /^\s*#{1,6}\s/.test(raw);
      var line = cleanLine(raw);
      if (!line || isHeading) return;
      var marked = line.indexOf("{{") !== -1;

      // "Term: definition", "Term - definition", "Term = definition"
      var m = marked ? null : line.match(/^([^:=]{1,50}?)\s*(?::|\s[-–—]\s|\s=\s)\s*(.{8,})$/);
      if (m && goodTerm(m[1]) && !/^\/\//.test(m[2])) { defs.push({ term: tidyTerm(m[1]), def: m[2].trim(), source: line }); return; }

      // "Term is/are/means/refers to definition"
      m = marked ? null : line.match(/^(.{1,45}?)\s+(is|are|means|refers to|stands for)\s+(.{8,})$/i);
      if (m && goodTerm(m[1]) && m[1].split(/\s+/).length <= 4) {
        defs.push({ term: tidyTerm(m[1]), def: m[3].replace(/[.]$/, "").trim(), verb: m[2].toLowerCase(), source: line });
        return;
      }

      // otherwise split into sentences
      line.replace(/([.!?])\s+(?=[A-Z<"`({])/g, "$1\n").split("\n").forEach(function (raw) {
        var s = plain(raw).trim();
        var words = s.split(/\s+/).length;
        if (words < 5 || words > 45) return;
        sentences.push(s);
        var b = raw.match(BLANK);
        if (b) {
          var quote = plain(raw.replace(BLANK, "\u0000")).replace("\u0000", "_____").trim();
          blanks.push({ sentence: s, quote: quote, answer: b[1].trim(), wrong: b[2].split("|").slice(1).map(function (w) { return w.trim(); }) });
        }
      });
    });
    return { defs: dedupe(defs), sentences: sentences, blanks: blanks };
  }

  // reads uploaded files as text. done(texts, skippedNames)
  function readFiles(files, done) {
    var list = Array.prototype.slice.call(files);
    if (!list.length) { done([], []); return; }
    var texts = [], skipped = [], left = list.length;
    function finish() { if (--left === 0) done(texts, skipped); }
    list.forEach(function (f) {
      var ok = /\.(txt|md|markdown|html?|css|csv)$/i.test(f.name) || /^text\//.test(f.type);
      if (!ok) { skipped.push(f.name); finish(); return; }
      var r = new FileReader();
      r.onload = function () {
        var t = String(r.result);
        if (/\.html?$/i.test(f.name)) {
          var doc = new DOMParser().parseFromString(t, "text/html");
          Array.prototype.forEach.call(doc.querySelectorAll("script, style, nav"), function (x) { x.remove(); });
          Array.prototype.forEach.call(doc.querySelectorAll("p, li, h1, h2, h3, h4, div, br, tr, pre"), function (x) { x.appendChild(doc.createTextNode("\n")); });
          t = doc.body ? doc.body.textContent : t;
        }
        texts.push(t.replace(/\n{3,}/g, "\n\n").trim());
        finish();
      };
      r.onerror = function () { skipped.push(f.name); finish(); };
      r.readAsText(f);
    });
  }

  // splits notes at headings ("# Chapter 4") and parses each part, for the Cheat Sheet
  function sections(text) {
    var out = [], cur = { heading: "", lines: [] };
    text.split(/\r?\n/).forEach(function (raw) {
      var h = raw.match(/^\s*#{1,6}\s+(.+?)\s*#*\s*$/);
      if (h) {
        if (cur.lines.join("").trim()) out.push(cur);
        cur = { heading: h[1].trim(), lines: [] };
      } else {
        cur.lines.push(raw);
      }
    });
    if (cur.lines.join("").trim()) out.push(cur);
    return out.map(function (sec) {
      var p = parse(sec.lines.join("\n"));
      return { heading: sec.heading, defs: p.defs, facts: p.sentences };
    }).filter(function (sec) { return sec.defs.length || sec.facts.length; });
  }

  // what you missed in the quiz or are still learning in the flashcards, so the Cheat Sheet can flag it
  var MISSED_KEY = "study-missed";
  function missed() { try { return JSON.parse(localStorage.getItem(MISSED_KEY) || "[]"); } catch (e) { return []; } }
  function setMissed(list) { try { localStorage.setItem(MISSED_KEY, JSON.stringify(list)); } catch (e) {} }
  function markMissed(key) { key = norm(key); var l = missed(); if (l.indexOf(key) === -1) { l.push(key); setMissed(l); } }
  function clearMissed(key) { key = norm(key); setMissed(missed().filter(function (k) { return k !== key; })); }
  function clearAllMissed() { setMissed([]); }

  function save(text) { try { localStorage.setItem(KEY, text); } catch (e) {} }
  function saved() {
    try { var v = localStorage.getItem(KEY); return v === null ? SAMPLE : v; } catch (e) { return SAMPLE; }
  }

  window.Notes = { SAMPLE: SAMPLE, parse: parse, plain: plain, sections: sections, readFiles: readFiles, save: save, saved: saved, norm: norm,
    missed: missed, markMissed: markMissed, clearMissed: clearMissed, clearAllMissed: clearAllMissed };
})();
