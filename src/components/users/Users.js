import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import {User} from "../user/User";
import {UserForm} from "../userForm/UserForm";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            <div><UserForm setUsers={setUsers}/></div>
            <div> {
                users.map(user => <User key={user.id} user={user}/>)
            }</div>
        </div>
    );
};

export {Users};