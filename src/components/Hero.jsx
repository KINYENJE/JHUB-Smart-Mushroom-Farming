import React from 'react'
import MushroomSlider from './MushroomSlider'
import { IoT_MlInfo, MushroomTypes } from '../constants'
import ContactUs from './ContactUs'
import IoT_ML from './IoT_ML'
import farmers_ai from '../assets/images/farmer_with_AI2.jpeg'



function Hero() {
  return (
    <section>
      <div className="w-full max-w-[1440px] px-8 lg:px-14 App min-h-[100vh] mt-10 flex flex-col items-center justify-center " id='home'>
    <h1 className='block max-sm:text-xl text-4xl font-bold sm:text-title-xl underline underline-offset-4'>
      SMART MUSHROOM FARMING
    </h1>

    {/** Mushroom farming in kenya details */}
    <div className="w-full flex max-sm:flex-col gap-5 mx-5 my-12 rounded-lg bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${farmers_ai})`}}>
      
      <div className="max-sm:w-full  w-2/3 text-wrap flex items-center justify-center px-10 blue_overlay rounded-lg " data-aos="fade-right"  data-aos-duration="3000">
      <p className='leading-9 text-left text-white font-semibold '>
        Mushroom farming in Kenya is apparently one of the most profitable agribusiness ventures. The demand for mushrooms in Kenya is growing at a fast pace due to the health benefits that come with its consumption. The Kenyan market has a shortage of mushrooms due to the high demand as compared to the supply.
        <br/> <br/>
        
        A survey by the National Farmer Information Service (NAFIS) indicates   Kenya produces <span className=' underline underline-offset-2 text-green-500'>500 tonnes</span> while the demand is <span className=' underline underline-offset-2 text-green-500'>1200 tonnes</span> 

      </p>
      
      </div>

      {/** Mushroom farming in kenya image */}
      <div className="max-sm:hidden w-2/3 flex items-center justify-center overflow-hidden" data-aos="fade-left"  data-aos-duration="3000">
       <div className="w-[300px] lg:w-[400px] h-96  rounded-lg  overflow-x-hidden bg-center  bg-contain" style={{backgroundImage: `url(${farmers_ai})`}} >
          {/* <img src={heroImage} alt="mushroom farming in kenya" className="w-full h-full object-cover" /> */}
        </div>
      </div>
    </div>


    {/** Variety of mushrooms grown in Kenya */}
    <section className='my-14  w-full py-5 ' id='mushrooms'>

      <h2 className='text-3xl font-semibold capitalize my-8 underline underline-offset-3'>Mushroom Varieties</h2>

      <MushroomSlider slides={MushroomTypes}/>
    </section>


    {/** iot and ml section */}
    <section className='my-14  w-full  overflow-hidden ' id='iot-ml'>
      <h2 className='text-3xl font-semibold capitalize my-8 underline underline-offset-3'>IoT and Machine Learning</h2>
      <p className='font-semibold text-warmGray-700'>Our IoT and Machine Learning solutions help you to monitor and control your mushroom farm from anywhere in the world.</p>
      <IoT_ML slides={IoT_MlInfo}/>

    </section>

    {/**Contact us */}
    <section className='my-14  w-full  ' id='contact'>
      <h2 className='text-3xl font-semibold capitalize my-8 underline underline-offset-3'>Contact Us</h2>
      <p>Feel free to reach out to us at: </p>

      <div className='my-10'>
        <ContactUs />
      </div>
    </section>
      

  </div>
    </section>
  
  )
}

export default Hero