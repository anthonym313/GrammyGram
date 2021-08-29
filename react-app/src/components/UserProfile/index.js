import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {singleUser} from '../../store/user';
import UserProfileEdit from '../UserProfileEdit';

import './UserProfile.css'


function UserProfile() {
	const user = useSelector((state)=> state.singleUser.user) || null
	const currentUser = useSelector((state)=> state.session.user) || null
	const { userId } = useParams();
	const dispatch = useDispatch();

	const [showEditor, setShowEditor]= useState(false)
	const [followerCount, setFollowerCount] = useState(0)
	const [followingCount, setFollowingCount] = useState(0)

	const editshow=(val)=>{
		setShowEditor(val)
	}

	function handleCount(array){
		return array.length
	}

	function isMyself(person){
		if(currentUser.id !== person.id){
			return(
				<>
					<span><button id='follow-userProfile-button'>Follow</button></span>
					<span style={{color:`#ffb700`}}><i id='userProfileMes' className="fas fa-paper-plane"></i></span>

				</>
			)

		}else{
			return(
				<>
					<span><button id='edit-userProfile-button' onClick={(e)=>setShowEditor(true)}>Edit Profile</button></span>
					<span><i id='userProfileCog' className="fas fa-cog"></i></span>
				</>
			)
		}

	}

	useEffect(() => {
		dispatch(singleUser(userId))
	}, [dispatch,userId]);

	if(!showEditor){

		return user &&(
			<div className='userProfile-container'>
				<div className='userProfile'>
					<div className='profile-image'>
						<img src={user.avatar} alt='userProfile photo'></img>
					</div>
					<div className='userProfile-settings'>
						<h1>{user.username}
							{isMyself(user)}

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
	}else{
		return user &&(
			<>
				<UserProfileEdit user={user} editshow={editshow}/>
			</>
		)
	}
}
export default UserProfile;
