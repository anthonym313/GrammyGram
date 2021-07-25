import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../Feed/feed.css'
import { editComment } from '../../store/comment';

const EditCommentForm = ({ comment }) => {
	const dispatch = useDispatch();
	const [editOneComment, setEditOneComment] = useState(comment.comment);

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(editComment(comment.id, editOneComment,
				comment.image_id,
			)
		);
		setEditOneComment('');
	};

	useEffect(() => {}, [dispatch, editOneComment]);

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
