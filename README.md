# BEK Boutique 🛍️

Sitio web oficial de **BEK** - Tu boutique online de moda SHEIN y productos variados al mejor precio.

![BEK Boutique](images/logo.svg)

## 📋 Descripción

BEK es una boutique online ubicada en Champerico, Retalhuleu, Guatemala, que ofrece una amplia selección de:

- 👗 Ropa para mujer, hombre y niños
- 👟 Calzado
- 💄 Maquillaje
- 👜 Accesorios
- 🎁 Productos variados

## ✨ Características

- ✅ Diseño moderno y elegante con colores de marca (Rosa Fucsia, Rosa Suave y Lila)
- ✅ 100% Responsive - Se ve perfecto en móviles, tablets y desktop
- ✅ Catálogo interactivo con filtros por categoría
- ✅ Formulario de pedidos con validación
- ✅ Modal de detalles de producto
- ✅ Animaciones suaves y transiciones elegantes
- ✅ Menú hamburguesa para móviles
- ✅ Botón "Volver arriba"
- ✅ Optimizado para SEO
- ✅ Sin dependencias externas (100% HTML, CSS y JavaScript vanilla)

## 🚀 Publicar en GitHub Pages (GRATIS)

### Pasos para publicar:

1. Ve a **Settings** de tu repositorio
2. En el menú lateral, clic en **Pages**
3. En **Source**, selecciona la rama **main**
4. En la carpeta, selecciona **/ (root)**
5. Clic en **Save**
6. Espera 2-3 minutos
7. ¡Tu sitio estará disponible en: `https://uriel-45.github.io/bek-boutique/`!

## 📁 Estructura del Proyecto

```
bek-boutique/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos CSS
├── js/
│   └── main.js         # JavaScript interactivo
├── images/
│   └── logo.svg        # Logo de BEK
├── README.md           # Este archivo
└── .gitignore          # Archivos ignorados por Git
```

## 🎨 Personalización

### Cambiar colores de marca

Los colores están definidos como variables CSS en `css/style.css`:

```css
:root {
    --color-primary: #FF1493;        /* Rosa Fucsia */
    --color-primary-light: #FF69B4;  /* Rosa Fucsia claro */
    --color-secondary: #FFB6D9;      /* Rosa Suave */
    --color-accent: #C77DFF;         /* Lila */
    --color-accent-light: #E6B3FF;   /* Lila claro */
}
```

Simplemente cambia los valores hexadecimales para personalizar los colores.

### Agregar/Editar productos

#### En el HTML (index.html):

Busca la sección `products-grid` y añade una nueva tarjeta de producto:

```html
<div class="product-card" data-category="categoria-slug">
    <div class="product-image">
        <div class="product-placeholder" style="background: linear-gradient(135deg, #FF1493 0%, #C77DFF 100%);">
            <span>Nombre</span>
        </div>
        <!-- Opcional: agregar badge -->
        <span class="product-badge">Nuevo</span>
    </div>
    <div class="product-info">
        <h3 class="product-name">Nombre del Producto</h3>
        <p class="product-category">Categoría</p>
        <p class="product-price">Q100.00</p>
        <button class="btn btn-product" data-product="ID">Ver Detalles</button>
    </div>
</div>
```

#### En el JavaScript (js/main.js):

Añade el producto al array `productos`:

```javascript
{
    id: 17, // ID único
    nombre: "Nombre del Producto",
    precio: "Q100.00",
    categoria: "Categoría",
    categoriaSlug: "categoria-slug",
    descripcion: "Descripción del producto...",
    badge: "Nuevo" // Opcional
}
```

### Categorías disponibles

- `ropa-mujer` - Ropa Mujer
- `ropa-hombre` - Ropa Hombre
- `ropa-ninos` - Ropa Niños
- `calzado` - Calzado
- `maquillaje` - Maquillaje
- `accesorios` - Accesorios
- `variados` - Productos Variados

### Cambiar información de contacto

Busca en `index.html` la sección del footer y actualiza:

- Ubicación
- Horarios de atención
- Enlaces a redes sociales (TikTok y Facebook)

### Agregar imágenes reales de productos

Reemplaza los placeholders:

1. Guarda tus imágenes en la carpeta `images/`
2. En el HTML, reemplaza el `div.product-placeholder` con una imagen:

```html
<div class="product-image">
    <img src="images/mi-producto.jpg" alt="Nombre del Producto">
</div>
```

3. Añade este CSS si es necesario:

```css
.product-image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## 🌐 Dominio Personalizado (Futuro)

### Comprar un dominio:
1. Visita un registrador de dominios (Namecheap, GoDaddy, etc.)
2. Busca y compra tu dominio preferido (ejemplo: bekboutique.com)

### Configurar DNS:
1. En tu registrador, agrega estos registros:
   - Tipo A: `185.199.108.153`
   - Tipo A: `185.199.109.153`
   - Tipo A: `185.199.110.153`
   - Tipo A: `185.199.111.153`
   - CNAME: `www` → `uriel-45.github.io`

2. En GitHub Pages:
   - Ve a Settings > Pages
   - En "Custom domain", escribe tu dominio
   - Activa "Enforce HTTPS"

## 📱 Redes Sociales

- TikTok: [@bekboutique](https://www.tiktok.com/@bekboutique)
- Facebook: [BEK Boutique](https://www.facebook.com/bekboutique)

## 📍 Ubicación

Champerico, Retalhuleu, Guatemala

## 📄 Licencia

© 2025 BEK. Todos los derechos reservados.

---

Desarrollado con 💖 para BEK Boutique
