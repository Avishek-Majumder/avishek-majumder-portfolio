import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string | string[];
  sectionId?: string; // HTML section ID, e.g. "about", "projects"
}

export default function SEO({ title, description, keywords, sectionId }: SEOProps) {
  useEffect(() => {
    // Shared title suffix
    const baseSuffix = "Avishek Majumder - Research Portfolio";

    const applyMeta = () => {
      document.title = `${title} | ${baseSuffix}`;
      updateMetaTags(title, description, keywords);
    };

    if (!sectionId) {
      applyMeta();
      return;
    }

    const targetElement = document.getElementById(sectionId);
    if (!targetElement) {
      applyMeta();
      return;
    }

    // Elegant scroll observer to dynamically switch social title configurations in-view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          applyMeta();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "-10% 0px -40% 0px", // focus primarily on active viewer center line
      }
    );

    observer.observe(targetElement);
    return () => {
      observer.disconnect();
    };
  }, [title, description, keywords, sectionId]);

  return null;
}

function updateMetaTags(title: string, description: string, keywords?: string | string[]) {
  const updateOrCreateMeta = (attrName: string, attrVal: string, contentVal: string) => {
    try {
      let metaNode = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!metaNode) {
        metaNode = document.createElement("meta");
        metaNode.setAttribute(attrName, attrVal);
        document.head.appendChild(metaNode);
      }
      metaNode.setAttribute("content", contentVal);
    } catch (error) {
      console.warn("Could not set document metadata node safely", error);
    }
  };

  updateOrCreateMeta("name", "description", description);
  updateOrCreateMeta("property", "og:title", title);
  updateOrCreateMeta("property", "og:description", description);
  updateOrCreateMeta("property", "og:type", "profile");
  updateOrCreateMeta("property", "og:image", "/avatar.png");
  updateOrCreateMeta("name", "twitter:card", "summary");
  updateOrCreateMeta("name", "twitter:title", title);
  updateOrCreateMeta("name", "twitter:description", description);

  if (keywords) {
    const keywordsStr = Array.isArray(keywords) ? keywords.join(", ") : keywords;
    updateOrCreateMeta("name", "keywords", keywordsStr);
  }
}
