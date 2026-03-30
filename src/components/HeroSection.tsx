"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { useEffect, useState } from "react";

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.32 8.16h4.36V24H.32zM8.08 8.16h4.18v2.16h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.21 2.9 5.21 6.68V24h-4.36v-7.08c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.84-2.72 3.74V24H8.08z"
      />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19.95 7.04c.01.17.01.35.01.52 0 5.33-4.06 11.48-11.48 11.48-2.28 0-4.4-.67-6.18-1.82.32.04.64.06.97.06 1.89 0 3.63-.64 5.01-1.72a4.04 4.04 0 0 1-3.77-2.8c.25.05.5.08.77.08.37 0 .73-.05 1.07-.15A4.03 4.03 0 0 1 2.8 7.7v-.05c.54.3 1.15.48 1.8.5A4.03 4.03 0 0 1 2.87 4.1c0-.75.2-1.45.56-2.06a11.46 11.46 0 0 0 8.32 4.22 4.05 4.05 0 0 1 6.89-3.69 8 8 0 0 0 2.56-.98 4.06 4.06 0 0 1-1.78 2.24 8.07 8.07 0 0 0 2.33-.64 8.7 8.7 0 0 1-2.8 2.25z"
      />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 7.3A4.7 4.7 0 1 0 16.7 12 4.71 4.71 0 0 0 12 7.3zm0 7.7A3 3 0 1 1 15 12a3 3 0 0 1-3 3z"
      />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
      <path
        fill="currentColor"
        d="M17.8 3H6.2A3.2 3.2 0 0 0 3 6.2v11.6A3.2 3.2 0 0 0 6.2 21h11.6a3.2 3.2 0 0 0 3.2-3.2V6.2A3.2 3.2 0 0 0 17.8 3zm1.7 14.8a1.7 1.7 0 0 1-1.7 1.7H6.2a1.7 1.7 0 0 1-1.7-1.7V6.2A1.7 1.7 0 0 1 6.2 4.5h11.6a1.7 1.7 0 0 1 1.7 1.7z"
      />
    </svg>
  );
}

function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.5v-7L15.5 12z"
      />
    </svg>
  );
}

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 1500;

export default function HeroSection() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const roles = [
      "AI Systems",
      "Data Pipelines",
      "Analytics Platforms",
      "Automation",
    ];

    let timer: NodeJS.Timeout;
    const handleType = () => {
      const currentRole = roles[loopNum % roles.length];
      
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
      } else {
        setText(currentRole.substring(0, text.length + 1));
      }

      let typingDelay = isDeleting ? DELETING_SPEED : TYPING_SPEED;

      if (!isDeleting && text === currentRole) {
        typingDelay = PAUSE_DURATION;
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        typingDelay = 500;
      }

      timer = setTimeout(handleType, typingDelay);
    };

    timer = setTimeout(handleType, TYPING_SPEED);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Moving Gradient Orb Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-1/4 left-1/2 w-[600px] h-[600px] bg-cyan-500/20 dark:bg-teal-600/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-white/40 dark:bg-[#050505]/60 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 z-10 w-full flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-semibold tracking-wide mb-6 border border-blue-200 dark:border-blue-800/50">
            Available for consulting
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          I build intelligent <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 min-h-[1.2em] inline-block mt-2">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          AI Engineer specializing in automation, machine learning, and data-driven decision systems for real-world impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10"
        >
          <Link
            href="#projects"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-neutral-900 dark:bg-white px-8 font-medium text-white dark:text-neutral-900 transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
          >
            <span className="mr-2">View Projects</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#contact"
            className="group inline-flex h-12 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-transparent px-8 font-medium text-neutral-900 dark:text-white transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-3 items-center justify-center text-neutral-500 dark:text-neutral-400"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:zulfiqarcomsats@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-[#111] px-4 py-2 text-sm font-medium text-neutral-900 dark:text-white shadow-sm hover:shadow-md hover:scale-105 transition-all border border-neutral-200 dark:border-neutral-700"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/zulfiqar-ali01/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-4 py-2 text-sm font-medium text-white hover:bg-[#0858a6] hover:scale-105 transition-transform shadow-sm"
            >
              <LinkedInIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/zulfiqar-ali01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-neutral-900 hover:scale-105 transition-transform shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  fill="currentColor"
                  d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.2 3.4 9.6 8.2 11.1.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.3 9.3 0 0 1 5.2 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 4.5-2.7 5.5-5.3 5.8.4.3.7.9.7 1.8v2.6c0 .3.2.7.8.6 4.8-1.5 8.2-5.9 8.2-11.1A11.5 11.5 0 0 0 12 .5Z"
                />
              </svg>
              <span>GitHub</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 mt-1">
            <a
              href="https://twitter.com/Zulfiqa08762401"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/70 dark:bg-[#111] text-sky-500 hover:text-sky-400 hover:scale-110 hover:shadow-md transition-all"
              aria-label="Twitter"
            >
              <TwitterIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/Zulfibalti/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/70 dark:bg-[#111] text-[#1877F2] hover:text-[#145db8] hover:scale-110 hover:shadow-md transition-all"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  fill="currentColor"
                  d="M13 21v-7h2.3l.4-3H13V9.2c0-.9.3-1.5 1.6-1.5H16V5.1C15.7 5 14.8 5 13.8 5 11.5 5 10 6.4 10 8.9V11H8v3h2v7h3Z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/zulfibalti96/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/70 dark:bg-[#111] text-pink-500 hover:text-pink-400 hover:scale-110 hover:shadow-md transition-all"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com/@InnvoAI"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/70 dark:bg-[#111] text-red-500 hover:text-red-400 hover:scale-110 hover:shadow-md transition-all"
              aria-label="YouTube"
            >
              <YouTubeIcon className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
