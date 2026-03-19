import { useEffect, useState, useRef } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { categories } from '../data/products'

export default function Products() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [focusedCard, setFocusedCard] = useState(null);
  const itemsSectionRef = useRef(null);

  const selectedCategory = categories.find(c => c.id === categoryId);

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });

    if (selectedCategory && itemsSectionRef.current) {
      setTimeout(() => {
        itemsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }

    return () => revealObserver.disconnect();
  }, [selectedCategory]);

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

      <section className="categories" style={{ padding: 'var(--space-xl) 0' }}>
        <div className="container">
          <h2 className="heading-h2 section__title">Product Categories</h2>
          <div className="categories__grid">
            {categories.map((cat, index) => (
              <div
                key={cat.id}
                onClick={() => navigate(`/products/category/${cat.id}`)}
                className={`category-card ${focusedCard === index + 1 ? 'is-focused' : ''} ${categoryId === cat.id ? 'is-active' : ''}`}
                onMouseEnter={() => setFocusedCard(index + 1)}
                onMouseLeave={() => setFocusedCard(null)}
                style={{ cursor: 'pointer' }}
              >
                <div className="category-card__bg" style={{ backgroundImage: `url('${cat.image}')` }}></div>
                <div className="category-card__content">
                  <h3 className="heading-h3 category-card__title">{cat.title}</h3>
                  <span className="category-card__badge">{cat.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedCategory && (
        <section ref={itemsSectionRef} className="category-items" style={{ padding: 'var(--space-2xl) 0', background: 'var(--color-bg-mid)' }}>
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
              <h2 className="heading-h2">{selectedCategory.title}</h2>
              <p className="body-text" style={{ maxWidth: '700px', margin: 'var(--space-md) auto 0' }}>
                Explore our full range of high-quality {selectedCategory.title.toLowerCase()} specifically designed for professional environments.
              </p>
            </div>
            <div className="items-grid">
              {selectedCategory.items.map((item, index) => (
                <div
                  key={index}
                  className="item-card reveal visible"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="item-card__image-wrapper">
                    <img src={item.image} alt={item.name} className="item-card__image" loading="lazy" />
                  </div>
                  <div className="item-card__content">
                    <h3 className="item-card__title">{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
