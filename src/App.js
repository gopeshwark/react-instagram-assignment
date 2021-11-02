import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./scss/main.scss";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/home/Home";
import Inbox from "./components/pages/Inbox";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/signup/Signup";
import ForgotPassword from "./components/pages/forgotPassword/ForgotPassword";
import CreatePost from "./components/posts/createPost/CreatePost";
import { UserContext } from "./context/UserContext";
import ErrorPage from "./components/ErrorPage";

function App() {
  const currentUser = useContext(UserContext);
  return (
    <>
      {currentUser ? (
        <Router>
          {currentUser && <Navbar />}
          <Switch>
            <div className="main-container">
              <Route exact path="/" component={Home}></Route>
              <Route path="/direct/inbox" component={Inbox}></Route>
              <Route path="/create/select" component={CreatePost}></Route>
            </div>
          </Switch>
        </Router>
      ) : (
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route
              path="/accounts/password/reset/"
              component={ForgotPassword}
            />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
