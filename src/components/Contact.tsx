import React, { useState } from "react";
import * as Icons from "lucide-react";
import { Mail, Phone, ExternalLink, ArrowRight, CheckCircle, Send, HelpCircle } from "lucide-react";
import { profile } from "../data/profile";
import { socialLinks } from "../data/socialLinks";
import HighlightText from "./HighlightText";
import SEO from "./SEO";

interface ContactProps {
  searchQuery?: string;
}

export default function Contact({ searchQuery = "" }: ContactProps) {
  const { location, fullAddress, headline } = profile;
  const currentOrganization = "Avishek Majumder | AI Research";
  
  // Extract primary email and phone/whatsapp if available
  const emailLink = socialLinks.find(link => link.name === "Email")?.url || "mailto:avishekmajumderpciu@gmail.com";
  const emailAddress = emailLink.replace("mailto:", "");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please supply your name, email, and message context.");
      return;
    }
    setError("");
    setIsSubmitting(true);

    // Simulate network delay and auto-launch the default email program
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      const mailtoUrl = generateMailtoLink();
      window.location.href = mailtoUrl;
    }, 800);
  };

  const generateMailtoLink = () => {
    const subjectLine = `${formData.subject || "Research Inquiry from Portfolio"} - ${formData.name}`;
    const bodyText = `Hi Avishek,\n\n${formData.message}\n\nSender Contact Details:\nName: ${formData.name}\nEmail: ${formData.email}`;
    return `${emailLink}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyText)}`;
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitted(false);
  };

  // Safe dynamic icon rendering helper
  const renderIcon = (name: string) => {
    const IconComponent = (Icons as any)[name] || HelpCircle;
    return <IconComponent className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-300 transition-colors" />;
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-900/60 relative"
    >
      <SEO
        title="Connect & Collaborate on Research"
        description="Connect with Avishek Majumder for academic collaborations, full-text publication requests, or enterprise-grade prompt/agent partnerships."
        keywords={["Contact", "Avishek Majumder Email", "Research Collaboration", "Prompt Engineer Consulting"]}
        sectionId="contact"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.015),transparent_45%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div id="contact-heading" className="space-y-2 mb-14 text-center">
          <div className="font-mono text-xs text-indigo-500 dark:text-emerald-400 uppercase tracking-widest font-bold">08 / Direct Coordination</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-sans text-slate-800 dark:text-slate-100">Connect & Collaborate</h2>
          <p className="text-xs text-slate-500 font-mono mt-2">
            Ask questions, request full text publication drafts, or coordinate consulting
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Social channels & links (5 cols) */}
          <div id="contact-channels-panel" className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 text-left">
                Primary Coordinates
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans text-justify">
                Feel free to email me directly or converse using professional messaging lines. For physical letters or academic dispatch, use the verified location below.
              </p>

              {/* Physical/Mailing Address Card */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-905 text-xs text-slate-550 dark:text-slate-400 font-sans leading-relaxed space-y-1 text-left shadow-sm">
                <span className="text-[10px] text-slate-450 dark:text-slate-500 uppercase tracking-widest font-mono font-bold block">Verified Office Location</span>
                <p className="text-slate-800 dark:text-slate-200 font-bold">{currentOrganization}</p>
                <p className="text-slate-600 dark:text-slate-350">{fullAddress}</p>
              </div>

              {/* Grid of actual social/messaging channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {socialLinks.map((link) => (
                  <a
                    id={`contact-channel-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/10 border border-slate-200 dark:border-slate-900 hover:border-emerald-555/45 dark:hover:border-emerald-500/20 hover:bg-slate-100/30 dark:hover:bg-slate-900/40 flex items-center gap-3.5 transition-all duration-300 shadow-sm"
                  >
                    <span className="p-2 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 text-emerald-600 dark:text-emerald-400 shrink-0 shadow-sm">
                      {renderIcon(link.iconName)}
                    </span>
                    <div className="space-y-0.5 truncate text-left">
                      <span className="text-[9px] text-slate-455 dark:text-slate-500 uppercase tracking-wider font-mono font-bold block">
                        <HighlightText text={link.name} query={searchQuery} />
                      </span>
                      <span className="text-xs text-slate-650 dark:text-slate-300 font-semibold group-hover:text-emerald-600 dark:group-hover:text-emerald-450 transition-colors truncate block max-w-[200px] sm:max-w-[240px]">
                        {link.url.replace("https://", "").replace("mailto:", "").split("?")[0]}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Dispatch Drawer (7 cols) */}
          <div id="contact-form-panel" className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/10 border border-slate-205 dark:border-slate-900 flex flex-col justify-center shadow-sm">
            
            {/* Success state rendering */}
            {isSubmitted ? (
              <div id="contact-success-screen" className="text-center py-12 space-y-6 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center animate-pulse shadow-md">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Message Draft Prepared!</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto font-sans leading-relaxed">
                    Your email client will open with the message ready to send. If the client did not launch automatically, use the button below to send.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 w-full max-w-sm justify-center">
                  <a
                    id="contact-dispatch-btn"
                    href={generateMailtoLink()}
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white dark:text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-lg cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Send Email
                  </a>
                  <button
                    id="contact-recompose-btn"
                    onClick={resetForm}
                    className="px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all font-mono text-xs uppercase tracking-wider cursor-pointer shadow-sm"
                  >
                    Write Another
                  </button>
                </div>
              </div>
            ) : (
              /* Active Input Form Layout */
              <form id="contact-text-form" onSubmit={handleFormSubmission} className="space-y-4 text-left">
                <div className="space-y-1">
                  <h3 className="text-base font-mono uppercase tracking-widest text-slate-700 dark:text-slate-300 font-extrabold leading-none">Send Message</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-450">Coordinate projects or request peer-reviewed text revisions</p>
                </div>

                {error && (
                  <div className="p-3 bg-rose-50 dark:bg-rose-500/5 border border-rose-200 dark:border-rose-500/10 rounded font-mono text-xs text-rose-600 dark:text-rose-400 font-bold">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-[9px] text-slate-500 dark:text-slate-450 uppercase tracking-widest font-mono font-bold">Your Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full bg-white dark:bg-slate-950 border border-slate-250 dark:border-slate-900 rounded-xl py-2.5 px-3.5 text-xs text-slate-800 dark:text-slate-300 focus:outline-none focus:border-emerald-500/50 transition-all font-sans shadow-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-[9px] text-slate-500 dark:text-slate-450 uppercase tracking-widest font-mono font-bold">Your Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane.doe@example.com"
                      className="w-full bg-white dark:bg-slate-950 border border-slate-250 dark:border-slate-900 rounded-xl py-2.5 px-3.5 text-xs text-slate-800 dark:text-slate-300 focus:outline-none focus:border-emerald-500/50 transition-all font-sans shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-[9px] text-slate-500 dark:text-slate-450 uppercase tracking-widest font-mono font-bold">Subject Inquiry</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Research synergy / job opportunity / peer revision"
                    className="w-full bg-white dark:bg-slate-950 border border-slate-250 dark:border-slate-900 rounded-xl py-2.5 px-3.5 text-xs text-slate-800 dark:text-slate-300 focus:outline-none focus:border-emerald-500/50 transition-all font-sans shadow-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-[9px] text-slate-500 dark:text-slate-450 uppercase tracking-widest font-mono font-bold">Context or Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Dear Avishek, I read your super-resolution paper in early access and want to learn..."
                    className="w-full bg-white dark:bg-slate-950 border border-slate-250 dark:border-slate-900 rounded-xl py-2.5 px-3.5 text-xs text-slate-800 dark:text-slate-300 focus:outline-none focus:border-emerald-500/50 transition-all font-sans shadow-sm"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white dark:text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all cursor-pointer shadow hover:shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-slate-950 animate-ping" />
                      <span>Preparing Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
