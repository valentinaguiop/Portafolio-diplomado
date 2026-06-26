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
  | 'Módulo 1'
  | 'Módulo 2'
  | 'Módulo 3'
  | 'Módulo 4'
  | 'Módulo 5'
  | 'Módulo 6';

export interface Tool {
  name: string;
  category: string;
  iconName: string; // Used to resolve to Lucide icons dynamically
  description: string;
  percentageLearned: number; // For clean visual meters
  url?: string; // Redirect link to official site
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  category: string;
  completed: boolean;
  dateCompleted: string;
}
