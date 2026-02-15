'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function Ritual() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
  const textY = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section 
      ref={containerRef}
      id="ritual"
      className="relative min-h-screen bg-monkeypod-cream overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left: Image/Video Side - Increased to 60% */}
        <div className="lg:w-3/5 relative h-[50vh] lg:h-screen overflow-hidden">
          <motion.div 
            className="absolute inset-0"
            style={{ scale: imageScale }}
          >
            <img
              src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              alt="Mai Tai cocktail preparation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-monkeypod-cream/80 lg:to-monkeypod-cream" />
          </motion.div>
          
          {/* Ingredient hotspots */}
          <div className="absolute bottom-8 left-8 flex space-x-4">
            {['Orgeat', 'Lime', 'Rum'].map((ingredient, i) => (
              <motion.button
                key={ingredient}
                className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-xs font-medium text-monkeypod-green shadow-lg hover:scale-110 transition-transform"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {ingredient[0]}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Right: Content Side - Now 40% with centered content */}
        <div className="lg:w-2/5 flex items-center justify-center px-8 lg:px-12 py-16 lg:py-0">
          <motion.div
            className="max-w-lg w-full text-center lg:text-left"
            style={{ y: textY, opacity: textOpacity }}
          >
            <motion.span
              className="inline-block text-monkeypod-light text-sm tracking-widest uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              The Signature
            </motion.span>

            <motion.h2
              className="font-display text-5xl lg:text-7xl font-bold text-monkeypod-green mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              The Mai Tai
            </motion.h2>

            <motion.p
              className="text-lg text-monkeypod-dark/80 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Created by our mixologists using house-made orgeat, fresh lime, 
              and a blend of rums from across the Pacific. This isn't just a 
              cocktail—it's a ceremony.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="px-4 py-2 bg-sunset-gold/20 text-sunset-gold rounded-full text-sm font-medium">
                House-made Orgeat
              </span>
              <span className="px-4 py-2 bg-monkeypod-light/20 text-monkeypod-green rounded-full text-sm font-medium">
                Fresh Lime
              </span>
              <span className="px-4 py-2 bg-sunset-coral/20 text-sunset-coral rounded-full text-sm font-medium">
                Aged Rum
              </span>
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-8 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div>
                <span className="font-display text-4xl font-bold text-monkeypod-green">1,000+</span>
                <p className="text-sm text-monkeypod-dark/60">served daily</p>
              </div>
              <div className="h-12 w-px bg-monkeypod-dark/20" />
              <div>
                <span className="font-display text-4xl font-bold text-monkeypod-green">#1</span>
                <p className="text-sm text-monkeypod-dark/60">in Hawaii</p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                className="px-8 py-4 bg-monkeypod-green text-white font-medium rounded-full hover:bg-monkeypod-brown transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Full Menu
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border-2 border-monkeypod-green text-monkeypod-green font-medium rounded-full hover:bg-monkeypod-green hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                The Recipe
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
