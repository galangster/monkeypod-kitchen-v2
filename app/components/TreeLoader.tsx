'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface TreeLoaderProps {
  onComplete: () => void
}

export function TreeLoader({ onComplete }: TreeLoaderProps) {
  const [isFilling, setIsFilling] = useState(false)

  useEffect(() => {
    // Start fill animation after outline draws
    const fillTimer = setTimeout(() => {
      setIsFilling(true)
    }, 500)

    // Complete after fill animation
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 2500)

    return () => {
      clearTimeout(fillTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative w-48 h-64">
          {/* Tree SVG with mask for fill effect */}
          <svg
            viewBox="0 0 200 280"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Mask for the fill animation */}
              <mask id="treeMask">
                <rect x="0" y="0" width="200" height="280" fill="white" />
                <motion.rect
                  x="0"
                  y="280"
                  width="200"
                  height="280"
                  fill="black"
                  initial={{ y: 280 }}
                  animate={isFilling ? { y: 0 } : { y: 280 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </mask>
              
              {/* Gradient for depth */}
              <linearGradient id="treeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#5A9C69" />
                <stop offset="100%" stopColor="#4A7C59" />
              </linearGradient>
            </defs>

            {/* White outline (background) */}
            <g stroke="white" strokeWidth="2" fill="none">
              {/* Trunk */}
              <path d="M100 280 L100 180" />
              {/* Main branches */}
              <path d="M100 180 Q80 150 60 120" />
              <path d="M100 180 Q120 150 140 120" />
              <path d="M100 160 Q90 130 70 100" />
              <path d="M100 160 Q110 130 130 100" />
              <path d="M100 140 Q85 110 65 80" />
              <path d="M100 140 Q115 110 135 80" />
              {/* Secondary branches */}
              <path d="M60 120 Q45 100 35 75" />
              <path d="M60 120 Q50 95 40 70" />
              <path d="M140 120 Q155 100 165 75" />
              <path d="M140 120 Q150 95 160 70" />
              <path d="M70 100 Q55 80 45 55" />
              <path d="M70 100 Q60 75 50 50" />
              <path d="M130 100 Q145 80 155 55" />
              <path d="M130 100 Q140 75 150 50" />
              {/* Canopy outline - left side */}
              <path d="M35 75 Q25 55 30 35 Q35 20 50 15 Q65 10 80 20" />
              <path d="M45 55 Q35 40 40 25" />
              <path d="M65 80 Q55 60 60 40" />
              {/* Canopy outline - right side */}
              <path d="M165 75 Q175 55 170 35 Q165 20 150 15 Q135 10 120 20" />
              <path d="M155 55 Q165 40 160 25" />
              <path d="M135 80 Q145 60 140 40" />
              {/* Center canopy */}
              <path d="M80 20 Q100 5 120 20" />
              <path d="M50 50 Q75 30 100 35 Q125 30 150 50" />
              <path d="M40 70 Q70 45 100 50 Q130 45 160 70" />
            </g>

            {/* Green filled tree (masked) */}
            <g 
              fill="url(#treeGradient)" 
              stroke="none"
              mask="url(#treeMask)"
            >
              {/* Trunk */}
              <path d="M92 280 L92 180 Q92 175 100 175 Q108 175 108 180 L108 280 Z" />
              
              {/* Main branches */}
              <path d="M100 180 Q80 150 60 120 L65 115 Q85 145 100 175 Z" />
              <path d="M100 180 Q120 150 140 120 L135 115 Q115 145 100 175 Z" />
              <path d="M100 160 Q90 130 70 100 L75 95 Q95 125 100 155 Z" />
              <path d="M100 160 Q110 130 130 100 L125 95 Q105 125 100 155 Z" />
              <path d="M100 140 Q85 110 65 80 L70 75 Q90 105 100 135 Z" />
              <path d="M100 140 Q115 110 135 80 L130 75 Q110 105 100 135 Z" />
              
              {/* Canopy - left clusters */}
              <ellipse cx="40" cy="65" rx="25" ry="35" />
              <ellipse cx="55" cy="45" rx="20" ry="28" />
              <ellipse cx="70" cy="70" rx="22" ry="30" />
              
              {/* Canopy - right clusters */}
              <ellipse cx="160" cy="65" rx="25" ry="35" />
              <ellipse cx="145" cy="45" rx="20" ry="28" />
              <ellipse cx="130" cy="70" rx="22" ry="30" />
              
              {/* Canopy - center top */}
              <ellipse cx="100" cy="35" rx="35" ry="30" />
              <ellipse cx="85" cy="50" rx="28" ry="25" />
              <ellipse cx="115" cy="50" rx="28" ry="25" />
              <ellipse cx="100" cy="60" rx="40" ry="25" />
            </g>
          </svg>

          {/* Brand name appears after fill starts */}
          <motion.div
            className="absolute -bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: 10 }}
            animate={isFilling ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span 
              className="text-white text-xs tracking-[0.3em] font-light uppercase"
              style={{ fontFamily: 'system-ui' }}
            >
              Monkeypod
            </span>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}