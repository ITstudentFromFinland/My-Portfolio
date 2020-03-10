import React from "react";

import Fruit from "./Fruit";
import "./Fruits.css";

export default function Fruits(props) {
    const fruitElements = props.listOfFruits.map(
        fruitData => {
          return <Fruit key={fruitData.id} type={fruitData.type}>{fruitData.name}</Fruit>
        }
    )
    
    return (
        <div className="fruits">
            {fruitElements}
        </div>
    );
}