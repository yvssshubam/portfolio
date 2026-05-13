import React from "react";

export const meta = {
  name: "Y.V.S.S.Shubam",
  initials: "YS",
  handle: "yvssshubam",
  email: "yvssshubam@gmail.com",
  phone: "+91 6302812659",
  github: "yvssshubam",
  linkedin: "yvss-shubam",
  resumeUrl: "/resume.pdf",
  lastDeploy: new Date().toISOString().slice(0, 10),
};

/* ── Tiny inline icons so we don't ship an icon lib ──────────── */
const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d={d} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconPipeline = () => <Icon d="M3 7h6l3 5h9M3 17h6l3-5" />;
const IconAPI = () => <Icon d="M4 12h4l2-3 4 6 2-3h4" />;
const IconRAG = () => <Icon d="M4 5h11l5 5v9H4zM4 10h16M9 14h7" />;
const IconObs = () => <Icon d="M4 19l4-7 4 4 4-9 4 8" />;
const IconInfra = () => <Icon d="M4 6h16v4H4zM4 14h16v4H4zM7 8h.01M7 16h.01" />;
const IconAgent = () => <Icon d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2M9 9h6v6H9z" />;

/* ── 01. Systems / what I can build ──────────────────────────── */
export const systems = [
  {
    title: "ML pipelines, end to end",
    tag: "ml",
    Icon: IconPipeline,
    body:
      "Training to inference: PyTorch for CNNs, scikit-learn for classical models, SMOTE and 5-fold CV for class-imbalanced problems. Feature-importance plots so the model isn't a black box.",
    stack: ["PyTorch", "scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "Retrieval-augmented generation",
    tag: "applied-ml",
    Icon: IconRAG,
    body:
      "Sentence-Transformers for embeddings, FAISS for top-k retrieval, a local Ollama Mistral as the generator. The retrieval layer is the truth — the LLM is just the voice.",
    stack: ["FAISS", "Sentence-Transformers", "Ollama", "Mistral"],
  },
  {
    title: "Service-oriented backends",
    tag: "service",
    Icon: IconAPI,
    body:
      "FastAPI for ML services, Express for auth and CRUD, JWT across the seam. MongoDB or PostgreSQL depending on whether the data is document-shaped or relational.",
    stack: ["FastAPI", "Express", "JWT", "MongoDB"],
  },
  {
    title: "Computer vision pipelines",
    tag: "ml-infra",
    Icon: IconInfra,
    body:
      "Image classification and detection from dataset to deployable model. Built one for plant disease detection on PlantVillage (50,000+ images); another with YOLOv8 for medical imaging.",
    stack: ["PyTorch", "YOLOv8", "ResNet50", "OpenCV"],
  },
  {
    title: "Multi-service architectures",
    tag: "platform",
    Icon: IconObs,
    body:
      "I don't cram ML into the web backend. KrishiDost runs four cooperating services — Express auth, two FastAPI inference services, and an LLM runtime — each with one job and one port.",
    stack: ["Express", "FastAPI", "Docker", "Ollama"],
  },
  {
    title: "Frontends for ML products",
    tag: "applied",
    Icon: IconAgent,
    body:
      "Mobile-first single-page UIs that make a model usable by people who aren't engineers. Multi-language support (EN / HI / TA), accessible by default, dual experiences on shared inference.",
    stack: ["React", "Vite", "Tailwind", "i18n"],
  },
];

/* ── 02. Case studies ────────────────────────────────────────── */
export const caseStudies = [
  {
    slug: "krishidost",
    name: "KrishiDost — AI farming assistant for Indian farmers",
    tagline:
      "Three AI services behind one chat box. Photo a leaf, get a diagnosis. Type in हिंदी, get a grounded answer.",
    year: "2025",
    tech: [
      "Python", "PyTorch", "YOLOv8", "FAISS", "Ollama Mistral",
      "Sentence-Transformers", "FastAPI", "Node.js", "Express", "MongoDB", "JWT",
    ],
    problem: (
      <>
        Smallholder farmers in India hit the same three walls: they can't tell
        what disease is on their crop, they don't know what to plant in their
        soil this season, and they can't get a straight answer to a basic
        agronomy question without a textbook. I wanted one app that solved
        all three — in a language the user actually speaks.
      </>
    ),
    approach: (
      <>
        Three independent AI services behind a single SPA. A PyTorch CNN
        trained on PlantVillage (50,000+ images) handles disease detection
        from a photo. A Random Forest takes NPK soil readings and recommends
        crops. A FAISS-backed RAG chatbot, grounded on 500+ agricultural
        documents and answered by a local Ollama Mistral model, fields
        free-form questions. Auth, sessions, and the community forum sit
        behind an Express layer; the ML services run on FastAPI, with JWT
        across the seam. The whole thing speaks English, हिंदी, and தமிழ்.
      </>
    ),
    impact: [
      "50K+ images in the disease-detection training set (PlantVillage)",
      "500+ agri docs indexed for the RAG retrieval layer",
      "Four-service architecture: Express auth · FastAPI ML · FastAPI RAG · SPA",
      "Three full languages shipped end-to-end (EN / HI / TA)",
    ],
    note:
      "The hard part wasn't training the models — it was deciding what happens when retrieval comes back empty. The chatbot says so, instead of hallucinating. For a farming product, a confidently wrong answer is worse than no answer at all.",
  },
  {
    slug: "pulse",
    name: "Pulse — stroke risk platform with two faces",
    tagline:
      "A patient-facing presence and a clinician-facing dashboard, running on the same five-model pipeline.",
    year: "2025",
    tech: [
      "React", "ResNet50", "Tailwind", "FastAPI", "PostgreSQL",
      "PyTorch", "YOLOv8", "Vite", "FAISS", "Ollama Mistral",
    ],
    problem: (
      <>
        Stroke risk tools usually come in two flavors: a clinician-facing
        dashboard that's unreadable to a patient, or a wellness app that
        hides the actual model behind vague green-yellow-red dots. Neither
        is honest. I wanted one platform with two faces — a calm,
        plain-language experience for the patient, and the underlying
        numbers for the clinician — running on the same predictions.
      </>
    ),
    approach: (
      <>
        A five-model pipeline: YOLOv8 for lesion detection on brain scans,
        ResNet50 for image-level classification, a scikit-learn ensemble for
        tabular risk on patient features, FAISS for retrieval over clinical
        notes, and a local Mistral via Ollama for natural-language
        explanations. FastAPI fronts the inference services; PostgreSQL is
        the source of truth; React + Vite + Tailwind handles the
        dual-experience frontend. Mistral runs locally on purpose — patient
        data doesn't leave the box.
      </>
    ),
    impact: [
      "Five models composed into a single risk pipeline",
      "Two first-class user experiences (patient + clinician) on shared inference",
      "Local LLM inference — no patient data sent to a third-party API",
      "Accessibility targeted to WCAG AA on the patient experience",
    ],
    note:
      "The most useful thing I built into Pulse was a demo mode. When a model service is down, the UI degrades to a clearly-labeled mock instead of a spinner-of-death. Silent failures destroy trust faster than honest ones.",
  },
  {
    slug: "stroke-risk",
    name: "Stroke Risk Prediction System",
    tagline:
      "Classification pipeline on 5,000+ patient records — tuned for recall on the minority class.",
    year: "2024",
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "SMOTE"],
    problem: (
      <>
        Standard classifiers on imbalanced clinical data look great by
        accuracy and miss the patients who actually need attention. The goal
        was a model that prioritized sensitivity — catching the at-risk
        minority — over a clean overall score.
      </>
    ),
    approach: (
      <>
        Built a classification pipeline on 5,000+ patient records using
        SMOTE oversampling, one-hot encoding, and 5-fold cross-validation
        across Logistic Regression, Random Forest, and Gradient Boosting.
        Tuned the Random Forest specifically for recall on the positive
        class, then generated feature-importance and confusion-matrix
        readouts so the model's decisions were inspectable.
      </>
    ),
    impact: [
      "92% recall on the minority class (tuned Random Forest)",
      "5-fold cross-validation across three model families",
      "SMOTE-balanced training pipeline to handle class imbalance",
      "Feature-importance plots and confusion matrices for interpretability",
    ],
  },
  {
    slug: "employee-mgmt",
    name: "Employee Performance & Bonus Management System",
    tagline:
      "A modular C++ system that takes OOP seriously instead of using it as decoration.",
    year: "2024",
    tech: ["C++", "OOP", "File I/O"],
    problem: (
      <>
        A coursework-grade brief asked for a CRUD app. I treated it as a
        chance to actually exercise inheritance, abstract classes, and
        polymorphism on a problem where they pay rent.
      </>
    ),
    approach: (
      <>
        Modeled employee roles as a class hierarchy with an abstract base,
        with each role overriding a bonus-calculation method weighted by
        role-specific KPIs. Persistence is a flat-file layer, with
        CSV-exportable performance reports for downstream use.
      </>
    ),
    impact: [
      "Polymorphic bonus calculation across multiple role types",
      "File-based persistence layer; no DB dependency",
      "CSV-exportable performance reports",
    ],
  },
];

/* ── 03. Technical depth ─────────────────────────────────────── */
export const depth = {
  challenges: [
    {
      title: "Why a four-service architecture for KrishiDost",
      body:
        "I could have stuffed everything into one Flask monolith. I refused. Web auth lives behind Node, ML inference lives behind FastAPI, RAG lives behind its own FastAPI, and the SPA is just a client. Each speaks HTTP, each has one job. The result: I can retrain a model without touching auth, and I can rotate JWTs without breaking inference.",
    },
    {
      title: "Why local Mistral, not an API call",
      body:
        "For Pulse, patient data has no business leaving the machine. For KrishiDost, latency and offline-ish deployments matter more than the marginal quality bump from a frontier model. Both pointed to the same answer: run the LLM on the box.",
    },
    {
      title: "Designing RAG so the model can't freelance",
      body:
        "The chatbot retrieves with FAISS first, then asks Mistral to answer using only what was retrieved. If retrieval comes back empty, the system says so instead of hallucinating. For a farming product — or a healthcare one — a confidently wrong answer is worse than no answer.",
    },
  ],
};