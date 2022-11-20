import React from 'react';

const SingleUserDetails = ({user}) => {
    const {id, name, username, address} = user;

    return (
        <div>
            <h3>{id}.) {name}</h3>
           <p> {username} -- {address.city}</p>
        </div>
    );
};

export {SingleUserDetails};