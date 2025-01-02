import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Sections from './Sections.jsx';
import './style.css'
import { AiFillFacebook, AiFillTikTok } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const About = () => {
  const [count, setCount] = useState(false)


  return (
    <div className='scroll-mt-32 text-center flex flex-col items-center mt-32 mb-32 md:gap-8 px-7 ' id='About'>
      <Sections title={'About Me'} subtitle={'Who Madaale?'} desc={"Tirada Shaqooyin ee aan ku guuleystay in aan ku jiray Freelancingka iyo Tutoring iyo introduction yar oo igu saabsan"} />
      <h1 className='font-semibold md:text-5xl text-3xl font-mono'>Eng Mohamed Dek</h1>
      <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
        <div id="services" class="w-full md:text-center text-left md:px-[20%] mt-5 text text-[16px] font-normal">
          Waxaan ahay arday bartay IT-skills ku nool Magaaladda Muqdisho, Waxaan bilaabay barashada IT-ka june, 2023. Anigoo aad u xiisanaya siinaya ahmiyad weyn siiyay. Maanan joojin barashada IT-ka ilaa aan ka go'aan saday inaan ku shaqeeyo oo aan ku guuleystay qeybteydii ugu horeysay ee Graphic Design kadibna waxaan Aasaasay Hirkaab Academy Dec, 2023 oo laga barto xirfadaha kala graphic design, video editing, web design iyo web development, Waxaan sidoo kale la shaqeeyaa <a href="https://gellebashir.com/course-category/development/" className='text-blue-600'>Gellebashir Academy</a> iyo <a href="https://baroxirfad.com/?s=Eng+Mohamed+Dek&post_type=courses" className='text-blue-600'>Baroxirfad</a> oo aan ka bixiyo Fullstack Web Development Courses. To See More Visit My Social Media Platforms 👇.
        </div>
        <div className="flex justify-center gap-6 text-3xl mt-10 mb-10">
          <div className="footer-icons-container">
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCBtmnKhFLJSmzSHZ9eIjDtw"
            >
              <IoLogoYoutube title="Visit Out Channel" className="youtube" />
            </a>
          </div>
          <div className="footer-icons-container">
            <a
              href="https://github.com/Eng-Mohamed-Dek"
              target="_blank"
            >
              <FaGithub title="Get Source Code" />
            </a>
          </div>
          <div className="footer-icons-container">
            <a target="_blank" href="https://www.tiktok.com/@hirkaabacademy?_t=8pDu0sdHYYQ&_r=1">
              <AiFillTikTok />
            </a>
          </div>
          <div className="footer-icons-container">
            <a target="_blank" href="https://www.facebook.com/share/2dR9pqhvcKE4QH2p/?mibextid=qi2Omg">
              <AiFillFacebook
                title="Visit Out Tiktok Page"
                className="facebook"
              />
            </a>
          </div>
        </div>
      </ScrollTrigger>



      {/* container 
      <h1 className='font-semibold text-2xl font-mono'>Tirada Shaqooyin ee aan ku guuleystay in aan ku jiray Freelancingka iyo Tutoring</h1>
      <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
        <div id="services" class="w-[96%] ml-56 md:px-[10%]">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-6">
            <div class="border border-gray-500 rounded-lg px-8 py-10 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:-translate-y-1 duration-500 text-center">
              <h3 class="text-6xl text-gray-700 font-bold mb-5">
                <p>{count && <CountUp start={0} end={5000} duration={2} delay={0} />}
                  <span>+</span></p>
              </h3>
              <p class="text-sm text-gray-600">Waxaa isuu gashay inaan aqoondeeda la wadaago in ka baddan 5,000 arday oo igala socda Facebook iyo Youtube sidoo kale Tiktok oo aan 2023 aad aynu wadnay.</p>
            </div>
            <div class="border border-gray-500 rounded-lg px-8 py-10 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:-translate-y-1 duration-500 text-center">
              <h3 class="text-6xl text-gray-700 font-bold mb-5">
                <p>{count && <CountUp start={0} end={50} duration={2} delay={0} />}
                  <span>+</span></p>
              </h3>
              <p class="text-sm text-gray-600">Waxaa si gaar ah u dawabaray in ka baddan 50 arday oo aan baray graphic design, video editing, web design iyo web development</p>
            </div>
            <div class="border border-gray-500 rounded-lg px-8 py-10 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:-translate-y-1 duration-500 text-center">
              <h3 class="text-6xl text-gray-700 font-bold mb-5">
                <p>{count && <CountUp start={0} end={20} duration={2} delay={0} />}
                  <span>+</span></p>
              </h3>
              <p class="text-sm text-gray-600">Muddadii aan ku jiray barida xirfadaha IT-ka waxa isuu gashay inaan diyaariya 21 Course oo xirfadaha sida graphic design, video editing, web design iyo web development</p>
            </div>
          </div>
        </div>
      </ScrollTrigger>
       */}
      <h1 className='font-semibold text-2xl font-mono'>Xirfadaha aan u diyaarsanahay inaan ku shaqeeyo</h1>
      <div id="services" class="w-full md:px-[10%]">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-6">
          <div
            class="border border-gray-500 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:-translate-y-1 duration-500">
            <img src="/web-icon.png" class="w-12 mb-5" />
            <h3 class="text-2xl text-gray-700 font-bold mb-5 text-left">Web Design</h3>
            <p class="text-sm text-gray-600">Design websites which for personal purpose and For Companies</p>
          </div>
          <div
            class="border border-gray-500 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:-translate-y-1 duration-500">
            <img src="/web-icon.png" class="w-12 mb-5" />
            <h3 class="text-2xl text-gray-700 font-bold mb-5 text-left">Development</h3>
            <p class="text-sm text-gray-600">Developing websites which for personal purpose and For Companies</p>
          </div>
          <div
            class="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:-translate-y-1 duration-500">
            <img src="/ui-icon.png" alt="icon" class="w-10 mb-5" />
            <h3 class="text-2xl my-4 text-gray-700 font-bold text-left">UI / UX Design</h3>
            <p class="text-sm text-gray-600 leading-5">Design the Web interface that charming to look.</p>
          </div>
          <div
            class="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:-translate-y-1 duration-500">
            <img src="/graphics-icon.png" alt="icon" class="w-10 mb-5" />
            <h3 class="text-2xl my-4 text-gray-700 font-bold">Graphic Design</h3>
            <p class="text-sm text-gray-600 leading-5">Making Logo Design, Poster Design and More.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
