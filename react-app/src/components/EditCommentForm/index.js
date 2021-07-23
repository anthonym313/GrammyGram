import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { editComment } from '../../store/comment';

const EditCommentForm = ({ comment }) => {
	const dispatch = useDispatch();
	const [editComment, setEditComment] = useState('');
	const loggedInUser = useSelector((state) => state.session.user);

	const updateComment = (e) => {
		setEditComment(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(
			editComment({
				image_id: comment.image_id,
				user_id: loggedInUser,
				comment: comment,
			})
		);
		setEditComment('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div>
				<textarea
					label='Edit Comment'
					placeholder={comment.comment}
					value={comment}
					onChange={updateComment}
				></textarea>
				<button type='submit'>Post</button>
			</div>
		</form>
	);
};

export default EditCommentForm;
