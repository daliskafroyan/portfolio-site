export interface Project {
    id: string;
    title: string;
    image: string;
    description: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
  }
  
  export const PROJECTS: Project[] = [
    {
      id: "offline",
      title: "Custom Sync Engine for Offline-first app",
      image: "images/offline-mode.png",
      description: "A POC of React app, demonstrating how to build an offline-first experience with a custom synchronization engine for REST API backend",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/username/offline-sync-engine"
    },
  ]; 