import * as React from "react";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";
import Seo from "../../components/seo";

const BlogPage = ({ data }) => {
  console.log(data.allMdx.nodes);
  return (
    <Layout pageTitle="Blog">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <Link to={`/blog/${node.frontmatter.slug}`}>
            <div>
              <h2 className="blog-title">{node.frontmatter.title}</h2>
              <p className="blog-date">{node.frontmatter.date}</p>
            </div>
          </Link>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;

export default BlogPage;
