import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import DemoUser from "../DemoUser";
import "./Navigation.css";

const NavBar = () => {
  const user = useSelector((state) => state.session.user);


  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        <li className="navbar space"></li>
        <li className="nav1">
          <NavLink to="/posts" exact={true} activeClassName="active">
            <img
              src="home.svg"
              className="navbar-home navo"
              alt="Home"
              height="20"
              width="20"
            ></img>
            HOME
          </NavLink>
        </li>
        <li className="nav1">
          <NavLink to="/posts/upload" exact={true} activeClassName="active">
            <img
              src="upload.svg"
              className="nav-upload navo"
              alt="Upload"
              height="20"
              width="20"
            ></img>
            Upload
          </NavLink>
        </li>
        <li className="nav1">
          <NavLink to="/explore" exact={true} activeClassName="active">
            <img
              src="compass.svg"
              className="nav-explore navo"
              alt="Home"
              height="20"
              width="20"
            ></img>
            Compass
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <li className="navbar space">
          <NavLink
            to="/login"
            exact={true}
            activeClassName="active"
            className="login"
          >
            <img
              src="log-in.svg"
              className="navbar-login nav1"
              alt="Login"
              height="20"
              width="20"
            ></img>
          </NavLink>
        </li>
        <li className="nav-signup nav1">
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            <img
              src="sign-up.svg"
              className="navbar-signup"
              alt="Sign-Up"
              height="20"
              width="20"
            ></img>
          </NavLink>
        </li>
        <li>
          <DemoUser />
        </li>
      </>
    );
  }
  return (
    <nav className="navbar">
      <ul className="navbar navlinks">
        <div className="navbar left">
          <li className="navbar logo">
            {/* <NavLink to='/' exact={true} activeClassName='active'>
							{/* <img src='grammygramlogo.png'></img> */}
            {/* </NavLink> */}
            <p className="logo">GrammyGram</p>
          </li>
        </div>
        <div className="navbar right">{sessionLinks}</div>
      </ul>
    </nav>
  );

};

export default NavBar;
