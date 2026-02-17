'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TreeLoader } from './components/TreeLoader'
import { Hero } from './sections/Hero'

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
      <AnimatePresence mode="wait">
        {isLoading && (
          <TreeLoader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      <motion.div 
        className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        initial={false}
      >
        <main className="bg-[#F5F0E6]">
          <Hero />
        </main>
      </motion.div>
    </>
  )
}
