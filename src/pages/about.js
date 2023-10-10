import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="Hi there! I'm Nicole. 🎨 👩‍💻 ✨ 🗺️  ⚙️💡 🧘‍♀️ 💻 💫">
      <StaticImage alt="ceramics" src="../images/nicole.png" />
      <p className="about-text">
        I used to call myself a "designer turned developer", but I'm actually
        both. My designer-self and my developer-self have both been fueled by my
        curiousity to learn how things are made. I enjoy the sense of
        satisfaction that comes from creating something new. I started building
        websites when I needed a design portfolio. Every couple of years I would
        update it and learn more HTML, CSS, and Javascript. I was hooked.{" "}
        <span className="emojis">🎨👩‍💻✨</span>
      </p>
      <p className="about-text">
        Eventually I decided to focus my attention on programming. After
        studying & traveling for five months and attending the Recurse Center in
        NYC, I landed my first software engineering job working on APIs at
        Mapbox. There I gained experience programming professionally, managing
        global resources on AWS, being on-call for services and responding to
        incidents, as well as onboarding teammates to new technology. 🗺️ ⚙️💡
      </p>
      <p className="about-text">
        In the last several years I have gravitated back to design work while
        struggling with my mental health, knowing all the while that I missed
        the puzzles of programming. Now that my mental health is on the mend,
        I'm picking up where I left off, learning new technologies, and looking
        for my next technical role. 🧘‍♀️💻💫
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title="About" />;

export default AboutPage;
