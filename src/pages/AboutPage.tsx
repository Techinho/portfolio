import PageTransition from "@/components/PageTransition";
import About from "@/components/About";
import { Helmet } from "react-helmet-async";

const AboutPage = () => (
  <>
    <Helmet>
        <title>About Ilyass Ezzaouya | Full-stack Developer</title>
        <meta
          name="description"
          content="Learn more about Ilyass Ezzaouya, a full-stack developer. Discover my journey, experience, and expertise in web development."
        />
      </Helmet>
  <PageTransition>
    <About />
  </PageTransition></>
);

export default AboutPage;
