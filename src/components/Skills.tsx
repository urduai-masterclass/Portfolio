import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "Zustand", "Three.js"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase", "GraphQL", "Prisma", "Redis"],
  },
  {
    name: "Tools & Design",
    skills: ["Figma", "Adobe XD", "Git", "Docker", "AWS", "Vercel", "Jest", "Cypress"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-10 max-w-full border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <h2 className="text-6xl md:text-[100px] font-heading leading-[0.85] tracking-[-0.04em] uppercase mb-8">
            TECH<br />STACK
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xs">
            A systematic approach to building modern digital products.
          </p>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background p-10"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-8">
                0{index + 1} // {category.name}
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xl font-bold uppercase tracking-tighter hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
