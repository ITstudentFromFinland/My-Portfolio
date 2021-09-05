import React from "react";
import { Center } from "@chakra-ui/layout";

import "./Contact.css";

export default function Contact(props) {
 return (
  <body>
      <Center><h1 class="projects-header">Ota yhteyttä</h1></Center>
      <br></br>
  <div class="container">
  <form action="action_page.php">

    <label for="fname">Etunimi</label>
    <input type="text" id="fname" name="firstname" placeholder="etunimi"/>

    <label for="lname">Sukunimi</label>
    <input type="text" id="lname" name="lastname" placeholder="sukunimi"/>

    <label for="company">Yritys ja osoite</label>
    <input type="text" id="company" name="company" placeholder="yritys ja osoite" />

    <label for="message">Viesti</label>
    <textarea id="message" name="message" placeholder="kirjoita viestisi tähän..." className="message"></textarea>

    <input type="submit" value="Lähetä"/>

  </form>
</div>
</body>
);
}