// ---------------------------------------------------------------------------
//  Profile & content data
//  Everything here is grounded in the actual project files in the workspace.
//  Edit the `profile` object to update personal details (name, links, email).
// ---------------------------------------------------------------------------

export const profile = {
    name: "Rahul R",
    firstName: "Rahul R",
    role: "AI Engineer · GenAI · Agentic AI · AI Architecture",
    positioning:
        "I design and ship production-grade AI systems — LLM applications, RAG & GraphRAG, agentic orchestration, and the infrastructure that keeps them reliable at scale.",
    headline:
        "Production AI systems — from retrieval pipelines to real-time multimodal agents.",
    summary:
        "I architect and ship end-to-end AI products: RAG & GraphRAG, multi-agent workflows, long-context reasoning, model serving, and edge vision — backed by the evaluation, observability, and backend engineering to run in production, not just in a demo.",
    location: "Chennai, India",
    email: "demomail.ofc@gmail.com",
    github: "",
    linkedin: "https://www.linkedin.com/in/rahul-r-999595205",
    /** Profile photo — put image in `public/` folder, e.g. "/profile.jpg" */
    photo: "/profile.jpg",
    availability: "Available for opportunities",
    heroIntro: [
        "I architect and engineer intelligent, production-grade AI systems that move beyond prototypes and deliver real-world value. My work spans LLM applications, RAG architectures, agentic systems, production inference, and real-time multimodal AI — with a focus on building solutions that are scalable, reliable, observable, and ready for production.",
    ],
};

export const about = {
    headline: "From AI Concepts to Production-Ready Systems",
    who: "I engineer end-to-end AI systems that turn complex problems into intelligent, reliable, and production-ready solutions. I work across the entire AI application stack—from retrieval architecture and LLM orchestration to agentic workflows, tool integration, APIs, model serving, and user-facing experiences. My focus is not just on building AI prototypes, but on engineering systems that are scalable, observable, maintainable, and ready for real-world use.",
    overlayText: "AI, Engineered",
    philosophy:
        "Start with the problem and the data flow, not the model. Route each query to the right strategy, measure quality before scaling, and design for observability, failure modes, and cost from day one.",
    specialize:
        "My expertise spans RAG and GraphRAG, agentic AI with LangGraph and MCP, real-time voice and vision AI, production inference with vLLM, Ollama, and NVIDIA NIM, and AI-powered developer tooling for code understanding, automated analysis, and intelligent code review.",
    build: "Document intelligence platforms, telecom agent workflows, industrial training assistants, video annotation pipelines, inference gateways, and edge-AI vision systems.",
    interests:
        "Production GenAI, retrieval architecture, evaluation harnesses, and systems where AI is embedded in real operational workflows — not isolated demos.",
    story: "My work has progressed from RAG pipelines and chat systems into multi-agent orchestration, graph-augmented retrieval, recursive reasoning engines, and real-time multimodal assistants — always grounded in what ships reliably.",
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
        title: "Systems Thinking",
        body: "Design AI solutions around data, workflows, constraints, and system-level trade-offs — not models alone.",
        icon: "workflow",
    },
    {
        title: "Production-Grade AI",
        body: "Engineer for accuracy, reliability, latency, scalability, observability, and measurable performance.",
        icon: "sparkles",
    },
    {
        title: "Full-Stack AI Ownership",
        body: "From retrieval and reasoning to agents, inference, APIs, evaluation, and deployment — end to end.",
        icon: "server",
    },
];

export const nav = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Projects", href: "#projects" },
    { label: "Expertise", href: "#expertise" },
    { label: "Contact", href: "#contact" },
];

