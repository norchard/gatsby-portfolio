import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
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
        <Link className={siteTitle} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </header>
      <Navigation />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
