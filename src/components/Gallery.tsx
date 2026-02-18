
import { motion } from "framer-motion";

const images = [
  {
    src: "/images/interior-bar.png",
    title: "The Emerald Bar",
    desc: "Cocktails crafted with precision"
  },
  {
    src: "/images/seafood-detail.png",
    title: "Ocean Harvest",
    desc: "Fresh daily catch"
  },
  {
    src: "/images/steak-detail.png",
    title: "Prime Cuts",
    desc: "Aged to perfection"
  },
  {
    src: "/images/dessert-plated.png",
    title: "Sweet Finish",
    desc: "Decadent artistry"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-muted relative">
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end">
        <div className="space-y-4 max-w-xl">
           <span className="text-primary uppercase tracking-widest text-sm font-semibold">Atmosphere</span>
           <h2 className="text-4xl md:text-5xl font-serif text-foreground">Inside the Vault</h2>
           <p className="text-muted-foreground">
             An interior designed to envelope you in warmth and shadow.
           </p>
        </div>
        <div className="hidden md:block pb-2">
            <span className="text-accent font-serif italic text-lg">London, UK</span>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="relative group overflow-hidden rounded-md h-full w-full"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-foreground font-serif text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {img.title}
                </h3>
                <p className="text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  {img.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Video Background Section below grid */}
      <div className="w-full h-[400px] mt-16 relative overflow-hidden">
         <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover"
         >
             <source src="/videos/ambience-pan.mp4" type="video/mp4" />
         </video>
         <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
            <div className="text-center space-y-4 p-4">
                <h3 className="text-3xl md:text-4xl font-serif text-foreground">Private Dining</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                    Experience exclusive service in our 'Captain’s Table' room.
                </p>
                <button className="text-primary hover:text-primary/80 underline underline-offset-4 decoration-accent">
                    Inquire for Events
                </button>
            </div>
         </div>
      </div>
    </section>
  );
}

export default Gallery;
