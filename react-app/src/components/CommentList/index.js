import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
const CommentList = () => {
	const [user, setUser] = useState([]);
	const [comment, setComments] = useState([]);
	const allComments = useSelector((state) => state.session.comment);
	// {for comment in comments}
	const commentComponents = comment.map((user) => {
		return (
			<ul>
				<li key={user.id}>
					<NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
				</li>
				<li key={comment.id}>{comment.comment}</li>
			</ul>
		);
	});
	console.log('all Comments', allComments);
	return (
		<div className='commentList-container'>
			<h3>Comments: </h3>
			<ul>{commentComponents}</ul>
		</div>
	);
};
export default CommentList;
