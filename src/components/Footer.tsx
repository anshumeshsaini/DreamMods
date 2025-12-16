import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full gradient-racing flex items-center justify-center">
                <span className="font-display text-xl text-primary-foreground">V</span>
              </div>
              <span className="font-display text-2xl tracking-wider text-foreground">
                VELOCITY<span className="text-primary">MODS</span>
              </span>
            </div>
            <p className="font-body text-muted-foreground mb-6">
              Premium car modifications and performance upgrades. Building legends since 2009.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg mb-6">QUICK LINKS</h3>
            <ul className="space-y-3">
              {["Home", "Modifications", "Gallery", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg mb-6">SERVICES</h3>
            <ul className="space-y-3">
              {[
                "Performance Tuning",
                "Body Kits & Aero",
                "Wheel & Tyre Upgrades",
                "Interior Customization",
                "Paint Protection",
                "Full Builds",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg mb-6">CONTACT</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="font-body text-muted-foreground">
                  123 Performance Drive<br />
                  Motor City, MC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="font-body text-muted-foreground hover:text-primary transition-colors">
                  +1 234 567 890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@velocitymods.com" className="font-body text-muted-foreground hover:text-primary transition-colors">
                  info@velocitymods.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="font-body text-muted-foreground">
                  Mon - Fri: 8AM - 6PM<br />
                  Sat: 9AM - 4PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Map section */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="aspect-[21/9] md:aspect-[21/6] bg-card rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215708935!2d-73.98784368459364!3d40.75797337932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1679901234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(90%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Velocity Mods Location"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-muted-foreground">
              © {currentYear} Velocity Mods. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                Warranty Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
