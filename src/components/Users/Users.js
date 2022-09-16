import React, {useState} from 'react';

import "../User/User.css"
import {User} from "../User/User";

const Users = () => {
    const [users, setUsers] = useState([]);

    fetch("https://rickandmortyapi.com/api/character")
        .then(value => value.json())
        .then(value => {
            setUsers(value.results.splice(0,6))
        })

    return (
        <div>
            <h1>Rick and Morty API</h1>
            <div className={"flex"}>
                {users.map((user) => (<User user={user} key={user.id}/>))}
            </div>
        </div>
    );
};

export {Users};