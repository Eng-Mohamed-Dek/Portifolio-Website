import Sections from './Sections'
import './style.css'

export const Bollons = () => {

  return (
    <div className='container mx-auto py-44 w-full overflow-hidden scroll-mt-32 px-5 text-center' id='Projects'>
      <Sections title={'Tech'} subtitle={'Tools'} desc={"Qaar kamid Tools aan istimaalo Coding iyo Web Design."} />
      <div className="banner_container">
        <div className="banner__wrapper">
          <img src="./vscode.png" alt="banner" className='images'/>
          <img src="./baner_1.jpg" alt="banner" />
          <img src="./baner_2.jpg" alt="banner" />
          <img src="./baner_3.jpg" alt="banner" />
          <img src="./baner_4.jpg" alt="banner" />
          <img src="./firebase.png" alt="banner" className='images'/>
          <img src="./baner_5.jpg" alt="banner" />
          <img src="./baner_6.jpg" alt="banner" />
          <img src="./baner_7.jpg" alt="banner" />
          <img src="./baner_8.jpg" alt="banner" />
          <img src="./baner_9.jpg" alt="banner" />
        </div>
      </div>
    </div>
  )
}
