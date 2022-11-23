import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postActions} from "../../redux";
import {Post} from "../Post/Post";

const Posts = () => {
    const dispatch = useDispatch();
    const {posts, error, loading} = useSelector(state => state.postReducer);

    useEffect(() => {
        dispatch(postActions.getAll())
    }, [])

    return (
        <div>
            {loading && <h3>Loading ...</h3>}
            {error && <h3>Error!</h3>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};


export {Posts};