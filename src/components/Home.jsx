import React from 'react'
import MushroomCards from './MushroomCards'
import { IoT_MlInfo, MushroomTypes } from '../constants'
import ContactUs from './ContactUs'
import IoT_ML from './IoT_ML'
import HeroSection from './HeroSection'
import { AuroraBackground } from './ui/AuroraBackground'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import { MushroomSvg } from '../constants'
import Problem from './Problem'


function Home() {
  
  return (
    <section className='w-full relative ' >
      {/** Hero section */}
      <AuroraBackground >
        
        <motion.div 
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }} className='w-full h-full flex flex-col items-center overflow-y-hidden'
         id='home'>
          <div className='w-full z-20'>
            <Navbar />
          </div>
          <div className=" w-full px-8 lg:px-14 App   ">
          <HeroSection />
          </div>
          
        </motion.div>
      </AuroraBackground>

      


    {/** Variety of mushrooms grown in Kenya */}
    <section className='  w-full py-5 flex flex-col items-center justify-center px-8 lg:px-14 App bg-[#0B0B0C]' id='mushrooms'>

      <h2 className='sm:text-3xl text-2xl font-semibold capitalize mt-8'>
        {MushroomSvg()}
      </h2> 
      
      <p className='biryani-regular text-white py-3'>Variety of mushrooms we are working on.</p>

      {/* <MushroomSlider slides={MushroomTypes}/> */}
      <MushroomCards cards={MushroomTypes} />
    </section>


    <section className='py-14 w-full px-8 lg:px-14 App bg-[#0B0B0C]'>
      
      <Problem />
    </section>


    {/** iot and ml section */}
    <section className='my-14  w-full  overflow-hidden flex flex-col items-center justify-center px-8 lg:px-14 App ' id='iot-ml'>
      <h2 className='sm:text-3xl text-xl font-semibold capitalize my-8 '>IoT and Machine Learning</h2>
      <p className='font-semibold text-warmGray-700'>Our IoT and Machine Learning solutions help you to monitor and control your mushroom farm from anywhere in the world.</p>
      <IoT_ML slides={IoT_MlInfo}/>

    </section>

    {/**Contact us */}
    <section className='my-14 w-full  flex flex-col items-center justify-center px-8 lg:px-14 App' id='contact'>
      <h2 className='text-3xl font-semibold capitalize my-8 '>Contact Us</h2>
      <p>Feel free to reach out to us at: </p>

      <div className='my-10 max-sm:flex justify-center items-center'>
        <ContactUs />
      </div>
    </section>
      

  
  </section>
  
  )
}

export default Home