import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./redux/postsReducer";
import postsSlice from "./redux-toolkit/postsSlice";

import App from "./App";

const store = configureStore({
	reducer: { postsReducer: postsReducer, postsSlice: postsSlice }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
