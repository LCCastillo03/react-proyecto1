import { useState } from 'react'
import './index.css'
import Header from './Componentes/Componentes/HeaderMod'
import Intro from './Componentes/Componentes/IntroMod'
import Diagnostico from './Componentes/Componentes/DiagnosticoMod'
import Identidad from './Componentes/Componentes/IdentidadMod'
import ObjetivosEstrategicos from './Componentes/Componentes/ObjetivosMod'
import Footer from './Componentes/Componentes/FooterMod'


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
