export interface ThesisInfo {
  title: string;
  advisor: string;
  status: string;
  codebase: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  grade?: string;
  thesis?: ThesisInfo;
  year?: string;
}

export interface IELTS {
  overall: string;
  listening: string;
  reading: string;
  writing: string;
  speaking: string;
}

export const education: EducationItem[] = [
  {
    id: "bsc-cse",
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "Port City International University, Chattogram, Bangladesh",
    duration: "January 2020 – April 2024",
    grade: "3.63 / 4.00",
    thesis: {
      title: "A Unified Framework for Multi-Noise Image Denoising and Super Resolution",
      advisor: "Ms. Tahmina Akter, Assistant Professor, Port City International University",
      status: "Currently under review at IEEE Transactions on Image Processing, Q1 Journal",
      codebase: "https://github.com/Avishek-Majumder/snasrnet-denoise-sr"
    }
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate, HSC",
    institution: "South Asian College Chittagong",
    duration: "2017",
    year: "2017"
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate, SSC",
    institution: "Municipal Model High School & College, Chattogram, Bangladesh",
    duration: "2015",
    year: "2015"
  }
];

export const ielts: IELTS = {
  overall: "7.5",
  listening: "8.5",
  reading: "8.0",
  writing: "6.5",
  speaking: "6.5"
};
