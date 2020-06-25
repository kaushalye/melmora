import React, { Component } from 'react';
import {Image, Container, Modal, Button, Carousel} from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import galleryConfig from '../config/gallery.json'

const galleryRoot =  '/images/gallery';
class Gallery extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      albums: galleryConfig,
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


  render() {
    
    return (
      <Container className="nopadding cards-list">
      {this.state.albums.map(item => {
        const imageUrl = `${galleryRoot}/${item.name}/1.jpg`; // Show only the first image. Make sure that's a good one
        const album = item.name.replace('_', ' ');
       return (
         <Container className="card 1" >
           <Container className="card_image"> <Image src={imageUrl} name={item.name} onClick={this.showAlbum} style={{"pointer-events": "all"}}/> </Container>
           <Container className="card_title title-white" >
             <p>{album}</p>
           </Container>

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
