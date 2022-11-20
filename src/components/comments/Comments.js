import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {commentsService} from "../../services";
import {load_comments} from "../../redux";
import {Comment} from "../comment/Comment";

const Comments = () => {

    const {comments} = useSelector(state => state.commentsReducer);
    const dispatch = useDispatch()

    useEffect(() => {
        commentsService.getAll().then(({data}) => dispatch({type: load_comments, payload: data}))
    }, [])

    return (
        <div>
            {comments.map((comment) => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};