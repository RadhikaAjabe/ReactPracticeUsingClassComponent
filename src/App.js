
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {  //type rcc and enter for template code of class based component
  render() {
    return (
      <div>
      <Navbar/>
       <News/>

      </div>
    )
  }
}
