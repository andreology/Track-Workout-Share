import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');

function EditProfile(props) {
  return (
    <div>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First name</Form.Label>
            <Form.Control type="firstName" placeholder="" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="lastName" placeholder="" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Bio</Form.Label>
          <Form.Control placeholder="" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Location</Form.Label>
          <Form.Control placeholder="" />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Picture</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default EditProfile;
