import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { singleUser } from "../../store/user";
import { getAllComments, delComment } from "../../store/comment";
import CommentForm from "../CommentForm";
import EditCommentForm from "../EditCommentForm";
import "../Feed/feed.css";
const CommentList = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const [users, setUsers] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const allComments = useSelector((state) => state.comment);
  const onePost = useSelector((state) => Object.values(state.feedPosts));
  const image = onePost[0];
  const userId = image.user_id;
  const newComments = Object.values(allComments);
  const loggedIn = useSelector((state) => state.session).user;

  const refresh = () => {
    dispatch(getAllComments(postId));
  };
  useEffect(() => {
    if (!postId) {
      return;
    }
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
    dispatch(singleUser(userId));
    dispatch(getAllComments(postId));
  }, [dispatch, postId, userId]);
  const handleDelete = (id) => {
    dispatch(delComment(id));
    dispatch(getAllComments(postId));
    refresh();
  };
  const openEdit = () => {
    if (showEdit) return;
    setShowEdit(true);
  };
  const closeEdit = () => {
    if (!showEdit) return;
    setShowEdit(false);
  };
  const postUser = (user) => {
    let obj = {};
    user.forEach((u) => {
      obj[u.id] = u.username;
    });
    return obj;
  };
  const list = postUser(users);
  return (
    <div>
      <div className="comments">
        {newComments &&
          newComments?.map((comment) => (
            <div>
              <div
                className="comment-user-submission"
                key={list[comment.user_id]}
              >
                <div className="post-description" id="post-desc-id">
                  <p className="username-post" id="user-desc-id">
                    {list[comment.user_id]}
                  </p>
                  <p className="caption-post" id="capt-desc-id">
                    {comment.comment}
                  </p>
                  {loggedIn?.id === comment?.user_id && (
                    <div>
                      <button
                        className="edit-btn editing-post"
                        id="edit-btn"
                        onClick={showEdit === true ? closeEdit : openEdit}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn edit-btn"
                        id="edit-btn"
                        onClick={() => handleDelete(comment.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                  {showEdit && <EditCommentForm comment={comment} />}
                </div>
              </div>
            </div>
          ))}
      </div>
      <CommentForm imageId={postId} />
    </div>
  );
};
export default CommentList;
