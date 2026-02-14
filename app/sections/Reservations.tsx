'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Phone } from 'lucide-react'
import { locations } from '@/lib/utils'

export function Reservations() {
  const [formData, setFormData] = useState({
    location: locations[0].id,
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    partySize: '2',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const selectedLocation = locations.find(l => l.id === formData.location)

  return (
    <section id="reservations" className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Evening ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-monkeypod-dark/70 via-monkeypod-dark/50 to-monkeypod-dark/70" />
      </div>

      <div className="relative z-10 w-full max-w-xl mx-auto px-8 py-24">
        {!isSuccess ? (
          <>
            <motion.div
              className="text-center text-white mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="text-white/60 text-sm tracking-widest uppercase">
                Join Us
              </span>
              <h2 className="font-display text-5xl font-bold mt-2">
                Reserve Your Table
              </h2>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {/* Location */}
              <div className="mb-6">
                <label className="block text-white/80 text-sm mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" /
                  Location
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-sunset-gold appearance-none cursor-pointer"
                >
                  {locations.map(location => (
                    <option key={location.id} value={location.id} className="text-monkeypod-dark">
                      {location.name}, {location.island}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div className="mb-6">
                <label className="block text-white/80 text-sm mb-2 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" /
                  Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-sunset-gold"
                />
              </div>

              {/* Time & Party Size */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <label className="block text-white/80 text-sm mb-2 flex items-center">
                    <Clock className="w-4 h-4 mr-2" /
                    Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-sunset-gold appearance-none cursor-pointer"
                  >
                    {['11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map(time => (
                      <option key={time} value={time} className="text-monkeypod-dark">
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/80 text-sm mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-2" /
                    Party
                  </label>
                  <select
                    value={formData.partySize}
                    onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-sunset-gold appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(size => (
                      <option key={size} value={size} className="text-monkeypod-dark">
                        {size} {size === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-sunset-gold text-monkeypod-dark font-bold rounded-xl hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Finding your table...
                  </span>
                ) : (
                  'Find a Table'
                )}
              </motion.button>

              {/* OpenTable Link */}
              <p className="text-center text-white/60 text-sm mt-6">
                Or call{' '}
                <a href={`tel:${selectedLocation?.phone.replace(/\D/g, '')}`} className="text-sunset-gold hover:underline">
                  {selectedLocation?.phone}
                </a>
              </p>
            </motion.form>
          </>
        ) : (
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-sunset-gold/20 flex items-center justify-center">
              <svg className="w-12 h-12 text-sunset-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="font-display text-4xl font-bold mb-4">See you soon!</h2>
            <p className="text-white/80 mb-8">
              Your table at {selectedLocation?.name} is being prepared.
              <br />
              Redirecting to OpenTable to confirm...
            </p>

            <motion.a
              href={`https://www.opentable.com/r/monkeypod-kitchen-${formData.location}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-sunset-gold text-monkeypod-dark font-bold rounded-xl hover:bg-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Complete on OpenTable
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  )
}
