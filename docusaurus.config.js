const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'XT Collaborator',
  tagline: 'Build, Share and Collaborate the awesome work!',
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
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Collection',
        },
        {
          type: 'doc',
          docId: 'contribution-guide',
          position: 'left',
          label: 'Contribution Guide',
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
      copyright: `Built with Docusaurus by PublicisSapient.`,
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
