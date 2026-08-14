// ============================================
//  ZAYSE APP PREMIUM — JavaScript v4.0
//  Lightweight & mobile-optimized
// ============================================

// ── Auto-Refresh untuk CapCut / Recording ──────────────
(function () {
  var params = new URLSearchParams(window.location.search);
  var refreshSec = parseInt(params.get('autorefresh'), 10);

  var ua = navigator.userAgent || '';
  var isCapCut = /capcut|jianying|snssdk|bytedance/i.test(ua);

  if (isCapCut && !refreshSec) {
    refreshSec = 5;
  }

  if (!refreshSec || refreshSec < 1) return;

  var bar = document.createElement('div');
  bar.id = 'autoRefreshBar';
  bar.style.cssText =
    'position:fixed;top:0;left:0;right:0;z-index:99999;' +
    'background:#4c6548;' +
    'color:#fff;font-family:Inter,sans-serif;font-size:13px;font-weight:600;' +
    'display:flex;align-items:center;justify-content:center;gap:10px;' +
    'padding:8px 16px;';

  var label = document.createElement('span');
  label.textContent = '🔄 Auto-refresh aktif — reload dalam ' + refreshSec + 's';

  var closeBtn = document.createElement('button');
  closeBtn.textContent = '✕';
  closeBtn.style.cssText =
    'background:rgba(255,255,255,0.2);border:none;color:#fff;' +
    'width:24px;height:24px;border-radius:50%;cursor:pointer;' +
    'font-size:14px;';

  bar.appendChild(label);
  bar.appendChild(closeBtn);

  function insertBar() {
    document.body.insertBefore(bar, document.body.firstChild);
    var nav = document.getElementById('navbar');
    if (nav) nav.style.top = '36px';
  }

  if (document.body) {
    insertBar();
  } else {
    document.addEventListener('DOMContentLoaded', insertBar);
  }

  var remaining = refreshSec;
  var timerInterval = setInterval(function () {
    remaining--;
    label.textContent = '🔄 Auto-refresh aktif — reload dalam ' + remaining + 's';
    if (remaining <= 0) {
      clearInterval(timerInterval);
      window.location.reload(true);
    }
  }, 1000);

  closeBtn.addEventListener('click', function () {
    clearInterval(timerInterval);
    bar.remove();
    var nav = document.getElementById('navbar');
    if (nav) nav.style.top = '';
    params.delete('autorefresh');
    var cleanUrl = window.location.pathname;
    var remaining = params.toString();
    if (remaining) cleanUrl += '?' + remaining;
    window.history.replaceState({}, '', cleanUrl);
  });
})();

// ── Force fresh reload for TikTok/IG/CapCut WebView ──────────
(function() {
  var SITE_VERSION = '4.0';
  var ua = navigator.userAgent || '';
  var isWebView = /musical_ly|tiktok|capcut|jianying|snssdk|bytedance|instagram|fbav|fban|line\//i.test(ua);
  var ts = Date.now();

  var cssLink = document.querySelector('link[href*="style.css"]');
  if (cssLink) {
    cssLink.href = 'style.css?v=' + SITE_VERSION + '&t=' + ts;
  }

  if (isWebView) {
    document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll('img').forEach(function(img) {
        var src = img.getAttribute('src');
        if (src && !src.startsWith('http') && !src.startsWith('data:')) {
          var sep = src.indexOf('?') > -1 ? '&' : '?';
          img.src = src + sep + 't=' + ts;
        }
      });
    });
  }
})();

