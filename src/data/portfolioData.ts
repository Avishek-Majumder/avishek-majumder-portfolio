export interface Interest {
  title: string;
  description: string;
  iconName: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  supervisor?: string;
  bullets: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  featured: boolean;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  date: string;
  type: 'journal' | 'conference' | 'ongoing';
  statusLabel?: string;
  doi?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface BlogItem {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  category: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Avishek Majumder",
    title: "AI Researcher, Computer Vision Specialist & Prompt Engineer",
    shortIntro: "I design intelligent AI systems across computer vision, image restoration, NLP, and real-world conversational AI. My work connects academic research with production-grade AI automation, including prompt systems, RAG workflows, and multilingual chatbot and voice-agent experiences.",
    academicOverview: "Avishek Majumder is an AI researcher and Prompt Engineer with experience in computer vision, image restoration, medical imaging, NLP, and production AI automation. He completed his BSc in Computer Science and Engineering from Port City International University, Chattogram, Bangladesh, with a CGPA of 3.63/4.00. His thesis is titled 'A Unified Framework for Multi-Noise Image Denoising and Super Resolution', currently under review at IEEE Transactions on Image Processing (TIP).",
    academicPillars: [
      "Rigorous academic research & Deep learning experimentation",
      "Robust image restoration pipelines in extreme noise environments",
      "Production-focused Prompt Engineering & AI voice agent workflows",
      "Structured multi-source RAG knowledge bases & conversation systems"
    ],
    stats: [
      { label: "Conference Papers", value: "8 Citations / Papers" },
      { label: "Q1 Journal Papers", value: "1 Active" },
      { label: "Total Citations", value: "60+" },
      { label: "IELTS Band Score", value: "7.5 (L:8.5, R:8)" },
      { label: "BSc CSE CGPA", value: "3.63 / 4.00" }
    ],
    contactPlaceholders: {
      email: "avishekmajumderpciu@gmail.com", // Keeping it real but customizable
      phone: "+880-XXXXXXXXXX",
      linkedin: "https://linkedin.com/in/your-profile",
      github: "https://github.com/your-username",
      googleScholar: "https://scholar.google.com/citations?user=your-id",
      researchGate: "https://www.researchgate.net/profile/Avishek-Majumder",
      portfolio: "https://avishek-majumder.vercel.app"
    }
  },
  
  interests: [
    {
      title: "Image Processing",
      description: "Transforming raw digital signal arrays to extract, refine, and represent structural features.",
      iconName: "Image"
    },
    {
      title: "Computer Vision",
      description: "Developing semantic understanding of visual media, leveraging advanced convolutional and attention networks.",
      iconName: "Eye"
    },
    {
      title: "Visual AI",
      description: "Bridging human vision-inspired AI architecture with production platforms for real-time inference.",
      iconName: "Cpu"
    },
    {
      title: "Image Restoration",
      description: "Solving classical mathematical inverse problems such as multi-noise denoising, super-resolution, and visual inpainting.",
      iconName: "Sparkles"
    },
    {
      title: "Data-Intensive Imaging",
      description: "Scaling learning frameworks to handle high-resolution, complex datasets with optimized execution pipelines.",
      iconName: "Database"
    },
    {
      title: "Medical Imaging",
      description: "Applying Deep Learning to MRI scan segmentations and multi-modal clinical diagnoses with privacy guarantees.",
      iconName: "HeartPulse"
    },
    {
      title: "Robust Learning Under Real-World Noise",
      description: "Optimizing models to classify or restore patterns in the presence of sensor errors, transmission fuzz, and artifacts.",
      iconName: "ShieldAlert"
    },
    {
      title: "Natural Language Processing",
      description: "Constructing robust semantic maps, prompt trees, and intent decoders for interactive automation.",
      iconName: "MessageSquare"
    }
  ] as Interest[],

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
  ] as Experience[],

  projects: [
    {
      id: "dfgnet",
      title: "DFGNet: Hybrid Road Extraction from Satellite Imagery",
      category: "Computer Vision",
      description: "Developed a hybrid neural pipeline incorporating deep residual modules and hierarchical fusion blocks for continuous, robust road extraction from earth-observing satellite photography. Resolves fragmentation over occluded passages.",
      tags: ["Computer Vision", "Satellite Imagery", "Deep Learning", "Road Extraction"],
      featured: true
    },
    {
      id: "bert-cyber",
      title: "Harnessing BERT for Advanced Email Filtering in Cybersecurity",
      category: "NLP",
      description: "Engineered a fine-tuned BERT text classification architecture focused on hostile intent detection, malicious links processing, and social engineering classification. Successfully mitigates zero-day phishing vector impacts.",
      tags: ["BERT", "NLP", "Cybersecurity", "Email Filtering"],
      featured: true
    },
    {
      id: "self-attention-inpainting",
      title: "Self-Attention Image Inpainting Network",
      category: "Image Restoration",
      description: "Authored a novel convolutional encoder-decoder structure enhanced by contextual attention layers to reconstruct large missing structures in highly detailed images while conserving structural symmetry.",
      tags: ["Image Inpainting", "Self-Attention", "Residual Blocks", "IEEE TAI"],
      featured: true
    },
    {
      id: "denoising-super-res",
      title: "Unified Framework for Multi-Noise Image Denoising & Super Resolution",
      category: "Super Resolution",
      description: "Authored a powerful joint-objective network for simultaneous multi-modal restoration. Resolves non-Gaussian mixtures of sensor noise while mapping details back to higher pixel density grids.",
      tags: ["Image Denoising", "Super Resolution", "Image Restoration", "TIP Under Review"],
      featured: true
    },
    {
      id: "yolo-adverse-weather",
      title: "YOLO-Based Object Detection in Adverse Weather",
      category: "Computer Vision",
      description: "Adapted object detection backbones to operate effectively under severe weather conditions (heavy rain, fog, low light). Integrates custom image enhancement blocks before detection heads.",
      tags: ["YOLO", "Object Detection", "Autonomous Vehicles", "Adverse Weather"],
      featured: false
    },
    {
      id: "federated-parkinsons",
      title: "Federated Learning for Parkinson’s Disease Detection from MRI",
      category: "Medical Imaging",
      description: "Structured a decentralized deep neural training approach that securely visualizes structural MRI indicators of Parkinson's across collaborative centers without violating participant patient privacy.",
      tags: ["Medical Imaging", "Federated Learning", "MRI", "Healthcare AI"],
      featured: false
    }
  ] as Project[],

  publications: [
    {
      id: "conf-1",
      title: "DFGNet: A Hybrid Approach for Enhanced Road Extraction with Satellite Imagery and Global Fusion",
      authors: "Avishek Majumder, et al.",
      venue: "2025 International Conference on Electrical, Computer and Communication Engineering (ECCE)",
      date: "2025",
      type: "conference",
      statusLabel: "Published (IEEE)"
    },
    {
      id: "conf-2",
      title: "Harnessing BERT for Advanced Email Filtering in Cybersecurity",
      authors: "Avishek Majumder, et al.",
      venue: "2025 8th International Conference on Information and Computer Technologies (ICICT)",
      date: "2025",
      type: "conference",
      statusLabel: "Published (IEEE)"
    },
    {
      id: "journ-1",
      title: "A Novel Image Inpainting Network with Self-Attention Mechanism and Residual Block",
      authors: "Avishek Majumder, et al.",
      venue: "IEEE Transactions on Artificial Intelligence (IEEE TAI)",
      date: "2025",
      type: "journal",
      doi: "10.1109/TAI.2025.3634483",
      statusLabel: "Published (Q1 / Q2)"
    },
    {
      id: "review-1",
      title: "A Unified Framework for Multi-Noise Image Denoising and Super Resolution",
      authors: "Avishek Majumder, et al.",
      venue: "IEEE Transactions on Image Processing (IEEE TIP)",
      date: "In Review",
      type: "ongoing",
      statusLabel: "Under Review (Q1 Journal)"
    },
    {
      id: "review-2",
      title: "YOLO Based Object Detection for Autonomous Vehicles in Adverse Weather",
      authors: "Avishek Majumder, et al.",
      venue: "Engineering Letters, IAENG",
      date: "In Review",
      type: "ongoing",
      statusLabel: "Under Review (Q3 Journal)"
    },
    {
      id: "review-3",
      title: "Unveiling Parkinson's Disease: Enhanced Detection from MRI Images Leveraging Federated Learning Paradigms",
      authors: "Avishek Majumder, et al.",
      venue: "IEEE Transactions on Artificial Intelligence (IEEE TAI)",
      date: "In Review",
      type: "ongoing",
      statusLabel: "Under Review (Q1 Journal)"
    }
  ] as Publication[],

  education: {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "Port City International University",
    location: "Chattogram, Bangladesh",
    period: "January 2020 – April 2024",
    cgpa: "3.63 / 4.00",
    thesisTitle: "A Unified Framework for Multi-Noise Image Denoising and Super Resolution",
    advisor: "Ms. Tahmina Akter, Assistant Professor, Department of CSE",
    ielts: {
      overall: "7.5",
      listening: "8.5",
      reading: "8.0",
      writing: "6.5",
      speaking: "6.5"
    }
  },

  skills: [
    {
      category: "Programming",
      skills: ["Python", "C", "MATLAB", "LaTeX", "Bash"]
    },
    {
      category: "Machine Learning & Deep Learning",
      skills: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "NumPy", "Pandas", "Computer Vision", "NLP"]
    },
    {
      category: "AI & Prompt Engineering",
      skills: ["Prompt Design", "Prompt Evaluation", "RAG Systems", "Voice Agents", "Chatbot Flows", "Multilingual Systems", "n8n Workflows"]
    },
    {
      category: "Data & Medical Imaging",
      skills: ["Visual Preprocessing", "Ablation Study Design", "MRI Analysis", "Decentralized Federated Learning", "Model Evaluation"]
    },
    {
      category: "Web & Database",
      skills: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript", "React", "MySQL"]
    },
    {
      category: "Tools & Collaboration",
      skills: ["Git", "GitHub CI/CD", "MS Office", "LaTeX Editors", "Linux Admin"]
    }
  ] as SkillGroup[],

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

  blog: [
    {
      id: "blog-1",
      title: "Building Robust Vision Models Under Real-World Noise",
      date: "June 2026",
      readTime: "6 min read",
      category: "Computer Vision",
      excerpt: "Why pure-Gaussian denoising fails in outer space and clinical scenarios, and how real-world multi-noise registration architectures change the super-resolution landscape.",
      content: "When training image restoration architectures, the academic community frequently relies on synthetic datasets contaminated with clean, mathematically pristine white Gaussian noise. But in practice, real-world camera sensors, satellite arrays, and MRI devices capture composite multi-noise mixtures containing impulse noise, Poisson noise, and banding. In this article, we deep-dive into how our unified model coordinates multi-noise detection heads and structural attention pipelines, proving that joint training on combined denoising and super-resolution yields 4.2dB PSNR gains over sequential pipelines."
    },
    {
      id: "blog-2",
      title: "What Prompt Engineers Can Learn from Research Evaluation",
      date: "May 2026",
      readTime: "5 min read",
      category: "AI & Prompting",
      excerpt: "Connecting the rigor of scientific evaluation with production prompt metrics to eliminate hallucinations and build resilient chatbot workflows.",
      content: "Many prompt engineers approach prompt optimization through informal trial-and-error. But as AI systems migrate into medical assistants and financial hubs, prompt engineering must adopt scientific methods. By modeling prompt trees as structured hypothesis spaces and conducting targeted ablations—similar to deep learning model development—we can design intent-aware routing filters. In this guide, we review how to use RAG retrieval score validation and custom LLM-as-a-judge patterns to evaluate multilingual voice workflows."
    },
    {
      id: "blog-3",
      title: "RAG Systems: From Knowledge Base to Reliable AI Assistant",
      date: "March 2026",
      readTime: "7 min read",
      category: "RAG & Workflows",
      excerpt: "A architectural deep-dive into building stateful, production-ready RAG channels using advanced n8n triggers and hierarchical metadata chunking.",
      content: "Simply connecting PDF collections to a vector database does not make a reliable RAG helper. Production deployments require sophisticated pre-retrieval routing, semantic query expansion, and post-retrieval reranking filters. Here, we dissect the design of an automated n8n knowledge synchronization pipeline, detailing how to chunk dense technical literature and use confidence scores to prevent hallucination in real-time customer chatbots."
    }
  ] as BlogItem[]
};
