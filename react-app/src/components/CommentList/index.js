import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { singleUser } from '../../store/user';
import { getAllComments, delComment } from '../../store/comment';
import CommentForm from '../CommentForm';
import EditCommentForm from '../EditCommentForm';

const CommentList = () => {
	const dispatch = useDispatch();
	const { postId } = useParams();
	const [users, setUsers] = useState([]);
	const [render, setRender] = useState(false);
	const allComments = useSelector((state) => state.comment);
	const currentUser = useSelector((state) => state.session.user);
	const onePost = useSelector((state) => Object.values(state.feedPosts));
	const image = onePost[0];
	const userId = image.user_id;
	const newComments = Object.values(allComments);

	const refresh = () => {
		dispatch(getAllComments(postId));
	};

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
		dispatch(getAllComments(postId));
	}, [dispatch, postId, userId]);

	const handleDelete = (id) => {
		dispatch(delComment(id));
		dispatch(getAllComments(postId));
		refresh();
	};

	const showEdit = (id) => {
		setRender(true);
	};

	const postUser = (user) => {
		let obj = {};
		user.forEach((u) => {
			obj[u.id] = u.username;
		});
		return obj;
	};
	const list = postUser(users);

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
							{' '}
							Submitted by:
							<NavLink to={`/users/${list[comment.user_id]}`}>
								{list[comment.user_id]}
							</NavLink>
						</div>
						<li key={comment.id}>{comment.comment}</li>
						<div>
							{comment.user_id === currentUser.id ? (
								<div>
									<button
										onClick={() => handleDelete(comment.id)}
									>
										Delete
									</button>
									<button onClick={() => setRender(true)}>
										Edit
									</button>
									{render ? (
										<div key={comment.id}>
											<EditCommentForm
												comment={comment}
											/>
										</div>
									) : null}
								</div>
							) : null}
						</div>
					</div>
				))}
			<CommentForm imageId={postId} />
		</div>
	);
};

export default CommentList;
