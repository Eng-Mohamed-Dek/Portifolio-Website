import React, { useEffect, useState } from 'react'
import {  projectsData } from '../assets'
import Sections from './Sections'
import { FaGithub } from 'react-icons/fa'

export const Courses = () => {
  const [currentImage, setCurrentImage ] = useState(0)
  const [cardsToShow, setCardsToShow ] = useState(1)

  const nextImages = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % projectsData.length)
  }

  const prevImages = () => {
    setCurrentImage((prevImage) => prevImage === 0 ? projectsData.length - 1 : prevImage - 1)
  }

  useEffect(() => {
    const updateCards = () => {
      if(window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length)
      } else {
        setCardsToShow(1)
      }
    }

    updateCards()
    window.addEventListener('resize', updateCards)
    return () => window.removeEventListener('resize', updateCards)
  })

  return (
    <div className='container px-[4%] mx-auto py-44 w-full overflow-hidden scroll-mt-32 text-center' id='Projects'>
            <Sections title={'Completed'} subtitle={'Courses'} desc={"Courses aan diyaariyay ee aan ka bixiyay baroxirfad. Course Walba Introdcution Projects si Video ah halka Projectiyadeeda kale aad kale helaysaan Github Profilekeyga"} icon={<FaGithub title="Get Source Code" />}/>
           
             {/* scroller buttons */}
             <div className='flex justify-end mb-10'>
                <button className='p-3 bg-gray-200 rounded mr-2'>
                     <img src='left_arrow.svg' className='w-3' onClick={prevImages}/>
                </button>
                <button className='p-3 bg-gray-200 rounded mr-2'>
                     <img src="right_arrow.svg" className='w-3' onClick={nextImages}/>
                </button>
             </div>

             {/* scroller images */}
             <div className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out'
                style={{transform: `translateX(-${(currentImage * 100) / cardsToShow }%)`}}
                >
                    {projectsData.map((project) => (
                      <div className='flex-shrink-0 w-full sm:w-1/3 relative'>
                         <img src={project.image} />
                         <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                             <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-lg">
                                  <h2 className='text-xl font-semibold text-gray-700'>{project.title}</h2>
                                  <p className='text-gray-500 text-sm'>
                                  {project.get}
                                  <span> | </span><a target="_blank" className='text-blue-500' href={`${project.location}`}>see course</a></p>
                             </div>
                         </div>
                      </div>
                    ))}
                </div>
             </div>
    </div>
  )
}
