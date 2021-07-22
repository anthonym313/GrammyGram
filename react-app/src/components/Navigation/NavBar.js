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
              src= "../../img/home.svg"
              className="navbar-home navo1"
              alt="Home"
              height="20"
              width="20"
            ></img>
          </NavLink>
        </li>
        <li className="nav1">
          <NavLink to="/posts/upload" exact={true} activeClassName="active">
            <img
              src="../../img/upload.png"
              className="nav-upload navo2"
              alt="Upload"
              // height="20"
              // width="20"
            ></img>
          </NavLink>
        </li>
        <li className="nav1">
          <NavLink to="/explore" exact={true} activeClassName="active">
            <img
              src="compass.svg"
              className="nav-explore navo3"
              alt="Home"
              height="20"
              width="20"
            ></img>
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
              className="navbar-login nav1 navo4"
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
              className="navbar-signup navo5"
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
