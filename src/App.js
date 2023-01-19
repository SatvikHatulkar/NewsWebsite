// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = ()=>{
  const pagesize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/business" element={<News setProgress ={setProgress} apikey={apiKey} key="business" pagesize={pagesize} countary="in" category="business" />} />
            <Route exact path="/entertaiment" element={<News setProgress ={setProgress} apikey={apiKey} key="entertaiment" pagesize={pagesize} countary="in" category="entertaiment" />} />
            <Route exact path="/general" element={<News setProgress ={setProgress} apikey={apiKey} key="general" pagesize={pagesize} countary="in" category="general" />} />
            <Route exact path="/health" element={<News setProgress ={setProgress} apikey={apiKey} key="health" pagesize={pagesize} countary="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress ={setProgress} apikey={apiKey} key="science" pagesize={pagesize} countary="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress ={setProgress} apikey={apiKey} key="sports" pagesize={pagesize} countary="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress ={setProgress} apikey={apiKey} key="technology" pagesize={pagesize} countary="in" category="technology" />} />
          </Routes>
        </Router>
      </>
    )
  }


  export default App;