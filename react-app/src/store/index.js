import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import imageReducer from './post';
import { reducer, singleUserReducer, allUsersReducer } from './user';
import commentReducer from './comment';
import { likesReducer, dislikesReducer } from './like';

const rootReducer = combineReducers({
	session,
	feedPosts: imageReducer,
	randomUsers: reducer,
	singleUser: singleUserReducer,
	userList: allUsersReducer,
	comment: commentReducer,
	likes: likesReducer,
	dislikes: dislikesReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
	enhancer = applyMiddleware(thunk);
} else {
	const logger = require('redux-logger').default;
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
	return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
