import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3dCard.tsx'

const MushroomCards = ({cards}) => {

  return (
    <div className='lg:flex sm:gap-3' >
      {cards.map((card, index) => {
        return (
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white baloo-tamma-2-bal"
              >
                {card.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 baloo-tamma-2-balight text-left"
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
                 
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Market Price →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  {card.pricePerKg}
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