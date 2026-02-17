'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const locations = ['Wailea', 'Ko Olina', 'Waikiki', 'Whalers Village']

export function Reservations() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [selectedLocation, setSelectedLocation] = useState('')

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#F5F0E6]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          className="border-2 border-[#1A1A1A]/10 p-8 md:p-12 lg:p-16 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Corner Decorations - Amici Style */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#4A7C59]" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#4A7C59]" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#4A7C59]" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#4A7C59]" />

          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm tracking-[0.3em] text-[#4A7C59] mb-4">
              BOOK YOUR TABLE
            </p>            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] tracking-headline mb-2">
              Aloha!
            </h2>
            
            <p className="text-[#1A1A1A]/60 italic">
              For all reservation inquiries
            </p>
          </motion.div>

          {/* Steps - Amici Style */}
          <div className="space-y-8 mb-12">
            {/* Step 1 */}
            <motion.div
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="font-display text-4xl text-[#4A7C59]">01</span>
              <div className="flex-1">
                <h3 className="text-[#1A1A1A] text-lg tracking-wide mb-3">
                  Choose Location
                </h3>
                <div className="flex flex-wrap gap-3"
                >
                  {locations.map((location) => (
                    <button
                      key={location}
                      onClick={() => setSelectedLocation(location)}
                      className={`px-4 py-2 text-sm tracking-wide transition-all duration-300 ${
                        selectedLocation === location
                          ? 'bg-[#4A7C59] text-white'
                          : 'bg-transparent border border-[#1A1A1A]/20 text-[#1A1A1A] hover:border-[#4A7C59]'
                      }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>              </div>
            </motion.div>

            {/* Step 2 */}
            
            <motion.div
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="font-display text-4xl text-[#4A7C59]">02</span>
              <div className="flex-1">
                <h3 className="text-[#1A1A1A] text-lg tracking-wide mb-3">
                  Party Size
                </h3>
                <p className="text-[#1A1A1A]/60 text-sm">
                  Large groups welcome (15-25 people) — contact us for special arrangements
                </p>
              </div>
            </motion.div>
          </div>

          {/* CTA Button - Amici Style */}
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="https://www.opentable.com/r/monkeypod-kitchen-wailea-wailea"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#4A7C59] text-white px-12 py-4 text-sm tracking-[0.2em] hover:bg-[#3D6B4A] transition-colors duration-300"
            >
              BOOK WITH OPENTABLE
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}