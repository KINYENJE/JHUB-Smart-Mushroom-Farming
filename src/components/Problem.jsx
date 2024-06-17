import React, { useEffect, useRef, useState } from 'react';
import vid1 from "../assets/images/barrel_vid.mp4";
import vid2 from "../assets/images/sprinkling_vid.mp4";
import vid3 from "../assets/images/chat_vid.mp4";
import vid4 from "../assets/images/bags_vid.mp4";
import { LampContainer } from './ui/Lamp';

const Problem = () => {
  const videos = [
    { title: 'Barrel', src: vid1 , details: "Chege is rolling a barrel of wheat straw."},
    { title: 'Sprinkling', src: vid2, details: "Chege is sprinkling fungi spores on the wheat straw."},
    { title: 'Chat', src: vid3 , details: "Chege is explaining the process of mushroom cultivation."},
    { title: 'Bags', src: vid4, details: "Chege is packing the mixture of wheat straws and fungi in transparent bags" },
    
  ];

  const [showDetails, setShowDetails] = useState(videos.map(() => false));

  const videoRefs = useRef(videos.map(() => React.createRef(null)));

  useEffect(() => {
    const handleVideoPlay = (event) => {
      videoRefs.current.forEach((ref) => {
        if (ref.current && ref.current !== event.target) {
          ref.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Play the video when it is 100% visible in the viewport
        // videos after the fourth will only play when visible
        if (entry.target === videoRefs.current[3].current ) {
          if (entry.isIntersecting) {
            entry.target.play();
          } else {
            entry.target.pause();
          }
        }
      });
    }, { threshold: 1.0 });

    videoRefs.current.forEach((ref, index) => {
      if (ref.current) {
        ref.current.addEventListener('play', handleVideoPlay);
        if (index === 3) {
          observer.observe(ref.current);
        }
      }
    });

    // Play the first video initially
    if (videoRefs.current[0].current) {
      videoRefs.current[0].current.play();
    }

    return () => {
      observer.disconnect();
      videoRefs.current.forEach((ref) => {
        if (ref.current) {
          ref.current.removeEventListener('play', handleVideoPlay);
        }
      });
    };
  }, []);

  const handleVideoEnd = (index) => {
    if (index < videoRefs.current.length - 1) {
      videoRefs.current[index + 1].current.play();
    }
  };

  const toggleDetails = (index) => {
    setShowDetails(prevState => prevState.map((detail, i) => (i === index ? !detail : detail)));
  };

  return (
    <div className='w-full'>
      <h1 className='biryani-light font-thin text-6xl text-white py-4'>
        Problem Statement
      </h1>

      <p className='biryani-extralight text-2xl text-white pt-8 pb-16 opacity-60'>
        To have a better understanding on the particular problem we are trying to solve. <br /> Here is a brief story about a local mushroom farmer called Chege.
      </p>

      <LampContainer>
        <h1 className='biryani-semibold text-3xl max-sm:-mt-44 text-nowrap md:text-4xl text-transparent bg-white bg-clip-text sm:mt-4'>
          "Chege's Story"
        </h1>
        <div className='rounded-lg py-4 px-6 absolute w-full -mt-32 sm:mt-10'>
          <p className='biryani-semibold text-sm sm:text-xl text-trueGray-300 pt-8'>
            "Chege is a mushroom farmer in Kiambu County, Kenya. He has been growing mushrooms for the past 5 years, and has been able to support his family through the sales of mushrooms. <br /> <br /> However, Chege has been facing a major challenge in his farm. He has been experiencing a high rate of mushroom spoilage due to the lack of proper storage facilities. This has led to a significant loss in revenue for Chege, as he is unable to sell the spoiled mushrooms. Chege is looking for a solution that will help him reduce the rate of mushroom spoilage in his farm, and increase his revenue."
          </p>
        </div>
      </LampContainer>

      <div className='flex flex-col items-center justify-center py-16'>
        <div className='w-full flex gap-7 overflow-auto horiz-scroll z-0'>
          {videos.map((video, index) => (
            <div className='rounded-xl relative -z-30 transition' key={index}>
              {/** on hover a dark overlay with title at top of video */}
                <div className={`bg-black ease-in-out duration-700 bg-opacity-80 ${showDetails[index] ? ' h-[60%]' : ' h-[0%]'} rounded-xl w-full absolute top-0 left-0 flex items-center justify-center z-0`}>
                  
                  {showDetails[index] && (
                    <div className='flex flex-col justify-center items-center gap-14'>
                      <h1 className='biryani-semibold text-white text-2xl py-8'>{video.title}</h1>
                      <p className='biryani-semibold text-white text-lg'>{video.details}</p>
                      
                    </div>
                  )}
                </div>
              {/** Video container */}
              <div className='xl:w-[350px] 2xl:w-[400px] w-52 md:w-60  py-2 -z-10'>
                <video
                  ref={videoRefs.current[index]}
                  onEnded={() => handleVideoEnd(index)}
                  key={index}
                  muted controls playsInline
                  loop // Only loop the videos except the fourth one
                  className='rounded-xl w-full h-full object-cover shadow-lg'
                  >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <button onClick={() => toggleDetails(index)} className=' backdrop-blur-xl backdrop-brightness-150 rounded-full py-2 px-3 font-bold text-sm absolute top-3 right-1 z-[100]'>View Details</button>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Problem;