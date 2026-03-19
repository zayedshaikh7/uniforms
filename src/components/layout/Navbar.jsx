import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { categories } from '../../data/products'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isHoveringProducts, setIsHoveringProducts] = useState(false)
  const location = useLocation()

  // Close menus when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsSidebarOpen(false)
  }, [location.pathname])

  // Effect to manage sidebar based on hover OR toggle
  const sidebarVisible = isSidebarOpen || isHoveringProducts;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handlePlusClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (sidebarVisible) {
      setIsSidebarOpen(false);
      setIsHoveringProducts(false);
    } else {
      setIsSidebarOpen(true);
    }
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
    <>
      <nav className="navbar" id="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__logo">I & S Global Enterprises</Link>

          <div className={`navbar__menu ${isMobileMenuOpen ? 'active' : ''}`} id="navMenu">
            <Link to="/" className={`navbar__link ${isActive('/')}`}>Home</Link>
            <Link to="/about" className={`navbar__link ${isActive('/about')}`}>About</Link>
            <div 
              className="navbar__link-wrapper"
              onMouseEnter={() => setIsHoveringProducts(true)}
              onMouseLeave={() => setIsHoveringProducts(false)}
              onDragEnter={() => setIsHoveringProducts(true)}
              onDragOver={(e) => {
                e.preventDefault();
                setIsHoveringProducts(true);
              }}
              style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
            >
              <Link to="/products" className={`navbar__link ${isActive('/products')}`}>
                Products
              </Link>
              <button 
                className="navbar__plus-btn"
                onClick={handlePlusClick}
              >
                {sidebarVisible ? '−' : '+'}
              </button>
            </div>
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

      {/* Categories Sidebar */}
      <div 
        className={`category-sidebar ${sidebarVisible ? 'is-open' : ''}`}
        onMouseEnter={() => setIsHoveringProducts(true)}
        onMouseLeave={() => setIsHoveringProducts(false)}
        onDragOver={(e) => {
          e.preventDefault();
          setIsHoveringProducts(true);
        }}
      >
        <div className="category-sidebar__header">
          <Link to="/" className="sidebar-logo">
            <span className="sidebar-logo__text">I & S</span>
            <span className="sidebar-logo__subtext">UNIFORMS</span>
          </Link>
          <button className="category-sidebar__close" onClick={() => { setIsSidebarOpen(false); setIsHoveringProducts(false); }}>&times;</button>
        </div>
        <div className="category-sidebar__content">
          <nav className="sidebar-nav">
            <Link to="/" className="sidebar-nav__link">HOME</Link>
            <Link to="/about" className="sidebar-nav__link">ABOUT US</Link>
            <div className="sidebar-nav__heading" onClick={() => { setIsSidebarOpen(false); setIsHoveringProducts(false); }} style={{ cursor: 'pointer' }}>
              <span>SHOP PRODUCTS</span>
              <span className="sidebar-nav__minus">−</span>
            </div>
          </nav>
          <ul className="category-sidebar__list">
            {categories.map((cat) => (
              <li key={cat.id} className="category-sidebar__item">
                <Link to={`/products/category/${cat.id}`} className="category-sidebar__link">
                  <div className="category-sidebar__img-container">
                    <img src={cat.image} alt={cat.title} className="category-sidebar__img" />
                  </div>
                  <span className="category-sidebar__label">{cat.title.toUpperCase()}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="category-sidebar__footer">
          <Link to="/contact" className="sidebar-footer__link">
            <span className="sidebar-footer__icon">✉️</span> CONTACT US
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {sidebarVisible && <div className="sidebar-overlay" onClick={() => { setIsSidebarOpen(false); setIsHoveringProducts(false); }}></div>}
    </>
  )
}
