## 🌱 Fundación Comunitaria Cajamarca (FCC)

FCC es una plataforma web que busca promover el desarrollo económico y social en Cajamarca, canalizando recursos y articulando a distintos actores en favor de proyectos de impacto. Utilizamos tecnología de punta para facilitar donaciones, reclutar voluntarios y proporcionar información relevante sobre nuestras actividades en la región.

## 📌 Misión y Visión

**Misión**  
Promover prácticas sostenibles en Cajamarca gestionando y canalizando recursos en pro del desarrollo económico y social para generar una mejora significativa en la calidad de vida de las comunidades a través de la articulación interinstitucional, abordando temas clave como el acceso a la identidad, educación, salud, vivienda, y servicios básicos.

**Visión**  
Ser la institución referente en articulación interinstitucional regional, contribuyendo al progreso económico y social de la región de Cajamarca, movilizando recursos y generando alianzas estratégicas con propuesta de valor y objetivos sólidos, enfocados en los Objetivos de Desarrollo Sostenible (ODS).

## 🌟 Características del Sitio Web

- **Secciones Principales**: "Quiénes Somos," "Proyectos," "Donaciones," y "Voluntarios".
- **Noticias y Anuncios**: Sección de noticias en la página principal, con un banner de anuncio sobre el encabezado para mostrar la próxima actividad.
- **Integración de Donaciones**: Plataforma conectada con Mercado Pago para facilitar donaciones en línea.
- **Formulario de Contacto/Registro**: Permite a los usuarios contactarse o registrarse como voluntarios.

## 🎯 Objetivos del Sitio Web

1. Informar al público sobre los proyectos y actividades de la fundación.
2. Recibir donaciones que apoyen el desarrollo de proyectos comunitarios.
3. Reclutar voluntarios que quieran sumarse a nuestras actividades en Cajamarca.

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Astro y Tailwind CSS para un diseño moderno y adaptativo.
- **Backend**: Node.js, con integración específica de Mercado Pago.
- **Base de Datos**: MongoDB (planeado) para almacenar información de voluntarios y donaciones.

## 🚧 Estado del Proyecto

Este es un proyecto en evolución. Actualmente, estamos en la primera versión y planeamos añadir futuras mejoras y nuevas funcionalidades, como la integración de Google Analytics para medir el tráfico y mejorar la experiencia del usuario.

## 📈 Plan de Optimización

- **SEO**: Implementar buenas prácticas de SEO para mejorar la visibilidad en motores de búsqueda.
- **Accesibilidad**: Asegurar que el sitio sea accesible para todos los usuarios.
- **Velocidad de Carga**: Optimización de recursos y código para mejorar la velocidad de carga en todas las plataformas.

## 👤 Créditos y Contribuciones

Desarrollado por Josemartin Cabrera, miembro de la FCC y desarrollador del sitio web, junto a su equipo QUIPU.

## 📂 Estructura del Proyecto

Dentro del proyecto, verás la siguiente estructura de carpetas y archivos:

```
/
├── .astro/
├── .github/
│   └── workflows/
├── .vscode/
├── node_modules/
├── public/
│   ├── decapcms/
│   │   ├── config.yml
│   │   └── index.html
│   ├── _headers
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── favicons/
│   │   ├── images/
│   │   └── styles/
│   │       └── tailwind.css
│   ├── backend/
│   │   └── routes/
│   │       ├── database.js
│   │       ├── server.js
│   │       └── submitVolunteer.js
│   ├── components/
│   │   ├── blog/
│   │   │   ├── Grid.astro
│   │   │   ├── GridItem.astro
│   │   │   ├── Headline.astro
│   │   │   ├── List.astro
│   │   │   ├── ListItem.astro
│   │   │   ├── Pagination.astro
│   │   │   ├── RelatedPosts.astro
│   │   │   ├── SinglePost.astro
│   │   │   ├── Tags.astro
│   │   │   └── ToBlogLink.astro
│   │   ├── common/
│   │   │   ├── Analytics.astro
│   │   │   ├── ApplyColorMode.astro
│   │   │   ├── BasicScripts.astro
│   │   │   ├── CommonMeta.astro
│   │   │   ├── Image.astro
│   │   │   ├── Metadata.astro
│   │   │   ├── SiteVerification.astro
│   │   │   ├── SocialShare.astro
│   │   │   ├── SplitbeeAnalytics.astro
│   │   │   ├── ToggleMenu.astro
│   │   │   └── ToggleTheme.astro
│   │   ├── ui/
│   │   │   ├── Background.astro
│   │   │   ├── Button.astro
│   │   │   ├── DListItem.astro
│   │   │   ├── Form.astro
│   │   │   ├── Headline.astro
│   │   │   ├── ItemGrid.astro
│   │   │   ├── ItemGrid2.astro
│   │   │   ├── Timeline.astro
│   │   │   └── WidgetWrapper.astro
│   │   └── widgets/
│   │       ├── CustomStyles.astro
│   │       ├── Favicons.astro
│   │       └── Logo.astro
│   ├── content/
│   ├── layouts/
│   │   ├── LandingLayout.astro
│   │   ├── Layout.astro
│   │   ├── MarkdownLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── [...blog]/
│   │   │   ├── [category]/
│   │   │   ├── [tag]/
│   │   │   ├── [...page].astro
│   │   │   └── index.astro
│   │   ├── donaciones/
│   │   │   ├── dona_ahora.astro
│   │   │   ├── empresas.astro
│   │   │   ├── fondos.astro
│   │   │   ├── iniciativas.astro
│   │   │   └── startup.astro
│   │   ├── homes/
│   │   │   ├── mobile-app.astro
│   │   │   ├── personal.astro
│   │   │   ├── saas.astro
│   │   │   └── startup.astro
│   │   ├── landing/
│   │   ├── nosotros/
│   │   │   ├── equipo.astro
│   │   │   ├── historia.astro
│   │   │   ├── junta_directiva.astro
│   │   │   └── nosotros.astro
│   │   ├── proyectos/
│   │   │   ├── proyectos_actuales.astro
│   │   │   ├── proyectos_completados.astro
│   │   │   └── proyectos.astro
│   │   ├── voluntarios/
│   │       ├── eventos.astro
│   │       ├── unete_voluntario.astro
│   │       └── voluntarios.astro
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── pricing.astro
│   │   ├── privacy.md
│   │   ├── rss.xml.ts
│   │   ├── services.astro
│   │   └── terms.md
│   ├── utils/
│   │   ├── blog.ts
│   │   ├── config.yaml
│   │   ├── directories.ts
│   │   ├── env.d.ts
│   │   ├── frontmatter.ts
│   │   ├── images-optimization.ts
│   │   ├── images.ts
│   │   ├── navigation.ts
│   │   ├── permalinks.ts
│   │   ├── types.d.ts
│   └── vendor/
│       └── integration/
│           └── utils/
│               ├── configBuilder.ts
│               ├── loadConfig.ts
│               └── types.d.ts
├── .editorconfig
├── .env
├── .gitignore
├── .npmrc
├── .prettierignore
├── .prettierrc.cjs
├── .stackblitzrc
├── astro.config.ts
├── eslint.config.js
├── LICENSE.md
├── netlify.toml
├── package-lock.json
├── package.json
├── README.md
├── sandbox.config.json
├── tailwind.config.js
├── tsconfig.json
└── vercel.json

```

## 📄 Licencia

Este proyecto está protegido bajo la licencia MIT.
