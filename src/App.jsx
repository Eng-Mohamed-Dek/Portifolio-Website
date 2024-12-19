import './App.css'
import About from './components/About'
import { Bollons } from './components/Bollons'
import Contact from './components/Contact'
import { Courses } from './components/Courses'
import Footer from './components/Footer'
import Header from './components/Header'
import { Second } from './components/Second'
import Testimonials from './components/Testimonials'

function App() {
  return (
     <>
     <Header />
     <About /> 
     <Courses />
     <Second />
     <Bollons />
     <Testimonials />
     <Contact />
     <Footer />
     </>
  )
}

export default App
