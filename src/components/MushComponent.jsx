import React, {useState, useEffect, useRef} from 'react'
import { useMediaQuery } from 'react-responsive'
import {  useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, ContactShadows } from '@react-three/drei'
import { Suspense } from 'react'


const MushComponent = ({mushroom}) => {
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

  /*** VERY KEY */
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-device-width: 168px)'
  // })

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

  const ref = useRef()

  useFrame(() => {
    if(ref.current) {
      ref.current.rotation.y += 0.005;
      ref.current.rotation.x += 0.001;
    }
  });

  return (
    <>
      <ambientLight intensity={20}  />
          <pointLight position={[5, 15, 10]} intensity={10} />
          
          <directionalLight position={[0, 10, 0]} intensity={10}  />
           <OrbitControls autoRotate autoRotateSpeed={0.1} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enablePan={false} enableRotate={false} />
          <Suspense  fallback={<h1 className='text-2xl text-white'>LOADING</h1>}>
            <primitive 
              object={mushroom.scene} 
              scale={scaleAdjuster()} 
              mousePosition={mousePosition}
              ref={ref}
               />
          </Suspense>
          <Environment preset="dawn" />
          <ContactShadows position={[-0.1, -1.5, 0.1]}  opacity={0.9} scale={10}  blur={0.2} far={10} resolution={2160} color="#FFFFFF" />
    </>
  )
}

export default MushComponent