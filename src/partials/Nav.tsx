import { Link } from "react-router-dom";
import logo2 from "../assets/images/logo2.png";
import logo from "../assets/images/logo.png";
import "../CSS/Nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";

const Nav = () => {
  const navItems = [
    { label: "HOME", path: "/" },
    { label: "GALLERY", path: "/" },
    { label: "ABOUT US", path: "/" },
    { label: "CONTACT US", path: "/" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const updateMedia = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      <nav>
        <div className="navbar-logo">
          <img src={isMobile ? logo : logo2} alt="Logo" />
        </div>

        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="nav-link" onClick={handleMenuOpen}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="register_btn">REGISTER RESTAURANT</button>

        <div className="menu-icons" onClick={handleMenuOpen}>
          {menuOpen ? (
            <p className="cross_icon">
              <ImCross size={18} />
            </p>
          ) : (
            <p className="hamburger_icon">
              <GiHamburgerMenu size={18} />
            </p>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
