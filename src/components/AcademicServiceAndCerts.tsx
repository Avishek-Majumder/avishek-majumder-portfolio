import React from "react";
import { BookOpen, Trophy, Sparkles, CheckSquare } from "lucide-react";
import { profile } from "../data/profile";
import HighlightText from "./HighlightText";
import SEO from "./SEO";

interface AcademicServiceAndCertsProps {
  searchQuery: string;
}

export default function AcademicServiceAndCerts({ searchQuery }: AcademicServiceAndCertsProps) {
  const { academicService, certifications, activities } = profile;

  return (
    <section
      id="academic-integrity"
      className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-905 relative overflow-hidden"
    >
      <SEO
        title="Scientific Service & Professional Credentials"
        description="Explore the scholarly review services, tech certifications, and extracurricular academic memberships of Avishek Majumder."
        keywords={["Peer Reviewer", "Elsevier reviews", "Technical certifications", "freeCodeCamp"]}
        sectionId="academic-integrity"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.015),transparent_40%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div id="academic-honor-heading" className="space-y-2 mb-14 text-center">
          <div className="font-mono text-xs text-indigo-500 dark:text-indigo-400 uppercase tracking-widest font-bold">08 / Credentials & Honor</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-sans text-slate-800 dark:text-slate-100">
            Academic Service & Certifications
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Triple Panel layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Peer Reviewer Academic Services Card */}
          <div
            id="academic-reviews-card"
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/10 border border-slate-200 dark:border-slate-900 hover:border-emerald-505/20 hover:bg-slate-50/50 dark:hover:bg-slate-900/15 transition-all shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 border-b border-slate-150 dark:border-slate-900 pb-4 mb-4">
                <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <h3 className="text-sm font-mono tracking-widest uppercase text-slate-800 dark:text-slate-200 font-bold">Academic Journals</h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed font-sans">
                Active peer-reviewer evaluating novel network topologies, satellite imagery segmentations, photogrammetry models, and machine learning pipelines.
              </p>
              <ul className="space-y-2.5">
                {academicService.journals.map((journal) => (
                  <li key={journal} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span className="leading-relaxed font-medium">
                      <HighlightText text={journal} query={searchQuery} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Professional Certifications Panel */}
          <div
            id="academic-certs-card"
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/10 border border-slate-202 dark:border-slate-900 hover:border-emerald-505/20 hover:bg-slate-50/50 dark:hover:bg-slate-900/15 transition-all shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 border-b border-slate-150 dark:border-slate-900 pb-4 mb-4">
                <Trophy className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <h3 className="text-sm font-mono tracking-widest uppercase text-slate-801 dark:text-slate-200 font-bold">Certifications</h3>
              </div>
              <div className="space-y-3.5">
                {certifications.map((cert) => (
                  <div key={cert} className="flex gap-2.5 items-start">
                    <CheckSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-550 mt-0.5 shrink-0" />
                    <span className="text-xs text-slate-650 dark:text-slate-350 font-medium font-sans leading-relaxed">
                      <HighlightText text={cert} query={searchQuery} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Extracurricular Activities Card */}
          <div
            id="academic-activities-card"
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/10 border border-slate-202 dark:border-slate-900 hover:border-emerald-505/20 hover:bg-slate-50/50 dark:hover:bg-slate-900/15 transition-all shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 border-b border-slate-150 dark:border-slate-900 pb-4 mb-4">
                <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <h3 className="text-sm font-mono tracking-widest uppercase text-slate-801 dark:text-slate-200 font-bold">Memberships</h3>
              </div>
              <div className="space-y-4">
                {activities.map((act) => (
                  <div key={act.org} className="border-l-2 border-emerald-500/30 pl-3">
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-snug">
                      <HighlightText text={act.role} query={searchQuery} />
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-sans">
                      <HighlightText text={act.org} query={searchQuery} />
                    </div>
                    <div className="text-[10px] text-slate-450 font-mono mt-1">{act.period}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
