import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Nosotros',
      links: [
        {
          text: 'Junta Directiva',
          href: getPermalink('/nosotros/junta_directiva'),
        },
        {
          text: 'Equipo',
          href: getPermalink('/nosotros/equipo'),
        },
        {
          text: 'Nuestra Historia',
          href: getPermalink('/nosotros/historia'),
        },
      ],
    },
    {
      text: 'Donaciones',
      links: [
        {
          text: 'Cómo donar',
          href: getPermalink('/donaciones/donaciones'),
        },
        {
          text: 'Beneficiarios',
          href: getPermalink('/donaciones/beneficiarios'),
        },
        {
          text: 'Dona ahora!',
          href: getPermalink('/donaciones/dona_ahora'),
        },
      ],
    },
    {
      text: 'Voluntarios',
      links: [
        {
          text: 'Únete como voluntario',
          href: getPermalink('/voluntarios/voluntarios'),
        },
        {
          text: 'Eventos de Voluntariado',
          href: getPermalink('/voluntarios/eventos'),
        },
      ],
    },
    {
      text: 'Proyectos',
      links: [
        {
          text: 'Proyectos en curso',
          href: getPermalink('/proyectos/proyectos'),
        },
        {
          text: 'Proyectos completados',
          href: getPermalink('/proyectos/completados'),
        },
      ],
    },
    {
      text: 'Contacto',
      links: [
        {
          text: 'Formulario de contacto',
          href: getPermalink('/contacto'),
        },
        {
          text: 'Preguntas Frecuentes',
          href: getPermalink('/contacto/preguntas'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Artículo de Ejemplo',
          href: getPermalink('/blog/get-started-website-with-astro-tailwind-css'),
        },
      ],
    },
  ],
  // Añadido el botón de donación al headerData para mejor coherencia
  actions: [
    {
      text: 'Dona ahora!',
      href: getPermalink('/donaciones/dona_ahora'),
      icon: 'tabler:gift',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'NOSOTROS',
      links: [
        { text: 'Junta Directiva', href: '/nosotros/junta_directiva' },
        { text: 'Equipo', href: '/nosotros/equipo' },
        { text: 'Nuestra Historia', href: '/nosotros/historia' },
      ],
    },
    {
      title: 'INICIATIVAS ',
      links: [
        { text: 'Empresas', href: '/donaciones/empresas' },
        { text: 'Fondos', href: '/donaciones/fondos' },
      ],
    },
    {
      title: 'VOLUNTARIADO',
      links: [
        { text: 'Únete como voluntario', href: '/voluntarios/unete_voluntario' },
        { text: 'Eventos de voluntariado', href: '/voluntarios/eventos' },
      ],
    },
    {
      title: 'PROYECTOS',
      links: [
        { text: 'Proyectos en curso', href: '/proyectos/proyectos_actuales' },
        { text: 'Proyectos completados', href: '/proyectos/proyectos_completados' },
      ],
    },
    {
      title: 'CONTÁCTANOS',
      links: [
        { text: 'X', icon: 'tabler:brand-x', href: '#' },
        { text: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
        { text: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
      ],
    },
  ],

  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="Quipu logo" loading="lazy"></img>
    Desarrollado por <a class="text-blue-600 underline dark:text-muted" href="https://Quipu.com/"> Quipu</a> · Todos los derechos reservados.
  `,
};
