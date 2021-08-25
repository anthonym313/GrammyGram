import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {singleUser} from '../../store/user'

function UserProfile() {
	const user = useSelector((state)=> state.singleUser.user)
	const { userId } = useParams();
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(singleUser(userId))
		
	}, [dispatch,userId]);

	if (!user) {
		return null;
	}

	return (
		<ul>
			<li>
				<strong>User Id</strong> {userId}
			</li>
			<li>
				<strong>Username</strong> {user.username}
			</li>
			<li>
				<strong>Email</strong> {user.email}
			</li>
		</ul>
	);
}
export default UserProfile;
