import React, { useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { PagesSectionData } from "./PagesSectionData";
import { useLocation } from "react-router";
import RouteIcon from "./RouteIcon";
import { auth } from "../../../firebase";

const PagesSection = () => {
  const location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <div className="navbar__nav__pages">
      {PagesSectionData.map((page, index) => {
        return (
          <RouteIcon
            key={index}
            pagePath={page.link}
            title={page.title}
            pageIcon={
              window.location.pathname === page.link ? page.icon1 : page.icon2
            }
          />
        );
      })}
      <div className="navbar__nav__pagesBox">
        <NavLink to="">
          <div class="dropdown">
            <button class="dropbtn btn__plain">
              <div>
                <div
                  className={`avatar 
                ${
                  window.location.pathname === "/account/user"
                    ? "border-round"
                    : ""
                }
              `}
                >
                  <span className="avatar__img">
                    <BsFillPersonFill />
                    {/* <img
                  alt="user's profile pic"
                  crossorigin="anonymous"
                  draggable="false"
                  src={<BsFillPersonFill />}
                /> */}
                  </span>
                </div>
              </div>
            </button>
            <div class="dropdown-content">
              <Link to="/profile">Profile</Link>
              <Link to="/saved">Saved</Link>
              <Link to="/settings">Settings</Link>
              <Link to="/switch/account">Switch Account</Link>
              <div className="login__breakLine"></div>
              <Link to="/login">
                <button
                  type="button"
                  className="btn__plain"
                  onClick={() => auth.signOut()}
                >
                  Logout
                </button>
              </Link>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default PagesSection;
