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
    name: "2021-2022",
    bearers: `President: Mr. Susantha Liyanage
    Secretary: Mr. Kumar Munasinghe
    Vice President 1: Mr. Pushpika Gamage
    Vice President 2: Dr. Malinda Kapuruge
    Asst. Secretary: Mr. Mahesh Srirama
    Treasurer: Mr. Jagath Dias
    Asst Treasurer: Dr. Indika Meedeniya
    Public Officer: Mr. Pradeep Mahawaththa
    Editor: Dr. Rasika Amarasiri
    Committee Member: Mr. Desmond Fernando
    Committee Member: Mr. Karu Randeniya
    Committee Member: Mr. Nishantha Rajapakshe
    Committee Member: Mr. Indrajeewa Piyasena
    Committee Member: Mr. Anuja Manchanayake
    Committee Member: Mr. Saman Marasinghe
    Committee Member: Mr. Prasad Udugampola
    Committee Member: Ms. Nandika Kahaduwa
    Senior Advisor: Dr. Don Rodrigo`,
  },
  {
    name: "2020-2021",
    bearers: `President: Mr. Susantha Liyanage
    Secretary: Mr. Kumar Munasinghe
    Vice President 1: Mr. Pushpika Gamage
    Vice President 2: Dr. Malinda Kapuruge
    Asst. Secretary: Mr. Mahesh Srirama
    Treasurer: Mr. Jagath Dias
    Asst Treasurer: Dr. Indika Meedeniya
    Public Officer: Mr. Pradeep Mahawaththa
    Editor: Dr. Rasika Amarasiri
    Committee Member: Mr. Desmond Fernando
    Committee Member: Mr. Karu Randeniya
    Committee Member: Mr. Nishantha Rajapakshe
    Committee Member: Mr. Indrajeewa Piyasena
    Committee Member: Mr. Anuja Manchanayake
    Committee Member: Mr. Saman Marasinghe
    Committee Member: Mr. Prasad Udugampola
    Committee Member: Ms. Nandika Kahaduwa
    Senior Advisor: Dr. Don Rodrigo`,
  },
  {
    name: "2019-2020",
    bearers: `President: Mr. Susantha Liyanage
    Secretary: Mr. Kumar Munasinghe
    Vice President 1: Dr. Indika Meedeniya
    Vice President 2: Dr. Malinda Kapuruge
    Asst. Secretary: Mr. Amila Gunathilaka
    Treasurer: Mr. Jagath Dias
    Asst Treasurer: Mr. Mahesh Srirama
    Public Officer: Mr. Pushpika Gamage
    Editor: Mr. Anuja Manchanayake
    Committee Member: Mr. Desmond Fernando
    Committee Member: Mr. Karu Randeniya
    Committee Member: Mr. Nishantha Rajapakshe
    Committee Member: Mr. Indrajeewa Piyasena
    Committee Member: Mr. Loku Dasanayake
    Committee Member: Mr. Saman Marasinghe
    Committee Member: Mr. Pradeep Mahawaththa
    Committee Member: Dr. Rasika Amarasiri
    Senior Advisor: Dr. Don Rodrigo`,
  },
  {
    name: "2018-2019",
    bearers: `President:	Mr. Desmond Fernando
    Secretary: Mr. Indrajeewa Piyasena
    Asst. Secretary: Dr. Chanaka Rupasinghe
    Vice President 1:	Dr. Malinda Kapuruge
    Vice President 2:	Dr. Indika Meedeniya
    Treasurer: Mr. Jagath Dias
    Asst. Treasurer: Mr. Kumar Munasinghe
    Public Officer:	Mr. Pushpika Gamage
    Editor: Mr. Susantha Liyanage
    Committee Member:	Mr. Saman Marasinghe
    Committee Member:	Mr. Karu Randeniya
    Committee Member:	Mr. Nishantha Rajapakshe
    Committee Member:	Dr. Rasika Amarasiri
    Committee Member:	Mr. Loku Dassanayake
    Committee Member:	Mr. Amila Gunathilaka
    Committee Member:	Mr. Anuja Manchanayaka
    Committee Member:	Mr. Pradeep Mahawatta
    Senior Advisor: Dr. Don Rodrigo`,
  },
  {
  name: "2017-2018",
  bearers: `President: Mr. Desmond Fernando
    Secretary : Mr. Saman Marasinghe
    Vice President 1: Mr. Susantha Liyanage
    Vice President 2: Dr. Malinda Kapuruge
    Asst. Secretary : Mr. Pushpika Gamage
    Treasurer : Dr. Rasika Amarasiri
    Asst. Treasurer: Mr. Indrajeewa Piyasena
    Public Officer: Mr. Jagath Dias
    Editor: Mr. Pradeep Mahawatta
    Committee Member:	Mr. Amila Gunathilaka
    Committee Member:	Ms. Suranji Athapatthu
    Committee Member:	Mr. Nishantha Rajapakshe
    Committee Member:	Dr. Indika Meedeniya
    Committee Member:	Mr. Karu Randeniya
    Committee Member:	Mr. Loku Dassanayake
    Committee Member:	Dr. Chanaka Rupasinghe
    Committee Member:	Mr. Kumar Munasinghe
    Senior Advisor: Dr. Don Rodrigo
    Senior Advisor: Dr. Chandra Athaudage`,
  },
  {
  name: "2016-2017",
  bearers: `President: Mr. Karu Randeniya
    Secretary : Mr. Desmond Fernando
    Vice President 1: Dr. Rasika Amarasiri
    Vice President 2: Mr. Saman Marasinghe
    Asst. Secretary : Mr. Pradeep Mahawatta
    Treasurer : Mr. Loku Dassanayake
    Asst. Treasurer: Dr. Chanaka Rupasinghe
    Public Officer : Mr. Ajith Liyanage
    Editor: Dr. Malinda Kapuruge
    Committee Member: Mr. Indrajeewa Piyasena
    Committee Member: Mr. Rasika Weerasinghe
    Committee Member: Mr. Jagath Dias
    Committee Member: Dr. Indika Meedeniya
    Committee Member: Mr. Prasad Udugampola
    Committee Member: Mr. Nishantha Rajapakshe
    Senior Advisor: Dr. Don Rodrigo
    Senior Advisor: Dr. Chandra Athaudage`,
  },
  {
    name: "2015-2016",
    bearers: `President: Mr. Karu Randeniya
    Secretary : Dr. Indika Meedeniya
    Vice President 1: Dr. Chandra Athaudage
    Vice President 2:  Mr. Saman Marasinghe
    Asst. Secretary : Mr. Pushpika Gamage
    Treasurer : Mr. Loku Dassanayake
    Asst. Treasurer : Dr. Chanaka Rupasinghe
    Public Officer : Mr. Anuja Manchanayake
    Editor: Dr. Malinda Kapuruge
    Committee Member: Mr. Pradeep Mahawatta
    Committee Member: Mr. Rasika Weerasinghe
    Committee Member: Mr. Desmond Fernando
    Committee Member: Mr. Nishantha Rajapakshe
    Senior Advisor: Dr. Don Rodrigo`,
  },
  {
    name: "2014-2015",
    bearers: `President: Mr. Nishantha Rajapakshe
    Secretary : Dr. Indika Meedeniya
    Vice President 1: Dr. Chandra Athaudage
    Vice President 2: Mr. Saman Marasinghe
    Asst. Secretary : Mr. Pushpika Gamage
    Treasurer : Mr. Loku Dassanayake
    Asst. Treasurer : Dr. Chanaka Rupasinghe
    Public Officer : Mr. Anuja Manchanayake
    Editor: Dr. K.S.Vijayalayan
    Committee Member: Dr. Malinda Kapuruge
    Committee Member: Mr. Pradeep Mahawatta
    Committee Member: Mr. Rasika Weerasinghe
    Committee Member: Mr. Desmond Fernando
    Committee Member:	Mr. Loku Dassanayake
    Senior Advisor: Dr. Don Rodrigo`,
  },
  {
    name: " 2013-2014",
    bearers: `President: Mr. Nishantha Rajapakshe
    Secretary : Mr. Pradeep Mahawatta
    Vice President 1: Dr. Chandra Athaudage
    Vice President 2: Mr. Karu Randeniya
    Asst. Secretary : Mr. Rasika Weerasinghe
    Treasurer : Dr. Indika Meedeniya
    Asst. Treasurer : Mr. Yasantha Perera
    Public Officer : Mr. Anuja Manchanayake
    Editor: Dr. Malinda Kapuruge
    Committee Member: Dr. Rasika Amarasiri
    Committee Member:	Mr. Loku Dassanayake
    Committee Member: Mr. Desmond Fernando
    Committee Member: Mr. Gayan Karunarathna
    Committee Member: Mr. Champika Yatagama
    Senior Advisor: Dr. Don Rodrigo
    Senior Advisor: Mr. Milroy Gunawardena`,
  },
  {
    name: "2012-2013",
    bearers: `President: Dr. Chandra Athaudage
    Secretary : Mr. Nishantha Rajapakshe
    Vice President 1: Mr. Karu Randeniya
    Vice President 2: Mr. Pradeep Mahawatta
    Assistant Secretary : Mr. Anuja Manchanayake
    Treasurer : Dr. Rasika Amarasiri
    Assistant Treasurer : Mr. Yasantha Perera
    Public Officer : Mr. Desmond Fernando
    Editor: Dr. Malinda Kapuruge
    Committee Member: Mr. Indrajeewa Piyasena
    Committee Member: Dr. Indika Meedeniya
    Committee Member:	Mr. Loku Dassanayake
    Committee Member: Mr. Gayan Karunarathna
    Committee Member: Mr. Rasika Weerasinghe
    Senior Advisor: Dr. Don Rodrigo
    Senior Advisor: Mr. Milroy Gunawardena`,
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
            <Container className="tileHeader"> <i className="fas fa-sitemap"/> Office Bearers </Container>
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
