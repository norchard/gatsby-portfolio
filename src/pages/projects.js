import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Project from "../components/project";

const ProjectsPage = () => {
  // const projects = [
  //   {
  //     name: "Art Collection",
  //     tech: ["Node", "Express", "React", "MondoDB", "AWS-S3"],
  //     description: "An app to keep track of artwork.",
  //     demoLink: "https://art-collection-frontend.onrender.com/",
  //     codeLink: "https://github.com/norchard/art-collection",
  //     image: "../images/art-collection.png",
  //   },
  //   {
  //     name: "Public Art in NYC",
  //     tech: ["Node", "Express", "React", "MondoDB", "AWS-S3"],
  //     description: "An app that plots public art in NYC on a map.",
  //     demoLink: "https://s3.amazonaws.com/publicartin.nyc/index.html",
  //     codeLink: "https://github.com/norchard/new-york-public-art",
  //     image: "../images/nyc-public-art.png",
  //   },
  // ];
  return (
    <Layout pageTitle="Projects">
      {/* {projects.map((project, i) => (
        <div className="project-tile">
          <Project
            name={project.name}
            tech={project.tech}
            description={project.description}
            demoLink={project.demoLink}
            codeLink={project.codeLink}
            key={i}
          />
          <GatsbyImage alt={project.name} src={project.image} />
        </div>
      ))} */}
      <div className="project-tile">
        <h2>
          🖼️{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://art-collection-frontend.onrender.com/"
          >
            Art Collection
          </a>{" "}
        </h2>
        <p>Technology used: Node | Express | React | MongoDB | AWS-S3 </p>
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
        <StaticImage alt="ceramics" src="../images/art-collection.png" />
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
      <div className="project-tile">
        <h2>
          👁️{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://zoya-next-2b2lbxlkt-norchards-projects.vercel.app/"
          >
            {" "}
            Zoya
          </a>
        </h2>
        <p>Technology used: React | Next | Sanity | Tailwind </p>
        <p>
          Marketing website for an artist/gallerist.{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/norchard/zoya-next"
          >
            View the code
          </a>
        </p>
        <StaticImage alt="ceramics" src="../images/zoya.png" />
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Projects" />;

export default ProjectsPage;
