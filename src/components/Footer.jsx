'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo"><span>Zayse App</span></div>
        <p className="footer-text">© 2026 Zayse App Premium. All rights reserved.</p>
        <div className="footer-contact">
          <a href="https://wa.me/6281919525274" target="_blank" rel="noopener noreferrer" className="footer-wa">
            6281919525274
          </a>
          <a href="https://www.tiktok.com/@zayse_app" target="_blank" rel="noopener noreferrer" className="footer-tiktok">
            @zayse_app
          </a>
        </div>
      </div>
    </footer>
  );
}
