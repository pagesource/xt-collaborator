import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "../components/Layout/Layout";
import HomepageFeatures from "../components/HomepageFeatures/HomepageFeatures";
import HomepageBanner from "../components/HomepageBanner/HomepageBanner";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description={siteConfig.tagline}
    >
      <HomepageBanner />
      <HomepageFeatures />
    </Layout>
  );
}
