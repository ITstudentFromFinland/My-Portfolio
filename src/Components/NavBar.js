import React from 'react';
import {Link} from 'react-router-dom';
import "./NavBar.css";

export default function NavBar(props) {
    return (
        <div className="nav-bar">
        <ul>
            <li>
                <Link to="/">Etusivu</Link>
            </li>
            <li>
                <Link to="./about-me">Tietoa minusta</Link>
            </li>
            <li>
                <Link to="./my-cv">CV:ni</Link>
            </li>
            <li>
                <Link to="./my-projects">Ohjelmointiprojektini</Link>
            </li>
        </ul>
        </div>
    );
}