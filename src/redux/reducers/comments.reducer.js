import {load_comments} from "../actions/actions";

const commentsReducer = (state = {comments: [], comment: null}, action) => {
    const {type, payload} = action;

    switch (type){
        case load_comments:
            return {...state, comments: payload}
        default:
            return state
    }
}

export {commentsReducer};