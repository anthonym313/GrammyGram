import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getImagesThunk } from "../../store/post";
import EditButton from "./EditButton";
import Suggestions from "../Suggestions";
import "./feed.css";

function Feed() {
  const dispatch = useDispatch();

  const history = useHistory();

  const allPosts = useSelector((state) => Object.values(state.feedPosts));
  const pureIm = allPosts[0].posts;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(getImagesThunk());
    history.push("/posts/");
  }, [dispatch, history]);


  const postUser = (user) => {
    let obj = {};
    user.forEach((u) => {
      obj[u.id] = u.username;
    });
    return obj;
  };
  const list = postUser(users);

  const postAvatar = (user) => {
    let obj = {};
    user.forEach((u) => {
      obj[u.id] = u.avatar;
    });
    return obj;
  };
  const avt = postAvatar(users);

  return (
    <div className="feed-page">
      {pureIm &&
        pureIm?.map((image) => (
          <div key={image.id} className="post-container">
            <div className="top-bar">
              <img
                className="post-avatar"
                src={avt[image.user_id]}
                alt="avatar"
              ></img>
              <p className="username-post">{list[image.user_id]}</p>
            </div>
            <div className="image-container">
              <img
                src={image?.image_url}
                alt="feed-images"
                className="the-image"
              />
            </div>
            <div className="post-content">
              <div className="post-actions"></div>

              <div className="post-description">
                <div className='info-container'>
                <p className="username-post">{list[image.user_id]}</p>

                <p className='caption-post'>{image.description}</p>

                </div>
                <div>
                  <EditButton image={image} />
                </div>
              </div>

              <div className="comments"></div>
              <div className="post-comment"> </div>
            </div>
          </div>
        ))}
      <Suggestions />
    </div>
  );
}
export default Feed;
