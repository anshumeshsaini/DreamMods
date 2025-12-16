import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Lottie from "lottie-react";
import exteriorAnimation from "../assets/animation/Car.json";
import wheelsAnimation from "../assets/animation/Tyre1.json";
import electronicsAnimation from "../assets/animation/elec.json";
import protectionAnimation from "../assets/animation/carsatfy.json";

const categories = [
  {
    id: "exterior",
    title: "Exterior",
    description: "Body kits, wraps, lighting & aerodynamics",
    animation: exteriorAnimation,
    count: 156,
    gradient: "from-primary to-primary/50",
  },
  {
    id: "wheels",
    title: "Wheels & Tyres",
    description: "Premium alloys, performance tyres",
    animation: wheelsAnimation,
    count: 234,
    gradient: "from-primary to-accent",
  },
  {
    id: "electronics",
    title: "Electronics",
    description: "Digital displays, sound systems",
    animation: electronicsAnimation,
    count: 67,
    gradient: "from-primary/80 to-accent/80",
  },
  {
    id: "protection",
    title: "Protection",
    description: "PPF, ceramic coating & detailing",
    animation: protectionAnimation,
    count: 45,
    gradient: "from-accent/80 to-primary/80",
  },
];

const ModificationCategories = () => {
  // Create refs for each Lottie animation
  const lottieRefs = useRef({});

  const handleMouseEnter = (categoryId) => {
    if (lottieRefs.current[categoryId]) {
      lottieRefs.current[categoryId].play();
    }
  };

  const handleMouseLeave = (categoryId) => {
    if (lottieRefs.current[categoryId]) {
      lottieRefs.current[categoryId].stop();
      lottieRefs.current[categoryId].goToAndStop(0, true);
    }
  };

  return (
    <section id="mods" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 stagger-children">
          <span className="font-digital text-xs uppercase tracking-widest text-primary mb-4 block">
            Modification Categories
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            TRANSFORM YOUR <span className="text-gradient">MACHINE</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            From subtle refinements to complete overhauls, explore our comprehensive
            range of premium modifications.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative bg-card border border-border rounded-lg p-6 card-lift chrome-shine overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => handleMouseEnter(category.id)}
              onMouseLeave={() => handleMouseLeave(category.id)}
            >
              <a href={`#${category.id}`} className="block">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`} />
                
                {/* Lottie Animation Container */}
                <div className={`relative w-16 h-16 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 overflow-hidden`}>
                  <div className="w-14 h-14 scale-110">
                    <Lottie
                      lottieRef={(el) => {
                        lottieRefs.current[category.id] = el;
                      }}
                      animationData={category.animation}
                      autoplay={false}
                      loop={false}
                      style={{ width: '100%', height: '100%' }}
                      rendererSettings={{
                        preserveAspectRatio: 'xMidYMid meet',
                        className: "lottie-animation"
                      }}
                    />
                  </div>
                  {/* Animation overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl mb-3 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-5 border-t border-border/50">
                  <span className="font-digital text-sm text-accent">
                    {category.count} Products
                  </span>
                  <div className="relative">
                    <div className="absolute -inset-2 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 relative z-10" />
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </a>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-16">
          <a
            href="#all-mods"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg font-body font-semibold uppercase tracking-wider text-primary hover:text-accent hover:border-primary/40 transition-all duration-300 group"
          >
            View All Modifications
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ModificationCategories;