// ── onReady helper ─────────────────────────────────────
function onReady(fn) {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(fn, 1);
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

onReady(function() {

  // ── Dark / Light Theme Toggle ─────────────────────────
  var themeToggleBtn = document.getElementById('themeToggle');
  var themeIcon      = document.getElementById('themeIcon');

  function updateThemeUI(isDark) {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeIcon) themeIcon.textContent = '☀️';
      if (themeToggleBtn) themeToggleBtn.setAttribute('title', 'Ganti ke Mode Terang');
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIcon) themeIcon.textContent = '🌙';
      if (themeToggleBtn) themeToggleBtn.setAttribute('title', 'Ganti ke Mode Gelap');
    }
  }

  var initialDark = document.documentElement.getAttribute('data-theme') === 'dark';
  updateThemeUI(initialDark);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function() {
      var isDarkNow = document.documentElement.getAttribute('data-theme') === 'dark';
      var newDark = !isDarkNow;
      updateThemeUI(newDark);
      localStorage.setItem('theme', newDark ? 'dark' : 'light');
    });
  }

  // ── Navbar scroll effect ───────────────────────────────
  var navbar = document.getElementById('navbar');
  var sections = document.querySelectorAll('section[id]');
  var navLinkEls = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    var current = '';
    sections.forEach(function(sec) {
      var top = sec.offsetTop - 80;
      if (window.scrollY >= top) current = sec.id;
    });
    navLinkEls.forEach(function(link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  if (navbar) {
    window.addEventListener('scroll', function() {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
      updateActiveNav();
    }, { passive: true });
    updateActiveNav();
  }

  // ── Hamburger menu ───────────────────────────────────
  var hamburger = document.getElementById('hamburger');
  var navLinks  = document.getElementById('navLinks');
  var overlay   = document.getElementById('mobileOverlay');

  function openMenu() {
    if (!hamburger || !navLinks || !overlay) return;
    hamburger.classList.add('open');
    navLinks.classList.add('mobile-open');
    overlay.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!hamburger || !navLinks || !overlay) return;
    hamburger.classList.remove('open');
    navLinks.classList.remove('mobile-open');
    overlay.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger && navLinks && overlay) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.contains('open') ? closeMenu() : openMenu();
    });
    overlay.addEventListener('click', closeMenu);
    navLinks.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // ── Scroll reveal (lightweight) ──────────────────────
  var cardsToAnimate = document.querySelectorAll('.why-card, .product-card');

  // Very low-end: skip animation if screen is tiny
  var skipAnim = window.innerWidth <= 400;

  if (skipAnim) {
    cardsToAnimate.forEach(function(el) { el.classList.add('revealed'); });
  } else if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    cardsToAnimate.forEach(function(el) { observer.observe(el); });

    // Fallback: reveal all after 1.5s (for TikTok/IG WebViews)
    setTimeout(function() {
      cardsToAnimate.forEach(function(el) { el.classList.add('revealed'); });
    }, 1500);
  } else {
    cardsToAnimate.forEach(function(el) { el.classList.add('revealed'); });
  }

  // ── Avatar fallback ──────────────────────────────────
  var avatar = document.getElementById('profileAvatar');
  if (avatar) {
    avatar.onerror = function() {
      this.style.display = 'none';
      var wrapper = this.parentElement;
      var fallback = document.createElement('div');
      fallback.style.cssText =
        'width:64px;height:64px;border-radius:50%;' +
        'background:#a8c3a0;' +
        'display:flex;align-items:center;justify-content:center;' +
        'font-size:1.8rem;';
      fallback.textContent = '👤';
      wrapper.insertBefore(fallback, this);
    };
  }

  // ── Category filter ──────────────────────────────────
  window.filterCategory = function(category) {
    var cards = document.querySelectorAll('.product-card');
    var tabs  = document.querySelectorAll('.tab-btn');

    tabs.forEach(function(btn) { btn.classList.remove('active'); });
    var activeTab = document.getElementById('tab' + capitalize(category));
    if (activeTab) activeTab.classList.add('active');

    var visibleIndex = 0;
    cards.forEach(function(card) {
      var cardCat = card.dataset.category;
      var shouldShow = category === 'all' || cardCat === category;

      if (shouldShow) {
        card.classList.remove('hidden');
        card.style.display = '';
        // Re-trigger reveal animation
        card.classList.remove('revealed');
        (function(c, delay) {
          setTimeout(function() { c.classList.add('revealed'); }, delay);
        })(card, visibleIndex * 50);
        visibleIndex++;
      } else {
        card.classList.add('hidden');
      }
    });
  };

  function capitalize(str) {
    var map = {
      all: 'All', video: 'Video', design: 'Design',
      productivity: 'Productivity', security: 'Security', dev: 'Dev'
    };
    return map[str] || str.charAt(0).toUpperCase() + str.slice(1);
  }

  // ── Ripple effect on buttons ─────────────────────────
  document.querySelectorAll('.btn-primary, .btn-order').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      var rect = this.getBoundingClientRect();
      var ripple = document.createElement('span');
      var size = Math.max(rect.width, rect.height);
      ripple.style.cssText =
        'position:absolute;' +
        'width:' + size + 'px;height:' + size + 'px;' +
        'left:' + (e.clientX - rect.left - size/2) + 'px;' +
        'top:' + (e.clientY - rect.top - size/2) + 'px;' +
        'background:rgba(255,255,255,0.25);' +
        'border-radius:50%;' +
        'transform:scale(0);' +
        'animation:rippleAnim 0.5s ease forwards;' +
        'pointer-events:none;';
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      setTimeout(function() { ripple.remove(); }, 600);
    });
  });

  // Inject ripple keyframes
  if (!document.getElementById('rippleStyle')) {
    var style = document.createElement('style');
    style.id = 'rippleStyle';
    style.textContent = '@keyframes rippleAnim { to { transform:scale(2.5);opacity:0; } }';
    document.head.appendChild(style);
  }

});
