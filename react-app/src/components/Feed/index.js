import React, { useEffect, useState } from 'react';
// import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getImagesThunk } from '../../store/post';
import { singleUser } from '../../store/user';
import './feed.css';
function Feed() {
	const dispatch = useDispatch();
	const userArr = useSelector((state) => Object.values(state.session));
	const [user, setUser] = useState();
	const allPosts = useSelector((state) => Object.values(state.feedPosts));
	const pureIm = allPosts[0].posts;
	useEffect(() => {
		dispatch(getImagesThunk());
		// dispatch(singleUser(pureIm.userId));
		setUser();
	}, [dispatch]);
	return (
		<div className='feed-page'>
			{pureIm &&
				pureIm?.map((image) => (
					<div key={image.id} className='post-container'>
						<div className='top-bar'>{setUser(image.userId)}</div>
						<div className='image-container'>
							<img
								src={image?.image_url}
								alt='feed-images'
								className='the-image'
							/>
						</div>
						<div className='post-content'>
							<div className='post-actions'></div>
							<div className='comments'></div>
							<div className='post-comment'> </div>
						</div>
					</div>
				))}
		</div>
	);
}
export default Feed;
