const RANDOM_USER = 'user/RANDOM_USER';
const GET_USER = 'user/GET_USER';

const randomUser = (randomList) => ({
	type: RANDOM_USER,
	randomList,
});

const getUser = (user) => ({
	type: GET_USER,
	user,
});

export const getFiveRandomUsers = () => async (dispatch) => {
	const response = await fetch('/api/users/random');
	if (response.ok) {
		const users = await response.json();
		console.log('thunk', users);
		dispatch(randomUser(users));
		return 'SUCCESSFULLY GOT RANDOM USERS';
	}
};

export const singleUser = (id) => async (dispatch) => {
	const res = await fetch(`/api/users/${id}`);
	// console.log('res', res.json());
	if (res.ok) {
		const user = await res.json();
		console.log('thunk user', user);
		dispatch(getUser(user));
	}
};

// const initialState = [];
const initialState = { users: '' };
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_USER:
			return action.user;
		case RANDOM_USER:
			return action.randomList;
		default:
			return state;
	}
}
