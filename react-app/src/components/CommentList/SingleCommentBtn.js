/* eslint-disable */
import React, { useState } from "react";
import EditCommentForm from "../CommentForm/EditCommentForm";
import "../Feed/feed.css";

function SingleCommentBtn({ comment }) {
  const [showEdit, setShowEdit] = useState(false);

  const openEdit = () => {
    if (showEdit) return;
    setShowEdit(true);
  };
  const closeEdit = () => {
    if (!showEdit) return;
    setShowEdit(false);
  };

  return (
    <>
      <button
        className="edit-btn editing-post"
        id="edit-btn"
        onClick={showEdit === true ? closeEdit : openEdit}
      >
        Edit
      </button>
        {showEdit && <EditCommentForm comment={comment} />}

      </>);
}

export default SingleCommentBtn;
