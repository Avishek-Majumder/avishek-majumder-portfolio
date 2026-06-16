export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  github?: string;
  paperUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "snasrnet-denoise-sr",
    title: "SNASRNet: Multi-Noise Denoising & Super Resolution",
    category: "Image Restoration",
    description: "Official implementation of SNASRNet: a synergetic, noise-adaptive deep super-resolution framework that simultaneously removes arbitrary non-Gaussian composite noise mixtures and upscales visual clarity.",
    tags: ["PyTorch", "Image Restoration", "Denoising", "Super Resolution", "Computer Vision"],
    github: "https://github.com/Avishek-Majumder/snasrnet-denoise-sr",
    featured: true
  },
  {
    id: "samrbnet-inpainting",
    title: "SAMRBNET Image Inpainting",
    category: "Computer Vision",
    description: "Deep contextual self-attention-guided multi-residual block network (SAMRBNet) optimized for photorealistic, geometrically-symmetric inpainting of missing structures in complex images.",
    tags: ["Image Inpainting", "Self-Attention", "Residual Blocks", "PyTorch"],
    github: "https://github.com/Avishek-Majumder/SAMRBNET-Image-Inpainting",
    paperUrl: "https://ieeexplore.ieee.org/document/11261406",
    featured: true
  },
  {
    id: "bert-cybersecurity",
    title: "BERT Email Filtering in Cybersecurity",
    category: "NLP",
    description: "Fine-tuned deep bi-directional transformer engine engineered for zero-hour phishing classification and conversational cybersecurity content analysis.",
    tags: ["BERT", "NLP", "Cybersecurity", "Email Filtering"],
    github: "https://github.com/Avishek-Majumder/bert-email-filtering",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/11058531",
    featured: true
  },
  {
    id: "animal-tracking",
    title: "Animal Tracking with Deep Learning",
    category: "Computer Vision",
    description: "Scholarly evaluation framework testing multi-object deep tracking architectures across unconstrained wildlife visual datasets under variable illumination.",
    tags: ["Deep Learning", "Animal Tracking", "Computer Vision", "Object Tracking"],
    github: "https://github.com/Avishek-Majumder/animal-tracking-icccnt-2024",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/10724124",
    featured: true
  },
  {
    id: "airline-tweet-sentiment",
    title: "Airline Tweet Sentiment Analysis",
    category: "NLP",
    description: "Intent-aware, transformer-based customer review sentiment classifiers optimized for multi-class emotion validation benchmarks in aviation telemetry.",
    tags: ["Transformers", "NLP", "Sentiment Analysis", "Airline Reviews"],
    github: "https://github.com/Avishek-Majumder/airline-tweet-sentiment",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/10796289",
    featured: false
  },
  {
    id: "dfgnet-satellite",
    title: "DFGNet Road Extraction from Satellites",
    category: "Computer Vision",
    description: "A hybrid deep road-topology extraction network. Leverages remote-sensing imagery and global multi-scale fusion to construct continuous road meshes bypass occlusion bounds.",
    tags: ["Satellite Imagery", "Road Extraction", "Remote Sensing", "Deep Learning"],
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/11013376",
    featured: false
  }
];
