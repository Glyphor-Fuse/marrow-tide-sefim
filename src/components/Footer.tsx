
export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
             <div className="flex flex-col">
              <span className="font-serif text-3xl tracking-widest text-foreground font-bold">
                MARROW <span className="text-accent">&</span> TIDE
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              A dining experience born from the love of the land and the mystery of the sea.
              Uncompromising quality in the heart of London.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-foreground font-serif text-lg">Contact</h4>
            <div className="text-muted-foreground text-sm space-y-2">
              <p>12 Oceanic Way, Mayfair</p>
              <p>London, W1J 5NW</p>
              <p className="pt-2">+44 (0) 20 7123 4567</p>
              <p>reservations@marrowandtide.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-foreground font-serif text-lg">Hours</h4>
            <div className="text-muted-foreground text-sm space-y-2">
              <div className="flex justify-between max-w-[140px]">
                <span>Mon - Thu</span>
                <span>17:00 - 23:00</span>
              </div>
              <div className="flex justify-between max-w-[140px]">
                <span>Fri - Sat</span>
                <span>17:00 - 00:00</span>
              </div>
              <div className="flex justify-between max-w-[140px]">
                <span>Sun</span>
                <span>16:00 - 22:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground/60 gap-4">
          <p>© 2024 Marrow & Tide Restaurant Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
            <a href="#" className="hover:text-foreground">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
