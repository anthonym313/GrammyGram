import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleImageThunk } from '../../store/post';
import { useParams } from 'react-router-dom';
import CommentList from '../CommentList';
// import { singleUser } from '../../store/user';

import '../Feed/feed.css';

function SinglePost() {
	const dispatch = useDispatch();
	// const user = useSelector((state) => Object.values(state?.singleUser))[0];
	const image = useSelector((state) => Object.values(state?.feedPosts))[0];
	const { postId } = useParams();
	const [users, setUsers] = useState([]);
	const userId = image?.user_id;
	

	useEffect(() => {
		dispatch(getSingleImageThunk(Number(postId)));
		// dispatch(singleUser(userId));
	}, [dispatch, postId]);

	const postUser = (user) => {
    let obj = {};
    user.forEach((u) => {
      obj[u.id] = u.username;
    });
    return obj;
  };

  const list = postUser(users);

	return (
		<div className='post-container' id='post-container-id'>
			<div className='top-bar'>
				<p className='username-post'>{list[image.user_id]} </p>
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
