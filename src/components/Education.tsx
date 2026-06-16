import React from "react";
import { GraduationCap, Award, BookOpen, Star, Sparkles, Trophy, CheckSquare, Calendar, Milestone } from "lucide-react";
import { education, ielts } from "../data/education";
import { profile } from "../data/profile";
import HighlightText from "./HighlightText";
import SEO from "./SEO";

interface EducationProps {
  searchQuery: string;
}

export default function Education({ searchQuery }: EducationProps) {
  const { academicService, certifications, activities } = profile;

  const ieltsBreakdown = [
    { skill: "Listening", score: ielts.listening, pct: "94%" },
    { skill: "Reading", score: ielts.reading, pct: "89%" },
    { skill: "Writing", score: ielts.writing, pct: "72%" },
    { skill: "Speaking", score: ielts.speaking, pct: "72%" }
  ];

  return (
    <section
      id="education"
      className="py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-900/60 relative"
    >
      <SEO
        title="Education & Academic Credentials"
        description="Review the academic history, BSc degree, thesis publications, and IELTS fluency profile of Avishek Majumder."
        keywords={["BSc CSE", "Port City International University", "IELTS Academic", "Academic CV"]}
        sectionId="education"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.015),transparent_40%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div id="education-heading" className="space-y-2 mb-14 text-center">
          <div className="font-mono text-xs text-indigo-500 dark:text-indigo-400 uppercase tracking-widest font-bold">07 / Academic Integrity</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-sans text-slate-800 dark:text-slate-100">Education & Scientific Credibility</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education Timeline (8 cols) */}
          <div id="education-timeline-panel" className="lg:col-span-8 space-y-6">
            
            {/* Timeline Wrapper */}
            <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 pl-6 space-y-8 text-left">
              {education.map((item, idx) => (
                <div key={item.id} className="relative group">
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full border-2 border-indigo-500 bg-white dark:bg-slate-950 flex items-center justify-center group-hover:scale-125 transition-transform shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  </div>

                  {/* Card layout */}
                  <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/10 border border-slate-200 dark:border-slate-900 hover:border-indigo-500/20 hover:bg-slate-100/40 dark:hover:bg-slate-900/30 transition-all shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="space-y-1">
                        <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors font-sans leading-snug">
                          <HighlightText text={item.degree} query={searchQuery} />
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-650 dark:text-slate-355 font-medium">
                          <HighlightText text={item.institution} query={searchQuery} />
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 px-2 py-0.5 whitespace-nowrap text-[10px] font-mono text-indigo-755 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-550/5 rounded border border-indigo-150 dark:border-indigo-500/15 h-fit self-start sm:self-center font-bold">
                        <Calendar className="w-3 h-3" />
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    {/* Conditional Grade details */}
                    {item.grade && (
                      <div className="text-xs font-mono mt-3 text-slate-500 dark:text-slate-400">
                        <span className="text-slate-400 dark:text-slate-500 uppercase text-[10px] tracking-wider mr-1.5 font-bold">Grade Metric:</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">{item.grade}</span>
                      </div>
                    )}

                    {/* Conditional Thesis detail sub-block (BSc) */}
                    {item.thesis && (
                      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-900 space-y-3">
                        <div className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono font-bold leading-none">BSc Graduation Thesis</div>
                        <div className="p-4 rounded-lg bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-900 shadow-inner">
                          <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic font-medium leading-relaxed block">
                            “<HighlightText text={item.thesis.title} query={searchQuery} />”
                          </span>
                          <span className="text-[10px] text-indigo-650 dark:text-indigo-400 font-mono mt-2 flex items-center gap-1 font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                            <HighlightText text={item.thesis.status} query={searchQuery} />
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-wrap gap-x-4 gap-y-1 mt-1 font-sans">
                          <div>
                            <span className="text-slate-400 dark:text-slate-500">Advisor:</span>{" "}
                            <span className="font-semibold text-slate-700 dark:text-slate-300">
                              <HighlightText text={item.thesis.advisor} query={searchQuery} />
                            </span>
                          </div>
                          <div>
                            <a 
                              href={item.thesis.codebase} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-emerald-600 dark:text-emerald-450 hover:underline hover:text-emerald-500 font-bold cursor-pointer"
                            >
                              Codebase Repo &rarr;
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: IELTS Assessment (4 cols) */}
          <div id="education-ielts-panel" className="lg:col-span-4 space-y-6 text-left">
            
            {/* IELTS Detailed Meters Panel */}
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/10 border border-slate-200 dark:border-slate-900 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-900 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400 text-left" />
                  <h3 className="text-sm font-mono tracking-widest uppercase text-slate-800 dark:text-slate-200 font-bold">IELTS Assessment</h3>
                </div>
                <div className="text-xs font-mono text-emerald-700 dark:text-slate-100 bg-emerald-50 dark:bg-emerald-530/10 border border-emerald-200 dark:border-emerald-500/20 px-2.5 py-1 rounded font-extrabold">
                  Band <span className="text-emerald-600 dark:text-emerald-400 font-bold">{ielts.overall}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {ieltsBreakdown.map((item) => (
                  <div key={item.skill} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-500 dark:text-slate-400">{item.skill}</span>
                      <span className="text-indigo-600 dark:text-emerald-400 font-bold">{item.score}</span>
                    </div>
                    {/* Horizontal Mini-Indicator Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-950 overflow-hidden relative border border-slate-200 dark:border-slate-900">
                      <div
                        className="absolute h-full left-0 top-0 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full"
                        style={{ width: item.pct }}
                      />
                    </div>
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
