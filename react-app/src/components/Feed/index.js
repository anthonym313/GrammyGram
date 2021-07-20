import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getImagesThunk } from "../../store/post";

function Feed() {
  const [feed, setFeed] = useState([]);

  const dispatch = useDispatch();
  const posts = useSelector(state => Object.values(state.post));
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("/api/posts/");
  //     const responseData = await response.json();
  //     setFeed(responseData.post);
  //   }
  //   fetchData();
  // }, []);
  console.log("PHOTOOOOOS", posts);
  useEffect(() => {
    dispatch(getImagesThunk());
  }, [dispatch]);

  // const postComponents = feed.map((img) => {
  //   return (
  //     <li key={img.id}>
  //       <NavLink to={`/posts/${img.id}`}>{img.description}</NavLink>
  //     </li>
  //   );
  // });

  return <div> Hello </div>;
  // <>
  //   <h1>User List: </h1>
  //   <ul>{postComponents}</ul>
  // </>
}

export default Feed;
