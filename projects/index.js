// ============================================================
// PROJECTS DATA — edit this file to manage all projects
// Each project can have its own images in assets/projects/
// ============================================================

const PROJECTS = [
  {
    id: "fire-detection",
    year: "2023",
    title: "Fire Detection System",
    shortDesc: "Real-time fire detection with optimized escape routing.",
    tags: ["YOLOv5", "Computer Vision", "Python"],
    emoji: "🔥",
    image: "assets/projects/fire-detection.jpg",
    tech: [
      "YOLOv5 object detection model",
      "OpenCV for frame processing",
      "Dijkstra's algorithm for escape routing",
      "Python & PyTorch backend",
    ],
    story: `
      <p>This was my first serious dive into computer vision. The goal: detect fire and smoke in real-time video feeds, then automatically compute the safest escape route from the affected area.</p>
      <p>I trained a YOLOv5 model on a custom dataset of fire and smoke images, fine-tuning confidence thresholds to minimize false positives. The escape routing module uses a graph representation of building floorplans, with Dijkstra's algorithm dynamically recalculating paths as fire spreads.</p>
      <p>The system achieved real-time inference at 30+ FPS and was demonstrated as a proof-of-concept for smart building safety systems.</p>
    `,
    images: [],
    link: ""
  },
  {
    id: "breathing-rate",
    year: "2024",
    title: "Breathing Rate Monitoring",
    shortDesc: "Non-contact breathing rate measurement using video analysis.",
    tags: ["Signal Processing", "Research", "OpenCV"],
    emoji: "💨",
    image: "assets/projects/breathing-rate.jpg",
    tech: [
      "rPPG (remote photoplethysmography)",
      "OpenCV & NumPy",
      "Signal filtering (Butterworth)",
      "Frequency domain analysis (FFT)",
    ],
    story: `
      <p>This research project explored non-invasive methods to monitor human breathing rate using only a standard webcam — no wearables, no contact required.</p>
      <p>The core idea was to detect subtle chest movement and skin-color micro-variations caused by breathing. I implemented a region-of-interest tracker on the chest area and applied bandpass filtering to isolate the breathing frequency from noise.</p>
      <p>This was primarily a research effort — measuring accuracy across different lighting conditions, distances, and subject demographics. Results were promising enough to be submitted to a student research competition.</p>
    `,
    images: [],
    link: ""
  },
  {
    id: "emotion-recognition",
    year: "2025",
    title: "Emotion Recognition System",
    shortDesc: "Deep learning model to detect human emotions from facial expressions.",
    tags: ["Deep Learning", "CNN", "Facial Analysis"],
    emoji: "😊",
    image: "assets/projects/emotion-recognition.jpg",
    tech: [
      "Convolutional Neural Network (CNN)",
      "FER-2013 dataset",
      "OpenCV face detection",
      "TensorFlow / Keras",
      "Real-time inference pipeline",
    ],
    story: `
      <p>Building on my computer vision foundation, I developed an emotion recognition system that classifies 7 basic emotions — happy, sad, angry, surprised, fearful, disgusted, and neutral — from facial expressions in real time.</p>
      <p>The model was trained on FER-2013 and augmented with custom data to improve generalization. I integrated it with a live webcam feed and visualized confidence scores for each emotion class.</p>
      <p>One of the biggest challenges was handling partial occlusions and varying lighting. I addressed this with aggressive augmentation and attention mechanisms in the final convolutional layers.</p>
    `,
    images: [],
    link: ""
  },
  {
    id: "rikai-internship",
    year: "2025",
    title: "RIKAI — AI Internship Project",
    shortDesc: "RAG pipelines, graph DBs, and LLM workflows in a production environment.",
    tags: ["LangChain", "RAG", "Neo4j", "DuckDB"],
    emoji: "🤖",
    image: "assets/projects/rikai.jpg",
    tech: [
      "LangChain & LangGraph orchestration",
      "RAG with vector search",
      "Neo4j graph database",
      "DuckDB for analytics",
      "SQL query layer",
    ],
    story: `
      <p>My first professional AI engineering experience. During the internship at RIKAI, I was embedded in a real product team working on knowledge retrieval systems powered by LLMs.</p>
      <p>I built and iterated on a Retrieval-Augmented Generation (RAG) pipeline, exploring different chunking strategies, embedding models, and retrieval approaches to improve answer quality.</p>
      <p>A highlight was integrating Neo4j to represent domain knowledge as a graph, enabling relationship-aware queries that flat vector search couldn't handle. This became the foundation for the contract role that followed.</p>
    `,
    images: [],
    link: ""
  },
  {
    id: "student-performance",
    year: "2025",
    title: "Student Performance & Management System",
    shortDesc: "Full-stack system for tracking and managing student academic data.",
    tags: ["Full Stack", "Database", "Python"],
    emoji: "📊",
    image: "assets/projects/student-mgmt.jpg",
    tech: [
      "Python backend (Flask / FastAPI)",
      "Relational database (PostgreSQL / SQLite)",
      "Data visualization dashboard",
      "REST API design",
      "Role-based access control",
    ],
    story: `
      <p>Designed and built a comprehensive student performance tracking system for academic use. The system allows instructors to log grades, attendance, and behavioral notes while giving administrators a macro-level view of cohort performance.</p>
      <p>The dashboard includes trend visualizations — score distributions, improvement over time, at-risk student flagging — making it actionable, not just a data store.</p>
      <p>I focused heavily on clean database schema design and API architecture, with role-based access so students, teachers, and admins each see appropriate views.</p>
    `,
    images: [],
    link: ""
  },
  {
    id: "bone-fracture",
    year: "2026",
    title: "Bone Fracture Detection",
    shortDesc: "Advanced medical imaging model for automated bone fracture classification.",
    tags: ["Medical AI", "CNN", "Image Segmentation"],
    emoji: "🦴",
    image: "assets/projects/bone-fracture.jpg",
    tech: [
      "Custom CNN architecture",
      "X-ray image preprocessing",
      "Transfer learning (ResNet / EfficientNet)",
      "Grad-CAM visualization",
      "Clinical validation pipeline",
    ],
    story: `
      <p>This is my most technically demanding project to date — applying deep learning to medical imaging for bone fracture detection and classification from X-ray images.</p>
      <p>The model uses transfer learning on top of EfficientNet, fine-tuned on a curated dataset of annotated X-rays. I implemented Grad-CAM to generate visual explanations, making the predictions interpretable for clinical use.</p>
      <p>The ongoing focus is improving robustness on edge cases — subtle hairline fractures, pediatric bones, and images with poor contrast. This project is being developed with the goal of supporting radiologists in under-resourced settings.</p>
    `,
    images: [],
    link: ""
  },
];

