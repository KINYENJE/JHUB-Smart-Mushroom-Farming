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
    <div className='flex flex-col justify-center items-center overflow-x-hidden '>
    <Navbar />

    <div className='flex justify-center items-center max-sm:px-5'>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>

    <Footer />

    </div>
   
  );
}

export default App;
