import PageTransition from "@/components/PageTransition";
import Skills from "@/components/Skills";
import { Helmet } from "react-helmet-async";

const SkillsPage = () => (
  <>
  <Helmet>
    <title>Skills of Ilyass Ezzaouya</title>
<meta name="description" content="Explore the technical skills of Ilyass Ezzaouya, including React.js, Node.js, Laravel, HTML, CSS, JavaScript, and more."/>
<meta name="robots" content="index, follow"/>

  </Helmet>
  <PageTransition>
    <section id="skills">
      <Skills />
    </section>
  </PageTransition></>
);

export default SkillsPage;
