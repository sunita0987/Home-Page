import React from 'react'
import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Slider from './components/Slider'
import Switch from './components/Switch'
import Footer from './components/Footer'
import Compare from './components/Compare'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Hero/>
  <Slider/>
  <Switch/>
  <Compare/>
  <Footer/>
    </>
    )
}

export default App
