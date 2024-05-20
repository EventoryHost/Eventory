import { useState } from 'react'
import './App.css'
import HeroComponent from './components/HeroComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroComponent/>
    </>
  )
}

export default App
