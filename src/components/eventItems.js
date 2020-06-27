import React, { Component } from 'react';
import { Container, Image, Col} from 'react-bootstrap';


class EventItems extends Component {
  render() {
    return (
      <Container className="tileContainer">
          {
            this.props.images.map(imgSrc => {
              return (
              <Container className="eventImageContainer ">
                <Image className="eventImage draw-border " src={imgSrc}></Image>
              </Container>
              );
            })
          }
      </Container>

    );
  }
}

export default EventItems;
