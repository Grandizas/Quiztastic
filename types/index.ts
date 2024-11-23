export interface Quiz {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}
