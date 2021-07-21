import React, { useEffect } from "react";
// import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getImagesThunk, deleteImageThunk } from "../../store/post";
import "./feed.css";

function Feed() {
  const dispatch = useDispatch();

  const allPosts = useSelector((state) => Object.values(state.feedPosts));

  const pureIm = allPosts[0].posts;

  const deletePost = (id) => {
    dispatch(deleteImageThunk(id));
  };

  useEffect(() => {
    dispatch(getImagesThunk());
  }, [dispatch]);

  return (
    <div className="feed-page">
      {pureIm &&
        pureIm?.map((image) => (
          <div key={image.id} className="post-container">
            <div className="top-bar">
              <button onClick={() => deletePost(image.id)}>Delete</button>
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
              <div className="comments"></div>
              <div className="post-comment"> </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Feed;
