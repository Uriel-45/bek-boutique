/* =====================================================
   BEK BOUTIQUE - JavaScript Principal
   Boutique online de moda SHEIN
   ===================================================== */

// =====================================================
// 1. DATOS DE PRODUCTOS
// =====================================================

/**
 * Array con la información de todos los productos del catálogo
 * Cada producto tiene: id, nombre, precio, categoría, descripción e imagen placeholder
 */
const productos = [
    {
        id: 1,
        nombre: "Vestido Floral Elegante",
        precio: "Q150.00",
        categoria: "Ropa Mujer",
        categoriaSlug: "ropa-mujer",
        descripcion: "Hermoso vestido floral ideal para cualquier ocasión. Tela suave y cómoda, perfecto para el clima guatemalteco. Disponible en varias tallas.",
        badge: "Nuevo"
    },
    {
        id: 2,
        nombre: "Blusa Casual Moderna",
        precio: "Q85.00",
        categoria: "Ropa Mujer",
        categoriaSlug: "ropa-mujer",
        descripcion: "Blusa moderna y versátil para el día a día. Combina con todo y es muy cómoda. Diseño SHEIN de alta calidad."
    },
    {
        id: 3,
        nombre: "Pantalón de Mezclilla",
        precio: "Q120.00",
        categoria: "Ropa Mujer",
        categoriaSlug: "ropa-mujer",
        descripcion: "Pantalón de mezclilla con corte moderno. Cómodo y duradero, perfecto para cualquier ocasión casual."
    },
    {
        id: 4,
        nombre: "Camisa Casual",
        precio: "Q95.00",
        categoria: "Ropa Hombre",
        categoriaSlug: "ropa-hombre",
        descripcion: "Camisa casual para hombre, ideal para el trabajo o salidas casuales. Tela fresca y resistente."
    },
    {
        id: 5,
        nombre: "Pantalón Deportivo",
        precio: "Q110.00",
        categoria: "Ropa Hombre",
        categoriaSlug: "ropa-hombre",
        descripcion: "Pantalón deportivo cómodo para actividades físicas o uso casual. Material suave y transpirable."
    },
    {
        id: 6,
        nombre: "Conjunto Infantil",
        precio: "Q75.00",
        categoria: "Ropa Niños",
        categoriaSlug: "ropa-ninos",
        descripcion: "Conjunto colorido para niños, cómodo y resistente para el juego diario. Fácil de lavar y mantener.",
        badge: "Popular"
    },
    {
        id: 7,
        nombre: "Vestido para Niña",
        precio: "Q80.00",
        categoria: "Ropa Niños",
        categoriaSlug: "ropa-ninos",
        descripcion: "Vestido adorable para niñas, perfecto para fiestas o uso diario. Colores vibrantes y diseño encantador."
    },
    {
        id: 8,
        nombre: "Zapatillas Deportivas",
        precio: "Q180.00",
        categoria: "Calzado",
        categoriaSlug: "calzado",
        descripcion: "Zapatillas deportivas cómodas y con estilo. Ideales para caminar, hacer ejercicio o uso diario.",
        badge: "Oferta"
    },
    {
        id: 9,
        nombre: "Sandalias de Moda",
        precio: "Q95.00",
        categoria: "Calzado",
        categoriaSlug: "calzado",
        descripcion: "Sandalias de moda para lucir elegante en cualquier ocasión. Cómodas para todo el día."
    },
    {
        id: 10,
        nombre: "Set de Maquillaje Profesional",
        precio: "Q150.00",
        categoria: "Maquillaje",
        categoriaSlug: "maquillaje",
        descripcion: "Set completo de maquillaje con colores variados. Incluye sombras, rubor, labiales y más. Calidad profesional.",
        badge: "Nuevo"
    },
    {
        id: 11,
        nombre: "Labial de Larga Duración",
        precio: "Q45.00",
        categoria: "Maquillaje",
        categoriaSlug: "maquillaje",
        descripcion: "Labial de larga duración con acabado mate. Varios colores disponibles para todos los gustos."
    },
    {
        id: 12,
        nombre: "Bolso Elegante",
        precio: "Q130.00",
        categoria: "Accesorios",
        categoriaSlug: "accesorios",
        descripcion: "Bolso elegante y espacioso para llevar todo lo necesario. Diseño moderno y materiales de calidad."
    },
    {
        id: 13,
        nombre: "Aretes de Moda",
        precio: "Q35.00",
        categoria: "Accesorios",
        categoriaSlug: "accesorios",
        descripcion: "Aretes de moda con diseños únicos. Perfectos para complementar cualquier outfit."
    },
    {
        id: 14,
        nombre: "Perfume Floral",
        precio: "Q120.00",
        categoria: "Variados",
        categoriaSlug: "variados",
        descripcion: "Perfume con fragancia floral delicada y duradera. Ideal para el uso diario."
    },
    {
        id: 15,
        nombre: "Cinturón Moderno",
        precio: "Q50.00",
        categoria: "Variados",
        categoriaSlug: "variados",
        descripcion: "Cinturón de diseño moderno, versátil y elegante. Complemento perfecto para tu guardarropa."
    },
    {
        id: 16,
        nombre: "Falda Plisada",
        precio: "Q95.00",
        categoria: "Ropa Mujer",
        categoriaSlug: "ropa-mujer",
        descripcion: "Falda plisada elegante y femenina. Perfecta para ocasiones especiales o el día a día."
    }
];

