import React from 'react';
import {useDispatch} from "react-redux";

import {todoActions} from "../../redux";

const Todo = ({todo}) => {
    const {id, title, completed} = todo;
    const dispatch = useDispatch();
    
    return (
        <div>
            <h2>{id}.) {title}</h2>
            <p> completed: {completed}</p>
            <button onClick={()=>dispatch(todoActions.deleteById(id))}>deleteTodo</button>
            <button onClick={()=>dispatch(todoActions.getTodoById({id}))}>get by id with api request</button>
            <button onClick={()=>dispatch(todoActions.getCurrentTodoWithoutRequest(todo))} >get without request</button>
        </div>
    );
};

export {Todo};