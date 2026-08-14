'use client';
import { useState } from 'react';
import { products, categories } from '@/data/products';

function ProductCard({ product }) {
  if (!product.available) {
    return (
      <div className="product-card unavailable" data-category={product.category}>
        <div className="card-badge unavail-badge">{product.badge}</div>
        <div className={`card-icon ${product.emojiClass || ''}`}>{product.emoji}</div>
        <div className="card-info">
          <span className="card-category">{product.categoryLabel}</span>
          <h3 className="card-title">{product.name}</h3>
          <p className="card-desc">{product.description}</p>
          <ul className="card-features">
            {product.features.map((f, i) => (<li key={i}>✓ {f}</li>))}
          </ul>
        </div>
        <div className="card-footer">
          <div className="price-group">
            <span className="price-label">Harga</span>
            <span className="price-main unavail-price">&mdash;</span>
          </div>
          <span className="btn-unavail">Belum Tersedia</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`product-card${product.featured ? ' featured' : ''}`} data-category={product.category}>
      <div className="card-badge">{product.badge}</div>
      <div className="card-icon-img">
        <img src={product.image} alt={product.name} className={`app-logo-img ${product.imageClass || ''}`} />
      </div>
      <div className="card-info">
        <span className="card-category">{product.categoryLabel}</span>
        <h3 className="card-title">{product.name}</h3>
        <p className="card-desc">{product.description}</p>
        <ul className="card-features">
          {product.features.map((f, i) => (<li key={i}>✓ {f}</li>))}
        </ul>
      </div>
      <div className="card-footer">
        <div className="price-group">
          {product.discountFrom ? (
            <span className="price-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>Diskon dari</span>
              <del className="price-original" style={{ color: '#ff5e62', textDecoration: 'line-through', fontWeight: 600, textTransform: 'none' }}>{product.originalPrice}</del>
            </span>
          ) : (
            <span className="price-label">{product.priceLabel}</span>
          )}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span className="price-main">{product.price}</span>
            <span className="price-period">{product.pricePeriod}</span>
          </div>
        </div>
        <a href={product.whatsappLink} className="btn-order" target="_blank" rel="noopener noreferrer">
          Order Sekarang
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </a>
      </div>
    </div>
  );
}

export default function PricelistSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section className="pricelist-section" id="pricelist">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">Harga Transparan</span>
          <h2 className="section-title">Pilih <span className="gradient-text">Paket Terbaik</span> Anda</h2>
          <p className="page-hero-desc" style={{ marginTop: '12px' }}>Semua produk original, bergaransi, dan siap pakai. Hubungi kami untuk konsultasi gratis!</p>
        </div>

        <div className="tab-buttons">
          {categories.map((cat) => (
            <button key={cat.id} className={`tab-btn${activeCategory === cat.id ? ' active' : ''}`} onClick={() => setActiveCategory(cat.id)}>
              {cat.label}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="custom-order-banner">
          <div className="custom-order-content">
            <div className="custom-icon">💬</div>
            <div className="custom-text">
              <h3>Tidak menemukan yang Anda cari?</h3>
              <p>Hubungi kami untuk request aplikasi lainnya. Kami siap membantu!</p>
            </div>
          </div>
          <a href="https://wa.me/6281919525274?text=Halo%2C%20saya%20mau%20tanya%20tentang%20aplikasi%20premium%20lainnya" className="btn-primary" target="_blank" rel="noopener noreferrer">
            <span>Chat Sekarang</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
