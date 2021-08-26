import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {singleUser} from '../../store/user'

import './UserProfile.css'

function UserProfile() {
	const user = useSelector((state)=> state.singleUser.user) || null
	const { userId } = useParams();
	const dispatch = useDispatch();
	
	const [followerCount, setFollowerCount] = useState(0)
	const [followingCount, setFollowingCount] = useState(0)
	function handleCount(array){
		 
		return array.length
	}
	
	useEffect(() => {
		dispatch(singleUser(userId))
		
	}, [dispatch,userId]);
	

	return user &&(
		<div className='userProfile-container'>
			<div className='userProfile'>
				<div className='profile-image'>
					<img src={user.avatar} alt='userProfile photo'></img>
				</div>
				<div className='userProfile-settings'>
					<h1>{user.username}
						<span><button id='edit-userProfile-button'>Edit Profile</button></span>
						<i id='userProfileCog' className="fas fa-cog"></i>
					</h1>
					
				</div>
				<div className='userProfile-stats'>
					<ul>
						<li><span>{handleCount(user.posts)}</span> posts</li>
						<li><span>{followerCount}</span> followers </li>
						<li><span>{followingCount}</span> following</li>
					</ul>

				</div>
			</div>
			<div className="userProfile-posts-container">
				<div className='posts-gallery'>
					{user.posts.map(image=>(
					<div className='posts-gallery-photo' >
						<a href={`/posts/${image.id}`}><div className='gallery-image' style={{backgroundImage:`url(${image.image_url})`, overflow:'hidden'}}></div></a>

					</div>

					))}
				</div>
			</div>

		</div>
	);
}
export default UserProfile;
