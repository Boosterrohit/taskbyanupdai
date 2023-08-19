import React from "react";
import "../Asset/Media/Media.css";
import "../Asset/Style/Hero.css";

const MainHome = () => {
  return (
    <section className="hero">
      <div className="container text-center content">
        <h1 data-aos="fade-up">
          "BUILDING DREAMS, MANAGING SUCCESS –
          <span className="d-block"> JENLOK. PTY. LTD"</span>
        </h1>
        <div className="parag pt-4" data-aos="fade-up">
          <p>
            At Jenlok Construction and Project Management, we are dedicated to
            transforming
          </p>
          <p>
            ideas into reality. With a passionate team of experts, we tackle
            every project with
          </p>
          <p>
            precision and ingenuity, ensuring the highest standards of quality
            and timely delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainHome;
