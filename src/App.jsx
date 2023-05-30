import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Service from './Components/Service'
import Projects from './Components/Projects'

function App() {
  return (
    <div className='bg-gray-100'>
      <Router>
        {/* components */}
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Hero/>}></Route>
            <Route exact path='/service' element={<Service/>}></Route>
            <Route exact path='/projects' element={<Projects/>}></Route>
          </Routes>
      </Router>
    </div>
  )
}

export default App
