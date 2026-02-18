
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleCheck, Clock, Users } from 'lucide-react';
import { toast } from "sonner";

export function ReservationModal({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
      toast.success("Table reserved successfully");
    }, 1500);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className={className}>{children}</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-card border-border text-foreground">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              <DialogHeader>
                <DialogTitle className="text-3xl font-serif text-primary">Reserve Your Table</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Select your preferred date and party size.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <Label>Date</Label>
                  <div className="border border-border rounded-md p-2 bg-background/50 flex justify-center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md"
                      disabled={(date) => date < new Date()}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                      <Label>Guests</Label>
                      <Select>
                        <SelectTrigger className="bg-background border-border">
                          <SelectValue placeholder="2 People" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1,2,3,4,5,6,7,8].map(num => (
                            <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? 'Person' : 'People'}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                   </div>
                   <div className="space-y-2">
                      <Label>Time</Label>
                      <Select>
                        <SelectTrigger className="bg-background border-border">
                          <SelectValue placeholder="7:00 PM" />
                        </SelectTrigger>
                        <SelectContent>
                          {["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"].map(time => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                   </div>
                </div>
                
                <Button 
                  onClick={() => setStep(2)} 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={!date}
                >
                  Continue
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              <DialogHeader>
                <DialogTitle className="text-3xl font-serif text-primary">Contact Details</DialogTitle>
                <DialogDescription>
                  Where should we send your confirmation?
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" className="bg-background border-border" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-background border-border" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+44 20 1234 5678" className="bg-background border-border" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Dietary Requirements</Label>
                  <Input id="notes" placeholder="Allergies, special occasions..." className="bg-background border-border" />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="outline" type="button" onClick={() => setStep(1)} className="flex-1 border-border text-foreground hover:bg-muted">
                    Back
                  </Button>
                  <Button type="submit" className="flex-1 bg-primary text-primary-foreground" disabled={isSubmitting}>
                    {isSubmitting ? "Confirming..." : "Complete Reservation"}
                  </Button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 text-center space-y-6"
            >
              <div className="mx-auto w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
                <CircleCheck className="w-10 h-10 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-foreground mb-2">Reservation Confirmed</h3>
                <p className="text-muted-foreground">We look forward to welcoming you to Marrow & Tide.</p>
                <p className="text-sm text-muted-foreground mt-4">A confirmation email has been sent.</p>
              </div>
              <Button onClick={() => setStep(1)} variant="outline" className="mt-6 border-border">
                Close
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

export default ReservationModal;
