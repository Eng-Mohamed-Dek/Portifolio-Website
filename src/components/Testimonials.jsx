import React from 'react'
import Sections from './Sections'
import Testimonial from '../Testimonials.json'

const Testimonials = () => {

    return (
        <div className='md:w-[96%] mx-auto scroll-mt-32  flex flex-col items-center mt-32 mb-56 md:gap-8 px-7' id='Testimnials'>
            <Sections title={'My Students'} subtitle={'Saying'} desc={"Qaar kamid ardaydii aan usoo dhigay Web Development"}/>
            <div className='flex flex-wrap justify-center gap-8 mt-8'>
                {Testimonial.map((testimonial) => (
                    <div className='max-w-[420px] border shadow-lg rounded-lg px-8 py-12'>
                        <h1 className='text-2xl text-center text-gray-600 font-medium'>{testimonial.name}</h1>
                        <p className='text-center text-gray-500 mb-4 text-sm mt-2'>{testimonial.title}</p>
                        <p className='text-center text-gray-700 mb-4'>{testimonial.oraahda}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials