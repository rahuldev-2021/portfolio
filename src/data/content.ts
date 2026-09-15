// ---------------------------------------------------------------------------
//  Profile & content data
//  Everything here is grounded in the actual project files in the workspace.
//  Edit the `profile` object to update personal details (name, links, email).
// ---------------------------------------------------------------------------

export const profile = {
    name: "Rahul R",
    firstName: "Rahul",
    role: "AI Engineer · GenAI Developer · Agentic AI Developer · AI Architect",
    positioning:
        "Building intelligent systems with LLMs, RAG, agentic orchestration, and production AI architecture.",
    headline: "Production AI systems — from retrieval pipelines to real-time multimodal agents.",
    summary:
        "I architect and ship end-to-end AI products: RAG & GraphRAG, multi-agent workflows, long-context reasoning, model serving, and edge vision — with the backend, evaluation, and observability to run in production.",
    location: "Chennai, India",
    email: "demomail.ofc@gmail.com",
    github: "",
    linkedin: "",
    /** Profile photo — put image in `public/` folder, e.g. "/profile.jpg" */
    photo: "/profile.jpg",
    availability: "Available for opportunities",
    heroIntro:
        "I build intelligent systems with LLMs, RAG, and modern AI architecture — from retrieval pipelines and agentic workflows to production inference and real-time multimodal AI.",
};

export const about = {
    headline: "Turning Ideas into Intelligent Systems",
    who: "I'm an AI engineer who owns the full stack of intelligent systems — retrieval design, LLM orchestration, agent tooling, APIs, and the interfaces that make them usable.",
    overlayText: "AI, Engineered",
    philosophy:
        "Start with the problem and data flow, not the model. Route queries to the right strategy, measure quality before scaling, and design for observability, failure modes, and cost from day one.",
    specialize:
        "LLM application engineering, RAG & GraphRAG, agentic systems (LangGraph + MCP), real-time voice/vision AI, model serving (vLLM / Ollama / NIM), and developer tooling with code ingestion & automated review.",
    build: "Document intelligence platforms, telecom agent workflows, industrial training assistants, video annotation pipelines, inference gateways, and edge-AI vision systems.",
    interests:
        "Production GenAI, retrieval architecture, evaluation harnesses, and systems where AI is embedded in real operational workflows — not isolated demos.",
    story: "My work progressed from RAG pipelines and chat systems into multi-agent orchestration, graph-augmented retrieval, recursive reasoning engines, and real-time multimodal assistants — always grounded in what ships reliably.",
};

export const expertiseDomains = [
    "AI Engineering",
    "Generative AI / LLMs",
    "RAG & Retrieval",
    "AI Architecture",
    "Agentic Systems",
    "ML / Computer Vision",
    "Backend Engineering",
    "Model Serving",
];

export const aboutTraits = [
    {
        title: "Pipeline Mindset",
        body: "Design the data flow first. Pick the model second.",
        icon: "workflow",
    },
    {
        title: "Beyond the Demo",
        body: "RAG, agents, inference — built to ship, not to impress in a slide deck.",
        icon: "sparkles",
    },
    {
        title: "Own the Stack",
        body: "Retrieval → orchestration → API → eval. End-to-end. ",
        icon: "server",
    },
];

export const nav = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Expertise", href: "#expertise" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
];

// ---------------------------------------------------------------------------
//  About — specialization highlights (shown as cards)
// ---------------------------------------------------------------------------
export const focusAreas = [
    {
        title: "Agentic Systems",
        body: "Multi-agent orchestration with LangGraph — routing, tool use via MCP, checkpointing, and human-escalation paths for real operational workflows.",
        icon: "workflow",
    },
    {
        title: "RAG & GraphRAG",
        body: "Retrieval pipelines over vector stores (ChromaDB, Weaviate) and knowledge graphs (Neo4j, NetworkX) with NER-based entity linking and sequential context.",
        icon: "graph",
    },
    {
        title: "Long-Context Reasoning",
        body: "Recursive Language Model (RLM) engines — a Root-LLM + sandboxed REPL + Sub-LLM loop that reasons over very large documents without stuffing the prompt.",
        icon: "brain",
    },
    {
        title: "Real-Time Multimodal AI",
        body: "Live vision + voice assistants over WebRTC — YOLO object detection, Whisper STT, streaming LLM reasoning, and TTS playback in a Gemini Live-style loop.",
        icon: "eye",
    },
    {
        title: "Production Engineering",
        body: "FastAPI services, async I/O, Redis/MongoDB persistence, JWT auth, encrypted secrets, Docker, and observability with Langfuse.",
        icon: "server",
    },
    {
        title: "Model Serving & Deployment",
        body: "Self-hosted LLM inference with vLLM, Ollama, and NVIDIA NIM — unified FastAPI gateways, streaming SSE chat, and backend switching for throughput vs. multimodal use.",
        icon: "cloud",
    },
];

// ---------------------------------------------------------------------------
//  Skills — grouped, only technologies evidenced in the projects
// ---------------------------------------------------------------------------
export type SkillGroup = {
    label: string;
    icon: string;
    items: string[];
};

export const skillGroups: SkillGroup[] = [
    {
        label: "Generative AI",
        icon: "sparkles",
        items: [
            "LLMs",
            "RAG",
            "GraphRAG",
            "Prompt Engineering",
            "Embeddings",
            "Vector Search",
            "Agents",
            "Function Calling",
            "OpenAI Realtime API",
        ],
    },
    {
        label: "AI Architecture",
        icon: "brain",
        items: [
            "RAG Pipelines",
            "Retrieval Strategy",
            "LLM Orchestration",
            "LangGraph",
            "LangChain",
            "MCP Tool Integration",
            "RLM / Long-Context",
            "Ragas Evaluation",
            "LiteLLM Routing",
        ],
    },
    {
        label: "Programming",
        icon: "code",
        items: ["Python", "JavaScript", "SQL", "React"],
    },
    {
        label: "AI / Machine Learning",
        icon: "eye",
        items: [
            "YOLO / Ultralytics",
            "OpenCV",
            "Edge AI",
            "Custom Model Training",
            "Hugging Face",
            "Sentence-Transformers",
            "Whisper STT",
            "NER / Relation Extraction",
        ],
    },

    {
        label: "Backend",
        icon: "server",
        items: [
            "FastAPI",
            "Flask",
            "Uvicorn",
            "Pydantic",
            "Async I/O",
            "REST APIs",
            "WebSockets",
            "Socket.IO",
        ],
    },
    {
        label: "Data",
        icon: "database",
        items: ["MongoDB", "Redis", "ChromaDB", "Weaviate", "Neo4j", "NetworkX"],
    },
    {
        label: "Cloud / DevOps",
        icon: "cloud",
        items: [
            "Docker",
            "AWS",
            "AWS Step Functions",
            "GCP",
            "vLLM",
            "Ollama",
            "CI/CD (GitLab)",
            "Nginx",
        ],
    },
    {
        label: "Tools",
        icon: "wrench",
        items: [
            "Langfuse",
            "SonarQube",
            "Git",
            "Pytest",
            "FFmpeg",
            "Unity Integration",
            "Observability & Tracing",
        ],
    },
];

// ---------------------------------------------------------------------------
//  Projects — the centerpiece. Featured = shown large at the top.
// ---------------------------------------------------------------------------
export type EngineeringDecision = {
    title: string;
    rationale: string;
};

export type ProjectChallenge = {
    challenge: string;
    solution: string;
};

export type Project = {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    problem: string;
    architecture?: string;
    architectureDiagram?: string;
    aiPipeline?: string;
    dataFlow?: string;
    engineeringDecisions?: EngineeringDecision[];
    challenges?: ProjectChallenge[];
    evaluation?: string;
    highlights?: string[];
    features: string[];
    stack: string[];
    category: string;
    featured?: boolean;
    /** Display order — lower numbers appear first. The first 3 become the large featured cards. */
    order?: number;
    accent: string;
    icon: string;
    github?: string;
    liveDemo?: string;
    links?: { label: string; href: string }[];
};

