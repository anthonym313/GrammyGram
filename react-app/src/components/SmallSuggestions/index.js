import React from "react";
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getSmallGroupOfUsers } from "../../store/user";
import "./SmallSuggestions.css";

export default function SmallSuggestions() {
  const smallRandomUserList = useSelector((state) => state.smallRandGroup);
  const user = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSmallGroupOfUsers());
  }, [dispatch]);

  return (
    <div className="small-container">
      <div className="panel-user-info">
        <img src={user.avatar} alt="small avi" className="user-avi"></img>
        <p className="profile-user">{user.username}</p>
        <div className="small-holder"></div>
      </div>
      <div className="user-profile-holder">
        <div className="panel-random-info">
          <p className="sug-for-you"> Suggestions for you</p>
          {smallRandomUserList?.map((user) => {
            return (
              <div className="small-random-div">
                <Link to={`/users/${user.id}`}><img
                  src={user.avatar}
                  className="small-random-usr"
                  alt="random-user"
                ></img></Link>
                <p className="small-random-username">{user.username}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
