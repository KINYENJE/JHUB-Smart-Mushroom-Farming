import React from 'react'
import MushroomSlider from './MushroomSlider'
import { MushroomTypes } from '../constants'
import ContactUs from './ContactUs'

function Hero() {
  return (
  <div className="w-full max-w-[1440px] px-8 lg:px-14 App min-h-[100vh] mt-10  " id='home'>
    <h1 className='block text-4xl font-bold sm:text-title-xl underline underline-offset-4 '>SMART MUSHROOM FARMING</h1>

    {/** Mushroom farming in kenya details */}
    <div className="w-full flex gap-5 my-12 pic rounded-lg">
      
      <div className="w-2/3 text-wrap flex items-center justify-center px-10 blue_overlay rounded-lg " data-aos="fade-right"  data-aos-duration="3000">
      <p className='leading-9 text-left text-white font-semibold '>
        Mushroom farming in Kenya is apparently one of the most profitable agribusiness ventures. The demand for mushrooms in Kenya is growing at a fast pace due to the health benefits that come with its consumption. The Kenyan market has a shortage of mushrooms due to the high demand as compared to the supply.
        <br/> <br/>
        
        A survey by the National Farmer Information Service (NAFIS) indicates   Kenya produces <span className=' underline underline-offset-2 text-green-500'>500 tonnes</span> while the demand is <span className=' underline underline-offset-2 text-green-500'>1200 tonnes</span> 

      </p>
      
      </div>

      {/** Mushroom farming in kenya image */}
      <div className="w-2/3 flex items-center justify-center overflow-hidden" data-aos="fade-left"  data-aos-duration="3000">
       <div className="w-[300px] lg:w-[400px] h-96  pic rounded-lg border-2 border-black overflow-x-hidden" >
          {/* <img src={heroImage} alt="mushroom farming in kenya" className="w-full h-full object-cover" /> */}
        </div>
      </div>
    </div>


    {/** Variety of mushrooms grown in Kenya */}
    <section className='my-28 w-full h-[100vh] ' id='mushrooms'>

      <h2 className='text-2xl font-semibold capitalize my-8 underline underline-offset-3'>Variety of Mushrooms Grown In Kenya</h2>

      <MushroomSlider slides={MushroomTypes}/>

    </section>

    {/**Contact us */}
    <section className='my-28  w-full h-[100vh] ' id='contact'>
      <h2 className='text-3xl font-semibold capitalize my-8 underline underline-offset-3'>Contact Us</h2>
      <p>Feel free to reach out to us at: </p>

      <div className='my-10'>
        <ContactUs />
      </div>
    </section>
      

  </div>
  )
}

export default Hero