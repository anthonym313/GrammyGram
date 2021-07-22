import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { singleUser } from '../../store/user';
import { getAllComments } from '../../store/comment';

const CommentList = () => {
	const dispatch = useDispatch();
	const { postId } = useParams();
	const [users, setUsers] = useState([]);
	const allComments = useSelector((state) => state.comment);
	const onePost = useSelector((state) => Object.values(state.feedPosts));
	const image = onePost[0];
	const userId = image.user_id;
	const newComments = Object.values(allComments);

	// const userInfo = (newComments) => {
	// 	newComments.map((comment) => {});
	// };

	useEffect(() => {
		if (!postId) {
			return;
		}

		async function fetchData() {
			const response = await fetch('/api/users/');
			const responseData = await response.json();
			setUsers(responseData.users);
		}
		fetchData();

		dispatch(singleUser(userId));
		dispatch(getAllComments(postId));
	}, [dispatch, postId, userId]);

	// 		{/* <li key={user.id}>
	// 			<NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
	// 		</li> */}

	const postUser = (user) => {
		let obj = {};
		user.forEach((u) => {
			obj[u.id] = u.username;
		});
		return obj;
	};
	const list = postUser(users);

	return (
		<div className='commentList-container'>
			<h3>Comments: </h3>
			{newComments &&
				newComments?.map((comment) => (
					<div>
						Submitted by: {list[comment.user_id]}
						<li key={comment.id}>{comment.comment}</li>
						<div>
							<button>
								Delete
							</button>
						</div>
					</div>
				))}
		</div>
	);
};

export default CommentList;

//   return (
//     <div className="feed-page">
//       {pureIm &&
//         pureIm?.map((image) => (
//           <div key={image.id} className="post-container">
//             <div className="top-bar">
//               <button onClick={() => deletePost(image.id)}>Delete</button>
//             </div>
//             <div className="image-container">
//               <img
//                 src={image?.image_url}
//                 alt="feed-images"
//                 className="the-image"
//               />
//             </div>
//             <div className="post-content">
//               <div className="post-actions"></div>
//               <div className="post-description">
//                 <p>{list[image.user_id]}</p>
//                 <p>{image.description}</p>
//               </div>
//               <div className="comments"></div>
//               <div className="post-comment"> </div>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// }

// export default Feed;
