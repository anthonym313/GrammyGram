import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllComments, delComment } from '../../store/comment';
import EditCommentForm from './index';


function EditButton({ comment }) {
	const [showMenu, setShowMenu] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
	const dispatch = useDispatch();

	const refresh = () => {
		dispatch(getAllComments(comment.image_id));
	};

	const handleDelete = (id) => {
		dispatch(delComment(id));
		dispatch(getAllComments(comment.image_id));
		refresh();
	};

	const openMenu = () => {
		if (showMenu) return;
		setShowMenu(true);
	};

	const closeMenu = () => {
		if (!showMenu) return;
		setShowMenu(false);
	};

	const openEdit = () => {
		if (showEdit) return;
		setShowEdit(true);
	};
	const closeEdit = () => {
		if (!showEdit) return;
		setShowEdit(false);
	};

	useEffect(() => {
		if (!showMenu) return;
		const closeMenu = () => {
			setShowMenu(false);
		};
		dispatch(getAllComments(comment.image_id));
		return () => document.removeEventListener('click', closeMenu);
	}, [showMenu, dispatch, comment.user_id, comment.image_id]);

	useEffect(() => {
		if (!showEdit) return;

		const closeEdit = () => {
			setShowEdit(false);
		};

		return () => document.removeEventListener('click', closeEdit);
	}, [showEdit]);

	return (
    <div className="edit-menu">
      <button
        className="edit-button"
        id="elipses"
        onClick={showMenu === true ? closeMenu : openMenu}
      ></button>

      {showMenu && (
        <div className="edit-dropdown">
          <button
            onClick={showEdit === true ? closeEdit : openEdit}
            className="edit-btn editing-post"
            id="edit-btn"
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
          {showEdit && <EditCommentForm comment={comment} />}
        </div>
      )}
    </div>
  );
}

export default EditButton;
