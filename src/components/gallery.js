import React, { Component } from 'react';
import { Image, Container, Modal } from 'react-bootstrap';
import GridGallery from 'react-grid-gallery';


const galleryRoot = `${process.env.REACT_APP_BASE_URL}/albums`;

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      albums: [],
      curAlbum: '',
      curImages: [],
      curThumbs: [],
    };
  }



  async loadConfig() {
    const res = await fetch("/config/albums.json");
    const albums = await res.json();
    this.setState({ albums });
  }

  async componentDidMount() {
    await this.loadConfig();
    // Load an album if path param is present
    if (this.props && this.props.match && this.props.match.params && this.props.match.params.id) {
      const name = this.props.match.params.id;
      const images = [];
      const filtered = this.state.albums.filter(a => a.name === name);
      if (filtered.length < 1) {
        // Cannot find such an album. Return...
        return;
      }
      const limit = filtered[0].count;

      let i;
      for (i = 1; i < limit + 1; i++) {
        images.push(`${galleryRoot}/${name}/${i}`);
      }
      this.setState({
        curAlbum: name,
        showModal: true,
        curImages: images,
      })

    }
  }

  render() {

    return (
      <Container>
        {this.state.curAlbum == "" && // default gallery view
          <Container  className="tileContainer" >
            {this.state.albums.map((item, i) => {
              const imageUrl = `${galleryRoot}/${item.name}/1_tn.jpg`; // Show only the first image. Make sure that's a good one
              const album = item.name.replace(/_/g, ' ');
              return (
                <Container key={i} className="eventImageContainer" >
                  <a href={`/gallery/${item.name}`} >
                    <Container className="albumTitle" >{album} </Container>
                    <Image className="eventImage draw-border" src={imageUrl} style={{ "pointer-events": "all" }} />
                  </a>
                </Container>
              );
            })}

          </Container>
        }

        {(this.state.curAlbum != "" && this.state.curAlbum != null && this.state.curAlbum != undefined) &&
          <div>

            <Container className="albumTitle" >{this.state.curAlbum.replace(/_/g, ' ')} </Container>
            <GridGallery images={this.state.curImages.map(img => {
              return {
                src: `${img}.jpg`,
                thumbnail: `${img}_tn.jpg`,
                thumbnailWidth: 290
              }
            })} />
          </div>
        }
      </Container>

    );
  }
}

export default Gallery;
