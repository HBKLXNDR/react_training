import {combineReducers} from "redux";

import {commentsReducer} from "../reducers/comments.reducer";
import {postsReducer} from "../reducers/posts.reducer";
import {usersReducer} from "../reducers/users.reducer";

const reducer = combineReducers({
    commentsReducer,
    postsReducer,
    usersReducer
});

export {reducer};
