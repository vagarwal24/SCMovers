import logo from './logo.svg';
import './App.css';
import Header from "./my_components/Header";
import Home from "./my_components/Home";
import About from "./my_components/About";
import OurProfile from "./my_components/OurProfile";
import Services from "./my_components/Services";
import Contact from "./my_components/Contact";
import HeadOffice from "./my_components/HeadOffice";
import Footer from "./my_components/Footer";

import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <Header title="Suraj Cargo Movers" searchBar={true}/>

    

    <Routes>
    <Route exact path="/" element={<Home></Home>}/>
    <Route exact path="/about" element={<About></About>}/>
    <Route exact path="/ourprofile" element={<OurProfile></OurProfile>}/>
    <Route exact path="/services" element={<Services></Services>}/>
    <Route exact path="/contact" element={<Contact></Contact>}/>
    <Route exact path="/office" element={<HeadOffice></HeadOffice>}/>

  
    </Routes>
    {<Footer></Footer>}
    </Router>
    </>
  );
}

export default App;