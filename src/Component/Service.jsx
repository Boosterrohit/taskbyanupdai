import React from "react";
import { core } from "../Utils/Data";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Asset/Style/Hero.css";
import "../Asset/Media/Media.css";
const Service = () => {
  return (
    <section id="services">
      <div className="container py-5 sev">
        <h1 className="text-center pt-5 coree">OUR SERVICE</h1>
        <div className="row mt-5">
          {core.map((item, index) => {
            return (
              <div
                className="col-sm-6 col-lg-3 text-center g-3 pb-4"
                key={index}
              >
                <Card
                  className="h-100 justify-content-center align-items-center bg-transparent car py-3"
                  data-aos="fade-up"
                >
                  <div className="bord">
                    <Card.Img
                      variant="top"
                      src={item.image}
                      className="img-fluid kfa"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold py-2 ky">
                      {item.heading}
                    </Card.Title>
                    <Card.Text className="title mt-3">{item.title}</Card.Text>
                    <Button variant="danger" className="mt-2">
                      {item.btn}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
