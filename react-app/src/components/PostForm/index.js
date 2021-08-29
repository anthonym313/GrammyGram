import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../auth/LoginForm.css";
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
    <div className='holder-container2'>
    <form onSubmit={onSubmit} className="modal" id="uploadModal">

        <p className="login-greet">Upload An Image!</p>
      <div className="input-values">
        <div className="input-value-holder">
          <i aria-hidden="true" className="fa fa-image loginpic" />
          <input
            name="Image Url"
            type="text"
            placeholder="Image Url"
            value={image_url}
            onChange={updateImageUrl}
            required={true}
          />
        </div>
        <div className="input-value-holder">
          <i aria-hidden="true" className="fa fa-compass loginpic"></i>
          <input
            name="Description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={updateDescription}
            required={true}
          />
        </div>
        <button type="submit" className="modal-button">
          Upload
        </button>
      </div>
    </form>
    </div>
  );
};

export default PostForm;
