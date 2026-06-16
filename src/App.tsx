import React, { useState } from "react";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ResearchInterests from "./components/ResearchInterests";
import Experience from "./components/Experience";
import Education from "./components/Education";
import FeaturedPapers from "./components/FeaturedPapers";
import Publications from "./components/Publications";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AcademicServiceAndCerts from "./components/AcademicServiceAndCerts";
import ResearchBlog from "./components/ResearchBlog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  const revealVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`}>
      {/* Decorative top ambient grid for light mode */}
      {!isDark && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_60%,transparent_100%)] opacity-30 pointer-events-none" />
      )}

      {/* Primary Navigation Hub */}
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Main Container Modules */}
      <main className="relative">
        {/* 1. Hero */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={revealVariants}
        >
          <Hero />
        </motion.div>
        
        <div className="divide-y divide-slate-200/45 dark:divide-slate-900/40">
          {/* 2. About */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={revealVariants}
          >
            <About searchQuery={searchQuery} />
          </motion.div>

          {/* 3. Research Areas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={revealVariants}
          >
            <ResearchInterests searchQuery={searchQuery} />
          </motion.div>

          {/* 4. Professional Experience */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={revealVariants}
          >
            <Experience searchQuery={searchQuery} />
          </motion.div>

          {/* 5. Education & Scientific Credibility */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={revealVariants}
          >
            <Education searchQuery={searchQuery} />
          </motion.div>

          {/* 6. Featured Papers */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={revealVariants}
          >
            <FeaturedPapers searchQuery={searchQuery} />
          </motion.div>

          {/* 7. Publications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={revealVariants}
          >
            <Publications searchQuery={searchQuery} />
          </motion.div>

          {/* 8. Research / GitHub Projects */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={revealVariants}
          >
            <Projects searchQuery={searchQuery} />
          </motion.div>

          {/* 9. Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={revealVariants}
          >
            <Skills searchQuery={searchQuery} />
          </motion.div>

          {/* 10. Academic Service & Certifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={revealVariants}
          >
            <AcademicServiceAndCerts searchQuery={searchQuery} />
          </motion.div>

          {/* 11. Research Blog */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={revealVariants}
          >
            <ResearchBlog searchQuery={searchQuery} />
          </motion.div>

          {/* 12. Contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={revealVariants}
          >
            <Contact searchQuery={searchQuery} />
          </motion.div>
        </div>
      </main>

      {/* System Footer & Scroll vectors */}
      <Footer />
      <ScrollToTop />
    </div>
  );
}
