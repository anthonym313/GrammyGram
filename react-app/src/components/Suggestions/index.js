import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Suggestions.css";
import { useSelector } from "react-redux";
import { getFiveRandomUsers } from "../../store/user";
import SmallSuggestions from "../SmallSuggestions";

export default function Suggestions() {
  const user = useSelector((state) => state.session.user);
  const suggestions = useSelector((state) => state.randomUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFiveRandomUsers());
  }, [dispatch]);

  return (
    <div className="UserSide-container">
      <div className="user-avi_small"></div>
      <div className="random-holder">
        {suggestions?.map((randomUser) => {
          return (
            <div className="random-div">
              <img
                src={randomUser.avatar}
                className="random-usr"
                alt="random-user"
              ></img>
              <p className="random-username">
                {randomUser.username.substring(0, 7) + "..."}
              </p>
            </div>
          );
        })}
      </div>

    </div>
  );
}
