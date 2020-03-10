import React from "react";

import Car from "./Car";
import './Car.css';


export default function Cars(props) {
    const carElements = props.listOfCars.map(carData => 
        {return <Car key={carData.id} make={carData.make} model={carData.model} />
})
    console.log(carElements);
    return (
        <div className="cars">
            {carElements}
        </div>
    );
}