'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { HelpCircle } from 'lucide-react'

const faqItems = [
    {
        question: "How far in advance should I book Redx Events?",
        answer: "For large-scale weddings and corporate galas in Dubai, we recommend booking 6-12 months in advance. However, for smaller private celebrations, we can often accommodate requests with a 2-4 week lead time depending on venue availability."
    },
    {
        question: "Do you handle government permits and licenses?",
        answer: "Yes, we handle all necessary DTCM permits, entertainment licenses, and venue-specific requirements for events in Dubai and across the UAE. Our team is well-versed in local regulations to ensure a compliant and smooth event."
    },
    {
        question: "Can you work with external vendors I've already selected?",
        answer: "Absolutely. While we have a curated list of premium partners, we are happy to coordinate with your preferred vendors. We will manage the communication and logistics to ensure they integrate seamlessly into the overall event plan."
    },
    {
        question: "What is your pricing structure?",
        answer: "Our pricing is bespoke and depends on the scale, complexity, and specific requirements of your event. We typically offer a management fee based on the total project scope. Following our initial consultation, we provide a detailed proposal tailored to your budget."
    },
    {
        question: "Do you provide on-site management during the event?",
        answer: "Yes, we provide full on-site management. From the start of setup to the final strike, our dedicated event managers are on the ground to handle logistics, vendor coordination, and any real-time adjustments needed."
    }
]

export default function FAQ() {
    return (
        <section id="faq" className="bg-muted/30 py-24 lg:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
                    <div className="lg:w-1/3">
                        <div className="sticky top-24">
                            <h2 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4 text-center lg:text-left">Answering your concerns</h2>
                            <h1 className="text-foreground text-4xl font-bold tracking-tight italic font-serif text-center lg:text-left">
                                Frequently Asked Questions
                            </h1>
                            <p className="text-muted-foreground mt-6 text-lg font-light text-center lg:text-left">
                                We believe in complete transparency. If you have any other questions, feel free to reach out to our team at any time.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-2/3">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqItems.map((item, index) => (
                                <AccordionItem 
                                    key={index} 
                                    value={`item-${index}`}
                                    className="bg-background border px-6 rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/5"
                                >
                                    <AccordionTrigger className="py-6 hover:no-underline font-semibold text-lg">
                                        <div className="flex items-center gap-4">
                                            <HelpCircle className="h-5 w-5 text-primary/40 shrink-0" />
                                            <span>{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-lg font-light pb-6 leading-relaxed">
                                        <div className="pl-9">
                                            {item.answer}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
