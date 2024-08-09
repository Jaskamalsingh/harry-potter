import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Journey from './components/Journey';
import Footer from './components/Footer';

const App = () => {
  const [toggle, Settoggle] = useState(false);

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/journey" element={<Journey />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
