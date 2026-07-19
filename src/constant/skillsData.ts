export type Skill = {
  category: string;
  summary: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    category: 'Languages',
    summary:
      'TypeScript-first for type-safe backends; Python for AI, automation, and FastAPI services.',
    items: ['TypeScript', 'JavaScript (ES6+)', 'Python'],
  },
  {
    category: 'Backend',
    summary:
      'Node.js/NestJS for real-time and modular services; FastAPI for ML and async workloads.',
    items: ['Node.js', 'NestJS', 'FastAPI', 'Express.js'],
  },
  {
    category: 'Databases',
    summary:
      'Polyglot persistence — relational, document, and in-memory stores chosen per workload.',
    items: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'ORM / ODM',
    summary:
      'Typed data layers with Prisma and Drizzle; Mongoose for document models.',
    items: ['Prisma', 'Mongoose', 'Drizzle'],
  },
  {
    category: 'Cloud & DevOps',
    summary:
      'Containerized deployments on AWS, automated through CI/CD and reverse-proxied on Linux.',
    items: ['Docker', 'AWS (EC2, S3)', 'Nginx', 'Caddy', 'GitHub Actions'],
  },
  {
    category: 'Messaging & Real-time',
    summary:
      'Live updates, signaling, and queue-driven background processing for product-scale features.',
    items: ['Socket.IO', 'WebRTC', 'BullMQ'],
  },
  {
    category: 'AI & LLM',
    summary:
      'Production AI features — RAG pipelines, tool calling, and vector search over self-hosted or OpenAI models.',
    items: ['OpenAI API', 'Ollama', 'RAG', 'Vector Search'],
  },
];
