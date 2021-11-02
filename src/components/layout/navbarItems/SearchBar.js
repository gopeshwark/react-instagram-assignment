import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ activeClass, setActiveClass }) => {
  return (
    <div
      className="navbar__nav__search"
      onClick={() => setActiveClass(!activeClass)}
    >
      {activeClass ? (
        <input type="text" placeholder="Search" />
      ) : (
        <div
          className={`navbar__nav__searchBox`}
          // onClick={() => setActiveClass(true)}
          role="button"
        >
          <div className="navbar__nav__searchBox2">
            <span className="navbar__nav__searchBoxIcon">
              <AiOutlineSearch />
            </span>
            <span className="navbar__nav__searchBoxText">Search</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
