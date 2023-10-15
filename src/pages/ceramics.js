import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const CeramicsPage = () => {
  return (
    <Layout pageTitle="Ceramics">
      <p>When I'm not writing code I can sometimes be found throwing pots.</p>
      <StaticImage
        className="ceramics"
        alt="ceramics"
        src="../images/ceramics/ceramics-1.jpg"
      />
      <StaticImage
        className="ceramics"
        alt="ceramics"
        src="../images/ceramics/ceramics-2.jpg"
      />
      <StaticImage
        className="ceramics"
        alt="ceramics"
        src="../images/ceramics/ceramics-3.jpg"
      />
      <StaticImage
        className="ceramics"
        alt="ceramics"
        src="../images/ceramics/ceramics-4.jpg"
      />
      <StaticImage
        className="ceramics"
        alt="ceramics"
        src="../images/ceramics/ceramics-5.jpg"
      />
      <StaticImage
        className="ceramics"
        alt="ceramics"
        src="../images/ceramics/ceramics-6.jpg"
      />
    </Layout>
  );
};

export const Head = () => <Seo title="Ceramics" />;

export default CeramicsPage;
