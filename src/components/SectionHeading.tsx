import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({ title, subtitle, center = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 flex flex-col ${center ? 'items-center text-center mx-auto' : 'items-start'} w-full`}>

      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-6 w-full ${center ? 'justify-center' : 'justify-start'}`}
      >
        {center && <div className="h-[1px] bg-border/80 flex-grow" />}
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground whitespace-nowrap">
          {title}
        </h2>
        <div className="h-[1px] bg-border/80 flex-grow" />
      </motion.div>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
