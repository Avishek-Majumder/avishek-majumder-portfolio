export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Programming & Frameworks",
    skills: ["Python", "C", "MATLAB", "LaTeX", "Bash", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript", "React"]
  },
  {
    category: "Machine Learning & Deep Learning",
    skills: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "NumPy", "Pandas", "Computer Vision", "Natural Language Processing (NLP)"]
  },
  {
    category: "AI & Prompt / Agentic Engineering",
    skills: ["Prompt Design", "Prompt Evaluation", "RAG Systems", "Voice Agents", "Chatbot Flows", "Multilingual Systems", "n8n Workflows"]
  },
  {
    category: "Data & Medical Imaging",
    skills: ["Visual Preprocessing", "Ablation Study Design", "MRI Analysis", "Decentralized Federated Learning", "Model Evaluation"]
  },
  {
    category: "Database & Backend Systems",
    skills: ["MySQL", "Node.js", "Express", "RESTful APIs", "Structured Knowledge Bases"]
  },
  {
    category: "Tools & Collaboration",
    skills: ["Git", "GitHub CI/CD", "MS Office Suite", "LaTeX Editors (Overleaf)", "Linux Admin"]
  }
];
