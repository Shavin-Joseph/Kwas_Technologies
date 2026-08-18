"use client";

import { useState } from "react";

import { CTA } from "@/components/CTA";
import { FileText, Copy, CheckCircle2, Clock, Volume2, Sparkles, Award, BarChart3, Eraser } from "lucide-react";

export function WordCounterTool() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  // Core metrics
  const cleanWordsArray = text.trim() === "" ? [] : text.toLowerCase().match(/\b[a-z0-9]+\b/g) || [];
  const words = cleanWordsArray.length;
  const charsWithSpaces = text.length;
  const charsNoSpaces = text.replace(/\s+/g, "").length;
  const sentences = text.trim() === "" ? 0 : text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphs = text.trim() === "" ? 0 : text.split(/\n+/).filter(Boolean).length;

  // Syllable approximation for Flesch Reading Ease Score
  const countSyllables = (word: string) => {
    word = word.toLowerCase();
    if (word.length <= 3) return 1;
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
    word = word.replace(/^y/, "");
    const syllables = word.match(/[aeiouy]{1,2}/g);
    return syllables ? syllables.length : 1;
  };

  const totalSyllables = cleanWordsArray.reduce((acc, word) => acc + countSyllables(word), 0);

  // Flesch Reading Ease Formula: 206.835 - 1.015 * (totalWords / totalSentences) - 84.6 * (totalSyllables / totalWords)
  const fleschScore =
    words > 0 && sentences > 0
      ? Math.max(0, Math.min(100, Math.round(206.835 - 1.015 * (words / sentences) - 84.6 * (totalSyllables / words))))
      : 100;

  const getFleschGrade = (score: number) => {
    if (score >= 90) return "Very Easy (5th Grade)";
    if (score >= 80) return "Easy (6th Grade)";
    if (score >= 70) return "Fairly Easy (7th Grade)";
    if (score >= 60) return "Standard (8th & 9th Grade)";
    if (score >= 50) return "Fairly Difficult (High School)";
    if (score >= 30) return "Difficult (College)";
    return "Very Difficult (Graduate)";
  };

  // Top Keyword Frequency
  const getKeywordFrequency = () => {
    const freq: Record<string, number> = {};
    const stopWords = new Set(["the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for", "of", "with", "is", "it", "that", "this", "you"]);
    cleanWordsArray.forEach((word) => {
      if (!stopWords.has(word) && word.length > 2) {
        freq[word] = (freq[word] || 0) + 1;
      }
    });

    return Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  };

  const topKeywords = getKeywordFrequency();

  const readingTimeMinutes = Math.max(1, Math.ceil(words / 200));
  const speakingTimeMinutes = Math.max(1, Math.ceil(words / 130));

  const twitterMax = 280;
  const instagramMax = 2200;
  const linkedinMax = 3000;
  const seoMetaMax = 160;

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toUppercase = () => setText(text.toUpperCase());
  const toLowercase = () => setText(text.toLowerCase());
  const toTitleCase = () =>
    setText(
      text.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      )
    );

  const cleanSpaces = () => setText(text.replace(/\s+/g, " ").trim());
  const stripHtml = () => setText(text.replace(/<[^>]*>?/gm, ""));
  const clearText = () => setText("");

  return (
    <>
      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
          {/* Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1 font-mono text-xs font-semibold text-amber mb-4">
              <FileText size={14} />
              <span>Pro Text Intelligence &amp; Keyword Analyzer</span>
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl">
              Word Counter &amp; Text Intelligence
            </h1>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Count <strong className="text-fg">words, characters, readability index, and keyword density</strong> with live social media trackers.
            </p>
          </div>

          {/* Live Metrics Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-amber/30 bg-panel/70 p-5 text-center shadow-lg">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-amber">{words}</div>
              <div className="mt-1 font-mono text-xs text-muted uppercase tracking-wider">Words</div>
            </div>
            <div className="rounded-2xl border border-line bg-panel/70 p-5 text-center shadow-lg">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-fg">{charsWithSpaces}</div>
              <div className="mt-1 font-mono text-xs text-muted uppercase tracking-wider">Characters</div>
            </div>
            <div className="rounded-2xl border border-line bg-panel/70 p-5 text-center shadow-lg">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-fg">{sentences}</div>
              <div className="mt-1 font-mono text-xs text-muted uppercase tracking-wider">Sentences</div>
            </div>
            <div className="rounded-2xl border border-line bg-panel/70 p-5 text-center shadow-lg">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-fg">{fleschScore}/100</div>
              <div className="mt-1 font-mono text-[11px] text-amber uppercase font-semibold">Readability Score</div>
            </div>
          </div>

          {/* Text Area Workspace */}
          <div className="mt-8 rounded-2xl border border-line bg-panel/70 p-6 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={toUppercase}
                  className="rounded-lg border border-line bg-panel2 px-3 py-1.5 font-mono text-xs text-muted hover:text-fg"
                >
                  UPPERCASE
                </button>
                <button
                  onClick={toLowercase}
                  className="rounded-lg border border-line bg-panel2 px-3 py-1.5 font-mono text-xs text-muted hover:text-fg"
                >
                  lowercase
                </button>
                <button
                  onClick={toTitleCase}
                  className="rounded-lg border border-line bg-panel2 px-3 py-1.5 font-mono text-xs text-muted hover:text-fg"
                >
                  Title Case
                </button>
                <button
                  onClick={cleanSpaces}
                  className="rounded-lg border border-line bg-panel2 px-3 py-1.5 font-mono text-xs text-muted hover:text-fg flex items-center gap-1"
                >
                  <Eraser size={13} /> Clean Spaces
                </button>
                <button
                  onClick={stripHtml}
                  className="rounded-lg border border-line bg-panel2 px-3 py-1.5 font-mono text-xs text-muted hover:text-fg"
                >
                  Strip HTML
                </button>
                <button
                  onClick={clearText}
                  className="rounded-lg border border-line bg-panel2 px-3 py-1.5 font-mono text-xs text-muted hover:text-red-400"
                >
                  Clear
                </button>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-lg bg-amber px-4 py-1.5 font-mono text-xs font-semibold text-ink shadow-md"
              >
                {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                {copied ? "Copied!" : "Copy Text"}
              </button>
            </div>

            <textarea
              rows={9}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste or type your text here to analyze words, keyword density, and readability level live..."
              className="w-full rounded-xl border border-line bg-panel2 p-4 text-sm text-fg placeholder:text-faint focus:border-amber focus:outline-none transition-colors resize-y font-mono leading-relaxed"
            />

            {/* Readability & Time Summary */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-4 text-xs font-mono text-muted">
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-amber" />
                <span>Reading Time: <strong className="text-fg">{words > 0 ? readingTimeMinutes : 0} min</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Volume2 size={15} className="text-amber" />
                <span>Speaking Time: <strong className="text-fg">{words > 0 ? speakingTimeMinutes : 0} min</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={15} className="text-amber" />
                <span>Readability: <strong className="text-amber">{getFleschGrade(fleschScore)}</strong></span>
              </div>
            </div>
          </div>

          {/* Top Keyword Density Table */}
          {topKeywords.length > 0 && (
            <div className="mt-8 rounded-2xl border border-line bg-panel/70 p-6 shadow-lg">
              <h3 className="font-display text-sm font-bold text-fg flex items-center gap-2 mb-4">
                <BarChart3 size={16} className="text-amber" />
                Top Keyword Density Breakdown
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {topKeywords.map(([word, count]) => {
                  const percent = ((count / words) * 100).toFixed(1);
                  return (
                    <div key={word} className="rounded-xl border border-line bg-panel2 p-3 text-center">
                      <div className="font-mono text-xs font-bold text-fg capitalize">{word}</div>
                      <div className="mt-1 font-mono text-xs text-amber font-semibold">{count} times ({percent}%)</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>
        <CTA />
    </>
  );
}
