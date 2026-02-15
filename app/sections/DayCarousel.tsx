'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const timeSlots = [
  {
    time: '8 AM',
    title: 'Morning Light',
    description: 'Island-roasted coffee and fresh tropical fruit.',
    image: 'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#87CEEB',
  },
  {
    time: '12 PM',
    title: 'Island Energy',
    description: 'Fresh poke bowls and island-inspired sandwiches.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#90EE90',
  },
  {
    time: '4 PM',
    title: 'Golden Hour',
    description: 'The Mai Tai moment. Handcrafted cocktails.',
    image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#D4A574',
  },
  {
    time: '7 PM',
    title: 'Evening Glow',
    description: 'Farm-to-table dinner as the sun sets.',
    image: 'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#FF6B6B',
  },
  {
    time: '9 PM',
    title: 'Night Sky',
    description: 'Nightcaps under the stars with live music.',
    image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#4B0082',
  },
]

export function DayCarousel() {
  return (
    <section id="day" className="relative py-20 lg:py-28 bg-monkeypod-dark overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-12">
        <span className="text-white/60 text-sm tracking-widest uppercase">
          The Day Unfolds
        </span>
        <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mt-2">
          From Sunrise to Stars
        </h2>
      </div>

      {/* Time Slots Grid */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timeSlots.map((slot, index) => (
            <motion.div
              key={slot.time}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <img
                  src={slot.image}
                  alt={slot.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-monkeypod-dark/80 via-monkeypod-dark/20 to-transparent" />
                
                {/* Time badge */}
                <div 
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold"
                  style={{ backgroundColor: `${slot.color}30`, color: slot.color }}
                >
                  {slot.time}
                </div>
              </div>
              
              <h3 className="font-display text-xl font-bold text-white mb-2">
                {slot.title}
              </h3>
              
              <p className="text-white/70 text-sm mb-3">
                {slot.description}
              </p>
              
              <a 
                href="#reservations" 
                className="inline-flex items-center gap-1 text-sm font-medium transition-colors"
                style={{ color: slot.color }}
              >
                Reserve
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
