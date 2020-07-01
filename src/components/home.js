import React, { Component } from 'react';
import {Carousel, Container} from 'react-bootstrap';
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

  /**
   * Expect to have a dir as follows
   * /images/news
   *            / upcoming
   *            / past
   * @param {} dir 
   */
  loadImages(dir, newsConfig) {
    const images = [];
    let i;
    for (i = newsConfig[dir]; i >= 1; i--) {
      images.push(`${newsRoot}/${dir}/${i}.jpg`);
    }

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
        <Container className="tileContainer" >
          <Container className="tile draw-border"> 
            <Container className="tileHeader"> <i className="fas fa-history" style= {{color: 'lightgreen'}}/> History </Container>
            <Container className="tileBody">
            Officially formed in March 2012, the University of Moratuwa Alumni Association in Victoria <span className="highlightedText">(UMAAV)</span>, promote the interests of the University of Moratuwa as a pre-eminent centre of education, while providing a common forum for academic, professional and social interaction among graduates, staff and others associated with the University of Moratuwa, Sri Lanka. Prior to this, the organization functioned as an informal group called <span className="highlightedText">"MelMora"</span>.
            </Container>
          </Container>
          <Container className="tile draw-border"> 
            <Container className="tileHeader">  <i className="fas fa-users" style= {{color: 'red'}} /> Members </Container>
            <Container className="tileBody">
              UMAAV acts as the Victorian representative of the official University of Moratuwa Alumni in Sri Lanka. The membership base of UMAAV consists of former students and staff of Faculty of Engineering, Faculty of Architecture, Faculty of IT and ITUM of <span className="highlightedText">University of Moratuwa</span>. UMAAV is registered as a non-profit organization with consumer Affairs Australia.
            </Container>
          </Container>
          <Container className="tile draw-border"> 
            <Container className="tileHeader">  <i className="fas fa-heartbeat" style= {{color: 'lightblue'}}/> Activities </Container>
            <Container className="tileBody">
              Towards achieving its objectives, UMAAV conducts several programs and events every year. The UMAAV <span className="highlightedText">scholarship scheme</span> is one of the primary activities of UMAAV where continuous financial assistance is provided for deserving students of University of Moratuwa.  The program started in 2011 with the funds raised from the UMAAV events such as Melmora - <span className="highlightedText">Dinner Dance</span> and Melmora - <span className="highlightedText">Summer Event</span>. 
            </Container>
          </Container>
        </Container>
        
        <EventItems title='Upcoming events' images={this.state.upcomingNews}></EventItems>
        <EventItems title='Past events' images={this.state.pastNews}></EventItems>

      </Container>

    );
  }
}

export default Home;
