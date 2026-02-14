'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function Land() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const clipPath = useTransform(
    scrollYProgress, 
    [0, 0.4], 
    ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]
  )
  
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])
  const textY = useTransform(scrollYProgress, [0.2, 0.5], [50, 0])

  return (
    <section 
      ref={containerRef}
      id="land"
      className="relative min-h-screen bg-monkeypod-cream"
    >
      {/* Koa wood texture background */}
      <div 
        className="absolute inset-0 koa-texture opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative min-h-screen flex items-center justify-center px-8 py-24">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with clip-path reveal */}
          <div className="relative h-[60vh] lg:h-[80vh] overflow-hidden rounded-2xl">
            <motion.div
              className="absolute inset-0"
              style={{ clipPath }}
            >
              <img
                src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Local farmer at dawn"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-monkeypod-green/30 to-transparent" />
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            style={{ opacity: textOpacity, y: textY }}
          >
            <motion.span
              className="inline-block text-monkeypod-light text-sm tracking-widest uppercase mb-6"
            >
              Farm to Table
            </motion.span>

            <motion.h2
              className="font-display text-4xl lg:text-6xl font-bold text-monkeypod-green mb-8 leading-tight"
            >
              We don't import 
              <br />
              <span className="text-monkeypod-brown">paradise</span>.
              <br />
              We grow it.
            </motion.h2>

            <motion.p
              className="text-lg text-monkeypod-dark/70 mb-8 max-w-md mx-auto lg:mx-0"
            >
              90% of our ingredients come from within 100 miles of our kitchens. 
              From the volcanic soil to your plate, every dish tells a story of 
              place and purpose.
            </motion.p>

            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-4 mb-8"
            >
              <div className="w-16 h-16 rounded-full bg-monkeypod-green/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-monkeypod-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <div>
                <span className="font-display text-2xl font-bold text-monkeypod-green">100</span>
                <span className="text-monkeypod-dark/60 text-sm ml-1">miles</span>
                <p className="text-sm text-monkeypod-dark/60">Local sourcing radius</p>
              </div>
            </motion.div>

            <motion.blockquote
              className="border-l-4 border-monkeypod-brown pl-6 italic text-monkeypod-dark/80"
            >
              "The best ingredients don't need to travel far to find their way 
              to your plate."
              <footer className="mt-2 text-sm text-monkeypod-dark/60 not-italic">
                — Chef Peter Merriman
              </footer>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
