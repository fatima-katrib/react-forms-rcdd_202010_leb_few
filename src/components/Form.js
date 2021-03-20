import React from 'react';
import DisplayData from "./src/components/displayData.js";

class Form extends React.Component {

  render() {
    return (
      <form>
        <DisplayData formData={this.state} />
        <input type="text" name="firstName" onChange={event =>  this.props.handleChange(event)} value={this.props.formData.firstName} />
        <input type="text" name="lastName" onChange={event => this.props.handleChange(event)} value={this.props.formData.lastName} />
      </form>
    )
  }
}

export default Form;