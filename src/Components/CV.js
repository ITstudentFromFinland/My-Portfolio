import React from "react";

import "../Components/CV.css";

export default function CV(props) {  
    
    return (
      <body>
      <div>
        <br></br>
        <iframe src="CV_LeenaPalsio.pdf"></iframe>
      </div>

      <div>
        <object
        data="https://drive.google.com/file/d/11KiZnxxEMyMhMj3Dp0MUNC74FDHNa3cx/view?usp=sharing"
        type="application/pdf"
        width="100%"
        height="100%">
          <a href="https://drive.google.com/file/d/11KiZnxxEMyMhMj3Dp0MUNC74FDHNa3cx/view?usp=sharing">Avaa PDF</a>
      </object>
      </div>

      </body>
    );
}