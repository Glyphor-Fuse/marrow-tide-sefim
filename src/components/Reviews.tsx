
import { Star } from "lucide-react";

const REVIEWS = [
  {
    text: "A masterclass in restraint and indulgence. The steak was peerless, but the service was what truly set Marrow & Tide apart.",
    author: "The Michelin Guide",
    role: "2024 Selection"
  },
  {
    text: "London has many steakhouses, but few capture the soul of the ocean with such terrifying precision. Essential dining.",
    author: "Jay Rayner",
    role: "The Observer"
  },
  {
    text: "The interior feels like a secret society, and the food tastes like a revelation. The wine list alone is worth the visit.",
    author: "Grace Dent",
    role: "The Guardian"
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-card border-t border-border/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif text-center mb-16 text-foreground">Critical Acclaim</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <div key={i} className="bg-background/40 p-8 rounded-lg border border-border flex flex-col items-center text-center hover:border-accent/30 transition-colors">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed font-light">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <p className="font-serif text-foreground text-lg">{review.author}</p>
                <p className="text-xs uppercase tracking-widest text-accent mt-1">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
