import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';

import MainBody from './Components/MainComponent/MainBody'

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
        {/* <div className="main-section">

        </div> */}
        <MainBody />
        <div className="sidebar">

        </div>
      </div>
    );
  }
}

export default App;
