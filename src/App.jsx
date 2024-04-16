import { useState } from 'react'

import './App.css'
import Header from './components/Commom/Header'

import "./styles/main.scss"
import Highlight from './components/Highlight'
import News from './components/News'

function App() {

  return (
    <>
      <Header />
      <Highlight />
      <News />
    </>
  )
}

export default App
