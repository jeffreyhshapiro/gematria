import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import Gematria from './gematria.jsx';
import Textbox from './textbox.jsx';
let phrase = "";

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hebrewLetter: ""
    }

    this.letterToTextbox = this.letterToTextbox.bind(this);
  }

  letterToTextbox(val) {
    let letter = val.letter;
    phrase += letter;
    this.setState({
      hebrewLetter: phrase
    });
  }

  render() {
    return (
      <div id="input">
          <Grid>
            <Row>
              <Col md={6} sm={6} xs={12} mdPush={3} smPush={3}>
                <Textbox setLetter={this.state.hebrewLetter} />
              </Col>
            </Row>
          </Grid>
          <Grid>
            <Row>
              <Gematria getLetter={this.letterToTextbox} />
            </Row>
          </Grid>
      </div>
    )
  }
}

export default Input;
