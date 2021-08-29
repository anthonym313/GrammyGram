import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editProfile } from "../../store/session";
import { Redirect, useLocation } from "react-router-dom";
import "../auth/LoginForm.css";

export default function UserProfileEdit({ user, editshow }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const [avatar, updateAvatar] = useState(user.avatar);
  const [username, updateUsername] = useState(user.username);

  function handleUserEditSubmit(e) {
    e.preventDefault();
    window.confirm("Are you sure you want to update your profile?");
    dispatch(editProfile(avatar, username, user.id));
    window.location.reload(true);
    editshow(false);
  }
  function handleCancel(e) {
    e.preventDefault();
    editshow(false);
  }

  useEffect(() => {}, [avatar, username]);

  return (
    user && (
      <div className="holder-container3">
        <form className="modal">
            <p className="login-greet">Edit User Profile</p>
          <div className="input-values">
            <div className="input-value-holder">
              <i className="far fa-user-circle loginpic"></i>

              <input
                type="text"
                name="avatar"
                placeholder={user.avatar}
                onChange={(e) => updateAvatar(e.target.value)}
                value={avatar}
                required={true}
              ></input>
            </div>
            <div className="input-value-holder">
              <i className="fas fa-user-edit loginpic"></i>
              <input
                type="text"
                name="username"
                placeholder={user.username}
                onChange={(e) => updateUsername(e.target.value)}
                value={username}
                required={true}
              ></input>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleUserEditSubmit}
                className="modal-button"
              >
                Submit
              </button>
              <button onClick={handleCancel} className="modal-button" id='cancelbtn'>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  );
}
