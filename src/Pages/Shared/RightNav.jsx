import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram,} from "react-icons/fa";
import QZone from "./QZone";
import bg from "../../assets/bg.png"
const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button className="mb-2" variant="outline-info">
        Login with Google <FaGoogle />
      </Button>
      <br />
      <Button variant="outline-dark">
        Login with GitHub <FaGithub />
      </Button>
      <div>
        <ListGroup className="mt-4 gap-2">
          <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone/>
      <div>
            <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
