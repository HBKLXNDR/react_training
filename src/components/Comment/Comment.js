import React from 'react';
import {useDispatch} from "react-redux";

import {commentActions} from "../../redux";

const Comment = ({comment}) => {
    const dispatch = useDispatch()
    const {body, id, title} = comment;

    return (
        <div>
            <h3>
                {id}.) {title}
            </h3>
            <p>{body}</p>
            <button onClick={()=>dispatch(commentActions.deleteById(id))}>delete comment</button>
        </div>
    );
};

export {Comment};