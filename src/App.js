import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import NavBar from "./Components/NavBar";
import Fruits from "./Components/Fruits";
import Cars from "./Components/Cars";

const Home = (props) => <div>Tämä on koti</div>

const cars = [
  {"id": 1, "make": "ford", "model": "Mustang"},
  {"id": 2, "make": "honda", "model": "Civic"},
  {"id": 3, "make": "skoda", "model": "Octavia"},
  {"id": 4, "make": "honda", "model": "Accord"},
  {"id": 5, "make": "skoda", "model": "Fabia"},
  {"id": 6, "make": "ford", "model": "T"},
  {"id": 7, "make": "volvo", "model": "V40"}
];

function App() {
  return (
    <Router>
      <NavBar />
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/cars"><Cars listOfCars={cars}/></Route>
    <Route render={() => "404 - Not Found!"}/>
    </Switch>
    </Router>
    );
  
  return ( <Cars listOfCars={cars} />
  );
}

export default App;
