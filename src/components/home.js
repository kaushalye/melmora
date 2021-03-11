import React, { Component } from 'react';
import {Carousel, Container, Image, Row, Col} from 'react-bootstrap';
import EventItems from './eventItems';

const newsRoot =  `${process.env.REACT_APP_BASE_URL}/news`; 
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      upcomingNews:[],
      pastNews:[],
    };
    this.loadImages = this.loadImages.bind(this);
  }


  loadImages(dir, newsConfig) {
    const images = [];
    if (newsConfig[dir].trim() === "") {
      return images;
    }
    let i;
    const imagenames = newsConfig[dir].split(",").reverse();

    imagenames.forEach(function (imageName, index) {
      images.push(`${newsRoot}/${imageName}.jpg`);
    });

    return images;
  }

  async loadConfig() {
    const res = await fetch("/config/news.json");
    const newsConfig = await res.json();

    const upcomingNews = this.loadImages('upcoming', newsConfig);
    const pastNews = this.loadImages('past', newsConfig);

    this.setState({upcomingNews, pastNews});
  }

  componentDidMount() {
    this.loadConfig();
  }

  render() {
    const images = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return (
      <Container className="nopadding">
        <Container className="nopadding">
        {images.length > 0 && 
          <Carousel  className="newsslide" indicators={true} fade={true} interval='4000'>
          {
            images.map((item, i) => {
              const image = `/images/banner/${item}.jpg`;

              return (
                <Carousel.Item key={i} className="newsslideItem" >
                      <img
                        className="d-block w-100"
                        src={image}
                        alt="First slide"
                      />
              </Carousel.Item>
              );
            })
          }
          
        </Carousel>
        }
        </Container>
        <Container className="sponsor">
          <Image className="sponsorLogo" alt="ANZ" src="/images/anz_logo.png"/>is a proud partner of Melmora. <a href="/partner-program"> Click here to learn more.</a>
        </Container>
        <Container className="tileContainer" >
          <Container className="tile draw-border"> 
            <Container className="tileHeader"> <i className="fas fa-history" style= {{color: 'lightgreen'}}/> History </Container>
            <Container className="tileBody">
            Officially formed in March 2012, the <i>University of Moratuwa Alumni Association in Victoria (UMAAV)</i>, promote the interests of the <a href="https://uom.lk/" target="_blank">University of Moratuwa</a> as a pre-eminent centre of education, while providing a common forum for academic, professional and social interaction among graduates, staff and others associated with the University of Moratuwa, Sri Lanka. Prior to this, the organization functioned as an informal group called <a href="https://www.facebook.com/groups/melmora" target="_blank">"MelMora"</a>.
            </Container>
          </Container>
          <Container className="tile draw-border"> 
            <Container className="tileHeader">  <i className="fas fa-users" style= {{color: 'red'}} /> Members </Container>
            <Container className="tileBody">
              UMAAV acts as the Victorian representative of the official <a href="https://alumni.uom.lk/" target="_blank">University of Moratuwa Alumni</a> in Sri Lanka. The membership base of UMAAV consists of former students and staff of Faculty of Engineering, Faculty of Architecture, Faculty of IT and ITUM of University of Moratuwa. UMAAV is registered as a non-profit organization with consumer Affairs Australia.
            </Container>
          </Container>
          <Container className="tile draw-border"> 
            <Container className="tileHeader">  <i className="fa fa-glass" style= {{color: 'yellow'}}/> Activities </Container>
            <Container className="tileBody">
              Towards achieving its objectives, UMAAV conducts several programs and events every year. The <a href="/schol">UMAAV scholarship</a> scheme is one of the primary activities of UMAAV where continuous financial assistance is provided for deserving students of University of Moratuwa.  The program started in 2011 with the funds raised from the UMAAV events such as <i>Melmora - Dinner Dance</i> and <i>Melmora - Summer Event</i>. 
            </Container>
          </Container>
        </Container>
        <EventItems title='News / Upcoming events' images={this.state.upcomingNews}></EventItems>
        <EventItems title='Past events' images={this.state.pastNews}></EventItems>

      </Container>

    );
  }
}

export default Home;
