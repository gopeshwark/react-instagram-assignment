import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginInput from "../login/LoginInput";
import Logo from "../../../images/instaBig.png";
import { auth, db, firebase } from "../../../firebase";
import { useHistory } from "react-router";

const Signup = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const createUser = async () => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .then((authUser) => {
        db.collection("users")
          .add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username: username,
            fullName: fullName,
            email: email,
            // uid: authUser.user.uid,
          })
          .catch((err) => alert(err.message));
        // console.log(authUser.user);
      })
      .catch((err) => alert(err.message));
  };

  const signUp = (event) => {
    event.preventDefault();
    createUser();
    setUsername("");
    setFullName("");
    setPassword("");
    setEmail("");
    history.push("/");
  };

  return (
    <div className="background__grey">
      <article className="login__container">
        {/* <div className="login"> */}
        <div className=""></div>
        <div className="login__left">
          <div className="login__left1">
            <h1 className="login__left1Logo">
              <img src={Logo} alt="logo" />
            </h1>
            <div className="login__left1FormInput">
              <div className="login__left1FormBtn">
                <div className="login__facebookLogin"></div>
                <button type="submit">
                  <a
                    className="login__facebookLoginBtn"
                    style={{ color: "#fff" }}
                    href="https://www.facebook.com"
                  >
                    Log in with Facebook
                  </a>
                </button>
              </div>
            </div>
            <div className="login__left1FormInput">
              <div className="login__break">
                <div className="login__breakLine"></div>
                <div className="login__breakCenterText">OR</div>
                <div className="login__breakLine"></div>
              </div>
            </div>
            <form className="login__left1Form" onSubmit={signUp}>
              <LoginInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                label="Phone number, username or email address"
              />
              <LoginInput
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                label="Full Name"
              />
              <LoginInput
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                label="Username"
              />
              <LoginInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                label="Password"
              />
              <div className="login__left1FormInput">
                <div className="login__left1FormBtn">
                  <button type="submit">Sign Up</button>
                </div>
              </div>
            </form>
          </div>
          <div className="login__left2">
            <div className="login__left2Signup">
              <p className="login__left2SignupText">Have an account?</p>
              <Link className="login__left2SignupLink" to="/login">
                Log In
              </Link>
            </div>
          </div>
        </div>
        {/* </div> */}
      </article>
      {/* <Footer /> */}
    </div>
  );
};

export default Signup;
