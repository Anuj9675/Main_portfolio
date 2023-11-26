import React, { useState } from "react";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navbar/NavBar";
import Skills from "../components/skills/Skills";
import Work from "../components/work/Work";
import About from "../components/About/About";

const Home = () => {
  
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills  />
      <Work  />
      <Contact  />
      <Footer />
    </>
  );
};

export default Home;
