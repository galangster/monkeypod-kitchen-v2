'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TreeLoader } from './components/TreeLoader'
import { Navigation } from './components/Navigation'
import { Hero } from './sections/Hero'
import { Ritual } from './sections/Ritual'
import { Land } from './sections/Land'
import { DayCarousel } from './sections/DayCarousel'
import { Locations } from './sections/Locations'
import { Reservations } from './sections/Reservations'
import { Footer } from './sections/Footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isLoading])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <TreeLoader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      <motion.div 
        className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        initial={false}
      >
        <Navigation />
        <main>
          <Hero />
          <Ritual />
          <Land />
          <DayCarousel />
          <Locations />
          <Reservations />
        </main>
        <Footer />
      </motion.div>
    </>
  )
}
