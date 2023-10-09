import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects">
      <p>
        <a href="https://art-collection-frontend.onrender.com/">
          Art Collection
        </a>{" "}
        is an app to keep track of artwork
      </p>
      <StaticImage alt="ceramics" src="../images/art-collection.png" />
    </Layout>
  );
};

export const Head = () => <Seo title="Projects" />;

export default ProjectsPage;
