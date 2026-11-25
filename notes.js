/*
  Author: Matthew Parker
  GU username: mparker13
  Course: BMIS 235 - HTML-4
  File: notes.js, shared by the Notes Quiz and Flashcards pages.
  Reads notes (pasted or uploaded), finds the definitions and sentences in them,
  and keeps the notes saved in this browser so both pages use the same ones.
*/
(function () {
  var KEY = "nq-notes";

  // sample notes for trying the tools out
  var SAMPLE = [
    "# Accounting basics",
    "Asset: something a business owns or controls that will bring it future benefit",
    "Liability: an amount a business owes to someone else",
    "Equity: the owners' claim on the business after liabilities are subtracted from assets",
    "Revenue: money a business earns from selling goods or services",
    "Expense: a cost a business uses up to earn revenue",
    "Net income: revenue minus expenses for a period of time",
    "Accounts receivable: money customers owe the business for things they already received",
    "Accounts payable: money the business owes suppliers for things it already received",
    "Depreciation: spreading the cost of a long-term asset over the years it gets used",
    "",
    "# Financial statements",
    "Assets always equal liabilities plus equity, which is called the accounting equation.",
    "The balance sheet shows assets, liabilities, and equity on one date.",
    "The income statement shows revenue and expenses over a period of time.",
    "The statement of cash flows shows cash coming in and going out over a period of time.",
    "",
    "# Debits and credits",
    "Debit: an entry on the left side of an account",
    "Credit: an entry on the right side of an account",
    "Every journal entry has at least one debit and one credit, and total debits always equal total credits.",
    "Debits increase assets and expenses.",
    "Credits increase liabilities, equity, and revenue.",
    "Accrual accounting records revenue when it's earned and expenses when they're incurred, not when cash changes hands."
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

  // finds definitions ("Term: meaning" or "Term is meaning") and full sentences
  function parse(text) {
    var defs = [], sentences = [];
    text.split(/\r?\n/).forEach(function (raw) {
      var isHeading = /^\s*#{1,6}\s/.test(raw);
      var line = cleanLine(raw);
      if (!line || isHeading) return;

      // "Term: definition", "Term - definition", "Term = definition"
      var m = line.match(/^([^:=]{1,50}?)\s*(?::|\s[-–—]\s|\s=\s)\s*(.{8,})$/);
      if (m && goodTerm(m[1]) && !/^\/\//.test(m[2])) { defs.push({ term: tidyTerm(m[1]), def: m[2].trim(), source: line }); return; }

      // "Term is/are/means/refers to definition"
      m = line.match(/^(.{1,45}?)\s+(is|are|means|refers to|stands for)\s+(.{8,})$/i);
      if (m && goodTerm(m[1]) && m[1].split(/\s+/).length <= 4) {
        defs.push({ term: tidyTerm(m[1]), def: m[3].replace(/[.]$/, "").trim(), verb: m[2].toLowerCase(), source: line });
        return;
      }

      // otherwise split into sentences
      line.replace(/([.!?])\s+(?=[A-Z<"`(])/g, "$1\n").split("\n").forEach(function (s) {
        var words = s.split(/\s+/).length;
        if (words >= 5 && words <= 45) sentences.push(s.trim());
      });
    });
    return { defs: dedupe(defs), sentences: sentences };
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

  function save(text) { try { localStorage.setItem(KEY, text); } catch (e) {} }
  function saved() { try { return localStorage.getItem(KEY) || ""; } catch (e) { return ""; } }

  window.Notes = { SAMPLE: SAMPLE, parse: parse, readFiles: readFiles, save: save, saved: saved, norm: norm };
})();
