import React from 'react';
import Footer from './components/statics/footer/Footer';
import './App.css'
import { Grid } from "@material-ui/core";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Navbar from './components/statics/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );

}

export default App
