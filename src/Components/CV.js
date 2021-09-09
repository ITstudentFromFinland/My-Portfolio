import React from "react";

import "../Components/CV.css";

import CV_LP from "../Components/CV_LeenaPalsio.pdf";
import CodeBootcamp from "../Components/Code-Bootcamp_todistus.pdf";
import Mediasignal from "../Components/Mediasignal_harjoittelutodistus.pdf"
import { Button } from "@material-ui/core";

export default function CV(props) { 
    
    return (
      <body>
      <div className="CV">
        <br></br>
        <iframe src={CV_LP} title="CV"></iframe>
      </div>
      <br></br>
        <a className="cv_download" href={CV_LP} download>Lataa CV (PDF)</a>

        <Button variant="contained" color="primary" className="contained-button"><a className="bootcamp-link" href={CodeBootcamp} target="_blank">Code Bootcamp -todistus</a></Button>
        <Button variant="outlined" color="primary" className="btn"><a href={Mediasignal} target="_blank">Mediasignal Harjoittelutodistus</a></Button>
      </body>
    );
}