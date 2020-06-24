import React, { Component } from 'react';
import {Carousel, Container, Image, Col, Card} from 'react-bootstrap';

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
    const news = [
      {
        title: 'Blood Donation',
        year: 2020,
        image: '/news/1.jpg'
      },
      {
        title: 'Dinner Dance',
        year: 2021,
        image: '/news/3.jpg'
      }
    ];
    return (
      <Container className="nopadding">
        <Container className="nopadding">
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

        <Container className="tileContainer" >
          <Container className="tile tileWide draw-border"> 
            <Container className="tileHeader"><i className="fas fa-bullseye "  style= {{color: '#dd9a9a'}}></i> Vision </Container>
            <Container className="tileBody"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </Container>
          </Container>
          <Container className="tile tileWide draw-border"> 
               <Container className="tileHeader"><i class="fas fa-tasks" style= {{color: 'orange'}}></i>  Mission </Container>
              <Container className="tileBody"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </Container>
          </Container>
          <Container className="tile tileWide draw-border"> 
              <Container className="tileHeader"><i class="fas fa-leaf" style= {{color: '#50eb38'}}></i>  Values </Container>
              <Container className="tileBody"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </Container>
          </Container>
        </Container>
        <Container className="tileContainer" >
          <Container className="tileWide draw-border">
            <Container className="tileHeader"> Upcoming Events </Container>
            <Container className="tileBody"></Container>
          </Container>
        </Container>
      </Container>

    );
  }
}

export default Home;
