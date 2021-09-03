import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Box } from '@material-ui/core';
import { Center } from '@chakra-ui/react';
import './App.css';

import background from "./Images/YorkshireGirl.jpg";

import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import CV from "./Components/CV";
import Projects from "./Components/Projects";
import Contact from "./Components//Contact/Contact.js";
import Mobidogi from "./Components/Mobidogi.js";
import TravelPlanner from "./Components/TravelPlanner.js";

const Home = (props) => 
<body>
<img src={background} className="bg"/>
  <header className="header"><h1>Tervetuloa portfoliooni!</h1></header>

  <Box p={4, 8, 4, 8} className="frontpage-info">
    <h1>Leena Palsio</h1>
    <Center><p>Junior Software Developer suurella kiinnostuksella front-end- ja fullstack-ohjelmointiin.
      <br></br>
       Vankkaa JavaScript- ja css-osaamista frontend-puolelta luottavaisella asenteella.</p></Center>
  </Box>
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


