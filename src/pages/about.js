import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="A Developer with Design Sense">
      <p className="about-blurb">
        Hi there! I'm Nicole. I used to call myself a "designer turned
        developer", but I'm actually both. My designer-self and my
        developer-self have both been fueled by my endless curiousity to learn
        about how things are made. I enjoy the sense of satisfaction that comes
        from making something new, especially something useful.
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title="About" />;

export default AboutPage;
