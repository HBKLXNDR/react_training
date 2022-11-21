import React from 'react';
import {useDispatch} from "react-redux";

import {userActions} from "../../redux";

const User = ({user}) => {
    const dispatch = useDispatch()

    const {id, name, username, email} = user;

    return (
        <div>
            <h3>{id}.) {name} </h3>
            <p>{username} -- {email}</p>
            <button onClick={()=>dispatch(userActions.setCurrentUser(user))}>select</button>
        </div>
    );
};

export {User};