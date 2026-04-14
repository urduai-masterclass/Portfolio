import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Navbar() {
  const navItems = [
    { name: "Works", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "GitHub", href: "https://github.com" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-10 bg-background/80 backdrop-blur-md"
    >
      <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">
        <div className="w-2 h-2 bg-primary rounded-full" />
        Available for Projects
      </div>

      <div className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-[13px] font-bold text-foreground uppercase tracking-[0.15em] hover:text-primary transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground" asChild>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Github className="w-4 h-4" />
          </a>
        </Button>
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none uppercase tracking-widest text-[10px] font-bold px-6" asChild>
          <a href="#contact">Contact</a>
        </Button>
      </div>
    </motion.nav>
  );
}