// ============================================================
// EXPERIENCE DATA — edit this file to manage all companies
// ============================================================

const COMPANIES = [
  {
    id: "rikai",
    name: "RIKAI Co., Ltd",
    location: "Da Nang, Vietnam",
    logo: "assets/companies/rikai.jpg",
    logoFallback: "RI",
    url: "",
    roles: [
      {
        title: "AI Engineer",
        type: "Contract",
        start: "Aug 2025",
        end: "Oct 2025",
        points: [
          "Developed a Marketing QA chatbot using LangGraph, handling conversation flow and intent logic.",
          "Built and maintained a vector database pipeline using LlamaIndex integrated with Qdrant.",
          "Improved response accuracy and retrieval efficiency for knowledge-based queries.",
        ],
        tags: ["LangGraph", "LlamaIndex", "Qdrant", "Chatbot"],
      },
      {
        title: "AI Intern",
        type: "Internship",
        start: "Jun 2025",
        end: "Aug 2025",
        points: [
          "Applied Large Language Models (LLMs) using LangChain and LangGraph.",
          "Explored Retrieval-Augmented Generation (RAG) for knowledge systems.",
          "Worked with Neo4j (graph database) and DuckDB (analytical database).",
          "Used SQL for querying and data management.",
        ],
        tags: ["LangChain", "RAG", "Neo4j", "DuckDB", "SQL"],
      },
    ],
  },

  // ── ADD ANOTHER COMPANY HERE ───────────────────────────────
  // {
  //   id: "acme",
  //   name: "Acme Corp",
  //   location: "Ho Chi Minh City, Vietnam",
  //   logo: "assets/acme-logo.png",
  //   logoFallback: "AC",
  //   url: "https://acme.example.com",
  //   roles: [
  //     {
  //       title: "Senior AI Engineer",
  //       type: "Full-time",
  //       start: "Nov 2025",
  //       end: "Present",
  //       points: [
  //         "Led a team of 3 engineers building an internal LLM platform.",
  //       ],
  //       tags: ["Python", "FastAPI", "LLM"],
  //     },
  //   ],
  // },
];