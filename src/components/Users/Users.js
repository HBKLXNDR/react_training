import React, {useState} from 'react';
import {User} from "../User/User";

const Users = () => {
    const [users, setUser] = useState([]);
    const [user, setUsers] = useState(null)

    return (
        <div>
            <div>
                {users.map((user)=><User key={user.id} user={user}/>)}
            </div>
        </div>
    );
};

export {Users};