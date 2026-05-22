import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo_utl.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  // ✅ Main nav links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasDropdown: true, dropdown: 'services' },
    { name: 'About', path: '/about', hasDropdown: true, dropdown: 'about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Shop', path: '/shop' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  // ✅ About dropdown links
  const aboutLinks = [
    { name: 'Who Are We', path: '/about/who-we-are', icon: '👥' },
    { name: 'Values & Updates', path: '/about/values', icon: '💎' },
    { name: 'Our Vision', path: '/about/vision', icon: '🎯' },
    { name: 'FAQs', path: '/about/faqs', icon: '❓' },
  ]

  // ✅ Services dropdown links
  // To add a new service, add it here and create its page
  const servicesLinks = [
    { name: 'Web Development', path: '/services/web-development', icon: '🖥️' },
    { name: 'Crypto Services', path: '/services/crypto', icon: '💰' },
    { name: 'Shopping Assistance', path: '/services/shopping', icon: '🛒' },
  ]

  // ✅ Helper to check which dropdown to open/close
  const handleMouseEnter = (dropdown) => {
    if (dropdown === 'services') setServicesOpen(true)
    if (dropdown === 'about') setAboutOpen(true)
  }

  const handleMouseLeave = (dropdown) => {
    if (dropdown === 'services') setServicesOpen(false)
    if (dropdown === 'about') setAboutOpen(false)
  }

  // ✅ Check if dropdown is open
  const isDropdownOpen = (dropdown) => {
    if (dropdown === 'services') return servicesOpen
    if (dropdown === 'about') return aboutOpen
    return false
  }

  // ✅ Get correct links for each dropdown
  const getDropdownLinks = (dropdown) => {
    if (dropdown === 'services') return servicesLinks
    if (dropdown === 'about') return aboutLinks
    return []
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f2c] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Ultimate Tech Lab Logo"
              className="h-12 w-auto rounded-lg"
            />
            <div className="hidden sm:block">
              <div className="text-white font-black text-sm leading-tight tracking-wide">
                ULTIMATE
              </div>
              <div className="text-green-400 font-bold text-[11px] tracking-widest">
                TECH LAB
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
<div className="hidden md:flex items-center gap-6">
  {navLinks.map((link) => (
    <div key={link.name} className="relative">
      {link.hasDropdown ? (
        <div
          onMouseEnter={() => handleMouseEnter(link.dropdown)}
          onMouseLeave={() => handleMouseLeave(link.dropdown)}
        >
          <button
            className={`flex items-center gap-1 text-sm font-medium transition-colors ${
              location.pathname.startsWith(link.path)
                ? 'text-blue-400'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            {link.name}
            <span className={`text-xs transition-transform duration-200 ${
              isDropdownOpen(link.dropdown) ? 'rotate-180' : ''
            }`}>
              ▾
            </span>
          </button>

          {/* Invisible bridge to prevent gap trigger */}
          {isDropdownOpen(link.dropdown) && (
            <div className="absolute top-full left-0 w-full h-3" />
          )}

          {isDropdownOpen(link.dropdown) && (
            <div className="absolute top-full left-0 w-52 bg-[#111827] border border-white/10 rounded-xl shadow-xl overflow-hidden"
              style={{ marginTop: '12px' }}>
              {getDropdownLinks(link.dropdown).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors border-b border-white/5 last:border-0 ${
                    location.pathname === item.path
                      ? 'text-blue-400 bg-blue-600/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link
          to={link.path}
          className={`text-sm font-medium transition-colors ${
            location.pathname === link.path
              ? 'text-blue-400'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          {link.name}
        </Link>
      )}
    </div>
  ))}
</div>

          {/* Get Started Button */}
          {/* Auth buttons */}
<div className="hidden md:flex items-center gap-3">
  <Link
    to="/login"
    className="px-4 py-2 text-gray-300 hover:text-white text-sm font-medium transition-colors"
  >
    Sign In
  </Link>
  <Link
    to="/signup"
    className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all"
  >
    Get Started
  </Link>
</div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 pt-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <>
                    {/* Dropdown toggle on mobile */}
                    <button
                      onClick={() => {
                        if (link.dropdown === 'services') setServicesOpen(!servicesOpen)
                        if (link.dropdown === 'about') setAboutOpen(!aboutOpen)
                      }}
                      className="w-full flex items-center justify-between px-2 py-2 text-gray-300 text-sm font-medium rounded-lg hover:bg-white/5"
                    >
                      {link.name}
                      <span className={`text-xs transition-transform duration-200 ${
                        isDropdownOpen(link.dropdown) ? 'rotate-180' : ''
                      }`}>▾</span>
                    </button>

                    {/* Mobile dropdown items */}
                    {isDropdownOpen(link.dropdown) && (
                      <div className="ml-4 mt-1 space-y-1 border-l border-blue-600/30 pl-3">
                        {getDropdownLinks(link.dropdown).map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => {
                              setIsOpen(false)
                              setServicesOpen(false)
                              setAboutOpen(false)
                            }}
                            className="flex items-center gap-2 py-2 text-gray-400 hover:text-white text-sm transition-colors"
                          >
                            <span>{item.icon}</span>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-2 py-2 text-gray-300 hover:text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-3 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg text-center"
            >
              Get Started
            </Link>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar