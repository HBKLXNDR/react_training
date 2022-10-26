import React from 'react';

const User = ({user}) => {
    return (
        <div>
            <p>{user.id} -- {user.name} {user.surname}</p>
            <div>{user.email}</div>

        </div>
    );
};

export {User};