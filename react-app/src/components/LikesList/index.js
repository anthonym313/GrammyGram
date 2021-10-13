import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { singleUser } from '../../store/user';
import {
	getAllLikes,
	newLike,
	delLike,
	getAllDislikes,
} from '../../store/like';

const LikesList = ({ imageId }) => {
	const dispatch = useDispatch();
	const onePost = useSelector((state) => Object.values(state.feedPosts));
	// const dislikes = useSelector((state) => state.dislikes);
	const allLikes = useSelector((state) => Object.values(state.likes));
	// const allDislikes = Object.values(dislikes);
	const image = onePost[0];
	const loggedInUserId = useSelector((state) => state.session.user.id);
	const userId = image.user_id;
	const [likeStatus, setLikeStatus] = useState(false);
	console.log('all Likes', allLikes);

	const checkLikeStatus = (likesArr) => {
		if (likesArr.find((likeObj) => likeObj['user_id'] === loggedInUserId)) {
			return likesArr.find(
				(likeObj) => likeObj['user_id'] === loggedInUserId
			).id;
		} else {
			return false;
		}
	};

	useEffect(() => {
		if (!imageId) {
			return;
		}

		if (checkLikeStatus(allLikes)) {
			setLikeStatus(true);
		}

		console.log('like status', likeStatus);
		dispatch(singleUser(userId));
		// something incorrectly wrong with redux store when dispatching here
		// dispatch(getAllLikes(imageId));

		// This breaks the code, due to changes in frontend
		// dispatch(getAllDislikes(imageId));
	}, [dispatch, userId, imageId, likeStatus]);

	const likePost = (e) => {
		e.preventDefault();
		console.log('image Id', imageId);
		dispatch(
			newLike({
				image_id: imageId,
				user_id: userId,
				like: true,
			})
		);
		console.log('new like');
		setLikeStatus(true);
		dispatch(getAllLikes(imageId));
	};

	const deleteLike = (id) => {
		// setLikeStatus(false);
		dispatch(delLike(id));
		// dispatch(getAllLikes(imageId));
	};

	const handleDelete = (e) => {
		e.preventDefault();
		setLikeStatus(false);
		deleteLike(checkLikeStatus(allLikes));
	};

	return (
		<div className='LikesList-container'>
			{likeStatus ? (
				<button
					onClick={(e) => {
						handleDelete(e);
					}}
				>
					You like this!
				</button>
			) : (
				<button onClick={likePost}>Like This</button>
			)}
			<div>{allLikes.length} Likes</div>
			{/* <div>{allDislikes.length} Dislikes</div> */}
		</div>
	);
};

export default LikesList;
