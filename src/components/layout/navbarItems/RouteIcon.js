import React from "react";
import { NavLink } from "react-router-dom";

const RouteIcon = ({ pagePath, pageIcon, title, onClick }) => {
  return (
    <div className="navbar__nav__pagesBox">
      <NavLink onClick={onClick} to={pagePath}>
        <svg
          aria-label={title}
          className="navbar__nav__pagesBoxIcon"
          color="#262626"
          fill="#262626"
          height="22"
          role="img"
          viewBox="0 0 48 48"
          width="22"
        >
          {pageIcon}
        </svg>
      </NavLink>
    </div>
  );
};

export default RouteIcon;
