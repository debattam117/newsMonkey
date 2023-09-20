//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar.js';
import News from './Component/News';
import {
  Route,
  Routes,
} from "react-router-dom";


export default class App extends Component {
  pageSize=6;
  render() {
    return (
      <div>
        <Navbar/>
         <Routes>
          <Route path="/" element={<News key="general" pageSize={this.pageSize} country={"in"} category={"general"}/>}/>
          <Route path="Business" element={<News key="business" pageSize={this.pageSize} country={"in"} category={"business"}/>}/>
          <Route path="Entertainment" element={<News key="entertainment" pageSize={this.pageSize} country={"in"} category={"entertainment"}/>}/>
          <Route path="Health" element={<News key="health" pageSize={this.pageSize} country={"in"} category={"health"}/>}/>
          <Route path="Science" element={<News key="science" pageSize={this.pageSize} country={"in"} category={"science"}/>}/>
          <Route path="Sports" element={<News key="sports" pageSize={this.pageSize} country={"in"} category={"sports"}/>}/>
          <Route path="Technology" element={<News key="technology" pageSize={this.pageSize} country={"in"} category={"technology"}/>}/>
          <Route path="General" element={<News key="general" pageSize={this.pageSize} country={"in"} category={"general"}/>}/>
        </Routes>
      </div>
    )
  }
}
