"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-50 dark:bg-[#0a0a0a] border-t border-neutral-200 dark:border-neutral-800 py-10 px-6">
      
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          
          <Link href="/" className="font-semibold tracking-tight">
            Data Science & AI Consulting
          </Link>

          <p className="text-center md:text-right">
            Transforming data into actionable insights for healthcare and public sector systems.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 dark:text-neutral-400 gap-3">
          
          <p>
            &copy; {currentYear} — Data Science & AI Consulting. All rights reserved.
          </p>

          <p className="text-center md:text-right">
            Healthcare Analytics · Data Consulting · BI & Analytics
          </p>
        </div>

      </div>
    </footer>
  );
}