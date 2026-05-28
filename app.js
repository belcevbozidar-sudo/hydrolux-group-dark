// Hydrolux Group - Core Application State & Logic

// Mock Product Database
const PRODUCTS = [
    {
        id: 1,
        title: "Хидравличен маркуч 2SN DN10",
        category: "hoses",
        categoryName: "Хидравлични маркучи",
        price: 25.50,
        image: "assets/hoses.png",
        specs: {
            "Стандарт": "EN 853 2SN",
            "Диаметър (DN)": "10 mm (3/8\")",
            "Работно налягане": "330 bar",
            "Разрушаващо налягане": "1320 bar",
            "Радиус на огъване": "130 mm",
            "Произход": "Европейски съюз"
        },
        description: "Висококачествен гъвкав хидравличен маркуч с две телени оплетки с изключително висока устойчивост на абразия и атмосферни условия. Подходящ за минерални и билогични масла, вода и емулсии.",
        tag: "Популярен"
    },
    {
        id: 2,
        title: "Хидравличен маркуч R15 DN25 Super High",
        category: "hoses",
        categoryName: "Хидравлични маркучи",
        price: 75.00,
        image: "assets/hoses.png",
        specs: {
            "Стандарт": "EN 856 R15",
            "Диаметър (DN)": "25 mm (1\")",
            "Работно налягане": "420 bar",
            "Разрушаващо налягане": "1680 bar",
            "Конструкция": "6 стоманени навивки",
            "Температура": "-40°C до +121°C"
        },
        description: "Изключително издръжлив маркуч за ултра високо налягане и тежки експлоатационни условия. Идеален за строителна, минна и сондажна техника с променливи натоварвания.",
        tag: "Премиум"
    },
    {
        id: 3,
        title: "Хидравличен цилиндър HM2-63/36-250",
        category: "cylinders",
        categoryName: "Цилиндри & Компоненти",
        price: 340.00,
        image: "assets/cylinders.png",
        specs: {
            "Тип": "Двойнодействащ",
            "Диаметър на буталото": "63 mm",
            "Диаметър на прът": "36 mm",
            "Ход на буталото": "250 mm",
            "Макс. налягане": "250 bar",
            "Монтажно око": "GE30"
        },
        description: "Професионален хидравличен цилиндър за общо индустриално приложение с хромиран бутален прът и прецизно шлифована тръба. Двойно уплътнен за работа при тежки натоварвания.",
        tag: "Гаранция"
    },
    {
        id: 4,
        title: "Телескопичен цилиндър 3-степенен 700мм",
        category: "cylinders",
        categoryName: "Цилиндри & Компоненти",
        price: 680.00,
        image: "assets/cylinders.png",
        specs: {
            "Тип": "Телескопичен (еднодействащ)",
            "Степени": "3 степени",
            "Максимален ход": "700 mm",
            "Товароносимост": "8 тона",
            "Раб. налягане": "180 bar",
            "Приложение": "Саморазтоварващи ремаркета"
        },
        description: "Хидравличен телескопичен цилиндър, специално проектиран за селскостопански ремаркета и малки самосвали. Хромирани секции с висока степен на полиране против износване.",
        tag: "Ново"
    },
    {
        id: 5,
        title: "Комплект бутални уплътнители K18 63-48",
        category: "seals",
        categoryName: "Хидравлични уплътнители",
        price: 18.20,
        image: "assets/seals.png",
        specs: {
            "Тип уплътнител": "Бутално уплътнение (двустранно)",
            "Външен диаметър": "63 mm",
            "Вътрешен диаметър": "48 mm",
            "Широчина (височина)": "20.5 mm",
            "Материал": "PU (Полиуретан) + NBR + POM",
            "Работна скорост": "0.5 m/s"
        },
        description: "Петкомпонентно уплътнение за бутало, осигуряващо абсолютна херметичност при тежки хидравлични режими. Висока издръжливост срещу екструзия и триене.",
        tag: "Налично"
    },
    {
        id: 6,
        title: "О-пръстени кутия комплект NBR 70 (386 бр.)",
        category: "seals",
        categoryName: "Хидравлични уплътнители",
        price: 45.00,
        image: "assets/seals.png",
        specs: {
            "Брой детайли": "386 части",
            "Материал": "NBR 70 Shore",
            "Устойчивост": "Масла, горива, вода",
            "Размери в кутията": "30 различни размера",
            "Кутия": "Полипропилен с разделители",
            "Температурен диапазон": "-30°C до +100°C"
        },
        description: "Удобна сортирана кутия с най-често използваните метрични размери хидравлични О-пръстени. Подходяща за сервизи, земеделски бази и ремонтни групи.",
        tag: "Практично"
    },
    {
        id: 7,
        title: "Двоен нипел адаптер BSP 1/2\" - 1/2\"",
        category: "fittings",
        categoryName: "Фитинги & Накрайници",
        price: 6.40,
        image: "assets/fittings.png",
        specs: {
            "Тип": "Двоен нипел",
            "Резба А": "G 1/2\" (BSP)",
            "Резба Б": "G 1/2\" (BSP)",
            "Уплътнение": "60° вътрешен конус",
            "Материал": "Въглеродна стомана с галванично цинково покритие",
            "Макс. налягане": "350 bar"
        },
        description: "Високоякостен метален адаптер за свързване на маркучи, клапани и помпи с женски резби 1/2\". Цинковото покритие осигурява защита от корозия в продължение на години.",
        tag: "Топ цена"
    },
    {
        id: 8,
        title: "Бърза връзка ISO-A 1/2\" комплект",
        category: "fittings",
        categoryName: "Фитинги & Накрайници",
        price: 29.00,
        image: "assets/fittings.png",
        specs: {
            "Стандарт": "ISO 7241-1 A",
            "Размер на тялото": "1/2\" (DN12)",
            "Тип връзка": "Сферично заключване",
            "Материал": "Галванизирана стомана",
            "Защитен капак": "Включен прахозащитен червен пластмасов капак",
            "Работно налягане": "250 bar"
        },
        description: "Комплект мъжка и женска бърза хидравлична връзка за бързо свързване/разединяване на прикачен инвентар към трактори, комбайни и индустриални машини.",
        tag: "Хит"
    },
    {
        id: 9,
        title: "Зъбна хидравлична помпа Група 2 - 14cc",
        category: "cylinders",
        categoryName: "Цилиндри & Компоненти",
        price: 185.00,
        image: "assets/cylinders.png",
        specs: {
            "Работен обем": "14 cm³/об",
            "Посока на въртене": "Дясна (възможна смяна)",
            "Максимални обороти": "3000 rpm",
            "Номинално налягане": "250 bar",
            "Вал": "Конусен 1:8",
            "Захват": "Европейски фланец (ф80)"
        },
        description: "Надеждна зъбна помпа за хидравлични агрегати, селскостопанска техника и малки преси. Осигурява стабилен дебит и високо работно налягане.",
        tag: "Оферта"
    },
    {
        id: 10,
        title: "Трипътен вентил сферичен кран 1/2\"",
        category: "fittings",
        categoryName: "Фитинги & Накрайници",
        price: 88.00,
        image: "assets/fittings.png",
        specs: {
            "Конструкция": "Трипътен (L-порт)",
            "Размер резба": "G 1/2\" BSP (женска)",
            "Макс. налягане": "400 bar",
            "Материал": "Въглеродна стомана",
            "Уплътнение на сферата": "POM",
            "Работна температура": "-20°C до +100°C"
        },
        description: "Професионален кран за пренасочване на хидравличен поток под високо налягане. Осигурява гладко превключване и пълна липса на вътрешни течове.",
        tag: "Професионално"
    }
];