// =====================================================
// 2. SELECTORES DEL DOM
// =====================================================

// Elementos del DOM que usaremos frecuentemente
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
const productsGrid = document.getElementById('products-grid');
const modal = document.getElementById('product-modal');
const modalClose = document.getElementById('modal-close');
const backToTop = document.getElementById('back-to-top');
const orderForm = document.getElementById('order-form');
const formSuccess = document.getElementById('form-success');
const newOrderBtn = document.getElementById('new-order-btn');
const categoryCards = document.querySelectorAll('.category-card');

// =====================================================
// 3. MENÚ HAMBURGUESA (MÓVIL)
// =====================================================

/**
 * Alterna la visibilidad del menú móvil
 */
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    
    // Actualizar atributo aria-expanded para accesibilidad
    const isExpanded = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
    
    // Prevenir scroll cuando el menú está abierto
    document.body.style.overflow = isExpanded ? 'hidden' : '';
}

/**
 * Cierra el menú móvil
 */
function closeMobileMenu() {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

// Event listener para el botón hamburguesa
if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
}

// Cerrar menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
        
        // Actualizar enlace activo
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// =====================================================
// 4. FILTROS DEL CATÁLOGO
// =====================================================

/**
 * Filtra los productos según la categoría seleccionada
 * @param {string} categoria - Slug de la categoría a filtrar
 */
function filtrarProductos(categoria) {
    productCards.forEach(card => {
        const cardCategory = card.dataset.category;
        
        if (categoria === 'todos' || cardCategory === categoria) {
            // Mostrar producto con animación
            card.classList.remove('hidden');
            card.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
            // Ocultar producto
            card.classList.add('hidden');
        }
    });
}

/**
 * Actualiza el estado visual de los botones de filtro
 * @param {HTMLElement} botonActivo - El botón que debe marcarse como activo
 */
function actualizarFiltroActivo(botonActivo) {
    filterBtns.forEach(btn => btn.classList.remove('active'));
    botonActivo.classList.add('active');
}

// Event listeners para los botones de filtro
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filtro = btn.dataset.filter;
        actualizarFiltroActivo(btn);
        filtrarProductos(filtro);
    });
});

