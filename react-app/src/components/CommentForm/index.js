import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './CommentForm.css';

import { newComment } from '../../store/comment';

const CommentForm = ({ imageId }) => {
	const dispatch = useDispatch();
	const [comment, setComment] = useState('');
	const loggedInUser = useSelector((state) => state.session.user);

	const updateComment = (e) => {
		setComment(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(
			newComment({
				image_id: imageId,
				user_id: loggedInUser,
				comment: comment,
			})
		);
		setComment('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div>
				<textarea
					label='add a comment'
					placeholder='Add a comment...'
					value={comment}
					onChange={updateComment}
				></textarea>
				<button type='submit'>Post</button>
			</div>
		</form>
	);
};

export default CommentForm;
