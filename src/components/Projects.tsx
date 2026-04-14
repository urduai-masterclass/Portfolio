import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "EcoSphere Dashboard",
    description: "A real-time environmental monitoring dashboard with interactive data visualizations.",
    image: "https://picsum.photos/seed/eco/800/600",
    tags: ["React", "D3.js", "Tailwind", "Firebase"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Nova E-Commerce",
    description: "A high-performance headless commerce platform with a focus on speed and SEO.",
    image: "https://picsum.photos/seed/nova/800/600",
    tags: ["Next.js", "Shopify", "TypeScript", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Pulse Social Media",
    description: "A decentralized social network built on blockchain technology for data privacy.",
    image: "https://picsum.photos/seed/pulse/800/600",
    tags: ["Solidity", "React", "Web3.js", "IPFS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Zenith Task Manager",
    description: "A minimalist productivity tool with AI-powered task prioritization.",
    image: "https://picsum.photos/seed/zenith/800/600",
    tags: ["React", "Gemini AI", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-10 border-t border-border">
      <div className="max-w-full">
        <div className="mb-20">
          <h2 className="text-6xl md:text-[120px] font-heading leading-[0.85] tracking-[-0.04em] uppercase mb-8">
            SELECTED<br />WORKS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-background p-8 flex flex-col gap-6 hover:bg-primary transition-colors duration-500"
            >
              <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
                0{index + 1} // {project.tags[0]}
              </span>
              
              <div className="aspect-square overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:text-primary-foreground">
                {project.title}
              </h3>
              
              <div className="flex gap-2 mt-auto">
                <span className="text-[10px] uppercase font-bold tracking-widest border border-current px-2 py-1 group-hover:border-primary-foreground group-hover:text-primary-foreground">
                  {project.tags.join(" / ")}
                </span>
              </div>

              <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="link" className="p-0 h-auto text-primary-foreground font-bold uppercase text-[10px] tracking-widest" asChild>
                  <a href={project.demo} target="_blank" rel="noreferrer">Live View</a>
                </Button>
                <Button variant="link" className="p-0 h-auto text-primary-foreground font-bold uppercase text-[10px] tracking-widest" asChild>
                  <a href={project.github} target="_blank" rel="noreferrer">Source</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
