export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  longDescription: string;
  coverImage: string;
  technologies: string[];
  keyFeatures: string[];
  diplomaModule: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  githubUrl?: string;
  demoUrl?: string;
}

export type ProjectCategory = 
  | 'Procesamiento de Lenguaje (NLP)'
  | 'Generación Multimodal (Difusión)'
  | 'Agentes & Razonamiento'
  | 'Productividad & Web';

export interface Tool {
  name: string;
  category: 'Frameworks' | 'Modelos' | 'Despliegues' | 'Prompting';
  iconName: string; // Used to resolve to Lucide icons dynamically
  description: string;
  percentageLearned: number; // For clean visual meters
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  category: string;
  completed: boolean;
  dateCompleted: string;
}
