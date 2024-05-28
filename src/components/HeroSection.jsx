import React , {useState, useEffect, Suspense} from 'react'
// import farmers_ai from '../assets/images/farmer_with_AI2.jpeg'
import Loader from './Loader'
import Model from './Mushroom'

import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls, useGLTF } from '@react-three/drei'


// function Model({ mousePosition }) {
//   const mesh = useRef();

//   useFrame(() => {
//     if (mesh.current) {
//       mesh.current.rotation.x = mousePosition.y * 0.01;
//       mesh.current.rotation.y = mousePosition.x * 0.01;
//     }
//   });

//   return (
//     <mesh ref={mesh}>
//       {/* Your model components */}
//     </mesh>
//   );
// }


const HeroSection = () => {
  const mushroom = useGLTF('./models/mushroom.gltf')
  const [width, setWidth] = useState(window.innerWidth)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  window.addEventListener('mousemove', handleMouseMove);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}, []);

// Use mousePosition to alter your 3D model

  const breakpoints = {
    small: 640,
    medium: 768,
    large: 1024,
    xlarge: 1280
  }
  
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])
  
  const scaleAdjuster = () => {
    if (width < breakpoints.small) {
      return 1.5
    } else if (width < breakpoints.medium) {
      return 1.75
    } else if (width < breakpoints.large) {
      return 2
    } else if (width < breakpoints.xlarge) {
      return 2.25
    } else {
      return 2.5
    }
  }


  return (
    <>
      
        {/** Mushroom farming in kenya details */}
        <div className="w-full flex max-sm:flex-col gap-5 max-sm:mx-0  rounded-lg ">
        
        <div className="max-sm:w-full  w-1/2 text-wrap flex flex-col max-sm:mt-5 lg:mt-20 px-10 max-sm:px-5 justify-center   rounded-lg text-left relative sm:-top-32 max-sm:top-20 z-10" data-aos="fade-right"  data-aos-duration="3000">

        <h1 className='font-extrabold lg:text-5xl text-4xl xl:text-6xl  py-1  text-transparent bg-clip-text bg-gradient-to-b from-rose-600 from-45% via-white via-60%  to-black  tracking-wider  '>
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

        <Canvas shadows frameloop="demand" camera={{position: [0, 10, 8], fov: 25 }} className='transition-all ease-in-out absolute -top-20 max-sm:-top-56  '>
          <ambientLight intensity={20}  />
          <pointLight position={[5, 15, 10]} intensity={10} />
          
          <directionalLight position={[0, 10, 0]} intensity={10}  />
          <OrbitControls autoRotate autoRotateSpeed={1.0} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enablePan={false} />
          <Suspense fallback={<Loader />}>
            <primitive object={mushroom.scene} scale={scaleAdjuster()} mousePosition={mousePosition} />
          </Suspense>
          <Environment preset="dawn" />
          <ContactShadows position={[-0.1, -1.5, 0.1]}  opacity={0.9} scale={10}  blur={0.2} far={10} resolution={2160} color="#FFFFFF" />
        </Canvas>

        </div>
      </div>

      

    </>
    
  )
}

export default HeroSection