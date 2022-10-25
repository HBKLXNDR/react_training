import React from 'react';

const User = ({user, getUserId}) => {
    return (
        <div>
            {user.id}.) {user.name}
            <button onClick={() => getUserId(user.id)}>Get posts</button>
        </div>
    );
};

export {User};