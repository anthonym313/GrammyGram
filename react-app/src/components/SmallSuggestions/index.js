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
        <Link to={`/users/${user.id}`}><img src={user.avatar} alt="small avi" className="user-avi"></img></Link>
        <Link to={`/users/${user.id}`}><p className="profile-user">{user.username}</p></Link>
        <div className="small-holder"></div>
      </div>
      <div className="user-profile-holder">
        <div className="panel-random-info">
          <p className="sug-for-you"> Suggestions for you</p>
          {smallRandomUserList?.map((user) => {
            return (

              <div className="small-random-div" key={user.id}>
                <Link to={`/users/${user.id}`}><img
                  src={user.avatar}
                  className="small-random-usr"
                  alt="user-avt"
                ></img></Link>
                  <Link to={`/users/${user.id}`}>
                <p className="small-random-username">
                  {user.username}</p>
                  </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
