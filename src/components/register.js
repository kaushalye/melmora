import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

class Register extends Component {
  render() {
    return (
      <Container className="nopadding">
        <Container className="registration">
        <p align="center">
          <iframe className="responsive-iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSeapD5WG0gj_BF4pkVyRZZIZlWhgibPRD6Q6Otil5lVX3hWPg/viewform?embedded=true"  height="2921" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </p>
        </Container>   
      </Container>
    );
  }
}

export default Register;
