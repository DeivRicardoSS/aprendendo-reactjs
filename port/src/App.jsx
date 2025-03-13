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

import { BrowserRouter , Route, Switch } from "react-router-dom";

import { Principal } from './screens/Principal';
import { Detalhes } from './screens/Detalhes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" extract component={Principal}/>
        <Route path="/detalhes" component={Detalhes}/>
      </Switch>    
    </BrowserRouter>
  )
}

export default App

{/* <Header/>
      <Home/>
      <Sobre/>
      <Projetos/>
      <Habilidades/>
      <Footer/> */}
