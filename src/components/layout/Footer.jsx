import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__col">
          <h3 className="footer__logo">I & S Global Enterprises</h3>
          <p className="footer__tagline">Dressing India's workforce with quality and pride since 2001.</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Product Categories</h4>
          <ul className="footer__links">
            <li><Link to="/products/category/industrial">Industrial Safety</Link></li>
            <li><Link to="/products/category/hospital">Medical & Healthcare</Link></li>

            <li><Link to="/products/category/corporate">Corporate Wear</Link></li>
            <li><Link to="/products/category/polo-tshirts">Polo Tshirts</Link></li>
            <li><Link to="/products/category/security">Security/Police/Army</Link></li>
            <li><Link to="/products/category/home-service">Home Service</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Contact Info</h4>
          <div className="footer__contact">
            <p><strong>Mr. Ataullah Ansari</strong></p>
            <p>
              <a 
                href="https://www.google.com/maps/search/I+%26+S+Global+Enterprises+Room+No.+1,+Sector+A+Line,+Cheeta+Camp+Trombay,+Mankhurd,+Mumbai,+Maharashtra,+400088,+India" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                A Sector, K-2 Line, Room-6<br/>Cheeta Camp Trombay<br/>Mumbai, Maharashtra – 400088
              </a>
            </p>
            <p>📞 +91-7400385575<br/>📞 +91-7400385574<br/>📞 +91-8976950228</p>
            <p>✉️ iandsglobal11@gmail.com<br/>✉️ ansariataullah94@gmail.com</p>
            <p>🌐 www.iandsglobalenterprises.in</p>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; 2024 I & S Global Enterprises. All Rights Reserved. | www.iandsglobalenterprises.in</p>
      </div>
    </footer>
  )
}
