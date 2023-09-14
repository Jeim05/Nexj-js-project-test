'use client'
import React, { useState } from 'react'
import Card from './Card'
import dataAbout from './dataAbout'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faFutbol } from '@fortawesome/free-solid-svg-icons'

library.add(faFutbol, faEnvelope);

const Characteristics = () => {
    const [cardsToShow, setCardsToShow] = useState(3);

    const loadMoreCard = () => {
        setCardsToShow(cardsToShow + 3)
    };

    return (
        <div>
            <div>
                {dataAbout.slice(0, cardsToShow).map((card, index) => (
                    <Card key={index}
                        title={card.title}
                        url={card.url}
                        description={card.description}
                        activity_1={card.activity_1}
                        activity_2={card.activity_2}
                        icon={card.icon} />
                ))}
            </div>
            <div className='text-center text-white'>
            <button onClick={ loadMoreCard} className='bg-black py-4 px-6'>Cargar más</button>
            </div>  
        </div>

    )
}

export default Characteristics
