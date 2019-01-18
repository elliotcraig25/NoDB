import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';

import MainBody from './Components/MainComponent/MainBody'
import ParentSideComponent from './Components/SideComponent/ParentSideComponent'

class App extends Component {
  //componentDidMount is just an example
    // componentDidMount(){
    //   axios.get('/api/whatever')
    // }
  //above is an example
  constructor(){
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <MainBody />
        <ParentSideComponent />
      </div>
    );
  }
}

export default App;
