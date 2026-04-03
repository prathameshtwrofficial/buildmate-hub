import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/machines";

const CategoriesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="categories" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Browse by Category</span>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl mt-3">
            Everything You Need to <span className="text-gradient">Build</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 cursor-pointer group hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{cat.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{cat.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-primary">{cat.count} items</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
