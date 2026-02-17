'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'

export function TestimonialToast() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show toast after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    // Auto-hide after 8 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 10000)

    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed top-4 left-4 right-4 md:left-auto md:right-6 md:w-[420px] z-50"
        >
          <a
            href="https://x.com/ridd_design"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#4A7C59]/10 p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-start gap-4">
              {/* Profile Image */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#4A7C59]/20">
                <Image
                  src="https://pbs.twimg.com/profile_images/1686209567803244544/3SRxLq9r_400x400.jpg"
                  alt="Ridd"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-display text-[#1A1A1A] text-sm font-medium">
                    Ridd
                  </span>
                  <span className="text-[#4A7C59] text-xs">@ridd_design</span>
                </div>
                <p className="text-[#1A1A1A]/80 text-sm leading-relaxed">
                  "Ridiculously creative website. Watched his MagicPath video about Dupe and this is basically what an AI-native designer looks like imo."
                </p>
                <div className="mt-2 flex items-center gap-1 text-[#4A7C59] text-xs">
                  <span>View on X</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setIsVisible(false)
                }}
                className="p-1 hover:bg-[#1A1A1A]/5 rounded-full transition-colors"
              >
                <X size={16} className="text-[#1A1A1A]/40" />
              </button>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}