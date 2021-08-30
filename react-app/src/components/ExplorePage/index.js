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
          <div className="explore-image" key={image.id}>
              <Link to={`/posts/${image.id}`}>
                <div className='gallery-image' style={{backgroundImage:`url(${image.image_url})`, overflow:'hidden'}}></div>
              </Link>
          </div>
        );
      })}
    </div>
  );
}
