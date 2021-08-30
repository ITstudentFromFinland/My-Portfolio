import React from "react";

import "./TravelPlanner.css";

import register1 from "../Images/TravelPlanner/TravelRegister.JPG";
import register2 from "../Images/TravelPlanner/TravelRegister2.JPG";
import usedEmail from "../Images/TravelPlanner/TravelRegisterEmailUsed.JPG";
import login1 from "../Images/TravelPlanner/TravelLogin.JPG";
import login2 from "../Images/TravelPlanner/TravelLogin2.JPG";
import login3 from "../Images/TravelPlanner/TravelLogin3.JPG";

export default function Mobidogi(props) {  
    
    return (
        <body><h1>Galleria, Travel Planner</h1>
        <br></br>
            <img src={register1} />
            <img src={register2} />
            <img src={usedEmail} />
            <img src={login1} />
            <img src={login2} />
            <img src={login3} />
        </body>
    );
}