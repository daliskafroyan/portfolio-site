import { useState, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import { Star } from "lucide-react";
import { PROJECTS, type Project } from "@/data/projects";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const StarsWithTooltip = ({
  count = 5,
  tooltipName,
  tooltipDescription
}: {
  count?: number;
  tooltipName?: string;
  tooltipDescription?: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );

  const handleMouseMove = (event: React.MouseEvent) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const rect = event.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const mouseX = event.clientX;
      const normalizedX = mouseX - centerX;

      // Clamp the value to reasonable bounds
      const clampedX = Math.max(-100, Math.min(100, normalizedX));
      x.set(clampedX);
    });
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: "nowrap",
            }}
            className="absolute -top-10 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-gray-900 dark:bg-gray-100 px-4 py-2 text-xs shadow-xl"
          >
            <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-gray-700 dark:via-gray-300 to-transparent" />
            <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-gray-600 dark:via-gray-400 to-transparent" />
            <div className="relative z-30 text-base font-bold text-white dark:text-gray-900">
              {tooltipName}
            </div>
            <div className="text-xs text-white dark:text-gray-900">{tooltipDescription}</div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        onMouseMove={handleMouseMove}
        className="flex gap-1 cursor-pointer p-2"
        style={{ pointerEvents: 'auto' }}
      >
        {Array.from({ length: count }, (_, index) => (
          <div
            key={index}
            className={`transition-all duration-300 hover:scale-110 ${
              hovered ? 'text-yellow-400' : 'text-gray-400'
            }`}
            style={{ pointerEvents: 'none' }}
          >
            <Star size={24} fill="currentColor" />
          </div>
        ))}
      </div>
    </div>
  );
};

export function Projects() {
  return (
    <div className="space-y-8 p-4">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}



function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="lg:flex gap-8 flex-row-reverse project-card">
      {/* Image Section */}
      <div className="shrink-0 relative flex flex-col items-center justify-end w-full lg:w-80 h-full">
        {/* Desktop Image */}
        <div className="hidden lg:block w-full h-full flex items-end justify-center">
          <div className="overflow-hidden shadow dark:shadow-none border border-neutral-900 rounded-xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
        
        {/* Mobile Image */}
        <div className="lg:hidden w-full h-full flex items-end justify-center">
          <div className="overflow-hidden shadow dark:shadow-none border border-neutral-900 rounded-xl border-b-0 rounded-b-none border-dashed">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col grow border-neutral-900 border border-dashed rounded-xl rounded-t-none lg:rounded-t-xl">
        <h3 className="text-lg leading-snug font-medium">
          {project.title}
        </h3>
        
        <p className="mt-6 font-mono text-sm text-muted-foreground">
          {project.description}
        </p>

        <p className="mt-4 font-mono text-sm text-muted-foreground">
          Tools:{" "}
          <HoverCard>
            <HoverCardTrigger className="cursor-help underline decoration-dotted underline-offset-4 hover:text-foreground transition-colors">
              IndexedDB
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-semibold">IndexedDB</h4>
                <p className="text-sm text-muted-foreground">
                  A low-level API for client-side storage of significant amounts of structured data in web browsers.
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p><strong>Used for:</strong> Offline data storage, caching, complex queries</p>
                  <p><strong>Benefits:</strong> Large storage capacity, structured data, asynchronous operations</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          ,{" "}
          <HoverCard>
            <HoverCardTrigger className="cursor-help underline decoration-dotted underline-offset-4 hover:text-foreground transition-colors">
              React
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-semibold">React</h4>
                <p className="text-sm text-muted-foreground">
                  A JavaScript library for building user interfaces, particularly single-page applications.
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p><strong>Used for:</strong> Component-based UI development, state management</p>
                  <p><strong>Benefits:</strong> Virtual DOM, declarative programming, reusable components</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          ,{" "}
          <HoverCard>
            <HoverCardTrigger className="cursor-help underline decoration-dotted underline-offset-4 hover:text-foreground transition-colors">
              Tauri
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-semibold">Tauri</h4>
                <p className="text-sm text-muted-foreground ">
                  A framework for building secure, fast, and lightweight desktop applications using web technologies.
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p><strong>Used for:</strong> Cross-platform desktop app development, system integration</p>
                  <p><strong>Benefits:</strong> Small bundle size, native performance, Rust backend security</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </p>
        
          
        {/* Action Buttons */}
        <div className="w-full flex justify-between items-center mt-auto">
          {/* GitHub Button - Left Side */}
          {project.githubUrl && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.githubUrl}
              className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
              title="View Source Code"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}


          {/* Animated Stars - Right Side */}
          <div className="relative">
            <div className="flex flex-row items-center justify-center w-full">
              <StarsWithTooltip
                count={5}
                tooltipName="👍 Proudest project"
                // tooltipDescription="High-quality implementation with excellent code structure"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 