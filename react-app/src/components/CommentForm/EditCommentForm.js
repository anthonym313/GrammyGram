import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../Feed/feed.css';
import { getImagesThunk } from '../../store/post';
import { editComment, newComment } from '../../store/comment';

const EditCommentForm = ({ commentObj }) => {
	const dispatch = useDispatch();
	console.log('commentObj', commentObj.id);
	// placeholder is the current comment before edit
	const [comment, setComment] = useState(commentObj.comment);
	const loggedInUser = useSelector((state) => state.session.user);

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(editComment(commentObj.id, comment));
		setComment('');
		dispatch(getImagesThunk());
	};

	return (
		<form onSubmit={onSubmit} className='comment-edit-form'>
			<textarea
				label='add a comment'
				placeholder='Add a comment...'
				value={comment}
				onChange={(e) => setComment(e.target.value)}
				className='input-stretch'
				id='edit-comment-form'
			></textarea>
			<button className='stretch-btn' type='submit'>
				Post
			</button>
		</form>
	);
};

export default EditCommentForm;
