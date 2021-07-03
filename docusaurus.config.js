const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'XT Collaborations',
  tagline: 'One stop for all the awesome work!',
  url: 'https://xt-collaborator.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Publicis Sapient', // Usually your GitHub org/user name.
  projectName: 'xt-collaborator', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'XT Collaborations',
      logo: {
        alt: 'PS XT',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Projects',
        },
        {
          href: 'https://github.com/pagesource/xt-collaborator',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/pubsapientindia?lang=en',
            },
            {
              label: 'Pagesource GitHub',
              href: 'https://github.com/pagesource',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Publicis Sapient, Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/pagesource/xt-collaborator',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
