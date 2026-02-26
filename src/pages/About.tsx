import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SEOHead from "@/components/SEOHead";
import { Target, Eye, CheckCircle, Users } from "lucide-react";

const About = () => {
  useScrollAnimation();

  return (
    <>
      <SEOHead
        title="About Us - Our Story & Commitment"
        description="Learn about Creative Glass & Aluminium - our mission, vision, years of expertise in aluminium fabrication and glass work in Hyderabad, Rangareddy."
        path="/about"
      />
      <section className="relative pt-32 pb-16 gradient-dark">
        <div className="container-main px-4 md:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About Us</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Building trust through quality craftsmanship and precision engineering.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Crafting Excellence in Glass & Aluminium
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Creative Glass & Aluminium has been at the forefront of premium aluminium fabrication and glass work, serving residential and commercial clients across Hyderabad and the Rangareddy district.
                </p>
                <p>
                  With years of hands-on experience, our skilled team delivers exceptional craftsmanship in every project — from sleek UPVC window installations to stunning glass railings and modern office partitions.
                </p>
                <p>
                  We combine traditional fabrication expertise with modern design sensibilities to create solutions that are not only beautiful but built to last.
                </p>
              </div>
            </div>
            <div className="animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&h=500&fit=crop"
                alt="Creative Glass & Aluminium workshop"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card-solid p-8 animate-on-scroll">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver world-class aluminium and glass solutions with unmatched quality, precision, and customer satisfaction — making premium craftsmanship accessible and affordable.
              </p>
            </div>
            <div className="glass-card-solid p-8 animate-on-scroll">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted name in aluminium and glass fabrication across Telangana, known for innovation, reliability, and exceptional finishing quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Commitment</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: CheckCircle, title: "Quality Materials", desc: "We use only premium-grade aluminium, toughened glass, and UPVC profiles." },
              { icon: Users, title: "Expert Team", desc: "Our skilled technicians bring years of experience to every installation." },
              { icon: Target, title: "Timely Delivery", desc: "Projects completed on schedule without compromising on quality." },
            ].map((v, i) => (
              <div key={i} className="glass-card-solid p-8 text-center hover-lift animate-on-scroll">
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
