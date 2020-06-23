import React, { Component } from 'react';
import {Tabs, Tab, Container, Sonnet} from 'react-bootstrap';


class News extends Component {


  render() {
    const years = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012]
    return (
      <Container fluid="md">
        <Tabs defaultActiveKey={years[0]} bg="dark">
          {years.map(year => {
            return (
              <Tab eventKey={year} title={year}>
                <Container>Info for {year} is here</Container>
              </Tab>
            );
          })}

        </Tabs>
      </Container>

    );
  }
}

export default News;
