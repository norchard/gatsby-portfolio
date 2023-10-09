import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export const Head = () => <Seo title="Projects" />;

export default ProjectsPage;
