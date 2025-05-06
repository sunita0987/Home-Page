import React from 'react'
import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Slider from './components/Slider'
import Switch from './components/Switch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Hero/>
  <Slider/>
  <Switch/>
    </>
    )
}

export default App
