import React from "react";
import { Center } from "@chakra-ui/layout";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import "./Contact.css";

const SERVICE_ID = "service_w0plt4j";
const TEMPLATE_ID = "template_2nsxunm";
const USER_ID = "user_bFhjkLlRjRsTXpJvXYNvU";

export default function Contact(props) {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Viesti lähetetty onnistuneesti"
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Hups, jokin meni vikaan",
          text: error.text,
        })
      });
    e.target.reset()
  };

 return (
  <body>
    <br></br>
      <Center><h1 class="projects-header">Ota yhteyttä</h1></Center>
      <br></br>
      <Center>Voit ottaa minuun yhteyttä työtarjousten tiimoilta tai kysyäksesi minusta lisää.</Center>
      <Center>Yhteyttä voi ottaa myös sähköpostitse (leena.palsio@outlook.com) tai puhelimitse (040 596 3074).</Center>
      <br></br><br></br>
  <div class="container">
  <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Sähköposti"
          name="user_email"
          placeholder="Sähköposti"
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-company"
          control={Input}
          label="Yritys"
          name="company"
          placeholder="Yritys"
          required
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Nimi"
          name="from_name"
          placeholder="Nimi"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Viesti"
          name="message"
          placeholder="Kirjoita viestisi tähän"
          required
        />
        <Button className="submit" type="submit" color="green">Lähetä</Button>
      </Form>
</div>
</body>
);
}