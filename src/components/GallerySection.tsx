import { useState } from "react";
import { ArrowLeft, ArrowRight, X,Send,Globe,Shield } from "lucide-react";
import galleryBmw from "@/assets/gallery-bmw.jpg";
import galleryPorsche from "@/assets/gallery-porsche.jpg";
import galleryMercedes from "@/assets/gallery-mercedes.jpg";
import galleryLambo from "@/assets/gallery-lambo.jpg";
import ScrollCarousel from './scroll-carousel.tsx';

const projects = [
  {
    id: 1,
    title: "BMW M4 Competition",
    category: "Full Build",
    mods: ["Carbon Body Kit", "Stage 2 ECU", "Akrapovič Exhaust"],
    image: galleryBmw,
  },
  {
    id: 2,
    title: "Porsche 911 GT3",
    category: "Track Setup",
    mods: ["Racing Suspension", "Roll Cage", "Ceramic Brakes"],
    image: galleryPorsche,
  },
  {
    id: 3,
    title: "Mercedes AMG GT",
    category: "Exterior",
    mods: ["Widebody Kit", "Satin Black Wrap", "Forged Wheels"],
    image: galleryMercedes,
  },
  {
    id: 4,
    title: "Lamborghini Huracán",
    category: "Performance",
    mods: ["Twin Turbo Kit", "Custom Exhaust", "ECU Tune"],
    image: galleryLambo,
  },
];
const features = [
  {
    icon: Send,
    title: "BMW M4 Competition",
    description: "Carbon Body Kit Stage 2 ECU AKRAPOVI$ Exhaust.",
    image: galleryBmw,
  },
  {
    icon: Globe,
    title: "Lamborghini Huracán",
    description: "Twin Turbo Kit Custom Exhaust ECU Tune.",
    image: galleryLambo,
  },
  {
    icon: Shield,
    title: "Mercedes AMG GT",
    description: "Widebody Kit Satin Black Wrap Forged Wheels.",
    image: galleryMercedes,
  },
  {
    icon: Shield,
    title: "Porsche 911 GT3",
    description: "Racing Suspension Roll Cage Ceramic Brakes.",
    image: galleryPorsche,
  },
];

const GallerySection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section id="gallery" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-digital text-xs uppercase tracking-widest text-primary mb-4 block">
            Our Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            PROJECT <span className="text-gradient">GALLERY</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Witness the transformation. Every build tells a story of precision and passion.
          </p>
        </div>

        {/* Gallery grid */}
       
        
<ScrollCarousel
  features={features}
  className="my-20"
  maxScrollHeight={2000}
/>
        {/* View all link */}
        <div className="text-center mt-12">
          <a
            href="#all-projects"
            className="inline-flex items-center gap-2 font-body font-semibold uppercase tracking-wider text-primary hover:text-accent transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
