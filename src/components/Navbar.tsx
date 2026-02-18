
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ReservationModal } from "@/components/ReservationModal";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "Menu", href: "#menu" },
    { name: "Interior", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          scrolled 
            ? "bg-background/80 backdrop-blur-md border-border/40 py-4" 
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="relative z-50 group">
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-widest text-foreground font-bold group-hover:text-primary transition-colors">
                MARROW <span className="text-accent">&</span> TIDE
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-foreground transition-colors">
                London Est. 2024
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest text-foreground/80 hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <ReservationModal>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wide">
                Book a Table
              </Button>
            </ReservationModal>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-foreground hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <ReservationModal>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 mt-4">
                Book a Table
              </Button>
            </ReservationModal>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
