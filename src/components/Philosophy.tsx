
import { motion } from "framer-motion";
import { Star } from 'lucide-react';

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <img 
                src="/images/chef-portrait.png" 
                alt="Executive Chef" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-foreground">
                <p className="text-sm uppercase tracking-widest mb-1 text-accent">Executive Chef</p>
                <h3 className="text-2xl font-serif">James Sterling</h3>
              </div>
            </div>
            
            {/* Offset Border Element */}
            <div className="absolute -z-10 top-6 -left-6 w-full h-full border border-border opacity-30" />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <Star className="w-12 h-12 text-primary opacity-50" />
            
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
              Honoring the <span className="text-primary">Bone</span> & <br />
              Worshipping the <span className="text-accent">Wave</span>.
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
              <p>
                At Marrow & Tide, we believe that true luxury lies in the unadulterated truth of the ingredient. Our philosophy is one of rigorous selection and reverent preparation.
              </p>
              <p>
                From the mineral-rich soils that raise our heritage cattle to the cold, dark depths of the Atlantic yielding our shellfish—every element on your plate has a provenance, a history, and a reason for being there.
              </p>
              <p>
                We do not hide flavor; we amplify it. This is dining stripped of pretension but layered with purpose.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-accent font-serif italic text-xl">Est. 2024</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
