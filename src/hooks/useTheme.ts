import { useState, useEffect } from "react";

export interface UseThemeReturn {
  theme: "light" | "dark";
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
  mounted: boolean;
}

// Singleton state stored outside of individual hook instances
let globalTheme: "light" | "dark" = "dark";
let globalMounted = false;
const listeners = new Set<(theme: "light" | "dark") => void>();

// Read initial stored theme or prefers-color-scheme safely on module load
if (typeof window !== "undefined") {
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    globalTheme = savedTheme;
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    globalTheme = prefersDark ? "dark" : "light";
  }
}

/**
 * Hydration-safe, state-sharing React hook to manage visual portfolio themes.
 * Uses a tiny in-memory event registry to instantaneously synchronize all component
 * instances (such as Navbar, App, and Footer) without hydration mismatch warnings.
 */
export function useTheme(): UseThemeReturn {
  const [theme, setThemeInternal] = useState<"light" | "dark">(globalTheme);
  const [mounted, setMounted] = useState<boolean>(globalMounted);

  useEffect(() => {
    setMounted(true);
    globalMounted = true;

    // Pull correct active global state on mount
    setThemeInternal(globalTheme);

    const handleThemeChange = (newTheme: "light" | "dark") => {
      setThemeInternal(newTheme);
    };

    listeners.add(handleThemeChange);
    return () => {
      listeners.delete(handleThemeChange);
    };
  }, []);

  // Update root <html> class list and localStorage whenever theme changes
  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  }, [theme, mounted]);

  // Handle OS level theme preference updates dynamically
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = (e: MediaQueryListEvent) => {
      const userCached = localStorage.getItem("portfolio-theme");
      if (!userCached) {
        const nextTheme = e.matches ? "dark" : "light";
        globalTheme = nextTheme;
        listeners.forEach((listener) => listener(nextTheme));
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    globalTheme = nextTheme;
    listeners.forEach((listener) => listener(nextTheme));
  };

  const setTheme = (newTheme: "light" | "dark") => {
    globalTheme = newTheme;
    listeners.forEach((listener) => listener(newTheme));
  };

  return {
    theme,
    isDark: theme === "dark",
    toggleTheme,
    setTheme,
    mounted,
  };
}
