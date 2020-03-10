import React from "react";

import Fruit from "./Fruit";
import './Fruit.css';

export default function Fruits(props) {
    return (
        <div className="fruits">
            <Fruit type="apple">McIntosh</Fruit>
            <Fruit type="apple">Golden Delicious</Fruit>
            <Fruit type="pear">Concorde</Fruit>
            <Fruit type="pear">Bosc</Fruit> 
        </div>
    );
}