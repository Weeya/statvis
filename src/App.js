import React, { Component } from 'react';

import './App.css';

import Dashboard from "./components/Dashboard";

const axios = require('axios');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myData: {}
    };
    this.getmyData = this.getmyData.bind(this)
  }

  async getmyData() {
    const response = await axios.get('/data.json', {})
    if (response.status === 200) {
      this.setState(state => {
        state.myData = response.data
        return state
      })
    }
  }

  componentDidMount() {
    this.getmyData();
  }

  render() {
    const { myData } = this.state;
    // console.log(myData)

    return (
      <div className="App">
        <Dashboard data={myData} /> 
      </div>
    );
  }
}

export default App;
