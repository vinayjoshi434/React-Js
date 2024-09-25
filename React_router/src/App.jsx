//import { useState } from 'react'

import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import Home from './Components/Home/home'
import { Outlet } from 'react-router-dom'



function App() {
return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
