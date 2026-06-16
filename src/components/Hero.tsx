import React, { useState } from "react";
import { ArrowRight, BookOpen, Download, GraduationCap, Award, Compass, Send, Github, MessageCircle } from "lucide-react";
import { profile } from "../data/profile";
import { socialLinks } from "../data/socialLinks";
import SEO from "./SEO";

export default function Hero() {
  const { name, headline, shortIntro, stats, photo } = profile;
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleDownloadCV = () => {
    const subject = "Request for Avishek Majumder's Academic CV";
    const body = `Hello Avishek,\n\nI am reviewing your AI Researcher & Specialist Portfolio. I would love to review your latest academic CV.\n\nBest regards,`;
    window.location.href = `mailto:avishekmajumderpciu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Find priority social links for Hero CTA section
  const scholarLink = socialLinks.find(link => link.name === "Google Scholar")?.url || "#";
  const githubLink = socialLinks.find(link => link.name === "GitHub")?.url || "#";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100"
    >
      <SEO title="AI Researcher & Specialist" description={shortIntro} sectionId="hero" />
      
      {/* Background Neural Grid Lines with radial ambient fading mask */}
      <div 
        id="hero-background-grid"
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)] opacity-85" 
      />

      {/* Abstract Glowing Neon AI Orbs */}
      <div id="glow-orb-1" className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
      <div id="glow-orb-2" className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Copy & Stats */}
        <div id="hero-left-col" className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
          
          {/* Top Pill Greeting */}
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-full font-mono text-[10px] sm:text-xs text-emerald-800 dark:text-emerald-400 tracking-wider uppercase font-bold shadow-sm">
            <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-ping" />
            <span>AI Researcher & Prompt / Agentic AI Engineer</span>
          </div>

          {/* Confident Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-800 dark:text-slate-100 font-sans leading-none">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-500 dark:from-emerald-400 dark:via-teal-300 dark:to-indigo-400">{name}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 tracking-tight max-w-2xl leading-snug">
              {headline}
            </p>
          </div>

          {/* Positioning Description */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-medium">
            {shortIntro}
          </p>

          {/* Interactive Action Buttons */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <button
              id="hero-cta-publications"
              onClick={(e) => scrollToSection(e, "#publications")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white dark:text-slate-950 font-bold transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Publications
            </button>
            <button
              id="hero-cta-research"
              onClick={(e) => scrollToSection(e, "#projects")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider border border-slate-205 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-650 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-all cursor-pointer font-bold shadow-sm hover:shadow"
            >
              <Compass className="w-3.5 h-3.5 text-emerald-500" />
              View Projects
            </button>
            <a
              id="hero-cta-scholar"
              href={scholarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider border border-slate-205 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-650 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-105 transition-all cursor-pointer font-bold shadow-sm hover:shadow"
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-653" />
              Scholar
            </a>
            <a
              id="hero-cta-github"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider border border-slate-205 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-650 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-105 transition-all cursor-pointer font-bold shadow-sm hover:shadow"
            >
              <Github className="w-3.5 h-3.5 text-indigo-500" />
              GitHub
            </a>
            <button
              id="hero-cta-contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider border border-slate-205 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-650 hover:text-slate-900 dark:text-slate-305 dark:hover:text-slate-105 transition-all cursor-pointer font-bold shadow-sm hover:shadow"
            >
              <Send className="w-3.5 h-3.5 text-indigo-500" />
              Contact
            </button>
            <button
              id="hero-cta-cv"
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider border border-emerald-250 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/20 hover:bg-emerald-100 dark:hover:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 transition-all cursor-pointer font-bold"
            >
              <Download className="w-3.5 h-3.5" />
              Request CV
            </button>
          </div>

          {/* Dynamic Interactive Stats Dashboard Grid */}
          <div id="hero-stats-panel" className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3.5 pt-6 border-t border-slate-200 dark:border-slate-900 w-full">
            {stats.map((stat, i) => {
              const isLongVal = stat.value.length > 8;
              return (
                <div
                  key={stat.label}
                  id={`stat-card-${i}`}
                  className="flex flex-col justify-between items-center p-3 sm:p-4 rounded-xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-900 hover:border-emerald-500/35 transition-all group shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-300 min-h-[90px] text-center"
                >
                  <div className={`font-mono tracking-tight font-extrabold transition-colors w-full break-words leading-tight ${
                    isLongVal 
                      ? "text-[11px] sm:text-xs text-indigo-600 dark:text-emerald-400" 
                      : "text-lg sm:text-xl text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-[9px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono mt-2 leading-relaxed font-bold break-words w-full">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Right Column: Premium AI/Research Visual Layout (Avatar, Citation Badge, PowerinAI, neural grids) */}
        <div id="hero-right-col" className="lg:col-span-12 xl:col-span-5 flex items-center justify-center relative min-h-[380px] lg:my-0 my-10">
          
          <div className="relative w-full aspect-square max-w-[390px] p-6 flex items-center justify-center">
            
            {/* Ambient circular tech boundaries with variable spin speeds */}
            <div className="absolute inset-0 border border-emerald-500/10 rounded-full animate-spin [animation-duration:30s]" />
            <div className="absolute inset-4 border border-indigo-500/5 rounded-full animate-spin [animation-duration:45s] [animation-direction:reverse]" />
            <div className="absolute inset-10 border border-slate-200 dark:border-slate-800/80 rounded-full" />

            {/* Glowing background halo */}
            <div className="absolute w-[240px] h-[240px] bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-indigo-500/25 rounded-full blur-3xl opacity-80" />

            {/* Profile Avatar Frame */}
            <div className="relative w-[230px] h-[230px] rounded-full p-1.5 bg-gradient-to-tr from-emerald-500/40 via-slate-300 dark:via-slate-800 to-indigo-500/30 shadow-md dark:shadow-[0_0_50px_rgba(16,185,129,0.15)] z-10 overflow-hidden flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-950 overflow-hidden relative flex items-center justify-center">
                {!imageError ? (
                  <img
                    id="hero-avatar-image"
                    src={photo}
                    alt={name}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover relative z-10 transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  // Gradient Initials Fallback if embed is blocked or during local offline phase
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-slate-100 dark:from-slate-950 via-slate-50 dark:via-slate-900 to-slate-200 dark:to-slate-850 p-4 text-center">
                    <div className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-400 dark:from-emerald-400 dark:to-teal-200 font-mono">
                      AM
                    </div>
                    <div className="text-[10px] text-slate-500 font-sans tracking-wide mt-1 font-bold">
                      Avishek Majumder
                    </div>
                  </div>
                )}
                {/* Visual lens shine overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 opacity-60 z-20 pointer-events-none" />
              </div>
            </div>

            {/* Floating Scholarship Citation Badge */}
            <a 
              id="badge-citations"
              href={scholarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-200 dark:border-emerald-500/30 hover:border-emerald-400 shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] select-none hover:-translate-y-1 transition-transform z-20 group text-left"
            >
              <div className="font-mono text-[9px] uppercase tracking-wider text-emerald-605 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Scholar citations: 60+</span>
              </div>
              <div className="text-[8px] text-slate-500 font-sans mt-0.5 group-hover:text-slate-700 dark:group-hover:text-slate-350">
                View Google Scholar Profile &rarr;
              </div>
            </a>

            {/* Floating Experience GitHub / Codebase Badge */}
            <a 
              id="badge-github-thesis"
              href="https://github.com/Avishek-Majumder/snasrnet-denoise-sr"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-10 left-[-20px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-200 dark:border-indigo-500/20 hover:border-indigo-400 shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] select-none hover:-translate-y-1 transition-transform z-20 group text-left"
            >
              <div className="font-mono text-[9px] uppercase tracking-wider text-indigo-605 dark:text-indigo-400 font-bold flex items-center gap-1.5">
                <Github className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />
                <span>SNASRNet Codebase</span>
              </div>
              <div className="text-[8px] text-slate-500 font-sans mt-0.5 group-hover:text-slate-705 dark:group-hover:text-slate-350 font-bold">
                Joint Denoise & Super-Res &rarr;
              </div>
            </a>

            {/* Floating Affiliation Badge: PowerinAI / AI Lab */}
            <div 
              id="badge-affiliation"
              className="absolute bottom-4 right-[-10px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] select-none hover:-translate-y-1 transition-transform z-20"
            >
              <div className="font-mono text-[9px] uppercase tracking-wider text-slate-700 dark:text-slate-300 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span>PowerinAI • AI Lab</span>
              </div>
              <div className="text-[8px] text-slate-500 font-sans mt-0.5 font-bold">
                Enterprise Prompt Agent systems
              </div>
            </div>

            {/* Floating Custom Scholarly Paper Cards Visuals */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 translate-y-[40px] hidden sm:flex items-center gap-1.5 px-2 py-1 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-850 rounded-lg text-[9px] font-mono text-slate-500 dark:text-slate-400 z-20 shadow-md">
              <span className="text-amber-500">★</span>
              <span>1 IEEE TAI Journal</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
