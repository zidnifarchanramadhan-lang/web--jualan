'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="nav-container">
          <div className="nav-logo"><span>Zayse App</span></div>
          <div className={`nav-links${menuOpen ? ' mobile-open' : ''}`}>
            <a href="#home" className={`nav-link${activeSection === 'home' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#pricelist" className={`nav-link${activeSection === 'pricelist' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Pricelist</a>
          </div>
          <button className={`hamburger${menuOpen ? ' open' : ''}`} aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      {menuOpen && <div className="mobile-overlay active" onClick={() => setMenuOpen(false)} />}
    </>
  );
}