// App State
let cart = [];
let orders = [];
let activeStep = 1;
let currentConfig = {
    type: "standard",
    typeText: "Стандартен (1SN / 2SN)",
    priceFactor: 15,
    dn: "6",
    dnInch: "1/4",
    priceAddDN: 0,
    length: 1.5,
    fittingLeft: "straight",
    fittingLeftName: "DKOL Прав (0°)",
    fittingLeftPrice: 8,
    fittingRight: "straight",
    fittingRightName: "DKOL Прав (0°)",
    fittingRightPrice: 8,
    protection: "none",
    protectionName: "Без защита",
    protectionPriceMeter: 0
};

// Initial setup of Admin Mock Orders (to populate dashboard with realistic history)
const MOCK_ORDERS = [
    {
        id: "HL-7049",
        date: "28.05.2026",
        clientName: "Георги Димитров",
        phone: "0898433211",
        email: "g.dimitrov@gmail.com",
        itemsSummary: "Хидравличен цилиндър HM2 (1 бр.), Нипел адаптер 1/2\" (4 бр.)",
        total: 365.60,
        shipping: "До офис на Еконт (гр. Монтана, офис Централен)",
        status: "shipped", // shipped, processed, pending
        invoice: {
            isNeeded: false
        }
    },
    {
        id: "HL-7050",
        date: "28.05.2026",
        clientName: "Инвест Строй ЕООД",
        phone: "0887322991",
        email: "office@investstroy.bg",
        itemsSummary: "Custom маркуч DN 19 (1.5м, DKOL Прав / DKOL 90°, Пластмасова защита) (2 бр.)",
        total: 198.40,
        shipping: "До адрес (гр. Монтана, ул. Изгрев 12)",
        status: "processed",
        invoice: {
            isNeeded: true,
            companyName: "Инвест Строй ЕООД",
            eik: "BG205433211",
            address: "гр. Монтана, ул. Изгрев 12",
            mol: "инж. Петър Петров"
        }
    },
    {
        id: "HL-7051",
        date: "28.05.2026",
        clientName: "Земеделие ООД",
        phone: "0899455663",
        email: "agromontana@abv.bg",
        itemsSummary: "Бърза връзка ISO-A 1/2\" (5 бр.), О-пръстени кутия (1 бр.)",
        total: 190.00,
        shipping: "Вземане от базата в Монтана",
        status: "pending",
        invoice: {
            isNeeded: true,
            companyName: "Земеделие ООД",
            eik: "BG103445566",
            address: "гр. Вълчедръм, ул. Марица 4",
            mol: "Димитър Иванов"
        }
    }
];

// Document Elements
const els = {
    // Header
    header: document.getElementById('main-header'),
    menuToggle: document.getElementById('menu-toggle'),
    navLinks: document.getElementById('nav-links'),
    
    // Cart
    cartBtn: document.getElementById('cart-btn'),
    cartCount: document.getElementById('cart-count'),
    cartOverlay: document.getElementById('cart-overlay'),
    cartSidebar: document.getElementById('cart-sidebar'),
    cartCloseBtn: document.getElementById('cart-close-btn'),
    cartItemsList: document.getElementById('cart-items-list'),
    cartSubtotal: document.getElementById('cart-subtotal'),
    cartVat: document.getElementById('cart-vat'),
    cartTotal: document.getElementById('cart-total'),
    checkoutTriggerBtn: document.getElementById('checkout-trigger-btn'),
    
    // Configurator steps panels
    stepPanels: document.querySelectorAll('.config-step-panel'),
    stepIndicators: document.querySelectorAll('.step-indicator'),
    progressLine: document.getElementById('progress-line'),
    btnPrev: document.getElementById('config-btn-prev'),
    btnNext: document.getElementById('config-btn-next'),
    
    // Configurator Inputs
    hoseLengthSlider: document.getElementById('hose-length-slider'),
    hoseLengthNum: document.getElementById('hose-length-num'),
    currentLengthLabel: document.getElementById('current-length-label'),
    dnSelection: document.getElementById('dn-selection'),
    fittingLeftSelect: document.getElementById('fitting-left-select'),
    fittingRightSelect: document.getElementById('fitting-right-select'),
    
    // Configurator Live Summary Labels
    sumType: document.getElementById('summary-type'),
    sumDN: document.getElementById('summary-dn'),
    sumLength: document.getElementById('summary-length'),
    sumLeft: document.getElementById('summary-left'),
    sumRight: document.getElementById('summary-right'),
    sumProtection: document.getElementById('summary-protection'),
    livePriceAmount: document.getElementById('config-live-price-amount'),
    configAddToCartBtn: document.getElementById('config-add-to-cart-btn'),
    
    // Catalog Store
    productsContainer: document.getElementById('products-container'),
    catalogCategoryTabs: document.getElementById('catalog-category-tabs'),
    catalogSearch: document.getElementById('catalog-search'),
    priceRangeSlider: document.getElementById('price-range-slider'),
    priceRangeVal: document.getElementById('price-range-val'),
    catalogSort: document.getElementById('catalog-sort'),
    
    // Modals
    productModal: document.getElementById('product-detail-modal'),
    productModalClose: document.getElementById('product-modal-close-btn'),
    productModalBody: document.getElementById('product-modal-body'),
    
    checkoutModal: document.getElementById('checkout-modal'),
    checkoutModalClose: document.getElementById('checkout-modal-close-btn'),
    checkoutForm: document.getElementById('checkout-form'),
    deliveryAddressGroup: document.getElementById('delivery-address-group'),
    checkoutInvoiceCheck: document.getElementById('checkout-invoice-check'),
    invoiceDetailsGroup: document.getElementById('invoice-details-group'),
    checkoutSummaryItemsList: document.getElementById('checkout-summary-items-list'),
    checkoutSubtotal: document.getElementById('checkout-subtotal'),
    checkoutShipping: document.getElementById('checkout-shipping'),
    checkoutTotal: document.getElementById('checkout-total'),
    
    successModal: document.getElementById('success-modal'),
    successCloseBtn: document.getElementById('success-close-btn'),
    successOrderNum: document.getElementById('success-order-num'),
    invoiceDate: document.getElementById('invoice-date'),
    invoiceNum: document.getElementById('invoice-num'),
    invoiceItems: document.getElementById('invoice-items'),
    invoiceTotalAmount: document.getElementById('invoice-total-amount'),
    
    // Map Interactive elements
    mapMarker: document.getElementById('map-marker-trigger'),
    
    // Admin
    adminPanelBtn: document.getElementById('admin-panel-btn'),
    adminModal: document.getElementById('admin-modal'),
    adminModalClose: document.getElementById('admin-modal-close-btn'),
    adminTotalOrders: document.getElementById('admin-total-orders'),
    adminTotalRevenue: document.getElementById('admin-total-revenue'),
    adminPendingOrders: document.getElementById('admin-pending-orders'),
    adminOrdersTbody: document.getElementById('admin-orders-tbody')
};

// Initialize Application
function init() {
    // Load Cart and Orders from LocalStorage or use defaults
    const storedCart = localStorage.getItem('hydrolux_cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    
    const storedOrders = localStorage.getItem('hydrolux_orders');
    if (storedOrders) {
        orders = JSON.parse(storedOrders);
    } else {
        orders = [...MOCK_ORDERS];
        localStorage.setItem('hydrolux_orders', JSON.stringify(orders));
    }
    
    updateCartDisplay();
    renderCatalog();
    updateConfiguratorUI();
    
    // Add Click listener on all product cards in catalog grid to open their pages
    if (els.productsContainer) {
        els.productsContainer.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            if (!card) return;
            
            // If click target is a button or link (like Cart button or checkout)
            if (e.target.closest('button') || e.target.closest('a') || e.target.closest('.product-footer')) {
                return;
            }
            
            const link = card.querySelector('a');
            if (link) {
                window.location.href = link.getAttribute('href');
            }
        });
    }
    
    // Register Global Event Listeners
    window.addEventListener('scroll', handleWindowScroll);
    
    // Mobile Navigation Drawer Toggle
    els.menuToggle.addEventListener('click', () => {
        els.navLinks.classList.toggle('active');
        els.menuToggle.querySelector('i').classList.toggle('fa-bars');
        els.menuToggle.querySelector('i').classList.toggle('fa-xmark');
    });

    // Close mobile nav when link is clicked
    document.querySelectorAll('#nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            document.querySelectorAll('#nav-links a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
            els.navLinks.classList.remove('active');
            els.menuToggle.querySelector('i').classList.add('fa-bars');
            els.menuToggle.querySelector('i').classList.remove('fa-xmark');
        });
    });

    // Cart Drawer Toggle Listeners
    els.cartBtn.addEventListener('click', toggleCartSidebar);
    els.cartCloseBtn.addEventListener('click', toggleCartSidebar);
    els.cartOverlay.addEventListener('click', toggleCartSidebar);
    
    // Product Detail Modal Closer
    els.productModalClose.addEventListener('click', () => els.productModal.classList.remove('active'));
    els.productModal.addEventListener('click', (e) => {
        if(e.target === els.productModal) els.productModal.classList.remove('active');
    });
    
    // Checkout Modal Toggle & Handlers
    els.checkoutTriggerBtn.addEventListener('click', openCheckoutModal);
    els.checkoutModalClose.addEventListener('click', () => els.checkoutModal.classList.remove('active'));
    els.checkoutModal.addEventListener('click', (e) => {
        if(e.target === els.checkoutModal) els.checkoutModal.classList.remove('active');
    });
    
    // Shipping Radios Change Event
    document.querySelectorAll('input[name="shipping-method"]').forEach(radio => {
        radio.addEventListener('change', handleShippingMethodChange);
        // Also add click handler on parent option card for friendly UX
        radio.closest('.radio-option').addEventListener('click', () => {
            radio.checked = true;
            handleShippingMethodChange();
        });
    });

    // Invoice Checkbox Change
    els.checkoutInvoiceCheck.addEventListener('change', () => {
        if (els.checkoutInvoiceCheck.checked) {
            els.invoiceDetailsGroup.style.display = 'flex';
        } else {
            els.invoiceDetailsGroup.style.display = 'none';
        }
    });

    // Place Order Submission
    document.getElementById('place-order-submit').addEventListener('click', handleOrderSubmission);
    
    // Success Modal Closer
    els.successCloseBtn.addEventListener('click', () => {
        els.successModal.classList.remove('active');
    });
    
    // Admin Simulator Trigger
    els.adminPanelBtn.addEventListener('click', openAdminModal);
    els.adminModalClose.addEventListener('click', () => els.adminModal.classList.remove('active'));
    els.adminModal.addEventListener('click', (e) => {
        if(e.target === els.adminModal) els.adminModal.classList.remove('active');
    });
    
    // Configurator Steps Buttons Navigation
    els.btnNext.addEventListener('click', handleConfigNext);
    els.btnPrev.addEventListener('click', handleConfigPrev);
    
    // Configurator Type selections (Standard, High, Ultra)
    document.querySelectorAll('.configurator [data-type]').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.configurator [data-type]').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            currentConfig.type = card.dataset.type;
            currentConfig.typeText = card.querySelector('.option-title').innerText;
            currentConfig.priceFactor = parseFloat(card.dataset.priceFactor);
            updateConfiguratorUI();
        });
    });
    
    // Configurator Nominal Diameter DN select
    els.dnSelection.addEventListener('click', (e) => {
        const option = e.target.closest('[data-dn]');
        if (!option) return;
        
        document.querySelectorAll('#dn-selection [data-dn]').forEach(c => c.classList.remove('selected'));
        option.classList.add('selected');
        
        currentConfig.dn = option.dataset.dn;
        currentConfig.dnInch = option.dataset.dnInch;
        currentConfig.priceAddDN = parseFloat(option.dataset.priceAdd);
        updateConfiguratorUI();
    });
    
    // Configurator Length Slider and Number input syncing
    els.hoseLengthSlider.addEventListener('input', () => {
        currentConfig.length = parseFloat(els.hoseLengthSlider.value);
        els.hoseLengthNum.value = currentConfig.length;
        updateConfiguratorUI();
    });
    
    els.hoseLengthNum.addEventListener('input', () => {
        let val = parseFloat(els.hoseLengthNum.value);
        if (isNaN(val) || val <= 0) val = 0.1;
        if (val > 50) val = 50;
        
        currentConfig.length = val;
        els.hoseLengthSlider.value = val;
        updateConfiguratorUI();
    });
    
    // Configurator Left & Right Fittings selections
    els.fittingLeftSelect.addEventListener('click', (e) => {
        const option = e.target.closest('[data-fitting]');
        if (!option) return;
        
        document.querySelectorAll('#fitting-left-select [data-fitting]').forEach(c => c.classList.remove('selected'));
        option.classList.add('selected');
        
        currentConfig.fittingLeft = option.dataset.fitting;
        currentConfig.fittingLeftName = option.dataset.fittingName;
        currentConfig.fittingLeftPrice = parseFloat(option.dataset.priceAdd);
        updateConfiguratorUI();
    });
    
    els.fittingRightSelect.addEventListener('click', (e) => {
        const option = e.target.closest('[data-fitting]');
        if (!option) return;
        
        document.querySelectorAll('#fitting-right-select [data-fitting]').forEach(c => c.classList.remove('selected'));
        option.classList.add('selected');
        
        currentConfig.fittingRight = option.dataset.fitting;
        currentConfig.fittingRightName = option.dataset.fittingName;
        currentConfig.fittingRightPrice = parseFloat(option.dataset.priceAdd);
        updateConfiguratorUI();
    });
    
    // Configurator Protections selection
    document.querySelectorAll('.configurator [data-protection]').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.configurator [data-protection]').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            
            currentConfig.protection = card.dataset.protection;
            currentConfig.protectionName = card.dataset.protectionName;
            currentConfig.protectionPriceMeter = parseFloat(card.dataset.priceMeter);
            updateConfiguratorUI();
        });
    });
    
    // Add custom configured hose to cart trigger
    els.configAddToCartBtn.addEventListener('click', addConfigHoseToCart);
    
    // Catalog categories tabs triggers
    els.catalogCategoryTabs.addEventListener('click', (e) => {
        const tab = e.target.closest('.category-pill');
        if (!tab) return;
        
        document.querySelectorAll('#catalog-category-tabs .category-pill').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        renderCatalog();
    });
    
    // Catalog search keyups
    els.catalogSearch.addEventListener('input', renderCatalog);
    
    // Catalog price range input
    els.priceRangeSlider.addEventListener('input', () => {
        els.priceRangeVal.innerText = els.priceRangeSlider.value + " лв.";
        renderCatalog();
    });
    
    // Catalog Sorting select
    els.catalogSort.addEventListener('change', renderCatalog);
    
    // Interactive Map Pin hover popup simulation
    els.mapMarker.addEventListener('click', () => {
        const tooltip = document.querySelector('.map-tooltip');
        tooltip.style.transform = 'scale(1.05)';
        tooltip.style.border = '1px solid var(--accent-neon)';
        tooltip.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.2)';
        
        setTimeout(() => {
            tooltip.style.transform = 'none';
            tooltip.style.border = '1px solid var(--border-highlight)';
            tooltip.style.boxShadow = 'var(--glass-shadow)';
        }, 1500);
    });
}

// Window Scroll effect
function handleWindowScroll() {
    if (window.scrollY > 50) {
        els.header.classList.add('scrolled');
    } else {
        els.header.classList.remove('scrolled');
    }
}

// Sidebar Cart controls
function toggleCartSidebar() {
    els.cartOverlay.classList.toggle('active');
    els.cartSidebar.classList.toggle('active');
}

// Add Standard Catalog Product to Cart
function addProductToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    // Check if product is already in cart
    const existingIndex = cart.findIndex(item => item.isConfigured === false && item.product.id === productId);
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            id: `std_${productId}_${Date.now()}`,
            isConfigured: false,
            product: product,
            quantity: 1,
            price: product.price
        });
    }
    
    updateCartDisplay();
    // Open cart drawer to confirm addition visually
    toggleCartSidebar();
}

// Calculate configured hose price in real-time
function calculateConfiguredHosePrice() {
    // Formula: length * (basePrice + DNPriceAdd) + LeftFittingPrice + RightFittingPrice + (length * ProtectionPriceMeter)
    const baseHosePricePerMeter = currentConfig.priceFactor;
    const dnPriceAddition = currentConfig.priceAddDN;
    const leftFitting = currentConfig.fittingLeftPrice;
    const rightFitting = currentConfig.fittingRightPrice;
    const protectionPerMeter = currentConfig.protectionPriceMeter;
    
    const hosePart = currentConfig.length * (baseHosePricePerMeter + dnPriceAddition);
    const fittingsPart = leftFitting + rightFitting;
    const protectionPart = currentConfig.length * protectionPerMeter;
    
    const total = hosePart + fittingsPart + protectionPart;
    return parseFloat(total.toFixed(2));
}

// Update Configurator summary & live labels
function updateConfiguratorUI() {
    const calculatedPrice = calculateConfiguredHosePrice();
    
    // Set labels
    els.sumType.innerText = currentConfig.typeText;
    els.sumDN.innerText = `DN ${currentConfig.dn} (${currentConfig.dnInch}")`;
    els.sumLength.innerText = `${currentConfig.length} метра`;
    els.sumLeft.innerText = currentConfig.fittingLeftName;
    els.sumRight.innerText = currentConfig.fittingRightName;
    els.sumProtection.innerText = currentConfig.protectionName;
    
    els.currentLengthLabel.innerText = `${currentConfig.length} м`;
    els.livePriceAmount.innerText = calculatedPrice.toFixed(2);
    
    // Handle step panel active indicator styles
    els.stepIndicators.forEach(ind => {
        const stepNum = parseInt(ind.dataset.step);
        ind.classList.remove('active', 'completed');
        
        if (stepNum === activeStep) {
            ind.classList.add('active');
        } else if (stepNum < activeStep) {
            ind.classList.add('completed');
        }
    });
    
    // Update progress indicator bar width
    const progressWidth = ((activeStep - 1) / (els.stepIndicators.length - 1)) * 100;
    els.progressLine.style.width = `${progressWidth}%`;
}

// Configurator next step
function handleConfigNext() {
    if (activeStep < 4) {
        els.stepPanels[activeStep - 1].classList.remove('active');
        activeStep++;
        els.stepPanels[activeStep - 1].classList.add('active');
        
        // Enable prev btn
        els.btnPrev.removeAttribute('disabled');
        
        if (activeStep === 4) {
            els.btnNext.innerHTML = 'Преглед <i class="fa-solid fa-circle-check"></i>';
        }
        
        updateConfiguratorUI();
    } else {
        // Step 4 "Next" scrolls user smoothly to the summary preview box
        document.querySelector('.config-preview-panel').scrollIntoView({ behavior: 'smooth' });
    }
}

// Configurator prev step
function handleConfigPrev() {
    if (activeStep > 1) {
        els.stepPanels[activeStep - 1].classList.remove('active');
        activeStep--;
        els.stepPanels[activeStep - 1].classList.add('active');
        
        els.btnNext.innerHTML = 'Следваща <i class="fa-solid fa-arrow-right"></i>';
        
        if (activeStep === 1) {
            els.btnPrev.setAttribute('disabled', 'true');
        }
        
        updateConfiguratorUI();
    }
}

// Add Custom Configured Hose to Cart
function addConfigHoseToCart() {
    const calculatedPrice = calculateConfiguredHosePrice();
    const hoseSpecString = `Маркуч ${currentConfig.typeText}, диаметър DN ${currentConfig.dn} (${currentConfig.dnInch}"), дължина ${currentConfig.length}м. Накрайници: Ляв (${currentConfig.fittingLeftName}) / Десен (${currentConfig.fittingRightName}). Защита: ${currentConfig.protectionName}.`;
    
    const configuredItem = {
        id: `config_${Date.now()}`,
        isConfigured: true,
        product: {
            title: `Индивидуален хидравличен маркуч DN${currentConfig.dn}`,
            category: "hoses",
            categoryName: "Индивидуални маркучи",
            image: "assets/hoses.png",
            specs: {
                "Тип маркуч": currentConfig.typeText,
                "Диаметър": `DN ${currentConfig.dn} (${currentConfig.dnInch}")`,
                "Дължина": `${currentConfig.length} метра`,
                "Страна А (Лява)": currentConfig.fittingLeftName,
                "Страна Б (Дясна)": currentConfig.fittingRightName,
                "Защита": currentConfig.protectionName
            },
            description: hoseSpecString
        },
        quantity: 1,
        price: calculatedPrice
    };
    
    cart.push(configuredItem);
    updateCartDisplay();
    toggleCartSidebar();
}

