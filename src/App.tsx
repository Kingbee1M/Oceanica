import NavBar from './components/Layouts/NavBar'
import Discover from './components/UI/Discover'
import Choices from './components/UI/Choices'
import ChoicesLg from './components/UI/ChoicesLg'
import './App.css'

function App() {


  return (
    <div className='flex flex-col justify-center items-center gap-0'>
      <NavBar />
      <Discover />
      <Choices />
      <ChoicesLg />
    </div>
  )
}

export default App
