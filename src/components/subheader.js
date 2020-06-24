import React, { Component } from 'react';
import {Tabs, Container} from 'react-bootstrap';


class SubHeader extends Component {


  render() {
   
    return (
      
      <Container className="nopadding ">
        <span className="subHeader">{this.props.subtitle}</span>
      </Container>

    );
  }
}

export default SubHeader;
