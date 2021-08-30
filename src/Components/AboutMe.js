import React from "react";

import "./AboutMe.css";

import profilePic from "../Images/profile.jpg";

export default function AboutMe(props) {  
    
    return (
        <body><h1 class="about-me-header">Tietoa Minusta</h1>

        <br></br><br></br>

                <table width="100%">
                <tr>
                    <th>Nimi:</th>
                    <td>Leena Palsio</td>
                </tr>
                <tr>
                    <th>Puhelin:</th>
                    <td>040 5963074</td>
                </tr>
                <tr>
                    <th>LinkedIn:</th>
                    <td><a class="linkedin" href="https://www.linkedin.com/in/leena-palsio-19b36313b">www.linkedin.com/in/leena-palsio-19b36313b</a></td>
                </tr>
                <tr>
                    <th>Github:</th>
                    <td><a class="github" href="https://github.com/ITstudentFromFinland">www.github.com/ITstudentFromFinland</a></td>
                </tr>
                </table>
               
                <br></br>

                <table>
                <tr>
                    <th>
                <textarea class="text-area" readOnly>Valmistuin tietojenkäsittelyn tradenomiksi Karelia-ammattikorkeakoulusta keväällä 2020.
                                                     - kuka olen, millainen olen
                                                     - mitä olen tehnyt, mitä haluan tehdä tulevaisuudessa
                                                     - mitä osaan, miten kehitän osaamistani
                </textarea>
                    </th>
                </tr>
            </table>

            <img src={profilePic} class="profile" />

        </body>
    );
}