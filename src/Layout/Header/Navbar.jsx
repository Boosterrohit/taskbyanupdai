import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../../Asset/Image/logo.png";
import "../../Asset/Style/Navbar.css";
import MobileMenu from "./MobileMenu/MobileMenu";
import "../../Asset/Media/Media.css";
const menu = [
  {
    title: "Home",
    id: 1,
    slug: "main",
  },

  {
    title: "Services",
    id: 3,
    slug: "services",
  },
  {
    title: "Project",
    id: 4,
    slug: "project",
  },
  {
    title: "Teams",
    id: 5,
    slug: "team",
  },
  {
    title: "Contact",
    id: 6,
    slug: "contact",
  },
];

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <header className={color ? "header header-bg" : "header"}>
      <div className="container justify-content-center align-items-center d-flex">
        <div className="d-flex align-items-center justify-content-between py-2">
          <Link to="main">
            <img src={Logo} alt="" className="img-fluid logo" />
          </Link>
          <div className="d-flex align-items-center justify-content-center anchor fw-bold">
            {menu.map((item) => {
              return (
                <div key={item.id}>
                  <a href={`#${item.slug}`}>{item.title}</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <MobileMenu menu={menu} />
    </header>
  );
};

export default Navbar;
