
import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImagesThunk } from "../../store/post";
import "./ExplorePage.css";

export default function ExplorePage() {
  const allposts = useSelector((state) => Object.values(state.feedPosts));
  const dispatch = useDispatch();
  const imagesArr = allposts[0].posts
  useEffect(()=>{
    dispatch(getImagesThunk());
  },[dispatch])
 
  return (
    <div id="explore">
      {imagesArr?.map((image) => {
        {console.log(image)}
        return (
          <div className="explore-image">
            <img src={image.image_url} width='200'></img>
            <div className="explore-image-overlay"></div>
          </div>
        );
      })}
    </div>
  );

}
