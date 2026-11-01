// ✏️ EDIT THIS FILE ONLY — all site content lives here. Items marked TODO need your real details.
export const me = {
  name: 'Zayd Ansari', role: 'Software Engineer · Data Science',
  typed: ['Generative AI & MCP agents', 'LLM fine-tuning (LoRA/QLoRA)', 'Fabric data pipelines', 'FastAPI & Azure SQL'],
  tagline: 'Software Engineer Trainee at iLink Digital, building LLM-powered applications, MCP-based tool-calling agents and Azure data infrastructure.',
  about: [
    'Software Engineer Trainee at iLink Digital, building LLM-powered applications, MCP-based agents and Azure data infrastructure. Previously delivered Microsoft Fabric pipelines and Power BI dashboards as a Consultant Intern.',
    'B.Tech in Electronics & Telecommunications from VIT Pune (CGPA 8.86). Patent holder, three-time co-author and Smart India Hackathon 2023 finalist.'],
  org: 'iLink Digital', school: 'VIT Pune',
  location: 'Pune, Maharashtra, India', email: 'ahmedansarizayd@gmail.com', resume: './resume.pdf',
  links: { GitHub: 'https://github.com/AnsariZayd', LinkedIn: 'https://www.linkedin.com/in/ansari-zayd-ahmed-a39a59230', LeetCode: 'https://leetcode.com/u/Ansari_Zayd/', HackerRank: 'https://www.hackerrank.com/profile/ahmedansarizayd', Kaggle: 'https://kaggle.com/ansarizaydahmed' },
}
export const stats = [{n:1,suf:'M+',l:'Records processed in Microsoft Fabric',i:'🗄️'},{n:15,suf:'+',l:'Power BI dashboards powered',i:'📊'},{n:11,suf:'',l:'Certifications',i:'🎓'},{n:3,suf:' + 1',l:'Publications & Patent',i:'📄'}]
export const experience = [
  { role: 'Software Engineer Trainee, Data Science', org: 'iLink Digital', when: 'Oct 2025 — Present', pts: [
    'Built an LLM-powered Power BI assistant: a domain-fine-tuned open-source model plus Model Context Protocol (MCP) that turns natural-language requests into structured tool calls for semantic-model operations.',
    'Fine-tuned and evaluated 3B–4B open-source LLMs with LoRA/QLoRA; created instruction datasets for table/column discovery, DAX generation, measure creation, relationships and tool execution.',
    'Developed a private local inference stack (Hugging Face, Ollama, GGUF, 4-bit quantization) optimized for low-latency execution under constrained compute.',
    'Designed MCP tool-calling flows with schema-aware prompts, context injection, validation, retry logic and structured responses.',
    'Designed FastAPI backend services for an enterprise chat application, with Azure SQL schemas, metadata stores, embedding and indexing pipelines for retrieval.'] },
  { role: 'Consultant Intern, Data Science', org: 'iLink Digital', when: 'Feb 2025 — Aug 2025', pts: [
    'Built and tested configuration-driven Microsoft Fabric pipelines ingesting and transforming 1M+ records across multiple sources.',
    'Architected a Bronze–Silver–Gold medallion architecture with SCD Type 2; end-to-end validation and traceability checks ensured 100% historical accuracy across layers.',
    'Translated stakeholder requirements into dimensional models powering 15+ Power BI dashboards.'] },
  { role: 'Smart India Hackathon 2023 — Finalist', org: 'Ministry of Power problem statement', when: 'Oct 2023 — Dec 2023', pts: ['Ranked in the top 2% of 51,000 ideas at the Grand Finale with a cybersecurity solution for Hardware Trojan detection and supply-chain integrity.'] },
]
export const education = [
  { t: 'B.Tech, Electronics & Telecommunications Engineering', o: 'Vishwakarma Institute of Technology (VIT), Pune', w: 'Jul 2021 — May 2025', x: 'CGPA 8.86' },
  { t: 'HSC', o: 'The Malegaon High School & Jr. College', w: 'Apr 2021', x: '90.33%' },
]
export const projects = [
  { t: 'iLink Tab-PBI — Fine-Tuned LLM + MCP Power BI Assistant', y: '2026', c: 'AI & Data', d: 'Domain-specific 3B–4B LLM fine-tuned (LoRA/QLoRA) for Power BI semantic-model tool calling, connected to the Power BI Modeling MCP server for stateful, multi-turn orchestration over tables, columns, measures and relationships. Evaluation and trust-scoring datasets cover success, failure and retry states to catch hallucinated tool calls.', s: ['LoRA/QLoRA', 'MCP', 'Ollama', 'GGUF', 'Hugging Face', 'Power BI'], star: true },
  { t: 'AI Software Architect', y: 'Apr 2026', c: 'AI & Data', d: '5-agent AutoGen + Groq system (planner, specialist, critic) with a self-correction loop that turns plain-text requirements into software specs, schemas, REST APIs and risk analysis. Includes rate limiting, multi-model fallback, JSON repair, and a React dashboard with Mermaid diagrams, refinement diffs and SQL DDL export.', s: ['AutoGen', 'Groq', 'FastAPI', 'React', 'Mermaid.js', 'Docker'], gh: 'https://github.com/AnsariZayd/AI-Architect', live: 'https://ai-architect-gamma.vercel.app', star: true },
  { t: 'Copilot Studio Enterprise AI Agent — RAG Knowledge Retrieval', y: '2026', c: 'AI & Data', d: 'RAG conversational agent orchestrating GPT-4.1 mini and Claude Sonnet across query extraction, semantic retrieval, context injection and response generation. Power Automate routes queries to an Azure VM-hosted semantic search API with structured JSON parsing and source-referenced answers.', s: ['Copilot Studio', 'Power Automate', 'GPT-4.1 mini', 'Claude Sonnet', 'Azure', 'RAG'], star: true },
  { t: 'MediBook — WhatsApp Appointment Platform', y: 'Mar 2026', c: 'Full-Stack', d: 'Transaction-safe slot locking to prevent double bookings, Google Calendar integration, scheduled reminders and waiting-list notifications, plus a JWT-secured React portal with calendar view and bulk slot management.', s: ['React', 'JWT', 'Google Calendar API', 'APScheduler', 'Async'], live: 'https://doctor-appointment-automation.vercel.app/doctor/login', star: true },
  { t: 'Fabric Data Factory Pipeline', y: '', c: 'AI & Data', d: 'Practice pipeline built with Microsoft Fabric and Data Factory for dataset ingestion.', s: ['Microsoft Fabric', 'Data Factory'], gh: 'https://github.com/AnsariZayd/Fabric_Practice_dataset-pipeline-Data_Factory-' },
  { t: 'Synthetic Chest X-Ray Generation', y: 'Jul 2024', c: 'ML & Vision', d: 'GPU-accelerated distributed PyTorch training pipeline for synthetic medical image generation using a diffusion model; led a team of 3, with a Streamlit front end and Flask backend.', s: ['PyTorch', 'Diffusion', 'Streamlit', 'Flask'], gh: 'https://github.com/AnsariZayd/Synthetic-Data-Generation-Chest-X-Ray-Images' },
  { t: 'Publisher–Subscriber Notification System', y: '', c: 'Full-Stack', d: 'Backend notification system built on the publisher–subscriber pattern using Flask.', s: ['Python', 'Flask', 'Pub/Sub'], gh: 'https://github.com/AnsariZayd/Publisher-Subscriber_notification_System' },
  { t: 'Renewable Energy Trading', y: '', c: 'Full-Stack', d: 'Renewable energy trading platform built on blockchain.', s: ['Blockchain', 'JavaScript'], gh: 'https://github.com/AnsariZayd/RenewableEnergyTrading' },
  { t: 'Expense Splitter', y: '', c: 'Full-Stack', d: 'Simple expense-splitting web application for personal use.', s: ['JavaScript', 'Web'], gh: 'https://github.com/AnsariZayd/Expense-Splitter' },
  { t: 'House Price Prediction', y: '', c: 'ML & Vision', d: 'ML model on the California housing dataset, with a mobile app as the front end.', s: ['Machine Learning', 'Jupyter'], gh: 'https://github.com/AnsariZayd/HousePricePrediction' },
  { t: 'Netflix Movie Recommender', y: '', c: 'ML & Vision', d: 'Movie recommendation system using cosine similarity, with a simple GUI.', s: ['Python', 'Cosine similarity'], gh: 'https://github.com/AnsariZayd/Netflix-Movie-Recommendation-Sysytem-with-simple-GUI' },
  { t: 'Fashion Image Classification', y: '', c: 'ML & Vision', d: 'Image classification on the Fashion-MNIST dataset using Keras (TensorFlow).', s: ['Keras', 'TensorFlow'], gh: 'https://github.com/AnsariZayd/ImageClassification' },
  { t: 'Microgrid Simulation', y: '', c: 'Systems & Embedded', d: 'Simulation of a microgrid system using Arduino Uno; the work behind the patent listed below.', s: ['Arduino', 'C++'], gh: 'https://github.com/AnsariZayd/SimulationOfMicroGrid' },
  { t: 'Personalized Wireshark GUI', y: '', c: 'Systems & Embedded', d: 'Simplified Wireshark-style packet analysis GUI for teaching purposes, built with Tkinter.', s: ['Python', 'Tkinter', 'Networking'], gh: 'https://github.com/AnsariZayd/Personalized_Wireshark_GUI' },
  { t: 'Heart Rate Monitoring System', y: '', c: 'Systems & Embedded', d: 'Heart rate monitoring using a pulse sensor and Arduino Uno.', s: ['Arduino', 'C++', 'Sensors'], gh: 'https://github.com/AnsariZayd/HeartRateMonitoring' },
  { t: 'Movie Ticket Management System', y: '', c: 'Systems & Embedded', d: 'Ticket booking desktop application built with Java Swing and MySQL.', s: ['Java', 'Swing', 'MySQL'], gh: 'https://github.com/AnsariZayd/MovieTicketManagementSystem' },
]
export const skills = {
  'Generative AI': ['LLMs','Claude','RAG','Embeddings','Prompt Engineering','AI Agents','Multi-Agent Systems','Tool Calling','MCP','Stateful Agent Orchestration','LLM Evaluation'],
  'ML & LLM Engineering': ['LoRA','QLoRA','PEFT','Hugging Face','GGUF','Ollama','AutoGen','4-bit Quantization','Structured Output','Model Serving','Deep Learning','Machine Learning','PyTorch','TensorFlow / Keras'],
  'Microsoft & Cloud': ['Copilot Studio','Power Automate','Power BI','Microsoft Fabric','Azure','Azure AI Services','Azure SQL','Enterprise API Integration','Docker'],
  'Data Engineering': ['PySpark','Databricks','ETL/ELT Pipelines','Medallion Architecture','SCD Type 2','Data Modeling','Dimensional Modeling','Data Validation & Traceability','Embedding Pipelines'],
  'Software Engineering': ['FastAPI','API Development','Async API Design','Debugging & Troubleshooting','Integration & Functional Testing','Modular Architecture','Software Design Principles','Technical Documentation'],
  'Languages & Tools': ['Python','SQL','Java','C++','JavaScript','React','Flask','Streamlit','MySQL','Git / GitHub'],
}
export const certs = [ // add url: '...' for a "View credential" link
  { t: 'Microsoft Certified: Fabric Data Engineer Associate', by: 'Microsoft', d: 'Aug 2026', c: 'Microsoft' },
  { t: 'Microsoft Certified: GitHub Copilot', by: 'Microsoft', d: 'May 2026', c: 'Microsoft' },
  { t: 'Generative AI with LangChain and Hugging Face', by: 'Udemy', d: 'Apr 2026', c: 'AI & ML' },
  { t: 'Microsoft Certified: Power BI Data Analyst Associate', by: 'Microsoft', d: 'Oct 2025', c: 'Microsoft' },
  { t: 'Databricks Certified Generative AI Engineer Associate', by: 'Databricks', d: 'Aug 2025', c: 'AI & ML' },
  { t: 'Microsoft Certified: Fabric Analytics Engineer Associate', by: 'Microsoft', d: 'Jun 2025', c: 'Microsoft' },
  { t: 'Deep Learning Specialization', by: 'DeepLearning.AI', d: 'Jun 2025', c: 'AI & ML' },
  { t: 'Docker for Beginners with Hands-on Labs', by: 'KodeKloud', d: 'Dec 2024', c: 'Cloud & DevOps' },
  { t: 'AWS Cloud Practitioner Essentials', by: 'AWS via Coursera', d: 'Nov 2024', c: 'Cloud & DevOps' },
  { t: 'IBM Data Science Professional Certificate', by: 'IBM', d: 'Aug 2024', c: 'AI & ML' },
  { t: 'Fundamentals of Deep Learning', by: 'NVIDIA', d: 'Oct 2023', c: 'AI & ML' },
]
export const badges = ['Software Engineer', 'SQL (Advanced)', 'REST API (Intermediate)', 'JavaScript (Intermediate)', 'Problem Solving (Intermediate)', 'React (Basic)'] // HackerRank skill certificates
export const papers = [ // TODO: add exact paper titles + DOI/links where you have them
  { t: 'Co-authored publication — AI-driven robotic control / renewable-energy & microgrid systems', v: 'Elsevier · 2024', url: '' },
  { t: 'Co-authored publication — renewable-energy / microgrid systems', v: 'IJRES · 2024', url: '' },
  { t: 'Co-authored publication — renewable-energy / microgrid systems', v: 'IJSREM · 2024', url: '' },
]
export const patent = { t: 'A Simulation of Microgrid System Using Microcontroller', n: 'Application No. 2024/09335', status: 'Issued Jun 2025' }
export const awards = ['Smart India Hackathon 2023 — Grand Finale finalist, top 2% of 51,000 ideas','GitHub achievements: Pull Shark, Pair Extraordinaire, Quickdraw']
