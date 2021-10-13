const GET_LIKES = 'like/GET_LIKES';
const GET_DISLIKES = 'like/GET_DISLIKES';
const POST_LIKE = 'like/POST_LIKE';
const DEL_LIKE = 'like/DEL_LIKE';

export const getLikes = (likes) => {
	return {
		type: GET_LIKES,
		likes,
	};
};

export const getDislikes = (dislikes) => {
	return {
		type: GET_LIKES,
		dislikes,
	};
};

export const postLike = (likes) => {
	return {
		type: POST_LIKE,
		likes,
	};
};

export const deleteLike = (id) => {
	return {
		type: DEL_LIKE,
		id,
	};
};

export const getAllLikes = (imageId) => async (dispatch) => {
	const res = await fetch(`/api/likes/${imageId}/likes`);
	if (res.ok) {
		const allLikes = await res.json();
		dispatch(getLikes(allLikes));
	}
};

export const getAllDislikes = (imageId) => async (dispatch) => {
	const res = await fetch(`/api/likes/${imageId}/dislikes`);
	if (res.ok) {
		const allDislikes = await res.json();
		dispatch(getDislikes(allDislikes));
	}
};

export const newLike = (newLike) => async (dispatch) => {
	const res = await fetch(`/api/likes/create`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newLike),
	});
	if (res.ok) {
		const createdLike = await res.json();
		dispatch(postLike(createdLike));
		return createdLike;
	}
};

export const delLike = (id) => async (dispatch) => {
	const res = await fetch(`/api/likes/${id}`, {
		method: 'DELETE',
		body: JSON.stringify({ id }),
	});
	if (res.ok) {
		await res.json();
		dispatch(deleteLike(id));
		return res;
	}
};

const initialState = { likes: '' };
export const likesReducer = (state = initialState, action) => {
	let newState = {};
	switch (action.type) {
		case GET_LIKES:
			action.likes.forEach((like) => {
				newState[like.id] = like;
			});
			return { ...newState };
		case POST_LIKE:
			newState = {
				...state,
				[action.likes.id]: action.likes,
			};
			return newState;
		case DEL_LIKE:
			newState = { ...state };
			delete newState[action.id];
			return { ...newState };
		default:
			return state;
	}
};

const dislikesState = { dislikes: '' };
export const dislikesReducer = (state = dislikesState, action) => {
	let newState = {};
	switch (action.type) {
		case GET_DISLIKES:
			action.dislikes.forEach((dislike) => {
				newState[dislike.id] = dislike;
			});
			return { ...newState };
		default:
			return state;
	}
};
