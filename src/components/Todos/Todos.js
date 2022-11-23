import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {todoActions} from "../../redux";
import {Todo} from "../Todo/Todo";

const Todos = () => {
    const dispatch = useDispatch();
    const {error, todos, loading, todoWithApiRequest} = useSelector(state => state.todoReducer);



    useEffect(() => {
        dispatch(todoActions.getAll())
    }, [])

    return (
        <div>
            {todoWithApiRequest && <p>{todoWithApiRequest.title}</p>}
            {loading && <h3>Loading content ...</h3>}
            {error && <h3>Something wen wrong...</h3>}
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};


export {Todos};