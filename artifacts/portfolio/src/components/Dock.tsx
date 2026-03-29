import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

interface DockIconProps {
  icon: React.ElementType;
  label: string;
  href?: string;
  onClick?: () => void;
  mouseX: any;
}

function DockIcon({ icon: Icon, label, href, onClick, mouseX }: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Calculate distance from mouse to the center of the icon
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Calculate width/scale based on distance
  const widthSync = useTransform(distance, [-100, 0, 100], [48, 80, 48]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 15 });

  const [hovered, setHovered] = useState(false);

  const Component = href ? "a" : "button";
  const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick };

  return (
    <div className="relative flex items-center justify-center">
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 2, scale: 0.8 }}
          className="absolute -top-12 px-3 py-1.5 bg-card/90 backdrop-blur border border-white/10 text-foreground text-xs rounded-md shadow-xl whitespace-nowrap pointer-events-none"
        >
          {label}
        </motion.div>
      )}
      
      <Component {...(props as any)}>
        <motion.div
          ref={ref}
          style={{ width, height: width }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex items-center justify-center bg-card/60 backdrop-blur-xl border border-white/10 rounded-2xl cursor-pointer hover:border-primary/50 hover:bg-card/80 transition-colors shadow-lg z-10 hover:z-20 relative group"
        >
          <Icon className="w-1/2 h-1/2 text-foreground group-hover:text-primary transition-colors" />
          {hovered && (
            <div className="absolute inset-0 rounded-2xl bg-primary/10 glow-box opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          )}
        </motion.div>
      </Component>
    </div>
  );
}

export function Dock() {
  const mouseX = useMotionValue(Infinity);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end h-16 gap-3 px-4 py-3 glass rounded-3xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 200, delay: 0.5 }}
      >
        <DockIcon mouseX={mouseX} icon={Github} label="GitHub" href="https://github.com" />
        <DockIcon mouseX={mouseX} icon={Linkedin} label="LinkedIn" href="https://linkedin.com" />
        <DockIcon mouseX={mouseX} icon={Mail} label="Email" href="mailto:your@email.com" />
        
        <div className="w-px h-10 bg-white/10 self-center mx-1" />
        
        <DockIcon 
          mouseX={mouseX} 
          icon={theme === "dark" ? Sun : Moon} 
          label="Toggle Theme" 
          onClick={toggleTheme} 
        />
      </motion.div>
    </div>
  );
}
