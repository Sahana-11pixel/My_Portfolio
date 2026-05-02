import { motion } from "framer-motion";

export function EmailSidebar() {
  const email = "saraswathi.selvasekar@gmail.com";

  return (
    <div className="fixed right-6 bottom-0 z-40 hidden lg:flex flex-col items-center gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        whileHover={{ y: -4, color: "var(--primary)" }}
        className="flex flex-col items-center"
      >
        <a 
          href={`mailto:${email}`}
          className="text-muted-foreground vertical-text text-sm font-medium tracking-widest hover:text-primary transition-all duration-300 transform-gpu"
        >
          {email}
        </a>
      </motion.div>
      
      {/* Vertical line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "100px" }}
        transition={{ duration: 1, delay: 1.4 }}
        className="sidebar-line"
      />
    </div>
  );
}
