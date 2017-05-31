import React, { Component } from 'react';
import Input from './inputForm.jsx';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col md={6}>
              <h2>Gematria Project</h2>
            </Col>
            <Col md={6} mdPush={3}>
              <h2>פרוייקט גמטריה</h2>
            </Col>
          </Row>
        </Grid>
        <div className="App-intro">
          <Input />
        </div>
      </div>
    );
  }
}

export default App;
