// import fetch from 'node-fetch'
const POST_IMAGE = 'post/POST_IMAGE';
const DELETE_IMAGE = 'post/DELETE_IMAGE';
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

export const deleteImage = (id) => ({
	type: DELETE_IMAGE,
	id,
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
	const res = await fetch('/api/posts/');

	if (res.ok) {
		const allImages = await res.json();
		// console.log(allImages);
		dispatch(getFeed(allImages));
	}
};

// only thing missing
export const getSingleImageThunk = (imageId) => async (dispatch) => {
	const res = await fetch(`/api/posts/${imageId}`);

	if (res.ok) {
		const singleImage = await res.json();
		dispatch(getFeed(singleImage));
	}
};

//DELETE
export const deleteImageThunk = (id) => async (dispatch) => {
	const res = await fetch(`/api/posts/${id}`, {
		method: 'DELETE',
		body: JSON.stringify({ id }),
	});
	if (res.ok) {
		await res.json();
		dispatch(deleteImage(id));
		return res;
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
			[action.image].forEach((photo) => {
				newState[photo.id] = photo;
			});
			return {
				...newState,
			};
		case DELETE_IMAGE:
			newState = { ...state };
			delete newState[action.id];
			return { ...newState };
		default:
			return state;
	}
};
export default imageReducer;
