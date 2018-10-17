import React, { Component } from "react";
import Header from "./components/header.jsx";
import Form from "./components/form.jsx";
import Cards from "./components/cards.js";
import Loading from "./components/loading.jsx";
import { getSearch, getReferents } from "./api/index.js";
require("dotenv").config();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parsedDataObject: undefined,
      dataFetched: false,
      searchKey: "blue", //eventually put a random list here
      isLoading: true
    };
  }

  getApi = () => {
    return getSearch(this.state.searchKey)
      .then(resp => resp.hits.map(x => x.result.id))
      .then(resp => resp.map(x => getReferents(x).then(resp => resp.referents)))
      .then(resp => Promise.all(resp))
      .then(resp => resp.map(x => fragmentArray(x)));
  };

  componentDidMount() {
    this.getApi().then(resp => {
      this.setState({ parsedDataObject: resp, isLoading: false});
    });
  }

  getFormInput = key => {
    if (this.state.searchKey !== key){
      this.setState({ searchKey: key, isLoading: true });
    }
  };


  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchKey !== prevState.searchKey){
      this.getApi().then(resp => {
        this.setState({ parsedDataObject: resp, isLoading: false});
      })
    }
  }

  render() {
    return (
      <div className="main-grid">
        <Header>
          <Form getFormInput={this.getFormInput} />
        </Header>
        {this.state.isLoading ? <Loading/> : null}
        {this.state.isLoading ? null : <Cards parsedDataObject={this.state.parsedDataObject}/>}
      </div>
    );
  }
}

export default App;

function fragmentArray(data) {
  let object
  data[0] !== undefined ?
   object = {
    url: data[0].url,
    fragment: data[0].fragment,
    annotations: data[0].annotations,
    annotatable: data[0].annotatable
  } : null
  return object;
}
