// import fetch from 'node-fetch'
const POST_IMAGE = 'post/POST_IMAGE';
// const DELETE_IMAGE = "post/DELETE_IMAGE";
const GET_FEED = 'post/GET_FEED';
export const getFeed = (image) => {
	return {
		type: GET_FEED,
		image,
	};
};
export const postImage = (image) => ({
	type: POST_IMAGE,
	image,
});
//CREATE
export const postImageThunk = (payload) => async (dispatch) => {
	const res = await fetch('/api/posts/upload', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	});
	const newPost = await res.json();
	dispatch(postImage(newPost));
};
export const getImagesThunk = () => async (dispatch) => {
	const res = await fetch('/api/posts');
	if (res.ok) {
		const allImages = await res.json();
		// console.log(allImages);
		dispatch(getFeed(allImages));
	}
};

export const getSingleImageThunk = (id) => async (dispatch) => {
	const res = await fetch(`/api/posts/${id}`);
	if (res.ok) {
		const oneImage = await res.json();
		dispatch(getFeed(oneImage));
	}
};

const initialState = { thing: '' };
const imageReducer = (state = initialState, action) => {
	let newState = {};
	switch (action.type) {
		case POST_IMAGE:
			newState = {
				...state,
				[action.image.id]: action.image,
			};
			return newState;
		case GET_FEED:
			// let newState = {};
			// let obj = Object.entries(...action.image)
			// newState = {
			//   ...obj
			// }
			//  for (let image in action.image){
			//    console.log('helloooo', action.image)
			//   newState[image?.id] = image;
			// }
			// return {...newState}
			[action.image].forEach((photo) => {
				newState[photo.id] = photo;
			});
			return {
				...newState,
			};
		default:
			return state;
	}
};
export default imageReducer;
