import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { MenuProvenance } from "@/components/MenuProvenance";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-foreground">
          <Navbar />
          <Hero />
          <Philosophy />
          <MenuProvenance />
          <Gallery />
          <Reviews />
          <Footer />
        </main>
        <Toaster position="top-center" theme="dark" />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
