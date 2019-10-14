import React, { Component } from "react";
import Header from "./components/header.jsx";
import Form from "./components/form.jsx";
import Cards from "./components/cards.js";
import Loading from "./components/loading.jsx";
import HomePage from "./components/home-page.jsx";

import { getSearch, getReferents } from "./api/index.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parsedDataObject: undefined,
      dataFetched: false,
      searchKey: "foo fighters", //eventually put a random list here
      isLoading: true,
      load: false,
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
      this.setState({ parsedDataObject: resp, isLoading: false });
    });
  }

  getFormInput = key => {
    if (this.state.searchKey !== key) {
      this.setState({ searchKey: key, isLoading: true });
    }
  };

  getFormInputHomePage = key => {
    this.setState({searchKey:key, isLoading: true, load: true})
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchKey !== prevState.searchKey) {
      this.getApi().then(resp => {
        this.setState({ parsedDataObject: resp, isLoading: false });
      });
    }
  }

  render() {
    let obj1 = [];
    let obj2 = [];
    let obj3 = [];

    this.state.parsedDataObject !== undefined
      ? this.state.parsedDataObject.map(x => {
          //acts as a temporary suffle
          if (
            (x[0] !== undefined) &
            (x[1] !== undefined) &
            (x[2] !== undefined)
          ) {
            obj1.reverse();
            obj1.push({
              url: x[0].url,
              fragment: x[0].fragment,
              annotations: x[0].annotations,
              annotatable: x[0].annotatable
            });
            console.log(obj1[0].annotatable.image_url)
            obj2.reverse();

            obj2.push({
              url: x[1].url,
              fragment: x[1].fragment,
              annotations: x[1].annotations,
              annotatable: x[1].annotatable
            });
            obj3.push({
              url: x[2].url,
              fragment: x[2].fragment,
              annotations: x[2].annotations,
              annotatable: x[2].annotatable
            });
          }
        })
      : null;


    return(
      <div className="main-grid">
        <Header>
          <Form getFormInput={this.getFormInput} form={"search-form"} submit={"search-submit"}/>
        </Header>
        {this.state.isLoading ? <Loading /> : null}
        <div className="container-grid">
          {this.state.isLoading ? null : <Cards parsedDataObject={obj1} />}
          {this.state.isLoading ? null : <Cards parsedDataObject={obj2} />}
          {this.state.isLoading ? null : <Cards parsedDataObject={obj3} />}
        </div>
      </div>)
    
  }
}

export default App;

function fragmentArray(data) {
  return data.map(x => {
    let object;
    object = {
      url: x.url,
      fragment: x.fragment,
      annotations: x.annotations,
      annotatable: x.annotatable
    };
    return object;
  });
}
