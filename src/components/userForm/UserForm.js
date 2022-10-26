import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services";

const UserForm = ({setUsers}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        mode: "all",
        defaultValues: {
            name: "name",
            surname: "surname",
            email: "email"
        }
    });

    const submit = (obj) => {
        userService.createUser(obj).then(({data}) => setUsers(users => [...users, data]))
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register("name", {required: {value: true, message: "Error"}})}/>
            {
                errors.name && <span>{errors.name.message}</span>
            }
            <input type="text" {...register("surname", {required: {value: true, message: "Error"}})}/>
            {
                errors.surname && <span>{errors.surname.message}</span>
            }
            <input type="text" {...register("email", {required: {value: true, message: "Error"}})} />
            <button>create</button>
        </form>
    );
};


export {UserForm};