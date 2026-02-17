'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  // Split headline into words for stagger animation
  const headlineWords = ["WHERE", "THE", "SUN", "MEETS", "THE", "SEA,"]
  const subHeadlineWords = ["AND", "EVERY", "MAI", "TAI", "TELLS", "A", "STORY"]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  }

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const marqueeItems = [
    "SUNSET HOUR",
    "LUNCH",
    "HAPPY HOUR", 
    "DATE NIGHT",
    "FARM TO TABLE",
    "LIVE MUSIC",
    "OCEAN VIEW",
    "FRESH CATCH"
  ]

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-[#F5F0E6] overflow-hidden"
      id="hero"
    >
      {/* Checkerboard header pattern */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-[#4A7C59] opacity-20" 
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            #4A7C59 0px,
            #4A7C59 8px,
            transparent 8px,
            transparent 16px
          )`
        }}
      />

      <motion.div 
        className="relative z-10 pt-24 pb-12 px-6 md:px-12 lg:px-24"
        style={{ opacity, y }}
      >
        {/* Main Headline - Amici Style */}
        <motion.div
          className="max-w-6xl mx-auto text-center mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="font-display text-[#1A1A1A]">
            {/* Line 1 */}
            <span className="block text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-headline leading-tight mb-2">
              {headlineWords.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-[0.3em]">
                  {word.split('').map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      className="inline-block"
                      variants={letterVariants}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </span>
            
            {/* Line 2 */}
            <span className="block text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-headline leading-tight">
              {subHeadlineWords.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-[0.3em]">
                  {word.split('').map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      className="inline-block"
                      variants={letterVariants}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </span>
          </h1>
        </motion.div>

        {/* Marquee Strip */}
        <motion.div 
          className="relative py-4 border-y border-[#1A1A1A]/10 overflow-hidden mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="flex whitespace-nowrap animate-marquee">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span 
                key={index} 
                className="text-sm md:text-base tracking-[0.2em] text-[#1A1A1A]/60 mx-8 font-light"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          className="relative max-w-5xl mx-auto aspect-[16/10] overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5F0E6] via-transparent to-transparent z-10" />
          <Image
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&h=800&fit=crop"
            alt="Sunset Mai Tai at Monkeypod"
            fill
            className="object-cover"
            priority
          />
          
          {/* Floating Badge */}
          <motion.div
            className="absolute top-8 right-8 z-20"
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ rotate: 5, scale: 1.05 }}
          >
            <div className="bg-[#4A7C59] text-white px-6 py-3 rounded-full text-xs tracking-[0.2em] font-light shadow-lg">
              ONO
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#1A1A1A]/40 text-xs tracking-[0.3em]"
          >
            SCROLL
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}