import { useState } from 'react'
import './index.css'
import Header from './Componentes/Componentes/header'
import Intro from './Componentes/Componentes/intro'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Intro />
    
    </>
  )
}

export default App
