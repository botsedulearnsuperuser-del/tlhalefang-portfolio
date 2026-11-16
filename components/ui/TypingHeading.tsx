"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Securing Systems,",
  "Recovering Evidence,",
  "Building Web Apps",
];

const TYPING_SPEED = 85;
const DELETING_SPEED = 45;
const HOLD_AFTER_TYPING = 1400;
const HOLD_AFTER_DELETING = 350;

const TypingHeading = ({ className = "" }: { className?: string }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const phrase = phrases[phraseIndex];

  useEffect(() => {
    let delay = deleting ? DELETING_SPEED : TYPING_SPEED;

    if (!deleting && length === phrase.length) {
      delay = HOLD_AFTER_TYPING;
    } else if (deleting && length === 0) {
      delay = HOLD_AFTER_DELETING;
    }

    const timer = setTimeout(() => {
      if (!deleting && length === phrase.length) {
        setDeleting(true);
      } else if (deleting && length === 0) {
        setDeleting(false);
        setPhraseIndex((current) => (current + 1) % phrases.length);
      } else {
        setLength((current) => current + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [length, deleting, phrase]);

  return (
    <div
      className={`flex min-h-[6rem] md:min-h-[5.5rem] items-center justify-center ${className}`}
      aria-live="polite"
    >
      <p className="text-center font-mono font-bold text-emerald-400">
        {phrase.slice(0, length)}
        <span className="ml-1 inline-block h-[1em] w-[2px] translate-y-[0.1em] animate-pulse bg-emerald-400 md:w-[3px]" />
      </p>
    </div>
  );
};

export default TypingHeading;
