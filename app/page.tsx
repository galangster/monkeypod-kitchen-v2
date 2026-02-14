'use client'

import { useState, useEffect } from 'react'
import { TreeLoader } from './components/TreeLoader'
import { Navigation } from './components/Navigation'
import { Hero } from './sections/Hero'

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
          
          {/* Placeholder for next sections */}
          <section id="ritual" className="min-h-screen bg-monkeypod-cream flex items-center justify-center">
            <p className="font-display text-4xl text-monkeypod-green">The Ritual Section Coming Soon...</p>
          </section>
        </main>
      </div>
    </>
  )
}
