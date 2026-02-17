'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const locations = [
  {
    name: 'Wailea',
    tagline: 'Oceanfront',
    description: 'Sunset views over the Pacific',
    image: 'https://images.unsplash.com/photo-1571896349842-68c89332b04e?w=800&h=600&fit=crop',
    status: 'open'
  },
  {
    name: 'Ko Olina',
    tagline: 'Resort Side',
    description: 'Relaxation by the lagoon',
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&h=600&fit=crop',
    status: 'open'
  },
  {
    name: 'Waikiki',
    tagline: 'Coming Soon',
    description: 'Heart of the action',
    image: 'https://images.unsplash.com/photo-1507876466758-bc54f384809c?w=800&h=600&fit=crop',
    status: 'coming-soon'
  },
  {
    name: 'Whalers Village',
    tagline: 'Coming Soon',
    description: 'Kaanapali charm',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop',
    status: 'coming-soon'
  }
]

export function Locations() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#F5F0E6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-sm tracking-[0.3em] text-[#4A7C59] mb-4 block">
            OUR LOCATIONS
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] tracking-headline mb-4">
            Four Places,
          </h2>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] tracking-headline">
            One Ohana
          </h2>
        </motion.div>

        {/* Location Cards - Amici Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              className="group relative"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#1A1A1A]">
                {/* Image */}
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent" />
                
                {/* Status Badge */}
                {location.status === 'coming-soon' && (
                  <div className="absolute top-6 right-6">
                    <span className="bg-[#4A7C59] text-white text-xs tracking-[0.2em] px-4 py-2 rounded-full">
                      SOON
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-[#D4A574] text-sm tracking-[0.2em] mb-2">
                      {location.tagline.toUpperCase()}
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl text-white tracking-headline mb-2">
                      {location.name}
                    </h3>
                    <p className="text-white/70 text-sm tracking-wide">
                      {location.description}
                    </p>
                  </motion.div>

                  {/* Hover Arrow */}
                  <motion.div
                    className="absolute bottom-8 right-8"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white text-2xl">→</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}