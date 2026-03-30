"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-50 dark:bg-[#0a0a0a] border-t border-neutral-200 dark:border-neutral-800 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="grid gap-8 md:grid-cols-[2fr,2fr,2.5fr] items-start">
          <div className="space-y-2">
            <Link href="/" className="font-bold text-2xl tracking-tight">
              Zulfiqar <span className="text-blue-600 dark:text-blue-400">Ali</span>
            </Link>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              AI Engineer | Data Consultant
            </p>
            <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
              I help organizations design, build, and scale AI systems, data pipelines, and analytics
              platforms that drive measurable business impact.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wide text-neutral-700 dark:text-neutral-300 uppercase">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                <a
                  href="mailto:zulfiqarcomsats@gmail.com"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  zulfiqarcomsats@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                <a
                  href="tel:+923415883613"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  +92-3415883613
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                <p>Skardu, Gilgit Baltistan, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wide text-neutral-700 dark:text-neutral-300 uppercase">
              Connect
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <a
                href="https://github.com/zulfiqar-ali01"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#111] px-3 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-500 hover:shadow-sm hover:-translate-y-0.5 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4 group-hover:scale-110 transition-transform"
                >
                  <path
                    fill="currentColor"
                    d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.2 3.4 9.6 8.2 11.1.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.3 9.3 0 0 1 5.2 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 4.5-2.7 5.5-5.3 5.8.4.3.7.9.7 1.8v2.6c0 .3.2.7.8.6 4.8-1.5 8.2-5.9 8.2-11.1A11.5 11.5 0 0 0 12 .5Z"
                  />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/zulfiqar-ali01/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-blue-100 dark:border-blue-900/40 bg-[#0A66C2]/5 dark:bg-[#0A66C2]/10 px-3 py-2 text-sm text-[#0A66C2] dark:text-blue-400 hover:bg-[#0A66C2]/10 dark:hover:bg-[#0A66C2]/20 hover:shadow-sm hover:-translate-y-0.5 transition-all"
              >
                <LinkedInIcon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/Zulfiqa08762401"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-sky-100 dark:border-sky-900/40 bg-sky-500/5 dark:bg-sky-500/10 px-3 py-2 text-sm text-sky-500 dark:text-sky-400 hover:bg-sky-500/10 dark:hover:bg-sky-500/20 hover:shadow-sm hover:-translate-y-0.5 transition-all"
              >
                <TwitterIcon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>Twitter</span>
              </a>
              <a
                href="https://www.facebook.com/Zulfibalti/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#111] px-3 py-2 text-sm text-[#1877F2] hover:bg-[#1877F2]/5 hover:shadow-sm hover:-translate-y-0.5 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4 group-hover:scale-110 transition-transform"
                >
                  <path
                    fill="currentColor"
                    d="M13 21v-7h2.3l.4-3H13V9.2c0-.9.3-1.5 1.6-1.5H16V5.1C15.7 5 14.8 5 13.8 5 11.5 5 10 6.4 10 8.9V11H8v3h2v7h3Z"
                  />
                </svg>
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/zulfibalti96/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#111] px-3 py-2 text-sm text-pink-500 hover:bg-pink-500/5 hover:shadow-sm hover:-translate-y-0.5 transition-all"
              >
                <InstagramIcon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.youtube.com/@InnvoAI"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-red-100 dark:border-red-900/40 bg-red-500/5 dark:bg-red-500/10 px-3 py-2 text-sm text-red-500 dark:text-red-400 hover:bg-red-500/10 dark:hover:bg-red-500/20 hover:shadow-sm hover:-translate-y-0.5 transition-all"
              >
                <YouTubeIcon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 dark:text-neutral-400 gap-3">
          <p>&copy; {currentYear} Zulfiqar Ali. All rights reserved.</p>
          <p className="text-center md:text-right">
            AI Engineering · Data Consulting · BI & Analytics
          </p>
        </div>
      </div>
    </footer>
  );
}
