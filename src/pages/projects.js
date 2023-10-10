import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects">
      <div className="project-tile">
        <p>
          <a href="https://art-collection-frontend.onrender.com/">
            Art Collection
          </a>{" "}
          is an app to keep track of artwork. <a href="/">View the code</a>
        </p>
        <StaticImage alt="ceramics" src="../images/art-collection.png" />{" "}
      </div>
      <div className="project-tile">
        <p>
          <a href="https://s3.amazonaws.com/publicartin.nyc/index.html">
            Public Art in NYC
          </a>{" "}
          is an app that plots public art in NYC on a map.{" "}
          <a href="/">View the code</a>
        </p>
        <StaticImage alt="ceramics" src="../images/nyc-public-art.png" />
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Projects" />;

export default ProjectsPage;
