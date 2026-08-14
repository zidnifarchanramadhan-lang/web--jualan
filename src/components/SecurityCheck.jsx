'use client';
import { useState, useEffect } from 'react';

export default function SecurityCheck() {
  const [verified, setVerified] = useState(false);
  const [verifying, setVerifying] = useState(true);
  const [rayId, setRayId] = useState('');

  useEffect(() => {
    // Generate random Cloudflare Ray ID
    const randomRay = Math.random().toString(36).substring(2, 12) + Math.random().toString(36).substring(2, 8);
    setRayId(randomRay);

    // Auto verify after 1.8 seconds (simulating Cloudflare Managed Challenge)
    const timer = setTimeout(() => {
      setVerifying(false);
      setTimeout(() => {
        setVerified(true);
      }, 600);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (verified) return null;

  return (
    <div className={`security-overlay${verified ? ' verified' : ''}`}>
      <div className="security-box">
        <h1 className="security-domain">zstore.zaysee.my.id</h1>
        <h2 className="security-title">Melakukan verifikasi keamanan</h2>
        <p className="security-desc">
          Situs web menggunakan layanan keamanan untuk melindungi dari bot jahat. Halaman ini ditunjukkan semasa kami memverifikasi bahwa Anda bukan bot.
        </p>

        <div className="security-widget-card">
          <div className="security-widget-content">
            {verifying ? (
              <div className="cf-spinner-row">
                <div className="cf-spinner"></div>
                <span className="cf-status-text">Melakukan verifikasi...</span>
              </div>
            ) : (
              <div className="cf-success-row">
                <div className="cf-check-icon">✓</div>
                <span className="cf-status-text success">Verifikasi Berhasil</span>
              </div>
            )}
            <div className="cf-brand">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#f6821f">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
              </svg>
              <div className="cf-brand-text">
                <strong>CLOUDFLARE</strong>
                <span>Privasi · Bantuan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="security-footer">
          <p>Ray ID: <code>{rayId}</code></p>
          <p>Performa dan Keamanan dari <a href="https://www.cloudflare.com" target="_blank" rel="noreferrer">Cloudflare</a> · <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noreferrer">Privasi</a></p>
        </div>
      </div>
    </div>
  );
}
