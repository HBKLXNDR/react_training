import React from 'react';
import {carService} from "../../services";


const Car = ({car, setCars, setCarForUpdate}) => {
    const {id, model, year, price} = car;

    const deleteItems = async () => {
        await carService.deleteOneById(id)
        setCars(cars => {
            const index = cars.findIndex(car => car.id === id)
            cars.splice(index, 1)
            return [...cars]
        })
    }
    return (
        <div>
            <div className={"items"}>
                <p>id:{id}</p>
                <p>model:{model}</p>
                <p>year:{year}</p>
                <p>price:{price}</p>
            </div>
            <div>
                <button onClick={()=>setCarForUpdate(car)}>Update</button>
                <button onClick={() => deleteItems()}>Delete</button>
            </div>
        </div>

    );
};

export {Car};