import { useState } from 'react'
import Header from './assets/header'
import './App.css'
import Footer from './assets/footer'
import Hero from './assets/hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Footer></Footer>
    </>
  )
}

export default App
