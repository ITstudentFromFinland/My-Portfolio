import React from "react";
import { Center } from "@chakra-ui/layout";

import "./Mobidogi.css";

import register from "../Images/register.jpg";
import registerShortPassword from "../Images/registerShortPassword.jpg";
import login from "../Images/login.jpg";
import loginError from "../Images/loginError.jpg";
import frontpage from "../Images/frontpage.jpg";
import contact from "../Images/contactTrainer.jpg";
import emptyDiary from "../Images/diaryFirst.jpg";
import filledDiary from "../Images/diaryShow.jpg";

export default function Mobidogi(props) {  
    
    return (
        <body>
            <br></br>
            <h1>Galleria, Mobidogi</h1>
        <br></br>
        <Center><p>Kuvat suurentuvat raahaamalla hiiri niiden päälle</p></Center>
        <div className="screenshotContainer">
            <img src={register} class="screenshot" title="rekisteröityminen" alt="" />
            <img src={registerShortPassword} class="screenshot" title="rekisteröityminen, liian lyhyt salasana" alt="" />
            <img src={login} class="screenshot" title="kirjautuminen" alt="" />
            <img src={loginError} class="screenshot" title="virhe kirjautumisessa" alt="" />
            <img src={frontpage} class="screenshot" title="etusivu" alt="" />
            <img src={contact} class="screenshot" title="yhteys kouluttajaan" alt="" />
            <img src={emptyDiary} class="screenshot" title="tyhjä treenipäiväkirja" alt="" />
            <img src={filledDiary} class="screenshot" title="täytetty treenipäiväkirja" alt="" />
            </div>
        </body>
    );
}