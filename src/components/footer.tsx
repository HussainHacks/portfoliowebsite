'use client';

import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react'

const footerLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Process', href: '#process' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center">
            {/* Logo */}
            <div className="mb-12">
                <span className="text-3xl font-bold tracking-tighter text-white">
                    REDX<span className="text-primary">EVENTS</span>
                </span>
            </div>

            {/* Nav */}
            <nav className="mb-12 flex flex-wrap justify-center gap-x-12 gap-y-6">
                {footerLinks.map((link) => (
                    <a 
                        key={link.name} 
                        href={link.href} 
                        className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-primary transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </nav>

            {/* Socials */}
            <div className="mb-12 flex space-x-8">
                <a href="#" className="text-white/30 hover:text-primary transition-colors"><Instagram className="h-6 w-6" /></a>
                <a href="#" className="text-white/30 hover:text-primary transition-colors"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="text-white/30 hover:text-primary transition-colors"><Linkedin className="h-6 w-6" /></a>
                <a href="#" className="text-white/30 hover:text-primary transition-colors"><Twitter className="h-6 w-6" /></a>
            </div>

            {/* Legal */}
            <div className="text-center pt-12 border-t border-white/5 w-full">
                <p className="text-sm text-white/20 uppercase tracking-[0.2em] font-light">
                    © {new Date().getFullYear()} Redx Events Management LLC. Dubai, UAE. All Rights Reserved.
                </p>
                <p className="text-[10px] text-white/10 mt-4 uppercase tracking-[0.1em]">
                    Licenced by DTCM. Member of Dubai Chamber of Commerce.
                </p>
            </div>
        </div>
      </div>
    </footer>
  )
}
