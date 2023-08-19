import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "../Asset/Style/Hero.css";
import Avatar from "../Asset/Image/avatar.png";

const Pagination = () => {
  const [item, setItem] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getComments(1);
  }, []);

  const getComments = async (page) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=3`
      );
      const data = await res.json();
      setItem(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCardDetails = async (card) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments/${card.id}`
      );
      const data = await res.json();
      setSelectedCard(data);
    } catch (error) {
      console.error("Error fetching card details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCardClick = async (clickedCard) => {
    await fetchCardDetails(clickedCard);
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    await getComments(currentPage);
  };

  return (
    <div className="container mt-5 ">
      <div className="row mb-4 justify-content-center">
        {item.map((item) => {
          return (
            <div
              className="col-sm-6 col-lg-4 mb-3"
              key={item.id}
              onClick={() => handleCardClick(item)}
            >
              <div
                className={`card shadow-sm w-100 apicall ${
                  selectedCard === item ? "selected" : ""
                }`}
              >
                <div className="card shadow-sm w-100 apicall">
                  <div className="card-body">
                    <div className="justify-content-center align-items-center d-flex pb-4">
                      <img
                        src={Avatar}
                        alt="UserProfile"
                        className="img-fluid w-25"
                      />
                    </div>
                    <h5 className="card-title text-center h2 iduser">
                      Id: {item.id}
                    </h5>
                    <h5 className="card-title text-center h2 nameuser py-1">
                      Name: {item.name}
                    </h5>
                    <p className="text-center emailuser">Email: {item.email}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
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
                    <span className="fw-bold">Details of Our Employee:</span>
                    {selectedCard.body}
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={18}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Pagination;
