import React, {Component} from 'react';
import {FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import './css/textbox.css';

class Textbox extends Component {

  // getInitialState() {
  //   return {
  //     value: ''
  //   };
  // }

  // getValidationState() {
  //   const length = this.state.value.length;
  //   if (length > 10) return 'success';
  //   else if (length > 5) return 'warning';
  //   else if (length > 0) return 'error';
  // }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  showHebrewInput() {

  }




  render() {
    return (
      <form>
        <FormGroup
          // validationState={this.getValidationState()}
          >
          <ControlLabel onClick={this.showHebrewInput.bind(this)}><a href="javascript:void()">Need a Hebrew input?</a></ControlLabel>
          <FormControl
            id="hebrewForm"
            type="text"
            value={this.props.setLetter}
            placeholder="Enter text"
            onChange={this.handleChange.bind(this)}
          />
          <FormControl.Feedback />
          //{ <HelpBlock>Validation is based on string length.</HelpBlock>}
        </FormGroup>
      </form>
    )
  }
}

export default Textbox
