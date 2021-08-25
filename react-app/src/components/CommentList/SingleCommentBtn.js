/* eslint-disable */
import React, { useState } from "react";
import CommentForm from "../CommentForm";
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
    <div>
      <button
        className="edit-btn editing-post"
        id="edit-btn"
        onClick={showEdit === true ? closeEdit : openEdit}
      >
        Edit
      </button>
      {showEdit && <CommentForm comment={comment} />}
    </div>
  );
}

export default SingleCommentBtn;
