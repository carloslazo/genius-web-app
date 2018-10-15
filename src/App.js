import React, { Component } from 'react';
import Header from "./components/header.jsx"
import Form from './components/form.jsx'
import Cards from './components/cards.js'
import {getSearch, getReferents} from './api/index.js'
require('dotenv').config()


// import TweetEmbed from 'react-tweet-embed'
//           <TweetEmbed id='840282218064891904' />

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      data: {},
      parsedDataObject: undefined
    }
  }

  getFormInput = q =>{
    let parsedDataObject = []
    getSearch(q).then(resp=>{
    // let searchId = resp.hits[0].result.id
    let searchIdArray = resp.hits.map(x=>{
      return x.result.id
    })
    // getReferents(searchId).then(resp =>{
    //    parsedDataObject= this.fragmentArray(resp.referents)
    //   this.setState({data: resp, parsedDataObject: parsedDataObject})
    // })

    searchIdArray.map(x=>{
      getReferents(x).then(resp =>{
       parsedDataObject.push(this.fragmentArray(resp.referents))
      this.setState({data: resp, parsedDataObject: parsedDataObject})
    })

  })})
  }

fragmentArray = data => {
  //this will be the whole object instead of seperating all the data
  console.log(data);
    let object = {
      url: data[0].url,
      fragment: data[0].fragment,
      annotations: data[0].annotations,
      annotatable: data[0].annotatable
    };
    return object;
};


  render() {
    return (
      <div className="main-grid">
        <Header> <Form getFormInput={this.getFormInput}/> </Header>
        <Cards parsedDataObject={this.state.parsedDataObject}/>
      </div>
    );
  }
}

export default App;
