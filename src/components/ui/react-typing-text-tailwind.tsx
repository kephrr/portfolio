import { useEffect, useMemo, useState } from "react";

/**
 * TypingText — typewriter animation for React + Tailwind
 *
 * Props:
 *  - words: string[]                   // phrases to cycle through
 *  - typingSpeed?: number              // ms per character when typing (default 75)
 *  - deletingSpeed?: number            // ms per character when deleting (default 40)
 *  - pauseTime?: number                // ms to wait after a word is fully typed before deleting (default 900)
 *  - transitionPause?: number          // ms to wait after deleting a word before typing the next (default 250)
 *  - loop?: boolean                    // loop through all words (default true)
 *  - cursor?: boolean                  // show blinking caret (default true)
 *  - className?: string                // Tailwind classes for the text
 */
function TypingText({
  words,
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseTime = 900,
  transitionPause = 250,
  loop = true,
  cursor = true,
  className = "text-3xl md:text-5xl font-semibold tracking-tight",
}: {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  transitionPause?: number;
  loop?: boolean;
  cursor?: boolean;
  className?: string;
}) {
  const safeWords = useMemo(() => words.filter(Boolean), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const done = !loop && wordIndex >= safeWords.length;

  useEffect(() => {
    if (!safeWords.length || done) return;

    const current = safeWords[wordIndex % safeWords.length];
    const isWordComplete = charIndex === current.length && !isDeleting;
    const isWordEmpty = charIndex === 0 && isDeleting;

    let timeout = typingSpeed;

    // Si c'est le dernier mot et loop=false, on ne supprime jamais
    if (!loop && wordIndex === safeWords.length - 1 && isWordComplete) {
      return; // reste affiché indéfiniment
    }

    if (isWordComplete) {
      timeout = pauseTime;
      setIsDeleting(true);
    } else if (isWordEmpty) {
      setIsDeleting(false);
      setWordIndex((i) => (loop ? (i + 1) % safeWords.length : i + 1));
      timeout = transitionPause;
    } else {
      timeout = isDeleting ? deletingSpeed : typingSpeed;
    }

    const id = setTimeout(() => {
      if (isDeleting) {
        setCharIndex((n) => Math.max(0, n - 1));
      } else {
        setCharIndex((n) => Math.min(current.length, n + 1));
      }
    }, timeout);

    return () => clearTimeout(id);
  }, [safeWords, wordIndex, charIndex, isDeleting, typingSpeed, deletingSpeed, pauseTime, transitionPause, loop, done]);

  const text = safeWords.length && !done ? safeWords[wordIndex % safeWords.length].slice(0, charIndex) : "";

  return (
    <span className={`inline-flex items-center ${className}`}>
      {text}
      {cursor && (
        <span
          aria-hidden
          className="ml-0.5 h-[1em] w-[1px] bg-current"
          style={{ animation: "blink 1s step-start infinite" }}
        />
      )}
      <style>{`@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:0}}`}</style>
    </span>
  );
}

export default function TypingDemo() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-white text-slate-900 flex items-center justify-center p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenue 👋</h1>
        <p className="text-slate-600 mb-8">Exemple d'animation d'écriture qui reste affichée après le mot final.</p>

        <TypingText
          words={[
            "Mon texte s'écrit normalement."
          ]}
          typingSpeed={70}
          deletingSpeed={40}
          pauseTime={3000} // pause 3s avant effacement
          transitionPause={300}
          loop={false}      // ne boucle pas
          cursor
          className="text-2xl md:text-4xl font-semibold"
        />

      </div>
    </div>
  );
}

export { TypingText };
