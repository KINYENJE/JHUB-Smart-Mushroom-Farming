import { useEffect, useState } from 'react';
import './App.css';
// import heroImage from "../src/assets/images/hero_image.jpg"
import { Route, Routes, Navigate } from 'react-router-dom';

import Aos from 'aos';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  

  useEffect(() => {
    Aos.init();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      setShowNavbar(currentScrollY > windowHeight * 0.1);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  
  return (
    <div className='flex flex-col justify-center items-center overflow-x-hidden relative'>
    {showNavbar && <Navbar />}
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
   

    <Footer />

    </div>
   
  );
}

export default App;
