import { Link, useLocation } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import logo from '../assets/logo_utl.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()
  const dropdownRef = useRef(null)

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // ✅ Close dropdown when route changes
  useEffect(() => {
    setActiveDropdown(null)
    setIsOpen(false)
  }, [location.pathname])

  // ✅ Nav links — add new pages here
  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'Web Development', path: '/services/web-development', icon: '🖥️' },
        { name: 'Crypto Services', path: '/services/crypto', icon: '💰' },
        { name: 'Shopping Assistance', path: '/services/shopping', icon: '🛒' },
      ]
    },
    {
      name: 'About',
      path: '/about',
      dropdown: [
        { name: 'Who Are We', path: '/about/who-we-are', icon: '👥' },
        { name: 'Values & Updates', path: '/about/values', icon: '💎' },
        { name: 'Our Vision', path: '/about/vision', icon: '🎯' },
        { name: 'FAQs', path: '/about/faqs', icon: '❓' },
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Shop', path: '/shop' },
    { name: 'Blog', path: '/blog' },
    { name: 'AI Academy', path: '/ai-learning' },
    { name: 'Contact', path: '/contact' },
  ]

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const isActive = (link) => {
    if (link.dropdown) {
      return location.pathname.startsWith(link.path)
    }
    return location.pathname === link.path
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f2c] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={logo} alt="UTL Logo" className="h-10 w-auto rounded-lg" />
            <div className="hidden sm:block">
              <div className="text-white font-black text-xs leading-tight">ULTIMATE</div>
              <div className="text-green-400 font-bold text-[10px] tracking-widest">TECH LAB</div>
            </div>
          </Link>

          {/* ── Desktop Links ── */}
          <div className="hidden md:flex items-center gap-1" ref={dropdownRef}>
            {navLinks.map((link) => (
              <div key={link.name} className="relative">

                {link.dropdown ? (
                  // ── Dropdown trigger ──
                  <div>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        isActive(link)
                          ? 'text-blue-400 bg-blue-600/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                      <span className={`text-[10px] transition-transform duration-200 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`}>
                        ▾
                      </span>
                    </button>

                    {/* ── Dropdown Menu ── */}
                    {activeDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-1 w-52 bg-[#111827] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50">
                        {/* Main page link */}
                        <Link
                          to={link.path}
                          className={`flex items-center gap-3 px-4 py-3 text-sm border-b border-white/10 transition-colors ${
                            location.pathname === link.path
                              ? 'text-blue-400 bg-blue-600/10'
                              : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <span>📋</span>
                          All {link.name}
                        </Link>
                        {/* Sub links */}
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 text-sm border-b border-white/5 last:border-0 transition-colors ${
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
                  // ── Regular link ──
                  <Link
                    to={link.path}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive(link)
                        ? 'text-blue-400 bg-blue-600/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

              </div>
            ))}
          </div>

          {/* ── Desktop Auth Buttons ── */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/login"
              className="px-4 py-2 text-gray-300 hover:text-white text-sm font-medium transition-colors rounded-lg hover:bg-white/5">
              Sign In
            </Link>
            <Link to="/signup"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all">
              Get Started
            </Link>
          </div>

          {/* ── Mobile Burger ── */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1530] border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <>
                  {/* Dropdown toggle */}
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive(link)
                        ? 'text-blue-400 bg-blue-600/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className={`text-xs transition-transform duration-200 ${
                      activeDropdown === link.name ? 'rotate-180' : ''
                    }`}>▾</span>
                  </button>

                  {/* Mobile dropdown items */}
                  {activeDropdown === link.name && (
                    <div className="ml-3 mt-1 mb-2 border-l-2 border-blue-600/30 pl-3 space-y-1">
                      {/* Main page link */}
                      <Link
                        to={link.path}
                        className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                      >
                        <span>📋</span>
                        All {link.name}
                      </Link>
                      {/* Sub links */}
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-all ${
                            location.pathname === item.path
                              ? 'text-blue-400 bg-blue-600/10'
                              : 'text-gray-400 hover:text-white hover:bg-white/5'
                          }`}
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
                  className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive(link)
                      ? 'text-blue-400 bg-blue-600/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile auth buttons */}
          <div className="flex gap-2 pt-3 border-t border-white/10 mt-3">
            <Link to="/login"
              className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded-xl text-center transition-colors hover:bg-white/10">
              Sign In
            </Link>
            <Link to="/signup"
              className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl text-center transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar