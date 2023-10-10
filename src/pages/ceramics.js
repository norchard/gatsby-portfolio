import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const CeramicsPage = () => {
  return (
    <Layout pageTitle="Ceramics">
      <p>When I'm not writing code I can sometimes be found throwing pots.</p>
      <StaticImage alt="ceramics" src="../images/ceramics.jpg" />
    </Layout>
  );
};

export const Head = () => <Seo title="Ceramics" />;

export default CeramicsPage;
