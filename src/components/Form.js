import React from 'react';
import DisplayData from "./src/components/displayData.js";

class Form extends React.Component {

  render() {
    return (
      <form>
        <DisplayData formData={this.state} />
        <input type="text" name="firstName" onChange={event =>  this.props.handleChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}

export default Form;