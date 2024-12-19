import React from 'react'

const Sections = ({ title, subtitle, desc , icon}) => {
  return (
    <div>
      <h1 className='text-center md:text-4xl text-2xl font-bold mb-5'>{title}<span className='font-light'> {subtitle}</span></h1>
      <p className='text-gray-500 mb-16 text-center w-[55%] mx-auto'>{desc}
      </p>
      <a
        href="https://github.com/Eng-Mohamed-Dek"
        target="_blank"
        className='text-5xl animate-ping'
      >
       {icon}
      </a>

    </div>
  )
}

export default Sections