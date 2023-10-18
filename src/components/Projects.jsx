import React from 'react'
import dataProject from './dataProject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHtml5, faCss3Alt, faSquareJs, faWordpress } from '@fortawesome/free-brands-svg-icons'

library.add(faHtml5, faCss3Alt, faSquareJs, faWordpress);

const Projects = () => {
    return (
        <div className='max-w-7xl px-8 md:py-12 mx-auto'>
            <div className='flex flex-wrap justify-center gap-4'>
                {dataProject.map((project, index) => (
                    <div className="max-w-xs bg-cyan-100 py-8 px-4" key={index}>
                        <h1 className='text-black font-bold text-xl'>{project.name}</h1>
                        <p>Aquí va una pequeña descripción del proyecto</p>
                        <div className='py-1'>
                            <ul className='flex gap-4 py-1'>
                                {project.tech.map((tech, index)=> (
                                    <li key={index}  className='text-[#2657A4]'>
                                        <FontAwesomeIcon icon={tech.icon} size='lg' className='h-6' />
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    </div>
                ))
                }
            </div>


        </div>
    )
}

export default Projects