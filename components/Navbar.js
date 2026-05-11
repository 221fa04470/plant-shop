'use client'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount] = useState(2)

  const navLinks = ['Home', 'Shop', 'About', 'Blog', 'Contact']

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8 2 4 6 4 10c0 3 1.5 5.5 4 7v3h8v-3c2.5-1.5 4-4 4-7 0-4-4-8-8-8z" fill="white"/>
                <path d="M12 22v-5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-heading text-xl font-bold text-primary">GreenLeaf</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link}
                href="#"
                className={`text-sm font-medium transition-colors duration-200 ${
                  i === 0
                    ? 'text-primary font-semibold border-b-2 border-primary pb-0.5'
                    : 'text-text-gray hover:text-primary'
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Search */}
            <button
              className="hidden sm:flex items-center gap-2 bg-bg-light px-3 py-2 rounded-full text-text-gray hover:text-primary transition-colors"
              aria-label="Search"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <span className="text-sm hidden lg:inline">Search</span>
            </button>

            {/* Cart */}
            <button
              className="relative p-2 text-text-gray hover:text-primary transition-colors"
              aria-label="Shopping cart"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-accent text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User */}
            <button
              className="p-2 text-text-gray hover:text-primary transition-colors hidden sm:block"
              aria-label="User account"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </button>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 text-text-dark"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 pt-2 bg-white border-t border-gray-100 flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`px-3 py-3 rounded-xl text-sm font-medium transition-colors ${
                i === 0
                  ? 'bg-bg-light text-primary font-semibold'
                  : 'text-text-gray hover:bg-bg-light hover:text-primary'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-2 px-3 py-3 bg-bg-light rounded-xl">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search plants..."
              className="bg-transparent text-sm outline-none flex-1 text-text-gray"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
