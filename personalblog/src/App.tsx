import React from 'react';
import Footer from './components/statics/footer/Footer';
import './App.css'
import { Grid } from "@material-ui/core";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Navbar from './components/statics/navbar/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );

}

export default App
