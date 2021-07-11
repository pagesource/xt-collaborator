const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'XT Collaborator',
  tagline: 'One stop for all the awesome work!',
  url: 'https://pagesource.github.io',
  baseUrl: '/xt-collaborator/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pagesource', // Usually your GitHub org/user name.
  projectName: 'xt-collaborator', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'XT Collaborator',
      logo: {
        alt: 'PS XT',
        src: 'img/logo.svg',
      }
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Connect with us',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/pubsapientindia?lang=en',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/pagesource/xt-collaborator',
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
