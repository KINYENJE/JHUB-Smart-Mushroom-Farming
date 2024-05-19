import React from 'react'

function IoT_ML({slides}) {
  return (
    <div>
      {slides.map((slide, index) => (
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
      ))}
    </div>
  )
}

export default IoT_ML