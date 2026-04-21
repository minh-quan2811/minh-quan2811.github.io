/* ============================================================
   EXPERIENCE DATA
   Add / edit companies and roles here.
============================================================ */

const COMPANIES = [
  // ── ADD ANOTHER COMPANY BELOW ─────────────────────────────
  {
    id: "fpt",
    name: "FPT Software",
    location: "Da Nang City, Vietnam",
    logo: "assets/companies/fpt.png",
    logoFallback: "FPT Software",
    url: "https://fptsoftware.com/",
    roles: [
      {
        title: "AI Intern",
        type: "Full-time",
        start: "Dec 2025",
        end: "Mar 2026",
        points: [
          "Contributed to a LLM-based recommendation pipeline to analyze legacy systems and propose target architectures and migration structures for system modernization.",
        ],
        tags: ["Python", "LLM"],
      },
    ],
  },
  {
    id: "rikai",
    name: "RIKAI Co., Ltd",
    location: "Da Nang, Vietnam",
    logo: "assets/companies/rikai.jpg",
    logoFallback: "RI",
    url: "https://rikai.technology/",
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
];