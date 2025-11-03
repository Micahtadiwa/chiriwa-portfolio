import React from 'react'
import Hero from './assets/hero'
import About from './assets/about'
import Services from './assets/services'
import Portfolio from './assets/portfolio'
import Contact from './assets/Contact'
import { FaWhatsappSquare } from "react-icons/fa";
import Footer from './Footer/footer'
import './App.css'

const App = () => {
  return (
    <div>
       <a href='https://wa.me/+263779113200' className='whatsapp' target='_blank' rel="noreferrer"><FaWhatsappSquare/></a>
      <div>
        <Hero />
        <About/> 
        <Portfolio/>
        <Services/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App