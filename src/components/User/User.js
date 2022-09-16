import React from 'react';
import "./User.css"

const User = (props) => {
    const {user} = props;
    return (
        <div className={"border"}>
            <h2>{user.id} - {user.name}</h2>
            <p>{user.status} - {user.species} - {user.gender}</p>
            <img src={user.image} alt={user.name}/>
        </div>
    );
};

export {User};