import NavBar from './components/Layouts/NavBar'
import Discover from './components/UI/Discover'
import './App.css'

function App() {


  return (
    <div className='flex flex-col justify-center items-center gap-0'>
      <NavBar />
      <Discover />
    </div>
  )
}

export default App
