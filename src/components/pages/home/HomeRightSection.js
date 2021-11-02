import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import Suggestions from "./Suggestions";
import UserSection from "./UserSection";

const HomeRightSection = ({ user, displayName, users }) => {
  const currentUser = useContext(UserContext);

  return (
    <div>
      <UserSection user={user} fullName={displayName} />
      <div className="suggestions">
        <div className="suggestions__link">
          <p className="suggestions__linkText">Suggestions for you</p>
          <button type="button" className="btn__plain suggestions__linkBtn">
            See All
          </button>
        </div>
        {users.map((user) => {
          {
            /* console.log(user.user.username);
          console.log(currentUser.displayName); */
          }

          return <Suggestions user={user} />;
        })}
      </div>
    </div>
  );
};

export default HomeRightSection;
