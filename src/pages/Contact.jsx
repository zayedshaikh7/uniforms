import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [revealedElements, setRevealedElements] = useState(new Set());

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

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Extract form data
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('from_name'),
      company: formData.get('company_name'),
      phone: formData.get('phone_number'),
      email: formData.get('reply_to'),
      category: formData.get('product_category'),
      message: formData.get('message')
    };

    // Format the WhatsApp message
    const whatsappMessage = 
      `*New Inquiry from I & S Website*\n\n` +
      `*Name:* ${data.name}\n` +
      `*Company:* ${data.company || "N/A"}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Email:* ${data.email}\n` +
      `*Category:* ${data.category || "General Inquiry"}\n\n` +
      `*Message:* ${data.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = "917400385575"; // International format without +
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');

    alert('WhatsApp will open to send your inquiry. Thank you!');
    e.target.reset();
  };

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__content">
          <h1 className="heading-h1">Contact Us</h1>
          <p>Get in touch with us for custom uniform solutions</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <span>Contact Us</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-padding)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'var(--space-2xl)', alignItems: 'start' }}>
            
            <div className={`reveal ${isRevealed(0) ? 'visible' : ''}`}>
              <div style={{ background: 'var(--color-bg-mid)', padding: 'var(--space-xl)', borderRadius: 'var(--card-radius)', marginBottom: 'var(--space-xl)' }}>
                <h2 className="heading-h3" style={{ marginBottom: 'var(--space-lg)', color: 'var(--color-primary)' }}>Contact Information</h2>

                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-sm)', color: 'var(--color-text-primary)' }}>Contact Person</h4>
                  <p className="body-text" style={{ color: 'var(--color-text-muted)' }}>Mr. Ataullah Ansari</p>
                </div>

                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-sm)', color: 'var(--color-text-primary)' }}>📍 Address</h4>
                  <p className="body-text" style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                    A Sector, K-2 Line, Room-6<br/>
                    Cheeta Camp Trombay<br/>
                    Landmark: Gulshan E Baghdad Masjid<br/>
                    Mumbai, Maharashtra – 400088<br/>
                    India
                  </p>
                </div>

                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-sm)', color: 'var(--color-text-primary)' }}>📞 Phone Numbers</h4>
                  <p className="body-text" style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                    +91-7400385575<br/>
                    +91-7400385574<br/>
                    +91-8976950228
                  </p>
                </div>

                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-sm)', color: 'var(--color-text-primary)' }}>✉️ Email</h4>
                  <p className="body-text" style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                    iandsglobal11@gmail.com<br/>
                    ansariataullah94@gmail.com
                  </p>
                </div>

                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-sm)', color: 'var(--color-text-primary)' }}>🌐 Website</h4>
                  <p className="body-text" style={{ color: 'var(--color-text-muted)' }}>www.iandsglobalenterprises.in</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div style={{ background: 'white', padding: 'var(--space-lg)', borderRadius: 'var(--card-radius)', boxShadow: 'var(--shadow-card)', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 'var(--space-sm)' }}>⏰</div>
                  <h4 className="heading-h3" style={{ fontSize: '1rem', marginBottom: 'var(--space-xs)' }}>Business Hours</h4>
                  <p style={{ fontSize: 'var(--text-small)', color: 'var(--color-text-muted)' }}>Monday - Saturday<br/>9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className={`reveal ${isRevealed(1) ? 'visible' : ''}`}>
              <div style={{ background: 'white', padding: 'var(--space-2xl)', borderRadius: 'var(--card-radius)', boxShadow: 'var(--shadow-card)' }}>
                <h2 className="heading-h3" style={{ marginBottom: 'var(--space-lg)', color: 'var(--color-primary)' }}>Send Us an Inquiry</h2>

                <form id="contactForm" ref={form} onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name *</label>
                    <input type="text" id="name" name="from_name" className="form-input" required placeholder="Enter your full name" />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="company">Company Name</label>
                    <input type="text" id="company" name="company_name" className="form-input" placeholder="Enter your company name" />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-md)' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number *</label>
                      <input type="tel" id="phone" name="phone_number" className="form-input" required placeholder="+91" />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="reply_to" className="form-input" required placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="category">Product Category</label>
                    <select id="category" name="product_category" className="form-select">
                      <option value="">Select a category</option>
                      <option value="industrial">Industrial Safety Workwear</option>
                      <option value="medical">Medical & Healthcare Uniforms</option>
                      <option value="hospitality">Hospitality & F&B Uniforms</option>
                      <option value="corporate">Corporate & Casual Wear</option>
                      <option value="specialty">Specialty Uniforms</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Your Message *</label>
                    <textarea id="message" name="message" className="form-textarea" required placeholder="Tell us about your requirements..."></textarea>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Inquiry</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0', background: 'var(--color-bg-mid)' }}>
          <div style={{ padding: 'var(--space-2xl) 0', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <h2 className="heading-h2" style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>Find Us</h2>
          <a 
            href="https://www.google.com/maps/search/I+%26+S+Global+Enterprises+Room+No.+1,+Sector+A+Line,+Cheeta+Camp+Trombay,+Mankhurd,+Mumbai,+Maharashtra,+400088,+India" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'block', textDecoration: 'none' }}
          >
            <div className="map-placeholder" style={{ width: '100%', height: '400px', background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent-warm) 100%)', borderRadius: 'var(--card-radius)', boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.2rem', transition: 'var(--transition-mid)', cursor: 'pointer' }}>
              <span style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>📍</span>
              <span>Cheeta Camp Trombay, Mumbai - 400088</span>
              <span style={{ fontSize: 'var(--text-small)', opacity: '0.8', marginTop: 'var(--space-sm)' }}>Click to view on Google Maps</span>
            </div>
          </a>
        </div>
      </section>
    </>
  )
}
