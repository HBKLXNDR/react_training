import React from 'react';

const Comment = ({comment}) => {
    const {id, name, body} = comment

    return (
        <div>
            <h3>{id}.) {name}</h3>
            <p>{body}</p>
        </div>
    );
};

export {Comment};