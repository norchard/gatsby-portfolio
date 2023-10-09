import * as React from "react";
import Layout from "../components/Layout";

const BlogPage = () => {
  return (
    <Layout pageTitle="Blog">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export const Head = () => <title>Blog</title>;

export default BlogPage;
