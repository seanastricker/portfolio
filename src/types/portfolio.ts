/**
 * TypeScript interfaces for portfolio data
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  video: {
    src: string;
    alt: string;
    poster?: string;
  };
  links: {
    github: string;
    live?: string;
    demo?: string;
  };
  category: string;
  featured: boolean;
  completedDate: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  social: SocialLinks;
  projects: Project[];
} 