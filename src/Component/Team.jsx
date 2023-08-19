import React from "react";
import Pagination from "./Pagination";
import "../Asset/Style/Hero.css";
const Team = () => {
  return (
    <section id="team">
      <div className="container">
        <div>
          <h1 className="text-center mt-5 team">MEET OUR TEAMS</h1>
        </div>
        <div className="row">
          <div className="col-12 col-lg-12 overflow-hidden">
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
