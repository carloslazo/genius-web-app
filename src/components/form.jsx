import React, { Component } from "react";
import logo from "../svg/search.svg"

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
          <input className = "search-form" type="text" onChange={this.handleChange} placeholder="Search artists and albums" />
          <input className = "search-submit" type="image" src={logo}  />
        </form>
    );
  }
}

export default Form;
