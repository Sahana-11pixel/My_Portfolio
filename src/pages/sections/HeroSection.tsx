import { motion } from "framer-motion";
import { ArrowRight, FileText, Mouse } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center px-6 relative overflow-hidden">

      {/* Background decorative gradient blob */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* Left — Text Content */}
        <div className="max-w-2xl flex-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-2xl md:text-3xl font-mono tracking-wider mb-4"
          >
            Hi, I am
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05]"
          >
            Saraswathi.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl md:text-4xl font-semibold tracking-tight text-muted-foreground/70 mt-2 leading-[1.2]"
          >
            Full-Stack Developer.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base md:text-lg text-muted-foreground mt-6 max-w-xl leading-relaxed"
          >
            Focused on building AI-driven web applications and efficient <br /> full-stack systems with real-world impact.
          </motion.p>

          {/* Action Buttons — Below text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-row gap-4 mt-8"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-lg border border-primary/30 bg-primary/5 text-primary font-medium text-sm hover:bg-primary/15 hover:border-primary/60 transition-all duration-300"
            >
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              View Projects
            </a>
            <a
              href="#"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border bg-card text-foreground font-medium text-sm hover:border-primary/40 hover:text-primary transition-all duration-300"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </a>
          </motion.div>
        </div>

        {/* Right — Profile Image with Offset Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative flex-shrink-0 mx-auto md:mx-0 mt-8 md:mt-0 group cursor-pointer"
        >
          {/* Offset decorative border frame behind the image */}
          <div className="absolute top-4 left-4 w-[240px] h-[300px] md:w-[280px] md:h-[340px] rounded-md border-2 border-primary z-0 transition-all duration-300 group-hover:top-3 group-hover:left-3" />

          {/* Profile image container */}
          <div className="relative z-10 w-[240px] h-[300px] md:w-[280px] md:h-[340px] rounded-md overflow-hidden bg-primary">
            {/* Green color overlay that fades out on hover */}
            <div className="absolute inset-0 bg-primary/30 mix-blend-multiply opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-20 pointer-events-none" />
            
            {/* The image — transitions from slightly green/tinted to full color on hover */}
            <img
              src="/images/profile.png"
              alt="Saraswathi — Profile"
              className="w-full h-full object-cover object-top transition-all duration-300 group-hover:scale-[1.02] filter contrast-125 group-hover:filter-none opacity-90 group-hover:opacity-100"
            />
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Mouse Indicator — positioned above the dock */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mouse className="w-5 h-5" />
        </motion.div>
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
      </motion.a>
    </section>
  );
}
