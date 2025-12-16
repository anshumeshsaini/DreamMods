import { Star, Award, Shield, Users } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Johnson",
    car: "BMW M5 Owner",
    rating: 5,
    text: "Absolutely incredible work on my M5. The Stage 2 tune and exhaust completely transformed the driving experience. Professional team that truly understands performance.",
  },
  {
    name: "Sarah Chen",
    car: "Porsche 911 GT3",
    rating: 5,
    text: "The attention to detail is unmatched. From the carbon fiber aero package to the custom suspension setup, every modification was executed perfectly.",
  },
  {
    name: "David Mueller",
    car: "Mercedes AMG GT",
    rating: 5,
    text: "Best tuning shop I've worked with. They took my vision and made it reality. The car now looks and performs exactly how I imagined.",
  },
];

const partners = [
  "AKRAPOVIČ",
  "BBS",
  "BREMBO",
  "KW",
  "RECARO",
  "SUNTEK",
];

const stats = [
  { icon: Users, value: "2,500+", label: "Cars Modified" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: Shield, value: "100%", label: "Satisfaction" },
];

const TrustSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-card border border-border rounded-lg card-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
              <div className="font-digital text-3xl md:text-4xl text-gradient mb-2">
                {stat.value}
              </div>
              <div className="font-body text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="font-digital text-xs uppercase tracking-widest text-primary mb-4 block">
              Client Reviews
            </span>
            <h2 className="font-display text-4xl md:text-5xl">
              TRUSTED BY <span className="text-gradient">ENTHUSIASTS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-card border border-border rounded-lg p-6 card-lift"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full gradient-racing flex items-center justify-center">
                    <span className="font-display text-sm text-primary-foreground">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-body font-semibold">{testimonial.name}</div>
                    <div className="font-digital text-xs text-muted-foreground">
                      {testimonial.car}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="text-center">
          <span className="font-digital text-xs uppercase tracking-widest text-muted-foreground mb-8 block">
            Official Partners
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div
                key={partner}
                className="font-display text-2xl md:text-3xl text-muted-foreground/50 hover:text-primary transition-colors cursor-pointer"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-12 border-t border-border">
          <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-md">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-body text-sm">ISO 9001 Certified</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-md">
            <Award className="w-5 h-5 text-accent" />
            <span className="font-body text-sm">Official Dealer Network</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-md">
            <Star className="w-5 h-5 text-primary" />
            <span className="font-body text-sm">5-Year Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
