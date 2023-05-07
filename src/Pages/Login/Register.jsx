import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [accept,setAccept] = useState(false)
    const handleRegister = (event) => {
      event.preventDefault();
      const from = event.target
      const name = from.name.value;
      const password = from.password.value;
      const email = from.email.value;
      const photo = from.photo.value;

      createUser(email,password)
      .then(result => {
          const createdUser = result.user
          console.log(createdUser);
      })
      .catch(error => {
        console.log(error);
      })
    }

    const handleAccepted=(event)=>{
      setAccept(event.target.checked)
    }
    return (
        <Container className="mx-auto w-25">
        <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Enter Photo URL"  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3"  controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handleAccepted} type="checkbox" name="accept" label={<>Accept <Link to="/terms">Terms and Conditions</Link></>} />
        </Form.Group>
        <Form.Text className="text-muted">
            Already Have an Account ? <Link to="/login">Login</Link> <br />
        </Form.Text>
        <Button variant="primary" disabled={!accept} type="submit" className="mt-2">
          Register
        </Button>
        <Form.Text className="text-muted">
            
        </Form.Text>
      </Form>
    </Container>
    );
};

export default Register;