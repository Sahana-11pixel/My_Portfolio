import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 relative z-10 w-full">
        
        <div className="flex-1 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for work
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-display tracking-tight text-foreground leading-[1.1]"
          >
            Hi, I'm <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300 glow-text">Saraswathi</span>
            <br />
            <span className="text-3xl md:text-5xl text-muted-foreground mt-2 block font-medium">(aka Sahana)</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-foreground mt-6"
          >
            Full-stack Developer | AI Enthusiast
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground mt-6 max-w-xl leading-relaxed"
          >
            I build AI-powered tools and web applications that simplify developer workflows. Passionate about frontend development, automation, and creating impactful solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex items-center gap-4"
          >
            <a 
              href="#projects"
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] transition-all duration-300 flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Decorative rings */}
            <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-primary/40 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed" />
            
            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-primary/50 glow-box bg-card">
              <img 
                src={`${import.meta.env.BASE_URL}images/profile-placeholder.png`}
                alt="Saraswathi Sahana"
                className="w-full h-full object-cover object-center opacity-90"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
