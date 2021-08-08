import React, { Component } from 'react';
import {Container, Image, Col, Button} from 'react-bootstrap';

class PartnerProgram extends Component {
  render() {
    return (
      <Container className="nopadding">
      <Container className="tileContainer" >
      <Container className="tileWide">
        <Container className="tileHeader"> Partner program</Container>
        
        <Container className="tileBody">
          <p> We are pleased to announce that UMAAV is a partner of <a href="https://www.anz.com.au/" target="_blank">ANZ Loan Introducer Program</a> and <a href="https://www.bankofmelbourne.com.au/" target="_blank">Bank of Melbourne (BOM) Loan Referral Scheme</a>.</p> 
          
          <p> ANZ and BOM both offer market leading rates for new / refinance home loan customers. </p>
          <p> With your every new / refinanced loan, UMAAV scholarship program will earn a monetary reward.</p>
          <p> This has no additional cost to you.</p>
          <p> As a UMAAV member please consider ANZ or BOM for your next home loan or refinance needs.</p>
          <Container className="tileContainer" >
            <Container className="tile draw-border"> 
                  <Container className="tileHeader"><Image className="sponsorLogo"  src="/images/anz_logo.png"/></Container>
                  <Container className="tileBody"> Please contact,<br/>Mr. Kuma Munasinghe (UMAAV): <br/><a href="tel:0425337093">0425337093</a></Container>
            </Container>
            <Container className="tile draw-border"> 
                  <Container className="tileHeader" style={{fontSize: "x-large", paddingTop:"10px", paddingBottom:"15px"}}>Bank of Melbourne</Container>
                  <Container className="tileBody"> Please contact,<br/>Mr. Kuma Munasinghe (UMAAV): <br/><a href="tel:0425337093">0425337093</a></Container>
            </Container>
          </Container>
       
        </Container>
      </Container>
    </Container>
    </Container>
    );
  }
}

export default PartnerProgram;
