import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { singleUser } from '../../store/user';
import { getAllComments, delComment } from '../../store/comment';
import CommentForm from '../CommentForm';
import EditCommentBtn from '../EditCommentForm/EditCommentBtn';

const CommentList = ({ image }) => {
	const dispatch = useDispatch();
	const [users, setUsers] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const allComments = useSelector((state) => state.comment);
	const userId = image.user_id;
	const postId = image.id;
	const newComments = Object.values(allComments);
	console.log('commentList before thunk', postId);
	useEffect(() => {
		if (!postId) {
			return;
		}

		async function fetchData() {
			const response = await fetch('/api/users/');
			const responseData = await response.json();
			setUsers(responseData.users);
		}
		fetchData();

		dispatch(singleUser(userId));
		console.log('commentList useEffect postId', postId);
		dispatch(getAllComments(postId));
	}, [dispatch, postId, userId]);

	const postUser = (user) => {
		let obj = {};
		user.forEach((u) => {
			obj[u.id] = u.username;
		});
		return obj;
	};

	const postAvatar = (user) => {
		let obj = {};
		user.forEach((u) => {
			obj[u.id] = u.avatar;
		});
		return obj;
	};

	const list = postUser(users);

	const avt = postAvatar(users);

	return (
		<div className='commentList-container'>
			<h3>Comments: </h3>
			{newComments &&
				newComments?.map((comment) => (
					<div>
						<div
							className='comment-user-submission'
							key={list[comment.user_id]}
						>
							<img
								className='post-avatar'
								src={avt[image.user_id]}
								alt='avatar'
							></img>
							<p className='username-post'>
								<NavLink to={`/users/${list[comment.user_id]}`}>
									{list[comment.user_id]}
								</NavLink>
							</p>
						</div>
						<li key={comment.id}>{comment.comment}</li>
						<div>
							<EditCommentBtn comment={comment} />
						</div>
					</div>
				))}
			{/* <CommentForm imageId={postId} /> */}
		</div>
	);
};

export default CommentList;
