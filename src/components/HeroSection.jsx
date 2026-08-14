'use client';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const profileCardRef = useRef(null);
  const gradientTextRef = useRef(null);

  // Counter animation - lightweight
  useEffect(() => {
    const card = profileCardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const nums = entry.target.querySelectorAll('.stat-number');
            nums.forEach((el) => {
              const t = el.textContent;
              const target = t.includes('100') ? 100 : t.includes('500') ? 500 : 0;
              if (!target) return;
              let cur = 0;
              const step = target / 30;
              const timer = setInterval(() => {
                cur += step;
                if (cur >= target) { cur = target; clearInterval(timer); }
                el.textContent = Math.floor(cur) + '+';
              }, 40);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Profile Card */}
        <div className="profile-card" ref={profileCardRef}>
          <div className="profile-glow"></div>
          <div className="profile-badge">
            <span className="badge-icon">✓</span>
            <span>Verified Seller</span>
          </div>
          <div className="profile-avatar-wrapper">
            <div className="avatar-ring"></div>
            <img src="/avatar.jpg" alt="Profile" className="profile-avatar" />
            <div className="online-dot"></div>
          </div>
          <div className="profile-info">
            <h2 className="profile-name">ZAYSE APP PREMIUM</h2>
            <p className="profile-tagline">Digital Solutions Provider</p>
            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Aplikasi</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Pelanggan</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">4.9★</span>
                <span className="stat-label">Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            <span>Tersedia 24/7 · Fast Response</span>
          </div>
          <h1 className="hero-title">
            Jual <span className="gradient-text" ref={gradientTextRef}>Aplikasi Premium</span>
            <br />
            Berkualitas Tinggi
          </h1>
          <p className="hero-desc">
            Dapatkan akses ke ratusan aplikasi premium dengan harga terjangkau.
            Kami menyediakan solusi digital terpercaya untuk produktivitas,
            desain, keamanan, dan kebutuhan bisnis Anda.
          </p>

          <div className="features-grid">
            <div className="feature-chip"><span className="chip-icon">⚡</span><span>Aktivasi Cepat</span></div>
            <div className="feature-chip"><span className="chip-icon">🔒</span><span>100% Aman</span></div>
            <div className="feature-chip"><span className="chip-icon">✨</span><span>Original &amp; Premium</span></div>
            <div className="feature-chip"><span className="chip-icon">🛡️</span><span>Garansi</span></div>
          </div>

          <div className="cta-group">
            <a href="#pricelist" className="btn-primary">
              <span>Lihat Pricelist</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="https://wa.me/6281919525274" className="btn-secondary" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              <span>WhatsApp</span>
            </a>
            <a href="https://whatsapp.com/channel/0029VbDXk4aBqbr6S5zzyt18" className="btn-testi" target="_blank" rel="noopener noreferrer">
              <span className="btn-testi-icon">⭐</span>
              <span>Testimoni</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
            </a>
          </div>
        </div>
      </div>

      <a href="#pricelist" className="scroll-indicator">
        <span className="scroll-text">Lihat Pricelist</span>
        <div className="scroll-arrow">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
        </div>
      </a>
    </section>
  );
}
