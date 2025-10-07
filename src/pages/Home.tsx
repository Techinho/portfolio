import PageTransition from "@/components/PageTransition";
import Hero from "@/components/Hero";
import { Helmet } from "react-helmet-async";

const Home = () => (
  <>
   <Helmet>
        <title>Ilyass Ezzaouya | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Ilyass Ezzaouya – Full-stack Developer. Showcasing projects, skills, and experience."
        />
      </Helmet>
  <PageTransition>
    <Hero />
  </PageTransition></>
);

export default Home;
