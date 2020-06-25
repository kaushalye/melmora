import React, { Component } from 'react';
import {Container, Accordion, Card, Button} from 'react-bootstrap';
import ItemList from './itemList';

const coms = [
  {
  name: "2016-2017",
  bearers: `President: Karunarathne Randeniya
    Vice President 1: Dr. Rasika Amarasiri
    Vice President 2: Saman Marasinghe
    Secretary : Desmond Fernando
    Assistant Secretary : Pradeep Mahawatta
    Treasurer : Lokubanda Dassanayake
    Assistant Treasurer: Dr. Chanaka Rupasinghe
    Public Officer : Ajith Liyanage
    Editor: Dr. Malinda Kapuruge
    Committee Member: Indrajeewa Piyasena
    Committee Member: Rasika Weerasinghe
    Committee Member: Jagath Dias
    Committee Member: Dr. Indika Meedeniya
    Committee Member: Prasad Udugampola
    Committee Member: Nishantha Rajapakshe
    Senior Advisor: Dr. Don Rodrigo
    Senior Advisor: Dr. Chandra Athaudage`,
  },
  {
    name: "2015-2016",
    bearers: `President: Karunarathne Randeniya
    Vice President 1: Dr. Chandra Athaudage
    Vice President 2:  Saman Marasinghe
    Secretary : Dr. Indika Meedeniya
    Assistant Secretary : Pushpika Gamage
    Treasurer : Lokubanda Dassanayake
    Assistant Treasurer : Dr. Chanaka Rupasinghe
    Public Officer : Anuja Manchanayake
    Editor: Dr. Malinda Kapuruge
    Committee Member: Pradeep Mahawatta
    Committee Member: Rasika Weerasinghe
    Committee Member: Desmond Fernando
    Committee Member: Nishantha Rajapakshe
    Senior Advisor: Dr. Don Rodrigo`,
  },
  {
    name: "2014-2015",
    bearers: `President: Nishantha Rajapakshe
    Vice President 1: Dr. Chandra Athaudage
    Vice President 2: Saman Marasinghe
    Secretary : Dr. Indika Meedeniya
    Assistant Secretary : Pushpika Gamage
    Treasurer : Lokubanda Dassanayake
    Assistant Treasurer : Chanaka Rupasinghe
    Public Officer : Anuja Manchanayake
    Editor: Dr. K.S.Vijayalayan
    Committee Member: Pradeep Mahawatta
    Committee Member: Rasika Weerasinghe
    Committee Member: Nishantha Rajapakshe
    Committee Member: Desmond Fernando
    Senior Advisor: Dr. Don Rodrigo`,
  },
  {
    name: " 2013-2014",
    bearers: `President: Nishantha Rajapakshe
    Vice President 1: Dr. Chandra Athaudage
    Vice President 2: Karunarathna Randeniya
    Secretary : Pradeep Mahawatta
    Assistant Secretary : Rasika Weerasinghe
    Treasurer : Dr. Indika Meedeniya
    Assistant Treasurer : Yasantha Perera
    Public Officer : Anuja Manchanayake
    Editor: Dr. Malinda Kapuruge
    Committee Member: Dr. Rasika Amarasiri
    Committee Member: Desmond Fernando
    Committee Member: Gayan Karunarathna
    Committee Member: Champika Yatagama
    Senior Advisor: Dr. Don Rodrigo
    Senior Advisor: Milroy Gunawardena`,
  },
  {
    name: "2012-2013",
    bearers: `President: Dr. Chandra Athaudage
    Vice President 1: Karunarathna Randeniya
    Vice President 2: Pradeep Mahawatta
    Secretary : Nishantha Rajapakshe
    Assistant Secretary : Anuja Manchanayake
    Treasurer : Dr. Rasika Amarasiri
    Assistant Treasurer : Yasantha Perera
    Public Officer : Desmond Fernando
    Editor: Dr. Malinda Kapuruge
    Committee Member: Indrajeewa Piyasena
    Committee Member: Dr. Indika Meedeniya
    Committee Member: Gayan Karunarathna
    Committee Member: Rasika Weerasinghe
    Senior Advisor: Dr. Don Rodrigo
    Senior Advisor: Milroy Gunawardena`,
    },
];

class About extends Component {
  render() {
    return (
      <Container className="nopadding">
      <Container className="tileContainer" >
          <Container className="tile draw-border"> 
            <Container className="tileHeader"> <i class="fas fa-history"/> History </Container>
            <Container className="tileBody">
            The University of Moratuwa Alumni Association in Victoria (UMAAV) was officially formed in March 2012 at a general meeting held in Glen Waverley, Victoria, Australia. Prior to this, the organization functioned as an informal group called <span className="highlightedText">"MelMora"</span>. The MelMora group has been operational since early 2001.
Its primary objectives are to promote the interests of the University of Moratuwa as a pre-eminent centre of education, while providing a common forum for academic, professional and social interaction among graduates, staff and others associated with the University of Moratuwa, Sri Lanka.
            </Container>
          </Container>
          <Container className="tile draw-border"> 
            <Container className="tileHeader">  <i class="fas fa-users"/> Members </Container>
            <Container className="tileBody">UMAAV also acts as the Victorian representative of the official University of Moratuwa Alumni in Sri Lanka. The membership base of UMAAV consists of former students and staff of Faculty of Engineering, Faculty of Architecture, Faculty of IT and ITUM of University of Moratuwa. UMAAV obtained the registration as a non-profit organization with consumer Affairs Australia on March 2013. </Container>
          </Container>
          <Container className="tile draw-border"> 
            <Container className="tileHeader">  <i class="fas fa-music"/> Activities </Container>
            <Container className="tileBody">Towards achieving its objectives, UMAAV conducts several programs and events every year. The UMAAV scholarship scheme is one of the primary activities of UMAAV where continuous financial assistance is provided for deserving students of University of Moratuwa.  The program started in 2011 with the funds raised from the UMAAV events such as Melmora - <span className="highlightedText">Dinner Dance</span> and Melmora - <span className="highlightedText">Summer Event</span>. </Container>
          </Container>
        </Container>

        <Container className="tileContainer" >
          <Container className="tileWide">
            <Container className="tileHeader"> <i class="fas fa-sitemap"/> Committees</Container>
            <Container className="tileContainer itemListContainer" >
              {coms.map(com => {
                return (<ItemList name={com.name} items={com.bearers}/>);
              })}
            </Container>
          </Container>

        </Container>
     
      </Container>
    );
  }
}

export default About;
