import React from "react";

import Navbar from "./pages/Layout/Navbar";
import Footer from "./pages/Layout/Footer";

import Home from "./pages/Home";
import Services from "./pages/Service";
import CaseStudy from "./pages/Casestudy";
import About from "./pages/About";
import Plan from "./pages/Plan";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="">

        <section id="home">
          <Home />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="case-study">
          <CaseStudy />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="pricing">
          <Plan />
        </section>

        <section id="faq">
          <Faq />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default App;
