import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Card = ({ title, url, description, activity_1, activity_2, icon}) => {
    return (
        <div className='flex px-6 py-8 gap-6 mx-auto bg-black my-4'>
            <Image src={url} width={200} height={300} alt={title} />
            <div className='text-white'>
                <h3 className='font-bold text-lg'>{title}</h3>
                <p className='py-2'>{description}</p>
                <p className='py-2'>{activity_1}</p>
                <p className='py-2'><FontAwesomeIcon icon={icon} /> {activity_2}</p>
                
            </div>
        </div>
    )
}

export default Card
