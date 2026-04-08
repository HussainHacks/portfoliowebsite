import Hero from '@/components/hero'
import Services from '@/components/services'
import Gallery from '@/components/gallery'
import Process from '@/components/process'
import FAQ from '@/components/faq'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import { InfiniteRibbon } from '@/components/ui/infinite-ribbon'

export const metadata = {
  title: 'Redx Events Management LLC | Premium Event Planning Dubai',
  description: 'Exquisite wedding planning, corporate galas, and private celebrations in Dubai. Redx Events brings your vision to life with luxury and precision.',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Trust Ribbon */}
      <InfiniteRibbon>
        <span>Weddings</span>
        <span className="text-primary-foreground/30">•</span>
        <span>Corporate Galas</span>
        <span className="text-primary-foreground/30">•</span>
        <span>Private Celebrations</span>
        <span className="text-primary-foreground/30">•</span>
        <span>Exhibition Stands</span>
        <span className="text-primary-foreground/30">•</span>
        <span>Technical Production</span>
        <span className="text-primary-foreground/30">•</span>
        <span>Luxury Décor</span>
        <span className="text-primary-foreground/30">•</span>
      </InfiniteRibbon>

      <Services />
      <Gallery />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