// ---------------------------------------------------------------------------
//  About — specialization highlights (shown as cards)
// ---------------------------------------------------------------------------
export const focusAreas = [
    {
        title: "Agentic Systems",
        body: "Multi-agent orchestration with LangGraph — intent routing, tool use via MCP, checkpointing, and human-escalation paths built for real operational workflows, not toy demos.",
        icon: "workflow",
    },
    {
        title: "RAG & GraphRAG",
        body: "Retrieval pipelines over vector stores (ChromaDB, Weaviate) and knowledge graphs (Neo4j, NetworkX), combining NER-based entity linking with sequential context for grounded answers.",
        icon: "graph",
    },
    {
        title: "Long-Context Reasoning",
        body: "Recursive Language Model (RLM) engines — a Root-LLM + sandboxed REPL + Sub-LLM loop that reasons over very large documents without stuffing everything into one prompt.",
        icon: "brain",
    },
    {
        title: "Real-Time Multimodal AI",
        body: "Live vision + voice assistants over WebRTC — YOLO object detection, Whisper STT, streaming LLM reasoning, and TTS playback in a Gemini Live-style loop.",
        icon: "eye",
    },
    {
        title: "Production Engineering",
        body: "FastAPI services with async I/O, Redis/MongoDB persistence, JWT auth, encrypted secrets, Docker, and end-to-end observability with Langfuse.",
        icon: "server",
    },
    {
        title: "Model Serving & Deployment",
        body: "Self-hosted LLM inference with vLLM, Ollama, and NVIDIA NIM — unified FastAPI gateways, streaming SSE chat, and config-driven backend switching for throughput vs. multimodal workloads.",
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
        tagline: "Document library, chat & deep analysis powered by a custom RLM engine",
        description:
            "A FastAPI + React product for working with large document libraries. Lucius combines PageIndex-based, structure-aware retrieval with a custom Recursive Language Model (RLM) engine for deep analysis, alongside a general chat mode — all wrapped in an offline evaluation harness and admin tooling so quality is measurable, not assumed.",
        problem:
            "Answering questions over large document libraries is constrained by context windows and cost. Stuffing a whole document into one prompt is expensive, lossy, and brittle. Lucius routes each query to the strategy that fits it and uses iterative, code-driven reasoning for deep analysis instead of one-shot prompting.",
        challenges: [
            {
                challenge: "Context window limits on large document libraries",
                solution:
                    "The RLM engine delegates sub-queries to a sandboxed REPL + Sub-LLM loop instead of stuffing entire documents into one prompt.",
            },
            {
                challenge: "PII in uploaded documents",
                solution:
                    "An LLM-Guard anonymization layer runs before model calls, backed by Argon2 auth and encrypted secrets in the API layer.",
            },
        ],
        evaluation:
            "Ragas-based offline evaluation with a golden-set admin panel for regression testing across all query modes.",
        highlights: [
            "Intent-based query routing",
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
        order: 5,
        title: "GraphRAG & Agent Trace Graph",
        tagline: "Knowledge graphs for documents and agent conversations",
        description:
            "A graph-based intelligence layer that unifies two pipelines: a RAG + GraphRAG system that turns PDFs and media into a hybrid knowledge graph (vector chunks linked by sequential and NER-based entity edges), and an agent-trace graph that ingests AI conversations into Neo4j as connected Human / AI / Tool nodes for forward and backward tracing.",
        problem:
            "Pure vector RAG loses document structure and entity relationships, and multi-turn agent runs are hard to debug from flat logs. Modeling both as graphs improves retrieval grounding and makes any message traceable through the tool calls and decisions that produced it.",
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
        tagline: "A 15-agent telecom network-operations workflow, end to end",
        description:
            "An agentic system for telecom BSO link-down cases. A set of specialized agents — intake, inventory, command synthesis, PE/CE diagnostics, parent mapping, customer FLT, last-mile verification, and closure — collaborate across both wireless and wired flows, with full ServiceNow case-lifecycle integration and a structured progress-event API for external orchestration.",
        problem:
            "Link-down troubleshooting spans many systems, tools, and handoffs, and the runbook is long enough that no single engineer holds it all in their head. This workflow encodes the runbook as collaborating agents that classify the case (MPLS / last-mile type) and drive it to resolution or escalation — with a clear audit trail at every step.",
        highlights: [
            "15 collaborating agents across wired & wireless paths",
            "LLM-based case classification",
            "ServiceNow lifecycle integration",
            "Real-time progress-event API",
        ],
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
        order: 6,
        slug: "video-annotation",
        title: "AI Video Annotation Platform",
        tagline: "End-to-end video upload, processing & AI annotation pipeline",
        description:
            "A full-stack video annotation platform with a React frontend and a FastAPI backend (migrated from Node.js). It handles video upload, validation, and conversion, then drives an AWS Step Functions pipeline that produces transcripts, chapters, glossaries, and subtitles — with draft/publish versioning, multi-cloud storage, and real-time status tracking.",
        problem:
            "Educational and studio video workflows need automated transcription, chaptering, and metadata generation at scale — but the processing is slow, stateful, and easy to get wrong. This platform orchestrates upload, storage, and AI processing into a single versioned pipeline with real-time status tracking, so editors always know where a video is in the pipeline.",
        highlights: [
            "Durable async annotation pipeline",
            "Draft / publish versioning",
            "Multi-cloud storage (S3 / GCS)",
            "Real-time processing status",
        ],
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
        order: 9,
        slug: "toolingu-ai",
        title: "ToolingU AI Assistance",
        tagline: "Real-time AI guidance for Unity virtual labs, grounded in RAG",
        description:
            "A real-time AI assistant integrated with Unity to guide users through virtual labs. RAG is implemented with ChromaDB and LangChain over ingested procedure documents, so the model stays grounded in the actual task, generates accurate step-specific responses, and maintains seamless interaction through optimized session memory.",
        problem:
            "Virtual lab training breaks down when learners get stuck mid-task with no contextual help. Generic chatbots lack awareness of the procedure documents and the learner's live interaction state. This system combines RAG over ingested training content with collider-based progress tracking from Unity, so every response is grounded and task-relevant.",
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
        order: 4,
        slug: "code-review-ingestion",
        title: "Code Ingestion & Review Agent",
        tagline: "AST-based repo indexing + SonarQube-driven AI code fixing",
        description:
            "A two-part developer tooling system. First, a code ingestion pipeline that clones repos, parses source with AST, chunks at the element level, and indexes into Weaviate for semantic search. Second, a code review agent that reads SonarQube findings and uses an MCP-backed LLM agent to validate, fix, and commit changes via GitLab in chunked passes.",
        problem:
            "Developers need both semantic code search over entire repositories and automated remediation of static-analysis findings — and the two are tightly coupled. Ingestion builds the knowledge base the agent reasons over; the review agent closes the loop from a SonarQube issue to an applied, committed fix.",
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
        order: 2,

        slug: "media-library",
        title: "AI Media Library",
        tagline: "Multimodal media ingestion, semantic search & live progress tracking",
        description:
            "A full-stack media library that ingests images and video, extracts rich metadata using HOG-based and MiniCPM vision models, stores it in a vector database, and supports semantic search — with a live import progress tracker so users always see how far along a large batch is.",
        problem:
            "Large media collections are hard to search semantically — filename and tag-based search misses what's actually in the content. This system builds rich, searchable metadata from the media itself and gives users real-time visibility into import progress for large batches.",
        highlights: [
            "HOG + MiniCPM content understanding",
            "Vector-DB semantic search",
            "Live import progress tracking",
            "Dockerized, GCP-backed backend",
        ],
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
        order: 8,

        slug: "yolo-realtime-vision",
        title: "Machinery Detection for Industrial Assistance",
        tagline: "Edge AI | Custom YOLO | Real-time vision & voice chatbot",
        description:
            "An edge-AI system for industrial machinery assistance — a Gemini Live-style real-time vision and voice chatbot paired with a custom YOLO model trained on industrial components. A rule-based monitoring framework tracks user actions in real time to ensure correct handling of machinery, while the model is optimized for edge deployment to deliver low-latency, high-efficiency live processing.",
        problem:
            "Industrial training and maintenance require verifying that operators handle the right components in the right order — in real time. Cloud-only vision is too slow for live guidance. This system runs a custom-trained YOLO model on-device for component detection, couples it with a WebRTC voice loop, and enforces step correctness through a rule-based action monitor backed by MongoDB task state.",
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
        order: 7,

        slug: "scout-ai",
        title: "ScoutAI — Real-Time Voice Companion",
        tagline: "OpenAI Realtime API | Function-calling modes | Firestore",
        description:
            'A real-time voice companion for children — "Scout" — built on the OpenAI Realtime API with a React frontend and a Python Socket.IO backend. Users speak naturally and Scout responds with streamed audio, switching between casual chat, interactive storytelling, character role-play, and homework help via tool/function calling, with full session history and persona persistence in Firestore.',
        problem:
            "Child-facing voice AI needs to feel natural, safe, and adaptive — not a single static chatbot. Scout routes live speech through OpenAI Realtime with server-side VAD, dynamically swaps system prompts and tools per mode (story, role-play, homework), and remembers characters, personas, and past conversations across sessions.",
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
        order: 10,
        title: "Context Manager Agent",
        tagline: "Token-aware context orchestration for long-running agents",
        description:
            "An agent that manages LLM context intelligently — query analysis, planning and decomposition, an execution loop, and result aggregation — with smart summarization, token budgeting, relevance filtering, and hierarchical compression so long-running agents stay focused and within budget.",
        problem:
            "Long agent sessions blow past context limits, and naive truncation silently drops the information the agent actually needs. This system compresses and budgets context intelligently so agents stay focused, relevant, and within token budgets across extended runs.",
        highlights: [
            "Token-aware budgeting",
            "Hierarchical compression",
            "Relevance filtering",
            "LangGraph subgraph orchestration",
        ],
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
                    "Building retrieval-augmented and graph-augmented generation (RAG / GraphRAG) pipelines for production use",
                    "Designing long-context reasoning (RLM) engines to work around prompt-length limits",
                    "Orchestrating multi-agent workflows with LangGraph — routing, tool use via MCP, and checkpointing",
                    "Shipping FastAPI services with async I/O, JWT auth, and encrypted secrets",
                ],
            },
            {
                title: "Engineer Trainee",
                period: "Jul 2024 – Jul 2025",
                points: [
                    "Trained across AI, deep learning, and core software engineering fundamentals",
                    "Built foundational experience across ML pipelines, model training, and deployment",
                ],
            },
        ],
    },
];

// ---------------------------------------------------------------------------
//  Stats — derived from the actual project set (no invented metrics)
// ---------------------------------------------------------------------------
export const stats = [
    { value: "10", label: "AI/ML projects built" },
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
        level: "Foundational",
        credential: "AWS-AIF",
        skills: ["GenAI", "Bedrock", "ML Foundations", "Prompting"],
    },
    {
        title: "AWS Certified Developer – Associate",
        issuer: "Amazon Web Services",
        icon: "cloud",
        date: "2024",
        level: "Associate",
        credential: "DVA-C02",
        skills: ["AWS", "Serverless", "Lambda", "CI/CD"],
    },
    {
        title: "Google Cloud Certified – Generative AI Leader",
        issuer: "Google Cloud",
        icon: "brain",
        date: "2026",
        level: "Professional",
        skills: ["Vertex AI", "AI Agents", "Gemini", "RAG", "MLOps"],
    },
    {
        title: "Red Hat Certified System Administrator",
        issuer: "Red Hat",
        icon: "server",
        date: "2024",
        level: "Associate",
        credential: "RHCSA · EX280",
        skills: ["Linux", "RHEL", "System Administration", "Shell"],
    },
];