// Event listeners para las tarjetas de categoría (sección de categorías)
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const categoria = card.dataset.category;
        
        // Scroll al catálogo
        document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
        
        // Actualizar filtro después de un pequeño delay para el scroll
        setTimeout(() => {
            const filterBtn = document.querySelector(`[data-filter="${categoria}"]`);
            if (filterBtn) {
                actualizarFiltroActivo(filterBtn);
                filtrarProductos(categoria);
            }
        }, 500);
    });
});

// =====================================================
// 5. MODAL DE PRODUCTO
// =====================================================

/**
 * Abre el modal con los detalles de un producto
 * @param {number} productId - ID del producto a mostrar
 */
function abrirModal(productId) {
    const producto = productos.find(p => p.id === productId);
    
    if (!producto) return;
    
    // Actualizar contenido del modal
    document.getElementById('modal-title').textContent = producto.nombre;
    document.getElementById('modal-price').textContent = producto.precio;
    document.getElementById('modal-category').textContent = producto.categoria;
    document.getElementById('modal-description').textContent = producto.descripcion;
    
    // Actualizar imagen placeholder
    const modalImage = document.getElementById('modal-image');
    modalImage.innerHTML = `<span>${producto.nombre.split(' ')[0]}</span>`;
    
    // Mostrar modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Actualizar el selector del producto en el formulario
    const productoSelect = document.getElementById('producto');
    if (productoSelect) {
        const option = Array.from(productoSelect.options).find(
            opt => opt.value.includes(producto.nombre)
        );
        if (option) {
            productoSelect.value = option.value;
        }
    }
}

/**
 * Cierra el modal de producto
 */
function cerrarModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners para los botones "Ver detalles"
document.querySelectorAll('.btn-product').forEach(btn => {
    btn.addEventListener('click', () => {
        const productId = parseInt(btn.dataset.product);
        abrirModal(productId);
    });
});

// Event listener para cerrar modal
if (modalClose) {
    modalClose.addEventListener('click', cerrarModal);
}

// Cerrar modal al hacer clic fuera del contenido
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            cerrarModal();
        }
    });
}

// Cerrar modal con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        cerrarModal();
    }
});

// Cerrar modal y scrollear al formulario al hacer clic en "Hacer Pedido"
document.querySelectorAll('.modal-order-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        cerrarModal();
    });
});

// =====================================================
// 6. VALIDACIÓN DEL FORMULARIO
// =====================================================

/**
 * Valida un campo del formulario
 * @param {HTMLElement} input - Elemento input a validar
 * @returns {boolean} - True si el campo es válido
 */
function validarCampo(input) {
    const errorElement = document.getElementById(`${input.id}-error`);
    let isValid = true;
    let errorMessage = '';
    
    // Validación según el tipo de campo
    switch (input.id) {
        case 'nombre':
            if (!input.value.trim()) {
                isValid = false;
                errorMessage = 'Por favor, ingresa tu nombre completo';
            } else if (input.value.trim().length < 3) {
                isValid = false;
                errorMessage = 'El nombre debe tener al menos 3 caracteres';
            }
            break;
            
        case 'telefono':
            const telefonoRegex = /^[0-9]{8}$/;
            if (!input.value.trim()) {
                isValid = false;
                errorMessage = 'Por favor, ingresa tu número de teléfono';
            } else if (!telefonoRegex.test(input.value.replace(/\s/g, ''))) {
                isValid = false;
                errorMessage = 'Ingresa un número de teléfono válido (8 dígitos)';
            }
            break;
            
        case 'email':
            if (input.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    isValid = false;
                    errorMessage = 'Por favor, ingresa un email válido';
                }
            }
            break;
            
        case 'producto':
            if (!input.value) {
                isValid = false;
                errorMessage = 'Por favor, selecciona un producto';
            }
            break;
            
        case 'cantidad':
            if (!input.value || parseInt(input.value) < 1) {
                isValid = false;
                errorMessage = 'La cantidad debe ser al menos 1';
            }
            break;
    }
    
    // Mostrar/ocultar error
    if (errorElement) {
        if (isValid) {
            input.classList.remove('error');
            errorElement.classList.remove('visible');
            errorElement.textContent = '';
        } else {
            input.classList.add('error');
            errorElement.classList.add('visible');
            errorElement.textContent = errorMessage;
        }
    }
    
    return isValid;
}

