
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ReservationModal } from "@/components/ReservationModal";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/hero-sear.mp4" type="video/mp4" />
        </video>
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Content */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-accent uppercase tracking-[0.4em] mb-6 font-medium text-sm md:text-base"
        >
          Land & Sea • London
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold text-foreground mb-8 tracking-tight leading-none"
        >
          MARROW<br />
          <span className="text-stroke-accent italic font-light text-foreground/80">&</span> TIDE
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          An unapologetic celebration of prime cuts and ocean depths.
          Experience the opulent duality of flavor in the heart of the city.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <ReservationModal>
            <Button size="lg" className="h-14 px-10 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-none border border-primary hover:border-primary/80 transition-all">
              Reserve Your Table
            </Button>
          </ReservationModal>
          <Button variant="outline" size="lg" className="h-14 px-10 text-lg border-foreground/20 text-foreground hover:bg-foreground/10 hover:text-foreground rounded-none bg-transparent backdrop-blur-sm">
            View Menu
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </div>
  );
}

export default Hero;
