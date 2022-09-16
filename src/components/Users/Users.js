import React, {useEffect, useState} from 'react';

import "../Users/Users.css"
import {User} from "../User/User";
import {getUserDetailsAxios, getUsersAxios} from "../../services/axios.service";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUsersAxios().then(value => setUsers(value.data))
    }, [])

    const showDetails = (id) => {
        getUserDetailsAxios(id).then(value => setUser(value.data))
    }


    return (
        <div>
            <div>
                {users.map((user) => <User key={user.id} user={user} showDetails={showDetails}/>)}
            </div>
            <hr/>
            <div>
                {user && <div className={"grid"}><p>Name: {user.name}</p><p>Surname: {user.username}. </p><p> Email: {user.email}. </p> <p> Address: {user.address.street}. </p></div>}
            </div>
        </div>
    );
};

export {Users};