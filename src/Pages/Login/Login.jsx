import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const {signInUser} = useContext(AuthContext);
  const navigate=useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/category/0";

  const handleLogin=(event)=> {
    event.preventDefault();
    const form = event.target
   
    const password = form.password.value;
    const email = form.email.value;
    signInUser(email,password)
    .then(result => {
          const signInUser = result.user
          console.log(signInUser);
          form.reset();
          navigate(from,{replace:true})
    })
    .catch(error => {
        console.log(error);
    })
  }
  return (
    <Container className="mx-auto w-25">
        <h3>Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3"  controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Text className="text-muted">
            Don't Have an Account ? <Link to="/register">Register</Link> <br />
        </Form.Text>
        <Button variant="primary" type="submit" className="mt-2">
          Login
        </Button>
        <Form.Text className="text-muted">
            
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
