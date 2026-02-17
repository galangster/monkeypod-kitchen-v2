'use client'

import { motion } from 'framer-motion'

const marqueeItems = [
  'MAHALO',
  'ALOHA', 
  'SUNSETS',
  'MAI TAIS',
  'FARM TO TABLE',
  'OHANA',
  'FRESH CATCH',
  'ISLAND TIME'
]

export function Footer() {
  return (
    <footer className="bg-[#F5F0E6] border-t border-[#1A1A1A]/10">
      {/* Marquee - Amici Style */}
      <div className="py-6 border-b border-[#1A1A1A]/10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee-slow">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <span 
              key={index} 
              className="text-xs tracking-[0.3em] text-[#1A1A1A]/40 mx-8"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl text-[#1A1A1A] tracking-headline mb-4">
              Monkeypod
            </h3>
            <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">
              Farm-to-table Hawaiian kitchen<br />
              by Chef Peter Merriman
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
            <div className="space-y-3">
              {['About', 'Locations', 'Menu', 'Private Events', 'Careers'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-[#1A1A1A]/60 text-sm tracking-wide hover:text-[#4A7C59] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          
          <div className="text-center md:text-right">
            <div className="space-y-3">
              {['Instagram', 'Facebook', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="block text-[#1A1A1A]/60 text-sm tracking-wide hover:text-[#4A7C59] transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        
        <div className="mt-16 pt-8 border-t border-[#1A1A1A]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#1A1A1A]/40 text-xs tracking-wide">
            © 2026 Monkeypod Kitchen. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-[#1A1A1A]/40 text-xs hover:text-[#4A7C59] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#1A1A1A]/40 text-xs hover:text-[#4A7C59] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}