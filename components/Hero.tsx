"use client";

import { useEffect, useState } from "react";
import { FaLocationArrow, FaUserSecret } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import TypingHeading from "./ui/TypingHeading";

const Hero = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    if (open) document.addEventListener("keydown", onKey);

    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#34D399"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="relative z-10 my-20 flex flex-col items-center justify-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[46rem] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Cyber Security & Digital Forensics
          </p>

          <TypingHeading className="text-[40px] leading-tight md:text-5xl lg:text-6xl" />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Tlhalefang, a Cyber Security and Forensics Analyst.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto md:mt-10">
            <a href="#about" className="w-full md:w-auto">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="!mt-0"
              />
            </a>

            <MagicButton
              title="Meet the hacker"
              icon={<FaUserSecret />}
              position="right"
              handleClick={() => setOpen(true)}
              otherClasses="!mt-0"
            />
          </div>

          <a
            href="#about"
            className="mt-10 flex flex-col items-center gap-1 text-[11px] uppercase tracking-[0.3em] text-white-200/60 transition hover:text-emerald-400 md:text-xs"
          >
            Scroll down to learn more
            <span aria-hidden="true" className="animate-bounce text-base">
              ↓
            </span>
          </a>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Meet the hacker"
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl border border-emerald-400/20 bg-[#04071D] p-6 md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-lg text-white/70 transition hover:border-emerald-400/40 hover:text-emerald-400"
            >
              ✕
            </button>

            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-8">
              <img
                src="/tlhalefang-hero.png"
                alt="Tlhalefang Ntshilane"
                className="w-[180px] shrink-0 rounded-xl drop-shadow-[0_0_40px_rgba(52,211,153,0.25)] md:w-[240px]"
              />

              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  Tlhalefang Ntshilane
                </h3>
                <p className="mt-1 text-sm text-emerald-400">
                  Cyber Security &amp; Digital Forensics Analyst
                </p>

                <p className="mt-4 text-sm leading-relaxed text-white-200 md:text-base">
                  I investigate incidents, recover evidence and document every
                  step so anyone can follow it. I also build and ship full stack
                  web apps from first line to deploy.
                </p>

                <p className="mt-3 text-sm leading-relaxed text-white-200 md:text-base">
                  Currently open to junior SOC, incident response and forensics
                  roles.
                </p>

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-6 inline-flex items-center gap-2 text-sm text-emerald-400"
                >
                  Let&apos;s talk <FaLocationArrow />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
