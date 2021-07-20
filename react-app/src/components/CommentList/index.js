import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const CommentList = () => {
	const [comment, setComments] = useState([]);

	// {for comment in comments}
	const commentComponents = comment.map((user) => {
		return (
			// <li key={user.id}>
			// 	<NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
			// </li>
			<ul>
				<li key={user.id}>
					<NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
				</li>
				<li key={comment.id}></li>
			</ul>
		);
	});

	return (
		<>
			<h3>Comments: </h3>
			<ul>{commentComponents}</ul>
		</>
	);
};

export default CommentList;
