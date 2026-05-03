import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Trophy, Star } from "lucide-react";

const ACHIEVEMENTS = [
  {
    title: "First Prize – Pitch Deck Live",
    period: "3 Consecutive Years (2023–2026)",
    description: "Won first place in the Fanticuz intra-college technical presentation event for three consecutive years (2023–2026), demonstrating strong communication and technical understanding.",
    icon: Trophy,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "Best Performance Award",
    period: "2024–2026",
    description: "Recognized for consistent academic performance, project contributions, and active involvement in technical activities during the academic years 2024–2026.",
    icon: Star,
    color: "text-primary",
    bg: "bg-primary/10"
  }
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-6 bg-card/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Achievements" />
        
        <div className="grid md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="flex flex-col sm:flex-row items-start gap-6 p-6 rounded-xl bg-card border border-white/5 hover:border-primary/20 transition-colors"
            >
              <div className={`shrink-0 w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center border border-white/5`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-primary tracking-widest uppercase opacity-80">{item.period}</span>
                <h3 className="text-xl font-bold font-display text-foreground mt-1 mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
