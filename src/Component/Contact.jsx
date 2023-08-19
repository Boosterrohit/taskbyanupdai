import React, { useState } from "react";
import "../Asset/Style/Hero.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    messege: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process the form data
      console.log("Form submitted:", formData);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Validate message
    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <section id="contact">
      <div className="container contack">
        <div>
          <h2 className="text-center">CONTACT US</h2>
          <p className="text-center py-5">
            Get a free quote, just get in touch!
          </p>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-6 text-left">
            <h3 className="last">
              WE SET HIGH STANDARDS FOR OURSELVES AND WORK TOWARDS PROGRESSIVE
              BENCHMARKS THAT EXCEED YOUR EXPECTATIONS.
            </h3>
            <div className="dik">
              <p className="detail">CONTACT DETAILS</p>
              <div>
                <p className="talk  mt-4">
                  041 2345 6789{" "}
                  <span className="d-block fw-medium">info@jenlok.com</span>{" "}
                </p>
                <div className="mt-4">
                  <p className="kmd">PO Box 1673 Mona Vale 1660,</p>
                  <p className="kmd">Master Builders Association of NSW</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-6">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  className="w-100 p-2"
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className="error text-danger">{errors.name}</span>
                )}
              </div>
              <div>
                <input
                  className="w-100 p-2 mt-4"
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="error text-danger">{errors.email}</span>
                )}
              </div>
              <div>
                <input
                  className="w-100 p-2 mt-4"
                  type="number"
                  placeholder="Your Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  className="w-100 p-2 mt-4"
                  type="text"
                  placeholder="Your Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  className="w-100 p-2 mt-4 content-textarea"
                  name="message"
                  placeholder="Write A Massege"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <span className="error text-danger">{errors.message}</span>
                )}
              </div>

              <button type="submit" className="btn12 py-2 px-4 mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
