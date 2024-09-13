import { useState } from 'react'
import './index.css'
import Header from './Componentes/Componentes/header'
import Intro from './Componentes/Componentes/intro'
import Diagnostico from './Componentes/Componentes/diagnostico'
import Identidad from './Componentes/identidad'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Intro />
      <Diagnostico/>
      <Identidad/>
    
    </>
  )
}

export default App
