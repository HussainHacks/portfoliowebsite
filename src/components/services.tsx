'use client';

import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Video, Users, Music, Utensils, Layout } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const ServiceCard = ({ title, description, icon: Icon, index }: { title: string, description: string, icon: any, index: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group border-foreground/10 relative flex flex-col p-8 transition-all hover:bg-primary/[0.02]"
    >
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
            <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-foreground text-2xl font-bold tracking-tight">{title}</h3>
        <p className="text-muted-foreground mt-4 text-lg font-light leading-relaxed">{description}</p>
    </motion.div>
)

export default function Services() {
    const services = [
        { title: "Wedding Planning", description: "Comprehensive management of your special day, from venue selection to the final walk-off.", icon: Users },
        { title: "Corporate Galas", description: "Professional production for high-stakes corporate launches, award ceremonies, and galas.", icon: Video },
        { title: "Private Celebrations", description: "Bespoke birthday parties, anniversaries, and family milestones curated to your taste.", icon: Music },
        { title: "Event Décor", description: "Editorial-grade floral arrangements, lighting design, and thematic styling.", icon: Layout },
        { title: "Production Support", description: "Technical AV management, stage construction, and live event logistics.", icon: CheckCircle2 },
        { title: "Catering Management", description: "Curated culinary experiences with top-tier partners across the UAE.", icon: Utensils },
    ]

    return (
        <section id="services" className="bg-background relative py-24 lg:py-32 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="mx-auto w-full max-w-7xl px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mb-20"
                >
                    <h2 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
                    <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-6xl italic font-serif">
                        Seamless Coordination. 
                        Exquisite Execution.
                    </h1>
                    <p className="text-muted-foreground mt-8 text-xl font-light leading-relaxed">
                        Redx Events specializes in high-end event production across Dubai. 
                        From intimate gatherings to large-scale corporate galas, we ensure every detail is perfection.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-foreground/10 rounded-3xl overflow-hidden divide-x divide-y divide-foreground/10">
                    {services.map((item, i) => (
                        <ServiceCard key={i} {...item} index={i} />
                    ))}
                </div>

                {/* Bottom Trust Quote */}
                <div className="mt-24 border-l-4 border-primary pl-10 py-4 max-w-3xl">
                    <p className="text-foreground text-2xl font-light italic leading-relaxed">
                        "Event management is not just about logistics; it's about building an atmosphere where memories are made. Our team in Dubai ensures that your vision becomes a living, breathing reality."
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                        <div className="h-0.5 w-12 bg-primary"></div>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Redx Events Management LLC</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
