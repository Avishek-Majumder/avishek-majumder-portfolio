import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles, GraduationCap, Briefcase, Code, BookOpen, Mail, Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { querySearchIndex } from "../lib/searchUtils";

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Navbar({ searchQuery, setSearchQuery }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", icon: Sparkles },
    { name: "Areas", href: "#research-interests", icon: GraduationCap },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Featured", href: "#featured-papers", icon: BookOpen },
    { name: "Publications", href: "#publications", icon: BookOpen },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 85; // height of sticky navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  const performUnifiedSearch = (queryText: string) => {
    const trimmed = queryText.trim();
    if (!trimmed) return;

    // Propagate state
    setSearchQuery(trimmed);

    // Look up in flat index
    const results = querySearchIndex(trimmed);
    if (results.length > 0) {
      const match = results[0];
      
      // Determine DOM element identifier
      let elementId = "";
      if (match.type === "project") {
        elementId = `project-card-${match.raw.id}`;
      } else if (match.type === "publication") {
        const featuredIds = ["pub-snasrnet-under-review", "pub-image-inpainting-2025", "pub-email-filtering-2025", "pub-dfgnet-satellite-2025"];
        if (featuredIds.includes(match.raw.id)) {
          elementId = `featured-paper-card-${match.raw.id}`;
        } else {
          elementId = `pub-card-${match.raw.id}`;
        }
      } else if (match.type === "experience") {
        elementId = "experience";
      } else if (match.type === "education") {
        elementId = "education";
      } else if (match.type === "skill") {
        elementId = "skills";
      } else if (match.type === "interest") {
        elementId = "research-interests";
      } else if (match.type === "certification" || match.type === "academic_service") {
        elementId = "academic-integrity";
      } else if (match.type === "contact") {
        elementId = "contact";
      }

      if (elementId) {
        setTimeout(() => {
          const element = document.getElementById(elementId) || document.querySelector(`#${elementId}`);
          if (element) {
            const offset = 90;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });

            // Trigger temporary visual pulse highlight
            element.classList.remove("animate-highlight");
            // Force reflow
            void element.offsetWidth;
            element.classList.add("animate-highlight");
          }
        }, 150);
      }
    }
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    performUnifiedSearch(searchQuery);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-900 shadow-md"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a
            id="nav-logo"
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="flex items-center gap-2 font-mono text-sm tracking-widest text-slate-800 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors uppercase group font-bold"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse group-hover:bg-emerald-400" />
            <span>Avishek.M</span>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  id={`nav-link-${link.name.toLowerCase()}`}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center gap-1.2 text-[11px] font-mono tracking-wider uppercase text-slate-600 dark:text-slate-450 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2 font-bold whitespace-nowrap"
                >
                  <Icon className="w-3.5 h-3.5 opacity-70 text-emerald-500" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {/* Direct Instant Search Form */}
            <form onSubmit={handleSearchSubmit} className="relative flex items-center max-w-[130px] sm:max-w-[180px] md:max-w-[200px]">
              <button type="submit" className="absolute left-2.5 text-slate-500 hover:text-emerald-500 focus:outline-none cursor-pointer" aria-label="Submit search">
                <Search className="w-3.5 h-3.5" />
              </button>
              <input
                id="search-projects-publications"
                type="text"
                placeholder="Search portfolio..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200 font-sans text-xs rounded-lg pl-8 pr-7 py-1.5 w-full focus:outline-none focus:border-emerald-500/50 focus:bg-white dark:focus:bg-slate-900 transition-all placeholder:text-slate-500"
              />
              {searchQuery && (
                <button
                  type="button"
                  id="search-clear-btn"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 text-slate-400 hover:text-slate-750 dark:hover:text-slate-300 focus:outline-none cursor-pointer"
                  aria-label="Clear filters"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </form>

            <ThemeToggle />

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggler"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg lg:hidden border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-100 transition-colors cursor-pointer shrink-0"
              aria-label="Toggle navigation drawer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav-panel"
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white/98 dark:bg-slate-950/98 backdrop-blur-lg transform transition-transform duration-300 ease-in-out border-b border-slate-200 dark:border-slate-900 ${
          isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-6 flex flex-col items-center justify-start h-full overflow-y-auto">
          {/* Mobile search bar replica wrapped in form */}
          <form onSubmit={handleSearchSubmit} className="relative flex items-center w-full max-w-md">
            <button type="submit" className="absolute left-3 text-slate-500 hover:text-emerald-500 focus:outline-none cursor-pointer" aria-label="Submit mobile search">
              <Search className="w-4 h-4" />
            </button>
            <input
              id="search-projects-publications-mobile"
              type="text"
              placeholder="Search research, articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-sans text-sm rounded-lg pl-9 pr-8 py-2 w-full focus:outline-none focus:border-emerald-500/55 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                id="search-clear-btn-mobile"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 cursor-pointer"
                aria-label="Clear mobile search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </form>

          <div className="w-full max-w-md flex flex-col items-center gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-slate-705 dark:text-slate-350 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all py-2.5 w-full border-b border-slate-150 dark:border-slate-900 font-semibold"
                >
                  <Icon className="w-4 h-4 text-emerald-500" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
