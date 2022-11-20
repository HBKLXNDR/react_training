import React from 'react';

const Post = ({post}) => {
    const {id, body, title} = post;
    return (
        <div>
            <h3>{id}.) {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export {Post};