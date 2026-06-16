import React from "react";
import { Award, BookOpen, ExternalLink, Github, Layers, Calendar, FileText } from "lucide-react";
import { publications, Publication } from "../data/publications";
import HighlightText from "./HighlightText";
import SEO from "./SEO";

interface FeaturedPapersProps {
  searchQuery: string;
}

export default function FeaturedPapers({ searchQuery }: FeaturedPapersProps) {
  // Hard selective IDs matching the exact 4 featured papers
  const featuredIds = [
    "pub-snasrnet-under-review",
    "pub-image-inpainting-2025",
    "pub-email-filtering-2025",
    "pub-dfgnet-satellite-2025"
  ];

  // Map to obtain elements with fallback to avoid hard crashes if IDs change
  const featuredList = publications.filter((pub) => featuredIds.includes(pub.id));

  // If a research search mode is running, filter or display matching papers
  const query = searchQuery.trim().toLowerCase();
  const filteredList = query 
    ? featuredList.filter(
        (pub) =>
          pub.title.toLowerCase().includes(query) ||
          pub.venue.toLowerCase().includes(query) ||
          pub.tags.some((t) => t.toLowerCase().includes(query))
      )
    : featuredList;

  // Custom visual label mappings for the 4 featured projects
  const getCustomLabel = (id: string, originalTitle: string) => {
    if (id === "pub-snasrnet-under-review") return "SNASRNet: Multi-Noise Denoising & Super Resolution";
    if (id === "pub-image-inpainting-2025") return "SAMRBNET Image Inpainting";
    if (id === "pub-email-filtering-2025") return "BERT Email Filtering in Cybersecurity";
    if (id === "pub-dfgnet-satellite-2025") return "DFGNet Road Extraction from Satellites";
    return originalTitle;
  };

  const getCustomBadge = (id: string) => {
    if (id === "pub-snasrnet-under-review") return "Computer Vision • Peer Journal under Q1 Review";
    if (id === "pub-image-inpainting-2025") return "Computer Vision • IEEE TAI Journal";
    if (id === "pub-email-filtering-2025") return "NLP • Cybersecurity Conference Paper";
    if (id === "pub-dfgnet-satellite-2025") return "Computer Vision • Remote Sensing & ECCE";
    return "Core Academic Literature";
  };

  const getCustomSummary = (id: string) => {
    if (id === "pub-snasrnet-under-review") {
      return "Formulates a unified framework leveraging deep residual blind restorations to execute extreme multi-noise image denoising and high-frequency super-resolution datasets simultaneously.";
    }
    if (id === "pub-image-inpainting-2025") {
      return "Introduces a state-of-the-art transformer inpainting model integrating a self-attention mechanism and customized residual blocks, published in IEEE Transactions on Artificial Intelligence.";
    }
    if (id === "pub-email-filtering-2025") {
      return "Engineers fine-tuned BERT representations optimized for email sequence classifications, delivering superior precision metrics against high-risk spam/phishing vectors.";
    }
    if (id === "pub-dfgnet-satellite-2025") {
      return "Presents a dual-flow global fusion feature-extraction network optimized to extract satellite-registered road networks under extreme density or atmospheric disruptions.";
    }
    return "";
  };

  return (
    <section
      id="featured-papers"
      className="py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-905 relative overflow-hidden"
    >
      <SEO
        title="Featured Scientific Manuscripts"
        description="Scrutinize the four premier peer-reviewed machine learning works authored by Avishek Majumder spanning Computer Vision, Generative AI, and BERT cybersecurity."
        keywords={["SNASRNet", "SAMRBNET", "BERT Cybersecurity", "DFGNet road extraction"]}
        sectionId="featured-papers"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.012),transparent_45%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="featured-papers-heading" className="space-y-2 mb-14 text-center">
          <div className="font-mono text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-bold">04 / Selected Highlights</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-sans text-slate-800 dark:text-slate-100">
            Featured Research Papers
          </h2>
          <p className="text-xs text-slate-500 font-mono">
            Key research contributions across deep vision restoration and transformer classification networks
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        {/* 2x2 Bento/Grid Panel layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredList.map((pub: Publication) => {
            const displayTitle = getCustomLabel(pub.id, pub.title);
            const displayBadge = getCustomBadge(pub.id);
            const displaySummary = getCustomSummary(pub.id);
            const hasPaperUrl = pub.paperUrl && pub.paperUrl !== "#";

            return (
              <div
                key={pub.id}
                id={`featured-paper-card-${pub.id}`}
                className="group p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-slate-900/10 border border-slate-200 dark:border-slate-900 hover:border-emerald-500/40 dark:hover:border-emerald-500/25 hover:bg-white dark:hover:bg-slate-900/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between relative text-left"
              >
                {/* Micro left visual border accent for first authors */}
                {pub.isFirstAuthor && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-l" />
                )}

                <div className="space-y-4">
                  {/* Badge Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-900 pb-3">
                    <span className="text-[9px] font-mono font-bold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-500/5 px-2 py-1 rounded-md border border-emerald-505/10">
                      {displayBadge}
                    </span>
                    {pub.isFirstAuthor && (
                      <span className="text-[8px] font-mono font-extrabold uppercase bg-emerald-500 text-white dark:text-slate-950 px-1.5 py-0.5 rounded">
                        1ST AUTHOR
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <div className="space-y-2">
                    {hasPaperUrl ? (
                      <a
                        href={pub.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group-hover:text-emerald-650 dark:group-hover:text-emerald-450 transition-colors"
                      >
                        <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 group-hover:underline decoration-emerald-500/40 underline-offset-4 leading-normal">
                          <HighlightText text={displayTitle} query={searchQuery} />
                        </h3>
                      </a>
                    ) : (
                      <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 leading-normal">
                        <HighlightText text={displayTitle} query={searchQuery} />
                      </h3>
                    )}

                    {/* Authorship string formatted */}
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans italic">
                      {pub.authors.includes("Avishek Majumder") ? (
                        <>
                          {pub.authors.split("Avishek Majumder")[0]}
                          <strong className="text-emerald-600 dark:text-emerald-400 font-bold underline decoration-emerald-500/40">
                            Avishek Majumder
                          </strong>
                          {pub.authors.split("Avishek Majumder")[1]}
                        </>
                      ) : (
                        pub.authors
                      )}
                    </p>
                  </div>

                  {/* Curated Summary Paragraph */}
                  <p className="text-xs text-slate-600 dark:text-slate-350 font-sans leading-relaxed">
                    {displaySummary}
                  </p>

                  {/* Tags list */}
                  <div className="flex flex-wrap gap-1 pt-2">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono bg-slate-100/85 dark:bg-slate-950/60 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded border border-slate-205 dark:border-slate-850"
                      >
                        #{tag.toLowerCase()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Button Links */}
                <div className="flex items-center gap-3 pt-5 mt-5 border-t border-slate-100 dark:border-slate-900 font-mono text-xs">
                  {hasPaperUrl && (
                    <a
                      href={pub.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white dark:text-slate-950 rounded-lg transition-colors font-bold shadow-sm whitespace-nowrap cursor-pointer"
                    >
                      <span>Read Paper</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {pub.github && (
                    <a
                      href={pub.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-200/50 hover:bg-slate-250 dark:bg-slate-900/60 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300/40 dark:border-slate-800 rounded-lg transition-colors font-semibold shadow-inner whitespace-nowrap cursor-pointer"
                    >
                      <span>Codebase</span>
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}

          {filteredList.length === 0 && (
            <div className="col-span-1 md:col-span-2 text-center py-10 rounded-2xl border border-slate-200 dark:border-slate-900 bg-slate-100/50 dark:bg-slate-900/10 font-mono">
              <p className="text-xs text-slate-500">No matching featured manuscripts found matching "{searchQuery}".</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
