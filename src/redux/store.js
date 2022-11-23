import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {commentReducer, postReducer, todoReducer, userReducer} from "./slices";

const rootReducer = combineReducers({
    userReducer,
    postReducer,
    commentReducer,
    todoReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore}