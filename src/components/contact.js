import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import ItemList from './itemList';

class Contact extends Component {
  render() {
    return (
      <Container className="nopadding">
        <Container className="tileContainer" >
          <Container className="tileWide">
            <p>Please get in touch with the Alumni team if you have any questions or feedback. We'd love to hear from you.</p>
            <Row> 
              <Col className='itemListNamePosition col-3'><i className="fas fa-envelope"/>:</Col >
              <Col className='itemListName'><a href="mailto:info@umaav.org.au">info@umaav.org.au</a></Col>
            </Row>
            <Row> 
              <Col className='itemListNamePosition col-3'><i className="fab fa-facebook-square"/>:</Col >
              <Col className='itemListName'><a href="https://www.facebook.com/groups/melmora" target="self">melmora facebook page</a></Col>
            </Row>
          </Container>
        </Container>   
      </Container>
    );
  }
}

export default Contact;
