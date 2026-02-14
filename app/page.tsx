'use client'

import { useState, useEffect } from 'react'
import { TreeLoader } from './components/TreeLoader'
import { Navigation } from './components/Navigation'
import { Hero } from './sections/Hero'
import { Ritual } from './sections/Ritual'
import { Land } from './sections/Land'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {/* Tree Loader */}
      {isLoading && (
        <TreeLoader onComplete={() => setIsLoading(false)} />
      )}
      
      {/* Main Content */}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />
        <main>
          <Hero />
          <Ritual />
          <Land />
          
          {/* Placeholder for remaining sections */}
          <section id="day" className="min-h-screen bg-monkeypod-green flex items-center justify-center">
            <p className="font-display text-4xl text-white">The Day Unfolds (Time Carousel) Coming Soon...</p>
          </section>
          
          <section id="locations" className="min-h-screen bg-monkeypod-cream flex items-center justify-center">
            <p className="font-display text-4xl text-monkeypod-green">The Places (3D Cards) Coming Soon...</p>
          </section>
          
          <section id="reservations" className="min-h-screen bg-sunset-deep flex items-center justify-center">
            <p className="font-display text-4xl text-white">The Invitation (Booking) Coming Soon...</p>
          </section>
        </main>
      </div>
    </>
  )
}
