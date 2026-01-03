export interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    tag: string | string[];
    funcao: string;
    url?: string;
    image?: string;
    status: string;
  };
  index: number;
  className?: string;
}