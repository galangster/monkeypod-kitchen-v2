'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.5
      }
    }
  }

  const lineVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const scrollToNext = () => {
    const nextSection = document.getElementById('ritual')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      id="hero"
    >
      {/* Background - Video with Image Fallback */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ scale }}
      >
        {/* Fallback Image (always rendered, hidden when video plays) */}
        <div 
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}
        >
          <img
            src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Hawaii sunset"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Video (renders on top when loaded) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={() => setVideoError(true)}
        >
          <source 
            src="https://videos.pexels.com/video-files/5896379/5896379-hd_1920_1080_30fps.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 h-full flex flex-col items-center justify-center px-4"
        style={{ opacity, y }}
      >
        <motion.div
          className="text-center max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="font-display text-2xl md:text-4xl lg:text-5xl text-white mb-4"
            variants={lineVariants}
          >
            There's a moment in Hawaii
          </motion.p>
          
          <motion.p
            className="font-display text-2xl md:text-4xl lg:text-5xl text-white mb-4"
            variants={lineVariants}
          >
            when the day exhales
          </motion.p>
          
          <motion.p
            className="font-display text-3xl md:text-5xl lg:text-6xl text-sunset-gold font-bold"
            variants={lineVariants}
          >
            and the evening begins
          </motion.p>

          <motion.div
            className="mt-12"
            variants={lineVariants}
          >
            <motion.button
              onClick={scrollToNext}
              className="px-8 py-4 border-2 border-white text-white font-medium tracking-wider uppercase text-sm hover:bg-white hover:text-monkeypod-dark transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enter the Lanai
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="cursor-pointer"
            onClick={scrollToNext}
          >
            <ChevronDown className="w-8 h-8 text-white/80" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
