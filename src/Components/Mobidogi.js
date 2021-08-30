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
            <img src={register} />
            <img src={login} />
            <img src={loginError} />
            <img src={frontpage} />
            <img src={contact} />
            <img src={emptyDiary} />
            <img src={filledDiary} />
        </body>
    );
}