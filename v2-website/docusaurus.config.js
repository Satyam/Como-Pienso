module.exports = {
  title: 'Cómo Pienso',
  tagline: 'Rumiando algunas ideas',
  url: 'https://satyam.github.io',
  baseUrl: '/Como-Pienso/',
  organizationName: 'Satyam',
  projectName: 'Como-Pienso',
  favicon: 'img/horse.png',
  customFields: {
    docsUrl: '',
  },
  onBrokenLinks: 'log',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'intro',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json'),
        },
        blog: {
          path: 'blog',
        },
        theme: {
          customCss: require.resolve('./src/css/customTheme.css'),
        },
      },
    ],
  ],
  plugins: [],
  themeConfig: {
    navbar: {
      title: 'Cómo Pienso',
      logo: {
        src: 'img/horse.png',
      },
      items: [
        {
          to: 'docs/',
          label: 'Introducción',
          position: 'left',
        },
      ],
    },
    footer: {
      links: [],
      copyright: 'Copyright © 2020 Daniel Barreiro',
      logo: {
        src: 'img/horse.png',
      },
    },
  },
};
