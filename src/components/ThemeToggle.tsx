import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { isDark, toggleTheme, mounted } = useTheme();

  // Return a visual placeholder/skeleton when not fully client-mounted
  // to avoid rendering flickering and hydration layout shifts in the navbar
  if (!mounted) {
    return (
      <div 
        className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-500/5 dark:bg-slate-900/10 animate-pulse shrink-0" 
        id="theme-toggler-placeholder"
      />
    );
  }

  return (
    <button
      id="theme-toggler"
      onClick={toggleTheme}
      className="p-2.5 rounded-full border border-slate-200 dark:border-slate-805 bg-white dark:bg-slate-950/30 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-100 transition-all cursor-pointer shrink-0 shadow-sm"
      aria-label="Toggle visual palette theme"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-500 animate-spin-slow" />
      ) : (
        <Moon className="w-4 h-4 text-indigo-550" />
      )}
    </button>
  );
}