export const projects: Project[] = [
    {
        slug: "lucius-ai",
        order: 1,
        title: "Lucius AI — Document Intelligence",
        tagline: "Document library, chat & deep analysis with RLM",
        description:
            "A FastAPI + React product for working with large document libraries. It combines PageIndex-based retrieval with a custom Recursive Language Model (RLM) engine for deep analysis, plus a general chat mode — all with an evaluation harness and admin tooling.",
        problem:
            "Answering questions over large documents is limited by context windows and cost. Lucius routes queries to the right strategy and uses iterative, code-driven reasoning for deep analysis instead of one-shot prompting.",
        architecture:
            "React frontend → FastAPI API layer → query router (General / PageIndex / RLM) → MongoDB for docs & auth → LiteLLM for model calls → Ragas evaluation harness for offline quality checks.",
        architectureDiagram: `User Query
     ↓
Query Router (General | PageIndex | Deep/RLM)
     ↓
PageIndex Structure API ──→ Context Assembly
     ↓
RLM Engine (Root LLM + REPL + Sub-LLM)
     ↓
LiteLLM → LLM Provider
     ↓
Response + Citations
     ↓
Ragas Offline Eval (golden set)`,
        aiPipeline:
            "Documents ingested via PageIndex → structure-aware retrieval for standard mode → RLM iterative reasoning for deep analysis → LiteLLM routes to configured provider → responses evaluated offline with Ragas golden sets.",
        dataFlow:
            "PDF/library upload → MongoDB metadata → PageIndex indexing → user query hits router → retrieved context + optional RLM sandbox execution → streamed markdown/PDF response to React UI.",
        engineeringDecisions: [
            {
                title: "Three query modes instead of one prompt",
                rationale:
                    "Simple questions don't need RLM cost; deep analysis needs iterative code-driven reasoning. Routing by intent keeps latency and spend proportional to task complexity.",
            },
            {
                title: "PageIndex over naive chunking",
                rationale:
                    "Document structure (sections, pages) improves grounding for library-scale corpora versus flat vector chunks alone.",
            },
            {
                title: "Ragas golden-set evaluation",
                rationale:
                    "Offline eval with admin tooling makes RAG/RLM quality measurable before production changes — not guesswork after deploy.",
            },
        ],
        challenges: [
            {
                challenge: "Context window limits on large document libraries",
                solution:
                    "RLM engine delegates sub-queries to a sandboxed REPL + Sub-LLM loop instead of stuffing entire documents into one prompt.",
            },
            {
                challenge: "PII in uploaded documents",
                solution:
                    "LLM-Guard anonymization layer before model calls, plus Argon2 auth and encrypted secrets in the API layer.",
            },
        ],
        evaluation:
            "Ragas-based offline evaluation with a golden-set admin panel for regression testing across query modes.",
        highlights: [
            "Query routing by complexity",
            "Custom RLM reasoning engine",
            "Structure-aware PageIndex retrieval",
            "Offline Ragas evaluation harness",
        ],
        features: [
            "Three query modes: General, Standard (PageIndex), and Deep (RLM)",
            "Custom RLM engine — Root LLM + sandboxed Python REPL + Sub-LLM delegation",
            "PageIndex document structure & page-content APIs for grounded context",
            "Ragas-based offline evaluation with a golden-set admin panel",
            "LLM-Guard PII/anonymization, Argon2 auth, and MongoDB persistence",
            "React + Tailwind frontend with PDF rendering and markdown output",
        ],
        stack: ["FastAPI", "PageIndex", "RLM", "LiteLLM", "Ragas", "MongoDB", "React", "Tailwind"],
        category: "RAG / Long-Context",
        featured: true,
        accent: "from-teal-400/25 via-accent-500/10 to-transparent",
        icon: "brain",
    },
    {
        slug: "graphrag-trace",
        order: 2,
        title: "GraphRAG & Agent Trace Graph",
        tagline: "Knowledge graphs for documents and agent conversations",
        description:
            "A graph-based intelligence layer that unifies two pipelines: a RAG + GraphRAG system that turns PDFs and media into a hybrid knowledge graph (vector chunks linked by sequential and NER-based entity edges), and an agent-trace graph that ingests AI conversations into Neo4j as connected Human / AI / Tool nodes for forward and backward tracing.",
        problem:
            "Pure vector RAG loses document structure and entity relationships, and multi-turn agent runs are hard to debug from flat logs. Modeling both as graphs improves retrieval grounding and makes any message traceable through tool calls and decisions.",
        architectureDiagram: `PDF / Media Ingest
     ↓
Chunk + Embed → ChromaDB
     ↓
NetworkX Graph (sequential + NER edges)
     ↓
Hybrid GraphRAG Retrieval
     ↓
LLM Response

Agent Conversation
     ↓
Neo4j Trace Graph (Human / AI / Tool)
     ↓
Forward / Backward Trace Queries`,
        aiPipeline:
            "Documents chunked and embedded → graph edges from sequence and NER co-occurrence → hybrid retrieval combines vector + graph context. Agent runs ingested as Neo4j nodes with FOLLOWED_BY and tool_call_id edges for trace analysis.",
        engineeringDecisions: [
            {
                title: "Hybrid graph + vector retrieval",
                rationale:
                    "Sequential and entity edges recover relationships that flat chunk retrieval misses in structured documents.",
            },
            {
                title: "Separate trace graph for agents",
                rationale:
                    "Debugging multi-step agent workflows requires traversable conversation graphs, not unstructured log dumps.",
            },
        ],
        highlights: [
            "NetworkX + Neo4j dual graph model",
            "NER-based entity co-occurrence edges",
            "Agent forward/backward tracing",
            "Hybrid GraphRAG retrieval",
        ],
        features: [
            "PDF text + table extraction (PyMuPDF, pdfplumber) with recursive chunking",
            "Sentence-Transformer embeddings into ChromaDB, linked sequentially",
            "NetworkX graph with sequential + NER entity co-occurrence edges",
            "Neo4j agent-trace graph — Human/AI/Tool nodes with MERGE + unique constraints",
            "Sequential (FOLLOWED_BY) and semantic (tool_call_id) edge modeling",
            "AgentTracer query layer for forward/backward trace analysis",
            "Graph visualization and LLM-based query response generation",
        ],
        stack: [
            "Neo4j",
            "Cypher",
            "ChromaDB",
            "NetworkX",
            "Sentence-Transformers",
            "LangChain",
            "FastAPI",
            "LLM",
        ],
        category: "RAG / GraphRAG",
        accent: "from-accent-400/20 via-teal-400/10 to-transparent",
        icon: "graph",
    },
    {
        order: 3,
        slug: "noc-troubleshooting",
        title: "NOC Link-Down Troubleshooting",
        tagline: "12+ agent telecom network-operations workflow",
        description:
            "An agentic system for telecom BSO link-down cases. A set of specialized agents — intake, inventory, command synthesis, PE/CE diagnostics, parent mapping, customer FLT, last-mile verification, and closure — run across both wireless and wired flows, integrated with ServiceNow.",
        problem:
            "Link-down troubleshooting spans many systems and steps. This workflow encodes the runbook as collaborating agents that classify the case (MPLS / last-mile type) and drive it to resolution or escalation.",
        features: [
            "12 shared agents + 3 wireless-specific agents (AP / SU paths)",
            "ServiceNow case lifecycle integration with state transitions",
            "LLM-based classification of MPLS type and last-mile type",
            "Structured progress-event API for external orchestration",
            "Vendor escalation matrix and customer contact validation",
        ],
        stack: ["LangGraph", "FastAPI", "ServiceNow", "LLM", "React", "MCP"],
        category: "Agentic Systems",
        accent: "from-teal-400/20 via-accent-500/10 to-transparent",
        icon: "network",
    },
    {
        order: 4,
        slug: "video-annotation",
        title: "AI Video Annotation Platform",
        tagline: "End-to-end video upload, processing & AI annotation pipeline",
        description:
            "A full-stack video annotation platform with a React frontend and a FastAPI backend (migrated from Node.js). It handles video upload, validation, conversion, and an AWS Step Functions pipeline that produces transcripts, chapters, glossaries, and subtitles — with draft/publish versioning and multi-cloud storage.",
        problem:
            "Educational and studio video workflows need automated transcription, chaptering, and metadata generation at scale. This platform orchestrates upload, storage, and AI processing into a single versioned pipeline with real-time status tracking.",
        features: [
            "Video upload with format validation, resolution checks, and FFmpeg conversion",
            "AWS Step Functions pipeline for async annotation (transcript, chapters, VTT, LLM ops)",
            "Dual storage support — AWS S3 and Google Cloud Storage with presigned URLs",
            "MongoDB versioning with draft and published states",
            "React editor for chapters, glossary, subtitles, and poster images",
            "Pricing engine and Dify studio integration for downstream AI workflows",
        ],
        stack: [
            "FastAPI",
            "React",
            "MongoDB",
            "AWS Step Functions",
            "S3 / GCS",
            "FFmpeg",
            "Docker",
        ],
        category: "Multimodal AI",
        accent: "from-teal-400/20 via-accent-500/10 to-transparent",
        icon: "media",
    },
    {
        order: 5,
        slug: "toolingu-ai",
        title: "ToolingU AI Assistance",
        tagline: "Real-time chatbot | RAG | Unity integration",
        description:
            "A real-time AI chatbot integrated with Unity to assist users in virtual labs, enabling interactive guidance and a seamless hands-on experience. RAG is implemented with ChromaDB and LangChain to enhance LLM context awareness, generate accurate step-specific responses, improve retrieval efficiency, and maintain seamless interaction through optimized memory management.",
        problem:
            "Virtual lab training breaks down when learners get stuck mid-task and have no contextual help. Generic chatbots lack awareness of procedure documents and Unity interaction state. This system combines RAG over ingested training content with live collider-based progress tracking so every response is grounded and task-relevant.",
        architecture:
            "Unity simulation → Flask APIs (help_api, step_ques_hint) → ChromaDB RAG retrieval over PDF procedures → Llama 3.3 via NVIDIA NIM → MongoDB for session & progress state.",
        architectureDiagram: `Unity Virtual Lab (collider events)
     ↓
Flask API (help_api / step_ques_hint)
     ↓
ChromaDB RAG (goal-filtered retrieval)
     ↓
Llama 3.3 70B (NVIDIA NIM)
     ↓
Step ID + Hints + Diagnostic Questions
     ↓
MongoDB (session history, help count)`,
        aiPipeline:
            "Procedure PDFs ingested with PyMuPDF4LLM → embedded into ChromaDB → Unity sends collider interactions → LLM identifies current step with retrieved procedure context → yes/no diagnostic flow with targeted hints.",
        engineeringDecisions: [
            {
                title: "ChromaDB + LangChain RAG",
                rationale:
                    "Grounds every response in ingested procedure documents rather than relying on the LLM's parametric memory for safety-critical training steps.",
            },
            {
                title: "Collider-based progress from Unity",
                rationale:
                    "Physical interaction state gives the model concrete signals about where the learner is in the lab — not just free-text chat.",
            },
        ],
        highlights: [
            "Unity-integrated real-time guidance",
            "Goal-filtered vector retrieval",
            "Session-aware memory management",
            "Industrial LOTO procedure domain",
        ],
        features: [
            "Real-time Flask APIs integrated with Unity virtual lab simulations",
            "ChromaDB + LangChain RAG over PDF-ingested procedure documents (PyMuPDF4LLM)",
            "help_api — LLM step identification from Unity collider interactions + retrieved context",
            "step_ques_hint — yes/no diagnostic flow with targeted hints on incorrect steps",
            "MongoDB session history, help-count limits, and goal-based document retrieval",
            "NVIDIA NIM (Llama 3.3 70B) via OpenAI-compatible API for low-latency responses",
        ],
        stack: [
            "Flask",
            "Unity",
            "ChromaDB",
            "LangChain",
            "MongoDB",
            "PyMuPDF4LLM",
            "NVIDIA NIM",
            "RAG",
        ],
        category: "Agentic Systems",
        featured: true,
        accent: "from-accent-400/25 via-teal-400/10 to-transparent",
        icon: "workflow",
    },
    {
        order: 6,
        slug: "code-review-ingestion",
        title: "Code Ingestion & Review Agent",
        tagline: "AST-based repo indexing + SonarQube-driven AI code fixing",
        description:
            "A two-part developer tooling system: a code ingestion pipeline that clones repos, parses source with AST, chunks at the element level, and indexes into Weaviate — and a code review agent that reads SonarQube findings and uses an MCP-backed LLM agent to validate, fix, and commit changes via GitLab in chunked passes.",
        problem:
            "Developers need both semantic code search over entire repositories and automated remediation of static-analysis findings. Ingestion builds the knowledge base; the review agent closes the loop from SonarQube issue to applied fix.",
        architectureDiagram: `Git Repo Clone
     ↓
AST Parse (multi-language)
     ↓
Element Chunking + LLM Summaries
     ↓
Weaviate Vector Index

SonarQube Issues
     ↓
MCP LLM Agent (chunked passes)
     ↓
Validate → Fix → GitLab Commit`,
        aiPipeline:
            "Repos parsed at AST element level → summaries embedded in Weaviate for semantic search. SonarQube findings fetched in chunks → MCP agent validates each issue against current code → applies fixes and commits via GitLab API.",
        engineeringDecisions: [
            {
                title: "AST element-level chunking",
                rationale:
                    "Function/class boundaries produce semantically coherent chunks for both search and fix context — better than arbitrary line splits.",
            },
            {
                title: "Chunked SonarQube remediation",
                rationale:
                    "Large issue lists exceed context limits; chunked passes with cross-chunk validation avoid duplicate fixes and missed issues.",
            },
        ],
        highlights: [
            "Multi-language AST ingestion",
            "Weaviate semantic code search",
            "MCP-backed fix agent",
            "GitLab commit automation",
        ],
        features: [
            "Git repo cloning with token auth and multi-language AST parsing (Python, JS, TS, Java, Go, etc.)",
            "Element-level chunking with LLM summaries ingested into Weaviate per folder",
            "MongoDB metadata tracking for ingestion runs and collection stats",
            "SonarQube issue fetching with chunked fix strategy (single / first / middle / last modes)",
            "MCP agent with GitLab read/write, issue validation, and Base64 decode handling",
            "Cross-chunk issue validation to skip already-resolved findings",
        ],
        stack: [
            "FastAPI",
            "Weaviate",
            "SonarQube",
            "MCP",
            "MongoDB",
            "GitLab",
            "AST Parsing",
            "LLM",
        ],
        category: "Developer Tooling",
        accent: "from-teal-400/20 via-accent-500/10 to-transparent",
        icon: "code",
    },
    {
        order: 7,

        slug: "model-deployments",
        title: "Self-Hosted LLM Inference Gateway",
        tagline: "Unified API over vLLM, Ollama & NVIDIA NIM",
        description:
            "A production inference gateway with a FastAPI backend and React chat UI that routes requests to multiple self-hosted backends — vLLM for high-throughput parallel inference, Ollama for multimodal and casual use, and NVIDIA NIM for enterprise-grade Llama deployments — all behind a single OpenAI-compatible API surface.",
        problem:
            "Different workloads need different inference engines: vLLM for batch throughput, Ollama for easy model management, NIM for managed enterprise GPUs. This gateway abstracts backend differences so applications swap engines via config, not code.",
        architecture:
            "React chat UI → FastAPI gateway → /api/vllm/* or /api/ollama/* routes → backend-specific adapters (OpenAI SDK for vLLM, Ollama async client) → SSE streaming back to client.",
        architectureDiagram: `Client (React)
     ↓
FastAPI Gateway
     ├─→ /api/ollama/*  → Ollama (multimodal, local)
     └─→ /api/vllm/*    → vLLM (throughput, batching)
              ↓
     OpenAI-compatible /v1/chat/completions
              ↓
     SSE / JSON Response`,
        aiPipeline:
            "Unified chat schema across backends → gateway selects engine via config → vLLM uses continuous batching for throughput → Ollama handles casual/multimodal workloads → reasoning mode forwarded to vLLM when enabled.",
        engineeringDecisions: [
            {
                title: "Single gateway, multiple inference backends",
                rationale:
                    "Applications (Lucius, ToolingU, etc.) swap vLLM vs Ollama via env config — no rewrite of client integration code.",
            },
            {
                title: "vLLM for throughput, Ollama for flexibility",
                rationale:
                    "Different workloads need different engines; abstracting both behind OpenAI-compatible APIs keeps the ops model simple.",
            },
        ],
        highlights: [
            "Backend-agnostic OpenAI API surface",
            "SSE streaming + sync endpoints",
            "Parallel request semaphore for Ollama",
            "Reasoning/thinking mode proxy",
        ],
        features: [
            "Dual-backend FastAPI gateway — /api/vllm/* and /api/ollama/* with shared chat schema",
            "Streaming SSE and sync JSON chat endpoints with reasoning/thinking mode support",
            "vLLM continuous batching with OpenAI-compatible /v1/chat/completions proxy",
            "Ollama model pull with SSE progress, GPU status, and parallel request semaphore",
            "React frontend with backend switcher, model selector, and load-test panel",
            "OpenAI-compatible routing used across Lucius AI, ToolingU, and other projects",
        ],
        stack: ["FastAPI", "vLLM", "Ollama", "NVIDIA NIM", "React", "OpenAI SDK", "SSE Streaming"],
        category: "ML Infrastructure",
        featured: true,
        accent: "from-teal-400/25 via-accent-500/10 to-transparent",
        icon: "server",
    },
    {
        order: 8,

        slug: "media-library",
        title: "AI Media Library",
        tagline: "Multimodal media ingestion, search & progress tracking",
        description:
            "A full-stack media library that ingests images and video, extracts metadata (including HOG-based and MiniCPM vision models), stores it in a vector DB, and supports search with a live import progress tracker.",
        problem:
            "Large media collections are hard to search semantically. This system builds rich, searchable metadata and gives users real-time visibility into import progress.",
        features: [
            "Image & video ingestion with metadata extraction",
            "HOG and MiniCPM vision models for content understanding",
            "Vector-DB backed semantic search (ChromaDB / Weaviate)",
            "Real-time import progress tracking in the UI",
            "Dockerized backend with GCP storage integration",
        ],
        stack: ["FastAPI", "ChromaDB", "Weaviate", "HOG", "MiniCPM", "React", "Docker"],
        category: "Multimodal AI",
        accent: "from-teal-400/20 via-accent-500/10 to-transparent",
        icon: "media",
    },
    {
        order: 9,

        slug: "yolo-realtime-vision",
        title: "Machinery Detection for Industrial Assistance",
        tagline: "Edge AI | Custom YOLO | Real-time vision chatbot",
        description:
            "An edge-AI system for industrial machinery assistance — a Gemini Live-style real-time vision and voice chatbot paired with a custom YOLO model trained on industrial components. A rule-based monitoring framework tracks user actions in real time, ensuring correct handling of machinery, while the model is optimized for edge deployment to achieve low latency and high efficiency during live processing.",
        problem:
            "Industrial training and maintenance require verifying that operators handle the right components in the right order, in real time. Cloud-only vision is too slow for live guidance. This system runs a custom-trained YOLO model on-device for component detection, couples it with a WebRTC voice loop, and enforces step correctness through a rule-based action monitor backed by MongoDB task state.",
        architecture:
            "React Native (YOLO on-device) → FastRTC WebRTC audio → Whisper STT → Llama streaming → TTS playback | Socket.IO + MongoDB for step validation & rule-based action monitoring.",
        architectureDiagram: `Camera (React Native)
     ↓
YOLO Edge Detection (custom dataset)
     ↓
Rule-Based Step Monitor
     ↓
FastRTC WebRTC Audio ←→ Whisper STT
     ↓
Streaming LLM + Vision Backend
     ↓
Edge TTS / Cartesia → User
     ↓
MongoDB Task State (Socket.IO)`,
        aiPipeline:
            "Live frames processed on-device by custom YOLO → component detections validated against MongoDB step outline → voice queries transcribed via Whisper → LLM responds with task-aware context → spoken via streaming TTS.",
        engineeringDecisions: [
            {
                title: "On-device YOLO vs cloud vision",
                rationale:
                    "Industrial component identification needs low latency; edge inference avoids sending every frame to a remote API.",
            },
            {
                title: "Rule-based monitor + LLM guidance",
                rationale:
                    "Deterministic step validation catches incorrect actions; the LLM layer handles natural-language guidance without replacing hard safety checks.",
            },
        ],
        highlights: [
            "Custom-trained YOLO (20+ component classes)",
            "Edge-optimized mobile inference",
            "Gemini Live-style voice loop",
            "Multi-stage disassembly orchestration",
        ],
        github: "https://github.com/Rahul-2125/yolo_app",
        features: [
            "Custom YOLO model trained on industrial machinery dataset (20+ component classes)",
            "Rule-based monitoring framework — tracks user actions and validates step completion in real time",
            "Edge-optimized inference for low-latency detection on React Native mobile clients",
            "FastRTC WebRTC pipeline — Whisper STT, streaming LLM, Edge TTS / Cartesia playback",
            "Socket.IO + MongoDB multi-stage task orchestration for server disassembly workflows",
            "Llama Vision & Gemini backends for spoken query understanding over live camera frames",
        ],
        stack: [
            "YOLO",
            "Edge AI",
            "FastRTC",
            "Whisper",
            "React Native",
            "Socket.IO",
            "MongoDB",
            "WebRTC",
        ],
        category: "Multimodal AI",
        featured: true,
        accent: "from-teal-400/25 via-accent-500/10 to-transparent",
        icon: "eye",
        links: [
            { label: "Python Backend", href: "https://github.com/Rahul-2125/yolo_app" },
            {
                label: "React Native App",
                href: "https://github.com/GuberaSify/object-deduction-poc",
            },
        ],
    },
    {
        order: 10,

        slug: "scout-ai",
        title: "ScoutAI — Real-Time Voice Companion",
        tagline: "OpenAI Realtime API | Function-calling modes | Firestore",
        description:
            'A real-time voice companion for children — "Scout" — built on the OpenAI Realtime API with a React frontend and a Python Socket.IO backend. Users speak naturally and Scout responds with streamed audio, switching between casual chat, interactive storytelling, character role-play, and homework help via tool/function calling, with full session history and persona persistence in Firestore.',
        problem:
            "Child-facing voice AI needs to feel natural, safe, and adaptive — not a single static chatbot. Scout routes live speech through OpenAI Realtime with server-side VAD, dynamically swaps system prompts and tools per mode (story, role-play, homework), and remembers characters, personas, and past conversations across sessions.",
        architectureDiagram: `React Client (mic/speaker)
     ↓
Socket.IO Backend
     ↓
OpenAI Realtime WebSocket (PCM audio)
     ↓
Function Calling (mode router)
     ├─ Storytelling
     ├─ Role-play
     ├─ Homework
     └─ Casual chat
     ↓
Firestore (personas, history)`,
        aiPipeline:
            "User speech streamed as PCM → OpenAI Realtime with server VAD → mode selected via function calling → system prompt and tools swapped per mode → audio response streamed back → session and persona state persisted in Firestore.",
        highlights: [
            "OpenAI Realtime bidirectional audio",
            "Multi-mode function calling",
            "Character persona persistence",
            "Interruptible voice responses",
        ],
        features: [
            "OpenAI Realtime WebSocket pipeline — bidirectional PCM audio, server VAD, interruptible responses",
            "Function-calling modes: casual conversation, storytelling, role-play, homework assistant",
            "Role-play character persistence — create, switch, and update character traits in Firestore",
            "User persona summarization via Llama 3.3 when children share personal details",
            "React UI with live transcript, microphone visualizer, profile management, and chat history",
            "Alternate STT pipelines — Whisper Realtime and Silero VAD threshold-whisper backends",
        ],
        stack: [
            "OpenAI Realtime",
            "Socket.IO",
            "React",
            "Firestore",
            "Python",
            "Function Calling",
            "Silero VAD",
            "Whisper",
        ],
        category: "Conversational AI",
        accent: "from-accent-400/20 via-teal-400/10 to-transparent",
        icon: "sparkles",
    },
    {
        slug: "context-manager",
        order: 11,
        title: "Context Manager Agent",
        tagline: "Token-aware context orchestration for agents",
        description:
            "An agent that manages LLM context intelligently — query analysis, planning/decomposition, an execution loop, and result aggregation — with smart summarization, token budgeting, relevance filtering, and hierarchical compression.",
        problem:
            "Long agent sessions blow past context limits. This system compresses and budgets context so agents stay focused and within token budgets.",
        features: [
            "Query analysis / intent detection and planning subgraphs",
            "Smart summarization instead of hard truncation",
            "Token budgeting across system prompt, context & query",
            "Relevance filtering and hierarchical compression",
            "LangGraph orchestrator with subgraph composition",
        ],
        stack: ["LangGraph", "FastAPI", "LLM", "Python", "Context Mgmt"],
        category: "Agentic Systems",
        accent: "from-accent-400/20 via-teal-400/10 to-transparent",
        icon: "brain",
    },
];