/**
 * Valida todo el formulario
 * @returns {boolean} - True si todos los campos son válidos
 */
function validarFormulario() {
    const campos = ['nombre', 'telefono', 'email', 'producto', 'cantidad'];
    let formularioValido = true;
    
    campos.forEach(campoId => {
        const campo = document.getElementById(campoId);
        if (campo && !validarCampo(campo)) {
            formularioValido = false;
        }
    });
    
    return formularioValido;
}

// Event listener para el envío del formulario
if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validarFormulario()) {
            // Simular envío (en producción se conectaría con un backend)
            const btnText = document.querySelector('.btn-text');
            const btnLoading = document.querySelector('.btn-loading');
            
            // Mostrar estado de carga
            btnText.style.display = 'none';
            btnLoading.style.display = 'flex';
            
            // Simular delay de envío
            setTimeout(() => {
                // Ocultar formulario y mostrar mensaje de éxito
                orderForm.style.display = 'none';
                formSuccess.style.display = 'block';
                
                // Resetear botón
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
                
                // Resetear formulario
                orderForm.reset();
            }, 1500);
        }
    });
    
    // Validación en tiempo real
    const inputs = orderForm.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validarCampo(input));
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validarCampo(input);
            }
        });
    });
}

// Botón para hacer otro pedido
if (newOrderBtn) {
    newOrderBtn.addEventListener('click', () => {
        formSuccess.style.display = 'none';
        orderForm.style.display = 'block';
    });
}

// =====================================================
// 7. BOTÓN VOLVER ARRIBA
// =====================================================

/**
 * Muestra u oculta el botón "volver arriba" según el scroll
 */
function toggleBackToTop() {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

// Event listener para el clic en el botón
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// =====================================================
// 8. ANIMACIONES AL SCROLL
// =====================================================

/**
 * Observador de intersección para animar elementos al hacer scroll
 */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Opcional: dejar de observar después de revelar
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos con la clase scroll-reveal
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
    
    // También observar secciones principales
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('scroll-reveal');
        observer.observe(section);
    });
}

// =====================================================
// 9. NAVEGACIÓN ACTIVA AL SCROLL
// =====================================================

/**
 * Actualiza el enlace activo en la navegación según la sección visible
 */
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// =====================================================
// 10. HEADER CON SOMBRA AL SCROLL
// =====================================================

/**
 * Añade sombra al header cuando hay scroll
 */
function handleHeaderScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
}

// =====================================================
// 11. INICIALIZACIÓN
// =====================================================

/**
 * Inicializa todas las funcionalidades al cargar la página
 */
function init() {
    // Inicializar animaciones de scroll
    initScrollAnimations();
    
    // Verificar posición inicial del header
    handleHeaderScroll();
    
    // Verificar visibilidad del botón volver arriba
    toggleBackToTop();
    
    // Marcar el enlace de inicio como activo
    const inicioLink = document.querySelector('a[href="#inicio"]');
    if (inicioLink) {
        inicioLink.classList.add('active');
    }
    
    console.log('🛍️ BEK Boutique - Sitio web cargado correctamente');
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);

// =====================================================
// 12. UTILIDADES ADICIONALES
// =====================================================

/**
 * Debounce function para optimizar eventos de scroll
 * @param {Function} func - Función a ejecutar
 * @param {number} wait - Tiempo de espera en ms
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimizar eventos de scroll con debounce
const debouncedScrollHandler = debounce(() => {
    toggleBackToTop();
    handleHeaderScroll();
    updateActiveNavOnScroll();
}, 10);

// Usar la versión optimizada para scroll
window.addEventListener('scroll', debouncedScrollHandler);
