import React from "react";

import "../Components/CV.css";

import CV_LP from "../../src/Components/CV_LeenaPalsio.pdf";
import { Button } from "@material-ui/core";

export default function CV(props) {  
    
    return (
      <body>
      <div className="CV">
        <br></br>
        <iframe src={CV_LP} title="CV"></iframe>
      </div>
        <a href={CV_LP} download>Lataa PDF</a>

        <Button variant="contained" color="primary" className="contained-button" >Code Bootcamp -todistus</Button>
        <Button variant="outlined" color="primary" className="btn">Mediasignal Harjoittelutodistus</Button>
      </body>
    );
}