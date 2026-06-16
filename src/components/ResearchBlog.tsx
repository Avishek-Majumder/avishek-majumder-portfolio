import React, { useState } from "react";
import { BookOpen, Calendar, Clock, X, ArrowUpRight, HelpCircle, ArrowRight } from "lucide-react";
import { portfolioData, BlogItem } from "../data/portfolioData";
import HighlightText from "./HighlightText";
import SEO from "./SEO";

interface ResearchBlogProps {
  searchQuery: string;
}

export default function ResearchBlog({ searchQuery }: ResearchBlogProps) {
  const { blog } = portfolioData;
  const [selectedArticle, setSelectedArticle] = useState<BlogItem | null>(null);

  const query = searchQuery.trim().toLowerCase();
  const searchFiltered = query
    ? blog.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.content.toLowerCase().includes(query)
      )
    : blog;

  return (
    <section
      id="research-blog"
      className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-900/60 relative"
    >
      <SEO
        title="Research Notes & AI Insights Blog"
        description="Read technical deep-dives on computer vision noise reduction, robust AI evaluation methods, the mechanics of prompt design, and RAG architectures."
        keywords={["Image Restoration", "Scientific Evaluation", "Prompt Engineering Blog", "RAG Pipeline", "Deep Learning Articles"]}
        sectionId="research-blog"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.015),transparent_40%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div id="blog-heading" className="space-y-2 mb-14 text-center">
          <div className="font-mono text-xs text-indigo-500 dark:text-emerald-400 uppercase tracking-widest font-bold">09 / Academic Musings</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Research Notes & Insights</h2>
          <p className="text-xs text-slate-500 font-mono mt-2">
            Dissecting deep learning inverse problems, evaluation paradigms, and interactive prompting stateflows
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Blog cards grid */}
        <div id="blog-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchFiltered.map((item: BlogItem) => (
            <div
              key={item.id}
              id={`blog-card-${item.id}`}
              className="group rounded-xl bg-white dark:bg-slate-900/10 border border-slate-200 dark:border-slate-900 hover:border-emerald-555/40 dark:hover:border-emerald-500/20 hover:bg-slate-100/50 dark:hover:bg-slate-900/30 transition-all duration-300 p-6 flex flex-col justify-between relative overflow-hidden text-left shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex items-center justify-between font-mono text-[10px] text-slate-500">
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                    <BookOpen className="w-3 h-3" />
                    <span>
                      <HighlightText text={item.category} query={searchQuery} />
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[14px] sm:text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-605 dark:group-hover:text-emerald-300 transition-colors line-clamp-2 leading-snug">
                  <HighlightText text={item.title} query={searchQuery} />
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans line-clamp-4">
                  <HighlightText text={item.excerpt} query={searchQuery} />
                </p>
              </div>

              {/* Read button */}
              <button
                id={`blog-read-btn-${item.id}`}
                onClick={() => setSelectedArticle(item)}
                className="mt-6 pt-4 border-t border-slate-150 dark:border-slate-900/80 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors cursor-pointer w-full text-left"
              >
                <span>Read Research Note</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                  Full Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          ))}
        </div>

        {searchFiltered.length === 0 && (
          <div className="text-center py-12 rounded-2xl border border-slate-250 dark:border-slate-900 bg-slate-100/50 dark:bg-slate-900/10 font-mono">
            <p className="text-sm text-slate-550">No research notes match your active search filter.</p>
          </div>
        )}

        {/* Reader modal / floating panel overlay */}
        {selectedArticle && (
          <div
            id="blog-modal-backdrop"
            className="fixed inset-0 z-50 bg-slate-400/50 dark:bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedArticle(null)}
          >
            <div
              id="blog-modal-content"
              className="w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 rounded-xl p-6 sm:p-8 space-y-6 relative focus:outline-none shadow-2xl animate-fade-in"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                id="blog-modal-close"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-105 hover:bg-slate-100 dark:hover:bg-slate-950 transition-colors cursor-pointer"
                aria-label="Close article modal reader"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Category */}
              <div className="font-mono text-[10px] text-indigo-600 dark:text-emerald-400 uppercase tracking-widest flex items-center gap-1 font-bold text-left">
                <span>Category:</span>
                <span className="font-extrabold">{selectedArticle.category}</span>
              </div>

              {/* Title */}
              <div className="space-y-2 text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-850 dark:text-slate-100 tracking-tight leading-snug">
                  <HighlightText text={selectedArticle.title} query={searchQuery} />
                </h3>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-505">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
                    {selectedArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
                    {selectedArticle.readTime}
                  </span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-slate-150 dark:bg-slate-800/60" />

              {/* Article Content */}
              <div className="text-slate-700 dark:text-slate-300 font-sans text-sm sm:text-base leading-relaxed space-y-4 text-justify">
                <p className="font-semibold text-emerald-700 dark:text-emerald-305">
                  <HighlightText text={selectedArticle.excerpt} query={searchQuery} />
                </p>
                <p className="pt-2 text-slate-600 dark:text-slate-400">
                  <HighlightText text={selectedArticle.content} query={searchQuery} />
                </p>
                <p className="text-slate-500 text-xs italic border-t border-slate-150 dark:border-slate-800/40 pt-4 font-mono">
                  * Note: This analytical paper is preserved as part of Avishek's private portfolio notebook series. To request collaborative research expansion or read matching manuscripts under evaluation, please write using the primary dashboard communication channel.
                </p>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  id="blog-modal-back-btn"
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 rounded-lg bg-emerald-555 bg-emerald-600 hover:bg-emerald-500 text-white dark:text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all cursor-pointer"
                >
                  Done Reading
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
