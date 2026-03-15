import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
  const [focusedCard, setFocusedCard] = useState(null);

  const [revealedElements, setRevealedElements] = useState(new Set());

  const toggleFocus = (id) => {
    setFocusedCard(focusedCard === id ? null : id);
  };

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-reveal-id');
          if (id) {
            setRevealedElements(prev => new Set([...prev, id]));
          }
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el, index) => {
      const id = `reveal-${index}`;
      el.setAttribute('data-reveal-id', id);
      revealObserver.observe(el);
    });

    return () => revealObserver.disconnect();
  }, []);

  const isRevealed = (index) => revealedElements.has(`reveal-${index}`);

  return (
    <>
      <section className="page-hero" style={{ background: `linear-gradient(135deg, rgba(27, 58, 107, 0.8) 0%, rgba(44, 82, 130, 0.8) 100%), url('https://images.unsplash.com/photo-1504917595217-d4dc5f9819cd?auto=format&fit=crop&q=80&w=1600')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-hero__content">
          <h1 className="heading-h1">Our Product Catalog</h1>
          <p>Browse our comprehensive range of uniforms and workwear</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <span>Products</span>
          </div>
        </div>
      </section>

      <section className="categories" style={{ padding: 'var(--space-3xl) 0' }}>
        <h2 className="heading-h2 section__title">Product Categories</h2>
        <div className="categories__grid">
          {/* 1. Corporate Uniform */}
          <div 
            className={`category-card reveal ${isRevealed(0) ? 'visible' : ''} ${focusedCard === 1 ? 'is-focused' : ''}`}
            onClick={() => toggleFocus(1)}
          >
            <div className="category-card__bg" style={{ backgroundImage: `url('/images/corprate.png')` }}></div>
            <div className="category-card__content">
              <h3 className="heading-h3 category-card__title">Corporate Uniform</h3>
              <span className="category-card__badge">Premium Quality</span>
            </div>
          </div>
          {/* 2. Industrial Uniforms */}
          <div 
            className={`category-card reveal ${isRevealed(1) ? 'visible' : ''} ${focusedCard === 2 ? 'is-focused' : ''}`}
            onClick={() => toggleFocus(2)}
          >
            <div className="category-card__bg" style={{ backgroundImage: `url('/images/industry.png')` }}></div>
            <div className="category-card__content">
              <h3 className="heading-h3 category-card__title">Industrial Uniforms</h3>
              <span className="category-card__badge">Durable Wear</span>
            </div>
          </div>
          {/* 3. Hotel Uniform */}
          <div 
            className={`category-card reveal ${isRevealed(2) ? 'visible' : ''} ${focusedCard === 3 ? 'is-focused' : ''}`}
            onClick={() => toggleFocus(3)}
          >
            <div className="category-card__bg" style={{ backgroundImage: `url('/images/hotel.png')` }}></div>
            <div className="category-card__content">
              <h3 className="heading-h3 category-card__title">Hotel Uniform</h3>
              <span className="category-card__badge">Hospitality Expert</span>
            </div>
          </div>
          {/* 4. Hospital Uniform */}
          <div 
            className={`category-card reveal ${isRevealed(3) ? 'visible' : ''} ${focusedCard === 4 ? 'is-focused' : ''}`}
            onClick={() => toggleFocus(4)}
          >
            <div className="category-card__bg" style={{ backgroundImage: `url('/images/hospital.png')` }}></div>
            <div className="category-card__content">
              <h3 className="heading-h3 category-card__title">Hospital Uniform</h3>
              <span className="category-card__badge">Medical Grade</span>
            </div>
          </div>
          {/* 5. Construction Uniform */}
          <div 
            className={`category-card reveal ${isRevealed(4) ? 'visible' : ''} ${focusedCard === 5 ? 'is-focused' : ''}`}
            onClick={() => toggleFocus(5)}
          >
            <div className="category-card__bg" style={{ backgroundImage: `url('/images/contruction.png')` }}></div>
            <div className="category-card__content">
              <h3 className="heading-h3 category-card__title">Construction Uniform</h3>
              <span className="category-card__badge">Safety First</span>
            </div>
          </div>
          {/* 6. Security & Police */}
          <div 
            className={`category-card reveal ${isRevealed(5) ? 'visible' : ''} ${focusedCard === 6 ? 'is-focused' : ''}`}
            onClick={() => toggleFocus(6)}
          >
            <div className="category-card__bg" style={{ backgroundImage: `url('/images/security.png')` }}></div>
            <div className="category-card__content">
              <h3 className="heading-h3 category-card__title">Security & Police</h3>
              <span className="category-card__badge">Public Service</span>
            </div>
          </div>
          {/* 7. Housekeeping Uniform */}
          <div 
            className={`category-card reveal ${isRevealed(6) ? 'visible' : ''} ${focusedCard === 7 ? 'is-focused' : ''}`}
            onClick={() => toggleFocus(7)}
          >
            <div className="category-card__bg" style={{ backgroundImage: `url('/images/housekeeping.png')` }}></div>
            <div className="category-card__content">
              <h3 className="heading-h3 category-card__title">Housekeeping Uniform</h3>
              <span className="category-card__badge">Facility Management</span>
            </div>
          </div>
          {/* 8. Polo T shirt */}
          <div 
            className={`category-card reveal ${isRevealed(7) ? 'visible' : ''} ${focusedCard === 8 ? 'is-focused' : ''}`}
            onClick={() => toggleFocus(8)}
          >
            <div className="category-card__bg" style={{ backgroundImage: `url('/images/polo.png')` }}></div>
            <div className="category-card__content">
              <h3 className="heading-h3 category-card__title">Polo T shirt</h3>
              <span className="category-card__badge">Casual Corporate</span>
            </div>
          </div>
          {/* 9. School Uniform */}
          <div 
            className={`category-card reveal ${isRevealed(8) ? 'visible' : ''} ${focusedCard === 9 ? 'is-focused' : ''}`}
            onClick={() => toggleFocus(9)}
          >
            <div className="category-card__bg" style={{ backgroundImage: `url('/images/school.png')` }}></div>
            <div className="category-card__content">
              <h3 className="heading-h3 category-card__title">School Uniform</h3>
              <span className="category-card__badge">Education Wear</span>
            </div>
          </div>
          {/* 10. Promotional Gift Items */}
          <div 
            className={`category-card reveal ${isRevealed(9) ? 'visible' : ''} ${focusedCard === 10 ? 'is-focused' : ''}`}
            onClick={() => toggleFocus(10)}
          >
            <div className="category-card__bg" style={{ backgroundImage: `url('/images/gift.png')` }}></div>
            <div className="category-card__content">
              <h3 className="heading-h3 category-card__title">Promotional Gift Items</h3>
              <span className="category-card__badge">Brand Identity</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner__content">
          <h2 className="heading-h2 cta-banner__title">Need Help Finding the Right Product?</h2>
          <p className="cta-banner__subtitle">Our team is ready to assist you with product selection and custom orders.</p>
          <Link to="/contact" className="btn-ghost">Contact Our Team</Link>
        </div>
      </section>
    </>
  )
}
