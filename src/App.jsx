import { useState } from 'react'
import './index.css'
import Header from './Componentes/Componentes/header'
import Intro from './Componentes/Componentes/intro'
import Diagnostico from './Componentes/Componentes/diagnostico'
import Identidad from './Componentes/Componentes/identidad'
import ObjetivosEstrategicos from './Componentes/Componentes/objetivos'
import Footer from './Componentes/Componentes/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Intro />
      <Diagnostico/>
      <Identidad/>
      <ObjetivosEstrategicos/>
      <Footer/>
    
    </>
  )
}

export default App
