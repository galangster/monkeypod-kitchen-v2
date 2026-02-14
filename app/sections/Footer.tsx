'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  locations: [
    { name: 'Wailea, Maui', href: '#locations' },
    { name: 'Ko Olina, Oahu', href: '#locations' },
    { name: 'Waikiki, Oahu', href: '#locations' },
    { name: "Whaler's Village", href: '#locations' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Gift Cards', href: '#gift-cards' },
    { name: 'Private Events', href: '#' },
  ],
  social: [
    { name: 'Instagram', href: 'https://instagram.com/monkeypodkitchen', icon: Instagram },
    { name: 'Facebook', href: 'https://facebook.com/mokukitchen', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/PeterMerriman', icon: Twitter },
  ],
}

export function Footer() {
  return (
    <footer className="bg-monkeypod-dark text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-3xl font-bold mb-2">Join Our Mailing List</h3>
              <p className="text-white/60">Recipes, events, and Mai Tai secrets delivered to your inbox.</p>
            </div>

            <form className="flex w-full lg:w-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-sunset-gold"
              />
              <motion.button
                type="submit"
                className="px-8 py-4 bg-sunset-gold text-monkeypod-dark font-bold rounded-xl hover:bg-white transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-3xl font-bold">monkeypod</span>
            </Link>
            <p className="text-white/60 text-sm mb-6">
              Farm-to-table dining in the heart of Hawaii. 
              Where the day ends and the evening begins.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-sunset-gold hover:text-monkeypod-dark transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Locations</h4>
            <ul className="space-y-3">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-sunset-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-sunset-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Contact</h4>
            <div className="space-y-4 text-white/60">
              <p>
                <span className="block text-white font-medium">General Inquiries</span>
                info@monkeypodkitchen.com
              </p>
              <p>
                <span className="block text-white font-medium">Private Events</span>
                events@monkeypodkitchen.com
              </p>
              <p>
                <span className="block text-white font-medium">Press</span>
                press@monkeypodkitchen.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Monkeypod Kitchen. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
