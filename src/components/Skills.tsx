import React from "react";
import { Cpu, Terminal, Layers, Database, Hammer, Brain } from "lucide-react";
import { skills } from "../data/skills";
import HighlightText from "./HighlightText";
import SEO from "./SEO";

interface SkillsProps {
  searchQuery: string;
}

export default function Skills({ searchQuery }: SkillsProps) {
  // Render helper to associate categories with unique category icons
  const getCategoryIcon = (category: string) => {
    const term = category.toLowerCase();
    if (term.includes("programming")) return <Terminal className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    if (term.includes("machine") || term.includes("deep")) return <Brain className="w-5 h-5 text-indigo-605 dark:text-indigo-400" />;
    if (term.includes("prompt") || term.includes("ai")) return <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    if (term.includes("data") || term.includes("medical")) return <Layers className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
    if (term.includes("web") || term.includes("database")) return <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
    return <Hammer className="w-5 h-5 text-slate-550 dark:text-slate-400" />;
  };

  return (
    <section
      id="skills"
      className="py-16 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-900/60 relative"
    >
      <SEO
        title="Technical Skills Matrix"
        description="Explore the programming, machine learning, deep learning, prompt engineering, and medical imaging skillset of Avishek Majumder."
        keywords={["PyTorch", "TensorFlow", "Computer Vision", "NLP", "Prompt Engineering", "RAG Systems", "n8n"]}
        sectionId="skills"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.01),transparent_40%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div id="skills-heading" className="space-y-2 mb-12 text-center">
          <div className="font-mono text-xs text-indigo-500 dark:text-indigo-400 uppercase tracking-widest font-bold">06 / Intelligence Grid</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Technical Skills Matrix</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Grouped skill listing */}
        <div id="skills-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, groupIdx) => (
            <div
              key={group.category}
              id={`skill-group-${groupIdx}`}
              className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/10 border border-slate-200 dark:border-slate-900 hover:border-emerald-555/45 dark:hover:border-emerald-500/20 hover:bg-slate-100/40 dark:hover:bg-slate-900/30 transition-all duration-300 shadow-sm"
            >
              {/* Card Title Header */}
              <div className="flex items-center gap-2.5 border-b border-slate-150 dark:border-slate-800 pb-4 mb-4 text-left">
                <span className="p-1.5 rounded bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 shadow-sm">
                  {getCategoryIcon(group.category)}
                </span>
                <h3 className="text-sm font-mono tracking-widest uppercase text-slate-700 dark:text-slate-300 font-bold">
                  <HighlightText text={group.category} query={searchQuery} />
                </h3>
              </div>

              {/* Skills Chips list */}
              <div className="flex flex-wrap gap-2 justify-start">
                {group.skills.map((skill, skillIdx) => (
                  <span
                    key={skill}
                    id={`skill-chip-${groupIdx}-${skillIdx}`}
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 dark:bg-slate-950 dark:border-slate-800 text-xs text-slate-650 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:shadow-sm transition-all cursor-default select-none shadow-sm"
                  >
                    <HighlightText text={skill} query={searchQuery} />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Integration Callout Section */}
        <div id="skills-footer-callout" className="mt-12 p-6 rounded-xl border border-slate-150 dark:border-slate-900 bg-slate-50 dark:bg-slate-900/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 font-sans text-left">
            <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Are you hiring for deep learning or automation?</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl">
              I can join teams to train computer vision pipelines, build LLM system routing chains, configure n8n production loops, audit dataset biases, or write detailed academic manuscripts.
            </p>
          </div>
          <a
            id="skills-hire-link"
            href="#contact"
            className="px-5 py-2.5 rounded bg-emerald-555 bg-emerald-600 hover:bg-emerald-500 text-white dark:text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all text-center shrink-0 cursor-pointer shadow hover:shadow-md"
          >
            Initiate Consultation
          </a>
        </div>

        {/* Dynamic empty search states fallback */}
        {skills.every(g => !g.category.toLowerCase().includes(searchQuery.toLowerCase()) && !g.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))) && searchQuery.trim() !== "" && (
          <div className="mt-8 py-10 text-center border border-slate-200 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/5 rounded-2xl">
            <p className="text-xs font-mono text-slate-500">No matching specific technical skills found within the matrix.</p>
          </div>
        )}

      </div>
    </section>
  );
}
