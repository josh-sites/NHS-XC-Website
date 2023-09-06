import React, { useState } from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from './pages'
import CrossCountry from './pages/CrossCountry'
import TrackField from './pages/TrackField'
import Contact from './pages/Contact'
import Footer from './components/Footer.jsx'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/cross-country" exact element={<CrossCountry/>} />
        <Route path="/track-field" exact element={<TrackField/>} />
        <Route path="/contact" exact element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}