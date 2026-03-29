import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Code, Terminal, Cpu } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="About Me" />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-muted-foreground leading-relaxed space-y-6"
          >
            <p>
              I am a Computer Science student focused on building real-world applications using modern technologies. My journey in tech is driven by an insatiable curiosity for how things work and a desire to build things that matter.
            </p>
            <p>
              I am particularly interested in <strong className="text-foreground">AI development</strong> and creating <strong className="text-foreground">developer productivity tools</strong>. I believe that good software doesn't just solve problems—it empowers other creators to do their best work.
            </p>
            <p>
              When I'm not coding, I'm usually exploring new frontend frameworks, optimizing workflows, or diving deep into the latest AI models and APIs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              { icon: Code, title: "Clean Code", desc: "Writing readable, maintainable, and scalable software." },
              { icon: Cpu, title: "AI Integration", desc: "Leveraging LLMs to create smart, contextual applications." },
              { icon: Terminal, title: "Developer Tools", desc: "Building extensions and CLI tools to boost productivity." },
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-card border border-card-border p-6 rounded-2xl hover:border-primary/50 transition-colors glow-box-hover group"
                style={{ gridColumn: idx === 2 ? "1 / -1" : "auto" }} // Last item spans full width
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-display">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
