import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { singleUser } from '../../store/user';
import { getAllLikes, getAllDislikes } from '../../store/like';

const LikesList = ({ imageId }) => {
	const dispatch = useDispatch();
	const onePost = useSelector((state) => Object.values(state.feedPosts));
	const likes = useSelector((state) => state.likes);
	// const dislikes = useSelector((state) => state.dislikes);
	const allLikes = Object.values(likes);
	// const allDislikes = Object.values(dislikes);
	const image = onePost[0];
	const userId = image.user_id;

	useEffect(() => {
		if (!imageId) {
			return;
		}

		dispatch(singleUser(userId));
		dispatch(getAllLikes(imageId));
        // This breaks the code, due to changes in frontend
		// dispatch(getAllDislikes(imageId));
	}, [dispatch, userId, imageId]);

	return (
		<div className='LikesList-container'>
			<div>{allLikes.length} Likes</div>
			{/* <div>{allDislikes.length} Dislikes</div> */}
		</div>
	);
};

export default LikesList;
