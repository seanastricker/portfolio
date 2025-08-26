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
      subtitle: "AI-powered Dungeons & Dragons Campaign Assistant",
      description: "Generate compelling storylines, craft memorable characters and monsters, balance encounters, and bring your fantasy worlds to life with advanced writing and content generation assistance.",
      technologies: ["TypeScript", "React", "Vite", "Tailwind CSS", "Firebase", "AI/ML APIs"],
      video: {
        src: "https://www.youtube.com/embed/sOOIkcZx33w",
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
      subtitle: "AI-powered Educational Social Platform for K-12 Mathematics",
      description: "Snap photos of math problems for instant homework assistance, access RAG-powered explanations and practice problems, compete in daily math challenges, and engage in collaborative learning experiences with peers.",
      technologies: ["React Native", "Expo", "TypeScript", "Firebase", "OpenAI API", "Pinecone", "Python"],
      video: {
        src: "https://www.youtube.com/embed/MaTV6QNUwGg",
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
      subtitle: "AI-powered BrainLift Researcher and Document Generator",
      description: "Define your research purpose through AI-guided conversations, automate parallel research across Experts, SpikyPOVs, and Knowledge Trees, generate comprehensive documents with citations, and seamlessly integrate with your project directories for version tracking.",
      technologies: ["Electron", "React", "TypeScript", "Firebase", "OpenAI API", "Tavily API", "TypeScript Orchestration", "Zustand"],
      video: {
        src: "https://www.youtube.com/embed/8Rv_zXL1gSM",
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
      subtitle: "Intelligent Personalized Applied Learning Platform",
      description: "Follow any thread of curiosity and receive AI-powered content generation backed by credible open-source textbooks to transform your learning process. Utilize our personalized study material creation, exercise generation, progress tracking, interview assessments, and intelligent learning analytics.",
              technologies: ["TypeScript", "Python", "Microservices", "AI/ML", "Content Generation", "FastAPI", "React", "OpenStax"],
      video: {
        src: "https://www.youtube.com/embed/_VWCaXU3g4Y",
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
      subtitle: "2D Multiplayer Gauntlet AI Simulation Game with Strategic Stat Management",
      description: "Simulate the life of Gauntlet AI Challenger who must balance Health, Social, and CCAT Score throughout the program to land a $200k job or be kicked out. Real-time multiplayer support, pixel-art top-down 2D environments, and character customization.",
              technologies: ["Godot Engine", "GDScript", "Multiplayer Networking", "2D Graphics", "Real-time Systems"],
      video: {
        src: "https://www.youtube.com/embed/2KEpgNp7t9o",
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
      subtitle: "Customer Relationship Management System for Youth Sports Organizations",
      description: "A specialized CRM solution built on SuiteCRM platform, designed specifically to manage volunteer background checks, volunteer hours, program matching, parent communication, incident reporting, and equipment tracking for volunteers and parents to have everything they need to manage youth sports leagues.",
      technologies: ["PHP", "JavaScript", "Smarty", "SCSS", "MySQL", "SuiteCRM Platform", "Web Development"],
      video: {
        src: "https://www.youtube.com/embed/Uc2XNDvKaUE",
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