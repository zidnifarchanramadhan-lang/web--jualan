export default function WhySection() {
  return (
    <section className="why-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">Mengapa Kami?</span>
          <h2 className="section-title">Terpercaya &amp; Terjangkau</h2>
        </div>
        <div className="why-grid">
          <div className="why-card animate-in" style={{ animationDelay: '0s' }}>
            <div className="why-icon">👨‍💼</div>
            <div>
              <h3>Profesional</h3>
              <p>Layanan profesional dengan dukungan teknis penuh setelah pembelian.</p>
            </div>
          </div>
          <div className="why-card animate-in" style={{ animationDelay: '0.1s' }}>
            <div className="why-icon">💰</div>
            <div>
              <h3>Harga Terbaik</h3>
              <p>Harga kompetitif dengan kualitas aplikasi premium yang tidak mengecewakan.</p>
            </div>
          </div>
          <div className="why-card animate-in" style={{ animationDelay: '0.2s' }}>
            <div className="why-icon">⚡</div>
            <div>
              <h3>Cepat &amp; Mudah</h3>
              <p>Proses pembelian dan aktivasi yang cepat, tidak perlu menunggu lama.</p>
            </div>
          </div>
          <div className="why-card animate-in" style={{ animationDelay: '0.3s' }}>
            <div className="why-icon">🔐</div>
            <div>
              <h3>Aman &amp; Terjamin</h3>
              <p>Setiap produk dijamin keasliannya dan aman digunakan tanpa risiko.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
