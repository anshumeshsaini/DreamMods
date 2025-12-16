import React, {
    useEffect,
    useRef,
    useState,
    useLayoutEffect,
    forwardRef,
  } from "react";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { LucideIcon } from "lucide-react";
  
  // Assuming these are external, import them
  import { cn } from "../lib/utils";
  
  gsap.registerPlugin(ScrollTrigger);
  
  // --- Component Props and Types ---
  // Define a type for a single feature object
  export interface FeatureItem {
    icon: LucideIcon;
    title: string;
    description: string;
    image: string;
  }
  
  // Define the component's props interface
  export interface ScrollCarouselProps {
    features: FeatureItem[];
    className?: string; // To allow external classes
    maxScrollHeight?: number; // New optional prop for max scroll height
  }
  
  // --- Custom Hook for Animations ---
  const useFeatureAnimations = (
    containerRef: React.RefObject<HTMLDivElement>,
    scrollContainerRef: React.RefObject<HTMLDivElement>,
    progressBarRef: React.RefObject<HTMLDivElement>,
    cardRefs: React.MutableRefObject<HTMLDivElement[]>,
    isDesktop: boolean,
    maxScrollHeight?: number
  ) => {
    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        // Desktop horizontal scroll logic
        if (isDesktop) {
          const scrollWidth1 = scrollContainerRef.current?.scrollWidth || 0;
          const containerWidth = containerRef.current?.offsetWidth || 0;
          const cardWidth = cardRefs.current[0]?.offsetWidth || 0;
          const viewportOffset = (containerWidth - cardWidth) / 2;
  
          const finalOffset1 = scrollWidth1 - containerWidth + viewportOffset;
  
          // Use the provided maxScrollHeight or the calculated offset as the scroll distance
          const scrollDistance = maxScrollHeight || finalOffset1;
  
          gsap
            .timeline({
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${scrollDistance}`,
                scrub: 1,
                pin: true,
              },
            })
            .fromTo(
              scrollContainerRef.current,
              { x: viewportOffset },
              { x: -finalOffset1 + viewportOffset, ease: "none" }
            );
  
          gsap.to(progressBarRef.current, {
            width: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: () => `+=${scrollDistance}`,
              scrub: true,
            },
          });
        } else {
          // Mobile vertical scroll logic
          cardRefs.current.forEach((card, index) => {
            if (card) {
              gsap.fromTo(
                card,
                {
                  opacity: 0,
                  x: index % 2 === 0 ? -200 : 200,
                },
                {
                  opacity: 1,
                  x: 0,
                  duration: 1,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none",
                    once: true,
                  },
                }
              );
            }
          });
        }
      }, containerRef);
  
      return () => {
        ctx.revert();
      };
    }, [isDesktop, maxScrollHeight]);
  };
  
  // --- Component Definition ---
  export const ScrollCarousel = forwardRef<HTMLDivElement, ScrollCarouselProps>(
    ({ features, className, maxScrollHeight }, ref) => {
      const containerRef = useRef<HTMLDivElement>(null);
      const scrollContainerRef = useRef<HTMLDivElement>(null);
      const progressBarRef = useRef<HTMLDivElement>(null);
      const cardRefs = useRef<HTMLDivElement[]>([]);
      const [isDesktop, setIsDesktop] = useState(false);
  
      useEffect(() => {
        const checkDesktop = () => {
          setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
        };
        checkDesktop();
        window.addEventListener("resize", checkDesktop);
        return () => window.removeEventListener("resize", checkDesktop);
      }, []);
  
      useFeatureAnimations(
        containerRef,
        scrollContainerRef,
        progressBarRef,
        cardRefs,
        isDesktop,
        maxScrollHeight
      );
  
      const renderFeatureCards = (
        featureSet: FeatureItem[],
        refs: React.MutableRefObject<HTMLDivElement[]>
      ) =>
        featureSet.map((feature, index) => (
          <div
            key={index}
            ref={(el: HTMLDivElement | null) => {
              if (el) refs.current[index] = el;
            }}
            className="feature-card flex-shrink-0 w-full md:w-full h-full
            z-10 gap-4 group relative transition-all duration-300 ease-in-out"
          >
            {/* Main Card Container */}
            <div
              className={cn(
                `relative h-full p-4 lg:p-8 rounded-3xl 
                flex items-center justify-center z-10 
                transition-all duration-300 my-4`,
                `backdrop-blur-lg border text-black dark:text-white`,
                "group-hover:scale-105 centered:scale-105",
                // Different heights for mobile vs desktop
                "h-[400px] md:h-[500px]" // Adjust these heights as needed
              )}
            >
              {/* Image Container - Full image on desktop, overlay on mobile */}
              <div className="absolute inset-0 w-full h-full z-0 rounded-3xl overflow-hidden">
                <img
                  src={
                    feature.image ||
                    "https://images.pexels.com/photos/9934462/pexels-photo-9934462.jpeg"
                  }
                  alt={feature.title}
                  className={cn(
                    "w-full h-full object-cover",
                    // On mobile, add blur and dark overlay to make text readable
                    "md:blur-0",
                    !isDesktop && "blur-sm brightness-75"
                  )}
                />
              </div>
  
              {/* Content Overlay - Always visible but positioned differently */}
              <div
                className={cn(
                  "z-10 relative w-full",
                  // Different positioning for mobile vs desktop
                  isDesktop
                    ? "absolute bottom-8 left-8 right-8"
                    : "absolute inset-0 flex items-end p-6"
                )}
              >
                <div
                  className={cn(
                    `flex flex-col justify-end transition-all duration-300 ease-out`,
                    isDesktop
                      ? "text-left bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                      : "text-center w-full"
                  )}
                >
                  <h3
                    className={cn(
                      "font-bold text-white transition-all duration-300",
                      isDesktop ? "text-3xl mb-2" : "text-2xl mb-1"
                    )}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={cn(
                      "text-white",
                      isDesktop ? "text-base opacity-90" : "text-sm opacity-80"
                    )}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
  
              {/* Hover Overlay */}
              <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/5 dark:group-hover:bg-white/5 centered:bg-black/5 dark:centered:bg-white/5 rounded-2xl" />
            </div>
          </div>
        ));
  
      return (
        <section
          className={cn(
            "bg-transparent text-foreground relative overflow-hidden",
            className
          )}
          ref={ref}
        >
          <div
            ref={containerRef}
            className="relative overflow-hidden md:h-screen md:py-20 
            flex flex-col gap-0 z-10 
            lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_5%,_black_95%,transparent_100%)]"
          >
            <div
              ref={scrollContainerRef}
              className="flex flex-col md:flex-row gap-8 
              items-center h-full px-6 md:px-0"
            >
              {renderFeatureCards(features, cardRefs)}
            </div>
  
            {isDesktop && (
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-2 bg-black/30 dark:bg-white/30 z-50 overflow-hidden rounded-full">
                <div
                  ref={progressBarRef}
                  className="h-full rounded-full relative overflow-hidden transition-all duration-100"
                  style={{ width: "0%" }}
                >
                  <div className="absolute inset-0 animated-water" />
                </div>
              </div>
            )}
          </div>
          <style jsx>{`
            .animated-water {
              background: repeating-linear-gradient(
                -45deg,
                rgba(0, 0, 0, 0.7) 0%,
                rgba(0, 0, 0, 0.5) 25%,
                rgba(0, 0, 0, 0.7) 50%
              );
              background-size: 40px 40px;
              animation: waveMove 2s linear infinite;
            }
            :global(.dark) .animated-water {
              background: repeating-linear-gradient(
                -45deg,
                rgba(255, 255, 255, 0.9) 0%,
                rgba(255, 255, 255, 0.6) 25%,
                rgba(255, 255, 255, 0.9) 50%
              );
            }
            @keyframes waveMove {
              from {
                background-position: 0 0;
              }
              to {
                background-position: 40px 40px;
              }
            }
          `}</style>
        </section>
      );
    }
  );
  
  ScrollCarousel.displayName = "ScrollCarousel";
  
  export default ScrollCarousel;