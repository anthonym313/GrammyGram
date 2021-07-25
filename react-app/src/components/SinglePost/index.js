import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleImageThunk } from '../../store/post';
import { useParams, useHistory } from 'react-router-dom';
import CommentList from '../CommentList';
import { singleUser } from '../../store/user';

import '../Feed/feed.css';

function SinglePost() {
	const dispatch = useDispatch();
	const user = useSelector((state) => Object.values(state.singleUser))[0];
	const image = useSelector((state) => Object.values(state.feedPosts))[0];
	const { postId } = useParams();
	const userId = image.user_id;

	console.log(user.username);
	useEffect(() => {
		dispatch(getSingleImageThunk(Number(postId)));
		dispatch(singleUser(userId));
		// history.push(`/posts/${postId}`);
	}, [dispatch, postId, userId]);

	return (
		<div className='post-container' id='post-container-id'>
			<div className='top-bar'>
				<p className='username-post'>{user.username}</p>
			</div>
			<div className='image-container'>
				<img
					src={image?.image_url}
					alt='feed-images'
					className='the-image'
				/>
			</div>
			<div className='post-description'>
				<div className='info-container'>
					<p className='username-post'>{user.username}</p>
					<p className='caption-post'>{image?.description}</p>
				</div>
			</div>
			<div>
				<CommentList />
			</div>
		</div>
	);
}
export default SinglePost;
