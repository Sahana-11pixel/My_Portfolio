import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Github, ExternalLink, Folder } from "lucide-react";

const FEATURED_PROJECTS = [
  {
    title: " UI Screenshot to Frontend Code Generator",
    overline: "UI-CodeGen",     
    description:
      "An AI-powered web application that converts UI screenshots into clean, responsive frontend code. It speeds up UI development by reducing manual work. It also includes a chatbot to modify and explain code, along with version control and project management features to track changes and export code easily.",
    tech: ["React", "Python FastAPI", "Gemini API", "Firebase", "MongoDB"],
    github: "https://github.com/Sahana-11pixel/UI-CodeGen-Repo.git",
    live: "https://ui-codegen.vercel.app/",
    image: "/images/ui-codegen2.png",
    align: "left" as const, // text on left, image on right
  },
  {
    title: "Placement Readiness System",
    overline: "Evalyze",
    description:
      "A full-stack web application designed to evaluate students’ placement readiness through structured skill, personality, and resume assessments. It features AI-powered resume analysis, user and admin dashboards, and centralized progress tracking. The platform enables secure data management, automated report generation, and provides actionable insights to help students improve their performance.",
    tech: ["React", "Next.js", "TypeScript", "Groq API", "Supabase"],
    github: "https://github.com/Srivalli12l/Sample_copy_withsupabsedb_finalproject.git", // Link to be added
    live: "https://sample-copy-withsupabsedb-finalproj.vercel.app/",
    image: "/images/evalyze.png", // Ensure you save the image as public/images/evalyze.png
    align: "right" as const, // text on right, image on left (flipped)
  },
];

const OTHER_PROJECTS = [
  {
    title: "Code-Mentor - VS Code Extension",
    description:
      "An AI-powered VS Code extension that analyzes code, explains errors in simple language, and suggests fixes to improve code quality. It also includes an interview mode with features like paste detection, tab-switching restriction, AI-generated code detection, and session tracking to ensure fair coding assessments.",
    tech: ["TypeScript", "Ollama Llama 3.2", "Node.js", "VS Code API"],
    github: "https://github.com/Sahana-11pixel/CodeMentor.git",
    live: "",
  },
  {
    title: "Virtual Mouse",
    description:
      "A computer vision-based application that enables users to control the mouse cursor using hand gestures. Built using Python and OpenCV, it tracks hand movements in real time to perform actions like clicking, dragging, and scrolling without physical input.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    github: "",
    live: "",
  },
  {
    title: "Fanaticuz 2k26",
    description:
      "Department of Computer Science Event Landing Page. A responsive and visually engaging landing page developed for a college technical event, featuring event details, schedules, and a registration interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Sahana-11pixel/fanaticuz2k26.git",
    live: "https://fanaticuz2k26.vercel.app/fanaticuz-landing.html",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Some Things I've Built" />

        <div className="max-w-6xl mx-auto">

        {/* ── Featured Projects ── */}
        <div className="featured-projects">
          {FEATURED_PROJECTS.map((project, idx) => {
            const isRight = (project.align as string) === "right"; // text column side
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="featured-project"
                style={
                  {
                    "--align": isRight ? "right" : "left",
                  } as React.CSSProperties
                }
              >
                {/* Image */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="featured-project__image-link"
                >
                  <div className="featured-project__image-overlay" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="featured-project__img"
                  />
                </a>

                {/* Content */}
                <div className="featured-project__content">
                  <p className="featured-project__overline">{project.overline}</p>
                  <h3 className="featured-project__title">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  </h3>
                  <div className="featured-project__desc">
                    <p>{project.description}</p>
                  </div>
                  <ul className="featured-project__tech">
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <div className="featured-project__links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                        <Github size={28} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live Demo">
                        <ExternalLink size={28} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Other Noteworthy Projects ── */}
        <div className="noteworthy-section">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="noteworthy-heading"
          >
            Other Notable Projects
          </motion.h3>

          <div className="noteworthy-grid">
            {OTHER_PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="noteworthy-card"
              >
                {/* Top row: folder + links */}
                <div className="noteworthy-card__top">
                  <Folder size={40} className="noteworthy-card__folder" />
                  <div className="noteworthy-card__icons">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="noteworthy-card__title">{project.title}</h3>

                {/* Description */}
                <p className="noteworthy-card__desc">{project.description}</p>

                {/* Tech */}
                <ul className="noteworthy-card__tech">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
