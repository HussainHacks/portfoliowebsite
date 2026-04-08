'use client';

import { Badge } from '@/components/ui/badge'
import { CheckCircle2, MessageSquare, Paintbrush, Zap } from 'lucide-react'

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We begin with a deep dive into your vision. Whether it's a dream wedding or a high-impact corporate launch, we listen to your goals and constraints to build a solid foundation.",
    icon: MessageSquare,
    details: ["Requirement Analysis", "Budget Planning", "Feasibility Study"]
  },
  {
    step: "02",
    title: "Concept & Design",
    description: "Our creative team develops a bespoke theme, mood boards, and 3D floor plans. We curate every visual element to ensure it reflects your brand or personal style.",
    icon: Paintbrush,
    details: ["Thematic Styling", "Venue Sourcing", "3D Visualizations"]
  },
  {
    step: "03",
    title: "Coordination",
    description: "We handle the heavy lifting—vendor management, permits in Dubai, and meticulous scheduling. You stay informed while we ensure all pieces of the puzzle fit perfectly.",
    icon: Zap,
    details: ["Vendor Management", "Logistics Planning", "Permit Handling"]
  },
  {
    step: "04",
    title: "Execution",
    description: "The big day. Our on-site team manages every second, from setup to strike. We ensure a seamless flow, so you can focus entirely on your guests or stakeholders.",
    icon: CheckCircle2,
    details: ["On-site Supervision", "Technical AV Control", "Guest Management"]
  }
]

export default function Process() {
  return (
    <section id="process" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 text-center">
            <h2 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">The Journey</h2>
            <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-6xl italic font-serif">
                From Vision to Reality.
            </h1>
        </div>

        <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-foreground/10 md:left-1/2" />

            <div className="space-y-24">
                {processSteps.map((step, index) => (
                    <div key={index} className="relative flex flex-col md:flex-row items-center gap-12 group">
                        {/* Dot */}
                        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background border-4 border-primary z-10 transition-transform group-hover:scale-125" />

                        {/* Content */}
                        <div className={`flex-1 w-full pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:order-last md:pl-16'}`}>
                            <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                                <Badge variant="outline" className="mb-4 border-primary/20 text-primary uppercase tracking-widest px-4 py-1">Step {step.step}</Badge>
                                <h3 className="text-3xl font-bold text-foreground mb-4">{step.title}</h3>
                                <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-md">
                                    {step.description}
                                </p>
                                <div className={`mt-6 flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    {step.details.map((detail, dIndex) => (
                                        <span key={dIndex} className="text-xs font-semibold px-3 py-1 bg-foreground/5 rounded-full text-foreground/60">{detail}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Spacer for reverse layout */}
                        <div className="flex-1 hidden md:block" />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}
