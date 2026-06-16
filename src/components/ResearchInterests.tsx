import React from "react";
import * as Icons from "lucide-react";
import { Award, Star, Flame, Sparkles, Database, HelpCircle, LineChart, Cpu } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SEO from "./SEO";
import HighlightText from "./HighlightText";

interface ResearchInterestsProps {
  searchQuery: string;
}

export default function ResearchInterests({ searchQuery }: ResearchInterestsProps) {
  const { interests } = portfolioData;

  // Safe dynamic icon rendering helper
  const renderIcon = (name: string) => {
    const IconComponent = (Icons as any)[name] || Icons.Cpu;
    return <IconComponent className="w-6 h-6 text-emerald-600 dark:text-emerald-400 group-hover:text-slate-950 dark:group-hover:text-slate-950 transition-colors" />;
  };

  const impactMetrics = [
    {
      title: "Theoretical Image Restoration",
      impact: "Formulated unified frameworks (DFGNet, SAMRBNet) addressing simultaneous non-additive physical camera noise and blur. These architectures represent significant milestones in mathematical inverse mapping.",
      icon: Flame,
      color: "text-amber-600 dark:text-amber-450 bg-amber-500/5 border-amber-500/10"
    },
    {
      title: "Applied Medical & Satellite Diagnosis",
      impact: "Transferred neural networks to non-invasive clinical diagnostics (Parkinson's MRI detection, CGPA CKD prediction) and real-time remote-sensing segmentations (road network trace lines).",
      icon: Sparkles,
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 border-emerald-500/10"
    },
    {
      title: "Industrial Agentic Automation",
      impact: "Constructed deterministic intent handlers, custom vector RAG states, and low-latency n8n agent routing trees at PowerinAI, translating prompt methodologies into concrete corporate systems.",
      icon: Cpu,
      color: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/5 border-indigo-500/10"
    }
  ];

  return (
    <section
      id="research-interests"
      className="py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-900/60 relative"
    >
      <SEO title="Principal Research Areas & Scientific Impact" description="Key domains of academic work and practical deep learning impact, focusing on Computer Vision, Generative AI, and Image Restoration." sectionId="research-interests" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.015),transparent_40%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div id="interests-heading" className="space-y-2 mb-14 text-center">
          <div className="font-mono text-xs text-indigo-500 dark:text-indigo-400 uppercase tracking-widest font-bold">02 / Technical Domains</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-sans text-slate-800 dark:text-slate-100">Research Areas & Interests</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Group Grid of Interests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, idx) => (
            <div
              key={interest.title}
              id={`interest-card-${idx}`}
              className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/10 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:bg-slate-100 dark:hover:bg-slate-900/35 transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow"
            >
              {/* Subtle card glow on hover */}
              <div className="absolute -right-12 -top-12 w-24 h-24 rounded-full bg-emerald-500/5 group-hover:bg-emerald-500/10 blur-xl transition-all" />
              
              <div className="text-left">
                {/* Icon Wrapper */}
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-emerald-500/5 border border-slate-250 dark:border-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-555 dark:group-hover:bg-emerald-400 transition-colors">
                  {renderIcon(interest.iconName)}
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors font-sans">
                  <HighlightText text={interest.title} query={searchQuery} />
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-450 leading-relaxed mt-2 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors font-sans">
                  <HighlightText text={interest.description} query={searchQuery} />
                </p>
              </div>

              {/* Bottom accent pill line */}
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-emerald-500 to-indigo-500 transition-all duration-500 mt-6 rounded-full" />
            </div>
          ))}
        </div>

        {/* Sub-section: Research Impact (3 column bento cards) */}
        <div className="mt-20 pt-16 border-t border-slate-200 dark:border-slate-900/60 max-w-6xl mx-auto space-y-12">
          
          <div className="space-y-2 text-center">
            <div className="font-mono text-xs text-indigo-500 dark:text-emerald-400 tracking-widest uppercase font-bold">Scientific Contributions</div>
            <h3 className="text-2xl font-bold tracking-tight font-sans text-slate-800 dark:text-slate-100">Practical & Theoretical Research Impact</h3>
            <div className="w-10 h-0.5 bg-emerald-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactMetrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/10 border border-slate-200 dark:border-slate-900 hover:border-indigo-500/25 dark:hover:border-indigo-500/15 hover:bg-slate-100/30 transition-all text-left space-y-4 shadow-sm"
                >
                  <div className={`p-2.5 rounded-xl border w-fit ${item.color}`}>
                    <Icon className="w-5 h-5 shrink-0" />
                  </div>
                  <div className="space-y-1.5 font-sans">
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-snug">
                      <HighlightText text={item.title} query={searchQuery} />
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-450 leading-relaxed font-sans">
                      <HighlightText text={item.impact} query={searchQuery} />
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Synthesis quote card */}
        <div id="research-quote" className="mt-16 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-850 text-center max-w-4xl mx-auto shadow-sm">
          <p className="text-xs sm:text-sm font-mono text-emerald-650 dark:text-emerald-400 font-bold italic leading-relaxed">
            “Developing efficient vision algorithms and prompt routines requires complete understanding of physical image matrices, natural language attention systems, and strict error bounds.”
          </p>
        </div>

      </div>
    </section>
  );
}
