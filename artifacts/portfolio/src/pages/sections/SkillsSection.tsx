import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "SQL"]
  },
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "HTML", "CSS", "Next.js"]
  },
  {
    title: "Backend & DB",
    skills: ["Firebase", "MongoDB", "FastAPI", "Node.js"]
  },
  {
    title: "Tools & Others",
    skills: ["Git", "VSCode Extensions", "REST APIs", "Vite"]
  }
];

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="The technologies and tools I use to bring ideas to life."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-white/5 p-6 rounded-3xl hover:border-primary/30 transition-colors"
            >
              <h3 className="text-xl font-bold font-display text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-primary hidden sm:block" />
                {category.title}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map(skill => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className="px-4 py-2 bg-background border border-white/10 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(0,255,136,0.2)]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
