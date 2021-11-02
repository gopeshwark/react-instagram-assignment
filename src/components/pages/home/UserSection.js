import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const UserSection = ({ user, fullName }) => {
  return (
    <div className="user">
      <div className="user__right">
        <div className="user__pic">
          <Link to="/:userID" className="btn__plain user__picButton">
            <BsFillPersonFill className="user__picImage" />
          </Link>
        </div>
        <div className="user__details">
          <Link to="/:userID" className="user__detailsLink">
            <p className="user__detailsLinkText1">{user}</p>
          </Link>
          <span className="user__detailsLinkText2">{fullName}</span>
        </div>
      </div>
      <div className="user__switch">
        <button type="button" className="btn__plain">
          Switch
        </button>
      </div>
    </div>
  );
};

export default UserSection;
