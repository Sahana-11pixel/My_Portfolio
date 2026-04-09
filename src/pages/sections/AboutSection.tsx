import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <SectionHeading title="About Me" center />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6 mt-4 text-justify w-full"
        >
          <p>
            I am a Computer Science student at Sri GVG Visalakshi collge for women, focused on building real-world applications using modern technologies. My journey in tech is driven by an insatiable curiosity for how things work and a desire to build things that matter.
          </p>
          <p>
            I am particularly interested in <strong className="text-primary font-medium">AI development</strong> and creating <strong className="text-primary font-medium">developer productivity tools</strong>. I believe that good software doesn't just solve problems—it empowers other creators to do their best work.
          </p>
          <p>
            When I'm not coding, I'm usually exploring new frontend frameworks, optimizing workflows, or diving deep into the latest AI models and APIs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
