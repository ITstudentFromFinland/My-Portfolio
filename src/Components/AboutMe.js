import React from "react";
import Box from "@material-ui/core/Box";

import "./AboutMe.css";

import profilePic from "../Images/profile.jpg";
import { Divider } from "@material-ui/core";

export default function AboutMe(props) {  
    
    return (
        <body><h1 class="about-me-header">Tietoa Minusta</h1>

        <br></br>

                <table className="info-table">
                <tr>
                    <th>Vahvuudet:</th>
                    <td>ongelmanratkaisutaidot, englanninkielen taito, nopea oppimaan, oma-aloitteisuus</td>
                </tr>
                <tr>
                    <th>Ohjelmointitaidot:</th>
                    <td>JavaScript, css, twig, front-end, WordPress</td>
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

                <Box class="text-area">Code Bootcamp antoi lähtölaukauksen halulleni työllistyä sovelluskehittäjäksi, kun taas edellinen harjoitteluni Mediasignalilla 
                                       opetti minulle, että minä todellakin kuulun työelämässä koodin taakse. 
                                       <br></br><br></br>
                                       Ensimmäinen kosketukseni koodaamiseen oli tietojenkäsittelyn tradenomikoulutukseni lopussa keväällä 2020, kun kehitin parissa 
                                       kuukaudessa eräälle koirakouluttajalle Android-mobiilisovelluksen. Haaveissani oli tuolloin työllistyä sähköisen liiketoiminnan tehtäviin, 
                                       mutta noin kuukauden tuloksettoman työnhaun jälkeen hakeuduin Code Bootcamp -ohjelmointikoulutukseen. Koulutuksessa kehitin 
                                       demo-nettisovelluksen matkojen suunnitteluun oppien JavaScript-kielen ja css:n.
                                       <br></br><br></br>
                                       Code Bootcampin jälkeen pyrin Code Academyyn, mutta persoonallisuuteeni sopivaa yhteistyöyritystä ei löytynyt, aloin etsimään sovelluskehittäjän 
                                       töitä. Työnhaun avuksi sain duuniagentin Luotsilta, minkä kautta pääsin loppuvuodeksi työkokeiluun Joensuun seurakunnan
                                       digitointiprojektiin. Työkokeilu poiki minulle lyhyen määrä-aikaisen työsuhteen toimistosihteerinä digitointiprojektin 
                                       loppuunviemiseksi.
                                       <br></br><br></br>
                                       Työsuhteen päätyttyä aktiivinen työnhaku jatkui ja Kuntakokeilu ohjasi minut hakeutumaan SpringHousen järjestämään Nuorten työelämästartti
                                       -koulutukseen. Koulutukseen kuuluneen tyäharjoittelujakson suoritin Mediasignalilla, missä toimin frontend-kehittäjänä erilaisissa
                                       nettisovellus- ja WordPress-projekteissa. Harjoittelun aikana käytin Chakra-ui- ja Material-ui -kirjastoja ja opin twig-kieltä.
                                       Sain harjoittelusta positiivista palautetta muun muassa oma-aloitteisesta ja itsenäisestä asioihin perehtymisestä, sekä nopeasta oppimisesta.
                </Box>

            <img src={profilePic} class="profile" />

        </body>
    );
}