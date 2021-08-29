import React from "react";

import "./Mobidogi.css";

import login from "../Images/login.jpg";
import frontpage from "../Images/frontpage.jpg";

export default function Mobidogi(props) {  
    
    return (
        <body><h1>Galleria, Mobidogi</h1>
        <br></br>
            <img src={login} />
            <img src={frontpage} />
        </body>
    );
}