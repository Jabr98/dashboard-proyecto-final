Dashboard Administrativo – Proyecto Final
Descripción del proyecto
Este proyecto es un dashboard administrativo que desarrollé como parte de la tarea.
Mi objetivo fue crear una interfaz moderna, clara y adaptable para la gestión de datos, aplicando HTML5 semántico, CSS Grid, Flexbox, media queries y buenas prácticas de accesibilidad.

El dashboard cuenta con:

Barra lateral de navegación para moverme entre secciones.

Encabezado superior con título y acciones rápidas.

Tarjetas de resumen que muestran información clave.

Tabla de datos organizada y legible.

Gráfico o bloque visual para análisis rápido.

Footer informativo con datos del proyecto.

Tecnologías utilizadas
HTML5 (etiquetas semánticas, roles ARIA)

CSS3 (Grid, Flexbox, variables CSS, transiciones, pseudo-clases)

JavaScript (interactividad básica)

Diseño y decisiones tomadas
Estructura con CSS Grid: definí las áreas principales (sidebar, header, main, footer) usando grid-template-areas para mantener un layout claro y flexible.

Componentes con Flexbox: dentro de tarjetas y menús, utilicé display: flex para alinear y distribuir elementos de forma responsiva.

Variables CSS: para colores y tipografía, facilitando cambios rápidos en la paleta.

Efectos visuales: añadí transiciones y :hover para mejorar la experiencia al interactuar con elementos.

Responsividad: usé @media queries para que el dashboard se adapte a escritorio, tablet y móvil; el sidebar se oculta o reorganiza en pantallas pequeñas.

Accesibilidad:

Roles ARIA (role="navigation", role="main") para mejorar la lectura por lectores de pantalla.

Contraste de colores suficiente para legibilidad.

Textos alternativos (alt) en imágenes e íconos descriptivos.

Navegación por teclado asegurada.

Manejo de errores y despliegue en GitHub Pages
Para evitar errores 404 al acceder a rutas no definidas en GitHub Pages, agregué un archivo 404.html que redirige automáticamente al index.html. Esto mejora la experiencia del usuario y asegura que el dashboard siempre se cargue correctamente, incluso si se accede a enlaces internos o rutas inexistentes.

Evidencias
Dentro de la carpeta /evidencias se incluyen las capturas en las tres vistas:

Escritorio – escritorio responsive.png

Tablet – ipad responsive.png

Móvil – celular responsive.png

Cómo ver el proyecto
Abrir la carpeta del proyecto en Visual Studio Code.

Hacer clic derecho en index.html y seleccionar "Open with Live Server" para visualizarlo correctamente.

Autor
Proyecto desarrollado por Jefferson Bedoya 