import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects">
      <div className="project-tile">
        <h2>
          🖼️{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://art-collection-frontend.onrender.com/"
          >
            Art Collection
          </a>
        </h2>
        <p>Technology used: Node | Express | React | MongoDB | AWS-S3</p>
        <p>
          An app to keep track of artwork.{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/norchard/art-collection"
          >
            View the code
          </a>
        </p>
        <StaticImage alt="ceramics" src="../images/art-collection.png" />{" "}
      </div>
      <div className="project-tile">
        <h2>
          🗺️{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://s3.amazonaws.com/publicartin.nyc/index.html"
          >
            Public Art in NYC
          </a>{" "}
        </h2>
        <p>Technology used: Mapbox | d3 | Javascript | Ruby | cronjob </p>
        <p>
          An app that plots public art in NYC on a map.{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/norchard/new-york-public-art"
          >
            View the code
          </a>
        </p>
        <StaticImage alt="ceramics" src="../images/nyc-public-art.png" />
      </div>
      <div className="project-tile">
        <h2>
          💣{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://minesweeper-a828.onrender.com/"
          >
            Minesweeper
          </a>{" "}
        </h2>
        <p>Technology used: React | Webpack | Babel</p>
        <p>
          An emoji-inspired take on the classic game.{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/norchard/minesweeper"
          >
            View the code
          </a>{" "}
          | <a href="/blog/react-without-create-react-app">Read the blog</a>
        </p>
        <StaticImage alt="ceramics" src="../images/minesweeper.png" />
      </div>
      <div className="project-tile">
        <h2>
          👯‍♀️{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://white-unicorn.onrender.com/"
          >
            White Unicorn
          </a>{" "}
        </h2>
        <p>Technology used: React | Bootstrap </p>
        <p>
          Imitation of a design studio website styles and animation.{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/norchard/white-unicorn"
          >
            View the code
          </a>
        </p>
        <StaticImage alt="ceramics" src="../images/white-unicorn.png" />
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Projects" />;

export default ProjectsPage;
