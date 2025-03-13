import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Header } from './components/Header';
import { Home } from './sections/Home';
import { Sobre } from './sections/Sobre';
import { Habilidades } from './sections/Habilidades';
import { Projetos } from './sections/Projetos';
import { Footer } from './sections/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Sobre/>
      <Projetos/>
      <Habilidades/>
      <Footer/>
    </>
  )
}

export default App
