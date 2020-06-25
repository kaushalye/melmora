import React, { Component } from 'react';
import {Carousel, Container} from 'react-bootstrap';

const stmnts = [
  {i:'fas fa-link', color:'lightblue', title: 'Network', txt:'To build a professional network of past University of Moratuwa (Sri lanka) students, staff and employees and their families living in Victoria'},
  {i:'fas fa-rocket', color:'red', title: 'Career', txt:'To support the members in identifying the opportunities to enhance their career paths, professional development and to become a productive member of the Australian society'},
  {i:'fas fa-flag', color:'pink', title: 'Culure', txt:'To understand the vastly diverse Australian culture while embracing and appreciating their own Sri Lankan cultural heritage'},
  {i:'fas fa-graduation-cap', color:'#973d3d', title: 'Students', txt:'To support the current students of the University of Moratuwa (Sri Lanka)'},
  {i:'fas fa-users', color:'#9367d7', title: 'Families', txt:'To support Members’ families, especially the children, in providing guidance and mentoring to achieve their academic and future career goals'},
  {i:'fas fa-handshake', color:'#30e981', title: 'Community', txt:'To participate and support local community activities as a not-for-profit organisation'}
];

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
          
        </Carousel>
        }
        </Container>

        <Container className="tileContainer" >
          {stmnts.map(stmnt => {
            return (
              <Container className="tile draw-border"> 
                <Container className="tileHeader"><i className={stmnt.i} style= {{color: stmnt.color}}></i> {stmnt.title} </Container>
            <Container className="tileBody"> {stmnt.txt}</Container>
              </Container>
            );
          })
          }
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
      </Container>

    );
  }
}

export default Home;
