import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen bg-cover bg-center overflow-hidden flex justify-center items-center' style={{ background: "url('image.jpg')" }}>
      <Navbar />
      <a href="./all certificates.pdf" download
      class="absolute top-10 right-20 px-5 flex items-center gap-4 py-3 rounded-full border border-gray-500">Certificates<img
        src="/download-icon.png" class="w-4" /></a>
      {/* header style */}
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 font-semibold'>
        <h1 className="text-3xl sm:text-6xl leading-relaxed md:text-[80px] max-w-4xl inline-block font-semibold text-[#002840]"> <span className='font-extralight'>Explore </span>My Coding Journey and <span className='font-extralight'>Let Me Join</span></h1>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-2 mt-24'>
          <a
            href="https://api.whatsapp.com/send?phone=0614459166&text=Madaale"
            target="_blank">
            <button
              class="flex items-center gap-2 bg-[#00CD8E] text-white px-10 py-3 rounded-full"> Hire
              Me
              <img src="/arrow-icon-dark.png" class="w-4" /></button>
          </a>
          <a href="./CV.pdf" download
            class="flex items-center gap-2 px-10 py-3 rounded-full border border-gray-500">Download CV <img
              src="/download-icon.png" class="w-4" /></a>
        </div>
      </div>
    </div>
  )
}

export default Header