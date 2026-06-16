export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  supervisor?: string;
  bullets: string[];
}

export interface Profile {
  name: string;
  headline: string;
  shortIntro: string;
  academicOverview: string;
  academicPillars: string[];
  photo: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  fullAddress: string;
  academicService: {
    title: string;
    journals: string[];
  };
  certifications: string[];
  activities: {
    role: string;
    org: string;
    period: string;
  }[];
  experiences: Experience[];
  stats: { label: string; value: string }[];
}

export const profile: Profile = {
  name: "Avishek Majumder",
  headline: "AI Researcher, Computer Vision Specialist & Prompt / Agentic AI Engineer",
  shortIntro: "AI researcher and prompt / agentic AI engineer working across NLP, computer vision, image restoration, medical imaging, and production LLM agents. I design deep-learning pipelines and production AI systems for chat, voice, automation, RAG, multilingual workflows, and research-driven AI applications.",
  academicOverview: "Avishek Majumder is an AI researcher and prompt/agentic AI engineer working across computer vision, image restoration, medical imaging, NLP, and production LLM agents. He completed his BSc in Computer Science and Engineering from Port City International University, Chattogram, Bangladesh, with a CGPA of 3.63/4.00. His research on deep visual restoration architectures involves resolving extreme atmospheric noise, multi-noise denoising, and high-frequency super-resolution datasets.",
  academicPillars: [
    "Rigorous academic research & Deep learning experimentation",
    "Robust image restoration pipelines in extreme noise environments",
    "Production-focused Prompt Engineering & AI voice agent workflows",
    "Structured multi-source RAG knowledge bases & conversation systems"
  ],
  photo: "https://lh3.googleusercontent.com/d/1HZSIaZF41DgnhgCy6V4_iZ7DobUKFVxu", // Direct visual fetch link for public Google Drive attachment
  email: "avishekmajumderpciu@gmail.com",
  phone: "+880 1518-496669",
  whatsapp: "+8801518496669",
  location: "Dhanmondi, Dhaka-1205, Bangladesh",
  fullAddress: "43/5, Haji Abdul High Lane Road, Dhanmondi, Dhaka-1205",
  academicService: {
    title: "Peer Reviewer",
    journals: [
      "Engineering Applications of Artificial Intelligence (Elsevier)",
      "ISPRS Journal of Photogrammetry and Remote Sensing (Elsevier)",
      "Annals of Animal Science"
    ]
  },
  certifications: [
    "JavaScript Algorithms and Data Structures (freeCodeCamp)",
    "Data Visualization Tools (freeCodeCamp)",
    "Machine Learning with Python (freeCodeCamp / Coursera)"
  ],
  activities: [
    {
      role: "General Member",
      org: "PCIU Computer Club",
      period: "Sept 2021 – May 2024"
    },
    {
      role: "General Member",
      org: "CAAP - CSE Alumni Association of PCIU",
      period: "Oct 2023 – Present"
    }
  ],
  experiences: [
    {
      role: "Prompt Engineer",
      company: "PowerinAI",
      location: "Remote / Hybrid",
      period: "May 2025 – Present",
      bullets: [
        "Design and optimize enterprise-grade prompt systems for conversational AI chatbots and natural-voice agents.",
        "Build, test, and maintain robust multilingual, intent-aware dialogue loops supporting diverse complex customer intents.",
        "Implement reliability guardrails, prompt templates, and evaluation pipelines to restrict hallucinations and increase deterministic accuracy.",
        "Create advanced Retrieval-Augmented Generation (RAG) knowledge integrations linked with live external structured APIs.",
        "Construct responsive visual workflows using n8n and orchestrate production AI agent pipelines with custom tools."
      ]
    },
    {
      role: "Research Assistant",
      company: "Artificial Intelligence Laboratory (AI Lab)",
      location: "Rangamati Science & Technology University",
      period: "April 2024 – April 2025",
      supervisor: "Prof. Tanjim Mahmud",
      bullets: [
        "Conducted thorough literature reviews and formally defined complex problems in image restoration and medical visual automation.",
        "Designed and formulated innovative deep learning architectures including DFGNet, SAMRBNet, and SNASRNet.",
        "Assembled highly reproducible training, evaluation, and hyperparameter search pipelines using PyTorch and Git.",
        "Acquired raw visual datasets and performed surgical preprocessing, data augmentation, ablation study testing, and robust error analysis.",
        "Drafted technical manuscripts with strict academic formatting guidelines and peer-reviewed internal laboratory submissions."
      ]
    }
  ],
  stats: [
    { label: "Listed Publications", value: "9" },
    { label: "IEEE TAI Journal Paper", value: "1" },
    { label: "Total Citations", value: "60+" },
    { label: "IELTS Band Score", value: "7.5" },
    { label: "BSc CSE CGPA", value: "3.63/4.00" },
    { label: "Production Systems", value: "Research + AI" }
  ]
};
