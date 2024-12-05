import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//REDUX
import { Provider } from "react-redux"
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducers/reducer"
import { getPosts } from './actions/post.action';

const store = configureStore({
  reducer : rootReducer,
  devTools : true,
});

store.dispatch(getPosts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
)
