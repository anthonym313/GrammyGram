import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./postform.css";
import { postImageThunk, getImagesThunk } from "../../store/post";
import { useHistory } from "react-router-dom";

const PostForm = () => {
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  let image_url = imageUrl;

  const updateImageUrl = (e) => {
    setImageUrl(e.target.value);
  };

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postImageThunk({
        image_url,
        description: description,
        user_id: user.id,
      })
    );
    dispatch(getImagesThunk());
    history.push("/posts/");
  };

  return (
    <form onSubmit={onSubmit} className="modal3">
      <div className="title_container">
        <h2>Upload An Image!</h2>
      </div>
      <div className="input_field">
        {" "}
        <span>
          <i aria-hidden="true" className="fa fa-image" />{" "}
        </span>
        <input
          name="Image Url"
          type="text"
          placeholder="Image Url"
          value={image_url}
          onChange={updateImageUrl}
        />
      </div>
      <div className="input_field">
        {" "}
        <span>
          <i aria-hidden="true" className="fa fa-compass"></i>{" "}
        </span>
        <input
          name="Description"
          type="text"
          placeholder="Description"
          value={description}
          onChange={updateDescription}
        />
      </div>
        <button type="submit" className="modal-button2">
          Upload
        </button>
    </form>
  );
};

export default PostForm;
