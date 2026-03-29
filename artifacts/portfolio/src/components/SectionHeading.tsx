import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-16 md:mb-24 flex flex-col items-start">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold font-display text-foreground relative inline-block"
      >
        {title}
        <span className="absolute -bottom-2 md:-bottom-3 left-0 w-1/2 h-1 bg-primary rounded-full glow-box"></span>
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-muted-foreground max-w-2xl text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
