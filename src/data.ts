import { Project, Tool, Goal } from './types';
// @ts-ignore
import avatarImg from './assets/images/valentina_portrait_exact_1781830541989.jpg';

export const PERSONAL_INFO = {
  name: 'Valentina Guio Plazas',
  title: 'Estudiante del Diplomado en Inteligencia Artificial Generativa',
  avatarUrl: avatarImg,
  email: 'valentina.guio_pl@estudiantes.uamerica.edu.co',
  bio: 'Actualmente me encuentro cursando el diplomado de IA generativa. Me apasiona el diseño de interfaces hermosas, la creatividad digital y explorar nuevas tecnologías.',
  expectative: 'Aprender a integrar las herramientas más potentes de Inteligencia Artificial Generativa en el desarrollo web, optimizando la experiencia de usuario, automatizando flujos creativos y construyendo interfaces interactivas e inteligentes.',
  socialLinks: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'Proyecto de Módulo 1',
    category: 'Módulo 1',
    shortDescription: 'Espacio reservado para el entregable del Módulo 1. Aquí se presentará el proyecto correspondiente a los temas abordados.',
    longDescription: 'Este es el espacio asignado para documentar y presentar el proyecto final del Módulo 1. En esta sección se detallarán los objetivos del proyecto, la metodología implementada, los resultados obtenidos y la demostración práctica interactiva.',
    coverImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800&h=450',
    technologies: ['IA Generativa', 'Prompting', 'Herramientas de IA'],
    keyFeatures: [
      'Visualización interactiva y dinámica del proyecto',
      'Estructura adaptativa de la solución implementada',
      'Interfaz de usuario intuitiva y de alta fidelidad',
      'Integración con componentes reactivos en tiempo real'
    ],
    diplomaModule: 'Módulo 1: Introducción a las herramientas de IA generativa',
    difficulty: 'Principiante',
    githubUrl: 'https://github.com',
    demoUrl: '#'
  },
  {
    id: '2',
    title: 'Proyecto de Módulo 2',
    category: 'Módulo 2',
    shortDescription: 'Espacio reservado para el entregable del Módulo 2. Aquí se presentará el proyecto correspondiente a los temas abordados.',
    longDescription: 'Este es el espacio asignado para documentar y presentar el proyecto final del Módulo 2. En esta sección se detallarán los objetivos del proyecto, la metodología implementada, los resultados obtenidos y la demostración práctica interactiva.',
    coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800&h=450',
    technologies: ['Diseño de Producto', 'Interfaces de IA', 'Figma', 'UX/UI'],
    keyFeatures: [
      'Visualización interactiva y dinámica del proyecto',
      'Estructura adaptativa de la solución implementada',
      'Interfaz de usuario intuitiva y de alta fidelidad',
      'Integración con componentes reactivos en tiempo real'
    ],
    diplomaModule: 'Módulo 2: Diseño de productos digitales con IA',
    difficulty: 'Intermedio',
    githubUrl: 'https://github.com',
    demoUrl: '#'
  },
  {
    id: '3',
    title: 'Proyecto de Módulo 3',
    category: 'Módulo 3',
    shortDescription: 'Espacio reservado para el entregable del Módulo 3. Aquí se presentará el proyecto correspondiente a los temas abordados.',
    longDescription: 'Este es el espacio asignado para documentar y presentar el proyecto final del Módulo 3. En esta sección se detallarán los objetivos del proyecto, la metodología implementada, los resultados obtenidos y la demostración práctica interactiva.',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=450',
    technologies: ['Desarrollo Asistido', 'Vite', 'React', 'Tailwind CSS'],
    keyFeatures: [
      'Visualización interactiva y dinámica del proyecto',
      'Estructura adaptativa de la solución implementada',
      'Interfaz de usuario intuitiva y de alta fidelidad',
      'Integración con componentes reactivos en tiempo real'
    ],
    diplomaModule: 'Módulo 3: Construye aplicaciones con desarrollo asistido por IA',
    difficulty: 'Intermedio',
    githubUrl: 'https://github.com',
    demoUrl: '#'
  },
  {
    id: '4',
    title: 'Proyecto de Módulo 4',
    category: 'Módulo 4',
    shortDescription: 'Espacio reservado para el entregable del Módulo 4. Aquí se presentará el proyecto correspondiente a los temas abordados.',
    longDescription: 'Este es el espacio asignado para documentar y presentar el proyecto final del Módulo 4. En esta sección se detallarán los objetivos del proyecto, la metodología implementada, los resultados obtenidos y la demostración práctica interactiva.',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=450',
    technologies: ['Control de Versiones', 'Despliegues', 'Servidores API', 'Cloud'],
    keyFeatures: [
      'Visualización interactiva y dinámica del proyecto',
      'Estructura adaptativa de la solución implementada',
      'Interfaz de usuario intuitiva y de alta fidelidad',
      'Integración con componentes reactivos en tiempo real'
    ],
    diplomaModule: 'Módulo 4: Versiona, despliega y conecta tu aplicación',
    difficulty: 'Avanzado',
    githubUrl: 'https://github.com',
    demoUrl: '#'
  },
  {
    id: '5',
    title: 'Proyecto de Módulo 5',
    category: 'Módulo 5',
    shortDescription: 'Espacio reservado para el entregable del Módulo 5. Aquí se presentará el proyecto correspondiente a los temas abordados.',
    longDescription: 'Este es el espacio asignado para documentar y presentar el proyecto final del Módulo 5. En esta sección se detallarán los objetivos del proyecto, la metodología implementada, los resultados obtenidos y la demostración práctica interactiva.',
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=450',
    technologies: ['Análisis de Datos', 'Machine Learning', 'Visualización', 'IA'],
    keyFeatures: [
      'Visualización interactiva y dinámica del proyecto',
      'Estructura adaptativa de la solución implementada',
      'Interfaz de usuario intuitiva y de alta fidelidad',
      'Integración con componentes reactivos en tiempo real'
    ],
    diplomaModule: 'Módulo 5: Análisis de datos y ML con IA generativa',
    difficulty: 'Avanzado',
    githubUrl: 'https://github.com',
    demoUrl: '#'
  },
  {
    id: '6',
    title: 'Proyecto de Módulo 6',
    category: 'Módulo 6',
    shortDescription: 'Espacio reservado para el entregable del Módulo 6. Aquí se presentará el proyecto correspondiente a los temas abordados.',
    longDescription: 'Este es el espacio asignado para documentar y presentar el proyecto final del Módulo 6. En esta sección se detallarán los objetivos del proyecto, la metodología implementada, los resultados obtenidos y la demostración práctica interactiva.',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=450',
    technologies: ['Automatización', 'Agentes Autónomos', 'MCP', 'Orquestación'],
    keyFeatures: [
      'Visualización interactiva y dinámica del proyecto',
      'Estructura adaptativa de la solución implementada',
      'Interfaz de usuario intuitiva y de alta fidelidad',
      'Integración con componentes reactivos en tiempo real'
    ],
    diplomaModule: 'Módulo 6: Automatización nativa con IA, agentes y MCP',
    difficulty: 'Avanzado',
    githubUrl: 'https://github.com',
    demoUrl: '#'
  }
];

