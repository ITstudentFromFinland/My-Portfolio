import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Link } from "@material-ui/core";
import "./Projects.css";

const useStyles = makeStyles({
    root: {
      maxWidth: 315,
      margin: 20,
    },
  }); 

export default function Projects(props) { 

    const classes = useStyles();
    
    return (
        <body>
          <br></br>
          <h1 class="projects-header">Projektit</h1>

        <br></br><br></br>

        <div>
        <h3>Sovellus | Käytetyt ohjelmointikielet</h3>

            <ul>
                <li><a href="https://github.com/ITstudentFromFinland/MobiDogi" target="_blank">MobiDogi</a> | Java (Android-mobiilisovellus koirien ongelmakoulutukseen, opinnäytetyö) 
                <a className="mobidogi-link" href="/mobidogi-gallery">Kuvagalleriaan</a></li>
            <br></br>
                <li><a href="https://github.com/ITstudentFromFinland/bootcamp-finland-traveling-demo" target="_blank">Travel Planner</a> | JavaScript, css, html (Websovellus matkojen suunnitteluun ystävien kanssa, Code Bootcamp -demosovellus)
                <a className="demo-link" href="/travelplanner-gallery">Kuvagalleriaan</a></li>
            <br></br>
                <li><a href="https://github.com/ITstudentFromFinland/My-Portfolio" target="_blank">Portfolioni</a> | Javascript, css, html (tämä sivusto)</li>
            </ul>
        </div>
                <br></br>
        <div>
            <h3>Projektisovellusten esittelyihin</h3>

            <Link href="https://drive.google.com/file/d/1-iY2VnsroX3NoUY82ptCIFj8wa5dIfi7/view?usp=sharing" target="_blank">
            <Card className={classes.root}>
      <CardActionArea>
        <CardContent className="card-content">
          <Typography gutterBottom variant="h5" component="h2">
            MobiDogi
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Android-mobiilisovellus koirien koulutukseen ongelmatilanteissa
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>

    <Link href="https://drive.google.com/file/d/1FEDP4XuOJ6eJkQoLutpUYHkPrSBlZKix/view?usp=sharing" target="_blank">
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className="card-content">
          <Typography gutterBottom variant="h5" component="h2">
            Travel Planner
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            nettisovellus matkojen suunnitteluun
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
        </div>

        </body>
    );
}