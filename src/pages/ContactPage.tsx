import PageTransition from "@/components/PageTransition";
import Contact from "@/components/Contact";
import { Helmet } from "react-helmet-async";

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact Ilyass Ezzaouya</title>
      <meta
        name="description"
        content="Get in touch with Ilyass Ezzaouya, a full-stack developer. Reach out for collaborations, inquiries, or just a friendly chat."
      />
    </Helmet>
  <PageTransition>
    <section id="contact">
      <Contact />
    </section>
  </PageTransition>
  </>
);

export default ContactPage;
