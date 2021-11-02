import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ErrorPage = () => {
  const currentUser = useContext(UserContext);
  return (
    <div className="error">
      {!currentUser ? (
        <p>loading...</p>
      ) : (
        <>
          <p>
            Either you are not logged in or page you are looking for us
            unavailable
          </p>
          <Link to={currentUser ? "/" : "/login"}>Go to home page</Link>
        </>
      )}
    </div>
  );
};

export default ErrorPage;
