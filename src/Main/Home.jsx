import React from "react";
import MainHome from "../Component/MainHome";
import Service from "../Component/Service";
import Project from "../Component/Project";
import Contact from "../Component/Contact";
import Team from "../Component/Team";
import Navbar from "../Layout/Header/Navbar";
import Footer from "../Layout/Footer/Footer";

const Home = () => {
  return (
    <main id="main">
      <Navbar />
      <MainHome />
      <Service />
      <Project />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
