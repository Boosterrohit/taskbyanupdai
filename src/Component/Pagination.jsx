import React, { useState, useEffect } from "react";
import "../Asset/Style/Hero.css";
import Avatar from "../Asset/Image/avatar.png";
import { Link } from "react-router-dom";

const Pagination = () => {
  const [item, setItem] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(3);

  useEffect(() => {
    getComments(currentPage);
  }, [currentPage, pageLimit]);

  const getComments = async (page) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${pageLimit}`
      );
      const data = await res.json();
      setItem(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="page-limit-dropdown mb-3 bg-orange">
        <label htmlFor="pageLimit">Page Limit: </label>
        <select
          id="pageLimit"
          value={pageLimit}
          onChange={(e) => {
            setPageLimit(parseInt(e.target.value, 10));
            setCurrentPage(1);
          }}
        >
          {[3, 6, 10].map((limit) => (
            <option key={limit} value={limit}>
              {limit}
            </option>
          ))}
        </select>
      </div>
      <div className="row mb-4 justify-content-center">
        {item.map((item) => (
          <div className="col-sm-6 col-lg-4 mb-3" key={item.id}>
            <div>
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
                  <Link to={`/team-detail/${item.id}`} className="dash">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination justify-content-center">
        <button
          className="page-link"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="page-link"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage * pageLimit >= 10}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
