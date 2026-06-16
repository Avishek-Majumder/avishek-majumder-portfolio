import React from "react";
import { ArrowUp, Award, BookOpen, GraduationCap, Github } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="bg-slate-100 dark:bg-slate-950 text-slate-650 dark:text-slate-400 py-12 border-t border-slate-200 dark:border-slate-900/85 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Column: Brand & Copyright */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-800 dark:text-slate-250 font-mono tracking-widest text-xs uppercase font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Avishek Majumder Portfolio</span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-505 font-mono">
            © {currentYear} Avishek Majumder. All rights reserved. Registered Static Portfolio.
          </p>
        </div>

        {/* Center: Educational Badge */}
        <div className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-900 text-[11px] font-mono leading-none shadow-sm dark:shadow-none">
          <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="font-semibold dark:font-normal">BSc in CSE · Q1 Journal Scholar · Prompt Architect</span>
        </div>

        {/* Right Column: Return to Top Indicator */}
        <div className="flex items-center gap-4">
          <button
            id="footer-back-to-top"
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-205 dark:border-slate-900 hover:border-emerald-500/35 bg-white dark:bg-slate-950 font-mono text-[10px] text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-all uppercase cursor-pointer shadow-sm hover:shadow"
            aria-label="Scroll back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
