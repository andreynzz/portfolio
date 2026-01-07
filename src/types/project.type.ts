export interface ProjectItem {
  id: number;
  url: string;
  image: string;
  tag: string[];
}

export interface ProjectProps {
  project: ProjectItem;
  index: number;
  className?: string;
}