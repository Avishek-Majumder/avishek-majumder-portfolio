export interface Publication {
  id: string;
  title: string;
  type: 'journal' | 'conference' | 'under_review';
  venue: string;
  year: string;
  date?: string;
  dateAddedToIEEE?: string;
  doi?: string;
  publisher: string;
  location?: string;
  authors: string;
  tags: string[];
  paperUrl: string;
  github?: string;
  isFirstAuthor: boolean;
  isbn?: string;
  issn?: string;
  pages?: string;
}

export const publications: Publication[] = [
  {
    id: "pub-animal-tracking-2024",
    title: "Advancements in Animal Tracking: Assessing Deep Learning Algorithms",
    type: "conference",
    venue: "2024 15th International Conference on Computing Communication and Networking Technologies (ICCCNT)",
    year: "2024",
    date: "24-28 June 2024",
    dateAddedToIEEE: "04 November 2024",
    doi: "10.1109/ICCCNT61001.2024.10724124",
    publisher: "IEEE",
    location: "Kamand, India",
    authors: "Tahmina Akter, Avishek Majumder, Tanjim Mahmud, Israt Binteh Habib, Mohammad Shahadat Hossain, Karl Andersson",
    tags: ["Deep Learning", "Animal Tracking", "Computer Vision", "Object Tracking"],
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/10724124",
    github: "https://github.com/Avishek-Majumder/animal-tracking-icccnt-2024",
    isFirstAuthor: false,
    isbn: "979-8-3503-7024-9",
    issn: "2473-7674"
  },
  {
    id: "pub-airline-sentiment-2024",
    title: "Exploring Transformer Models for Sentiment Analysis in Airline Service Reviews",
    type: "conference",
    venue: "2024 IEEE International Conference on Computing, Applications and Systems (COMPAS)",
    year: "2024",
    date: "25-26 September 2024",
    dateAddedToIEEE: "19 December 2024",
    doi: "10.1109/COMPAS60761.2024.10796289",
    publisher: "IEEE",
    location: "Cox's Bazar, Bangladesh",
    authors: "Tanjim Mahmud, Borhan Uddin, Tahmina Akter, Avishek Majumder, Md. Faisal Bin Abdul Aziz, Mohammad Shahadat Hossain, Karl Andersson",
    tags: ["NLP", "Transformers", "Sentiment Analysis", "Airline Reviews", "BERT"],
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/10796289",
    github: "https://github.com/Avishek-Majumder/airline-tweet-sentiment",
    isFirstAuthor: false,
    isbn: "979-8-3315-2976-5"
  },
  {
    id: "pub-hate-speech-24",
    title: "Deep Learning-Based Systems for Detecting Hate Speech and Offensive Language in Texts",
    type: "conference",
    venue: "2024 IEEE International Conference on Computing, Applications and Systems (COMPAS)",
    year: "2024",
    date: "25-26 September 2024",
    dateAddedToIEEE: "19 December 2024",
    doi: "10.1109/COMPAS60761.2024.10796547",
    publisher: "IEEE",
    location: "Cox's Bazar, Bangladesh",
    authors: "Tanjim Mahmud, Md. Faisal Bin Abdul Aziz, Avishek Majumder, Sha Md Farid, Tahmina Akter",
    tags: ["NLP", "Hate Speech Detection", "Offensive Language", "Deep Learning"],
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/10796547",
    isFirstAuthor: false,
    isbn: "979-8-3315-2976-5"
  },
  {
    id: "pub-ckd-ml-2024",
    title: "Utilizing Machine Learning for Early Detection of Chronic Kidney Disease",
    type: "conference",
    venue: "2024 IEEE International Conference on Computing, Applications and Systems (COMPAS)",
    year: "2024",
    date: "25-26 September 2024",
    dateAddedToIEEE: "19 December 2024",
    doi: "10.1109/COMPAS60761.2024.10796832",
    publisher: "IEEE",
    location: "Cox's Bazar, Bangladesh",
    authors: "Tanjim Mahmud, Md. Faisal Bin Abdul Aziz, Borhan Uddin, Avishek Majumder, Tahmina Akter, Nahed Sharmen, Mohammad Shahadat Hossain, Karl Andersson",
    tags: ["Medical AI", "Machine Learning", "Chronic Kidney Disease"],
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/10796832",
    isFirstAuthor: false,
    isbn: "979-8-3315-2976-5"
  },
  {
    id: "pub-anemia-detection-2024",
    title: "Anemia Detection through Sclera and Vessel Analysis: A Machine Learning and Deep Learning Perspective",
    type: "conference",
    venue: "2024 International Conference on Innovations in Science, Engineering and Technology (ICISET)",
    year: "2024",
    date: "26-27 October 2024",
    dateAddedToIEEE: "01 April 2025",
    doi: "10.1109/ICISET62123.2024.10939977",
    publisher: "IEEE",
    location: "Chittagong, Bangladesh",
    authors: "Muhammad Sajedul Alam Tanim, Gourob Das Gupta, Avishek Majumder, Sowmitra Das",
    tags: ["Medical AI", "Medical Imaging", "Anemia Detection", "Deep Learning"],
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/10939977",
    isFirstAuthor: false,
    isbn: "979-8-3503-5549-9"
  },
  {
    id: "pub-image-inpainting-2025",
    title: "A Novel Image Inpainting Network with Self-Attention Mechanism and Residual Block",
    type: "journal",
    venue: "IEEE Transactions on Artificial Intelligence, Early Access",
    year: "2025",
    date: "20 November 2025",
    doi: "10.1109/TAI.2025.3634483",
    publisher: "IEEE",
    authors: "Tikle Barua, Tanjim Mahmud, Tahmina Akter, Avishek Majumder, Mohammad Shahadat Hossain, Karl Andersson",
    tags: ["Image Inpainting", "Self-Attention", "Residual Blocks", "Computer Vision", "Image Restoration"],
    paperUrl: "https://ieeexplore.ieee.org/document/11261406",
    github: "https://github.com/Avishek-Majumder/SAMRBNET-Image-Inpainting",
    isFirstAuthor: false,
    issn: "2691-4581",
    pages: "1-15"
  },
  {
    id: "pub-email-filtering-2025",
    title: "Harnessing BERT for Advanced Email Filtering in Cybersecurity",
    type: "conference",
    venue: "2025 8th International Conference on Information and Computer Technologies (ICICT)",
    year: "2025",
    date: "14-16 March 2025",
    dateAddedToIEEE: "03 July 2025",
    doi: "10.1109/ICICT64582.2025.00017",
    publisher: "IEEE",
    location: "Hawaii-Hilo, HI, USA",
    authors: "Avishek Majumder, Tanjim Mahmud, Tikle Barua, Nusratul Jannat, Md. Faisal Bin Abdul Aziz, Dilshad Islam, Rishita Chakma, Mohammad Shahadat Hossain, Karl Andersson",
    tags: ["BERT", "NLP", "Email Filtering", "Cybersecurity"],
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/11058531",
    github: "https://github.com/Avishek-Majumder/bert-email-filtering",
    isFirstAuthor: true,
    isbn: "979-8-3315-0518-9",
    issn: "2769-4542"
  },
  {
    id: "pub-hate-speech-bengali-2025",
    title: "Leveraging RF and BERT for Superior Hate Speech Detection in the Bengali Language",
    type: "conference",
    venue: "2025 International Conference on Electrical, Computer and Communication Engineering (ECCE)",
    year: "2025",
    date: "13-15 February 2025",
    dateAddedToIEEE: "29 May 2025",
    doi: "10.1109/ECCE64574.2025.11013358",
    publisher: "IEEE",
    location: "Chittagong, Bangladesh",
    authors: "Nurul Asad, Avishek Majumder, Tikle Barua, Sowmitra Das, Mohammed Rakibul Islam Rakib, Gourob Das Gupta",
    tags: ["NLP", "Bengali NLP", "Hate Speech Detection", "BERT"],
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/11013358",
    isFirstAuthor: false,
    isbn: "979-8-3503-5750-9"
  },
  {
    id: "pub-dfgnet-satellite-2025",
    title: "DFGNet: A Hybrid Approach for Enhanced Road Extraction with Satellite Imagery and Global Fusion",
    type: "conference",
    venue: "2025 International Conference on Electrical, Computer and Communication Engineering (ECCE)",
    year: "2025",
    date: "13-15 February 2025",
    dateAddedToIEEE: "29 May 2025",
    doi: "10.1109/ECCE64574.2025.11013376",
    publisher: "IEEE",
    location: "Chittagong, Bangladesh",
    authors: "Avishek Majumder, Tikle Barua, Nusratul Jannat, Gourob Das Gupta",
    tags: ["Computer Vision", "Remote Sensing", "Satellite Imagery", "Road Extraction", "Deep Learning"],
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/11013376",
    isFirstAuthor: true,
    isbn: "979-8-3503-5750-9"
  },
  // Under Review / Ongoing subsection
  {
    id: "pub-snasrnet-under-review",
    title: "A Unified Framework for Multi-Noise Image Denoising and Super Resolution",
    type: "under_review",
    venue: "IEEE Transactions on Image Processing (TIP), Q1 Journal",
    year: "Ongoing",
    publisher: "IEEE",
    authors: "Avishek Majumder (Corresponding Student Author), Ms. Tahmina Akter, et al.",
    tags: ["Computer Vision", "Image Denoising", "Super Resolution", "Image Restoration", "SNASRNet"],
    paperUrl: "https://github.com/Avishek-Majumder/snasrnet-denoise-sr",
    github: "https://github.com/Avishek-Majumder/snasrnet-denoise-sr",
    isFirstAuthor: true
  },
  {
    id: "pub-yolo-under-review",
    title: "YOLO Based Object Detection for Autonomous Vehicles in Adverse Weather",
    type: "under_review",
    venue: "Engineering Letters, IAENG, Q3 Journal",
    year: "Ongoing",
    publisher: "IAENG",
    authors: "Tanjim Mahmud, Avishek Majumder, et al.",
    tags: ["Computer Vision", "YOLO", "Object Detection", "Autonomous Vehicles", "Adverse Weather"],
    paperUrl: "#",
    isFirstAuthor: false
  },
  {
    id: "pub-parkinsons-under-review",
    title: "Unveiling Parkinson's Disease: Enhanced Detection from MRI Images Leveraging Federated Learning Paradigms",
    type: "under_review",
    venue: "IEEE Transactions on Artificial Intelligence (TAI), Q1 Journal",
    year: "Ongoing",
    publisher: "IEEE",
    authors: "Tanjim Mahmud, Avishek Majumder, et al.",
    tags: ["Medical AI", "Medical Imaging", "MRI", "Federated Learning", "Healthcare AI"],
    paperUrl: "#",
    isFirstAuthor: false
  }
];