export const TOOLS_DATA: Tool[] = [
  {
    name: 'Make',
    category: 'Automatización',
    iconName: 'make',
    description: 'Creación y orquestación de flujos de trabajo automatizados para conectar aplicaciones y servicios sin necesidad de programar.',
    percentageLearned: 90,
    url: 'https://www.make.com'
  },
  {
    name: 'Tally',
    category: 'Formularios',
    iconName: 'tally',
    description: 'Diseño de formularios elegantes y dinámicos para recopilar datos, integrados perfectamente con flujos de trabajo automatizados.',
    percentageLearned: 95,
    url: 'https://tally.so'
  },
  {
    name: 'Gemini',
    category: 'Modelos de IA',
    iconName: 'gemini',
    description: 'Aprovechamiento de los modelos de Google para generación de contenido multimodal, análisis conversacional y prompts avanzados.',
    percentageLearned: 95,
    url: 'https://gemini.google.com'
  },
  {
    name: 'Opal',
    category: 'Documentación',
    iconName: 'opal',
    description: 'Grabación y estructuración de demostraciones interactivas para ilustrar el funcionamiento de herramientas y proyectos digitales.',
    percentageLearned: 85,
    url: 'https://www.opal.so'
  },
  {
    name: 'Google AI',
    category: 'Plataforma de IA',
    iconName: 'google-ai',
    description: 'Exploración de la plataforma de Google para prototipado rápido, experimentación con LLMs y desarrollo de soluciones de IA.',
    percentageLearned: 92,
    url: 'https://ai.google'
  },
  {
    name: 'Netlify',
    category: 'Despliegues',
    iconName: 'netlify',
    description: 'Despliegue continuo y hosting ágil de aplicaciones web modernas, conectando directamente con repositorios de código.',
    percentageLearned: 90,
    url: 'https://www.netlify.com'
  },
  {
    name: 'ChatGPT',
    category: 'Modelos de IA',
    iconName: 'chatgpt',
    description: 'Interacción y optimización de prompts sobre modelos avanzados de OpenAI para ideación, asistencia de código y redacción creativa.',
    percentageLearned: 95,
    url: 'https://chatgpt.com'
  },
  {
    name: 'Claude',
    category: 'Modelos de IA',
    iconName: 'claude',
    description: 'Asistencia avanzada en tareas de razonamiento profundo, programación compleja y redacción utilizando la familia de modelos Claude de Anthropic.',
    percentageLearned: 90,
    url: 'https://claude.ai'
  },
  {
    name: 'Tokenizer',
    category: 'Procesamiento NLP',
    iconName: 'tokenizer',
    description: 'Comprensión y análisis de cómo los modelos de lenguaje dividen y procesan el texto en unidades de tokens para optimizar costos y eficiencia.',
    percentageLearned: 88,
    url: 'https://platform.openai.com/tokenizer'
  },
  {
    name: 'Google Colab',
    category: 'Entornos de Código',
    iconName: 'colab',
    description: 'Ejecución y documentación interactiva de libretas de Python en la nube para análisis de datos, Machine Learning y prototipado rápido.',
    percentageLearned: 85,
    url: 'https://colab.research.google.com'
  },
  {
    name: 'VS Code',
    category: 'Entornos de Código',
    iconName: 'vscode',
    description: 'Entorno de desarrollo integrado altamente personalizado para programar, depurar y estructurar aplicaciones web con soporte nativo de IA.',
    percentageLearned: 95,
    url: 'https://code.visualstudio.com'
  },
  {
    name: 'Open Code',
    category: 'Código Abierto',
    iconName: 'opencode',
    description: 'Adopción de estándares de código abierto y plataformas colaborativas para potenciar el desarrollo transparente y de alta seguridad.',
    percentageLearned: 90,
    url: 'https://github.com'
  },
  {
    name: 'Node.js',
    category: 'Entornos de Runtime',
    iconName: 'nodejs',
    description: 'Entorno de ejecución de JavaScript del lado del servidor que sustenta el desarrollo de APIs robustas y tooling moderno de frontend.',
    percentageLearned: 85,
    url: 'https://nodejs.org'
  },
  {
    name: 'NPM',
    category: 'Gestión de Paquetes',
    iconName: 'npm',
    description: 'Gestión, instalación y distribución de dependencias de software fundamentales para orquestar y desplegar soluciones web completas.',
    percentageLearned: 90,
    url: 'https://www.npmjs.com'
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
