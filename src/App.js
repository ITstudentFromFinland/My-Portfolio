import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'  
import './App.css';

import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import CV from "./Components/CV";
import Projects from "./Components/Projects";
import Contact from "./Components//Contact/Contact.js";

const Home = (props) => <header class="header"><h1>Tervetuloa portfoliooni!</h1></header>

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
      </Switch>
    </Router>
  );
}

export default App;


