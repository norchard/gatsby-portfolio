import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to my corner of the internet 👋">
      <StaticImage alt="Nicole" src="../images/nicole.png" />
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
