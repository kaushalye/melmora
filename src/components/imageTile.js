import React, { Component } from 'react';
import { Container, Image} from 'react-bootstrap';


class ImageTile extends Component {


  render() {
   
    return (
      
      <Container className="imageTile ">
        <Image className="imageTile-image" src={this.props.imageUrl} /> 
        <Container className="imageTile-text">
          <p>{this.props.title}</p>
        </Container>
      </Container>

    );
  }
}

export default ImageTile;
