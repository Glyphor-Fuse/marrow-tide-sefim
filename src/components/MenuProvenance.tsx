
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  provenance: string;
  pairing: string;
  image: string;
}

const MENU_DATA: Record<string, MenuItem[]> = {
  "The Butcher": [
    {
      id: "steak-1",
      name: "45-Day Dry Aged Ribeye",
      description: "Grass-fed heritage beef, finished on grain for intense marbling. Served with bone marrow butter.",
      price: "£58",
      provenance: "Highland Farms, Scotland (57.4° N, 4.2° W)",
      pairing: "2016 Château Margaux, Bordeaux",
      image: "/images/steak-detail.png"
    },
    {
      id: "steak-2",
      name: "Wagyu A5 Striploin",
      description: "Imported Japanese black cattle, melting texture, served with Himalayan salt block.",
      price: "£95",
      provenance: "Kagoshima Prefecture, Japan",
      pairing: "Sake: Dassai 'Beyond'",
      image: "/images/raw-ingredients.png"
    }
  ],
  "The Monger": [
    {
      id: "sea-1",
      name: "Hand-Dived Scallops",
      description: "Pan-seared in seaweed butter, cauliflower purée, caviar finish.",
      price: "£28",
      provenance: "Orkney Isles, North Sea",
      pairing: "2020 Chablis Grand Cru, Burgundy",
      image: "/images/seafood-detail.png"
    },
    {
      id: "sea-2",
      name: "Native Blue Lobster",
      description: "Grilled whole over charcoal, garlic & herb emulsion.",
      price: "£65",
      provenance: "Cornish Coast, Padstow",
      pairing: "2019 Meursault, Cote de Beaune",
      image: "/images/seafood-detail.png"
    }
  ],
  "The Garden": [
    {
      id: "veg-1",
      name: "Heritage Beetroot Tartare",
      description: "Smoked goat cheese, walnut crumb, truffle honey glaze.",
      price: "£18",
      provenance: "Kent Market Gardens",
      pairing: "2021 Pinot Noir, Oregon",
      image: "/images/raw-ingredients.png"
    }
  ]
};

export function MenuProvenance() {
  const [activeCategory, setActiveCategory] = useState("The Butcher");
  const [selectedItem, setSelectedItem] = useState<MenuItem>(MENU_DATA["The Butcher"][0]);

  return (
    <section id="menu" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold">Origin to Plate</span>
          <h2 className="text-4xl md:text-6xl font-serif text-foreground">Curated Provenance</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select a category to explore the journey of our signature ingredients.
          </p>
        </div>

        {/* Categories */}
        <div className="flex justify-center gap-8 mb-16 border-b border-border/30 pb-4">
          {Object.keys(MENU_DATA).map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSelectedItem(MENU_DATA[category][0]);
              }}
              className={`text-lg md:text-2xl font-serif transition-all duration-300 pb-4 relative ${
                activeCategory === category ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-1 bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* List */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                {MENU_DATA[activeCategory].map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className={`p-6 rounded-lg cursor-pointer transition-all duration-300 border ${
                      selectedItem.id === item.id 
                        ? "bg-card border-accent/40 shadow-[0_0_30px_-10px_rgba(49,227,84,0.1)]" 
                        : "bg-transparent border-transparent hover:bg-card/50"
                    }`}
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className={`text-xl font-serif ${selectedItem.id === item.id ? "text-accent" : "text-foreground"}`}>
                        {item.name}
                      </h3>
                      <span className="text-primary font-bold">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Visualization / Details */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-xl overflow-hidden border border-border h-full flex flex-col"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                   {/* Fallback image logic intended here, using budget-compliant paths */}
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="bg-primary text-primary-foreground px-3 py-1 text-xs uppercase tracking-wider rounded-full">
                      Signature Selection
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-8 flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-accent mb-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wider font-bold">Sourcing</span>
                      </div>
                      <p className="text-foreground border-l-2 border-border pl-3 text-sm">
                        {selectedItem.provenance}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <Star className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wider font-bold">Sommelier Pair</span>
                      </div>
                      <p className="text-foreground border-l-2 border-border pl-3 text-sm">
                        {selectedItem.pairing}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Star className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-wider font-bold">Tasting Notes</span>
                    </div>
                    <p className="text-muted-foreground/80 italic text-sm">
                      "A masterclass in texture and depth. The initial profile offers intense savory notes, followed by a sweet, lingering finish characteristic of the region's terroir."
                    </p>
                  </div>
                  
                  <div className="pt-4">
                     <Button variant="link" className="text-accent pl-0 hover:text-accent/80 group">
                        View Full Nutritional Info <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                     </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuProvenance;
