import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import { getImagesThunk } from "../../store/post";
import "./ExplorePage.css";
export default function ExplorePage() {
  const allposts = useSelector((state) => Object.values(state.feedPosts));
  const dispatch = useDispatch();
  const imagesArr = allposts[0].posts;
  useEffect(() => {
    dispatch(getImagesThunk());
  }, [dispatch]);
  return (
    <div id="explore">
      {imagesArr?.map((image) => {
        return (
          <div className="explore-image">
              <Link to={`/posts/${image.id}`}>
                <img src={image.image_url} width="300" alt="explore-post"></img>
              </Link>
          </div>
        );
      })}
    </div>
  );
}