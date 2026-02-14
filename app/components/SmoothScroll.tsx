'use client'

import { useEffect, useState } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/lenis-react'

interface SmoothScrollProps {
  children: React.ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  
  const lenis = useLenis(({ scroll }) => {
    // Optional: track scroll progress
    // console.log(scroll)
  })

  useEffect(() => {
    // Wait for loader animation
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  )
}
