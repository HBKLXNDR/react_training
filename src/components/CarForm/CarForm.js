import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services";
import {carValidator} from "../../validators";

const CarForm = ({setCars}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: "all"
    });

    const submit = async (car) => {
        const {data} = await carService.create(car)
        setCars(cars => [...cars, data])
        reset()
    };

    useEffect(() => {
        setValue("model", "model")
        setValue("year", "0")
        setValue("price", "0")
    }, [])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={"model"} {...register("model")}/>
            {errors.model && <span>{errors.model.message}</span>}
            <input type="text" placeholder={"year"} {...register("year")}/>
            {errors.year && <span>{errors.year.message}</span>}
            <input type="text" placeholder={"price"} {...register("price")}/>
            {errors.price && <span>{errors.price.message}</span>}
            <button disabled={!isValid}>Submit</button>
        </form>
    );
};

export {CarForm};