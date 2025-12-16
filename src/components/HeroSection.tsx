import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import carvideo from "@/assets/carvideo.mp4";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Navbar positioned absolutely at the top */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <Navbar />
      </div>

      {/* Background car video positioned to the right */}
      <div className="absolute inset-0 flex justify-end">
        <div className="relative h-full w-[40%] lg:w-[85%]">
          <video 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-left"
          >
            <source src={carvideo} type="video/mp4" />
            {/* Fallback image in case video doesn't load */}
            <img 
              src="/fallback-hero-car.jpg" 
              alt="Modified BMW M4 in garage"
              className="w-full h-full object-cover"
            />
          </video>
          {/* Gradient fade on left edge of video */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
        </div>
      </div>
      
      {/* Overlay gradients - adjusted for right-aligned video */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent z-10" />
      
      {/* Carbon fiber texture overlay */}
      <div className="absolute inset-0 bg-carbon-fiber opacity-10 z-10" />
      
      {/* Content - with reduced padding top for navbar */}
      <div className="container mx-auto px-4 relative z-20 pt-16 md:pt-20">
        <div className="max-w-2xl stagger-children">
          {/* Main headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-6">
            BUILT FOR <span className="text-gradient">SPEED</span>
            <br />
            DESIGNED TO <span className="text-gradient">DOMINATE</span>
          </h1>

          {/* Subtext */}
          <p className="font-body text-xl md:text-2xl text-foreground/80 max-w-xl mb-10">
            Premium Car Modifications & Performance Upgrades.
            <br className="hidden md:block" />
            Transform your machine into a legend.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button
              size="lg"
              className="btn-mechanical gradient-racing text-primary-foreground font-body font-bold text-lg uppercase tracking-wider px-8 py-6"
            >
              Explore Mods
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-mechanical border-2 border-primary/50 bg-background/30 backdrop-blur-sm text-foreground hover:bg-primary/10 hover:border-primary font-body font-bold text-lg uppercase tracking-wider px-8 py-6"
            >
              Book Customization
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30 max-w-xl">
            <div>
             
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      
    </section>
  );
};

export default HeroSection;