import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../data/products'

export default function Home() {
  const [focusedCard, setFocusedCard] = useState(null);

  useEffect(() => {
    // Scroll Reveal Animation
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

    // Stats Counter Animation
    function animateCounter(element, target) {
      const duration = 1500;
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          element.textContent = Math.floor(target);
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current);
        }
      }, 16);
    }

    const statsSection = document.querySelector('.stats-bar');
    let statsObserver;
    if (statsSection) {
      let hasAnimated = false;
      statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            const statNumbers = document.querySelectorAll('.stat__number');
            statNumbers.forEach(stat => {
              const target = parseInt(stat.getAttribute('data-target') || '0', 10);
              animateCounter(stat, target);
            });
          }
        });
      }, { threshold: 0.5 });
      statsObserver.observe(statsSection);
    }

    return () => {
      revealObserver.disconnect();
      if (statsObserver) statsObserver.disconnect();
    }
  }, []);

  return (
    <>
      <section className="hero" style={{ background: `linear-gradient(135deg, rgba(27, 58, 107, 0.8) 0%, rgba(44, 82, 130, 0.8) 100%), url('images/home.avif')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <h1 className="heading-hero hero__title">Dressing India's Workforce Since 2001</h1>
          <p className="hero__subtitle">Premium uniforms and workwear for industrial, medical, hospitality, and corporate sectors — Mumbai-based, nationwide supply.</p>
          <div className="hero__cta-row">
            <Link to="/products" className="btn-primary">Explore Products</Link>
            <Link to="/contact" className="btn-ghost">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="stats-bar">
        <div className="stats-bar__container">
          <div className="stat">
            <div className="stat__number" data-target="20">0</div>
            <div className="stat__label">Years of Experience</div>
          </div>
          <div className="stat__divider"></div>
          <div className="stat">
            <div className="stat__number" data-target="10">0</div>
            <div className="stat__label">Product Categories</div>
          </div>
          <div className="stat__divider"></div>
          <div className="stat">
            <div className="stat__number" data-target="500">0</div>
            <div className="stat__label">Happy Clients</div>
          </div>
          <div className="stat__divider"></div>
          <div className="stat">
            <div className="stat__number" data-target="99">0</div>
            <div className="stat__label">Quality Satisfaction</div>
          </div>
        </div>
      </section>

      <section className="section categories">
        <h2 className="heading-h2 section__title">Our Product Range</h2>
        <div className="categories__grid">
          {categories.map((cat, index) => (
            <Link
              key={cat.id}
              to={`/products/category/${cat.id}`}
              className={`category-card ${focusedCard === index + 1 ? 'is-focused' : ''}`}
              onMouseEnter={() => setFocusedCard(index + 1)}
              onMouseLeave={() => setFocusedCard(null)}
            >
              <div className="category-card__bg" style={{ backgroundImage: `url('${cat.image}')` }}></div>
              <div className="category-card__content">
                <h3 className="heading-h3 category-card__title">{cat.title}</h3>
                <span className="category-card__badge">{cat.badge}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section about-teaser">
        <div className="about-teaser__grid">
          <div className="about-teaser__image reveal" style={{ backgroundImage: 'url(/images/about.avif)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="about-teaser__content reveal">
            <h2 className="heading-h2">About I & S Global Enterprises</h2>
            <p className="body-text">I & S Global Enterprises is a Mumbai (Maharashtra) based company that finds its roots back in 2001. We are engaged as a manufacturer and supplier of a wide range of uniforms and workwear for various industries across India.</p>
            <p className="body-text">With our state-of-the-art manufacturing unit and dedicated team of professionals, we deliver exceptional quality products that meet the highest industry standards.</p>

            <div className="about-teaser__features">
              <div className="feature">
                <div className="feature__icon">🏭</div>
                <div className="feature__content">
                  <h4 className="heading-h3">Our Infrastructure</h4>
                  <p className="body-text">State-of-the-art manufacturing facilities equipped with modern machinery and technology.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature__icon">👥</div>
                <div className="feature__content">
                  <h4 className="heading-h3">Our People</h4>
                  <p className="body-text">Brilliant and knowledgeable team of professionals dedicated to quality excellence.</p>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn-secondary">Learn More About Us</Link>
          </div>
        </div>
      </section>

      <section className="section why-choose-us">
        <h2 className="heading-h2 section__title section__title--light">Why Choose Us?</h2>
        <div className="why-choose-us__grid">
          <div className="feature-tile reveal">
            <div className="feature-tile__icon">🏗️</div>
            <h3 className="heading-h3 feature-tile__title">Excellent Infrastructure</h3>
            <p className="feature-tile__text">Advanced manufacturing facilities with cutting-edge technology and equipment.</p>
          </div>
          <div className="feature-tile reveal">
            <div className="feature-tile__icon">⚙️</div>
            <h3 className="heading-h3 feature-tile__title">Expert Workforce</h3>
            <p className="feature-tile__text">Skilled professionals with years of experience in uniform manufacturing.</p>
          </div>
          <div className="feature-tile reveal">
            <div className="feature-tile__icon">🤝</div>
            <h3 className="heading-h3 feature-tile__title">Wide Customer Base</h3>
            <p className="feature-tile__text">Trusted by 500+ clients across multiple industries throughout India.</p>
          </div>
          <div className="feature-tile reveal">
            <div className="feature-tile__icon">💰</div>
            <h3 className="heading-h3 feature-tile__title">Competitive Pricing</h3>
            <p className="feature-tile__text">Best value for money without compromising on quality or service.</p>
          </div>
          <div className="feature-tile reveal">
            <div className="feature-tile__icon">⭐</div>
            <h3 className="heading-h3 feature-tile__title">Highest Quality Standards</h3>
            <p className="feature-tile__text">Rigorous quality control ensuring 99% customer satisfaction rate.</p>
          </div>
        </div>
      </section>

      <section className="section industries">
        <h2 className="heading-h2 section__title">Industries We Serve</h2>
        <div className="industries__grid">
          <div className="industry-pill reveal">
            <span className="industry-pill__icon">🏥</span>
            <span className="industry-pill__label">Healthcare</span>
          </div>
          <div className="industry-pill reveal">
            <span className="industry-pill__icon">🏭</span>
            <span className="industry-pill__label">Industrial</span>
          </div>
          <div className="industry-pill reveal">
            <span className="industry-pill__icon">🏨</span>
            <span className="industry-pill__label">Hospitality</span>
          </div>
          <div className="industry-pill reveal">
            <span className="industry-pill__icon">🎓</span>
            <span className="industry-pill__label">Education</span>
          </div>
          <div className="industry-pill reveal">
            <span className="industry-pill__icon">🛡️</span>
            <span className="industry-pill__label">Security</span>
          </div>
          <div className="industry-pill reveal">
            <span className="industry-pill__icon">💼</span>
            <span className="industry-pill__label">Corporate</span>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner__content">
          <h2 className="heading-h2 cta-banner__title">Ready to Outfit Your Team?</h2>
          <p className="cta-banner__subtitle">Get a custom quote tailored to your workforce requirements.</p>
          <Link to="/contact" className="btn-ghost">Get a Quote Now</Link>
        </div>
      </section>
    </>
  )
}