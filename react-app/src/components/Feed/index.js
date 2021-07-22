import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { getImagesThunk, deleteImageThunk } from "../../store/post";
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
    // dispatch(deleteImageThunk());
    history.push("/posts/");
  }, [dispatch, history]);

  const refresh = () => {
    dispatch(getImagesThunk());
    // history.push("/posts/");
  };

  const deletePost = (id) => {
    dispatch(deleteImageThunk(id));
    dispatch(getImagesThunk());
    refresh();
    history.push("/posts/");
  };

  const postUser = (user) => {
    let obj = {};
    user.forEach((u) => {
      obj[u.id] = u.username;
    });
    return obj
  };
  const list = postUser(users);


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
              <div className="post-description">
                <p>{list[image.user_id]}</p>
                <p>{image.description}</p>
              </div>
              <div className="comments"></div>
              <div className="post-comment"> </div>
            </div>
          </div>
        ))}
    </div>
  );
}
export default Feed;
