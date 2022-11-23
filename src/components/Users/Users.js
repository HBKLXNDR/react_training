import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {
    const dispatch = useDispatch();
    const {users, error, loading,userFromApi} = useSelector(state => state.userReducer);

    useEffect(() => {
        // userService.getAll().then(({data}) => dispatch(userActions.getAll(data)))
        // below is a new way of using userService(we put it in slices) and here we just use dispatch and created method
        dispatch(userActions.getAll())
    }, [])

    return (
        <div>
            {loading && <h3>Loading ...</h3>}
            {error && <h3>Error</h3>}
            {userFromApi && userFromApi.email}
            {users.map(user => <User key={user.id} user={user} />)}
        </div>
    );
};

export {Users};