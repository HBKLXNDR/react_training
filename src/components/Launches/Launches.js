import React, {useEffect, useState} from 'react';

import "../Launch/Launch.css"
import {getAxiosAllLaunches} from "../services/axios.service";
import {Launch} from "../Launch/Launch";

const Launches = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        getAxiosAllLaunches().then(value => setLaunches(value.data.filter(item => item.launch_year !== "2020")))
    }, [])

    return (
        <div>
            <h1>Spacex Launches</h1>
            <div className={"flex"}>
                {launches.map((launch, index) => <Launch key={index} launch={launch}/>)}
            </div>
        </div>
    );
};

export {Launches};