import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, email, name} = user;

    return (
        <div>
            <h3>{id}.) {name}</h3>
            <p>{email}</p>
            <span><Link to={id.toString()}>Single user</Link></span>
        </div>
    );
};

export {User};