// ---------------------------------------------------------------------------
//  Experience — career progression & major milestones
// ---------------------------------------------------------------------------
export type ExperienceRole = {
    title: string;
    period: string;
    points: string[];
};

export type ExperienceItem = {
    company: string;
    location: string;
    period: string;
    roles: ExperienceRole[];
};

export const experience: ExperienceItem[] = [
    {
        company: "Sify Technologies Limited",
        location: "Chennai, Tamil Nadu, India",
        period: "Jul 2024 – Present",
        roles: [
            {
                title: "Software Developer | AI Engineer",
                period: "Jul 2025 – Present",
                points: [
                    "Building retrieval-augmented and graph-augmented generation pipelines",
                    "Designing long-context reasoning (RLM) to beat prompt-length limits",
                    "LangGraph state machines with routing, tool use & checkpointing",
                    "FastAPI services with async I/O, JWT auth & encrypted secrets",
                ],
            },
            {
                title: "Engineer Trainee",
                period: "Jul 2024 – Jul 2025",
                points: [
                    "Artificial Intelligence (AI), Deep Learning and 5+ skills",
                    "Foundational work across ML pipelines, model training & deployment",
                ],
            },
        ],
    },
];

// ---------------------------------------------------------------------------
//  Stats — derived from the actual project set (no invented metrics)
// ---------------------------------------------------------------------------
export const stats = [
    { value: "11", label: "AI/ML projects built" },
    { value: "4", label: "Cloud & AI certifications" },
    { value: "15+", label: "Agents designed" },
    { value: "Full-stack", label: "Python → React" },
];

