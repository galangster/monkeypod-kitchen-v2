'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, Phone, X } from 'lucide-react'
import { locations } from '@/lib/utils'

export function Locations() {
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null)

  return (
    <section id="locations" className="relative py-32 bg-monkeypod-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            className="inline-block text-monkeypod-light text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Our Ohana
          </motion.span>

          <motion.h2
            className="font-display text-5xl lg:text-7xl font-bold text-monkeypod-green"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            The Places
          </motion.h2>
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{ perspective: '1000px' }}
        >
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -20,
                rotateY: index < 2 ? 5 : -5,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedLocation(location)}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:shadow-monkeypod-green/20"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden"
                >
                  <img
                    src={`https://images.pexels.com/photos/${
                      index === 0 ? '258154/pexels-photo-258154.jpeg' :
                      index === 1 ? '3293148/pexels-photo-3293148.jpeg' :
                      index === 2 ? '1266831/pexels-photo-1266831.jpeg' :
                      '1179156/pexels-photo-1179156.jpeg'
                    }?auto=compress&cs=tinysrgb&w=800`}
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-monkeypod-dark/60 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-xs uppercase tracking-wider opacity-80">{location.island}</span>
                    <h3 className="font-display text-2xl font-bold">{location.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {location.features.map(feature => (
                      <span 
                        key={feature}
                        className="px-3 py-1 bg-monkeypod-green/10 text-monkeypod-green text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 text-sm text-monkeypod-dark/70">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{location.hours.lunch} / {location.hours.dinner}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>{location.phone}</span>
                    </div>
                  </div>

                  <motion.button
                    className="w-full mt-6 py-3 bg-monkeypod-green text-white font-medium rounded-lg hover:bg-monkeypod-brown transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book This Location
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Location Modal */}
      <AnimatePresence>
        {selectedLocation && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLocation(null)}
          >
            <motion.div
              className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors z-10"
                onClick={() => setSelectedLocation(null)}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="h-64 overflow-hidden">
                <img
                  src={`https://images.pexels.com/photos/${
                    selectedLocation.id === 'wailea' ? '258154' :
                    selectedLocation.id === 'ko-olina' ? '3293148' :
                    selectedLocation.id === 'waikiki' ? '1266831' :
                    '1179156'
                  }/pexels-photo-${
                    selectedLocation.id === 'wailea' ? '258154' :
                    selectedLocation.id === 'ko-olina' ? '3293148' :
                    selectedLocation.id === 'waikiki' ? '1266831' :
                    '1179156'
                  }.jpeg?auto=compress&cs=tinysrgb&w=1200`}
                  alt={selectedLocation.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <span className="text-monkeypod-light text-sm uppercase tracking-wider">{selectedLocation.island}</span>
                <h2 className="font-display text-4xl font-bold text-monkeypod-green mb-4">{selectedLocation.name}</h2>

                <div className="flex items-start space-x-2 text-monkeypod-dark/70 mb-6">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p>{selectedLocation.address}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-monkeypod-cream rounded-lg">
                    <span className="text-sm text-monkeypod-dark/60">Lunch</span>
                    <p className="font-medium">{selectedLocation.hours.lunch}</p>
                  </div>
                  <div className="p-4 bg-monkeypod-cream rounded-lg">
                    <span className="text-sm text-monkeypod-dark/60">Dinner</span>
                    <p className="font-medium">{selectedLocation.hours.dinner}</p>
                  </div>
                </div>

                <a
                  href={`https://www.opentable.com/r/monkeypod-kitchen-${selectedLocation.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-monkeypod-green text-white text-center font-medium rounded-lg hover:bg-monkeypod-brown transition-colors"
                >
                  Reserve on OpenTable
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
