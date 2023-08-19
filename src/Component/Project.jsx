import React from "react";
import { project } from "../Utils/Data";
import "../Asset/Style/Hero.css";
import "../Asset/Media/Media.css";
const Project = () => {
  return (
    <section id="project">
      <div className="container cont-proj pb-5">
        <div className="text-center">
          <h3>PROJECT EXPERIENCE</h3>
          <p className="kk">
            Looking into changing this to a Trading name Jenlok Remedial
            Services (Looking into it)
          </p>
        </div>
        <div className="row g-3">
          {project.map((item, index) => {
            return (
              <div className="col-sm-6 col-lg-3" key={index} data-aos="zoom-in">
                <div className="magic">
                  <div className="img-container">
                    <img
                      src={item.image}
                      alt=""
                      className="img-fluid pro-img w-100"
                    />
                  </div>
                  <p className="mgcpar">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
