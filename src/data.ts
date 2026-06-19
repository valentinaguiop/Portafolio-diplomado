import { Project, Tool, Goal } from './types';

export const PERSONAL_INFO = {
  name: 'Valentina Guio Plazas',
  title: 'Estudiante del Diplomado en Inteligencia Artificial Generativa',
  avatarUrl: '/src/assets/images/valentina_portrait_exact_1781830541989.jpg',
  email: 'valentina.guio_pl@estudiantes.uamerica.edu.co',
  bio: 'Apasionada por la confluencia entre la computación avanzada y la creatividad humana. Actualmente me encuentro cursando el Diplomado de Inteligencia Artificial Generativa, donde diseño y entreno sistemas interactivos mediante modelos masivos de lenguaje (LLM), flujos de búsqueda enriquecida (RAG) y orquestación de agentes ágiles para solucionar retos complejos del desarrollo moderno.',
  expectative: 'Aprender a integrar las herramientas más potentes del ecosistema de Inteligencia Artificial Generativa en el desarrollo web moderno, optimizando la experiencia de usuario, automatizando flujos creativos y construyendo una base técnica robusta para orquestar agentes e interfaces inteligentes.',
  socialLinks: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'LegalAI: Analizador Semántico de Contratos',
    category: 'Procesamiento de Lenguaje (NLP)',
    shortDescription: 'Plataforma inteligente de lectura contractual que detecta cláusulas de riesgo, obligaciones financieras y resúmenes estructurados usando RAG.',
    longDescription: 'LegalAI es un sistema completo diseñado para agilizar el análisis jurídico contractual. Utiliza el modelo Gemini 2.5 Flash para realizar un análisis sintáctico-semántico profundo sobre documentos PDF complejos. El sistema automatiza la extracción de términos críticos de confidencialidad, penalidades económicas, renovaciones automáticas e inconsistencias legales, mapeando en segundos lo que a un abogado le tomaría horas. Emplea Embeddings para indexar la información y permitir realizar preguntas contextuales en lenguaje natural directamente sobre el contrato.',
    coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800&h=450',
    technologies: ['Gemini 2.5 Flash', 'LangChain', 'Embeddings', 'React', 'Tailwind CSS'],
    keyFeatures: [
      'Subida de documentos PDF interactiva con drag-and-drop',
      'Extracción automática de cláusulas redactadas de forma ambigua o riesgosa',
      'Chat interactivo para interrogar al contrato con referencias exactas',
      'Generación instantánea de resúmenes estructurados listos para ser exportados'
    ],
    diplomaModule: 'Módulo 2: Modelos de Lenguaje Avanzados y Fundamentos RAG',
    difficulty: 'Intermedio',
    githubUrl: 'https://github.com',
    demoUrl: '#'
  },
  {
    id: '2',
    title: 'PromoGen: Suite Multimodal Publicitaria',
    category: 'Generación Multimodal (Difusión)',
    shortDescription: 'Generador de campañas digitales que crea copys persuasivos optimizados para SEO y banners visuales fotorrealistas de alta gama.',
    longDescription: 'PromoGen optimiza y automatiza la línea de producción publicitaria digital. Se encarga de conceptualizar y renderizar las variaciones visuales y de texto basadas en los atributos esenciales e identidad sonora de una marca. Por un lado, utiliza modelos de difusión avanzada para fabricar composiciones visuales hiper-segmentadas y realistas, y por el otro, se apoya en modelos autorregresivos para generar textos persuasivos dirigidos a diferentes nichos, reduciendo exponencialmente los tiempos de iteración gráfica y planificación de pauta en redes.',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=450',
    technologies: ['Stable Diffusion XL', 'Gemini Pro Vision', 'DALL-E 3', 'Vite', 'CSS Grid'],
    keyFeatures: [
      'Generador interactivo de imágenes publicitarias con control de luz, estilo y encuadre',
      'Asistente de Copywriting con de tono personalizable (Directo, Divertido, Sofisticado o Institucional)',
      'Optimización inteligente de prompts visuales mediante sugerencias automáticas de IA',
      'Área de previsualización adaptada para formatos de Instagram, TikTok y LinkedIn'
    ],
    diplomaModule: 'Módulo 3: Creación de Contenido Multimodal y Modelos de Difusión',
    difficulty: 'Intermedio',
    githubUrl: 'https://github.com',
    demoUrl: '#'
  },
  {
    id: '3',
    title: 'AgentDesk: Orquestador Autónomo de Compras',
    category: 'Agentes & Razonamiento',
    shortDescription: 'Red de agentes cooperativos que simulan la búsqueda, comparación de especificaciones técnicas y redacción de propuestas de compra.',
    longDescription: 'AgentDesk es un sistema robusto de automatización empresarial basado en arquitecturas multi-agente donde cada agente desempeña un rol único. El "Investigador" busca y recopila precios de productos en catálogos simulados; el "Analista" organiza las especificaciones de rendimiento y costos en una matriz comparativa profunda; y el "Redactor" compila un informe final justificado. Los agentes conversan entre sí y autoevalúan su progreso antes de entregar el diagnóstico de adquisición sugerido al usuario.',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=450',
    technologies: ['LangGraph', 'CrewAI', 'Gemini Structured JSON', 'Python Async', 'Express'],
    keyFeatures: [
      'Visualizador dinámico basado en grafos interactivos que muestra la línea de pensamiento de los agentes',
      'Bucle de retroalimentación donde el usuario puede aprobar o redirigir las decisiones intermedias del flujo',
      'Comparador inteligente capaz de ponderar precio vs. calidad garantizada',
      'Consolidación automática y descarga del informe final enriquecido en Markdown'
    ],
    diplomaModule: 'Módulo 4: Agentes Cognitivos, Herramientas y Razonamiento Avanzado',
    difficulty: 'Avanzado',
    githubUrl: 'https://github.com',
    demoUrl: '#'
  },
  {
    id: '4',
    title: 'SocratesCode: Tutor Interactivo de Código',
    category: 'Productividad & Web',
    shortDescription: 'Asistente de programación adaptativo que emplea diálogo socrático para guiar a los estudiantes hacia la resolución de errores.',
    longDescription: 'En lugar de simplemente proveer soluciones rápidas de copiar y pegar, SocratesCode es un asistente educativo diseñado con técnicas específicas de prompting para promover el autoaprendizaje. Cuando el estudiante comparte un fragmento de código defectuoso, la IA analiza la sintaxis, identifica las debilidades metodológicas y ofrece pistas secuenciales guiadas. Esto fomenta el razonamiento lógico, ayuda a consolidar las mejores prácticas de codificación limpia y evalúa de forma dinámica el estilo del programador.',
    coverImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800&h=450',
    technologies: ['Gemini 2.5 Flash', 'System Instructions', 'Few-Shot Learning', 'Monaco Editor'],
    keyFeatures: [
      'Editor de código integrado con resaltado de sintaxis sintáctica',
      'Retroalimentación interactiva basada en el método socrático (preguntas y pistas dirigidas)',
      'Identificación automática de vulnerabilidades y problemas de rendimiento en el código escrito',
      'Generación dinámica de retos de programación adaptados al nivel del usuario'
    ],
    diplomaModule: 'Módulo 1: Fundamentos de IA Generativa y Técnicas de Prompting',
    difficulty: 'Principiante',
    githubUrl: 'https://github.com',
    demoUrl: '#'
  },
  {
    id: '5',
    title: 'VoiceSense: Analizador Emocional de Voz del Cliente',
    category: 'Procesamiento de Lenguaje (NLP)',
    shortDescription: 'Software analítico multicanal que procesa audio de soporte técnico, evalúa el estado de ánimo e identifica intenciones latentes de abandono.',
    longDescription: 'VoiceSense actúa como el oído estratégico para los equipos de éxito de cliente. Mediante la API Whisper procesa notas de voz y grabaciones de llamadas de soporte para transcribir el discurso verbal. Prontamente, Gemini analiza el contexto interpretando expresiones sutiles y entonación latente sugerida en la transcripción, catalogando el sentimiento general en tiempo real (Satisfecho, Frustrado, Molesto o Neutro). Al finalizar, genera estrategias de contención accionables para los agentes de atención para los casos en los que se prevea abandono inminente.',
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=450',
    technologies: ['Whisper API', 'Gemini Structured Parsing', 'Recharts', 'React Custom Charts', 'Node.js'],
    keyFeatures: [
      'Carga instantánea de notas de voz de soporte y transcripción automática en múltiples idiomas',
      'Dashboard estadístico interactivo con gráficos comparativos sobre la urgencia y enojo del usuario',
      'Generación automatizada de plantillas de correo electrónico y de chat para mitigar fricciones',
      'Predicción paramétrica sobre posibles motivos latentes de no renovación del servicio'
    ],
    diplomaModule: 'Módulo 5: Integración Empresarial, APIs y Despliegue de Productos de IA',
    difficulty: 'Avanzado',
    githubUrl: 'https://github.com',
    demoUrl: '#'
  }
];

