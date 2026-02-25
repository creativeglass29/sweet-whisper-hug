import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-dark text-primary-foreground">
      <div className="container-main section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <span className="font-bold text-lg font-display">C</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg">Creative Glass</span>
                <span className="block text-[10px] tracking-widest uppercase opacity-70">& Aluminium</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Premium aluminium & glass fabrication company providing top-quality residential and commercial solutions with precision craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/gallery", label: "Gallery" },
                { to: "/services", label: "Our Services" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Aluminium Windows</li>
              <li>UPVC Doors & Windows</li>
              <li>Glass Partitions</li>
              <li>Balcony Railings</li>
              <li>SS Railings & Gates</li>
              <li>Glass Lighting Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <a href="tel:+919100911580" className="flex items-start gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span>+91 91009 11580<br />+91 62812 18946</span>
              </a>
              <a href="mailto:creativeglass88@gmail.com" className="flex items-start gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                creativeglass88@gmail.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Sy No: 37, Mallapur Village, Balapur, Rangareddy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Creative Glass & Aluminium. All rights reserved.</p>
          <p>UPVC Doors & Windows Works</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
