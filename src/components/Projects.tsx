import React, { useState } from "react";
import { FolderGit2, Sparkles, ExternalLink, ArrowUpRight, Github } from "lucide-react";
import { projects, Project } from "../data/projects";
import SEO from "./SEO";
import HighlightText from "./HighlightText";

interface ProjectsProps {
  searchQuery: string;
}

export default function Projects({ searchQuery }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Computer Vision",
    "NLP",
    "Image Restoration"
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => 
        p.category.toLowerCase() === activeCategory.toLowerCase() || 
        p.tags.some(t => t.toLowerCase().includes(activeCategory.toLowerCase()))
      );

  const query = searchQuery.trim().toLowerCase();
  const searchFiltered = query
    ? filteredProjects.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.tags.some(t => t.toLowerCase().includes(query))
      )
    : filteredProjects;

  return (
    <section
      id="projects"
      className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-900/60 relative"
    >
      <SEO title="Academic Codebases & Projects" description="Read and access the official deep learning algorithms and repositories authored by Avishek Majumder." sectionId="projects" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.02),transparent_40%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div id="projects-heading" className="space-y-2 mb-10 text-center">
          <div className="font-mono text-xs text-indigo-500 dark:text-indigo-400 uppercase tracking-widest font-bold">04 / Experimental Engineering</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-sans text-slate-800 dark:text-slate-100">Featured Research Projects</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Filter Navigation Tabs */}
        <div id="project-filters-panel" className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider transition-all border cursor-pointer ${
                activeCategory === cat
                  ? "bg-emerald-555 bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 border-emerald-450 dark:border-emerald-400 font-bold shadow-md"
                  : "bg-slate-100 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-900 hover:text-slate-900 dark:hover:text-slate-100 hover:border-slate-350 dark:hover:border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid Cards */}
        <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchFiltered.map((project: Project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group rounded-2xl bg-white dark:bg-slate-900/15 border border-slate-200 dark:border-slate-900 hover:border-emerald-555/35 dark:hover:border-emerald-500/20 hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-all duration-300 p-6 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md"
            >
              {/* Background gradient hint */}
              <div className="absolute -right-8 -top-8 w-16 h-16 rounded-full bg-indigo-500/5 group-hover:bg-indigo-500/10 blur-xl transition-all" />

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-indigo-500/5 border border-slate-200 dark:border-indigo-500/10 font-mono text-[9px] uppercase tracking-widest text-indigo-700 dark:text-indigo-300">
                    <FolderGit2 className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />
                    <span>
                      <HighlightText text={project.category} query={searchQuery} />
                    </span>
                  </div>
                  
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">
                      <Sparkles className="w-3 h-3 text-emerald-555 dark:text-emerald-400 animate-pulse" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors line-clamp-2 text-left">
                  <HighlightText text={project.title} query={searchQuery} />
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans mt-3 line-clamp-4 text-left">
                  <HighlightText text={project.description} query={searchQuery} />
                </p>
              </div>

              {/* Tags & Action Link footer section */}
              <div className="mt-6 pt-4 border-t border-slate-150 dark:border-slate-900/80 font-sans">
                <div className="flex flex-wrap gap-1.5 mb-4 justify-start">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 text-slate-500 dark:text-slate-500 font-mono text-[9px] uppercase hover:text-emerald-600 dark:hover:text-emerald-300 hover:bg-slate-200 dark:hover:bg-slate-900 transition-all border border-slate-200 dark:border-transparent animate-fade-in"
                    >
                      #<HighlightText text={tag} query={searchQuery} />
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-150 dark:border-slate-900">
                  <span className="text-[10px] font-mono text-slate-450 group-hover:text-emerald-600 dark:group-hover:text-emerald-450 transition-colors">
                    Official codebase link
                  </span>
                  
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        id={`project-github-${project.id}`}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-mono text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors font-bold cursor-pointer"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.paperUrl && (
                      <a
                        id={`project-paper-${project.id}`}
                        href={project.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-mono text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors font-bold ml-2.5 cursor-pointer"
                      >
                        <span>Paper</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}

          {searchFiltered.length === 0 && (
            <div className="col-span-full py-12 text-center rounded-xl bg-slate-100/50 dark:bg-slate-900/10 border border-slate-200 dark:border-slate-900">
              <p className="font-mono text-sm text-slate-500">No projects match your active search filter.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
