import { motion } from "framer-motion";

import Navbar from "./pages/Layout/Navbar";
import Footer from "./pages/Layout/Footer";

import Home from "./pages/Home";
import Services from "./pages/Service";
import CaseStudy from "./pages/Casestudy";
import About from "./pages/About";
import Plan from "./pages/Plan";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

/* Page container animation */
const pageVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

/* Section subtle reveal */
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // premium easing curve
    },
  },
};

const App = () => {
  return (
    <div className=" text-gray-900 scroll-smooth">

      <Navbar />

      <motion.main
        // className="pt-20"
        initial="hidden"
        animate="visible"
        variants={pageVariant}
      >

        <motion.section id="home"  variants={sectionVariant}>
          <Home />
        </motion.section>

        <motion.section id="services" variants={sectionVariant}>
          <Services />
        </motion.section>

        <motion.section id="casestudy" variants={sectionVariant}>
          <CaseStudy />
        </motion.section>

        <motion.section id="about" variants={sectionVariant}>
          <About />
        </motion.section>

        <motion.section id="pricing" variants={sectionVariant}>
          <Plan />
        </motion.section>

        <motion.section id="faq" variants={sectionVariant}>
          <Faq />
        </motion.section>

        <motion.section id="contact" variants={sectionVariant}>
          <Contact />
        </motion.section>

      </motion.main>

      <Footer />

    </div>
  );
};

export default App;