export const TOOLS_DATA: Tool[] = [
  {
    name: 'Gemini 2.5 API',
    category: 'Modelos',
    iconName: 'Sparkles',
    description: 'Uso avanzado de la API para modelado multimodal, llamadas de funciones y ventana de contexto de 2 millones de tokens.',
    percentageLearned: 95
  },
  {
    name: 'Prompt Engineering',
    category: 'Prompting',
    iconName: 'MessageSquareText',
    description: 'Técnicas avanzadas: Chain of Thought, Socratic, Few-Shot, ReAct, System Instructions y validación de salidas estructuradas.',
    percentageLearned: 100
  },
  {
    name: 'LangChain & LangGraph',
    category: 'Frameworks',
    iconName: 'Network',
    description: 'Orquestación de pipelines RAG avanzados de recuperación y flujos complejos de agentes cíclicos autónomos.',
    percentageLearned: 85
  },
  {
    name: 'Bases de Datos Vectoriales',
    category: 'Frameworks',
    iconName: 'Database',
    description: 'Generación de vectores de embeddings, almacenamiento semántico e indexación inteligente (ChromaDB, Pinecone).',
    percentageLearned: 90
  },
  {
    name: 'Modelos de Difusión',
    category: 'Modelos',
    iconName: 'Image',
    description: 'Prompting visual de alta fidelidad, inpainting, outpainting y consistencia estilística (Stable Diffusion XL, DALL-E 3).',
    percentageLearned: 80
  },
  {
    name: 'Despliegue & API Router',
    category: 'Despliegues',
    iconName: 'Globe',
    description: 'Puenteo de llaves API en servidores seguros Node/Express, flujos CORS controlados y estructuración React SPA.',
    percentageLearned: 88
  }
];

