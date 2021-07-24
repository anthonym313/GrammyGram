import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { editComment, getAllComments } from '../../store/comment';

const EditCommentForm = ({ comment }) => {
	const dispatch = useDispatch();
	const [editOneComment, setEditOneComment] = useState(comment.comment);
	const [showForm, setShowForm] = useState(true);
	const loggedInUser = useSelector((state) => state.session.user);

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(editComment(comment.id, loggedInUser.id, editOneComment));
		dispatch(getAllComments(comment.image_id));
		// setEditOneComment('');
	};

	useEffect(() => {
		dispatch(getAllComments(comment.image_id));
	}, [dispatch, comment.image_id]);

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div>
					<textarea
						label='Edit Comment'
						placeholder={comment.comment}
						value={editOneComment}
						onChange={(e) => setEditOneComment(e.target.value)}
						required
					></textarea>
					<button type='submit'>Post</button>
				</div>
			</form>
		</div>
	);
};

export default EditCommentForm;
