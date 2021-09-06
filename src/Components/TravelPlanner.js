import React from "react";
import { Center } from "@chakra-ui/layout";

import "./TravelPlanner.css";

import register1 from "../Images/TravelPlanner/TravelRegister.JPG";
import register2 from "../Images/TravelPlanner/TravelRegister2.JPG";
import registerUsedEmail from "../Images/TravelPlanner/TravelRegisterEmailUsed.JPG";
import registerNotShowPassword from "../Images/TravelPlanner/TravelRegisterNotShowPassword.jpg";
import registerShowPassword from "../Images/TravelPlanner/TravelRegisterShowPassword.jpg";
import usedEmail from "../Images/TravelPlanner/TravelRegisterEmailUsed.JPG";
import login1 from "../Images/TravelPlanner/TravelLogin.JPG";
import login2 from "../Images/TravelPlanner/TravelLogin2.JPG";
import login3 from "../Images/TravelPlanner/TravelLogin3.JPG";
import frontpageEmpty from "../Images/TravelPlanner/TravelFrontpage_noTravels.JPG";
import addTravel from "../Images/TravelPlanner/AddTravel.JPG";
import filledTravel from "../Images/TravelPlanner/AddTravel_Filled.JPG";
import frontpageAdded from "../Images/TravelPlanner/TravelFrontpage_TravelsAdded.JPG";
import addedTravelOptions from "../Images/TravelPlanner/TravelAddedTravelOptions.jpg";
import modifyTravel from "../Images/TravelPlanner/TravelModifyTravel.JPG";
import goTravelEmpty from "../Images/TravelPlanner/TravelMeneMatkaan_Empty.JPG";
import addActivitet from "../Images/TravelPlanner/TravelAddActivitet.JPG";
import activitetDropdown from "../Images/TravelPlanner/TravelActivitetDropdown.jpg";
import filledActivitet from "../Images/TravelPlanner/TravelAddActivitet_Filled.JPG";
import activitets from "../Images/TravelPlanner/TravelActivitets.JPG";
import pageNotFound from "../Images/TravelPlanner/TravelNotFound.JPG";

export default function TravelPlanner(props) {  
    
    return (
        <body>
        <br></br>
        <h1>Galleria, Travel Planner</h1>
        <br></br>
        <Center><p>Kuvat suurentuvat raahaamalla hiiri niiden päälle</p></Center>
        <div className="imageContainer">
            <img src={register1} class="scrshot" title="rekisteröityminen"/>
            <img src={register2} class="scrshot" title="rekisteröityminen virheillä" />
            <img src={registerUsedEmail} class="scrshot" title="sähköposti on jo käytössä" />
            <img src={registerNotShowPassword} class="scrshot" title="salasana piilotettu" />
            <img src={registerShowPassword} class="scrshot" title="salasana näkyvillä" />
            <img src={usedEmail} class="scrshot" title="rekisteröityminen, sähköposti käytössä" />
            <img src={login1} class="scrshot" title="kirjautuminen" />
            <img src={login2} class="scrshot" title="kirjautuminen, väärä sähköposti" />
            <img src={login3} class="scrshot" title="kirjautuminen, väärä salasana" />
            <img src={frontpageEmpty} class="scrshot" title="etusivu, ei matkoja" />
            <img src={addTravel} class="scrshot" title="luo matka, tyhjä" />
            <img src={filledTravel} class="scrshot" title="luo matka, täytetty" />
            <img src={frontpageAdded} class="scrshot" title="etusivu, matkoja lisätty" />
            <img src={addedTravelOptions} class="scrshot" title="matkan asetukset" />
            <img src={modifyTravel} class="scrshot" title="muokkaa matkaa" />
            <img src={goTravelEmpty} class="scrshot" title="tyhjä aktiviteettilista" />
            <img src={addActivitet} class="scrshot" title="lisää aktiviteetti" />
            <img src={activitetDropdown} class="scrshot" title="aktiviteetti dropdown" />
            <img src={filledActivitet} class="scrshot" title="täytetty aktiviteetti" />
            <img src={activitets} class="scrshot" title="aktiviteettilista" />
            <img src={pageNotFound} class="scrshot" title="matkaa ei löydy" />
            </div>
        </body>
    );
}