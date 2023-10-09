import React from "react";
import { Link } from "gatsby";
import { navLinks, navLinkItem, navLinkText } from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link className={navLinkText} to="/about">
            About
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link className={navLinkText} to="/blog">
            Blog
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link className={navLinkText} to="/projects">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
