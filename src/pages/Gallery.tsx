import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X } from "lucide-react";

const categories = ["All", "Windows", "Doors", "Railings", "Partitions"];

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=500&fit=crop", title: "Aluminium Sliding Windows", cat: "Windows" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=500&fit=crop", title: "UPVC French Doors", cat: "Doors" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=500&fit=crop", title: "Office Glass Partitions", cat: "Partitions" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=500&fit=crop", title: "Balcony Glass Railings", cat: "Railings" },
  { src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=500&fit=crop", title: "Frameless Glass Doors", cat: "Doors" },
  { src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&h=500&fit=crop", title: "Toughened Glass Partition", cat: "Partitions" },
  { src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=500&fit=crop", title: "Duplex Villa Glass Work", cat: "Railings" },
  { src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=500&fit=crop", title: "Aluminium Casement Windows", cat: "Windows" },
  { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=500&fit=crop", title: "Glass Staircase Design", cat: "Railings" },
  { src: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&h=500&fit=crop", title: "Office Glass Cabins", cat: "Partitions" },
  { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=500&fit=crop", title: "UPVC Sliding Windows", cat: "Windows" },
  { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=500&fit=crop", title: "SS Glass Railing", cat: "Railings" },
];

const Gallery = () => {
  useScrollAnimation();
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.cat === active);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 gradient-dark">
        <div className="container-main px-4 md:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Gallery</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Explore our portfolio of premium aluminium, glass, and UPVC projects.</p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding bg-background">
        <div className="container-main">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 animate-on-scroll">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? "gradient-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer animate-on-scroll"
                onClick={() => setLightbox(i)}
              >
                <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-primary-foreground font-medium text-sm">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-primary-foreground hover:text-primary-foreground/80" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <img
            src={filtered[lightbox]?.src.replace("w=600&h=500", "w=1200&h=900")}
            alt={filtered[lightbox]?.title}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
