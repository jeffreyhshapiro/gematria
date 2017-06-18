import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
// import Gematria from './gematria.jsx';
import Textbox from './textbox.jsx';
import Calculator from './calculateGematria.jsx';

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hebrewLetter: "",
      kidoshin: ""
    }

    this.letterToParent = this.letterToParent.bind(this);
    this.constructWord = this.constructWord.bind(this);
  }

  letterToParent(val) {
    this.setState({
      hebrewLetter: val.letter
    });
    this.constructWord();
  }

  constructWord(e) {
    const phrase = e.target.value
    this.setState({
      kidoshin: phrase
    })
  }

  render() {
    return (
      <div id="input">
          <Grid>
            <Row>
              <Col md={6} sm={6} xs={12} mdPush={3} smPush={3}>
                <Textbox getPhrase={this.constructWord} />
              </Col>
            </Row>
          </Grid>
          {/*<Grid>
            <Row>
              <Gematria getLetter={this.letterToParent} />
            </Row>
          </Grid>*/}
          <Grid>
            <Row>
              <Col md={6} sm={6} xs={12} mdPush={3} smPush={3}>
                <Calculator calculatePhrase={this.state.kidoshin}/> 
              </Col>
            </Row>
          </Grid>

      </div>
    )
  }
}

export default Input;
