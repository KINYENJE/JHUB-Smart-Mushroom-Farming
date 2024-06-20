import React from 'react'
// import farmers_ai from '../assets/images/farmer_with_AI2.jpeg'

import { Canvas} from '@react-three/fiber'
import {  useGLTF } from '@react-three/drei'
import MushComponent from './MushComponent'




const HeroSection = () => {
  const mushroom = useGLTF('./models/mushroom.gltf')
  

  


  return (
    <>
      
        {/** Mushroom farming in kenya details */}
        <div className="w-full flex max-sm:flex-col gap-5 max-sm:mx-0  rounded-lg ">
        
        <div className="max-sm:w-full  w-1/2 text-wrap flex flex-col max-sm:mt-5 md:pt-16 px-10 max-sm:px-5 justify-start rounded-lg text-left relative  max-sm:top-20 z-10" data-aos="fade-right"  data-aos-duration="3000">

        <h1 className='font-extrabold lg:text-[44px] text-[33px] xl:text-[55px]  py-1  text-transparent bg-clip-text bg-gradient-to-b from-rose-600 from-45% via-white via-60%  to-black  tracking-wider  '>
          ECOSHR<span className=''>🍄</span>MZ
        </h1>

        <h2 className='text-[17px] lg:text-xl font-bold text-stone-400 my-4 text-left baloo-tamma-2-bal'>
          Revolutionize your mushroom farming experience
        </h2>

        <p className=' text-stone-200 leading-6 my-3 text-sm lg:text-lg lg:font-normal text-left baloo-tamma-2-balight'>
          Leveraging  <span className='text-sm font-extrabold text-rose-500 tracking-wider'>IoT</span> and <span className='text-sm font-extrabold text-rose-500 tracking-wider'> Machine Learning</span> to provide smart solutions for mushroom farmers.
        </p> 

        <p className=' text-stone-200 leading-6 py-1 text-sm lg:text-lg lg:font-normal text-left baloo-tamma-2-balight'>
          Our solutions help mushroom farmers to monitor and control their farms from anywhere in the world.
        </p>
        
        </div>

        {/** Mushroom farming in kenya image */}
        <div className=" max-sm:w-full  w-1/2 flex items-center justify-center  overflow-hidden bg-transparent z-0 relative" data-aos="fade-left"  data-aos-duration="3000">
       <div className='bg-transparent w-full h-full absolute z-10 sm:hidden'></div>
        <Canvas  shadows frameloop="demand" camera={{position: [0, 10, 8], fov: 25 }} className='transition-all ease-in-out absolute -top-20 max-sm:-top-56  '>
          <MushComponent mushroom={mushroom} />
        </Canvas>

        </div>
      </div>

      

    </>
    
  )
}

export default HeroSection