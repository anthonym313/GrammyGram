import React, { useEffect } from "react";
// import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getImagesThunk } from "../../store/post";

function Feed() {
  const dispatch = useDispatch();

  const allPosts = useSelector(state => Object.values(state.feedPosts));

  const pureIm = allPosts[0].posts
  // console.log(`###########################`,allPosts[0].posts)



  useEffect(() => {
    dispatch(getImagesThunk());
  }, [dispatch]);

  return (
    <div>
      {pureIm &&
        pureIm?.map(image => (
          <div key={image.id}>
            <li>{image.id}</li>
          </div>
        ))
      }
    </div>
        )
    }

export default Feed;
