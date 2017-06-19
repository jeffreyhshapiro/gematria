import React, {Component} from 'react';
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';
import './css/textbox.css';

class Textbox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ""
    }
  }

  // getValidationState() {
  //   const length = this.state.value.length;
  //   if (length > 10) return 'success';
  //   else if (length > 5) return 'warning';
  //   else if (length > 0) return 'error';
  // }




  render() {
    return (
      <form>
        <FormGroup
          // validationState={this.getValidationState()}
          >
          <ControlLabel>
            <a id="showHebrew" onClick={this.props.toggleHebrew.bind(this)}>
              {!this.props.hebrewState ? 'Need a Hebrew input?' : 'Prefer to copy and paste a Hebrew phrase?'}
            </a>
          </ControlLabel>
          {!this.props.hebrewState ?  <FormControl
            id="hebrewForm"
            type="text"
            placeholder="Enter text"
            onChange={this.props.getPhrase.bind(this)}
          /> : null}
          <FormControl.Feedback />
        </FormGroup>
      </form>
    )
  }
}

export default Textbox
