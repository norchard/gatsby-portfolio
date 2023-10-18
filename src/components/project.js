import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Project = ({ name, tech, description, image, demoLink, codeLink }) => {
  return (
    <>
      <h2>
        🖼️{" "}
        <a target="_blank" rel="noreferrer" href={demoLink}>
          {name}
        </a>
      </h2>
      <p>Technology used: {tech.join("  |  ")}</p>
      <p>
        {description}{" "}
        <a target="_blank" rel="noreferrer" href={codeLink}>
          View the code
        </a>
      </p>
    </>
  );
};

export default Project;
