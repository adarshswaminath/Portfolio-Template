import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div className='p-3'>
        <nav className='flex justify-between'>
            <div className="log justify-start">
                <h1 className='text-3xl text-gray-700 font-bold'>Ada.</h1>
            </div>
            <div className="py-2 flex gap-3 justify-center font-semibold">
                <Link to="/" className='hover:text-yellow-300'>Home</Link>
                <Link to="/service" className='hover:text-yellow-300'>Service</Link>
                <Link to="/projects" className='hover:text-yellow-300'>Projects</Link>
            </div>
            <div className='justify-end'>
                <button className='px-4 py-2 rounded-full bg-yellow-300 font-medium border text-black hover:border-yellow-300 hover:bg-white '>Resume</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar