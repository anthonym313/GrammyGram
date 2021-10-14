import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { singleUser } from '../../store/user';
import {
	getImgAllLikes,
	newLike,
	delLike,
	getAllDislikes,
} from '../../store/like';

const LikesList = ({ imageId, likesArr }) => {
	const dispatch = useDispatch();
	const onePost = useSelector((state) => Object.values(state.feedPosts));
	// const dislikes = useSelector((state) => state.dislikes);
	const likesHook = useSelector((state) => Object.values(state.likes));
	const allLikes = likesArr ? likesArr : likesHook;
	// const newAllLikes = Object.values(likesArr);
	// console.log('passed prop likes', newAllLikes);
	// const allDislikes = Object.values(dislikes);
	const image = onePost[0];
	const loggedInUserId = useSelector((state) => state.session.user.id);
	const userId = image.user_id;
	const [likeStatus, setLikeStatus] = useState();
	console.log('all Likes', allLikes);
	console.log('like status', likeStatus);

	const checkLikeStatus = (likesArr) => {
		if (likesArr.find((likeObj) => likeObj['user_id'] === loggedInUserId)) {
			setLikeStatus(true);
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

		dispatch(singleUser(userId));
		// something incorrectly wrong with redux store when dispatching here
		// dispatch(getImgAllLikes(imageId));
		checkLikeStatus(allLikes);
		// This breaks the code, due to changes in frontend
		// dispatch(getAllDislikes(imageId));
	}, [dispatch, userId, imageId]);

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
		dispatch(getImgAllLikes(imageId));
	};

	const handleDelete = (e) => {
		e.preventDefault();
		dispatch(delLike(checkLikeStatus(allLikes)));
		setLikeStatus(false);
		dispatch(getImgAllLikes(imageId));
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
