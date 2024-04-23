import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
       <Button  type="submit"><Link  to="/ ">
        </Link>Button</Button>{' '}
    </Form>
  );
};

export default SignUp;
