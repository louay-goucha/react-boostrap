import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form} from "react-bootstrap";


function App() {
  return (

<Form className="formtag">
  <Form.Group controlId="formGroupName">
    <label>Name</label>
    <Form.Control size ="lg" type="text" placeholder="Your Name" />
  </Form.Group>
  <Form.Group controlId="formGroupemail">
    <label>Email address</label>
    <Form.Control size ="lg" type="email" placeholder="your E-mail" />
  </Form.Group>
  <Form.Group controlId="formGroupMessage">
    <label>Message</label>
    <Form.Control size ="lg" type="text" placeholder="Your message" />
  </Form.Group>
  <button>Validate</button>
</Form>
  );
}

export default App;