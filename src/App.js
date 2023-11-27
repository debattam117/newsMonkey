//import logo from './logo.svg';
import './App.css';

import React from 'react'
import Navbar from './Component/Navbar.js';
import News from './Component/News';
import {Route, Routes,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

const App =()=> {
 

  const [progress,setProgress]=useState(0)
  
  

  
 
  const pageSize=6;
 
  
    return (
      <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
         />
         <Routes>
          <Route path="/" element={<News  setProgress={setProgress} key="general" pageSize={pageSize} country={"in"} category={"general"}/>}/>
          <Route path="Business" element={<News  setProgress={setProgress} key="business" pageSize={pageSize} country={"in"} category={"business"}/>}/>
          <Route path="Entertainment" element={<News  setProgress={setProgress} key="entertainment" pageSize={pageSize} country={"in"} category={"entertainment"}/>}/>
          <Route path="Health" element={<News  setProgress={setProgress} key="health" pageSize={pageSize} country={"in"} category={"health"}/>}/>
          <Route path="Science" element={<News  setProgress={setProgress} key="science" pageSize={pageSize} country={"in"} category={"science"}/>}/>
          <Route path="Sports" element={<News  setProgress={setProgress} key="sports" pageSize={pageSize} country={"in"} category={"sports"}/>}/>
          <Route path="Technology" element={<News  setProgress={setProgress} key="technology" pageSize={pageSize} country={"in"} category={"technology"}/>}/>
          <Route path="General" element={<News  setProgress={setProgress} key="general" pageSize={pageSize} country={"in"} category={"general"}/>}/>
        </Routes>
      </div>
    )
  
}

export default App