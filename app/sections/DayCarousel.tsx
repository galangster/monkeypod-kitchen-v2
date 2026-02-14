'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const timeSlides = [
  {
    time: '8 AM',
    title: 'Morning Light',
    description: 'Start your day with island-roasted coffee and fresh tropical fruit.',
    image: 'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    color: '#87CEEB',
    cta: 'Breakfast Menu',
  },
  {
    time: '12 PM',
    title: 'Island Energy',
    description: 'Fresh poke bowls, crisp salads, and island-inspired sandwiches.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    color: '#90EE90',
    cta: 'Lunch Menu',
  },
  {
    time: '4 PM',
    title: 'Golden Hour',
    description: 'The Mai Tai moment. Handcrafted cocktails and island tapas.',
    image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    color: '#D4A574',
    cta: 'Happy Hour',
  },
  {
    time: '7 PM',
    title: 'Evening Glow',
    description: 'Farm-to-table dinner as the sun dips below the Pacific.',
    image: 'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    color: '#FF6B6B',
    cta: 'Dinner Menu',
  },
  {
    time: '9 PM',
    title: 'Night Sky',
    description: 'Nightcaps under the stars with live island music.',
    image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
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
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])

  return (
    <section 
      ref={containerRef}
      id="day"
      className="relative bg-monkeypod-dark"
      style={{ height: `${timeSlides.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Header */}
        <div className="absolute top-8 left-8 z-20">
          <motion.span
            className="text-white/60 text-sm tracking-widest uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            The Day Unfolds
          </motion.span>
        </div>

        {/* Progress */}
        <div className="absolute top-8 right-8 z-20 flex space-x-2">
          {timeSlides.map((_, i) => (
            <motion.div
              key={i}
              className="w-8 h-1 bg-white/20 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-sunset-gold"
                style={{
                  scaleX: useTransform(
                    scrollYProgress,
                    [i / timeSlides.length, (i + 1) / timeSlides.length],
                    [0, 1]
                  ),
                  transformOrigin: 'left'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Horizontal scroll container */}
        <motion.div 
          className="flex h-full"
          style={{ x }}
        >
          {timeSlides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-screen h-full flex items-center"
            >
              {/* Background */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${slide.color}20 0%, transparent 50%)`
                }}
              />

              <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="text-white">
                  <motion.span
                    className="inline-block text-6xl lg:text-8xl font-display font-bold mb-4"
                    style={{ color: slide.color }}
                  >
                    {slide.time}
                  </motion.span>

                  <h3 className="font-display text-4xl lg:text-6xl font-bold mb-6">
                    {slide.title}
                  </h3>

                  <p className="text-xl text-white/80 mb-8 max-w-md">
                    {slide.description}
                  </p>

                  <motion.a
                    href="#reservations"
                    className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white text-white font-medium hover:bg-white hover:text-monkeypod-dark transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{slide.cta}</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>

                {/* Image */}
                <motion.div 
                  className="relative h-[50vh] lg:h-[70vh] rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-monkeypod-dark/60 to-transparent" />
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm">
          Scroll to explore
        </div>
      </div>
    </section>
  )
}
