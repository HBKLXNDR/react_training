import React from 'react';

import "../Launch/Launch.css"

const Launch = (props) => {
    const {launch: {mission_name, launch_year, links}} = props
    return (
        <div >
            <div className={"item_card"}>
                <p>Name: {mission_name}. Year: {launch_year}</p> <img src={links.mission_patch_small} alt={"img"}/>
            </div>


        </div>
    );
};

export {Launch};


