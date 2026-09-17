import React from 'react'
import { NavLink, Outlet } from 'react-router'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-50 text-gray-900 font-sans'>
      <header className='bg-gray-900 text-white shadow-md py-3'>
        <nav className='flex gap-4 container px-4 mx-auto text-gray-300'>
          <NavLink to="/" className={({isActive}) => isActive ? "underline text-blue-200 hover:text-blue-300 active:text-blue-400 transition" : "hover:text-blue-300 active:text-blue-400 transition"}>Home</NavLink>
          <NavLink to="/posts" className={({isActive}) => isActive ? "underline text-blue-200 hover:text-blue-300 active:text-blue-400 transition" : "hover:text-blue-300 active:text-blue-400 transition"}>Posts</NavLink>
        </nav>
      </header>
      <main className='container mx-auto px-4 py-8'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
