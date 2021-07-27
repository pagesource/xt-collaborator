import React from "react";
import Layout from "@theme/Layout";

export default function LayoutComp({ children, title, description }) {
  return (
    <Layout
      title={title}
      description={description}
    >
      <main>{children}</main>
    </Layout>
  );
}
