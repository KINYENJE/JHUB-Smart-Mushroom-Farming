import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3dCard.tsx'

const MushroomCards = ({cards}) => {

  return (
    <div className='lg:flex sm:gap-3' >
      {cards.map((card, index) => {
        return (
          <CardContainer className="inter-var">
            <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-rose-500/[0.4] bg-black border-white/[0.2]  w-auto  h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white baloo-tamma-2-bal"
              >
                {card.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className=" text-sm max-w-sm mt-2 text-neutral-400 baloo-tamma-2-balight text-left"
              >
                {card.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={card.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="p"
                 
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                >
                  Market Price →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl  text-black  text-xs font-bold bg-rose-600"
                >
                  {card.pricePerKg} / <span className='text-xs font-bold baloo-tamma-2-bal'>kg</span>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        )
      })}
    </div>
  )
}

export default MushroomCards