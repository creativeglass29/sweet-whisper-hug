import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Maximize, DoorOpen, GlassWater, Fence,
  Grid3X3, Layers, Home, Lightbulb, Sparkles, Wrench
} from "lucide-react";

const services = [
  {
    icon: Maximize,
    title: "Aluminium Windows Work",
    desc: "High-quality aluminium window installations for residential and commercial buildings. We provide sliding, casement, and fixed window solutions.",
    points: ["Sliding Windows", "Casement Windows", "Fixed Glass Windows", "Bay Windows"],
  },
  {
    icon: DoorOpen,
    title: "UPVC Windows & Doors Work",
    desc: "Energy-efficient UPVC solutions that provide excellent insulation, noise reduction, and durability for modern homes.",
    points: ["UPVC Sliding Windows", "UPVC French Doors", "UPVC Casement Windows", "Multi-lock Security Systems"],
  },
  {
    icon: GlassWater,
    title: "Toughened Glass Partition Work",
    desc: "Create modern, open-plan spaces with our premium toughened glass partitions for offices and commercial interiors.",
    points: ["Frameless Glass Partitions", "Frosted Glass Dividers", "Office Cabin Partitions", "Conference Room Glass Walls"],
  },
  {
    icon: Grid3X3,
    title: "Aluminium Partition Works",
    desc: "Durable and sleek aluminium partitions for office spaces, providing modular and flexible workspace solutions.",
    points: ["Office Partitions", "Modular Aluminium Systems", "Powder-Coated Finishes", "Custom Designs"],
  },
  {
    icon: Fence,
    title: "Duplex Villas Glass Railing Work",
    desc: "Stunning glass railings for duplex villas that combine safety with contemporary aesthetics.",
    points: ["Frameless Glass Railings", "Stainless Steel & Glass", "Tempered Safety Glass", "Custom Height Options"],
  },
  {
    icon: Fence,
    title: "Balcony SS Plus Glass Railing Work",
    desc: "Premium stainless steel and glass railing combinations for balconies, offering unobstructed views.",
    points: ["SS 304 Grade Steel", "12mm Toughened Glass", "Weather Resistant", "Anti-corrosion Coating"],
  },
  {
    icon: Home,
    title: "Staircase SS Plain Railing",
    desc: "Elegant stainless steel railings for staircases with modern designs and superior finishing.",
    points: ["Plain SS Railings", "Hairline Finish", "Mirror Polish", "Custom Designs"],
  },
  {
    icon: Grid3X3,
    title: "Stainless Steel SS Home Main Gate",
    desc: "Secure and stylish stainless steel main gates designed to make a lasting first impression.",
    points: ["Sliding Gates", "Swing Gates", "Motorized Options", "Custom Patterns"],
  },
  {
    icon: Lightbulb,
    title: "Glass Lighting Design Work",
    desc: "Innovative glass lighting solutions that create ambient, modern atmospheres in any space.",
    points: ["Decorative Glass Panels", "LED Glass Lighting", "Backlit Glass Features", "Custom Designs"],
  },
  {
    icon: Sparkles,
    title: "Acid & Crystal Design Work",
    desc: "Artistic acid-etched and crystal design glass work for decorative interiors and premium finishes.",
    points: ["Acid Etched Glass", "Crystal Pattern Glass", "Decorative Glass Panels", "Custom Art Glass"],
  },
  {
    icon: Wrench,
    title: "All Fabrication Works",
    desc: "Complete aluminium and metal fabrication services for custom projects of any scale.",
    points: ["Custom Fabrication", "Structural Work", "Welding & Assembly", "On-site Installation"],
  },
];

const Services = () => {
  useScrollAnimation();

  return (
    <>
      <SEOHead
        title="Our Services - Aluminium, Glass & UPVC Solutions"
        description="Explore our services: aluminium windows, UPVC doors, toughened glass partitions, SS railings, glass lighting, and custom fabrication works in Hyderabad."
        path="/services"
      />
      <section className="relative pt-32 pb-16 gradient-dark">
        <div className="container-main px-4 md:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Comprehensive aluminium, glass, and UPVC solutions tailored to your needs.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main space-y-8">
          {services.map((s, i) => (
            <div key={i} className={`glass-card-solid overflow-hidden animate-on-scroll ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className="flex flex-col lg:flex-row gap-0">
                <div className={`flex-1 p-8 md:p-10 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <s.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {s.points.map((p, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="gradient-primary text-primary-foreground rounded-full gap-2">
                      Get a Quote <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
