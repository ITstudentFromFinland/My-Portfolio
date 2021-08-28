import React from "react";

import "../Components/CV.css";

import CV_LP from "../../src/Components/CV_LeenaPalsio.pdf";

export default function CV(props) {  
    
    return (
      <body>
      <div className="CV">
        <br></br>
        <iframe src={CV_LP} title="CV"></iframe>
      </div>
        <a href={CV_LP} download>Lataa PDF</a>
      </body>
    );
}