// ---------------------------------------------------------------------------
//  Certifications
// ---------------------------------------------------------------------------
export type Certification = {
    title: string;
    issuer: string;
    icon: string;
    date?: string;
    credentialUrl?: string;
    /** Short credential / exam code, e.g. "RHCSA · EX280" */
    credential?: string;
    /** Level tag, e.g. "Associate", "Professional" */
    level?: string;
    /** Relevant skills / technology the credential validates */
    skills: string[];
};

export const certifications: Certification[] = [
    {
        title: "AWS Certified AI Practitioner",
        issuer: "Amazon Web Services",
        icon: "sparkles",
        date: "2026",
        skills: ["GenAI", "Bedrock", "ML Foundations", "Prompting"],
    },
    {
        title: "AWS Certified Developer – Associate",
        issuer: "Amazon Web Services",
        icon: "cloud",
        date: "2024",
        skills: ["AWS", "Serverless", "Lambda", "CI/CD"],
    },
    {
        title: "Google Cloud Certified – Generative AI Leader",
        issuer: "Google Cloud",
        icon: "brain",
        date: "2026",
        skills: ["Vertex AI", "AI Agents", "Gemini", "RAG", "MLOps"],
    },
    {
        title: "Red Hat Certified System Administrator",
        issuer: "Red Hat",
        icon: "server",
        date: "2024",
        skills: ["Linux", "RHEL", "System Administration", "Shell"],
    },
];
