import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import HomepageFeatures from '../components/HomepageFeatures/HomepageFeatures';
import HomepageBanner from '../components/HomepageBanner/HomepageBanner';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description={siteConfig.tagline}>
      <main>
        <HomepageBanner />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
