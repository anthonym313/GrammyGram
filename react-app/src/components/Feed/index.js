import React, { useEffect } from "react";
// import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getImagesThunk } from "../../store/post";
import "./feed.css";

function Feed() {
  const dispatch = useDispatch();

  const allPosts = useSelector((state) => Object.values(state.feedPosts));

  const pureIm = allPosts[0].posts;
  // console.log(`###########################`,allPosts[0].posts)

  useEffect(() => {
    dispatch(getImagesThunk());
  }, [dispatch]);

  return (
    <div>
      {pureIm &&
        pureIm?.map((image) => (
          <div key={image.id} className="post-container">
            <div className="top-bar"> </div>
            <div className="image-container">
              <img src={image?.image_url} alt="feed-images" className='' />
            </div>
            <div className="post-content">
              <div className="post-actions"></div>
              <div className="comments"></div>
              <div classname="post-comment"> </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Feed;
