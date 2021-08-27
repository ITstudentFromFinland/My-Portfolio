import React from "react";

import "./Projects.css";

export default function Projects(props) {  
    
    return (
        <body><h1 class="projects-header">Projektini</h1>

        <div>
            <ul>
                <li><a href="https://github.com/ITstudentFromFinland/MobiDogi">MobiDogi</a> (Android-mobiilisovellus koirien ongelmakoulutukseen, opinnäytetyö)</li>
            <br></br>
                <li><a href="https://github.com/ITstudentFromFinland/bootcamp-finland-traveling-demo">Travel Planner</a> (Websovellus matkojen suunnitteluun ystävien kanssa, Code Bootcamp -demosovellus)</li>
            <br></br>
                <li><a href="https://github.com/ITstudentFromFinland/My-Portfolio">Portfolioni</a> (tämä websovellus)</li>
            </ul>
        </div>

        </body>
    );
}