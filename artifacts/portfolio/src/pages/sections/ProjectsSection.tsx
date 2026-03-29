import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "UI2Go Generator",
    description: "An innovative AI-powered tool that converts UI screenshots directly into clean, responsive frontend code. Streamlines the handoff between design and development.",
    tech: ["React", "FastAPI", "Gemini API", "Tailwind"],
    github: "#",
    live: "#"
  },
  {
    title: "Code Mentor VSCode Extension",
    description: "A developer productivity extension that provides intelligent code suggestions, automates repetitive tasks, and helps explain complex code snippets right in the editor.",
    tech: ["TypeScript", "VSCode API", "Node.js"],
    github: "#",
  },
  {
    title: "Placement Readiness System",
    description: "A comprehensive web application for managing student placements, tracking progress, and providing resources for interview preparation.",
    tech: ["HTML/CSS/JS", "Firebase", "React", "Next.js"],
    github: "#",
    live: "#"
  },
  {
    title: "College Event Landing Page",
    description: "A highly responsive and visually striking landing page designed for a major college tech event, featuring animations and a registration portal.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my recent work in frontend development and AI integration."
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-card border border-white/5 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 glow-box-hover flex flex-col h-full relative overflow-hidden"
            >
              {/* Subtle background glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold font-display text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors p-2 bg-background rounded-full border border-white/10 hover:border-primary/50">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors p-2 bg-background rounded-full border border-white/10 hover:border-primary/50">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-background text-xs font-medium text-foreground rounded-md border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
