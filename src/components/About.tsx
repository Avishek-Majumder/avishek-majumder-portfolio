import React from "react";
import { GraduationCap, Award, Shield, Cpu, BookOpen, Layers } from "lucide-react";
import { profile } from "../data/profile";
import { education } from "../data/education";
import SEO from "./SEO";
import HighlightText from "./HighlightText";

interface AboutProps {
  searchQuery: string;
}

export default function About({ searchQuery }: AboutProps) {
  const { academicOverview, academicPillars, name } = profile;
  const bscEdu = education.find(edu => edu.id === "bsc-cse");

  const degree = bscEdu?.degree || "Bachelor of Science in Computer Science and Engineering";
  const institution = bscEdu?.institution || "Port City International University, Chattogram, Bangladesh";
  const duration = bscEdu?.duration || "January 2020 – April 2024";
  const cgpa = bscEdu?.grade || "3.63 / 4.00";
  const thesisTitle = bscEdu?.thesis?.title || "A Unified Framework for Multi-Noise Image Denoising and Super Resolution";
  const advisor = bscEdu?.thesis?.advisor || "Ms. Tahmina Akter, Assistant Professor, Port City International University";
  const thesisStatus = bscEdu?.thesis?.status || "Currently under review at IEEE Transactions on Image Processing, Q1 Journal";

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-900/60 relative"
    >
      <SEO title="About & Academic Bio" description={academicOverview} sectionId="about" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.015),transparent_40%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div id="about-heading" className="space-y-2 mb-14 text-center">
          <div className="font-mono text-xs text-indigo-500 dark:text-emerald-400 uppercase tracking-widest font-bold">01 / Profile Overview</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-850 dark:text-slate-100">Biography & Research Philosophy</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Extensive Bio */}
          <div id="about-bio-panel" className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-250 text-left">
              Merging Theoretical Deep Learning with Production AI Systems
            </h3>
            <p className="text-sm sm:text-base text-slate-650 dark:text-slate-350 leading-relaxed font-sans text-justify">
              <HighlightText text={academicOverview} query={searchQuery} />
            </p>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-450 leading-relaxed font-sans text-justify">
              I believe that scientific development does not exist in a vacuum. The architectural insights uncovered during theoretical deep learning prototyping should feed directly into configuring real-world chatbot modules, multilingual conversation states, and reliable automated logic paths.
            </p>

            {/* Core Capability Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {academicPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  id={`about-pillar-${idx}`}
                  className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 hover:border-slate-300 dark:hover:border-slate-800 transition-all flex items-start gap-3 group text-left shadow-sm"
                >
                  <span className="p-1.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-slate-950 transition-colors mt-0.5 shrink-0">
                    <Layers className="w-4 h-4" />
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    <HighlightText text={pillar} query={searchQuery} />
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Educational Focus & Thesis Card */}
          <div id="about-details-panel" className="lg:col-span-5 space-y-6 bg-slate-50 dark:bg-slate-900/45 p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-900 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
              <GraduationCap className="w-6 h-6 text-indigo-500 dark:text-emerald-400" />
              <h4 className="text-lg font-mono tracking-wide uppercase text-slate-700 dark:text-slate-300 font-bold">Academic Core</h4>
            </div>

            <div className="space-y-4 text-left">
              <div>
                <div className="text-[10px] text-slate-450 uppercase tracking-widest font-mono font-semibold">Degree</div>
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                  <HighlightText text={degree} query={searchQuery} />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-sans mt-0.5">
                  <HighlightText text={institution} query={searchQuery} />
                </div>
                <div className="text-[11px] text-indigo-600 dark:text-emerald-400 font-mono mt-0.5">{duration}</div>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800/50">
                <div className="text-[10px] text-slate-450 uppercase tracking-widest font-mono font-semibold">Academic Metrics</div>
                <div className="flex gap-4 mt-1 font-mono text-xs">
                  <div>
                    <span className="text-slate-500">BSc CGPA: </span>
                    <span className="text-indigo-600 dark:text-emerald-400 font-semibold">{cgpa}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">IELTS overall: </span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">7.5</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800/50 space-y-2">
                <div className="text-[10px] text-slate-450 uppercase tracking-widest font-mono font-semibold">BSc Graduation Thesis</div>
                <div className="p-3 bg-white dark:bg-slate-950/60 rounded border border-emerald-500/15 dark:border-emerald-500/20 shadow-inner">
                  <div className="text-xs font-semibold text-slate-805 dark:text-slate-200 italic leading-snug">
                    “<HighlightText text={thesisTitle} query={searchQuery} />”
                  </div>
                  <div className="text-[10px] text-indigo-600 dark:text-emerald-400 font-mono mt-2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-555 dark:bg-emerald-500 space-y-0.5 animate-pulse" />
                    <HighlightText text={thesisStatus} query={searchQuery} />
                  </div>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  <span className="text-slate-450">Advisor: </span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    <HighlightText text={advisor} query={searchQuery} />
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
