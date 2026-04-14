import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-20 px-10 border-t border-border">
      <div className="max-w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">
            <div className="w-2 h-2 bg-primary rounded-full" />
            John Doe
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} Portfolio Vol. 04
          </p>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-6">
          {["LinkedIn", "GitHub", "Twitter", "Instagram"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-xs font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors"
            >
              {social}
            </a>
          ))}
        </div>

        <div className="text-right">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Local Time</p>
          <p className="text-xl font-bold uppercase tracking-tighter">
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} PST
          </p>
        </div>
      </div>
    </footer>
  );
}
