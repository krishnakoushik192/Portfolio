import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

type Line = { text: string; className: string; pauseAfter?: number };

const LINES: Line[] = [
  {
    text: 'I care about building things that make a difference.',
    className: 'heading-4 text-ink md:heading-2',
    pauseAfter: 600,
  },
  { text: 'Experiences that feel simple, yet powerful.', className: 'heading-6 text-ink-muted md:heading-5' },
  { text: 'Apps that are fast, intuitive, and reliable.', className: 'heading-6 text-ink-muted md:heading-5' },
  { text: 'Interfaces that feel natural to interact with.', className: 'heading-6 text-ink-muted md:heading-5' },
  {
    text: 'Technology that solves real-world problems.',
    className: 'heading-6 text-ink-muted md:heading-5',
    pauseAfter: 700,
  },
  {
    text: "Because great software isn't just about how it works. It's about how it feels.",
    className: 'heading-5 text-accent-ink md:heading-4',
  },
];

const CHAR_MS = 28;
const LINE_PAUSE_MS = 250;
const TOTAL = LINES.reduce((n, l) => n + l.text.length, 0);

/**
 * Types the lines out once when the section scrolls into view, with a
 * blinking caret. Untyped text is rendered transparent so the layout never
 * shifts. Screen readers get the full text; reduced motion shows it at once.
 */
const TaglineReveal: React.FC = () => {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || reduce || typed >= TOTAL) return;
    // Pause a little longer at the end of each line.
    let offset = 0;
    let delay = CHAR_MS;
    for (const line of LINES) {
      offset += line.text.length;
      if (typed === offset) {
        delay = line.pauseAfter ?? LINE_PAUSE_MS;
        break;
      }
    }
    const id = window.setTimeout(() => setTyped((n) => n + 1), delay);
    return () => window.clearTimeout(id);
  }, [started, reduce, typed]);

  const shown = reduce ? TOTAL : typed;
  // Caret sits on the first line that isn't finished, or the last line when done.
  let caretLine = LINES.length - 1;
  for (let i = 0, end = 0; i < LINES.length; i++) {
    end += LINES[i].text.length;
    if (shown < end) {
      caretLine = i;
      break;
    }
  }
  let offset = 0;

  return (
    <section ref={sectionRef} aria-labelledby="care-title" className="bg-surface-sunken">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-12 md:py-32">
        <p id="care-title" className="eyebrow mb-8">
          What I care about
        </p>

        {/* Full text for assistive tech. */}
        <div className="sr-only">
          {LINES.map((l) => (
            <p key={l.text}>{l.text}</p>
          ))}
        </div>

        <div className="flex max-w-[880px] flex-col" aria-hidden>
          {LINES.map((line, i) => {
            const start = offset;
            offset += line.text.length;
            const count = Math.max(0, Math.min(line.text.length, shown - start));
            const showCaret = i === caretLine;
            const gap = i === 0 ? 'mb-8' : i === LINES.length - 2 ? 'mb-10' : 'mb-3';

            return (
              <p key={line.text} className={`${line.className} ${gap}`}>
                <span>{line.text.slice(0, count)}</span>
                {showCaret && (
                  // Plain inline span: shares the text's line box, adds no width
                  // (negative margins cancel the border) and no wrap points.
                  <span className="-ml-px -mr-0.5 border-l-[3px] border-accent motion-safe:animate-caret" />
                )}
                <span className="text-transparent">{line.text.slice(count)}</span>
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TaglineReveal;
