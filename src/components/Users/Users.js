import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userActions} from "../../redux";
import {userService} from "../../services";
import {User} from "../User/User";

const Users = () => {
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.userReducer);

    useEffect(() => {
        // userActions.getAll()
        userService.getAll().then(({data}) => dispatch(userActions.getAll(data)))
    }, [])

    return (
        <div>
            {users.map(user=><User key={user.id} user={user} />)}
        </div>
    );
};

export {Users};