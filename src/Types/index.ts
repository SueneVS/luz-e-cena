
export type Category = "2D" | "3D";

export type Censorship = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos";

export interface Movie {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: Category;
  censorship: Censorship;
  genre: string;
  duration: number;
}