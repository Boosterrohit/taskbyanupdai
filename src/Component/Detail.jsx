import React, { useEffect, useState } from "react";
import Avatar from "../Asset/Image/avatar.png";
import "../Asset/Style/Hero.css";
import { Link } from "react-router-dom";
const Detail = () => {
  const [selectedCard, setSelectedCard] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = window.location.href;
  const segments = url.split("/");
  const id = segments[segments.length - 1];

  const fetchCardDetails = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await res.json();
      setSelectedCard(data);
    } catch (error) {
      console.error("Error fetching card details:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchCardDetails();
  }, []);
  console.log(selectedCard);
  return (
    <div className="container mt-5">
      <div className="selected-card-details mb-4">
        {isLoading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            Loading...
          </div>
        ) : (
          selectedCard && (
            <div className="box1">
              <h2 className="text-center fw-bold">Employee Information</h2>
              <div className="d-flex align-items-center device">
                <div className="dev1">
                  <img src={Avatar} alt="Profile" className="img-fluid w-50" />
                </div>
                <div className="letter">
                  <p>
                    <span className="fw-bold">Id:</span> {selectedCard.id}
                  </p>
                  <p>
                    <span className="fw-bold">Name:</span> {selectedCard.name}
                  </p>
                  <p>
                    <span className="fw-bold">Email:</span> {selectedCard.email}
                  </p>
                  <p className="sub-para">
                    <span className="fw-bold">Phone Number: </span>
                    {selectedCard.phone}
                  </p>
                  <p className="sub-para">
                    <span className="fw-bold">Website: </span>
                    {selectedCard.website}
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          )
        )}
      </div>
      <Link to="/" className="dash">
        Go To Dashboard
      </Link>
    </div>
  );
};

export default Detail;
