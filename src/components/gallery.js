import React, { Component } from 'react';
import {Image, Container, Modal} from 'react-bootstrap';
import GridGallery from 'react-grid-gallery';

console.log('REACT_APP_BASE_URL');
console.log(process.env.REACT_APP_BASE_URL);
const galleryRoot =  `${process.env.REACT_APP_BASE_URL}/albums`; 
class Gallery extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      albums: [],
      curAlbum: '',
      curImages: [],
    };
    this.showAlbum = this.showAlbum.bind(this);
    this.hideAlbum = this.hideAlbum.bind(this);
  }

  hideAlbum() {
    this.setState({
      showModal: false,
    })
  }
  
  showAlbum(e) {
    console.log(e.target.name);
    const name = e.target.name;
    const images = [];
    const limit = this.state.albums.filter(a => a.name === name)[0].count;
    let i;
    for (i = 1; i < limit+1; i++) {
      images.push(`${galleryRoot}/${name}/${i}.jpg`);
    }
    this.setState({
      curAlbum: name,
      showModal: true,
      curImages: images,
    })
  }  

  async loadConfig() {
    const res = await fetch("/config/albums.json");
    const albums = await res.json();

    this.setState({albums});
  }
  
  componentDidMount() {
    this.loadConfig();
  }

  render() {
    
    return (
      <Container className="tileContainer">
      {this.state.albums.map((item, i) => {
        const imageUrl = `${galleryRoot}/${item.name}/1.jpg`; // Show only the first image. Make sure that's a good one
        const album = item.name.replace(/_/g, ' ');
        return (
         <Container key={i} className="eventImageContainer" >

           <Image className="eventImage draw-border" src={imageUrl} name={item.name} onClick={this.showAlbum} style={{"pointer-events": "all"}}/> 
           <Container className="albumTitle" >{album} </Container>

           <Modal size="xl" show={this.state.showModal} onHide={this.hideAlbum} animation={false}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <GridGallery  images={this.state.curImages.map(img => {
                return {
                  src: img,
                  thumbnail: img,
                  thumbnailWidth: 290
                }
              })}/>

            </Modal.Body>

          </Modal> 
         </Container>
       );
     })}
      </Container>

    );
  }
}

export default Gallery;
