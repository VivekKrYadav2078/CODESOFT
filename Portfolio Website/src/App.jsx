import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Services from './components/Services/Services'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'


function App() {


  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Services/>
     <MyWork/>
     <Contact/>

     
    </>
  )
}

export default App
