import React from 'react';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import './App.css'
import { Grid } from "@material-ui/core";
import Home from './pages/home/Home';
import About from './pages/about/About';
import SearchAppBar from './components/statics/navbar/Navbar';

function App() {
  return (
    <>
      <SearchAppBar />
      <Home />
      <Footer />
    </>
  );

}

export default App
