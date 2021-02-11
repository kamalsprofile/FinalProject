import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import LineIcon from "react-lineicons";

function Header() {
  const [information] = useState("");
  const [navigationToggler, setNavigationToggler] = useState(false);

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  };

  

  return (
    <nav className={navigationToggler ? "mi-header is-visible" : "mi-header"}>
      <button onClick={handleNavigationToggler} className="mi-header-toggler">
        {!navigationToggler ? (
          <LineIcon name="menu" />
        ) : (
          <LineIcon name="close" />
        )}
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link to="/">
            <img src={require("../assests/Doable.png")} alt="brandimage" />
          </Link>
        </div>

        <ul className="mi-header-menu">
          <li>
            <NavLink exact to="/">
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/services">
              <span>Services</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/careers">
              <span>Careers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
        <p className="mi-header-copyright">
          &copy; 2020 - {new Date().getFullYear()} Ahmad Kamal</p>
        
      </div>
    </nav>
  );
}

export default Header;
