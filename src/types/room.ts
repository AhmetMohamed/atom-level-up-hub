
export interface Room {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  sections: any[] | number;
  difficulty: string;
  status?: string;
  completed?: boolean;
  moduleId: string;
  order: number;
  duration: string;
  completionPercentage?: number;
  quizzes?: number;
  module?: string;
  xpPoints?: number;
}

export interface Section {
  id: string;
  title: string;
  content: string;
  type: string;
}
