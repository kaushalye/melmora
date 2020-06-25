import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';


class ItemList extends Component {


  render() {
    return (
      <Container className="itemList">
        <Container className="itemListHeader"> {this.props.name}
        </Container>
        <Container>
          {
            this.props.items.split('\n').map(line => {
              const pair = line.split(':');
              return (
                <Row> 
                  <Col className='itemListNamePosition'>{pair[0]}:</Col >
                  <Col  className='itemListName'>{pair[1]}</Col>
                </Row>)
            })
          }
        </Container>
      </Container>

    );
  }
}

export default ItemList;
