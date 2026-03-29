import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-display text-foreground mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300 glow-text">Connect</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>

          <a 
            href="mailto:your@email.com" 
            className="px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-bold text-xl hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,136,0.5)] transition-all duration-300 flex items-center gap-3 mb-16"
          >
            <Mail className="w-6 h-6" />
            Say Hello
          </a>

          <div className="flex items-center gap-6">
            <a href="#" className="p-4 rounded-full bg-card border border-white/10 text-foreground hover:text-primary hover:border-primary/50 hover:-translate-y-1 transition-all glow-box-hover">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="p-4 rounded-full bg-card border border-white/10 text-foreground hover:text-primary hover:border-primary/50 hover:-translate-y-1 transition-all glow-box-hover">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="p-4 rounded-full bg-card border border-white/10 text-foreground hover:text-primary hover:border-primary/50 hover:-translate-y-1 transition-all glow-box-hover">
              <ExternalLink className="w-6 h-6" />
              <span className="sr-only">LeetCode / Other</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
