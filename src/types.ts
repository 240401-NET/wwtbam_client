import React from "react"; 

export interface SignUpFormProps { 
    Username: string; 
    Email: string; 
    Password: string; 
    Name: string 
} 

export interface LoginFormProps { 
    Username: string; 
    Password: string; 
} 

export interface Token { 
  userName: string; 
  email: string; 
  token: string; 
  userId: string 
} 

export interface ToastProps { 
  toastMessage: string; 
  color: string; 
} 

export interface UserContextType { 
  user: UserProfile | null, 
    token: string | null, 
    register: (Email: string, Username: string, Password: string, Name:string) => void; 
    loginUser: (Username: string, Password: string) => void; 
    logout: () => void; 
    isLoggedIn: () => boolean;
    errMsg: string | null;
} 

export interface UserProfile  { 
  userName: string, 
  email: string, 
} 

export interface LadderRungProps { 
  amount: number, 
  round: number, 
  completed: boolean, 
  active: boolean 
} 

export interface QuestionOptionProps { 
  letterChoice: string, 
  optionNumber: number, 
  questionText: string 
} 

export interface CurrentQuestionProps { 
  questionText: string, 
  questionOptions: string[] 
} 

export interface Question {
  category: string; 
  correctAnswer: string; 
  difficulty: string; 
  id: string; 
  incorrectAnswers: string[]; 
  isNiche: boolean; 
  question: string; 
  regions: string[]; 
  tags: string[]; 
  type: string; 
} 

export interface ModalProps { 
  checkChoice: () => void; 
  close: () => void; 
  modalRef: React.RefObject<HTMLDialogElement>; 
} 

export interface GameProps { 
  score?: number; 
  playedAt?: Date; 
  userId: string; 
} 

export interface RoundValueProps { 
  [key: number]: number; 
} 

export interface QuestionContainerProps {
  currentQuestion: Question | null;
  updateQuestionNumber: (isCorrect: boolean) => void;
}