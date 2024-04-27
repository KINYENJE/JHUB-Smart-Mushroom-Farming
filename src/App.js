import { useEffect } from 'react';
import './App.css';
// import heroImage from "../src/assets/images/hero_image.jpg"
import { Route, Routes, Navigate } from 'react-router-dom';

import Aos from 'aos';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    Aos.init();
  }
  ,[])
  
  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>

    <Footer />



    </>
   
  );
}

export default App;
