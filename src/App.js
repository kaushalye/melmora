import React, {Component} from 'react';
import { Container, Nav, Navbar, Image} from 'react-bootstrap';
import Home from './components/home'
import News from './components/news'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <Container className="full-height">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/home">
          
          <span className="title" >
            <Image
              alt=""
              src="/logo192.png"
              width="40"
              height="40"
            />
            University of Moratuwa Alumni Association in Victoria
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/schol">Scholarship</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="https://www.facebook.com/groups/melmora" target="_blank">
              <Image           
                width="25" height="25"
                src="/icons/fb.png"/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/news">
            <News/>
          </Route>
          <Route path="/events">
            <Container>Events</Container>
          </Route>
          <Route path="/schol">
            <Container>Schols</Container>
          </Route>
          <Route path="/about">
            <Container>About</Container>
          </Route>
          <Route path="/contact">
            <Container>Contacts</Container>
          </Route>
          <Redirect from="/" to="/home" />
        </Switch>
        <Container className="footer fixed-bottom center">
          <span>© 2020 University of Moratuwa Alumni Association-Victoria  - All rights reserved</span>
        </Container>
      </Container>
    </Router>
  );
}

export default App;
