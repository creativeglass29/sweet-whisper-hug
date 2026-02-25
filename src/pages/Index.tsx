import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Phone, ArrowRight, Shield, Award, Wrench, DollarSign,
  Star, ChevronRight, Layers, Grid3X3, Fence, GlassWater, DoorOpen, Maximize
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Maximize, title: "Aluminium Windows", desc: "Premium aluminium window solutions for modern homes and offices." },
  { icon: DoorOpen, title: "UPVC Doors & Windows", desc: "Energy-efficient, durable UPVC door and window installations." },
  { icon: GlassWater, title: "Glass Partitions", desc: "Elegant toughened glass partitions for commercial spaces." },
  { icon: Fence, title: "Balcony Railings", desc: "Stylish SS & glass railing systems for balconies and terraces." },
  { icon: Grid3X3, title: "SS Gates & Railings", desc: "Custom stainless steel gates and staircase railings." },
  { icon: Layers, title: "Glass Lighting Design", desc: "Innovative glass lighting and acid/crystal design work." },
];

const whyUs = [
  { icon: Award, title: "Years of Experience", desc: "Decades of expertise in aluminium & glass fabrication." },
  { icon: Shield, title: "Premium Quality", desc: "Only the finest materials and components used." },
  { icon: Wrench, title: "Precision Craft", desc: "Meticulous attention to detail in every project." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Competitive rates without compromising quality." },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Homeowner", text: "Excellent work on our villa's glass railings. The finish quality is outstanding and the team was very professional." },
  { name: "Priya Sharma", role: "Interior Designer", text: "I recommend Creative Glass to all my clients. Their precision and timely delivery make them a trusted partner." },
  { name: "Mohammed Ali", role: "Business Owner", text: "They transformed our office with beautiful glass partitions. Clean, modern, and exactly what we envisioned." },
];

const projectImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&h=400&fit=crop",
];

const Index = () => {
  useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 gradient-dark opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-transparent" />

        <div className="relative container-main px-4 md:px-8 pt-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur text-primary-foreground/90 text-xs font-medium tracking-wider uppercase mb-6 animate-fade-up">
              UPVC Doors & Windows Works
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Premium Aluminium & Glass Solutions
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Transform your spaces with expert aluminium fabrication, UPVC installations, and stunning glass work. Trusted by hundreds of residential and commercial clients across Hyderabad.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact">
                <Button size="lg" className="gradient-primary text-primary-foreground rounded-full gap-2 text-base px-8">
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="tel:+919100911580">
                <Button size="lg" variant="outline" className="rounded-full gap-2 text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Phone className="w-4 h-4" /> Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">What We Do</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Our Services</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Comprehensive aluminium, glass, and UPVC solutions for every need.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="glass-card-solid p-6 hover-lift animate-on-scroll" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 animate-on-scroll">
            <Link to="/services">
              <Button variant="outline" className="rounded-full gap-2">
                View All Services <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Why Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Why Choose Creative Glass</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, i) => (
              <div key={i} className="text-center glass-card-solid p-8 hover-lift animate-on-scroll">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-5">
                  <w.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{w.title}</h3>
                <p className="text-muted-foreground text-sm">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Portfolio</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectImages.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl aspect-[4/3] animate-on-scroll">
                <img src={img} alt={`Project ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10 animate-on-scroll">
            <Link to="/gallery">
              <Button variant="outline" className="rounded-full gap-2">
                View Full Gallery <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Testimonials</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card-solid p-8 animate-on-scroll">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-primary" />
        <div className="relative container-main text-center px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4 animate-on-scroll">
            Ready to Transform Your Space?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto animate-on-scroll">
            Get a free consultation and quote for your aluminium, glass, or UPVC project today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
            <Link to="/contact">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full gap-2 px-8">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href="tel:+919100911580">
              <Button size="lg" variant="outline" className="rounded-full gap-2 px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Phone className="w-4 h-4" /> +91 91009 11580
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
