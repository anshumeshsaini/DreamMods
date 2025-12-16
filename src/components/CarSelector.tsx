import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const CarSelector = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const brands = ["BMW", "Mercedes-Benz", "Audi", "Porsche", "Lamborghini", "Ferrari", "McLaren", "Nissan", "Toyota"];
  const models: Record<string, string[]> = {
    "BMW": ["M3", "M4", "M5", "M8", "X5 M", "X6 M"],
    "Mercedes-Benz": ["AMG GT", "C63 AMG", "E63 AMG", "G63 AMG"],
    "Audi": ["RS3", "RS5", "RS6", "RS7", "R8"],
    "Porsche": ["911 GT3", "911 Turbo", "Taycan", "Cayenne Turbo"],
    "Lamborghini": ["Huracán", "Urus", "Aventador"],
    "Ferrari": ["488 GTB", "F8 Tributo", "SF90", "Roma"],
    "McLaren": ["720S", "765LT", "Artura"],
    "Nissan": ["GT-R", "370Z", "400Z"],
    "Toyota": ["Supra", "GR86", "GR Yaris"],
  };
  const years = ["2024", "2023", "2022", "2021", "2020", "2019", "2018"];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl mb-3">
              FIND YOUR <span className="text-gradient">UPGRADES</span>
            </h2>
            <p className="font-body text-muted-foreground">
              Select your vehicle to discover compatible modifications
            </p>
          </div>

          {/* Selector Card */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 carbon-texture">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Brand Select */}
              <div className="relative">
                <label className="font-digital text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Brand
                </label>
                <div className="relative">
                  <select
                    value={brand}
                    onChange={(e) => {
                      setBrand(e.target.value);
                      setModel("");
                    }}
                    className="w-full appearance-none bg-secondary border border-border rounded-md px-4 py-3 pr-10 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer"
                  >
                    <option value="">Select Brand</option>
                    {brands.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Model Select */}
              <div className="relative">
                <label className="font-digital text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Model
                </label>
                <div className="relative">
                  <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    disabled={!brand}
                    className="w-full appearance-none bg-secondary border border-border rounded-md px-4 py-3 pr-10 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select Model</option>
                    {brand && models[brand]?.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Year Select */}
              <div className="relative">
                <label className="font-digital text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Year
                </label>
                <div className="relative">
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    disabled={!model}
                    className="w-full appearance-none bg-secondary border border-border rounded-md px-4 py-3 pr-10 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select Year</option>
                    {years.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <Button
                  disabled={!brand || !model || !year}
                  className="w-full btn-mechanical gradient-racing text-primary-foreground font-body font-bold uppercase tracking-wider py-3 disabled:opacity-50"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            {/* Quick stats */}
            {brand && model && year && (
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-center gap-8 animate-fade-in">
                <div className="text-center">
                  <div className="font-digital text-xl text-primary">127</div>
                  <div className="font-body text-xs text-muted-foreground uppercase">Compatible Mods</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <div className="font-digital text-xl text-accent">45</div>
                  <div className="font-body text-xs text-muted-foreground uppercase">In Stock</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <div className="font-digital text-xl text-primary">12</div>
                  <div className="font-body text-xs text-muted-foreground uppercase">Projects Done</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarSelector;
