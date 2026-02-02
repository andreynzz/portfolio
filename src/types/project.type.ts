export interface ProjectItem {
  id: number;
  url: string;
  githubUrl?: string;
  image: string;
  tags: string[];
}

export interface ProjectProps {
  project: ProjectItem;
  index: number;
  className?: string;
}