// Update Cart counts, totals and render HTML
function updateCartDisplay() {
    // Save to local storage
    localStorage.setItem('hydrolux_cart', JSON.stringify(cart));
    
    // Count totals
    let totalItems = 0;
    let subtotal = 0;
    
    cart.forEach(item => {
        totalItems += item.quantity;
        subtotal += item.price * item.quantity;
    });
    
    // Update badge counter
    els.cartCount.innerText = totalItems;
    
    // Calc VAT (20% included in Bulgaria)
    const subtotalNoVat = subtotal / 1.2;
    const vatAmount = subtotal - subtotalNoVat;
    
    els.cartSubtotal.innerText = `${subtotalNoVat.toFixed(2)} лв.`;
    els.cartVat.innerText = `${vatAmount.toFixed(2)} лв.`;
    els.cartTotal.innerText = `${subtotal.toFixed(2)} лв.`;
    
    // Enable/disable buttons based on cart size
    if (cart.length > 0) {
        els.checkoutTriggerBtn.removeAttribute('disabled');
    } else {
        els.checkoutTriggerBtn.setAttribute('disabled', 'true');
    }
    
    // Render list
    els.cartItemsList.innerHTML = '';
    
    if (cart.length === 0) {
        els.cartItemsList.innerHTML = `
            <div class="empty-cart-message">
                <i class="fa-solid fa-cart-flatbed"></i>
                <p>Количката ви е празна.</p>
                <a href="#catalog" class="btn btn-secondary btn-sm" style="margin-top: 16px;" onclick="toggleCartSidebar()">Разгледай продуктите</a>
            </div>
        `;
        return;
    }
    
    cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        
        let specsHtml = '';
        if (item.isConfigured) {
            specsHtml = `
                <div class="cart-item-specs">
                    <span>${item.product.specs["Тип маркуч"]}, DN ${item.product.specs["Диаметър"]}</span><br>
                    <span>L = ${item.product.specs["Дължина"]}, накрайници: ${item.product.specs["Страна А (Лява)"]} / ${item.product.specs["Страна Б (Дясна)"]}</span>
                </div>
            `;
        } else {
            specsHtml = `
                <div class="cart-item-specs">
                    <span>Стандарт: ${item.product.specs["Стандарт"] || item.product.specs["Тип"] || ""}</span><br>
                    <span>Размер: ${item.product.specs["Диаметър (DN)"] || item.product.specs["Размер на тялото"] || ""}</span>
                </div>
            `;
        }
        
        itemEl.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.product.image}" alt="${item.product.title}">
            </div>
            <div class="cart-item-details">
                <div>
                    <span class="cart-item-title">${item.product.title}</span>
                    ${specsHtml}
                </div>
                <div class="cart-item-footer">
                    <div class="qty-control">
                        <span class="qty-btn" onclick="adjustItemQty('${item.id}', -1)">-</span>
                        <span class="qty-number">${item.quantity}</span>
                        <span class="qty-btn" onclick="adjustItemQty('${item.id}', 1)">+</span>
                    </div>
                    <span class="cart-item-price">${(item.price * item.quantity).toFixed(2)} лв.</span>
                </div>
            </div>
            <span class="cart-item-remove" onclick="removeCartItem('${item.id}')" aria-label="Премахни от количката">
                <i class="fa-solid fa-trash-can"></i>
            </span>
        `;
        els.cartItemsList.appendChild(itemEl);
    });
}

// Adjust quantity inside cart drawer
window.adjustItemQty = function(itemId, change) {
    const index = cart.findIndex(item => item.id === itemId);
    if (index === -1) return;
    
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    
    updateCartDisplay();
};

// Remove single item from cart drawer
window.removeCartItem = function(itemId) {
    const index = cart.findIndex(item => item.id === itemId);
    if (index === -1) return;
    
    cart.splice(index, 1);
    updateCartDisplay();
};

// Open Product details Modal
window.openProductDetail = function(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    els.modalProductTitle = document.getElementById('modal-product-title');
    els.modalProductTitle.innerText = product.title;
    
    // Build specs list
    let specsRows = '';
    for (let key in product.specs) {
        specsRows += `
            <div class="tech-spec-row">
                <span class="tech-spec-label">${key}:</span>
                <span class="tech-spec-val">${product.specs[key]}</span>
            </div>
        `;
    }
    
    els.productModalBody.innerHTML = `
        <div class="detail-grid">
            <div class="detail-image-box">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="detail-details">
                <span class="detail-category">${product.categoryName}</span>
                <h4 class="detail-title">${product.title}</h4>
                <p class="detail-desc">${product.description}</p>
                
                <div class="detail-tech-specs">
                    <h5>Технически спецификации</h5>
                    ${specsRows}
                </div>
                
                <div class="detail-buy-row">
                    <div style="display:flex; flex-direction:column;">
                        <span style="font-size:0.75rem; color:var(--text-muted);">Цена с ДДС</span>
                        <span style="font-size:1.8rem; font-weight:800; font-family:var(--font-heading); color:var(--text-primary);">${product.price.toFixed(2)} лв.</span>
                    </div>
                    <button class="btn btn-primary" onclick="addProductToCart(${product.id}); document.getElementById('product-detail-modal').classList.remove('active');" style="flex-grow:1;">
                        <i class="fa-solid fa-cart-plus"></i> Купи продукта
                    </button>
                </div>
            </div>
        </div>
    `;
    
    els.productModal.classList.add('active');
};

// Render Products Catalog based on current tab filters and search input
function renderCatalog() {
    const activeTab = document.querySelector('#catalog-category-tabs .category-pill.active');
    const selectedCategory = activeTab ? activeTab.dataset.category : 'all';
    
    const query = els.catalogSearch.value.toLowerCase().trim();
    const maxPrice = parseFloat(els.priceRangeSlider.value);
    const sortType = els.catalogSort.value;
    
    // Filtering logic
    let filtered = PRODUCTS.filter(product => {
        // Category check
        const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
        
        // Search query check
        const searchMatch = !query || 
            product.title.toLowerCase().includes(query) || 
            product.description.toLowerCase().includes(query) ||
            Object.values(product.specs).some(val => val.toLowerCase().includes(query));
            
        // Price limit check
        const priceMatch = product.price <= maxPrice;
        
        return categoryMatch && searchMatch && priceMatch;
    });
    
    // Sorting logic
    if (sortType === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortType === 'name-asc') {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    // Clear catalog container
    els.productsContainer.innerHTML = '';
    
    if (filtered.length === 0) {
        els.productsContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 0; color: var(--text-muted);">
                <i class="fa-solid fa-magnifying-glass" style="font-size: 3rem; margin-bottom: 16px; color: var(--border-color);"></i>
                <p>Няма намерени продукти по избраните критерии.</p>
            </div>
        `;
        return;
    }
    
    // Populate cards
    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // Take up to 4 major technical specs to show on card
        const specKeys = Object.keys(product.specs).slice(0, 4);
        let specsHtml = '';
        specKeys.forEach(key => {
            specsHtml += `
                <div class="spec-line">
                    <i class="fa-solid fa-circle-check"></i>
                    <span>${key}: ${product.specs[key]}</span>
                </div>
            `;
        });
        
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.title}">
                <span class="product-tag">${product.tag}</span>
            </div>
            <div class="product-details">
                <span class="product-category">${product.categoryName}</span>
                <h3 class="product-title" onclick="openProductDetail(${product.id})" style="cursor:pointer;">${product.title}</h3>
                <div class="product-specs">
                    ${specsHtml}
                </div>
                <div class="product-footer">
                    <div class="product-price-block">
                        <span class="product-price-label">Цена с ДДС</span>
                        <span class="product-price">${product.price.toFixed(2)} лв.</span>
                    </div>
                    <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
                        <a href="product-${product.id}.html" class="btn btn-secondary btn-sm" style="display:flex;align-items:center;gap:6px;text-decoration:none;" aria-label="Страница">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> <span style="font-size:0.78rem;">Страница</span>
                        </a>
                        <button class="btn btn-primary btn-icon-only" onclick="addProductToCart(${product.id})" aria-label="Купи">
                            <i class="fa-solid fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        els.productsContainer.appendChild(card);
    });
}

