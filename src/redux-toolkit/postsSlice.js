import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	posts: []
};

export const getSlicePosts = createAsyncThunk(
	"posts/getPosts",
	async (_, { rejectWithValue, dispatch }) => {
		const res = await axios.get("https://swapi.dev/api/starships/");
		dispatch(setPosts(res.data.results));
	}
);

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		setPosts: (state, action) => {
			state.posts = action.payload;
		}
	},
	extraReducers: {
		[getSlicePosts.fulfilled]: () => console.log("fulfilled"),
		[getSlicePosts.pending]: () => console.log("pending"),
		[getSlicePosts.rejected]: () => console.log("rejected")
	}
});

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;
