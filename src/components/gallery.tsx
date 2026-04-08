'use client';

import { cn } from '@/lib/utils'

type GalleryImage = {
  src: string
  alt: string
  category: string
}

const galleryImages: GalleryImage[] = [
    {
        src: "/images/wedding.png",
        alt: "Outdoor luxury wedding in Dubai at sunset",
        category: "Weddings"
    },
    {
        src: "/images/gala.png",
        alt: "Corporate gala dinner in a premium Dubai ballroom",
        category: "Corporate"
    },
    {
        src: "/images/celebration.png",
        alt: "Private birthday celebration with Burj Marina view",
        category: "Private"
    },
    {
        src: "/images/decor.png",
        alt: "Detail of gold floral event décor",
        category: "Décor"
    },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-luxury-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 text-center">
            <h2 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">Our Selected Work</h2>
            <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-6xl italic font-serif">
                A Legacy of Excellence.
            </h1>
            <p className="text-muted-foreground mt-6 text-xl max-w-2xl mx-auto font-light">
                Explore the unforgettable experiences we've crafted for our distinguished clients in Dubai.
            </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {galleryImages.map((image, index) => (
                <div key={index} className="group relative aspect-video overflow-hidden rounded-3xl bg-muted">
                    <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-8">
                        <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{image.category}</span>
                        <h3 className="text-white text-2xl font-bold">{image.alt}</h3>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}
