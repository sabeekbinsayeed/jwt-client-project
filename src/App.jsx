import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'


function App() {


  return (
    <div data-theme="light" className='max-w-screen-xl mx-auto'>

      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
