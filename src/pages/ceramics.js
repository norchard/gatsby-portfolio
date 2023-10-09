import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const CeramicsPage = () => {
  return (
    <Layout pageTitle="Ceramics">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="ceramics" src="../images/ceramics.jpg" />
    </Layout>
  );
};

export const Head = () => <Seo title="Ceramics" />;

export default CeramicsPage;
