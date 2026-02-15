'use client'

import { motion } from 'framer-motion'

export function Land() {
  return (
    <section 
      id="land"
      className="relative min-h-screen bg-monkeypod-cream overflow-hidden"
    >
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative min-h-screen flex items-center px-8 py-24">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div 
            className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Local Hawaiian farm"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-monkeypod-green/20 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-monkeypod-light text-sm tracking-widest uppercase mb-6">
              Farm to Table
            </span>

            <h2 className="font-display text-4xl lg:text-6xl font-bold text-monkeypod-green mb-8 leading-tight">
              We don't import 
              <br />
              <span className="text-monkeypod-brown">paradise</span>.
              <br />
              We grow it.
            </h2>

            <p className="text-lg text-monkeypod-dark/70 mb-8 max-w-md mx-auto lg:mx-0">
              90% of our ingredients come from within 100 miles of our kitchens. 
              From the volcanic soil to your plate, every dish tells a story of 
              place and purpose.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
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
            </div>

            <blockquote className="border-l-4 border-monkeypod-brown pl-6 italic text-monkeypod-dark/80">
              "The best ingredients don't need to travel far to find their way 
              to your plate."
              <footer className="mt-2 text-sm text-monkeypod-dark/60 not-italic">
                — Chef Peter Merriman
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
