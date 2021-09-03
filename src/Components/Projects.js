import React from "react";

import "./Projects.css";

export default function Projects(props) {  
    
    return (
        <body><h1 class="projects-header">Projektit</h1>

        <br></br><br></br>

        <div>
        <h3>Sovellus | Käytetyt ohjelmointikielet</h3>

            <ul>
                <li><a href="https://github.com/ITstudentFromFinland/MobiDogi" target="_blank">MobiDogi</a> | Java (Android-mobiilisovellus koirien ongelmakoulutukseen, opinnäytetyö) 
                <a className="mobidogi-link" href="/mobidogi-gallery">Kuvagalleriaan</a></li>
            <br></br>
                <li><a href="https://github.com/ITstudentFromFinland/bootcamp-finland-traveling-demo" target="_blank">Travel Planner</a> | JavaScript, css, html (Websovellus matkojen suunnitteluun ystävien kanssa, Code Bootcamp -demosovellus)
                <a className="demo-link" href="/travelplanner-gallery">Kuvagalleriaan</a></li>
            <br></br>
                <li><a href="https://github.com/ITstudentFromFinland/My-Portfolio" target="_blank">Portfolioni</a> | Javascript, css, html (tämä websovellus)</li>
            </ul>
        </div>

        </body>
    );
}