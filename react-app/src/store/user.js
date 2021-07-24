const RANDOM_USER = 'user/RANDOM_USER';
const GET_USER = 'user/GET_USER';
const ALL_USERS = 'user/ALL_USERS';

const randomUser = (randomList) => ({
	type: RANDOM_USER,
	randomList,
});

const getUser = (user) => ({
	type: GET_USER,
	user,
});

const allUsers = (user) => ({
	type: ALL_USERS,
	user,
});

export const getFiveRandomUsers = () => async (dispatch) => {
	const response = await fetch('/api/users/random');
	if (response.ok) {
		const users = await response.json();
		dispatch(randomUser(users));
		return 'SUCCESSFULLY GOT RANDOM USERS';
	}
};

export const singleUser = (id) => async (dispatch) => {
	const res = await fetch(`/api/users/${id}`);
	if (res.ok) {
		const user = await res.json();
		dispatch(getUser(user));
	}
};

export const getAllUsers = () => async (dispatch) => {
	const res = await fetch('/api/users/');
	if (res.ok) {
		const users = await res.json();
		console.log('thunk', users);
		dispatch(allUsers(users));
	}
};

const initialState = [];
export function reducer(state = initialState, action) {
	switch (action.type) {
		case RANDOM_USER:
			return action.randomList;
		default:
			return state;
	}
}

const initialState2 = { user: '' };
export function singleUserReducer(state = initialState2, action) {
	switch (action.type) {
		case GET_USER:
			return { user: action.user };
		default:
			return state;
	}
}

const initialState3 = { users: '' };
export function allUsersReducer(state = initialState3, action) {
	let newState = {};
	switch (action.type) {
		case ALL_USERS:
			[action.user].forEach((user) => {
				newState[user.id] = user;
			});
			return newState;
		default:
			return state;
	}
}
