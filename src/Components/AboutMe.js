import React from "react";

import "./AboutMe.css";

export default function AboutMe(props) {  
    
    return (
        <body><h1 class="about-me-header">Tietoa Minusta</h1>

        <div class="general-information">
            <table>
                <tr>
                    <th>Nimi:</th>
                    <th>Ikä:</th>
                    <th>Syntymäpäivä:</th>
                    <th>Asuinpaikka:</th>
                    <th>Harrastukset:</th>
                </tr>

                <tr>
                    <th>Usagi Tsukino</th>
                    <th>28</th>
                    <th>6.4.1993</th>
                    <th>Joensuu</th>
                    <th>Laulaminen, ohjelmointi ja konsoliroolipelit</th>
                </tr>

                <textarea class="text-area">Aamuisin herään yhdeksän maissa. Aloitan päiväni maukkaalla ja tukevalla aamiaisella ja
                    virkistyslimpparilla. Aamiaisen jälkeen aloitan yleensä pelien pelaamisen. Pelaaminen kestää yleensä
                    pesuun ja sitä kautta nukkumaanmenoon saakka, mutta syön tietenkin välillä kunnon lounaan. Nukkumaan
                    menen arkipäivisin kymmeneltä ja viikonloppuisin yleensä keskiyöllä.
                </textarea>
            </table>
        </div>
        </body>
    );
}