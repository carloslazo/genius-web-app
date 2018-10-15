import React, { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getFormInput(this.state.input)
  };

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" />
        </form>
    );
  }
}

export default Form;
