/* ============================================================
   EXPERIENCE DATA
   Add / edit companies and roles here.
============================================================ */

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

  // ── ADD ANOTHER COMPANY BELOW ─────────────────────────────
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