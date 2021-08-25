import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Feed/feed.css";
import { getImagesThunk } from "../../store/post";
import { newComment } from "../../store/comment";

const EditCommentForm = ({ imageId }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const loggedInUser = useSelector((state) => state.session.user);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      newComment({
        image_id: imageId,
        user_id: loggedInUser,
        comment: comment,
      })
    );
    setComment("");
    dispatch(getImagesThunk());
  };

  return (
    <form onSubmit={onSubmit} className="comment-edit-form">
      <textarea
        label="add a comment"
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="input-stretch"
      ></textarea>
      <button className="stretch-btn" type="submit">
        Post
      </button>
    </form>
  );
};

export default EditCommentForm;
