'use client'
import { useState } from 'react'

const quickLinks = {
  Shop: ['Indoor Plants', 'Outdoor Plants', 'O₂ Plants', 'Succulents', 'Gift Plants'],
  Company: ['About Us', 'Blog', 'Careers', 'Press', 'Sustainability'],
  Support: ['FAQs', 'Plant Care Guide', 'Shipping Info', 'Returns', 'Contact Us'],
}

const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="3.5"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Twitter/X',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-text-dark text-white">
      {/* Newsletter Banner */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-1">
                Get 15% Off Your First Order
              </h3>
              <p className="text-white/80 text-sm">
                Subscribe for plant care tips, seasonal deals, and exclusive offers.
              </p>
            </div>

            {subscribed ? (
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-6 py-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span className="text-white font-medium">You&apos;re subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex w-full md:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 md:w-64 bg-white text-text-dark px-5 py-3 rounded-l-full outline-none text-sm focus:ring-2 focus:ring-white/50"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="bg-text-dark text-white px-6 py-3 rounded-r-full text-sm font-semibold hover:bg-gray-800 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8 2 4 6 4 10c0 3 1.5 5.5 4 7v3h8v-3c2.5-1.5 4-4 4-7 0-4-4-8-8-8z" fill="white"/>
                  <path d="M12 22v-5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-heading text-xl font-bold">GreenLeaf</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Bringing the beauty of nature to your home. Premium plants, expert care tips, and delivered with love to your doorstep.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(quickLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-primary transition-colors duration-200 focus:outline-none focus:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GreenLeaf. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-500 text-xs hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
