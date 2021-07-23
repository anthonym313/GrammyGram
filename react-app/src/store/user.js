const RANDOM_USER = 'user/RANDOM_USER';
const GET_USER = 'user/GET_USER';
const SMALLGROUP_USER = 'user/SMALLGROUP_USER'

const randomUser = (randomList) => ({
	type: RANDOM_USER,
	randomList,
});
const smallGroupUser = (list) => ({
	type: SMALLGROUP_USER,
	list,
})

const getUser = (user) => ({
	type: GET_USER,
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
export const getSmallGroupOfUsers = () => async (dispatch) => {
	const response = await fetch('/api/users/smallgroup');
	if (response.ok) {
		const users = await response.json();
		dispatch(smallGroupUser(users));
		return 'SUCCESSFULLY GOT SMALL GROUP OF USERS';
	}
};

export const singleUser = (id) => async (dispatch) => {
	const res = await fetch(`/api/users/${id}`);
	if (res.ok) {
		const user = await res.json();
		dispatch(getUser(user));
	}
};

const initialState = [];
const initialState2 = { users: '' };
export function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_USER:
			return action.user;
		case RANDOM_USER:
			return action.randomList;
		default:
			return state;
	}
}

export function singleUserReducer(state = initialState2, action) {
	switch (action.type) {
		case GET_USER:
			return action.user;
		default:
			return state;
	}
}

export function smallGroupReducer (state = initialState, action){
	switch (action.type){
		case SMALLGROUP_USER:
			return action.list;
		default:
			return state;
	}
}
