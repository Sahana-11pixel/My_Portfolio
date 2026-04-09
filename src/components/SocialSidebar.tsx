import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";

export function SocialSidebar() {
  const socials = [
    { icon: Github, href: "https://github.com/Sahana-11pixel", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/sara-273055272", label: "LinkedIn" },
    { icon: ExternalLink, href: "#", label: "External" },
  ];

  return (
    <div className="fixed left-6 bottom-0 z-40 hidden lg:flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-6 mb-4">
        {socials.map((social, idx) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + idx * 0.1 }}
            whileHover={{ y: -4, color: "var(--primary)" }}
            className="text-muted-foreground transition-colors p-2"
            title={social.label}
          >
            <social.icon size={22} className="hover:text-primary transition-colors" />
          </motion.a>
        ))}
      </div>
      
      {/* Vertical line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "100px" }}
        transition={{ duration: 1, delay: 1.2 }}
        className="sidebar-line"
      />
    </div>
  );
}
