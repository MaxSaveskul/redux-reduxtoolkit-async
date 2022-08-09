import React from "react";
import { useSelector } from "react-redux";
import { getReducerPosts } from "./redux/postsReducer";
import { getSlicePosts } from "./redux-toolkit/postsSlice";

import "./App.css";
import Posts from "./components/Posts";

function App() {
	const postsReducer = useSelector((state) => state.postsReducer.posts);
	const postsSlice = useSelector((state) => state.postsSlice.posts);

	return (
		<div className="flex">
			<div className="cont">
				<h2>Planets</h2>
				<h4>(Reducer-Actions method from Redux)</h4>
				<Posts posts={postsReducer} whatToDispatch={getReducerPosts()} />
			</div>
			<div className="cont">
				<h2>Starships</h2>
				<h4>(Slice method from Redux Toolkit)</h4>
				<Posts posts={postsSlice} whatToDispatch={getSlicePosts()} />
			</div>
		</div>
	);
}

export default App;
