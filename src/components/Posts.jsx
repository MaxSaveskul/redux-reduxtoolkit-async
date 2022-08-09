import React from "react";
import { useDispatch } from "react-redux";

const Posts = ({ posts, whatToDispatch }) => {
	const dispatch = useDispatch();
	// const posts = useSelector((state) => state.postsReducer.posts);
	// const posts = useSelector((state) => state.postsSlice.posts);

	if (!posts.length) {
		return <button onClick={() => dispatch(whatToDispatch)}>Get</button>;
	}
	return (
		<ul>
			{posts?.map((post) => (
				<li key={post.name}>{post.name}</li>
			))}
		</ul>
	);
};

export default Posts;
