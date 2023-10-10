import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Navigation from "./Navigation";
import { container, heading, siteTitle } from "./layout.module.css";
import "../styles/style.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <header>
        <Link to="/">
          <h1 className={siteTitle}>{data.site.siteMetadata.title}</h1>
        </Link>
        <Navigation />
      </header>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
