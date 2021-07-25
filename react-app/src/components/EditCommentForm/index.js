import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../Feed/feed.css'
import { editComment } from '../../store/comment';

const EditCommentForm = ({ comment }) => {
	const dispatch = useDispatch();
	const [editOneComment, setEditOneComment] = useState(comment.comment);
	const [showForm, setShowForm] = useState(true);
	const loggedInUser = useSelector((state) => state.session.user);

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(editComment(comment.id, editOneComment,
				comment.image_id,
				// user_id: loggedInUser,
			)
		);
		setEditOneComment('');
	};

	useEffect(() => {
		dispatch(getAllComments(comment.image_id));
	}, [dispatch, comment.image_id]);

	return (

		<form onSubmit={onSubmit}>
			<div>
				{console.log('comment div', comment.comment)}
				<textarea
					label='Edit Comment'
					placeholder={comment.comment}
					value={editOneComment}
					onChange={(e) => setEditOneComment(e.target.value)}
				></textarea>
				<button className='stretch-btn' id='edit-btn'type='submit'>Post</button>
			</div>
		</form>
	);
};

export default EditCommentForm;
