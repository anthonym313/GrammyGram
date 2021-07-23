import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import './LogoutButton.css'

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  // return <button onClick={onLogout}>Logout</button>;
  return (
    <div
      onClick={onLogout}
      className="navbar-logout navo6"

    ></div>
  );
};

export default LogoutButton;
