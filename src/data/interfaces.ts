export type CategoryId = 'all' | 'web_app' | 'ai' | 'api' | 'website';

export type Category = {
  id: CategoryId;
  label: string;
}

export type Project = {
  id: number;
  url: string;
  githubUrl: string;
  image: string;
  category: string; 
  stack: string[]; 
  features: string[];
  tags: string[];
};

export type Education = {
  translationKey: string;
  institution: string;
  period: string;
};

export type ProfessionalExperience = {
  translationKey: string;
  company: string;
  responsibilityCount: number;
};

export type Approach = {
  id: number;
  icon: string;
  translationKey: string;
};