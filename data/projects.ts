export type Metric = {
  label: string;
  value: string;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  label?: string;
  summary: string;
  capabilities?: string[];
  technologies: string[];
  metrics: Metric[];
  href?: string;
  repo?: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
    width: number;
    height: number;
  };
  gallery?: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
};

export type PharmaSafeAppScreenshot = {
  id:
    | "dashboard"
    | "medicine-safety-check"
    | "high-risk-result"
    | "pharmacist-ddi-findings"
    | "static-digital-twin"
    | "substitution-summary"
    | "alternative-evidence"
    | "manual-simulation"
    | "ocr-review"
    | "ocr-detection"
    | "alternatives";
  title: string;
  feature: string;
  description: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const pharmasafeMetrics: Metric[] = [
  { label: "DrugBank role", value: "Primary source" },
  { label: "DDInter supplementary records", value: "90,543" },
  { label: "PubMedBERT fallback accuracy", value: "88.14%" },
  { label: "PubMedBERT macro-F1", value: "85.63%" },
  { label: "YOLO stage mAP@50", value: "0.7094" },
  { label: "TrOCR exact match", value: "90.8%" },
  { label: "DrugBank exact match after correction", value: "73.2%" },
  { label: "Full-pipeline detections", value: "1,213" }
];

export const pharmasafeCapabilities = [
  "DrugBank is the primary and most important medication knowledge source behind drug information and interaction evidence.",
  "Hybrid DDI analysis uses DrugBank/Neo4j as the core evidence layer, DDInter as a supplementary interaction dataset, and PubMedBERT as a fallback model.",
  "Patient-aware substitution filters and ranks safer alternatives for pharmacist review.",
  "Static digital twin compares current and substituted medication regimens with explainable reports.",
  "Prescription OCR converts handwritten medication information into structured fields."
];

export const pharmasafeStack = [
  "Python",
  "FastAPI",
  "React",
  "Flutter",
  "Neo4j",
  "DrugBank",
  "DDInter",
  "PubMedBERT",
  "NLP",
  "Groq LLMs",
  "SHAP / Explainable AI"
];

export const pharmasafeDemoVideo = {
  src: "/assets/projects/pharmasafe/demo-screenshots/pharmasafe-platform-demo-2026-06-25.mp4",
  poster: "/assets/projects/pharmasafe/demo-screenshots/pharmasafe-medicine-safety-check.png",
  title: "PharmaSafe platform demo",
  description:
    "A complete recorded walkthrough of the real PharmaSafe application, loaded with native browser video controls and metadata-only preloading."
};

export const pharmasafeAppScreenshots: PharmaSafeAppScreenshot[] = [
  {
    id: "medicine-safety-check",
    title: "Medicine Safety Check",
    feature: "Patient DDI analysis",
    description:
      "Patient-mode medicine safety check with selected medicines and high-risk interaction summary.",
    src: "/assets/projects/pharmasafe/demo-screenshots/pharmasafe-medicine-safety-check.png",
    alt: "PharmaSafe Medicine Safety Check screen showing simvastatin and clarithromycin with a high-risk combination result.",
    width: 1007,
    height: 817
  },
  {
    id: "high-risk-result",
    title: "High-Risk Combination Result",
    feature: "DDI result",
    description:
      "High-risk interaction result for Simvastatin and Clarithromycin with risk counts and caution message.",
    src: "/assets/projects/pharmasafe/demo-screenshots/pharmasafe-high-risk-combination-result.png",
    alt: "PharmaSafe high-risk medicine combination result for Simvastatin and Clarithromycin.",
    width: 1485,
    height: 814
  },
  {
    id: "pharmacist-ddi-findings",
    title: "Pharmacist DDI Findings",
    feature: "Professional DDI review",
    description:
      "Pharmacist-mode DDI findings comparing interaction evidence for the patient's current medications.",
    src: "/assets/projects/pharmasafe/demo-screenshots/pharmasafe-pharmacist-ddi-findings-current-medications.png",
    alt: "PharmaSafe pharmacist DDI findings screen showing interaction evidence cards for current medications.",
    width: 1195,
    height: 819
  },
  {
    id: "static-digital-twin",
    title: "Static Digital Twin Safety Analysis",
    feature: "Digital twin / safety report",
    description:
      "Static digital twin safety analysis with patient-specific safety decision, risk level, hard-stop flags, and profile findings.",
    src: "/assets/projects/pharmasafe/demo-screenshots/pharmasafe-static-digital-twin-safety-analysis.png",
    alt: "PharmaSafe static digital twin safety analysis showing patient-specific safety decision and risk factors.",
    width: 932,
    height: 822
  },
  {
    id: "substitution-summary",
    title: "Rosuvastatin Substitution Summary",
    feature: "Drug substitution",
    description:
      "Alternative medication summary for Rosuvastatin with rationale, ranking, and digital twin re-check details.",
    src: "/assets/projects/pharmasafe/demo-screenshots/pharmasafe-rosuvastatin-substitution-summary.png",
    alt: "PharmaSafe alternative for Simvastatin screen showing Rosuvastatin substitution summary and digital twin re-check.",
    width: 895,
    height: 815
  },
  {
    id: "alternative-evidence",
    title: "Alternative Evidence Summary",
    feature: "Substitution evidence",
    description:
      "Professional evidence summary for a candidate alternative, including therapeutic match and evidence context.",
    src: "/assets/projects/pharmasafe/demo-screenshots/pharmasafe-alternative-evidence-summary.png",
    alt: "PharmaSafe professional evidence summary for an alternative medication candidate.",
    width: 938,
    height: 817
  },
  {
    id: "alternatives",
    title: "Top Alternatives",
    feature: "Ranked safer options",
    description:
      "Top alternatives screen with Rosuvastatin, Pitavastatin, and Fluvastatin recommendation cards.",
    src: "/assets/projects/pharmasafe/demo-screenshots/pharmasafe-top-alternatives-recommendations.png",
    alt: "PharmaSafe top alternatives screen showing ranked medication recommendation cards.",
    width: 976,
    height: 816
  },
  {
    id: "ocr-review",
    title: "Prescription OCR Review",
    feature: "Prescription OCR",
    description:
      "Review screen for medicines detected from a prescription scan before saving the structured result.",
    src: "/assets/projects/pharmasafe/demo-screenshots/pharmasafe-prescription-ocr-review-medicines.png",
    alt: "PharmaSafe prescription OCR review screen showing medicines found from a scanned prescription.",
    width: 1156,
    height: 817
  },
  {
    id: "ocr-detection",
    title: "Prescription Detection Preview",
    feature: "Prescription OCR",
    description:
      "Prescription scan preview with detected regions drawn over the uploaded prescription image.",
    src: "/assets/projects/pharmasafe/demo-screenshots/pharmasafe-prescription-ocr-detection-preview.png",
    alt: "PharmaSafe prescription OCR detection preview with bounding boxes over a prescription image.",
    width: 1571,
    height: 810
  },
  {
    id: "manual-simulation",
    title: "Manual Patient Safety Simulation",
    feature: "Pharmacist simulation",
    description:
      "Manual simulation form for entering patient attributes, current medications, conditions, allergies, and pregnancy state.",
    src: "/assets/projects/pharmasafe/demo-screenshots/pharmasafe-manual-patient-safety-simulation.png",
    alt: "PharmaSafe manual patient safety simulation form in pharmacist mode.",
    width: 1254,
    height: 816
  },
  {
    id: "dashboard",
    title: "Patient Dashboard",
    feature: "Patient overview",
    description:
      "Patient dashboard with recent scan, safety alerts, suggested alternatives, daily medications, schedule, and recent activity.",
    src: "/assets/projects/pharmasafe/demo-screenshots/pharmasafe-patient-dashboard-overview.png",
    alt: "PharmaSafe patient dashboard showing scan, alerts, suggested alternatives, daily medications, schedule, and activity.",
    width: 967,
    height: 818
  }
];

export const projects: Project[] = [
  {
    id: "pharmasafe",
    number: "01",
    title: "PharmaSafe",
    subtitle: "AI-Powered Medication Safety Platform",
    label: "A+ Graduation Project",
    summary:
      "An end-to-end medication-safety platform anchored by DrugBank as the primary medication knowledge source, with DDInter as supplementary interaction evidence and PubMedBERT as a fallback model for unresolved interaction analysis.",
    capabilities: pharmasafeCapabilities,
    technologies: pharmasafeStack,
    metrics: pharmasafeMetrics,
    href: "/projects/pharmasafe",
    repo: "https://github.com/Nova6565/PharmaSafe",
    image: {
      src: "/assets/projects/pharmasafe/demo-screenshots/pharmasafe-medicine-safety-check.png",
      alt: "Genuine PharmaSafe Medicine Safety Check application screen.",
      caption:
        "Real PharmaSafe application screen for medication safety checking, backed by DrugBank-centered drug information and interaction evidence.",
      width: 1007,
      height: 817
    },
    gallery: [
      {
        src: "/assets/projects/pharmasafe/ocr-slides/slide-4.png",
        alt: "PharmaSafe OCR YOLO11n detection slide.",
        width: 1600,
        height: 900
      },
      {
        src: "/assets/projects/pharmasafe/ocr-slides/slide-8.png",
        alt: "PharmaSafe OCR drug-name correction flow slide.",
        width: 1600,
        height: 900
      },
      {
        src: "/assets/projects/pharmasafe/ocr-slides/slide-11.png",
        alt: "PharmaSafe OCR pipeline test-set results slide.",
        width: 1600,
        height: 900
      }
    ]
  },
  {
    id: "malware-analysis",
    number: "02",
    title: "Intelligent Malware Analysis Platform",
    subtitle: "Cloud malware-risk analysis",
    label: "Huawei Cloud MENA Top 50",
    summary:
      "Cloud-based malware-risk analysis combining static machine-learning analysis, dynamic sandbox behavior, and VirusTotal hash verification. Achieved Top 50 in the Huawei Cloud MENA Competition.",
    technologies: ["EMBER2024", "XGBoost", "Huawei Cloud", "ECS", "OBS", "VPC", "Cloud Eye"],
    metrics: [
      { label: "AUC", value: "0.99" },
      { label: "Accuracy", value: "0.97" }
    ],
    image: {
      src: "/assets/projects/malware-analysis/intelligent-malware-analysis-architecture.png",
      alt: "Real Intelligent Malware Analysis platform architecture diagram showing upload flow, Huawei Cloud services, static ML, dynamic sandbox analysis, VirusTotal, object storage, and logging.",
      caption:
        "Supplied architecture diagram for the Intelligent Malware Analysis platform, including Huawei Cloud infrastructure, static ML, sandbox analysis, VirusTotal verification, storage, and monitoring.",
      width: 1328,
      height: 852
    }
  },
  {
    id: "rag-document-qa",
    number: "03",
    title: "RAG Document Q&A Assistant",
    subtitle: "Source-grounded document answers",
    summary:
      "Source-grounded document question-answering system for PDF, DOCX, and TXT files, focused on ingestion, retrieval, semantic search, grounding, and answer generation.",
    technologies: ["LangChain", "FAISS", "Embeddings", "Groq LLMs", "Gradio", "FastAPI"],
    metrics: [{ label: "Supported files", value: "PDF · DOCX · TXT" }],
    repo: "https://github.com/Nova6565/Watsonx-PDF-RAG-Assistant",
    image: {
      src: "/assets/projects/rag/rag-document-qa-interface.png",
      alt: "Real PDF RAG Q&A application screenshot showing PDF upload, an input query, and a grounded answer about LoRA.",
      caption:
        "Supplied RAG Document Q&A screenshot showing the PDF upload panel, query input, and answer panel for a LoRA paper.",
      width: 601,
      height: 416
    }
  },
  {
    id: "brain-tumor",
    number: "04",
    title: "Brain Tumor Detection System",
    subtitle: "MRI classifier",
    label: "Best Project - Introduction to Artificial Intelligence",
    summary:
      "MRI-based brain-tumor classifier using transfer learning and model evaluation on approximately 7,000 MRI images. Awarded Best Project in the Introduction to Artificial Intelligence course.",
    technologies: ["PyTorch", "ResNet-18", "CNNs", "Transfer Learning", "Model Evaluation"],
    metrics: [
      { label: "Dataset", value: "≈7,000 MRI images" },
      { label: "Accuracy", value: "97%" }
    ],
    repo: "https://github.com/Nova6565/Brain-Tumor-detection-",
    image: {
      src: "/assets/projects/brain-tumor/brain-tumor-detection-app.png",
      alt: "Real Brain Tumor Detection Gradio application screenshot showing an MRI image classified as meningioma.",
      caption:
        "Supplied Brain Tumor Detection application screenshot with an MRI upload and meningioma prediction output.",
      width: 628,
      height: 810
    }
  },
  {
    id: "veggievision",
    number: "05",
    title: "VeggieVision",
    subtitle: "AI-powered vegetable recognition, nutrition, and recipe assistant",
    label: "Best Project - Advanced Artificial Intelligence",
    summary:
      "Mobile and Streamlit AI assistant for recognizing vegetables, generating nutrition cards from USDA data, and supporting recipe guidance with Groq-powered assistance. Awarded Best Project in the Advanced Artificial Intelligence course at AASTMT.",
    technologies: [
      "CNNs",
      "EfficientNetB0",
      "MobileNetV2",
      "TFLite",
      "Streamlit",
      "Flutter",
      "USDA data",
      "Groq"
    ],
    metrics: [{ label: "Test accuracy", value: "99.9%" }],
    repo: "https://github.com/Nova6565/VeggieVision",
    image: {
      src: "/assets/projects/veggievision/veggievision-mobile-app.png",
      alt: "Real VeggieVision mobile application screenshots showing nutrition lookup, vegetable recognition, confidence, scanned vegetables, and recipe actions.",
      caption:
        "Supplied VeggieVision mobile app screenshots showing vegetable recognition, nutrition cards, scanned vegetables, and recipe actions.",
      width: 615,
      height: 685
    }
  },
  {
    id: "disaster-damage",
    number: "06",
    title: "Disaster Damage Assessment from Satellite Images",
    subtitle: "Pre/post satellite damage analysis",
    summary:
      "AI pipeline assessing building damage after disasters from pre/post satellite imagery using segmentation and classification.",
    technologies: ["PyTorch", "Swin Transformer-Tiny", "SAM2", "Computer Vision", "Segmentation", "Classification"],
    metrics: [
      { label: "Accuracy", value: "78%" },
      { label: "Macro-F1", value: "76%" }
    ],
    repo: "https://github.com/Nova6565/Satellite-Disaster-Damage-Assessment",
    image: {
      src: "/assets/projects/disaster-damage/prediction-composite.png",
      alt: "Genuine disaster damage prediction composite with pre/post imagery and probabilities.",
      caption:
        "Supplied disaster damage prediction composite showing pre/post satellite imagery, SAM2 overlay, classifier crops, predicted label, confidence, and probabilities.",
      width: 967,
      height: 650
    }
  }
];

export const pharmasafeCaseStudyImages = [
  {
    src: "/assets/projects/pharmasafe/ocr-slides/slide-2.png",
    alt: "PharmaSafe OCR clinical problem slide.",
    width: 1600,
    height: 900
  },
  {
    src: "/assets/projects/pharmasafe/ocr-slides/slide-3.png",
    alt: "PharmaSafe OCR system architecture slide.",
    width: 1600,
    height: 900
  },
  {
    src: "/assets/projects/pharmasafe/ocr-slides/slide-4.png",
    alt: "PharmaSafe OCR YOLO11n ROI detection slide.",
    width: 1600,
    height: 900
  },
  {
    src: "/assets/projects/pharmasafe/ocr-slides/slide-6.png",
    alt: "PharmaSafe OCR handwritten recognition with TrOCR slide.",
    width: 1600,
    height: 900
  },
  {
    src: "/assets/projects/pharmasafe/ocr-slides/slide-9.png",
    alt: "PharmaSafe OCR correction impact slide.",
    width: 1600,
    height: 900
  },
  {
    src: "/assets/projects/pharmasafe/ocr-slides/slide-10.png",
    alt: "PharmaSafe OCR full pipeline integration slide.",
    width: 1600,
    height: 900
  }
];
