import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center px-10 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-full"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6 block"
        >
          Software Engineer / Designer
        </motion.span>
        
        <h1 className="text-[100px] md:text-[160px] font-heading leading-[0.85] tracking-[-0.04em] uppercase mb-12 -ml-2">
          JOHN<br />
          DOE
        </h1>
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mt-12">
          <p className="text-xl text-foreground/80 max-w-md leading-relaxed">
            Building high-performance web experiences with a focus on clean code and brutalist aesthetics. Currently based in San Francisco.
          </p>
          
          <div className="text-right">
            <p className="text-3xl font-bold tracking-tighter">2024—EXP</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Portfolio Vol. 04</p>
          </div>
        </div>

        <div className="flex gap-6 mt-16">
          <Button size="lg" className="h-14 px-10 text-xs font-bold uppercase tracking-widest rounded-none bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-colors group" asChild>
            <a href="#projects">
              View Works
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
