import axios from "axios";

const FETCH_POSTS = "POST/FETCH_POSTS";

const initialState = {
	posts: []
};

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POSTS:
			return { ...state, posts: action.payload };
		default:
			return state;
	}
};

export function getReducerPosts() {
	return async (dispatch) => {
		const res = await axios.get("https://swapi.dev/api/planets/");
		dispatch({ type: FETCH_POSTS, payload: res.data.results });
	};
}

export default postsReducer;
