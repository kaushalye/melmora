import React, { Component } from 'react';
import {Tabs, Image, Container} from 'react-bootstrap';


class News extends Component {


  render() {
    const news = [
      {
        title: 'Blood Donation',
        year: 2020,
        image: '/news/1.jpg'
      },
      {
        title: 'Dinner Dance',
        year: 2018,
        image: '/news/2.jpg'
      },
      {
        title: 'Summer Event',
        year: 2017,
        image: '/news/3.jpg'
      },
      {
        title: 'Dinner Dance',
        year: 2016,
        image: '/news/4.jpg'
      },
      {
        title: 'Summer Event',
        year: 2016,
        image: '/news/5.jpg'
      },
      {
        title: 'Dinner Dance',
        year: 2015,
        image: '/news/6.jpg'
      },
    ];

    return (
      
      <Container className="nopadding cards-list">
      {news.map(item => {
       return (
         <Container className="card 1">
           <Container className="card_image"> <Image src={item.image} /> </Container>
           <Container className="card_title title-white">
             <p>{item.title}-{item.year}</p>
           </Container>
         </Container>
       );
     })}
      </Container>

    );
  }
}

export default News;
