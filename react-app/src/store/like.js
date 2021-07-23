const GET_LIKES = 'like/GET_LIKES';
const GET_DISLIKES = 'like/GET_DISLIKES';

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

const initialState = { likes: '' };
export const likesReducer = (state = initialState, action) => {
	let newState = {};
	switch (action.type) {
		case GET_LIKES:
			action.likes.forEach((like) => {
				newState[like.id] = like;
			});
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
