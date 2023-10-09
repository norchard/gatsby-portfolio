import React from "react";
import { Link } from "gatsby";
import {
  navLinks,
  navLinkItem,
  navLinkText,
  active,
} from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link activeClassName={active} className={navLinkText} to="/about">
            About
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link activeClassName={active} className={navLinkText} to="/blog">
            Blog
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link activeClassName={active} className={navLinkText} to="/projects">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
