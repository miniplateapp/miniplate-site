import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`miniplate`, `boilerplate`]}
        title="About"
      />

      <section className="text-center">
        About Miniplate
      </section>
    </Layout>
  );
}

export default AboutPage;
