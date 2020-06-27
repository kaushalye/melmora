import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import ItemList from './itemList';
const stmnts = [
  {i:'fas fa-link', color:'lightblue', title: 'Network', txt:'To build a professional network of past University of Moratuwa (Sri lanka) students, staff and employees and their families living in Victoria'},
  {i:'fas fa-rocket', color:'red', title: 'Career', txt:'To support the members in identifying the opportunities to enhance their career paths, professional development and to become a productive member of the Australian society'},
  {i:'fas fa-flag', color:'pink', title: 'Culture', txt:'To understand the vastly diverse Australian culture while embracing and appreciating their own Sri Lankan cultural heritage'},
  {i:'fas fa-graduation-cap', color:'#973d3d', title: 'Students', txt:'To support the current students of the University of Moratuwa, Sri Lanka'},
  {i:'fas fa-users', color:'#9367d7', title: 'Families', txt:'To support Members’ families, especially the children, in providing guidance and mentoring to achieve their academic and future career goals'},
  {i:'fas fa-handshake', color:'#30e981', title: 'Community', txt:'To participate and support local community activities as a not-for-profit organisation'}
];


const coms = [
  {
    name: "2019-2020",
    bearers: `President: Susantha Liyanage
    Secretary: Kumar Munasinghe
    Vice President 1: Indika Meedeniya
    Vice President 2: Malinda Kapuruge
    Asst. Secretary: Amila Gunathilaka
    Treasurer: Jagath Dias
    Asst Treasurer: Mahesh Sirimanne
    Public Officer: Pushpika Gamage
    Editor: Anuja Manchanayake
    Committee Member: Desmond Fernando
    Committee Member: Karu Randeniya
    Committee Member: Nishantha Rajapakshe
    Committee Member: Indrajeewa Piyasena
    Committee Member: Loku Dasanayake
    Committee Member: Saman Marasinghe
    Committee Member: Pradeep Mahawaththa
    Committee Member: Rasika Amarasiri`,
  },
  {
    name: "2018-2019",
    bearers: `President:	Desmond Fernando
    Secretary:	Indrajeewa Piyasena
    Asst. Secretary:	Chanaka Rupasinghe
    Vice President 1:	Malinda Kapuruge
    Vice President 2:	Indika Meedeniya
    Treasurer:	Jagath Dias
    Asst. Treasurer:	Kumar Munasinghe
    Public Officer:	Pushpika Gamage
    Editor: Susantha Liyanage
    Committee Member:	Saman Marasinghe
    Committee Member:	Karu Randeniya
    Committee Member:	Nishantha Rajapakshe
    Committee Member:	Rasika Amarasiri
    Committee Member:	Loku Dassanayake
    Committee Member:	Amila Gunathilaka
    Committee Member:	Anuja Manchanayaka
    Committee Member:	Pradeep Mahawatta`,
  },
  {
  name: "2017-2018",
  bearers: `President: Desmond Fernando
    Secretary : Saman Marasinghe
    Vice President 1: Susantha Liyanage
    Vice President 2: Malinda Kapuruge
    Asst. Secretary : Pushpika Gamage
    Treasurer : Rasika Amarasiri
    Asst. Treasurer: Indrajeewa Piyasena
    Public Officer: Jagath Dias
    Editor: Pradeep Mahawatta
    Committee Member:	Amila Gunathilaka
    Committee Member:	Suranji Athapatthu
    Committee Member:	Nishantha Rajapakshe
    Committee Member:	Indika Meedeniya
    Committee Member:	Karu Randeniya
    Committee Member:	Loku Dassanayake
    Committee Member:	Chanaka Rupasinghe
    Committee Member:	Kumar Munasinghe
    Senior Advisor: Dr. Don Rodrigo
    Senior Advisor: Dr. Chandra Athaudage`,
  },
  {
  name: "2016-2017",
  bearers: `President: Karu Randeniya
    Secretary : Desmond Fernando
    Vice President 1: Dr. Rasika Amarasiri
    Vice President 2: Saman Marasinghe
    Asst. Secretary : Pradeep Mahawatta
    Treasurer : Loku Dassanayake
    Asst. Treasurer: Dr. Chanaka Rupasinghe
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
    bearers: `President: Karu Randeniya
    Secretary : Dr. Indika Meedeniya
    Vice President 1: Dr. Chandra Athaudage
    Vice President 2:  Saman Marasinghe
    Asst. Secretary : Pushpika Gamage
    Treasurer : Loku Dassanayake
    Asst. Treasurer : Dr. Chanaka Rupasinghe
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
    Secretary : Dr. Indika Meedeniya
    Vice President 1: Dr. Chandra Athaudage
    Vice President 2: Saman Marasinghe
    Asst. Secretary : Pushpika Gamage
    Treasurer : Loku Dassanayake
    Asst. Treasurer : Chanaka Rupasinghe
    Public Officer : Anuja Manchanayake
    Editor: Dr. K.S.Vijayalayan
    Committee Member: Pradeep Mahawatta
    Committee Member: Rasika Weerasinghe
    Committee Member: Desmond Fernando
    Committee Member:	Loku Dassanayake
    Senior Advisor: Dr. Don Rodrigo`,
  },
  {
    name: " 2013-2014",
    bearers: `President: Nishantha Rajapakshe
    Secretary : Pradeep Mahawatta
    Vice President 1: Dr. Chandra Athaudage
    Vice President 2: Karu Randeniya
    Asst. Secretary : Rasika Weerasinghe
    Treasurer : Dr. Indika Meedeniya
    Asst. Treasurer : Yasantha Perera
    Public Officer : Anuja Manchanayake
    Editor: Dr. Malinda Kapuruge
    Committee Member: Dr. Rasika Amarasiri
    Committee Member:	Loku Dassanayake
    Committee Member: Desmond Fernando
    Committee Member: Gayan Karunarathna
    Committee Member: Champika Yatagama
    Senior Advisor: Dr. Don Rodrigo
    Senior Advisor: Milroy Gunawardena`,
  },
  {
    name: "2012-2013",
    bearers: `President: Dr. Chandra Athaudage
    Secretary : Nishantha Rajapakshe
    Vice President 1: Karu Randeniya
    Vice President 2: Pradeep Mahawatta
    Assistant Secretary : Anuja Manchanayake
    Treasurer : Dr. Rasika Amarasiri
    Assistant Treasurer : Yasantha Perera
    Public Officer : Desmond Fernando
    Editor: Dr. Malinda Kapuruge
    Committee Member: Indrajeewa Piyasena
    Committee Member: Dr. Indika Meedeniya
    Committee Member:	Loku Dassanayake
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
          {
          stmnts.map(stmnt => {
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
            <Container className="tileHeader"> <i class="fas fa-sitemap"/> Office Bearers </Container>
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
