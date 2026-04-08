'use client';

import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    title: "Call Us",
    icon: Phone,
    description: "+971 4 227 7915",
    link: "tel:+97142277915"
  },
  {
    title: "Email",
    icon: Mail,
    description: "info@redxevents.com",
    link: "mailto:info@redxevents.com"
  },
  {
    title: "Location",
    icon: MapPin,
    description: "Dubai, United Arab Emirates",
    link: "https://maps.google.com/?q=Redx+Events+Management+Dubai"
  },
  {
    title: "Hours",
    icon: Clock,
    description: "Mon-Sat: 9AM - 6PM\nSun: Closed",
    link: null
  }
]

export default function Contact() {
  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
                <h2 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">Get in Touch</h2>
                <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-6xl italic font-serif mb-8">
                    Start Your Next Chapter.
                </h1>
                <p className="text-muted-foreground text-xl font-light leading-relaxed mb-12">
                    Ready to transform your vision into an extraordinary event? 
                    Our consultants are standing by to discuss your requirements and provide a bespoke proposal.
                </p>

                <div className="grid gap-8 sm:grid-cols-2">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <info.icon className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-foreground mb-1">{info.title}</h4>
                                {info.link ? (
                                    <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line">
                                        {info.description}
                                    </a>
                                ) : (
                                    <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                                        {info.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Card className="border-primary/10 shadow-2xl shadow-primary/5 rounded-3xl overflow-hidden p-8 lg:p-12 bg-muted/20">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-foreground/70">Full Name</label>
                            <input type="text" className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-light" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-foreground/70">Email Address</label>
                            <input type="email" className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-light" placeholder="john@example.com" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/70">Event Type</label>
                        <select className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-light">
                            <option>Wedding</option>
                            <option>Corporate Event</option>
                            <option>Private Party</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/70">Message</label>
                        <textarea className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-light resize-none" placeholder="Tell us about your event vision..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                        Send Inquiry
                    </button>
                    <p className="text-center text-xs text-muted-foreground mt-4">
                        By submitting this form, you agree to our terms of service and privacy policy. 
                        We typically respond within 24 business hours.
                    </p>
                </form>
            </Card>
        </div>
      </div>
    </section>
  )
}
