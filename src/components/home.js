import React, { Component } from 'react';
import {Carousel, Container} from 'react-bootstrap';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
    this.loadImages = this.loadImages.bind(this);
  }

  async loadImages() {
    this.setState({images: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]});
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
          
        </Carousel>
        }
        </Container>
        <Container className="tileContainer" >
          <Container className="tile draw-border"> 
            <Container className="tileHeader"> <i class="fas fa-history" style= {{color: 'lightgreen'}}/> History </Container>
            <Container className="tileBody">
            The University of Moratuwa Alumni Association in Victoria (UMAAV) was officially formed in March 2012. Prior to this, the organization functioned as an informal group called <span className="highlightedText">"MelMora"</span>.
Melmora was established to promote the interests of the University of Moratuwa as a pre-eminent centre of education, while providing a common forum for academic, professional and social interaction among graduates, staff and others associated with the University of Moratuwa, Sri Lanka.
            </Container>
          </Container>
          <Container className="tile draw-border"> 
            <Container className="tileHeader">  <i class="fas fa-users" style= {{color: 'red'}} /> Members </Container>
            <Container className="tileBody">UMAAV acts as the Victorian representative of the official University of Moratuwa Alumni in Sri Lanka. The membership base of <span className="highlightedText">UMAAV</span> consists of former students and staff of Faculty of Engineering, Faculty of Architecture, Faculty of IT and ITUM of University of Moratuwa. UMAAV obtained the registration as a non-profit organization with consumer Affairs Australia on March 2013. </Container>
          </Container>
          <Container className="tile draw-border"> 
            <Container className="tileHeader">  <i class="fas fa-heartbeat" style= {{color: 'lightblue'}}/> Activities </Container>
            <Container className="tileBody">Towards achieving its objectives, UMAAV conducts several programs and events every year. The UMAAV scholarship scheme is one of the primary activities of UMAAV where continuous financial assistance is provided for deserving students of University of Moratuwa.  The program started in 2011 with the funds raised from the UMAAV events such as Melmora - <span className="highlightedText">Dinner Dance</span> and Melmora - <span className="highlightedText">Summer Event</span>. </Container>
          </Container>
        </Container>
        
        <Container className="tileContainer" >
          <Container className="tileWide">
            <Container className="tileHeader"><i class="fas fa-calendar"></i>  Upcoming Events </Container>
            <Container className="tileBody">
              {/* <ImageTile imageUrl='/news/1.jpg' title='Dinner Dance - 2021'/>
              <ImageTile imageUrl='/news/2.jpg' title='Blood Donation - 2020'/>

              <ImageTile imageUrl='/news/3.jpg' title='Blood Donation - 2020'/> */}
            </Container>
          </Container>
        </Container>

        <Container className="tileContainer" >
          <Container className="tileWide">
            <Container className="tileHeader"><i class="fas fa-calendar-check"></i>  Past Events </Container>
            <Container className="tileBody">
              {/* <ImageTile imageUrl='/news/1.jpg' title='Dinner Dance - 2021'/>
              <ImageTile imageUrl='/news/2.jpg' title='Blood Donation - 2020'/>

              <ImageTile imageUrl='/news/3.jpg' title='Blood Donation - 2020'/> */}
            </Container>
          </Container>
        </Container>
      </Container>

    );
  }
}

export default Home;
