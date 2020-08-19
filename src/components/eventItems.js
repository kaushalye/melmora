import React, { Component } from 'react';
import { Container, Image, Modal } from 'react-bootstrap';


class EventItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      curImage: '',
    };
    this.showFullScreen = this.showFullScreen.bind(this);
    this.hideFullScreen = this.hideFullScreen.bind(this);
  }


  hideFullScreen() {
    this.setState({
      showModal: false,
    })
  }
  
  showFullScreen(e) {
    const name = e.target.name;
    this.setState({
      showModal: true,
      curImage: name,
    })
  }  

  render() {
    if (this.props.images.length == 0 ) {
      return (<Container></Container>);
    }
    
    return (

      <Container className="tileContainer" >
        <Container className="tileWide">
          <Container className="tileHeader"><i className="fas fa-calendar"></i>  {this.props.title} </Container>
          <Container className="horzontallyScrollableContainer">
            {
              this.props.images.map(imgSrc => {
                return (
                  <Container className="eventImageContainer ">
                    <Image className="eventImage draw-border " src={imgSrc} name={imgSrc} onClick={this.showFullScreen} ></Image>
                  </Container>
                );
              })
            }
          </Container>
        </Container>
        <Modal size="xl" show={this.state.showModal} onHide={this.hideFullScreen}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body >
              <Image className="fullScreenImage" src={this.state.curImage}></Image>
            </Modal.Body>

          </Modal> 
      </Container>
  
    );
  }
}

export default EventItems;
