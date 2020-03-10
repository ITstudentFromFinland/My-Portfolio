import React from 'react';
import './App.css';

import Fruits from "./Components/Fruits";
import Cars from "./Components/Cars";

const cars = [
  {"id": 1, "make": "ford", "model": "Mustang"},
  {"id": 2, "make": "honda", "model": "Civic"},
  {"id": 3, "make": "skoda", "model": "Octavia"},
  {"id": 4, "make": "honda", "model": "Accord"},
  {"id": 5, "make": "skoda", "model": "Fabia"},
  {"id": 6, "make": "ford", "model": "T"},
  {"id": 7, "make": "volvo", "model": "V40"}
] 

function App() {
  
  return ( <Fruits listOfFruits={fruits} />
  );
}

export default App;
