import React, { useContext, useEffect, useState } from "react";
import img1 from "../../../images/img1.jpg";
import Logo from "../../../images/instaBig.png";
import LoginInput from "./LoginInput";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase";
import { useHistory } from "react-router";
import { UserContext } from "../../../context/UserContext";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const currentUser = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // when user has logged in
        setUser(authUser);
      } else {
        // when user has logged out
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user, username]);

  const login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => alert(err.message));

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // when user has logged in
        setUser(authUser);
      } else {
        // when user has logged out
        setUser(null);
      }
    });

    if (!user) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    // setUser();
    setEmail("");
    setPassword("");
    history.push({ pathname: "/", state: loading });
  };

  return (
    <div className="background__grey">
      <article className="login__container">
        {/* <div className="login"> */}
        <div className="login__right">
          <div className="login__rightMobileImage">
            <img src={img1} alt="img1" />
          </div>
        </div>
        <div className="login__left">
          <div className="login__left1">
            <h1 className="login__left1Logo">
              <img src={Logo} alt="logo" />
            </h1>
            <form className="login__left1Form" onSubmit={login}>
              <LoginInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                label="Phone number, username or email address"
              />
              <LoginInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                label="Password"
              />
              <div className="login__left1FormInput">
                <div className="login__left1FormBtn">
                  <button type="submit">Log In</button>
                </div>
              </div>
            </form>
            <div className="login__left1FormInput">
              <div className="login__break">
                <div className="login__breakLine"></div>
                <div className="login__breakCenterText">OR</div>
                <div className="login__breakLine"></div>
              </div>
            </div>
            <div className="login__left1FormInput">
              <div className="login__facebookLogin">
                <a
                  className="login__facebookLoginBtn"
                  href="https://www.facebook.com"
                >
                  Log in with Facebook
                </a>
              </div>
            </div>
            <div className="login__left1FormInput">
              <div className="login__forgotPass">
                <Link to="/accounts/password/reset/" tabindex="0">
                  Forgotten your password?
                </Link>
              </div>
            </div>
          </div>
          <div className="login__left2">
            <div className="login__left2Signup">
              <p className="login__left2SignupText">Don't have an account?</p>
              <Link className="login__left2SignupLink" to="signup">
                Sign up
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

export default Login;
