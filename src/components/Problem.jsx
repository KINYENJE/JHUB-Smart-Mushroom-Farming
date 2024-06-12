import React, { useEffect, useRef } from 'react';
import vid1 from "../assets/images/barrel_vid.mp4";
import vid2 from "../assets/images/sprinkling_vid.mp4";
import vid3 from "../assets/images/chat_vid.mp4";
import vid4 from "../assets/images/bags_vid.mp4";
import { LampContainer } from './ui/Lamp';

const Problem = () => {
  const videos = [
    { title: 'Barrel', src: vid1 },
    { title: 'Sprinkling', src: vid2 },
    { title: 'Chat', src: vid3 },
    { title: 'Bags', src: vid4 },

  ];

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
        if (entry.target === videoRefs.current[3].current) {
          if (entry.isIntersecting) {
            entry.target.play();
          } else {
            entry.target.pause();
          }
        }
      });
    }, { threshold: 0.5 });

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

  return (
    <div className='w-full'>
      <h1 className='biryani-light font-thin text-6xl text-white py-4'>
        Problem Statement
      </h1>

      <p className='biryani-extralight text-2xl text-white pt-8 pb-16 opacity-60'>
        To have a better understanding on the particular problem we are trying to solve. <br /> Here is a brief story about a local mushroom farmer called Chege.
      </p>

      <LampContainer>
        <h1 className='biryani-semibold text-4xl text-transparent bg-white bg-clip-text mt-4'>
          "Chege's Story"
        </h1>
        <div className='rounded-lg py-4 px-6 absolute w-full mt-10'>
          <p className='biryani-semibold text-xl text-trueGray-300 pt-8'>
            "Chege is a mushroom farmer in Kiambu County, Kenya. He has been growing mushrooms for the past 5 years, and has been able to support his family through the sales of mushrooms. <br /> <br /> However, Chege has been facing a major challenge in his farm. He has been experiencing a high rate of mushroom spoilage due to the lack of proper storage facilities. This has led to a significant loss in revenue for Chege, as he is unable to sell the spoiled mushrooms. Chege is looking for a solution that will help him reduce the rate of mushroom spoilage in his farm, and increase his revenue."
          </p>
        </div>
      </LampContainer>

      <div className='flex flex-col items-center justify-center py-16'>
        <div className='w-full flex gap-7 overflow-auto horiz-scroll'>
          {videos.map((video, index) => (
            <div className=' rounded-xl  relative '>
              {/** on hover a dark overlay with title at top of video */}
              <div className='bg-black bg-opacity-50 rounded-xl w-full h-full absolute top-0 left-0 flex items-center justify-center'>
                <p className='biryani-semibold text-white text-2xl'>{video.title}</p>
              </div>
              {/** Video container */}
              <div className='xl:w-[300px] 2xl:w-[400px] py-2 '>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Problem;
