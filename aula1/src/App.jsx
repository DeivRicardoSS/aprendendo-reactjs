import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Button } from './components/Button';
import { Header } from './components/Header';
import styles from "./App.module.css";
import { SideBar } from './components/SideBar';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        <main>

        </main>
      </div>

    </>
  )
}