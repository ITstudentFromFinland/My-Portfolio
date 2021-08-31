import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'  
import './App.css';

import background from "./Images/YorkshireGirl.jpg"

import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import CV from "./Components/CV";
import Projects from "./Components/Projects";
import Contact from "./Components//Contact/Contact.js";
import Mobidogi from "./Components/Mobidogi.js";
import TravelPlanner from "./Components/TravelPlanner.js";

const Home = (props) => 
<body>
  <header class="header"><h1>Tervetuloa portfoliooni!</h1></header>
  <img src={background} class="background" />
</body>

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-me"><AboutMe /></Route>
        <Route path="/my-cv"><CV /></Route>
        <Route path="/my-projects"><Projects /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/mobidogi-gallery"><Mobidogi /></Route>
        <Route path="/travelplanner-gallery"><TravelPlanner /></Route>
      </Switch>
    </Router>
  );
}

export default App;


