import React, { useContext } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

const Suggestions = (user) => {
  const currentUser = useContext(UserContext);
  const { username, fullName } = user.user.user;

  return (
    <>
      {username !== currentUser?.displayName ? (
        <div className="suggest">
          <div className="suggest__right">
            <div className="suggest__pic">
              <Link to="/:suggestID" className="btn__plain suggest__picButton">
                <BsFillPersonFill className="suggest__picImage" />
              </Link>
            </div>
            <div className="suggest__details">
              <Link to="/:suggestID" className="suggest__detailsLink">
                <p className="suggest__detailsLinkText1">{username}</p>
              </Link>
              <span className="suggest__detailsLinkText2">{fullName}</span>
            </div>
          </div>
          <div className="suggest__switch">
            <button type="button" className="btn__plain">
              Follow
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Suggestions;
