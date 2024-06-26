import React from 'react'
import { Meteors } from './ui/Meteors'

function IoT_ML({slides}) {
  return (
    

    <div className="flex  flex-col gap-12 pt-10">
      {slides.map((slide, index) => {
        return (
          <div className=" w-full relative ">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-rose-500/[0.4] to-rose-500/[0.8] transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-black border border-rose-500/[0.1]  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-stone-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-2 w-2 text-stone-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>
    
              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                {slide.name}
              </h1>
    
              <p className="font-normal text-base text-stone-400 mb-4 relative z-50 text-left">
                {slide.description}
              </p>
    
              <div className='flex sm:flex-row flex-col gap-5 lg:gap-10 pt-8'>
                <div className="flex flex-col gap-4 lg:gap-8 px-2 justify-center">
                  {slide.subArray.map((sub, index) => (
                    <div key={index} className="flex pl-3 text-sm">
                      
                      <ul>
                        <li className="list-disc text-stone-400 font-bold text-left">
                          {sub.title}:{" "}
                          <span className="font-normal text-xs pl-1 text-stone-100">
                            {sub.details}
                          </span>
                        </li>
                      </ul>
                      
                    </div>
                  ))}
                </div>
                {/* Image */ }
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500/[0.4] to-rose-500/[0.8] transform scale-[0.9] bg-red-500 rounded-full blur-3xl z-0" />
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="relative object-cover object-center h-[350px] sm:w-[500px] w-[300px] 2xl:w-[700px]  rounded-lg z-10"
                  />
                </div>
              </div>
    
              {/* Meaty part - Meteor effect */}
              <Meteors number={10} />
            </div>
          </div>
        )
      })}

      {/* {slides.map((slide, index) => (
        <div key={index} className={`flex max-sm:flex-col  ${(slide.name === "Machine Learning" ? "flex-row-reverse sm:h-[540px]  2xl:h-[480px] border-r-4 border-success" : " sm:h-[500px] 2xl:h-[440px] border-l-4 border-success")}  w-full my-16 rounded-lg border`}>
          <div className='w-full sm:w-1/2 flex flex-col gap-3 py-4 px-10'>
           <div className='h-1/2'>
            <h3 className='text-2xl border-b-4 border-success'>{slide.name}</h3>
            <p className='text-left font-semibold text-warmGray-700 mt-1 text-sm'>{slide.description}</p>
           </div>

           {slide.subArray.map((sub, index) => (
            <div key={index} className='h-1/2 text-sm px-10'>
              <ul>
                <li className="list-disc font-bold text-left">{sub.title}: <span className='font-medium text-xs pl-1 '>{sub.details}</span> </li>
              </ul>
            </div>
          
           ))}
          </div>
          <div className='w-full sm:w-1/2 '>
            <img src={slide.image} alt={slide.name} className={`${(slide.name === "Machine Learning" ? "rounded-r-none" : "rounded-l-none ")} object-cover  object-center h-full w-full rounded-lg`} />
          </div>
        </div>
      ))} */}
      
    </div>
  )
}

export default IoT_ML