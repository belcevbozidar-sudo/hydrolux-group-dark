// product-page.js — Shared product page cart logic for Hydrolux Group

(function() {
    'use strict';

    // ── Cart helpers ──────────────────────────────────────────────────────────

    function getCart() {
        try { return JSON.parse(localStorage.getItem('hydrolux_cart') || '[]'); } catch(e) { return []; }
    }

    function saveCart(cart) {
        localStorage.setItem('hydrolux_cart', JSON.stringify(cart));
    }

    function updateHeaderCartCount() {
        var cart = getCart();
        var total = cart.reduce(function(sum, item) { return sum + (item.quantity || 1); }, 0);
        var badge = document.getElementById('cart-count');
        if (badge) badge.textContent = total;
    }

    // ── Add to cart ───────────────────────────────────────────────────────────

    window.addPageProductToCart = function(productData, quantity) {
        quantity = quantity || 1;
        var cart = getCart();
        var existing = cart.findIndex(function(i) { return !i.isConfigured && i.product && i.product.id === productData.id; });

        if (existing > -1) {
            cart[existing].quantity += quantity;
        } else {
            cart.push({
                id: 'std_' + productData.id + '_' + Date.now(),
                isConfigured: false,
                product: productData,
                quantity: quantity,
                price: productData.price
            });
        }
        saveCart(cart);
        updateHeaderCartCount();
        showAddedToast(productData.title, quantity);
    };

    // ── Toast notification ────────────────────────────────────────────────────

    function showAddedToast(name, qty) {
        var existing = document.getElementById('hl-toast');
        if (existing) existing.remove();

        var toast = document.createElement('div');
        toast.id = 'hl-toast';
        toast.innerHTML = '<i class="fa-solid fa-circle-check"></i> <strong>' + qty + ' бр.</strong> от „' + name + '" добавени в количката!';
        toast.style.cssText = [
            'position:fixed',
            'bottom:32px',
            'right:32px',
            'background:var(--accent-primary)',
            'color:#fff',
            'padding:14px 22px',
            'border-radius:12px',
            'font-family:var(--font-body,Inter,sans-serif)',
            'font-size:0.9rem',
            'font-weight:600',
            'display:flex',
            'align-items:center',
            'gap:10px',
            'z-index:9999',
            'box-shadow:0 8px 24px rgba(0,0,0,0.25)',
            'animation:slideInToast 0.4s ease',
            'max-width:380px'
        ].join(';');

        document.body.appendChild(toast);
        setTimeout(function() { if (toast.parentNode) toast.style.opacity = '0'; }, 2800);
        setTimeout(function() { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 3300);
    }

    // ── Inject toast animation ────────────────────────────────────────────────

    var style = document.createElement('style');
    style.textContent = '@keyframes slideInToast { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }';
    document.head.appendChild(style);

    // ── Header scroll ─────────────────────────────────────────────────────────

    function initHeader() {
        var header = document.getElementById('main-header');
        if (!header) return;
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        });
    }

    // ── Quantity stepper ──────────────────────────────────────────────────────

    window.initQtyStepper = function() {
        var minus = document.getElementById('qty-minus');
        var plus  = document.getElementById('qty-plus');
        var input = document.getElementById('page-qty-input');
        if (!minus || !plus || !input) return;

        minus.addEventListener('click', function() {
            var v = parseInt(input.value, 10) || 1;
            if (v > 1) input.value = v - 1;
        });
        plus.addEventListener('click', function() {
            var v = parseInt(input.value, 10) || 1;
            input.value = v + 1;
        });
    };

    // ── Tab switcher ──────────────────────────────────────────────────────────

    window.initTabs = function() {
        document.querySelectorAll('.tab-header').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var target = btn.dataset.tab;
                document.querySelectorAll('.tab-header').forEach(function(b) { b.classList.remove('active'); });
                document.querySelectorAll('.tab-panel').forEach(function(p) { p.style.display = 'none'; });
                btn.classList.add('active');
                var panel = document.getElementById('tab-' + target);
                if (panel) panel.style.display = 'block';
            });
        });
        // Show first tab by default
        var first = document.querySelector('.tab-header');
        if (first) first.click();
    };

    // ── Table row click to highlight ──────────────────────────────────────────

    window.initTableRowSelect = function() {
        document.querySelectorAll('.tech-table tbody tr').forEach(function(row) {
            row.addEventListener('click', function() {
                document.querySelectorAll('.tech-table tbody tr').forEach(function(r) { r.classList.remove('selected'); });
                row.classList.add('selected');
            });
        });
    };

    // ── Init on load ──────────────────────────────────────────────────────────

    document.addEventListener('DOMContentLoaded', function() {
        updateHeaderCartCount();
        initHeader();

        // Mobile nav
        var toggle = document.getElementById('menu-toggle');
        var nav    = document.getElementById('nav-links');
        if (toggle && nav) {
            toggle.addEventListener('click', function() {
                nav.classList.toggle('active');
                var icon = toggle.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-bars');
                    icon.classList.toggle('fa-xmark');
                }
            });
        }

        initQtyStepper();
        initTabs();
        initTableRowSelect();

        // Click delegation on related products grid to open their pages
        var grid = document.querySelector('.products-grid');
        if (grid) {
            grid.addEventListener('click', function(e) {
                var card = e.target.closest('.product-card');
                if (!card) return;
                if (e.target.closest('button') || e.target.closest('a') || e.target.closest('.product-footer')) return;
                var link = card.querySelector('a');
                if (link) window.location.href = link.getAttribute('href');
            });
        }
    });

})();
