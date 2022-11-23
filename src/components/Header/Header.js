import React from 'react';

import css from "./Header.module.css";
import {useSelector} from "react-redux";

const Header = () => {
    const {currentUser} = useSelector(state => state.userReducer);
    const {currentTodoWithoutRequest} = useSelector(state => state.todoReducer);
    return (
        <div className={css.Header}>
            {currentUser && currentUser.name}
            {currentTodoWithoutRequest && currentTodoWithoutRequest.title}

        </div>
    );
};

export {Header};