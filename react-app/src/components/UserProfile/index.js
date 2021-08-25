import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {singleUser} from '../../store/user'

import './UserProfile.css'

function UserProfile() {
	const user = useSelector((state)=> state.singleUser.user) || null
	const { userId } = useParams();
	const dispatch = useDispatch();
	
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
					<h1 className='userProfile-username'>{user.username}</h1>
					<button id='edit-userProfile'>Edit Profile</button>
					<span className="fas fa-cog"></span>
				</div>

			</div>
		</div>
	);
}
export default UserProfile;
