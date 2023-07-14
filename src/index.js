import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const logger = store => next => action => {
	console.group(action.type);
	console.info("dispatching", action);
	let result = next(action);
	console.log("next state", store.getState());
	console.groupEnd();

	return result;
};

const store = createStore(rootReducer, applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
