import React, {Component} from 'react';
import { Container, Nav, Navbar, Image} from 'react-bootstrap';
import Home from './components/home'
import Gallery from './components/gallery'
import Schol from './components/schol'
import About from './components/about'
import PartnerProgram from './components/partnerprogram'
import Contact from './components/contact'
import Register from './components/register'
import DonateBlood from './components/donateBlood'
import WebinarAI from './components/webinar'
import SubHeader from './components/subheader'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';


class App extends Component {
  state = {
    page: 'Home'
  }

  render() {
    return (
      <Router>
        <Container className="full-height">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/home">
            
            <span className="title" >
              <Image className="logo" 
                alt=""
                src="/logo192.png"
                width="40"
                height="40"
              />
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/schol">Scholarship</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/partner-program">Partners</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="https://www.facebook.com/groups/melmora" target="_blank">
                <i class="fab fa-facebook-square"/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/partner-program">
              <SubHeader subtitle='Partners'/>
              <PartnerProgram/>
            </Route>
            <Route path="/gallery/:id?" component={Gallery}>
              {/* <SubHeader subtitle='Gallery'/>
              <Gallery/> */}
            </Route>
            <Route path="/schol">
              <SubHeader subtitle='Scholarship'/>
              <Schol/>
            </Route>
            <Route path="/register">
              <SubHeader subtitle='Register'/>
              <Register/>
            </Route>
            <Route path="/donate-blood">
              <SubHeader subtitle='DonateBlood'/>
              <DonateBlood/>
            </Route>
            <Route path="/webinar-ai-25">
              <SubHeader subtitle='Webinar'/>
              <WebinarAI/>
            </Route>
            <Route path="/about">
              <SubHeader subtitle='About'/>
              <About/>
            </Route>
            <Route path="/contact">
              <SubHeader subtitle='Contact'/>
              <Contact/>
            </Route>
            <Route path='/donate' component={() => {
                window.location.href = 'https://pad.live/melmorascholpayment/';
                return null;
            }}/>
            <Redirect from="/" to="/home" />
          </Switch>
          <Container className="footer fixed-bottom center">
            <span>© 2023 University of Moratuwa Alumni Association-Victoria  - All rights reserved</span>
          </Container>
        </Container>
      </Router>
    );
  }
  
}

export default App;
