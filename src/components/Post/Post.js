import React from 'react';
import {useDispatch} from "react-redux";

import {postActions} from "../../redux";

const Post = ({post}) => {
    const {body, id, title} = post;

    const dispatch = useDispatch();

    return (
        <div>
            <h3>{id}.) {title}</h3>
            <span>{body}</span>
            <button onClick={() => dispatch(postActions.deleteById({id}))}>delete Post</button>
        </div>
    );
};

export {Post};