'use client';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const profileCardRef = useRef(null);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Profile Card */}
        <div className="modern-profile-card" ref={profileCardRef}>
          <div className="profile-header-main">
            <div className="identity-avatar" style={{ width: '58px', height: '58px', flexShrink: 0 }}>
              <img src="/avatar.jpg" alt="Zayse App" className="profile-avatar" style={{ width: '58px', height: '58px', objectFit: 'cover', borderRadius: '50%' }} />
              <div className="online-pulse-ring"></div>
              <div className="online-dot"></div>
            </div>
            <div className="identity-info">
              <div className="profile-title-wrapper">
                <h2 className="profile-name">ZAYSE APP PREMIUM</h2>
                <span className="verified-badge" title="Terverifikasi">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#ffffff" />
                    <path d="M8.5 12.5L10.8 14.8L15.5 9.5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <p className="profile-tagline">Spesialis Aplikasi Premium &amp; AI</p>
            </div>
          </div>

          <div className="modern-stats-grid">
            <div className="stat-card">
              <span className="stat-icon">📦</span>
              <div className="stat-content">
                <span className="stat-number">100+</span>
                <span className="stat-label">Aplikasi</span>
              </div>
            </div>
            <div className="stat-card">
              <span className="stat-icon">👥</span>
              <div className="stat-content">
                <span className="stat-number">500+</span>
                <span className="stat-label">Pembeli</span>
              </div>
            </div>
            <div className="stat-card">
              <span className="stat-icon">⭐</span>
              <div className="stat-content">
                <span className="stat-number">4.9</span>
                <span className="stat-label">Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Editorial */}
        <div className="hero-editorial">
          <div className="hero-eyebrow">
            <span className="pulse-dot"></span>
            Garansi Full · Aktivasi 5-10 Menit
          </div>

          <h1 className="hero-title">
            Aplikasi Premium <br />
            <span className="gradient-text">Original &amp; Bergaransi</span>
          </h1>

          <p className="hero-desc">
            Solusi akun premium Alight Motion, CapCut Pro, Canva, &amp; Gemini Advanced dengan harga terjangkau dan garansi resmi.
          </p>

          <div className="features-grid">
            <div className="feature-chip"><span className="chip-icon"></span> Aktivasi Cepat</div>
            <div className="feature-chip"><span className="chip-icon"></span> 100% Aman</div>
            <div className="feature-chip"><span className="chip-icon"></span> Original</div>
            <div className="feature-chip"><span className="chip-icon"></span> Garansi</div>
          </div>

          <div className="cta-group">
            <a href="#pricelist" className="btn-primary">
              Lihat Pricelist
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="https://wa.me/6281919525274" className="btn-secondary" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href="https://whatsapp.com/channel/0029VbDXk4aBqbr6S5zzyt18" className="btn-testi" target="_blank" rel="noopener noreferrer">⭐ Testimoni</a>
            <a href="https://www.tiktok.com/@zayse_app" className="btn-tiktok" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </div>
      </div>
    </section>
  );
}
