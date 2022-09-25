import React, {useEffect, useState} from 'react';

import {CarForm} from "../CarForm/CarForm";
import {Car} from "../Car/Car";
import {carService} from "../../services";
import "../../App.css";

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(value => setCars(value.data))
    }, [])

    return (
        <div>
            <CarForm setCars={setCars}/>
            <hr/>

            <div className={"item"}>{cars.map(car => <Car car={car} key={car.id} setCars={setCars}/>)}
            </div>
        </div>
    );
};

export {Cars};