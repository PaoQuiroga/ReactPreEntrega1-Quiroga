import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  const greeting = "Nuestras Propuestas"

  return (
    <>
      <Navbar/>
      <ItemListContainer mensaje={greeting}/>
    </>
       
  )
}

export default App
