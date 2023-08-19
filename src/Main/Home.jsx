import React from "react";
import MainHome from "../Component/MainHome";
import Service from "../Component/Service";
import Project from "../Component/Project";
import Contact from "../Component/Contact";
import Team from "../Component/Team";

const Home = () => {
  return (
    <main id="main">
      <MainHome />
      <Service />
      <Project />
      <Team />
      <Contact />
    </main>
  );
};

export default Home;
