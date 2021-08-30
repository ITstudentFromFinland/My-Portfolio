import React from "react";

import "./Mobidogi.css";

import register from "../Images/register.jpg";
import login from "../Images/login.jpg";
import loginError from "../Images/loginError.jpg";
import frontpage from "../Images/frontpage.jpg";
import contact from "../Images/contactTrainer.jpg";
import emptyDiary from "../Images/diaryFirst.jpg";
import filledDiary from "../Images/diaryShow.jpg";

export default function Mobidogi(props) {  
    
    return (
        <body><h1>Galleria, Mobidogi</h1>
        <br></br>
            <img src={register} class="screenshot" title="rekisteröityminen" />
            <img src={login} class="screenshot" title="kirjautuminen" />
            <img src={loginError} class="screenshot" title="virhe kirjautumisessa" />
            <img src={frontpage} class="screenshot" title="etusivu" />
            <img src={contact} class="screenshot" title="yhteys kouluttajaan" />
            <img src={emptyDiary} class="screenshot" title="tyhjä treenipäiväkirja" />
            <img src={filledDiary} class="screenshot" title="täytetty treenipäiväkirja" />
        </body>
    );
}