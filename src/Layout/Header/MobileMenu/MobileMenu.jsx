import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "./MobileMenu.css";
import "../../../Asset/Media/Media.css";

const MobileMenu = ({ menu }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header>
      <Menu
        disableAutoFocus
        isOpen={menuOpen}
        onOpen={handleStateChange}
        onClose={handleStateChange}
      >
        {menu.map((item) => {
          return (
            <div key={item.id}>
              <a href={`#${item.slug}`} onClick={() => closeMenu()}>
                {item.title}
              </a>
            </div>
          );
        })}
      </Menu>
    </header>
  );
};

export default MobileMenu;
