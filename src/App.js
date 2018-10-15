import React, { Component } from "react";
import Header from "./components/header.jsx";
import Form from "./components/form.jsx";
import Cards from "./components/cards.js";
import { getSearch, getReferents } from "./api/index.js";
require("dotenv").config();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parsedDataObject: undefined,
      dataFetched: false,
      searchKey: "logic",//eventually put a random list here
    };
  }

  getFormInput = key => {
    this.setState({ searchKey: key });
  };

  componentDidMount() {
    let getApi = () => {
      return getSearch(this.state.searchKey)
     .then(resp => resp.hits.map(x => x.result.id))
     .then(resp => resp.map(x=> getReferents(x).then(resp=>resp.referents)))
     .then(resp => Promise.all(resp))
     .then(resp => resp.map(x=> fragmentArray(x)))
    }

    getApi().then(resp=>{
      this.setState({ parsedDataObject: resp });
    })
  }




  componentDidUpdate(prevState) {

  }


  render() {
    return (
      <div className="main-grid">
        <Header>
          {" "}
          <Form getFormInput={this.getFormInput} />{" "}
        </Header>
        <Cards parsedDataObject={this.state.parsedDataObject} />
      </div>
    );
  }
}

export default App;

function fragmentArray(data) {
  let object = {
    url: data[0].url,
    fragment: data[0].fragment,
    annotations: data[0].annotations,
    annotatable: data[0].annotatable
  };
  return object;
}
