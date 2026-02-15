'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const timeSlides = [
  {
    time: '8 AM',
    title: 'Morning Light',
    description: 'Start your day with island-roasted coffee and fresh tropical fruit.',
    image: 'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: '#87CEEB',
    cta: 'Breakfast Menu',
  },
  {
    time: '12 PM',
    title: 'Island Energy',
    description: 'Fresh poke bowls, crisp salads, and island-inspired sandwiches.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: '#90EE90',
    cta: 'Lunch Menu',
  },
  {
    time: '4 PM',
    title: 'Golden Hour',
    description: 'The Mai Tai moment. Handcrafted cocktails and island tapas.',
    image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: '#D4A574',
    cta: 'Happy Hour',
  },
  {
    time: '7 PM',
    title: 'Evening Glow',
    description: 'Farm-to-table dinner as the sun dips below the Pacific.',
    image: 'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: '#FF6B6B',
    cta: 'Dinner Menu',
  },
  {
    time: '9 PM',
    title: 'Night Sky',
    description: 'Nightcaps under the stars with live island music.',
    image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: '#4B0082',
    cta: 'Late Night',
  },
]

export function DayCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(timeSlides.length - 1) * 100}%`])

  return (
    <section 
      ref={containerRef}
      id="day"
      className="relative bg-monkeypod-dark"
      style={{ height: '500vh' }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Header */}
        <div className="absolute top-8 left-8 z-20">
          <span className="text-white/60 text-sm tracking-widest uppercase">
            The Day Unfolds
          </span>
        </div>

        {/* Progress Indicators */}
        <div className="absolute top-8 right-8 z-20 flex space-x-2">
          {timeSlides.map((_, i) => {
            const start = i / timeSlides.length
            const end = (i + 1) / timeSlides.length
            return (
              <div
                key={i}
                className="w-8 h-1 bg-white/20 rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full bg-sunset-gold"
                  style={{
                    scaleX: useTransform(scrollYProgress, [start, end], [0, 1]),
                    transformOrigin: 'left'
                  }}
                />
              </div>
            )
          })}
        </div>

        {/* Horizontal scroll track */}
        <div className="h-full flex items-center overflow-hidden">
          <motion.div 
            className="flex"
            style={{ x }}
          >
            {timeSlides.map((slide, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-screen h-full flex items-center justify-center px-8 lg:px-16"
              >
                {/* Gradient accent */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `radial-gradient(circle at 30% 50%, ${slide.color}40 0%, transparent 50%)`
                  }}
                />

                <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Content */}
                  <div className="text-white order-2 lg:order-1">
                    <motion.span
                      className="block text-5xl lg:text-7xl font-display font-bold mb-2"
                      style={{ color: slide.color }}
                    >
                      {slide.time}
                    </motion.span>

                    <h3 className="font-display text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
                      {slide.title}
                    </h3>

                    <p className="text-lg lg:text-xl text-white/80 mb-6 lg:mb-8 max-w-md">
                      {slide.description}
                    </p>

                    <a
                      href="#reservations"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/30 text-white font-medium rounded-lg hover:bg-white hover:text-monkeypod-dark transition-all duration-300"
                    >
                      <span>{slide.cta}</span>
                      <ChevronRight className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Image */}
                  <div className="relative order-1 lg:order-2">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-monkeypod-dark/40 via-transparent to-transparent" />
                    </div>
                    {/* Decorative ring */}
                    <div 
                      className="absolute -inset-4 rounded-3xl border-2 opacity-20 -z-10"
                      style={{ borderColor: slide.color }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm flex items-center gap-2">
          <span>Scroll to explore</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
