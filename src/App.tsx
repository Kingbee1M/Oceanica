import NavBar from './components/Layouts/NavBar'
import Discover from './components/UI/Discover'
import Choices from './components/UI/Choices'
import ChoicesLg from './components/UI/ChoicesLg'
import Testimonials from './components/UI/Testimonials'
import TestimonialsLG from './components/UI/TestimonialsLG'
import Footer from './components/Layouts/Footer'
import './App.css'

function App() {


  return (
    <div className='flex flex-col justify-center items-center gap-0'>
      <NavBar />
      <Discover />
      <Choices />
      <ChoicesLg />
      <div className="w-full flex flex-col justify-center items-center bg-[url('/images/black-beach.jpg')] bg-cover bg-center pb-20">
      <Testimonials />
      <TestimonialsLG />        
      </div>
      <Footer />
    </div>
  )
}

export default App
