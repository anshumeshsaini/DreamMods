import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CarSelector from "@/components/CarSelector";
import ModificationCategories from "@/components/ModificationCategories";
import GallerySection from "@/components/GallerySection";
import TrustSection from "@/components/TrustSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>

        <main className="pt-20">
          <HeroSection />
          <CarSelector />
          <ModificationCategories />
          <GallerySection />
          <TrustSection />
          <BookingSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
