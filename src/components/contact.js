import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import ItemList from './itemList';

class Contact extends Component {
  render() {
    return (
      <Container className="nopadding">
        <Container className="tileContainer" >
          <Container className="tileWide">
            <p>Please get in touch with the Alumni team if you have any questions or feedback, we'd love to hear from you.</p>
            <Row> 
              <Col className='itemListNamePosition col-3'><i class="fas fa-envelope"/>:</Col >
              <Col className='itemListName'><a href="mailto:info@umaav.org.au">info@umaav.org.au</a></Col>
            </Row>
            <Row> 
              <Col className='itemListNamePosition col-3'><i class="fab fa-facebook-square"/>:</Col >
              <Col className='itemListName'><a href="https://www.facebook.com/groups/melmora" target="self">melmora</a></Col>
            </Row>
            <Row> 
              <Col className='itemListNamePosition col-3'><i class="fas fa-phone"/>:</Col >
              <Col className='itemListName'><a href="tel:+61-430-239-663 ">+61430239663 </a></Col>
            </Row>
            <Row> 
              <Col className='itemListNamePosition col-3'><i class="fab fa-yahoo"/>:</Col >
              <Col className='itemListName'><a href="http://groups.yahoo.com/neo/groups/melmora/info" target="self">melmora</a></Col>
            </Row>
            <Row> 
              <Col className='itemListNamePosition col-3'><i class="fas fa-map-marker"/>:</Col >
              <Col className='itemListName'><a href="https://goo.gl/maps/paBEoT9u57chr99B6" target="self">40 Browns Road, Noble Park North, VIC 3174</a></Col>
            </Row>
          </Container>
        </Container>     
      </Container>
    );
  }
}

export default Contact;
