import React, { Component } from 'react';
import CharInfo from './CharInfo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class List extends Component {
  render() {
    const people = this.props.people;
    return (<div className="addmargin">
      <div className="">
        {
          people.map((p) => {
            console.log(p)
            return (
              <div key={p.url}>
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <Row>
                          <Col>{p.title}</Col>
                        </Row>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body><CharInfo charInfo={p} /></Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>

              </div>
            )
          })
        }
      </div>
    </div>
    );
  }
}

export default List;