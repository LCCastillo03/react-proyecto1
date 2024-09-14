import { useState } from 'react'
import './index.css'
import Header from './Componentes/Componentes/Header'
import Intro from './Componentes/Componentes/Intro'
import Diagnostico from './Componentes/Componentes/Diagnostic'
import Identidad from './Componentes/Componentes/Identidad'
import ObjetivosEstrategicos from './Componentes/Componentes/Objetivos'
import Footer from './Componentes/Componentes/Footer'


function App() {

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
