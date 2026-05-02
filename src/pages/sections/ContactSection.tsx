import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function ContactSection() {
  const email = "saraswathi.selvasekar@gmail.com";

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-primary/20 rounded-full" />
            <span className="text-primary font-bold text-sm tracking-widest uppercase opacity-80"></span>
          </div> */}

          <h2 className="text-5xl md:text-7xl font-bold font-display text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
          I’m currently seeking opportunities to grow as a full-stack developer and work on real-world projects. I’m open to collaborations, internships, and meaningful conversations around technology and development.
          </p>

          <a 
            href={`mailto:${email}`}
            className="px-10 py-5 rounded-lg bg-primary text-primary-foreground font-bold text-xl hover:bg-primary/90 transition-all duration-300 flex items-center gap-3 mb-16"
          >
            <Mail className="w-6 h-6" />
            Let's Connect
          </a>

          <p className="text-muted-foreground italic">
          </p>
        </motion.div>
      </div>
    </section>
  );
}