export const GOALS_DATA: Goal[] = [
  {
    id: 'G1',
    title: 'Dominio Arquitectura LLM',
    description: 'Comprender la base del mecanismo de autointención (Attention mechanism), embeddings, codificadores y decodificadores.',
    category: 'Fundamentos',
    completed: true,
    dateCompleted: 'Marzo 2026'
  },
  {
    id: 'G2',
    title: 'Modelado RAG Escalable',
    description: 'Construir un flujo robusto de QA sobre carpetas complejas de documentos utilizando embeddings locales, división inteligente de texto chunking, y re-rankers.',
    category: 'Implementación',
    completed: true,
    dateCompleted: 'Abril 2026'
  },
  {
    id: 'G3',
    title: 'Orquestación Multi-Agente',
    description: 'Modularizar comportamientos autónomos mediante grafos dirigidos con división de tareas específicas e intervención para aprobación humana.',
    category: 'Inteligencia Artificial Avanzada',
    completed: true,
    dateCompleted: 'Mayo 2026'
  },
  {
    id: 'G4',
    title: 'Despliegue de Producto Web de IA',
    description: 'Traducir mockups en frontend a React con Tailwind, protegiendo llaves estratégicas en variables de entorno del servidor.',
    category: 'Despliegues',
    completed: true,
    dateCompleted: 'Junio 2026'
  },
  {
    id: 'G5',
    title: 'Diseño Ético & Control de Alucinaciones',
    description: 'Implementar guardrails de contenido, esquemas predictivos JSON estrictos y temperature controls para mitigar alucinaciones de IA.',
    category: 'Calidad & Ética',
    completed: false,
    dateCompleted: 'En curso'
  }
];
