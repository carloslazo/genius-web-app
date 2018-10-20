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
    this.state.input !== "" ?
    this.props.getFormInput(this.state.input): null
    this.setState({ input: ""})
  };

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input className = {this.props.form} type="text" onChange={this.handleChange} placeholder="Search artists and albums" value={this.state.input}/>
          <input className = {this.props.submit} type="image" src={logo}  />
        </form>
    );
  }
}

export default Form;
