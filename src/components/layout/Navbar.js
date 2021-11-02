import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/insta.png";
import PagesSection from "./navbarItems/PagesSection";
import SearchBar from "./navbarItems/SearchBar";

const Navbar = () => {
  const [activeClass, setActiveClass] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__nav">
        <Link to="/" className="navbar__nav__logo">
          <div>
            <img className="navbar__nav__logoImg" src={Logo} alt="Instagram" />
          </div>
        </Link>
        <SearchBar activeClass={activeClass} setActiveClass={setActiveClass} />
        <PagesSection />
      </div>
    </nav>
  );
};

export default Navbar;
