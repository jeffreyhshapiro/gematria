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
          <ControlLabel><a id="showHebrew">Need a Hebrew input?</a></ControlLabel>
          <FormControl
            id="hebrewForm"
            type="text"
            placeholder="Enter text"
            onChange={this.props.getPhrase.bind(this)}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    )
  }
}

export default Textbox
