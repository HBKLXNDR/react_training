import React from 'react';

const User = (props) => {
    const {user:{id, name}, showDetails} = props



    return (
        <div>
            {id} - {name}
            <button onClick={()=>showDetails(id)}>Show details</button>
        </div>
    );
};

export {User};