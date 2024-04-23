
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
BrowserRouter as Router,
Routes,
Route 
}
 from 'react-router-dom'


export default class App extends Component {  //type rcc and enter for template code of class based component
  render() {
    return (
      <>     {/* previously I used div here but got error.therefore router should be root component */}
        <Router>   
        <Navbar/>
          <Routes>
               <Route exact path="/" element={<News key="general" country="us" pageSize={3} category="general" />}></Route>
               <Route exact path="/bussiness" element={<News key="bussiness" country="us" pageSize={3} category="bussiness" />}></Route>
               <Route exact path="/entertainment" element={<News key="entertainment" country="us" pageSize={3} category="entertainment" />}></Route>
               <Route exact path="/general" element={<News key="general" country="us" pageSize={3} category="general" />}></Route>
               <Route exact path="/health" element={<News key="health" country="us" pageSize={3} category="health" />}></Route>
               <Route exact path="/science" element={<News key="science" country="us" pageSize={3} category="science" />}></Route>
               <Route exact path="/technology" element={<News key="technology" country="us" pageSize={3} category="technology" />}></Route>
               <Route exact path="/sports" key="sports" element={<News key="sports" country="us" pageSize={3} category="sports" />}></Route>
              {/** if key is not used to open diffrent category we need to first reload.by using key no need to overload browser ,adds of that category will get opened after clicking on it directly */}
          </Routes>
       </Router>
      </>
    )
  }
}
