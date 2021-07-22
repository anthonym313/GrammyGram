import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleImageThunk } from '../../store/post';
import { singleUser } from '../../store/user';
import { useParams } from 'react-router-dom';
import CommentList from '../CommentList';

function SinglePost() {
	const dispatch = useDispatch();
	const userArr = useSelector((state) => Object.values(state.singleUser));
	const onePost = useSelector((state) => Object.values(state.feedPosts));
	const { postId } = useParams();
	const image = onePost[0];
	const user = userArr[0];
	const userId = image.user_id;

	console.log('user array', user);
	console.log('thunk user', userArr);
	console.log('Image', image);
	console.log('image user id', image.user_id);

	useEffect(() => {
		if (!postId && !userId) {
			return;
		}
		dispatch(singleUser(userId));
		dispatch(getSingleImageThunk(postId));
	}, [dispatch, postId, userId]);

	return (
		<ul>
			<h3>Submitted by: {user.username}</h3>
			<li>
				<strong>Post Id</strong> {postId}
			</li>
			<div className='image-container'>
				<img
					src={image?.image_url}
					alt='feed-images'
					className='the-image'
				/>
			</div>
			<li>Caption: {image?.description}</li>
			<div>
				<CommentList />
			</div>
		</ul>
	);
}
export default SinglePost;
