import { Element } from 'react-scroll';
import NavBar from "../Components/NavBar";
import ContactUs from "../Section/Contactus";
import Experience from "../Section/Experience";
import Footer from "../Section/Footer";
import Hero from "../Section/Hero";
import Journey from "../Section/Journey";
import Projects from "../Section/Projects";
import Skills from "../Section/Skills";

export default function Pages() {
  return (
    <>
      <NavBar />

      <Element name="hero">
        <Hero />
      </Element>

      <Element name="journey">
        <Journey />
      </Element>

      <Element name="experience">
        <Experience />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="contact">
        <ContactUs />
      </Element>

      <Footer />
    </>
  );
}
