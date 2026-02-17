'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const foodImages = [
  {
    src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=800&fit=crop',
    alt: 'Fresh fish dish',
    size: 'large'
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop',
    alt: 'Cocktail',
    size: 'small'
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
    alt: 'Local produce',
    size: 'small'
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=800&fit=crop',
    alt: 'Grilled seafood',
    size: 'large'
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
    alt: 'Farm vegetables',
    size: 'small'
  }
]

export function Food() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="bg-[#4A7C59] py-24 md:py-32 relative overflow-hidden">
      {/* Rotated Badge - Amici Style */}
      <motion.div
        className="absolute top-12 right-12 md:right-24"
        initial={{ rotate: -15, opacity: 0 }}
        animate={isInView ? { rotate: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="bg-[#F5F0E6] text-[#4A7C59] px-6 py-3 rounded-full text-sm tracking-[0.2em] font-medium transform rotate-12">
          ONO
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#F5F0E6] tracking-headline mb-4">
            Fresh. Local.
          </h2>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#F5F0E6] tracking-headline mb-8">
            Delicious.
          </h2>
          
          <p className="text-[#F5F0E6]/80 text-lg md:text-xl leading-relaxed font-light">
            90% of what you eat comes from these islands. From the fisherman's 
            boat this morning to Chef Peter Merriman's kitchen tonight.
          </p>
        </motion.div>

        {/* Masonry Grid - Amici Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {foodImages.map((image, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden ${
                image.size === 'large' ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: '90%', label: 'Local Sourcing' },
            { number: '4', label: 'Islands' },
            { number: '25+', label: 'Local Farms' },
            { number: '∞', label: 'Aloha' }
          ].map((stat, index) => (
            <div key={index}>
              <p className="font-display text-4xl md:text-5xl text-[#F5F0E6] mb-2">
                {stat.number}
              </p>
              <p className="text-[#F5F0E6]/60 text-sm tracking-[0.15em]">
                {stat.label.toUpperCase()}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}