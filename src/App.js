//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar.js';
import News from './Component/News';
import {
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
 
  state={
    progress:0
  }

  setProgress =(progress)=>
  {
    this.setState({progress:progress})
  }
 
  pageSize=6;
 
  render() {
    return (
      <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
         />
         <Routes>
          <Route path="/" element={<News  setProgress={this.setProgress} key="general" pageSize={this.pageSize} country={"in"} category={"general"}/>}/>
          <Route path="Business" element={<News  setProgress={this.setProgress} key="business" pageSize={this.pageSize} country={"in"} category={"business"}/>}/>
          <Route path="Entertainment" element={<News  setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country={"in"} category={"entertainment"}/>}/>
          <Route path="Health" element={<News  setProgress={this.setProgress} key="health" pageSize={this.pageSize} country={"in"} category={"health"}/>}/>
          <Route path="Science" element={<News  setProgress={this.setProgress} key="science" pageSize={this.pageSize} country={"in"} category={"science"}/>}/>
          <Route path="Sports" element={<News  setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country={"in"} category={"sports"}/>}/>
          <Route path="Technology" element={<News  setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country={"in"} category={"technology"}/>}/>
          <Route path="General" element={<News  setProgress={this.setProgress} key="general" pageSize={this.pageSize} country={"in"} category={"general"}/>}/>
        </Routes>
      </div>
    )
  }
}
