import { projects, Project } from "../data/projects";
import { publications, Publication } from "../data/publications";
import { profile } from "../data/profile";
import { education, EducationItem } from "../data/education";
import { skills, SkillGroup } from "../data/skills";
import { portfolioData } from "../data/portfolioData";
import { socialLinks } from "../data/socialLinks";

export interface SearchableItem {
  id: string;
  type: "project" | "publication" | "experience" | "education" | "skill" | "interest" | "blog" | "certification" | "academic_service" | "contact";
  title: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
  link?: string;
  raw: any;
}

/**
 * Builds and returns a flat, aggregated array of all portfolio data
 * designed for highly efficient and consistent global indexing/searching.
 */
export function buildSearchIndex(): SearchableItem[] {
  const index: SearchableItem[] = [];

  // 1. Projects
  projects.forEach((proj: Project) => {
    index.push({
      id: `project-${proj.id}`,
      type: "project",
      title: proj.title,
      subtitle: proj.category,
      description: proj.description,
      tags: proj.tags,
      link: proj.github || proj.paperUrl || undefined,
      raw: proj,
    });
  });

  // 2. Publications
  publications.forEach((pub: Publication) => {
    index.push({
      id: `pub-${pub.id}`,
      type: "publication",
      title: pub.title,
      subtitle: pub.venue,
      description: `${pub.authors}. Publisher: ${pub.publisher}. DOI: ${pub.doi || "N/A"}. Location: ${pub.location || ""}`,
      tags: pub.tags,
      link: pub.paperUrl,
      raw: pub,
    });
  });

  // 3. Experiences
  profile.experiences.forEach((exp, idx) => {
    index.push({
      id: `exp-${idx}-${exp.company.toLowerCase().replace(/\s+/g, "-")}`,
      type: "experience",
      title: exp.role,
      subtitle: `${exp.company} • ${exp.location} | ${exp.period}`,
      description: exp.bullets.join(" "),
      raw: exp,
    });
  });

  // 4. Education Items
  education.forEach((edu: EducationItem) => {
    const desc = edu.thesis
      ? `Thesis: ${edu.thesis.title} (Advisor: ${edu.thesis.advisor}). Status: ${edu.thesis.status}`
      : "";
    index.push({
      id: `edu-${edu.id}`,
      type: "education",
      title: edu.degree,
      subtitle: `${edu.institution} | ${edu.duration} ${edu.grade ? `(Grade: ${edu.grade})` : ""}`,
      description: desc,
      raw: edu,
    });
  });

  // 5. Skills
  skills.forEach((group: SkillGroup) => {
    index.push({
      id: `skill-${group.category.toLowerCase().replace(/[^a-z0-9]/g, "-")}`,
      type: "skill",
      title: group.category,
      description: group.skills.join(", "),
      tags: group.skills,
      raw: group,
    });
  });

  // 6. Research Interests
  portfolioData.interests.forEach((interest, idx) => {
    index.push({
      id: `interest-${idx}`,
      type: "interest",
      title: interest.title,
      description: interest.description,
      raw: interest,
    });
  });

  // 7. Research Blog Posts
  portfolioData.blog.forEach((blogItem) => {
    index.push({
      id: `blog-${blogItem.id}`,
      type: "blog",
      title: blogItem.title,
      subtitle: `${blogItem.category} | ${blogItem.date} (${blogItem.readTime})`,
      description: `${blogItem.excerpt} ${blogItem.content}`,
      raw: blogItem,
    });
  });

  // 8. Certifications
  profile.certifications.forEach((cert, idx) => {
    index.push({
      id: `cert-${idx}`,
      type: "certification",
      title: cert,
      subtitle: "Professional Certification",
      description: "Credential in computer science, software, Javascript, or machine learning, verified on platforms like freeCodeCamp or Coursera.",
      raw: cert,
    });
  });

  // 9. Academic Service (Journal reviews)
  profile.academicService.journals.forEach((journal, idx) => {
    index.push({
      id: `service-${idx}`,
      type: "academic_service",
      title: journal,
      subtitle: "Peer Reviewer - Scientific Journal",
      description: `Active academic peer-review service evaluating manuscripts in artificial intelligence, remote sensing, and animal science for journals like Elsevier and Annals of Animal Science.`,
      raw: journal,
    });
  });

  // 10. Contact / Social Links
  socialLinks.forEach((link, idx) => {
    index.push({
      id: `contact-${link.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`,
      type: "contact",
      title: link.name,
      subtitle: "Contact Card & Professional Link",
      description: `Connect via ${link.name} at ${link.url}`,
      link: link.url,
      raw: link,
    });
  });

  return index;
}

// Global cached flat index
let cachedIndex: SearchableItem[] | null = null;

export function getSearchIndex(): SearchableItem[] {
  if (!cachedIndex) {
    cachedIndex = buildSearchIndex();
  }
  return cachedIndex;
}

/**
 * Searches and scores items dynamically based on relevance filtering.
 */
export function querySearchIndex(query: string): SearchableItem[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) {
    return getSearchIndex();
  }

  return getSearchIndex().filter((item) => {
    const matchTitle = item.title.toLowerCase().includes(trimmed);
    const matchSubtitle = item.subtitle?.toLowerCase().includes(trimmed) || false;
    const matchDescription = item.description?.toLowerCase().includes(trimmed) || false;
    const matchTags = item.tags?.some((t) => t.toLowerCase().includes(trimmed)) || false;

    return matchTitle || matchSubtitle || matchDescription || matchTags;
  });
}
