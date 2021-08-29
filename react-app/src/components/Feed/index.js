import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getImagesThunk } from "../../store/post";
import EditButton from "./EditButton";
import CommentForm from "../CommentForm";
import "./feed.css";
// import Suggestions from "../Suggestions";
import SmallSuggestions from "../SmallSuggestions";

function Feed() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.session).user;
  const allPosts = useSelector((state) => Object.values(state.feedPosts));
  const pureIm = allPosts[0].posts;
  const pureCmt = allPosts[0].comments;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    dispatch(getImagesThunk());
  }, [dispatch]);

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
    <div>
      <div className="feed-page">
        <SmallSuggestions />
        {/* <Suggestions /> */}
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
                <Link to={`/posts/${image?.id}`}>
                  <img
                    src={image?.image_url}
                    alt="feed-images"
                    className="the-image"
                  />
                </Link>
              </div>
              <div className="post-content">
                <div className="post-actions"></div>
                <div className="post-description">
                  <div className="info-container">
                    <p className="username-post">{list[image.user_id]}</p>
                    <p className="caption-post">
                      {image.description.substring(0, 60) + "..."}
                    </p>
                  </div>
                  {loggedIn?.id === image.user_id && (
                    <div>
                      <EditButton image={image} />
                    </div>
                  )}
                </div>
                <div className="comments">
                  {pureCmt &&
                    pureCmt?.map((comment) => (
                      <div key={comment.id} >
                        {comment.image_id === image.id && (
                          <div className="post-description" id="post-desc-id">
                            <p className="username-post">
                              {list[comment.user_id]}
                            </p>
                            <p className="caption-post">{comment.comment}</p>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
                <div className="post-comment">
                  <CommentForm imageId={image.id} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default Feed;
