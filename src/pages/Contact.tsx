import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const name = form.name.trim().slice(0, 100);
    const phone = form.phone.trim().slice(0, 20);
    const email = form.email.trim().slice(0, 255);
    const message = form.message.trim().slice(0, 1000);

    if (!name || !phone || !message) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }

    const subject = encodeURIComponent(`Enquiry from ${name} - Creative Glass Website`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email || "Not provided"}\n\nMessage:\n${message}`
    );
    
    window.location.href = `mailto:creativeglass88@gmail.com?subject=${subject}&body=${body}`;
    
    toast({ title: "Opening your email client!", description: "Send the pre-filled email to complete your enquiry." });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <>
      <SEOHead
        title="Contact Us - Get a Free Quote"
        description="Contact Creative Glass & Aluminium for aluminium windows, UPVC doors, glass partitions and fabrication works. Call +91 91009 11580 or email us."
        path="/contact"
      />
      <section className="relative pt-32 pb-16 gradient-dark">
        <div className="container-main px-4 md:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Get in touch for a free consultation and quote.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3 animate-on-scroll">
              <div className="glass-card-solid p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                    <Input
                      placeholder="Phone Number"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>
                  <Input
                    placeholder="Email Address"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                  <Button type="submit" size="lg" className="gradient-primary text-primary-foreground rounded-full gap-2 w-full sm:w-auto">
                    <Send className="w-4 h-4" /> Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6 animate-on-scroll">
              <div className="glass-card-solid p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <a href="tel:+919100911580" className="flex items-start gap-3 text-sm hover:text-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+91 91009 11580</p>
                      <p className="text-muted-foreground">+91 62812 18946</p>
                    </div>
                  </a>
                  <a href="mailto:creativeglass88@gmail.com" className="flex items-start gap-3 text-sm hover:text-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">creativeglass88@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">Sy No: 37, Mallapur Village, Balapur, Kandukur Division, Medbowli, Balapur, Rangareddy</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Working Hours</p>
                      <p className="text-muted-foreground">Mon – Sat: 9:00 AM – 7:00 PM</p>
                      <p className="text-muted-foreground">Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919100911580?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>

              <p className="text-center text-sm text-muted-foreground">⚡ We respond within 2 hours during business hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-0">
        <iframe
          title="Creative Glass & Aluminium Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.5!2d78.35!3d17.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDE5JzEyLjAiTiA3OMKwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
};

export default Contact;
