import React, { Component } from "react";
import Form from "./form.jsx";
import logo from "../svg/logo2.svg"


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="home-page-grid">
        <span className="back-ground-logo"/>
        <img
          className="logo-container-2"
          src={logo}
          width="60"
          height="60"
        />
      <span className="home-background"  style={{backgroundImage:`url(https://images.genius.com/8bf8ad4e7bcd4e2d9f1d33b1bb53fe3a.1000x1000x1.jpg)`}}/>
      <div className="home-page-form2">
      <Form getFormInput = {this.props.getFormInput} form={"search-form2"} submit={"search-submit2"} />
      </div>
      </div>
    );
  }
}

export default HomePage;
