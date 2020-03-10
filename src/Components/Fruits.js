import React, { useState, useEffect} from "react";

import Fruit from "./Fruit";
import AddFruit from "./addFruit";
import "./Fruits.css";

export default function Fruits(props) {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/fruits');
            res
                .json()
                .then(data => setFruits(data))
                .catch(err => console.log(err));
        }

        fetchData();
    }, []);

    const fruitElements = fruits.map(
        fruitData => {
          return <Fruit 
          key={fruitData.id} 
          type={fruitData.type}>
              {fruitData.name}
              </Fruit>
        }
    )
    
    return (
        <React.Fragment>
          <AddFruit onFruitAdded={
              (newFruit) => setFruits([...fruits, newFruit])
              } />
        <div className="fruits">
            {fruitElements}
        </div>
        </React.Fragment>
    );
}