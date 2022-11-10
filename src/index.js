import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";

const userReducer = (state = {users: [], user: null}, action) => {
    switch (action.type) {
        case "Load user":
            state = {users: action.payload};
            return {...state}
        //another option below:
        //     return {...state, users: action.payload}


        case "choose user":
            const id = action.payload
            let user = state.users.find(value => value.id === id)
            return {...state, user: user}
        default:
            return state
    }
}

const postReducer = (state = {posts: [], post: null}, action) => {
    switch (action.type) {
        case "Load posts":
            state = {posts: action.payload};
            return {...state}
        //another option below:
        //     return {...state, users: action.payload}


        case "choose post":
            const id = action.payload
            const post = state.posts.find(value => value.id === id)
            // ES 6, do not need to write post:post
            return {...state, post}
        default:
            return state
    }
}

const reducer = combineReducers({
    userReducer: userReducer,
    postReducer
});

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

