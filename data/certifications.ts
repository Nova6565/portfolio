export type Certification = {
  title: string;
  issuer: string;
  detail?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const certifications: Certification[] = [
  {
    title: "IBM AI Engineering Professional Certificate",
    issuer: "IBM / Coursera",
    image: {
      src: "/assets/certificates/ibm-ai-engineering.png",
      alt: "IBM AI Engineering Professional Certificate awarded to Mohamed Amin.",
      width: 1388,
      height: 1066
    }
  },
  {
    title: "IBM Generative AI Engineering with LLMs Specialization",
    issuer: "IBM / Coursera",
    image: {
      src: "/assets/certificates/ibm-generative-ai-engineering.png",
      alt: "IBM Generative AI Engineering with LLMs Specialization certificate awarded to Mohamed Amin.",
      width: 964,
      height: 748
    }
  },
  {
    title: "NVIDIA Building RAG Agents with LLMs",
    issuer: "NVIDIA",
    image: {
      src: "/assets/certificates/nvidia-building-rag-agents-with-llms.png",
      alt: "NVIDIA Building RAG Agents with LLMs certificate of competency awarded to Mohamed Adel.",
      width: 594,
      height: 491
    }
  },
  {
    title: "NVIDIA Building LLM Applications with Prompt Engineering",
    issuer: "NVIDIA",
    image: {
      src: "/assets/certificates/nvidia-building-llm-applications-prompt-engineering.png",
      alt: "NVIDIA Building LLM Applications with Prompt Engineering certificate awarded to Mohamed Adel.",
      width: 786,
      height: 654
    }
  },
  {
    title: "ITI NVIDIA DLI Summer Training Program - Generative AI Beginner Level",
    issuer: "Information Technology Institute",
    detail: "35 hours",
    image: {
      src: "/assets/certificates/iti-nvidia-generative-ai-beginner-program.png",
      alt: "ITI NVIDIA DLI Summer Training Program Generative AI Beginner Level certificate awarded to Mohamed Adel.",
      width: 556,
      height: 788
    }
  },
  {
    title: "Huawei Cloud HCCDA-AI",
    issuer: "Huawei Cloud",
    image: {
      src: "/assets/certificates/huawei-hccda-ai.png",
      alt: "Huawei Cloud HCCDA-AI developer certification awarded to Mohamed Adel.",
      width: 1061,
      height: 745
    }
  },
  {
    title: "Huawei Cloud HCCDA-Tech Essentials",
    issuer: "Huawei Cloud",
    image: {
      src: "/assets/certificates/huawei-hccda-tech-essentials.png",
      alt: "Huawei Cloud HCCDA-Tech Essentials developer certification awarded to Mohamed Adel.",
      width: 1086,
      height: 736
    }
  },
  {
    title: "Oracle Cloud Infrastructure Certified Foundations Associate",
    issuer: "Oracle",
    image: {
      src: "/assets/certificates/oracle-oci-foundations-associate.png",
      alt: "Oracle Cloud Infrastructure Certified Foundations Associate certificate of recognition.",
      width: 867,
      height: 610
    }
  },
  {
    title: "Oracle Cloud Infrastructure Certified Architect Associate",
    issuer: "Oracle",
    image: {
      src: "/assets/certificates/oracle-oci-architect-associate.png",
      alt: "Oracle Cloud Infrastructure Certified Architect Associate certificate of recognition.",
      width: 865,
      height: 642
    }
  },
  {
    title: "Oracle Agentic AI Certified Foundations Associate",
    issuer: "Oracle",
    image: {
      src: "/assets/certificates/oracle-agentic-ai-foundations-associate.png",
      alt: "Oracle Agentic AI Certified Foundations Associate certificate of recognition.",
      width: 867,
      height: 612
    }
  },
  {
    title: "Digital Egypt Pioneers Program - Data Scientist",
    issuer: "Digital Egypt Pioneers Program",
    image: {
      src: "/assets/certificates/depi-data-scientist.png",
      alt: "Digital Egypt Pioneers Program Data Scientist certificate awarded to Mohamed Adel Mahmoud.",
      width: 1056,
      height: 596
    }
  },
  {
    title: "ALX Data Science",
    issuer: "ALX Africa",
    image: {
      src: "/assets/certificates/alx-data-science.png",
      alt: "ALX Data Science certificate of completion awarded to Mohamed Adel.",
      width: 1272,
      height: 697
    }
  }
];
