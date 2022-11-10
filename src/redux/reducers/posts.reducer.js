import {load_posts} from "../actions/actions";

const postsReducer = (state = {posts: [], post: null}, action) => {
    const {type, payload} = action;

    switch (type){
        case load_posts:
            return {...state, posts: payload}
        default:
            return state
    }
}

export {postsReducer};