import PageTransition from "@/components/PageTransition";
import Projects from "@/components/Projects";
import { Helmet } from "react-helmet-async";

const ProjectsPage = () => (
  <>
    <Helmet>
      <title>Projects of Ilyass Ezzaouya</title>
      <meta
        name="description"
        content="Discover the projects of Ilyass Ezzaouya, showcasing expertise in web development and design."
      />
    </Helmet>
  <PageTransition>
    <section id="projects">
      <Projects />
    </section>
  </PageTransition>
  </>
);

export default ProjectsPage;
