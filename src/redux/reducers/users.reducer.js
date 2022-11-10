import {load_single_user, load_users} from "../actions/actions";

const usersReducer = (state = {users: [], user: null}, action) => {
    const {type, payload} = action;

    switch (type) {
        case load_users:
            return {...state, users: payload}
        case load_single_user:
            const user = state.users.find(user=>user.id===payload);
            return {...state, user}
        default:
            return state
    }
}

export {usersReducer};