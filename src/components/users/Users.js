import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {usersService} from "../../services";
import {load_users} from "../../redux";
import {User} from "../user/User";

const Users = () => {
    const {users} = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        usersService.getAll().then(({data})=>dispatch({type: load_users, payload: data}))
    },[])

    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};