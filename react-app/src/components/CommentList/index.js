import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { singleUser } from '../../store/user';
import { getAllComments } from '../../store/comment';

const CommentList = () => {
	const dispatch = useDispatch();
	const { postId } = useParams();
	const allComments = useSelector((state) => state.comment);
	const onePost = useSelector((state) => Object.values(state.feedPosts));
	const image = onePost[0];
	const userId = image.user_id;
	const newComments = Object.values(allComments);

	useEffect(() => {
		if (!postId) {
			return;
		}
		dispatch(singleUser(userId));
		dispatch(getAllComments(postId));
	}, [dispatch, postId]);

	// 		{/* <li key={user.id}>
	// 			<NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
	// 		</li> */}

	return (
		<div className='commentList-container'>
			<h3>Comments: </h3>
			{newComments &&
				newComments?.map((comment) => (
					<div>
						Submitted by: {comment.user_id}
						<li key={comment.id}>{comment.comment}</li>
					</div>
				))}
		</div>
	);
};

export default CommentList;
