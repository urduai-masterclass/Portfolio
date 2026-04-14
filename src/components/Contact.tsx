import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-10 bg-background border-t border-border">
      <div className="max-w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[120px] font-heading leading-[0.85] tracking-[-0.04em] uppercase mb-12"
          >
            GET IN<br />TOUCH
          </motion.h2>
          
          <div className="space-y-12">
            <div className="group">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2">Email</p>
              <a href="mailto:hello@johndoe.com" className="text-3xl md:text-5xl font-bold tracking-tighter hover:text-primary transition-colors">
                hello@johndoe.com
              </a>
            </div>
            
            <div className="group">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2">Social</p>
              <div className="flex gap-8">
                {["LinkedIn", "GitHub", "Twitter"].map((social) => (
                  <a key={social} href="#" className="text-xl font-bold uppercase tracking-tighter hover:text-primary transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border border-border p-10"
        >
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Your Name</label>
              <input
                type="text"
                placeholder="ALEX RIVERA"
                className="w-full bg-transparent border-b border-border rounded-none px-0 py-4 text-2xl font-bold uppercase tracking-tighter focus:border-primary focus:outline-none transition-all placeholder:opacity-20"
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Your Email</label>
              <input
                type="email"
                placeholder="ALEX@RIVERA.COM"
                className="w-full bg-transparent border-b border-border rounded-none px-0 py-4 text-2xl font-bold uppercase tracking-tighter focus:border-primary focus:outline-none transition-all placeholder:opacity-20"
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Message</label>
              <textarea
                placeholder="TELL ME ABOUT YOUR PROJECT..."
                rows={3}
                className="w-full bg-transparent border-b border-border rounded-none px-0 py-4 text-2xl font-bold uppercase tracking-tighter focus:border-primary focus:outline-none transition-all resize-none placeholder:opacity-20"
              />
            </div>
            <Button className="w-full h-20 text-xl font-bold uppercase tracking-widest rounded-none bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-colors">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
