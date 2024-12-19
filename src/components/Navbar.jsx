import { useState } from 'react'

const Navbar = () => {

    const [Menu, setMenu] = useState(false)

    return (
        <nav className='absolute top-0 left-0 w-full'>
            {/* laptop view menu  */}
            <div className='flex justify-between items-center container mx-auto py-4 px-5 md:px-20
        lg:px-32'>
                <img src="/logo.png" className='w-24' />
                <ul className='hidden md:flex gap-10 font-semibold text-[#002840]'>
                    <li><a href="#top">Home</a></li>
                    <li><a href="#Projects">Portifolio</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Testimnials">Testimonials</a></li>
                </ul>
                <button className='hidden md:flex bg-[#00CD8E] text-white px-8 py-2 rounded-full cursor-pointer font-normal text-[18px] items-center justify-center'><a href="#Contact">Contact Me</a></button>
                <img className='md:hidden w-7' src='./menu-black.png' onClick={() => setMenu(true)} />
            </div>

            {/* mobile menu */}
            <div className={`mid:hidden ${Menu ? 'fixed w-full' : 'w-0 h-0'} right-0 top-0 bottom-0 bg-white transition duration-500 overflow-hidden`}>
                <div className='flex justify-end p-6'>
                    <img src="./cross_icon.svg" className='mt-6 w-6 cursor-pointer' onClick={() => setMenu(false)} />
                </div>
                <ul className='flex flex-col items-center text-1xl mt-5 px-5 font-medium'>
                    <a href="#About" className='px-4 py-3 inline-block' onClick={() => setMenu(false)}>About</a>
                    <a href="#Projects" className='px-4 py-3 inline-block' onClick={() => setMenu(false)}>Portifolio</a>
                    <a href="#Contact" className='px-4 py-3 inline-block' onClick={() => setMenu(false)}>Contact Me</a>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar