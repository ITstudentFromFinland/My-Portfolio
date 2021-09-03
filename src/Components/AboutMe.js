import React from "react";
import Box from "@material-ui/core/Box";

import "./AboutMe.css";

import profilePic from "../Images/profile.jpg";
import { Divider } from "@material-ui/core";

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
                    <th>Koulutus:</th>
                    <td>Tietojenkäsittelyn ammattikorkeakoulututkinto, Tradenomi</td>
                </tr>
                <tr>
                    <th>Vahvuudet:</th>
                    <td>ongelmanratkaisutaidot, englanninkielen taito, nopea oppimaan, oma-aloitteisuus</td>
                </tr>
                <tr>
                    <th>Puhelin:</th>
                    <td>040 5963074</td>
                </tr>
                <tr>
                    <th>Sähköposti:</th>
                    <td>leena.palsio@outlook.com</td>
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
                <Divider className="divider" />
                <br></br>

                <Box class="text-area">Edellinen harjoittelu
                    Valmistuin tietojenkäsittelyn tradenomiksi Karelia-ammattikorkeakoulusta keväällä 2020. Valmistumiseni jälkeen
                                       hh
                                                     - kuka olen, millainen olen
                                                     - persoonallisuus ja taidot 
                                                     - työhistoriasta ja koulutuksesta (+ kurssit)
                                                     - mitä olen tehnyt, mitä haluan tehdä tulevaisuudessa
                                                     (Kuhunkin kohtaan pitäisi sisällyttää myös lyhyt selite siitä, miten ne yhdistyvät CV:ssä esitettyihin taitoihin ja saavutuksiin.)
                                                     Koulutustaustan ja työhistorian esittäminen ovat tärkeitä asioita, sillä suurin osa työnantajista 
                                                    haluavat juuri nähdä nämä tiedot. Alasta ja koulutustaustasta riippumatta on tärkeätä kerätä 
                                                    ura- ja koulutustietoja itselleen ja mahdolliselle työnantajalle. Työhistorian kirjoittamista 
                                                    varten on hyvä kerätä paljon tietoa ja käydä läpi jokainen työhistoria yksityiskohtaisesti. On 
                                                    myös hyvä säilyttää itselleen tärkeät materiaalit, jotka liittyvät työhistoriaan, sillä näiden 
                                                    materiaalien säilyttäminen auttaa työhistorian osoittamista. Portfoliossa yleensä tuodaan 
                                                    esille koulutus- ja uratiedot, mutta henkilökohtaisen työsuoritukseen liittyvät asiat unohdetaan helposti.

                                                    Myös asiakkailta tai kollegoilta saadut palautteet ja suositukset kannattaa tuoda esille portfoliossa.
                                                     - mitä osaan (uraa koskevat), miten kehitän osaamistani
                </Box>

            <img src={profilePic} class="profile" />

        </body>
    );
}