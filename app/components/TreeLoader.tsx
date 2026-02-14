'use client'

import { motion } from 'framer-motion'

interface TreeLoaderProps {
  onComplete?: () => void
}

export function TreeLoader({ onComplete }: TreeLoaderProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-monkeypod-cream"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      onAnimationComplete={onComplete}
    >
      <div className="relative w-48 h-48">
        {/* Monkeypod Tree SVG */}
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Tree trunk */}
          <motion.path
            d="M100 180 C100 180 95 160 98 140 C100 120 95 100 100 80"
            stroke="#8B4513"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          
          {/* Main branches */}
          <motion.path
            d="M100 100 C80 90 60 95 40 85 M100 90 C120 80 140 85 160 75 M100 80 C85 70 70 75 55 65"
            stroke="#8B4513"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          />
          
          {/* Canopy - multiple ellipses for leaves */}
          {[
            { cx: 100, cy: 60, rx: 50, ry: 25, delay: 1.0 },
            { cx: 70, cy: 70, rx: 30, ry: 18, delay: 1.1 },
            { cx: 130, cy: 70, rx: 30, ry: 18, delay: 1.2 },
            { cx: 50, cy: 80, rx: 25, ry: 15, delay: 1.3 },
            { cx: 150, cy: 80, rx: 25, ry: 15, delay: 1.4 },
            { cx: 100, cy: 40, rx: 35, ry: 20, delay: 1.5 },
          ].map((leaf, i) => (
            <motion.ellipse
              key={i}
              cx={leaf.cx}
              cy={leaf.cy}
              rx={leaf.rx}
              ry={leaf.ry}
              fill="#6B8E5A"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: leaf.delay,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* Text */}
          <motion.text
            x="100"
            y="195"
            textAnchor="middle"
            className="font-display text-[10px] fill-monkeypod-brown"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.0 }}
          >
            MONKEYPOD
          </motion.text>
        </svg>
      </div>
    </motion.div>
  )
}
