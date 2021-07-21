import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getAllComments } from '../../store/comment';

const CommentList = () => {
	const dispatch = useDispatch();
	const { postId } = useParams();
	const allComments = useSelector((state) => state.comment);
	const onePost = useSelector((state) => Object.values(state.feedPosts));
	const image = onePost[0];
	const userId = image.user_id;
	// const listComments = (allComments) => {
	// 	for (const comment in allComments) {
	// 		return (

	// 		)
	// 	}
	// }

	useEffect(() => {
		if (!postId) {
			return;
		}
		// dispatch(singleUser(userId));
		dispatch(getAllComments(postId));
	}, [dispatch, postId]);
	// {for comment in comments}
	const commentComponents = (allComments) => {
		for (const id in allComments) {
			console.log(allComments);
			return <li key={id}>{allComments[id].comment}</li>;
		}
		// return (
		// 	<ul>
		// 		{/* <li key={user.id}>
		// 			<NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
		// 		</li> */}
		// 	</ul>
		// );
	};
	// console.log('all Comments frontend', allComments[1].comment);
	return (
		<div className='commentList-container'>
			<h3>Comments: </h3>
			<ul>{commentComponents(allComments)}</ul>
		</div>
	);
};
export default CommentList;
