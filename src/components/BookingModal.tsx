import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Machine } from "@/data/machines";

interface Props {
  machine: Machine | null;
  onClose: () => void;
}

const BookingModal = ({ machine, onClose }: Props) => {
  const [step, setStep] = useState<"details" | "confirmed">("details");
  const [days, setDays] = useState(1);

  if (!machine) return null;

  const total = machine.pricePerDay * days;

  const handleConfirm = () => {
    setStep("confirmed");
    setTimeout(() => {
      setStep("details");
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-card w-full max-w-md p-6 relative"
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>

          {step === "details" ? (
            <>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">Book Machine</h3>
              <p className="text-sm text-muted-foreground mb-6">{machine.name}</p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground">Location</div>
                    <div className="text-sm font-medium text-foreground">{machine.location}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Start Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input type="date" className="pl-10 bg-secondary border-border" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Duration (days)</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="number"
                        min={1}
                        value={days}
                        onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
                        className="pl-10 bg-secondary border-border"
                      />
                    </div>
                  </div>
                </div>

                <div className="neu-inset p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Rate per day</span>
                    <span className="text-foreground">₹{machine.pricePerDay.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="text-foreground">{days} day{days > 1 ? "s" : ""}</span>
                  </div>
                  <div className="border-t border-border pt-2 flex justify-between">
                    <span className="font-semibold text-foreground">Total</span>
                    <span className="font-bold text-primary text-lg">₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <Button
                  onClick={handleConfirm}
                  className="w-full h-12 bg-primary text-primary-foreground hover:bg-jcb-yellow-dark font-semibold text-base"
                >
                  Confirm Booking
                </Button>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                <CheckCircle2 className="h-16 w-16 text-success mx-auto mb-4" />
              </motion.div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Booking Confirmed!</h3>
              <p className="text-sm text-muted-foreground">
                Your {machine.name} has been booked. We'll send you a confirmation shortly.
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookingModal;
