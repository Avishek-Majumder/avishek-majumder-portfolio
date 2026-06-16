import React from "react";
import { Briefcase, Calendar, MapPin, Award, UserCheck, CheckCircle2 } from "lucide-react";
import { profile } from "../data/profile";
import SEO from "./SEO";
import HighlightText from "./HighlightText";

interface ExperienceProps {
  searchQuery: string;
}

export default function Experience({ searchQuery }: ExperienceProps) {
  const { experiences } = profile;

  return (
    <section
      id="experience"
      className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-900/60 relative"
    >
      <SEO title="Professional Research Experience" description="Career overview, including university research associateships and AI system development details." sectionId="experience" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.015),transparent_40%)]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div id="experience-heading" className="space-y-2 mb-16 text-center">
          <div className="font-mono text-xs text-indigo-500 dark:text-emerald-400 uppercase tracking-widest font-bold">03 / Career Milestones</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-sans text-slate-800 dark:text-slate-100">Professional Experience</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Timeline Core Layout */}
        <div className="relative border-l border-slate-200 dark:border-slate-900 ml-4 md:ml-6 pl-6 md:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              id={`experience-entry-${idx}`}
              className="relative group text-left"
            >
              {/* Glowing Timeline Node Dot Accent */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-4 h-4 rounded-full border-2 border-emerald-500 bg-white dark:bg-slate-950 flex items-center justify-center group-hover:bg-emerald-400 group-hover:scale-125 transition-all shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:bg-slate-950 dark:group-hover:bg-slate-950" />
              </div>

              {/* Box Card Container */}
              <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-slate-900/10 border border-slate-200 dark:border-slate-900 hover:border-emerald-555/45 dark:hover:border-emerald-500/20 hover:bg-slate-100/50 dark:hover:bg-slate-900/30 transition-all duration-300 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-150 dark:border-slate-900 pb-4 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                      <HighlightText text={exp.role} query={searchQuery} />
                    </h3>
                    <div className="text-sm text-slate-600 dark:text-slate-300 font-sans mt-0.5 font-medium flex items-center gap-1.5">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        <HighlightText text={exp.company} query={searchQuery} />
                      </span>
                      <span className="text-slate-400 dark:text-slate-600">|</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3" />
                        <HighlightText text={exp.location} query={searchQuery} />
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/5 px-2.5 py-1 rounded border border-emerald-200 dark:border-emerald-500/15 h-fit self-start sm:self-center font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Supervisor highlight if available (e.g., AI Lab) */}
                {exp.supervisor && (
                  <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-500/5 border border-indigo-100 dark:border-indigo-500/10 rounded font-mono text-xs text-indigo-700 dark:text-indigo-300 font-bold">
                    <UserCheck className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>Supervisor: <HighlightText text={exp.supervisor} query={searchQuery} /></span>
                  </div>
                )}

                {/* Detailed Responsibility bullets */}
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li
                      key={bulletIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-450 leading-relaxed font-sans"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-555 dark:text-emerald-500/60 mt-0.5 shrink-0 group-hover:text-emerald-500 transition-colors" />
                      <span>
                        <HighlightText text={bullet} query={searchQuery} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