// Open Checkout and build order preview summary
function openCheckoutModal() {
    // Hide Cart Sidebar
    els.cartSidebar.classList.remove('active');
    els.cartOverlay.classList.remove('active');
    
    // Build summary list inside checkout modal
    els.checkoutSummaryItemsList.innerHTML = '';
    
    let subtotal = 0;
    cart.forEach(item => {
        const row = document.createElement('div');
        row.className = 'checkout-summary-item';
        row.style.marginBottom = '12px';
        
        const priceSum = item.price * item.quantity;
        subtotal += priceSum;
        
        row.innerHTML = `
            <div>
                <span style="font-weight: 700; color: var(--text-primary);">${item.product.title}</span><br>
                <span style="color: var(--text-muted); font-size:0.8rem;">${item.quantity} бр. x ${item.price.toFixed(2)} лв.</span>
            </div>
            <span style="font-weight: 600; color: var(--text-primary);">${priceSum.toFixed(2)} лв.</span>
        `;
        els.checkoutSummaryItemsList.appendChild(row);
    });
    
    // Set financial numbers
    els.checkoutSubtotal.innerText = `${subtotal.toFixed(2)} лв.`;
    
    // Calculate shipping factor
    const selectedShipping = document.querySelector('input[name="shipping-method"]:checked').value;
    updateCheckoutPricing(subtotal, selectedShipping);
    
    els.checkoutModal.classList.add('active');
}

// Dynamic Checkout shipping cost calculation
function updateCheckoutPricing(subtotal, shippingMethod) {
    let shippingCost = 0;
    
    if (shippingMethod === 'office') {
        shippingCost = subtotal > 150 ? 0 : 7.50; // free shipping over 150 BGN
    } else if (shippingMethod === 'address') {
        shippingCost = subtotal > 200 ? 0 : 12.00;
    } else if (shippingMethod === 'pickup') {
        shippingCost = 0; // always free pickup in Montana
    }
    
    els.checkoutShipping.innerText = shippingCost === 0 ? "Безплатна" : `${shippingCost.toFixed(2)} лв.`;
    
    const total = subtotal + shippingCost;
    els.checkoutTotal.innerText = `${total.toFixed(2)} лв.`;
}

// Shipping radio change logic
function handleShippingMethodChange() {
    const selectedShipping = document.querySelector('input[name="shipping-method"]:checked').value;
    
    // Visual select feedback (add class on cards)
    document.querySelectorAll('.radio-option').forEach(card => card.classList.remove('selected'));
    const activeCard = document.querySelector(`input[value="${selectedShipping}"]`).closest('.radio-option');
    activeCard.classList.add('selected');
    
    if (selectedShipping === 'pickup') {
        els.deliveryAddressGroup.style.display = 'none';
        document.getElementById('checkout-address').removeAttribute('required');
    } else {
        els.deliveryAddressGroup.style.display = 'flex';
        document.getElementById('checkout-address').setAttribute('required', 'true');
        
        if (selectedShipping === 'office') {
            document.getElementById('checkout-address').placeholder = "Въведете град и избран от вас офис на Еконт или Спиди...";
        } else {
            document.getElementById('checkout-address').placeholder = "Въведете град, пощенски код, улица, блок, апартамент...";
        }
    }
    
    // Recalc price summary inside checkout
    let subtotal = 0;
    cart.forEach(item => subtotal += item.price * item.quantity);
    updateCheckoutPricing(subtotal, selectedShipping);
}

