const POST_COMMENT = 'comment/POST_COMMENT';
const GET_COMMENT = 'comment/GET_COMMENT';
const DEL_COMMENT = 'comment/DEL_COMMENT';
const PUT_COMMENT = 'comment/PUT_COMMENT';

export const getComment = (comment) => ({
	type: GET_COMMENT,
	comment,
});

export const postComment = (comment) => ({
	type: POST_COMMENT,
	comment,
});

export const deleteComment = (comment) => ({
	type: DEL_COMMENT,
	comment,
});

export const putComment = (comment) => ({
	type: PUT_COMMENT,
	comment,
});

// GET
export const getAllComments = (imageId) => async (dispatch) => {
	console.log('thunkId', imageId);
	const res = await fetch(`/api/posts/${imageId}/comments`);
	if (res.ok) {
		const allComments = await res.json();
		dispatch(getComment(allComments));
	}
};

// POST
export const newComment = (newComment) => async (dispatch) => {
	const res = await fetch(`/api/comments/create`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newComment),
	});

	if (res.ok) {
		const createdComment = await res.json();
		dispatch(postComment(createdComment));
		return createdComment;
	}
};

export const delComment = (id) => async (dispatch) => {
	const res = await fetch(`/api/comments/${id}`, {
		method: 'DELETE',
		body: JSON.stringify({ id }),
	});
	if (res.ok) {
		await res.json();
		dispatch(deleteComment(id));
		return res;
	}
};

// PUT
export const editComment = (id, userId, comment) => async (dispatch) => {
	const res = await fetch(`/api/comments/${id}/edit`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ id: id, userId: userId, comment: comment }),
	});
	if (res.ok) {
		const newComment = await res.json();
		// console.log('thunk', newComment);
		dispatch(putComment(newComment));
		return newComment;
	}
};

const initialState = { comment: '' };
const commentReducer = (state = initialState, action) => {
	let newState = {};
	switch (action.type) {
		case GET_COMMENT:
			action.comment.forEach((comment) => {
				newState[comment.id] = comment;
			});
			return { ...newState };
		case POST_COMMENT:
			newState = {
				...state,
				[action.comment.id]: action.comment,
			};
			return newState;
		case DEL_COMMENT:
			newState = { ...state };
			delete newState[action.id];
			return { ...newState };

		case PUT_COMMENT:
			newState = { ...(state[action.comment.id] = action.comment) };
			return newState;
		default:
			return state;
	}
};

export default commentReducer;
