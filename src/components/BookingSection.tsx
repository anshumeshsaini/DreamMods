import { useState } from "react";
import { Calendar, Phone, MessageCircle, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const services = [
  "Performance Tuning",
  "Exterior Modifications",
  "Interior Upgrades",
  "Wheel & Tyre Fitment",
  "Paint Protection Film",
  "Full Custom Build",
];

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carBrand: "",
    carModel: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      carBrand: "",
      carModel: "",
      service: "",
      date: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info column */}
          <div>
            <span className="font-digital text-xs uppercase tracking-widest text-primary mb-4 block">
              Get Started
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              BOOK YOUR <span className="text-gradient">TRANSFORMATION</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Ready to elevate your ride? Schedule a consultation with our experts
              and let's build something extraordinary together.
            </p>

            {/* Quick contact options */}
            <div className="space-y-4 mb-8">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg gradient-racing flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-body font-semibold group-hover:text-primary transition-colors">
                    Call Us Directly
                  </div>
                  <div className="font-digital text-sm text-muted-foreground">
                    +1 234 567 890
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-body font-semibold group-hover:text-accent transition-colors">
                    WhatsApp Chat
                  </div>
                  <div className="font-digital text-sm text-muted-foreground">
                    Quick Response
                  </div>
                </div>
              </a>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              {[
                "Free initial consultation",
                "Detailed quote within 24 hours",
                "Flexible financing options",
                "Pick-up & delivery service",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-body text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form column */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-digital text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary border border-border rounded-md px-4 py-3 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="font-digital text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary border border-border rounded-md px-4 py-3 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone & Car row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-digital text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary border border-border rounded-md px-4 py-3 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+1 234 567 890"
                  />
                </div>
                <div>
                  <label className="font-digital text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Car Brand & Model *
                  </label>
                  <input
                    type="text"
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary border border-border rounded-md px-4 py-3 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="BMW M4 2023"
                  />
                </div>
              </div>

              {/* Service & Date row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-digital text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Service Type *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary border border-border rounded-md px-4 py-3 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select Service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-digital text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-secondary border border-border rounded-md px-4 py-3 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="font-digital text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Additional Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-secondary border border-border rounded-md px-4 py-3 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell us about your project vision..."
                />
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full btn-mechanical gradient-racing text-primary-foreground font-body font-bold text-lg uppercase tracking-wider py-6"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Booking Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
