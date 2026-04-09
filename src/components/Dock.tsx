import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Home, User, Code, Briefcase, Trophy, Mail } from "lucide-react";

interface DockIconProps {
  icon: React.ElementType;
  label: string;
  href?: string;
  onClick?: () => void;
  mouseX: any;
}

function DockIcon({ icon: Icon, label, href, onClick, mouseX }: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-100, 0, 100], [48, 64, 48]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 20 });

  const [hovered, setHovered] = useState(false);

  const Component = href ? "a" : "button";
  const isExternal = href?.startsWith("http");
  const props = href ? { href, ...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {}) } : { onClick };

  return (
    <div className="relative flex items-center justify-center">
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 2, scale: 0.8 }}
          className="absolute -top-12 px-3 py-1.5 bg-card/90 backdrop-blur border border-white/5 text-foreground text-xs rounded-md shadow-xl whitespace-nowrap pointer-events-none"
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
          className="flex items-center justify-center bg-card/40 backdrop-blur-md border border-white/5 rounded-xl cursor-pointer hover:border-primary/40 hover:bg-card/60 transition-colors z-10 relative group shadow-sm"
        >
          <Icon className="w-1/2 h-1/2 text-foreground group-hover:text-primary transition-colors" />
        </motion.div>
      </Component>
    </div>
  );
}

export function Dock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end h-16 gap-3 px-4 py-3 glass rounded-2xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 200, delay: 0.3 }}
      >
        <DockIcon mouseX={mouseX} icon={Home} label="Home" href="#home" />
        <DockIcon mouseX={mouseX} icon={User} label="About" href="#about" />
        <DockIcon mouseX={mouseX} icon={Code} label="Skills" href="#skills" />
        <DockIcon mouseX={mouseX} icon={Briefcase} label="Projects" href="#projects" />
        <DockIcon mouseX={mouseX} icon={Trophy} label="Achievements" href="#achievements" />
        <DockIcon mouseX={mouseX} icon={Mail} label="Contact" href="#contact" />
      </motion.div>
    </div>
  );
}