// Checkout order submission validator and generator
function handleOrderSubmission(e) {
    e.preventDefault();
    
    const name = document.getElementById('checkout-name').value.trim();
    const phone = document.getElementById('checkout-phone').value.trim();
    const email = document.getElementById('checkout-email').value.trim();
    const shippingMethod = document.querySelector('input[name="shipping-method"]:checked').value;
    const address = document.getElementById('checkout-address').value.trim();
    
    // Validation
    if (!name || !phone || !email) {
        alert('Моля, попълнете всички задължителни полета със звездичка (*).');
        return;
    }
    
    if (shippingMethod !== 'pickup' && !address) {
        alert('Моля, въведете адрес за доставка или желан офис на куриер.');
        return;
    }
    
    // Company invoicing validation
    const invoiceChecked = els.checkoutInvoiceCheck.checked;
    let companyName = "";
    let companyEik = "";
    let companyAddress = "";
    let companyMol = "";
    
    if (invoiceChecked) {
        companyName = document.getElementById('company-name').value.trim();
        companyEik = document.getElementById('company-eik').value.trim();
        companyAddress = document.getElementById('company-address').value.trim();
        companyMol = document.getElementById('company-mol').value.trim();
        
        if (!companyName || !companyEik || !companyAddress) {
            alert('Моля, попълнете фирмените данни за фактура.');
            return;
        }
    }
    
    // Build cart items summary string for the admin logs
    const itemsSummaryList = cart.map(item => `${item.product.title} (${item.quantity} бр.)`).join(', ');
    
    // Calculate final cost
    let subtotal = 0;
    cart.forEach(item => subtotal += item.price * item.quantity);
    
    let shippingCost = 0;
    let shippingMethodLabel = "";
    if (shippingMethod === 'office') {
        shippingCost = subtotal > 150 ? 0 : 7.50;
        shippingMethodLabel = `До офис на Еконт/Спиди (${address})`;
    } else if (shippingMethod === 'address') {
        shippingCost = subtotal > 200 ? 0 : 12.00;
        shippingMethodLabel = `До адрес (${address})`;
    } else if (shippingMethod === 'pickup') {
        shippingCost = 0;
        shippingMethodLabel = "Вземане от базата в Монтана";
    }
    
    const finalTotal = subtotal + shippingCost;
    
    // Order structure
    const orderIdNumber = Math.floor(1000 + Math.random() * 9000);
    const orderId = `HL-${orderIdNumber}`;
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}.${String(today.getMonth() + 1).padStart(2, '0')}.${today.getFullYear()}`;
    
    const newOrder = {
        id: orderId,
        date: formattedDate,
        clientName: name,
        phone: phone,
        email: email,
        itemsSummary: itemsSummaryList,
        total: finalTotal,
        shipping: shippingMethodLabel,
        status: "pending",
        invoice: {
            isNeeded: invoiceChecked,
            companyName: companyName,
            eik: companyEik,
            address: companyAddress,
            mol: companyMol
        }
    };
    
    // Push new order to state database & save
    orders.unshift(newOrder);
    localStorage.setItem('hydrolux_orders', JSON.stringify(orders));
    
    // Build success invoice elements
    els.successOrderNum.innerText = orderIdNumber;
    els.invoiceDate.innerText = `${formattedDate} г.`;
    els.invoiceNum.innerText = `2026${orderIdNumber}`;
    
    // Populate proforma invoice lines
    els.invoiceItems.innerHTML = '';
    cart.forEach(item => {
        const itemRow = document.createElement('div');
        itemRow.className = 'invoice-item-row';
        itemRow.innerHTML = `
            <span>${item.product.title} x${item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)} лв.</span>
        `;
        els.invoiceItems.appendChild(itemRow);
    });
    
    // In case of shipping cost
    if (shippingCost > 0) {
        const shipRow = document.createElement('div');
        shipRow.className = 'invoice-item-row';
        shipRow.innerHTML = `
            <span>Куриерски транспорт</span>
            <span>${shippingCost.toFixed(2)} лв.</span>
        `;
        els.invoiceItems.appendChild(shipRow);
    }
    
    els.invoiceTotalAmount.innerText = `${finalTotal.toFixed(2)} лв.`;
    
    // Reset Cart
    cart = [];
    updateCartDisplay();
    
    // Hide Checkout modal, show Success modal
    els.checkoutModal.classList.remove('active');
    
    // Reset checkout form fields
    els.checkoutForm.reset();
    els.invoiceDetailsGroup.style.display = 'none';
    els.deliveryAddressGroup.style.display = 'flex';
    
    // Open Success Screen
    els.successModal.classList.add('active');
}

// Open Admin Panel Modal
function openAdminModal() {
    els.adminModal.classList.add('active');
    renderAdminPanel();
}

// Render Admin Panel orders & dashboard metrics
function renderAdminPanel() {
    els.adminTotalOrders.innerText = orders.length;
    
    // Calculate total simulated revenue
    let revenue = 0;
    let pendingCount = 0;
    
    orders.forEach(order => {
        if (order.status !== 'cancelled') {
            revenue += order.total;
        }
        if (order.status === 'pending') {
            pendingCount++;
        }
    });
    
    els.adminTotalRevenue.innerText = `${revenue.toFixed(2)} лв.`;
    els.adminPendingOrders.innerText = pendingCount;
    
    // Populating table
    els.adminOrdersTbody.innerHTML = '';
    
    if (orders.length === 0) {
        els.adminOrdersTbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; color: var(--text-muted);">Няма получени поръчки до момента.</td>
            </tr>
        `;
        return;
    }
    
    orders.forEach((order, index) => {
        const tr = document.createElement('tr');
        
        let statusClass = "status-pending";
        let statusText = "Чакаща";
        if (order.status === 'processed') {
            statusClass = "status-processed";
            statusText = "Обработена";
        } else if (order.status === 'shipped') {
            statusClass = "status-shipped";
            statusText = "Изпратена";
        } else if (order.status === 'cancelled') {
            statusClass = "status-cancelled";
            statusText = "Анулирана";
        }
        
        let actionBtnHtml = '';
        if (order.status === 'pending') {
            actionBtnHtml = `<button class="admin-action-btn" onclick="changeOrderStatus('${order.id}', 'processed')">Потвърди</button>`;
        } else if (order.status === 'processed') {
            actionBtnHtml = `<button class="admin-action-btn" onclick="changeOrderStatus('${order.id}', 'shipped')">Изпрати</button>`;
        } else {
            actionBtnHtml = `<span style="color:var(--text-muted); font-size:0.8rem;">Приключена</span>`;
        }
        
        tr.innerHTML = `
            <td style="font-weight: 700; color: var(--accent-primary);">${order.id}</td>
            <td>
                <span style="font-weight: 600; color: var(--text-primary);">${order.clientName}</span><br>
                <span style="font-size: 0.8rem; color: var(--text-muted);">${order.phone}</span>
            </td>
            <td style="max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${order.itemsSummary}">${order.itemsSummary}</td>
            <td style="font-weight: 700;">${order.total.toFixed(2)} лв.</td>
            <td style="font-size: 0.8rem; color: var(--text-secondary);">${order.shipping}</td>
            <td>
                <span class="status-badge ${statusClass}">${statusText}</span>
            </td>
            <td>${actionBtnHtml}</td>
        `;
        els.adminOrdersTbody.appendChild(tr);
    });
}

// Change simulated status of order in Admin panel
window.changeOrderStatus = function(orderId, nextStatus) {
    const index = orders.findIndex(o => o.id === orderId);
    if (index === -1) return;
    
    orders[index].status = nextStatus;
    localStorage.setItem('hydrolux_orders', JSON.stringify(orders));
    
    renderAdminPanel();
};

// Start application after document parsed
document.addEventListener('DOMContentLoaded', init);
