/**
 * Portfolio data - Replace with your actual information
 */

import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Sean Stricker",
    title: "AI-first Developer",
    bio: "Passionate developer creating innovative solutions with modern technologies. Experienced in building scalable web applications and delivering exceptional user experiences.",
    email: "sean.stricker@gauntletai.com",
    location: "Charleston, West Virginia"
  },

  social: {
    github: "https://github.com/seanastricker",
    linkedin: "https://www.linkedin.com/in/sean-stricker-179711377/"
  },

  projects: [
    {
      id: "dungeons-and-drafting",
      title: "Dungeons & Drafting",
      subtitle: "AI-powered writing assistant with intelligent grammar suggestions",
      description: "An innovative writing assistant that combines AI-powered grammar checking with intelligent suggestions to improve writing quality. Features real-time grammar analysis, contextual corrections, and an intuitive user interface designed for writers and content creators.",
      technologies: ["TypeScript", "React", "Vite", "Tailwind CSS", "Firebase", "AI/ML APIs"],
      video: {
        src: "/videos/dungeonsanddrafting.mp4",
        alt: "Dungeons & Drafting Demo"
      },
      links: {
        github: "https://github.com/seanastricker/grammarly-clone",
        live: "https://dungeons-and-drafting.com/"
      },
      category: "Web App",
      featured: true,
      completedDate: "Week 1"
    },
    {
      id: "snap-factor",
      title: "Snap Factor",
      subtitle: "AI-powered educational social platform for K-12 mathematics",
      description: "An innovative mobile application that combines Snapchat-style social features with AI-powered mathematics education. Features include homework assistance through image recognition, RAG-powered explanations using OpenStax textbooks, daily math challenges, and collaborative learning experiences. Built with React Native and advanced AI technologies.",
      technologies: ["React Native", "Expo", "TypeScript", "Firebase", "OpenAI API", "Pinecone", "Python"],
      video: {
        src: "/videos/snapfactor.mp4",
        alt: "Snap Factor Demo"
      },
      links: {
        github: "https://github.com/seanastricker/snap-clone"
      },
      category: "Mobile App",
      featured: true,
      completedDate: "Week 2"
    },
    {
      id: "brainswift",
      title: "BrainSwift",
      subtitle: "AI-powered research and writing assistant with intelligent workflow automation",
      description: "A sophisticated desktop application that revolutionizes research and writing workflows through AI automation. Features intelligent purpose definition, multi-source research orchestration, expert analysis integration, and automated document generation. Built with advanced AI technologies including LangGraph workflows and real-time collaboration features.",
      technologies: ["Electron", "React", "TypeScript", "Firebase", "OpenAI API", "Tavily API", "LangGraph", "Zustand"],
      video: {
        src: "/videos/brainswift.mp4",
        alt: "BrainSwift Demo"
      },
      links: {
        github: "https://github.com/seanastricker/flow-genius",
        live: "https://flowgenius-fdbc2.web.app/"
      },
      category: "Desktop App",
      featured: true,
      completedDate: "Week 3"
    },
    {
      id: "spool",
      title: "Spool",
      subtitle: "Intelligent learning platform generating uniquely tailored study materials",
      description: "A revolutionary educational web application built with microservices architecture that transforms the learning process through AI-powered content generation. Features personalized study material creation, exercise generation, progress tracking, interview assessments, and intelligent learning analytics. Utilizes advanced algorithms to deliver customized educational experiences for each learner.",
      technologies: ["TypeScript", "Python", "Microservices", "AI/ML", "Content Generation", "FastAPI", "React"],
      video: {
        src: "/videos/spool.mp4",
        alt: "Spool Demo"
      },
      links: {
        github: "https://github.com/G2-Spool"
      },
      category: "Web App",
      featured: true,
      completedDate: "Week 4"
    },
    {
      id: "austen-allreds-advanced-ai-arena",
      title: "Austen Allred's Advanced AI Arena: ATX",
      subtitle: "2D multiplayer life simulation game with strategic stat management",
      description: "An engaging desktop game built with Godot Engine where players simulate the life of a challenger balancing Health, Social, and CCAT Score stats to land a $200k job or face elimination. Features real-time multiplayer support for up to 10 players, Pokemon-inspired top-down 2D environments, character customization, and strategic decision-making with meaningful trade-offs in a competitive career simulation.",
      technologies: ["Godot Engine", "GDScript", "Multiplayer Networking", "2D Graphics", "Real-time Systems", "Game Design"],
      video: {
        src: "/videos/austenallredsadvancedaiarenaatx.mp4",
        alt: "Austen Allred's Advanced AI Arena Demo"
      },
      links: {
        github: "https://github.com/seanastricker/GauntletSim",
        live: "https://bigstrickenergy.itch.io/austen-allreds-advanced-ai-arena-atx"
      },
      category: "Desktop Game",
      featured: true,
      completedDate: "Week 5"
    },
    {
      id: "youth-sports-league-crm",
      title: "Youth Sports League CRM",
      subtitle: "Comprehensive customer relationship management system for youth sports organizations",
      description: "A specialized CRM solution built on SuiteCRM platform, designed specifically for youth sports leagues and organizations. Features player registration management, team coordination, parent communication, scheduling systems, payment tracking, and comprehensive reporting. Includes customized modules for league administration, coach management, and event organization with a focus on youth sports operations.",
      technologies: ["PHP", "JavaScript", "Smarty", "SCSS", "MySQL", "SuiteCRM Platform", "Web Development"],
      video: {
        src: "/videos/youthsportsleaguecrm.mp4",
        alt: "Youth Sports League CRM Demo"
      },
      links: {
        github: "https://github.com/seanastricker/SuiteCRM"
      },
      category: "Web App",
      featured: true,
      completedDate: "Week 6"
    }
  ]
}; 