import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import Gematria from './gematria.jsx';
import Textbox from './textbox.jsx';
import Calculator from './calculateGematria.jsx';
let phrase = "";

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hebrewLetter: "",
      kidoshin: "",
      showHebrew: false
    }

    this.letterToParent = this.letterToParent.bind(this);
    this.constructWord = this.constructWord.bind(this);
    this.hebrewInput = this.hebrewInput.bind(this);
  }

  letterToParent(val) {
    this.constructWord(val);
  }

  constructWord(e) {
    
    if(!e.target) {
      phrase += e.letter;
    } else {
      phrase = e.target.value;
    }

    this.setState({
      kidoshin: phrase
    })
  }

  hebrewInput() {
    this.setState({
      showHebrew: !this.state.showHebrew
    })
  }

  render() {
    return (
      <div id="input">
          <Grid>
            <Row>
              <Col md={6} sm={6} xs={12} mdPush={3} smPush={3}>
                <Textbox getPhrase={this.constructWord} 
                         toggleHebrew={this.hebrewInput}
                         hebrewState={this.state.showHebrew}
                />
              </Col>
            </Row>
          </Grid>
          <Grid>
            <Row>
              <Col md={6} sm={6} xs={12} mdPush={3} smPush={3}>
                <Calculator calculatePhrase={this.state.kidoshin}/> 
              </Col>
            </Row>
          </Grid>
          <Grid>
            <Row>
               {this.state.showHebrew ? <Gematria getLetter={this.letterToParent} /> : null}
            </Row>
          </Grid>
      </div>
    )
  }
}

export default Input;
