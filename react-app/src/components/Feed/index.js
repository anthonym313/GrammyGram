import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getImagesThunk, deleteImageThunk } from '../../store/post';
import { getAllUsers } from '../../store/user';
import EditButton from './EditButton';
import './feed.css';
import CommentForm from '../CommentForm';
import LikesList from '../LikesList';
import CommentList from '../CommentList';
import Suggestions from '../Suggestions';
import SmallSuggestions from "../SmallSuggestions";

function Feed() {
	const dispatch = useDispatch();

	const history = useHistory();

	const allPosts = useSelector((state) => Object.values(state.feedPosts));
	const allUsers = useSelector((state) => Object.values(state.userList));
	const pureIm = allPosts[0].posts;
	const usersList = allUsers[0].users;
	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('/api/users/');
			const responseData = await response.json();
			console.log('response', responseData.users);
			setUsers(responseData.users);
		}
		fetchData();
		dispatch(getAllUsers());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getImagesThunk());
		history.push('/posts/');
	}, [dispatch, history]);

  return (
    <div>
      <div className="feed-page">
        <SmallSuggestions />
        <Suggestions />
        {pureIm &&
          pureIm?.map((image) => (
            <div key={image.id} className="post-container">
              <div className="top-bar">
                <img
                  className="post-avatar"
                  src={avt[image.user_id]}
                  alt="avatar"
                ></img>
                <p className="username-post">{list[image.user_id]}</p>
              </div>
              <div className="image-container">
                <img
                  src={image?.image_url}
                  alt="feed-images"
                  className="the-image"
                />
              </div>
              <div className="post-content">
                <div className="post-actions"></div>

                <div className="post-description">
                  <div className="info-container">
                    <p className="username-post">{list[image.user_id]}</p>

                    <p className="caption-post">{image.description}</p>
                  </div>
                  <div>
                    <EditButton image={image} />
                  </div>
                </div>

                <div className="comments"></div>
                <div className="post-comment"> </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default Feed;
