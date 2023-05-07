import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NavigationBar = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut();
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="my-5">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ">
              <Nav.Link href="#features"><Link to="/category/0">Home</Link></Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && 
                <FaUserCircle style={{fontSize: "2rem"}}/>
              }
              { user ?
                  <Button variant="secondary" onClick={handleLogOut}>LogOut</Button>:
                  <Link to="/login"><Button variant="secondary">Login</Button></Link>
              }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
