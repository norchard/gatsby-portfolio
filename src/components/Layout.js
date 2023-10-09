import * as React from "react";
import { Link } from "gatsby";
import Navigation from "./Navigation";
import { container, heading } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <Link to="/">Nicole Orchard</Link>
      <Navigation />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
