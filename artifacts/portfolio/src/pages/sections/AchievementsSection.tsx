import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Trophy, Star, Award } from "lucide-react";

const ACHIEVEMENTS = [
  {
    title: "First Prize in College Presentations",
    period: "3 Consecutive Years",
    description: "Consistently delivered top-tier technical presentations demonstrating deep understanding of complex computer science concepts.",
    icon: Trophy,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10"
  },
  {
    title: "Best Performance Award",
    period: "2nd and 3rd Year",
    description: "Awarded for exceptional academic performance, project contributions, and involvement in technical activities.",
    icon: Star,
    color: "text-primary",
    bg: "bg-primary/10"
  }
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Milestones & Awards" />
        
        <div className="grid md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="flex items-start gap-6 p-6 rounded-3xl bg-card border border-white/5 hover:bg-card/80 transition-colors"
            >
              <div className={`shrink-0 w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center border border-white/5`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <div>
                <span className="text-sm font-bold text-primary tracking-wider uppercase">{item.period}</span>
                <h3 className="text-xl font-bold font-display text-foreground mt-2 mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
