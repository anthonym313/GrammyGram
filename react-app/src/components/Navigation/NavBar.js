import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import DemoUser from "../DemoUser";
import "./Navigation.css";

const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        <li className="nav1">
          <NavLink to="/posts" exact={true} activeClassName="active">
            <div className="navbar-home navo1"></div>
          </NavLink>
        </li>
        <li className="nav1">
          <NavLink to="/posts/upload" exact={true} activeClassName="active">
            <div className="nav-upload navo2"></div>
          </NavLink>
        </li>
        <li className="nav1">
          <NavLink to="/explore" exact={true} activeClassName="active">
            <div className="nav-explore navo3"></div>
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </>
    );
  } else {
    sessionLinks = (
      <div className="navbar-unauth">

          <NavLink
            to="/login"
            exact={true}
            activeClassName="active"
            className="login"
          >
            <div className="navbar-login nav1 navo4"></div>
          </NavLink>

          <NavLink to="/sign-up" exact={true} activeClassName="active">
            <div className="navbar-signup navo5"></div>
          </NavLink>

          <DemoUser />

      </div>
    );
  }
  return (
    <nav className="navbar">
      <ul className="navbar navlinks">
        <div className="navbar left">
          <li className="navbar logo">
            <Link to="/">
              <p className="logo">GrammyGram</p>
            </Link>
          </li>
        </div>
        <div className="right">{sessionLinks}</div>
      </ul>
    </nav>
  );
};

export default NavBar;
