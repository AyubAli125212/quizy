export type Choice = { id: string; text: string };
export type Question = {
  id: string;
  prompt: string;
  choices: Choice[];
  answerId: string;
};

export type Exam = {
  id: string;
  title: string;
  questions: Question[];
};

export type Subject = {
  id: string;
  title: string;
  exams: Exam[];
};
