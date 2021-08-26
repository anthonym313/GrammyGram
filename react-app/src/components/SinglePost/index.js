import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleImageThunk } from '../../store/post';

import { useParams, Link } from 'react-router-dom';

import CommentList from '../CommentList';
// import { singleUser } from '../../store/user';

import '../Feed/feed.css';

function SinglePost() {
	const dispatch = useDispatch();

	const user = useSelector((state) => Object.values(state.singleUser))[0] ||null;
	const image = useSelector((state) => Object.values(state.feedPosts))[0];
	const { postId } = useParams();
	const userId = image.user_id ||null;


	useEffect(() => {
		dispatch(getSingleImageThunk(Number(postId)));
		dispatch(singleUser(userId));
	}, [dispatch, postId, userId]);
	

	return user && (
		<div className='post-container' id='post-container-id'>
			<div className='top-bar'>
			<Link to={`/users/${user.id}`}><img
                  className="post-avatar"
                  src={user.avatar}
                  alt="avatar"
                ></img></Link>
				<Link to={`/users/${user.id}`}><p className='username-post'>{user.username}</p></Link>
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
					<p className='username-post'>{list[image.user_id]}</p>
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
