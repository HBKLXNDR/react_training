import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {load_single_user} from "../../redux";
import {SingleUserDetails} from "../singleUserDetails/SingleUserDetails";

const SingleUser = () => {
    const {user} = useSelector(state => state.usersReducer)
    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch({type: load_single_user, payload: +id})
    }, [id])

    return (
        <div>
            {
                user && (<SingleUserDetails user={user}/>)
            }
        </div>
    );
};

export {SingleUser};