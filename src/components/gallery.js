import React, { Component } from 'react';
import {Image, Container, Modal, Button, Carousel} from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import albums from '../config/gallery.json'

console.log('REACT_APP_BASE_URL');
console.log(process.env.REACT_APP_BASE_URL);
const galleryRoot =  `${process.env.REACT_APP_BASE_URL}/images/gallery`; //'/images/gallery';
class Gallery extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      curAlbum: '',
      curImages: [],
    };
    this.showAlbum = this.showAlbum.bind(this);
    this.hideAlbum = this.hideAlbum.bind(this);
  }
  hideAlbum() {
    console.log('hideAlbum');
    this.setState({
      showModal: false,
    })
  }
  
  showAlbum(e) {
    console.log('showAlbum');
    console.log(e.target.name);
    const name = e.target.name;
    const images = [];
    const limit = albums.filter(a => a.name === name)[0].count;
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


  render() {
    
    return (
      <Container className="tileContainer">
      {albums.map(item => {
        const imageUrl = `${galleryRoot}/${item.name}/1.jpg`; // Show only the first image. Make sure that's a good one
        const album = item.name.replace(/_/g, ' ');
        return (
         <Container className="eventImageContainer" >

           <Image className="eventImage draw-border" src={imageUrl} name={item.name} onClick={this.showAlbum} style={{"pointer-events": "all"}}/> 
           <Container className="albumTitle" >{album} </Container>

           <Modal size="xl" show={this.state.showModal} onHide={this.hideAlbum} animation={false}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
             <ImageGallery 
             thumbnailPosition ='top'
              useBrowserFullscreen ={true}
              lazyLoad={true}
              items={this.state.curImages.map(img =>  {
              return {
                original: img,
                thumbnail: img,
              }
             })} />


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
