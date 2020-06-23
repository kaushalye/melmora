import React, { Component } from 'react';
import {Carousel, Container, Row, Col, Card} from 'react-bootstrap';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
    this.loadImages = this.loadImages.bind(this);
  }

  async loadImages() {
    
    this.setState({images: ["1", "2", "3"]});
  }

  componentDidMount() {
    return this.loadImages()
  }

  render() {
    const images = this.state.images;

    return (
      <Container className="nppadding">
        <Container className="nppadding">
        {images.length > 0 && 
          <Carousel  className="newsslide" interval='4000'>
          {
            images.map((item, i) => {
              const image = "/banner/"+item+".jpg";

              return (
                <Carousel.Item className="newsslideItem" >
                      <img
                        className="d-block w-100"
                        src={image}
                        alt="First slide"
                      />
              </Carousel.Item>
              );
            })
          }
          
        </Carousel>}
        </Container>
        {/* <Container className="normaltext">
          <p>The University of Moratuwa Alumni Association in Victoria was officially formed in March 2012 at a general meeting held in Glen Waverley, Victoria, Australia. Prior to this, the organization functioned as an informal group called "MelMora". The MelMora group has been operational since early 2001.</p>
          <p>Its primary objectives are to promote the interests of the University of Moratuwa as a pre-eminent centre of education, while providing a common forum for academic, professional and social interaction among graduates, staff and others associated with the University of Moratuwa, Sri Lanka.</p>
        </Container> */}
        <Container fluid="md">
          <Row>
            <Col className="tile draw-border">
              <Container className="tileHeader"> Vision </Container>
              <Container className="tileBody"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Container>
            </Col>
            <Col className="tile draw-border">
              <Container className="tileHeader"> Mission </Container>
              <Container className="tileBody"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Container>
            </Col>
            <Col className="tile draw-border">
              <Container className="tileHeader"> Values </Container>
              <Container className="tileBody"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Container>
            </Col>
          </Row>
        </Container>
      </Container>

    );
  }
}

export default Home;
