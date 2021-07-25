import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleImageThunk } from "../../store/post";
import { singleUser } from "../../store/user";
import { useParams, useHistory } from "react-router-dom";
import CommentList from "../CommentList";
import EditButton from "../Feed/EditButton";
import "../Feed/feed.css";

function SinglePost() {
  const dispatch = useDispatch();
  const userArr = useSelector((state) => Object.values(state.singleUser));
  const onePost = useSelector((state) => Object.values(state.feedPosts));
  const loggedIn = useSelector((state) => state.session).user;
  const { postId } = useParams();
  const history = useHistory();

  // console.log('$$$$$$$$$$$$$$$', typeof(postId), postId);
  const image = onePost[0];
  const user = userArr[0];
  // const userId = image.user_id;

  useEffect(() => {
    // e.preventDefault();
    // dispatch(singleUser(userId));
    dispatch(getSingleImageThunk(Number(postId)));
    history.push(`/posts/${postId}`);
  }, [dispatch, postId, history]);

  return (
    <div className="post-container" id="post-container-id">
      <div className="top-bar">
        <p className="username-post">{user.username}</p>
      </div>
      <div className="image-container">
        <img src={image?.image_url} alt="feed-images" className="the-image" />
      </div>
      <div className="post-description">
        <div className="info-container">
          <p className="username-post">{user.username}</p>
          <p className="caption-post">{image?.description}</p>
        </div>
      </div>
      <div>
        <CommentList />
      </div>
    </div>
  );
}
export default SinglePost;
