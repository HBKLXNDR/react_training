import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postsService} from "../../services";
import {load_posts} from "../../redux";
import {Post} from "../post/Post";

const Posts = () => {
    const {posts} = useSelector(state => state.postsReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        postsService.getAll().then(({data})=>dispatch({type: load_posts, payload: data}))
    },[])

    return (
        <div>
            {posts.map((post)=><Post key={post.id} post={post} />)}
        </div>
    );
};

export {Posts};