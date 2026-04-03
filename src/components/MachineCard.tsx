import { motion } from "framer-motion";
import { Star, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Machine } from "@/data/machines";
import { useState } from "react";

interface Props {
  machine: Machine;
  index: number;
  onBook: (machine: Machine) => void;
}

const MachineCard = ({ machine, index, onBook }: Props) => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card overflow-hidden group"
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={machine.image}
          alt={machine.name}
          loading="lazy"
          width={800}
          height={600}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 p-2 rounded-full glass"
        >
          <Heart className={`h-4 w-4 transition-colors ${liked ? "fill-primary text-primary" : "text-foreground"}`} />
        </button>

        <div className="absolute top-3 left-3">
          {machine.available ? (
            <span className="px-3 py-1 rounded-full bg-success/20 text-success text-xs font-semibold">
              Available
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full bg-destructive/20 text-destructive text-xs font-semibold">
              Booked
            </span>
          )}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-foreground text-base leading-tight">{machine.name}</h3>
          <div className="flex items-center gap-1 shrink-0 ml-2">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            <span className="text-sm font-medium text-foreground">{machine.rating}</span>
            <span className="text-xs text-muted-foreground">({machine.reviews})</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-muted-foreground mb-4">
          <MapPin className="h-3.5 w-3.5" />
          <span className="text-xs">{machine.location}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {Object.entries(machine.specs).slice(0, 3).map(([key, val]) => (
            <span key={key} className="px-2 py-1 rounded-md bg-secondary text-xs text-secondary-foreground">
              {key}: {val}
            </span>
          ))}
        </div>

        <div className="flex items-end justify-between pt-3 border-t border-border">
          <div>
            <span className="text-xl font-bold text-primary">₹{machine.pricePerHour.toLocaleString()}</span>
            <span className="text-xs text-muted-foreground">/hr</span>
            <div className="text-xs text-muted-foreground">₹{machine.pricePerDay.toLocaleString()}/day</div>
          </div>
          <Button
            size="sm"
            disabled={!machine.available}
            onClick={() => onBook(machine)}
            className="bg-primary text-primary-foreground hover:bg-jcb-yellow-dark font-semibold"
          >
            Book Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default MachineCard;
