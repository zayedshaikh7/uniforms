import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function About() {
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

    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__content">
          <h1 className="heading-h1">About Us</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ margin: '0 auto' }}>
          <div className="grid-2-1">
            <div className="reveal" style={{
              height: 'var(--logo-height, 400px)',
              borderRadius: 'var(--card-radius)',
              backgroundImage: 'url(\'/images/logo.png\')',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'transparent',
              mixBlendMode: 'multiply',
              padding: '0'
            }}></div>
            <div className="reveal">
              <h2 className="heading-h2 text-center-mobile" style={{ marginBottom: 'var(--space-lg)' }}>Company Overview</h2>
              <p className="body-text" style={{ marginBottom: 'var(--space-md)', color: 'var(--color-text-muted)' }}>I & S Global Enterprises is a Mumbai (Maharashtra) based company that finds its roots back in 2001. We are engaged as a manufacturer and supplier of a wide range of uniforms and workwear for various industries across India.</p>
              <p className="body-text" style={{ marginBottom: 'var(--space-md)', color: 'var(--color-text-muted)' }}>With our state-of-the-art manufacturing unit and dedicated team of professionals, we deliver exceptional quality products that meet the highest industry standards. Our commitment to excellence has made us a trusted partner for businesses across multiple sectors.</p>
              <p className="body-text" style={{ color: 'var(--color-text-muted)' }}>Located in Mumbai's Trombay area, we serve clients nationwide with custom-made uniforms tailored to specific industry requirements. Our product range spans industrial workwear, medical uniforms, hospitality attire, corporate wear, and specialty uniforms.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-mid)' }}>
        <div className="container" style={{ margin: '0 auto' }}>
          <h2 className="heading-h2 section__title">Our Infrastructure</h2>
          <div className="grid-3">
            <div className="reveal" style={{ background: 'white', padding: 'var(--space-xl)', borderRadius: 'var(--card-radius)', boxShadow: 'var(--shadow-card)', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>🏭</div>
              <h3 className="heading-h3" style={{ marginBottom: 'var(--space-md)' }}>Manufacturing Unit</h3>
              <p className="body-text" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-small)' }}>State-of-the-art production facility equipped with modern machinery and technology to ensure high-quality output and efficient production processes.</p>
            </div>
            <div className="reveal" style={{ background: 'white', padding: 'var(--space-xl)', borderRadius: 'var(--card-radius)', boxShadow: 'var(--shadow-card)', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>⚙️</div>
              <h3 className="heading-h3" style={{ marginBottom: 'var(--space-md)' }}>Advanced Machinery</h3>
              <p className="body-text" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-small)' }}>Latest industrial sewing machines, cutting equipment, and quality control systems that enable us to maintain consistent standards across all products.</p>
            </div>
            <div className="reveal" style={{ background: 'white', padding: 'var(--space-xl)', borderRadius: 'var(--card-radius)', boxShadow: 'var(--shadow-card)', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>✅</div>
              <h3 className="heading-h3" style={{ marginBottom: 'var(--space-md)' }}>Quality Processes</h3>
              <p className="body-text" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-small)' }}>Rigorous quality control procedures at every stage of production, from raw material inspection to final product verification.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div className="reveal" style={{ background: 'var(--color-bg-mid)', padding: 'var(--space-responsive, var(--space-2xl))', borderRadius: 'var(--card-radius)', borderLeft: '4px solid var(--color-accent)' }}>
            <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>👥</div>
            <h2 className="heading-h2" style={{ marginBottom: 'var(--space-lg)' }}>Our People</h2>
            <p className="body-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-muted)' }}>Our team comprises brilliant and knowledgeable professionals who are dedicated to delivering excellence in every aspect of our operations. From skilled craftspeople on the production floor to experienced managers overseeing quality and delivery, each team member plays a vital role in our success. Their expertise, commitment, and attention to detail ensure that every product we manufacture meets the exacting standards our clients expect.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-light)' }}>
        <div className="container" style={{ margin: '0 auto' }}>
          <h2 className="heading-h2 section__title">Why Choose I & S Global Enterprises</h2>
          <div className="grid-2">
            <div className="reveal" style={{ background: 'white', padding: 'var(--space-lg)', borderRadius: 'var(--card-radius)', boxShadow: 'var(--shadow-card)', borderTop: '3px solid var(--color-accent)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--color-accent)' }}>01</div>
                <h3 className="heading-h3">Excellent Infrastructure</h3>
              </div>
              <p className="body-text" style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>Our modern manufacturing facility is equipped with cutting-edge technology and machinery, enabling us to produce high-quality uniforms at scale while maintaining consistent standards.</p>
            </div>
            <div className="reveal" style={{ background: 'white', padding: 'var(--space-xl)', borderRadius: 'var(--card-radius)', boxShadow: 'var(--shadow-card)', borderTop: '3px solid var(--color-accent)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--color-accent)' }}>02</div>
                <h3 className="heading-h3">Expert Workforce</h3>
              </div>
              <p className="body-text" style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>Our team of skilled professionals brings years of experience in textile manufacturing, pattern making, and quality control, ensuring every product meets exact specifications.</p>
            </div>
            <div className="reveal" style={{ background: 'white', padding: 'var(--space-xl)', borderRadius: 'var(--card-radius)', boxShadow: 'var(--shadow-card)', borderTop: '3px solid var(--color-accent)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--color-accent)' }}>03</div>
                <h3 className="heading-h3">Wide Customer Base</h3>
              </div>
              <p className="body-text" style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>Trusted by over 500 clients across healthcare, industrial, hospitality, and corporate sectors throughout India, our reputation speaks for our reliability and quality.</p>
            </div>
            <div className="reveal" style={{ background: 'white', padding: 'var(--space-xl)', borderRadius: 'var(--card-radius)', boxShadow: 'var(--shadow-card)', borderTop: '3px solid var(--color-accent)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--color-accent)' }}>04</div>
                <h3 className="heading-h3">Competitive Pricing</h3>
              </div>
              <p className="body-text" style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>We offer the best value for money without compromising on quality, combining efficient production processes with fair pricing to benefit our clients.</p>
            </div>
            <div className="reveal" style={{ background: 'white', padding: 'var(--space-lg)', borderRadius: 'var(--card-radius)', boxShadow: 'var(--shadow-card)', borderTop: '3px solid var(--color-accent)', gridColumn: 'var(--grid-full-width, 1 / -1)', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--color-accent)' }}>05</div>
                <h3 className="heading-h3">Highest Quality Standards</h3>
              </div>
              <p className="body-text" style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>With a 99% customer satisfaction rate, our rigorous quality control processes ensure that every product meets the highest industry standards and client expectations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner__content">
          <h2 className="heading-h2 cta-banner__title">Ready to Work With Us?</h2>
          <p className="cta-banner__subtitle">Contact us today to discuss your uniform requirements.</p>
          <Link to="/contact" className="btn-ghost">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
