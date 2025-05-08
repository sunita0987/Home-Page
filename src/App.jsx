import React from 'react'
import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Slider from './components/Slider'
import Switch from './components/Switch'
import Footer from './components/Footer'
import Compare from './components/Compare'
import Choose from './components/Choose'
import TestimonialSlider from './components/TestmonialSlider'
import Faq from './components/Faq'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Hero/>
  <Slider/>
  <Switch/>
  <Compare/>
  <Choose/>
  <TestimonialSlider/>
  <Faq/>
  {/* <Footer/> */}
    </>
    )
}

export default App
