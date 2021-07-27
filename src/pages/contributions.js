import React from "react";
import Layout from "../components/Layout/Layout";

import ContributionList from "../components/ContributionList/ContributionList";

export default function Home() {
  return (
    <Layout title="Contributions" description="xt contribution listing">
      <ContributionList />
    </Layout>
  );
}
