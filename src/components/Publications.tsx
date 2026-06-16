import React, { useState } from "react";
import { BookOpen, Award, CheckSquare, Layers, FileText, ChevronRight, ExternalLink, Bookmark, Copy, Check, Github, GraduationCap } from "lucide-react";
import { publications, Publication } from "../data/publications";
import { socialLinks } from "../data/socialLinks";
import SEO from "./SEO";
import HighlightText from "./HighlightText";

interface PublicationsProps {
  searchQuery: string;
}

export default function Publications({ searchQuery }: PublicationsProps) {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [copiedDoiId, setCopiedDoiId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(true); // Support compact or expanded view toggling

  const tabs = [
    { id: 'all', label: 'All Publications', icon: Layers },
    { id: 'journal', label: 'Journals', icon: FileText },
    { id: 'conference', label: 'Conferences', icon: Bookmark },
    { id: 'under_review', label: 'Under Review', icon: Award },
    { id: 'cv', label: 'Computer Vision', icon: BookOpen },
    { id: 'nlp', label: 'NLP', icon: BookOpen },
    { id: 'medical', label: 'Medical AI', icon: BookOpen },
    { id: 'cybersecurity', label: 'Cybersecurity', icon: BookOpen }
  ] as const;

  // Custom filter mapping for tabs representing types AND tags
  const getFilteredPublications = () => {
    let list = publications;
    if (activeTab === 'all') return list;
    if (activeTab === 'journal') return list.filter(p => p.type === 'journal');
    if (activeTab === 'conference') return list.filter(p => p.type === 'conference');
    if (activeTab === 'under_review') return list.filter(p => p.type === 'under_review');
    
    const cvTags = ['computer vision', 'image inpainting', 'image restoration', 'super resolution', 'animal tracking', 'object tracking', 'road extraction', 'satellite imagery', 'remote sensing', 'yolo', 'object detection'];
    const nlpTags = ['nlp', 'transformers', 'sentiment analysis', 'bert', 'hate speech detection', 'offensive language', 'email filtering', 'bengali nlp'];
    const medicalTags = ['medical ai', 'medical imaging', 'chronic kidney disease', 'anemia detection', 'mri', 'healthcare ai', 'federated learning'];
    const cyberTags = ['cybersecurity', 'email filtering', 'hate speech detection', 'offensive language', 'bert'];

    if (activeTab === 'cv') {
      return list.filter(p => p.tags.some(t => cvTags.includes(t.toLowerCase())));
    }
    if (activeTab === 'nlp') {
      return list.filter(p => p.tags.some(t => nlpTags.includes(t.toLowerCase())));
    }
    if (activeTab === 'medical') {
      return list.filter(p => p.tags.some(t => medicalTags.includes(t.toLowerCase())));
    }
    if (activeTab === 'cybersecurity') {
      return list.filter(p => p.tags.some(t => cyberTags.includes(t.toLowerCase())));
    }
    return list;
  };

  const filteredPublications = getFilteredPublications();

  // Search filtering matching title, authors, venue, DOI, or tags
  const query = searchQuery.trim().toLowerCase();
  const searchFiltered = query
    ? filteredPublications.filter(pub => 
        pub.title.toLowerCase().includes(query) ||
        pub.authors.toLowerCase().includes(query) ||
        pub.venue.toLowerCase().includes(query) ||
        pub.tags.some(t => t.toLowerCase().includes(query)) ||
        (pub.doi && pub.doi.toLowerCase().includes(query))
      )
    : filteredPublications;

  // Google Scholar profiles
  const scholarUrl = socialLinks.find(link => link.name === "Google Scholar")?.url || "https://scholar.google.com/citations?user=wBgGImMAAAAJ";
  const researchGateUrl = socialLinks.find(link => link.name === "ResearchGate")?.url || "#";

  // Copy DOI clip action
  const handleCopyDoi = (e: React.MouseEvent, doi: string, id: string) => {
    e.preventDefault();
    navigator.clipboard.writeText(doi);
    setCopiedDoiId(id);
    setTimeout(() => {
      setCopiedDoiId(null);
    }, 2000);
  };

  // Dynamically highlight Avishek Majumder in authorship formats and highlight matches
  const formatAuthorship = (authorsStr: string) => {
    const targetName = "Avishek Majumder";
    const parts = authorsStr.split(targetName);
    if (parts.length > 1) {
      return (
        <span className="text-slate-600 dark:text-slate-400">
          {parts.map((part, i) => (
            <React.Fragment key={i}>
              <HighlightText text={part} query={searchQuery} />
              {i < parts.length - 1 && (
                <strong className="text-emerald-600 dark:text-emerald-400 font-bold underline decoration-emerald-500/50">
                  {targetName}
                </strong>
              )}
            </React.Fragment>
          ))}
        </span>
      );
    }
    return <HighlightText text={authorsStr} query={searchQuery} />;
  };

  return (
    <section
      id="publications"
      className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-900/60 relative"
    >
      <SEO title="Peer-Reviewed Literature & Publications" description="Scrutinize the published works and ongoing academic reviews of Avishek Majumder." sectionId="publications" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.015),transparent_40%)]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Scholar Banner Headline Card */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 mb-12 rounded-2xl bg-gradient-to-r from-slate-100 via-slate-100/90 to-slate-200 dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-950 border border-slate-200 dark:border-slate-850 shadow-sm">
          <div className="space-y-1.5 text-left">
            <div className="flex items-center gap-1.5">
              <Award className="w-5 h-5 text-amber-600 dark:text-amber-500" />
              <span className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold">Research Indices</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Citations Index · 60+ Peer-Reviewed Credits</h3>
            <p className="text-xs text-slate-650 dark:text-slate-400 font-sans max-w-xl">
              Published across high-impact international conference proceedings and early access journals including IEEE Transactions on Artificial Intelligence (TAI).
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              id="header-scholar-btn"
              href={scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:border-amber-500 text-xs font-mono text-amber-600 dark:text-amber-450 font-bold transition-all transform hover:-translate-y-0.5 cursor-pointer shadow-sm hover:shadow"
            >
              <GraduationCap className="w-4 h-4 text-amber-550 dark:text-amber-500" />
              Google Scholar Profile
            </a>
            <a
              id="header-research-gate-btn"
              href={researchGateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-555/5 dark:bg-teal-500/10 border border-slate-200 dark:border-teal-500/30 hover:border-slate-300 dark:hover:border-teal-400 text-xs font-mono text-teal-700 dark:text-teal-400 font-bold transition-all transform hover:-translate-y-0.5 cursor-pointer shadow-sm"
            >
              <FileText className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              ResearchGate
            </a>
          </div>
        </div>

        {/* Dynamic Section Header */}
        <div id="publications-heading" className="space-y-2 mb-8 text-center">
          <div className="font-mono text-xs text-indigo-500 dark:text-emerald-400 uppercase tracking-widest font-bold">05 / Peer-Reviewed Literature</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-sans text-slate-800 dark:text-slate-100">
            {publications.length} Research Publications
          </h2>
          <p className="text-xs text-slate-500 font-mono">
            Filter by academic venue category or specific deep learning domain
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Filter Tab System */}
        <div id="publication-tabs-panel" className="flex flex-wrap items-center justify-center gap-1.5 mb-8 border-b border-slate-200 dark:border-slate-900 pb-5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                id={`pub-tab-${tab.id}`}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-mono text-[11px] uppercase tracking-wider transition-all border cursor-pointer ${
                  isActive
                    ? "bg-emerald-555 bg-emerald-550 dark:bg-emerald-500 text-white dark:text-slate-950 border-emerald-400 font-bold shadow-md"
                    : "bg-slate-100 dark:bg-slate-900/30 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-900/60 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-350 dark:hover:border-slate-800"
                }`}
              >
                <Icon className="w-3 h-3 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* View Toggle Bar (Compact/Expanded settings) */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-mono text-slate-500 dark:text-slate-450">
            Showing <span className="text-emerald-600 dark:text-emerald-400 font-bold">{searchFiltered.length}</span> matching manuscripts
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[11px] font-mono hover:text-emerald-600 dark:hover:text-emerald-400 text-slate-500 dark:text-slate-400 underline transition-all cursor-pointer"
          >
            Switch to {isExpanded ? 'Compact' : 'Detailed'} View
          </button>
        </div>

        {/* Publication Cards list layout */}
        <div id="publications-list" className="space-y-4">
          {searchFiltered.map((pub: Publication) => {
            const isIEEE = pub.publisher?.toLowerCase().includes("ieee");
            const hasPaperUrl = pub.paperUrl && pub.paperUrl !== "#";
            
            return (
              <div
                key={pub.id}
                id={`pub-card-${pub.id}`}
                className="group p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/15 border border-slate-200 dark:border-slate-900 hover:border-emerald-500/40 dark:hover:border-emerald-500/20 hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-all duration-350 flex flex-col md:flex-row md:items-start gap-5 justify-between relative overflow-hidden shadow-sm"
              >
                {/* Visual side-fader line indicating first author */}
                {pub.isFirstAuthor && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-teal-500" />
                )}

                <div className="space-y-2.5 flex-1 text-left">
                  {/* Badge Pills row */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2 py-0.5 rounded-md text-[8px] uppercase tracking-wider font-mono font-bold ${
                      pub.type === 'journal' 
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/25' 
                        : pub.type === 'conference' 
                        ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/25' 
                        : 'bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/25'
                    }`}>
                      {pub.type.replace('_', ' ')}
                    </span>

                    {pub.isFirstAuthor && (
                      <span className="px-2 py-0.5 rounded-md text-[8px] uppercase tracking-wider font-mono font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 dark:border-emerald-500/30">
                        First Author ✨
                      </span>
                    )}

                    {!pub.isFirstAuthor && (
                      <span className="px-2 py-0.5 rounded-md text-[8px] uppercase tracking-wider font-mono font-semibold bg-slate-100 dark:bg-slate-950 text-slate-500">
                        Co-author
                      </span>
                    )}

                    {isIEEE && (
                      <span className="px-2 py-0.5 rounded-md text-[8px] uppercase tracking-wider font-mono font-bold bg-slate-100 dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 border border-indigo-500/15">
                        IEEE
                      </span>
                    )}

                    <span className="px-2 py-0.5 rounded-md text-[8px] font-mono bg-slate-100 dark:bg-slate-900 text-slate-500">
                      {pub.year}
                    </span>
                  </div>

                  {/* Title and details depending on expanded view state */}
                  <div className="space-y-1.5 text-left">
                    {hasPaperUrl ? (
                      <h3 className="text-[13px] sm:text-sm md:text-base font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors leading-snug">
                        <a
                          href={pub.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline transition-all decoration-emerald-500/50 underline-offset-4"
                        >
                          <HighlightText text={pub.title} query={searchQuery} />
                        </a>
                      </h3>
                    ) : (
                      <h3 className="text-[13px] sm:text-sm md:text-base font-bold text-slate-800 dark:text-slate-100 leading-snug">
                        <HighlightText text={pub.title} query={searchQuery} />
                      </h3>
                    )}
                    
                    {/* Highlighted Authors format */}
                    <div className="text-xs text-slate-650 dark:text-slate-400 font-sans leading-relaxed">
                      {formatAuthorship(pub.authors)}
                    </div>
                  </div>

                  {/* Detailed Academic indices shown only if detailed view state is active */}
                  {isExpanded && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 pt-3 border-t border-slate-200 dark:border-slate-900/60 text-xs text-slate-600 dark:text-slate-400 font-sans">
                      <div className="flex items-start gap-1.5 text-left">
                        <span className="text-slate-500 font-mono uppercase text-[9px] mt-0.5 select-none tracking-wider shrink-0 w-24">Published in:</span>
                        <span className="text-indigo-650 dark:text-indigo-350 font-medium leading-tight">
                          <HighlightText text={pub.venue} query={searchQuery} />
                        </span>
                      </div>
                      
                      {pub.location && (
                        <div className="flex items-center gap-1.5 text-left">
                          <span className="text-slate-500 font-mono uppercase text-[9px] select-none tracking-wider shrink-0 w-24">Conference Loc:</span>
                          <span className="text-slate-700 dark:text-slate-300">
                            <HighlightText text={pub.location} query={searchQuery} />
                          </span>
                        </div>
                      )}

                      {pub.date && (
                        <div className="flex items-center gap-1.5 text-left">
                          <span className="text-slate-500 font-mono uppercase text-[9px] select-none tracking-wider shrink-0 w-24">Date:</span>
                          <span className="text-slate-700 dark:text-slate-350 font-mono">{pub.date}</span>
                        </div>
                      )}

                      {pub.dateAddedToIEEE && (
                        <div className="flex items-center gap-1.5 text-left">
                          <span className="text-slate-500 font-mono uppercase text-[9px] select-none tracking-wider shrink-0 w-24">IEEE Xplore added:</span>
                          <span className="text-emerald-700 dark:text-emerald-500/80 font-mono">{pub.dateAddedToIEEE}</span>
                        </div>
                      )}

                      {pub.isbn && (
                        <div className="flex items-center gap-1.5 text-left">
                          <span className="text-slate-500 font-mono uppercase text-[9px] select-none tracking-wider shrink-0 w-24">ISBN reference:</span>
                          <span className="text-slate-700 dark:text-slate-400 font-mono">{pub.isbn}</span>
                        </div>
                      )}

                      {pub.issn && (
                        <div className="flex items-center gap-1.5 text-left">
                          <span className="text-slate-500 font-mono uppercase text-[9px] select-none tracking-wider shrink-0 w-24">ISSN reference:</span>
                          <span className="text-slate-700 dark:text-slate-400 font-mono">{pub.issn}</span>
                        </div>
                      )}

                      {pub.pages && (
                        <div className="flex items-center gap-1.5 text-left">
                          <span className="text-slate-500 font-mono uppercase text-[9px] select-none tracking-wider shrink-0 w-24">Pages:</span>
                          <span className="text-slate-700 dark:text-slate-300 font-mono">{pub.pages}</span>
                        </div>
                      )}

                      {pub.doi && (
                        <div className="flex items-center gap-1.5 text-left">
                          <span className="text-slate-500 font-mono uppercase text-[9px] select-none tracking-wider shrink-0 w-24">DOI reference:</span>
                          <span className="text-emerald-700 dark:text-emerald-500/90 font-mono select-all">
                            <HighlightText text={pub.doi} query={searchQuery} />
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Dynamic Tags Chips layout */}
                  {isExpanded && pub.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {pub.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-mono bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Interactive publications buttons */}
                <div className="flex flex-row md:flex-col items-center md:items-end gap-2 shrink-0 self-start md:self-center mt-3 md:mt-0 font-mono text-xs">
                  {hasPaperUrl ? (
                    <a
                      id={`pub-open-${pub.id}`}
                      href={pub.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-555 bg-emerald-600 hover:bg-emerald-500 text-white dark:text-slate-950 rounded-lg transition-colors font-bold whitespace-nowrap shadow-sm hover:shadow cursor-pointer"
                    >
                      <span>View Paper</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <div className="text-[9px] text-slate-500 dark:text-slate-550 border border-slate-250 dark:border-slate-900 px-2 py-1 rounded">
                      In Review phase
                    </div>
                  )}

                  {pub.github && (
                    <a
                      id={`pub-code-${pub.id}`}
                      href={pub.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-indigo-700 dark:text-indigo-400 border border-slate-200 dark:border-indigo-500/10 rounded-lg transition-colors font-bold whitespace-nowrap cursor-pointer"
                    >
                      <span>Code Repo</span>
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {pub.doi && (
                    <button
                      id={`pub-copy-doi-${pub.id}`}
                      onClick={(e) => handleCopyDoi(e, pub.doi!, pub.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:border-slate-350 dark:bg-slate-950 dark:border-slate-900 dark:hover:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 rounded-lg transition-all whitespace-nowrap cursor-pointer shadow-sm"
                    >
                      {copiedDoiId === pub.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span className="text-[10px]">Copy DOI</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

              </div>
            );
          })}

          {searchFiltered.length === 0 && (
            <div className="text-center py-12 rounded-2xl border border-slate-200 dark:border-slate-900 bg-slate-100/50 dark:bg-slate-900/10 font-mono">
              <p className="text-sm text-slate-500">No matching peer-reviewed literature found matching your criteria.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
