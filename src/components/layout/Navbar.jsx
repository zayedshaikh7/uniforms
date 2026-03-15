import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Close menus when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const isActive = (path) => {
    const currentPath = location.pathname
    
    // Handle home page variations
    if (path === '/') {
      return (currentPath === '/') ? 'active' : ''
    }
    
    return currentPath === path ? 'active' : ''
  }

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">I & S Global Enterprises</Link>

        <div className={`navbar__menu ${isMobileMenuOpen ? 'active' : ''}`} id="navMenu">
          <Link to="/" className={`navbar__link ${isActive('/')}`}>Home</Link>
          <Link to="/about" className={`navbar__link ${isActive('/about')}`}>About</Link>
          <Link to="/products" className={`navbar__link ${isActive('/products')}`}>
            Products
          </Link>
          <Link to="/contact" className={`navbar__link ${isActive('/contact')}`}>Contact</Link>
        </div>

        <Link to="/contact" className="btn-primary navbar__cta">Get a Quote</Link>

        <button
          className="navbar__hamburger"
          id="hamburger"
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
